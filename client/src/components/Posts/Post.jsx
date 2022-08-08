import moment from "moment";
import parse from "html-react-parser";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {Helmet} from 'react-helmet'

import { getSinglePost, getAllPosts, reset } from "../../feautres/post/postSlice";
import Navbar from "../Navbar";
import SmallPost from "./SmallPost";

function Post() {
  const { linkText } = useParams();
  const dispatch = useDispatch();
  const { post, posts, isLoading } = useSelector((state) => state.post);


  useEffect(() => {
    dispatch(getAllPosts());
    return () => {
      reset();
    };
  }, []);

  
  useEffect(() => {
    dispatch(getSinglePost(linkText));
    return () => {
      reset();
    };
  }, []);

  if (isLoading) {
    return (
    <>
    <div className="container">
      Loading Post...
    </div>
    </>);
  }

  return (
    <>
      <Helmet>
        <title>{`CodeBlog | ${post[0]?.title}`}</title>
        <link rel="canonical" href="https://lexizcodeblog.herokuapp.com" />
      </Helmet>
      <Navbar />
      {!post ? (
        <div className="container">
          <p className="text">
            Sorry, No Post Found
          </p>
        </div>
      ) : (
        <div className="container post">
        <div className="post-head">
          <h1 className="heading">{post[0]?.title}</h1>
          <div className="image-box large">
            <figure>
              <img src={post[0]?.imageOne} alt={post[0]?.title} />
            </figure>
            <div className="image-items">
              <data className="category">{post[0]?.category}</data>
              <data className="date">
                {moment(post[0]?.createdAt).fromNow()}
              </data>
            </div>
          </div>
        </div>
        <div className="post-body">
          <div className="post-text">
            {post[0]?.messageOne !== undefined && (
              <article style={{ margin: "20px 0" }}>
                <p className="text">{parse(post[0]?.messageOne)}</p>
              </article>
            )}
          </div>
          <div className="quote-box">
            <blockquote>“{post[0]?.quote}”</blockquote>
          </div>
          <div className="image-box small">
            <figure>
              <img src={post[0]?.imageTwo} alt={post[0]?.title} />
            </figure>
          </div>
          <div className="post-text">
            {post[0]?.messageTwo !== undefined && (
              <article style={{ margin: "20px 0" }}>
                <p className="text">{parse(post[0]?.messageTwo)}</p>
              </article>
            )}
          </div>
        </div>
      </div>
      )}
      <div className="container">
        <section className="health">
          <h3>Related</h3>
          <div className="health-grid">
            {posts && posts.filter((x) => x.category === post[0].category && x.title !== post[0].title).slice(0,3).map((post) => (
              <SmallPost
              key={post._id}
              imgSource={post.imageOne}
              category={post.category}
              createdAt={moment(post.createdAt).fromNow()}
              link={`/posts/${post.linkText}`}
              linkText={post.title}
              author={post.author.toUpperCase()}
              />
            )) }
          </div>
        </section>
      </div>
    </>
  );
}

export default Post;
