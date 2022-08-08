import moment from 'moment'
import {useEffect} from "react";
import  {useSelector, useDispatch} from 'react-redux'
import {Helmet} from 'react-helmet'

import {getAllPosts, reset} from '../feautres/post/postSlice'
import Navbar from "../components/Navbar";
import LargePost from "../components/Posts/LargePost";
import SmallPost from "../components/Posts/SmallPost";
import InlinePost from "../components/Posts/InlinePost";


function Home() {

  const dispatch = useDispatch()
  const {posts} = useSelector((state) => state.post)

  useEffect(() => {
    dispatch(getAllPosts())
    return () => {
      reset()
    }
  }, [])

  return (
    <>
    <Helmet>
        <title>{`CodeBlog | Home`}</title>
        <link rel="canonical" href="https://lexizcodeblog.herokuapp.com" />
      </Helmet>
      <Navbar />
      <div className="container">
        <div className="grid-container">
          <main className="main">
            {posts ? (
              <LargePost
              imgSource={posts[0]?.imageOne}
              category={posts[0]?.category}
              createdAt={moment(posts[0]?.createdAt).fromNow()}
              link={`/posts/${posts[0]?.linkText}`}
              content={
                posts[0]?.header
              }
              author={posts[0]?.author.toUpperCase()}
              linkText={
                posts[0]?.title
              }
            />
            ) : (<div>Loading Posts...</div>)}
          </main>
          <aside className="aside">
            <div className="left-side">
            {posts && posts.slice(1, 3).map((post) => (
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
            <div className="right-side">
              <h3>Business</h3> 
              {posts && posts.filter((x) => x.category === 'Business').slice(0, 6).map((post) => (
                <InlinePost
                  key={post._id}
                  category={post.category}
                  createdAt={post.createdAt}
                  link={`posts/${post.linkText}`}
                  linkText={post.title}
                />
              ))}
            </div>
          </aside>
        </div>
        <section className="health">
          <h3>Health</h3>
          <div className="health-grid">
          {posts && posts.filter((x) => x.category === 'Health').slice(0, 8).map((post) => (
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
        <section className="politics">
          <h3>Politics</h3>
          <div className="politics-grid">
            <div className="left-pol">
            {posts && posts.filter((x) => x.category === 'Politics').slice(1, 5).map((post) => (
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
            <div className="right-pol">
            {posts && posts.filter((x) => x.category === 'Politics').slice(0, 1).map((post) => (
              <LargePost
              key={post._id}
              imgSource={post.imageOne}
              category={post.category}
              createdAt={moment(post.createdAt).fromNow()}
              link={`/posts/${post.linkText}`}
              content={
                post.header
              }
              author={post.author.toUpperCase()}
              linkText={
                post.title
              }
            />
            ))}
            </div> 
          </div>
        </section>
        <section className="advert">
          <div>
            <h4>
              <span className="icon">C</span> ADVERT WITH CODEBLOG
            </h4>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
