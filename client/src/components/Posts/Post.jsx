import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import parse from "html-react-parser";

import { getSinglePost, getAllPosts, reset } from "../../feautres/post/postSlice";

import Navbar from "../Navbar";
import SmallPost from "./SmallPost";

function Post() {
  const { linkText } = useParams();
  const dispatch = useDispatch();
  const { post, posts, isLoading } = useSelector((state) => state.post);
  const [singlePost, setSinglePost] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    dispatch(getAllPosts());
    posts.map((newposts) => {
      return setAllPosts(newposts);
    });
    return () => {
      reset();
    };
  }, [posts, dispatch]);

  useEffect(() => {
    dispatch(getSinglePost(linkText));
    post.map((newpost) => {
      return setSinglePost(newpost[0]);
    });
    return () => {
      reset();
    };
  }, [post, dispatch, linkText]);

  if (post.length === 0) return null;

  const relatedPost = allPosts.filter((x) => x.category === singlePost.category && x.title !== singlePost.title)
  // if(!singlePost.title) {
  //   return (
  //     <div className="container">
  //       <p className="text">Not Post found</p>
  //     </div>
  //   )
  // }

  // if (isLoading) {
  //   return (
  //   <>
  //   <div className="container">
  //     nothing
  //   </div>
  //   </>);
  // }

  return (
    <>
      <Navbar />
      {!singlePost ? (
        <div className="container">
          <p className="text">
            Sorry, No Post Found
          </p>
        </div>
      ) : (
        <div className="container post">
        <div className="post-head">
          <h1 className="heading">{singlePost.title}</h1>
          <div className="image-box large">
            <figure>
              <img src={singlePost.imageOne} alt={singlePost.title} />
            </figure>
            <div className="image-items">
              <data className="category">{singlePost.category}</data>
              <data className="date">
                {moment(singlePost.createdAt).fromNow()}{" "}
              </data>
            </div>
          </div>
        </div>
        <div className="post-body">
          <div className="post-text">
            {singlePost.messageOne !== undefined && (
              <article style={{ margin: "20px 0" }}>
                <p className="text">{parse(singlePost.messageOne)}</p>
              </article>
            )}
          </div>
          <div className="quote-box">
            <blockquote>“{singlePost.quote}”</blockquote>
          </div>
          <div className="image-box small">
            <figure>
              <img src={singlePost.imageTwo} alt={singlePost.title} />
            </figure>
          </div>
          <div className="post-text">
            {singlePost.messageTwo !== undefined && (
              <article style={{ margin: "20px 0" }}>
                <p className="text">{parse(singlePost.messageTwo)}</p>
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
            {relatedPost && relatedPost.map((post) => (
              <SmallPost
              key={post._id}
              imgSource={post.imageOne}
              category={post.category}
              createdAt={moment(post.createdAt).fromNow()}
              link={`/posts/${post.linkText}`}
              linkText={post.title}
              author={post.author.toUpperCase()}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Post;
