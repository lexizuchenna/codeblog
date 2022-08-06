import {useEffect, useState} from "react";
import  {useSelector, useDispatch} from 'react-redux'
import moment from 'moment'
import {getAllPosts, reset} from '../feautres/post/postSlice'

import Navbar from "../components/Navbar";
import LargePost from "../components/Posts/LargePost";
import SmallPost from "../components/Posts/SmallPost";
import InlinePost from "../components/Posts/InlinePost";

function Home() {
  const [postFeed, setPostFeed] = useState([])
  const dispatch = useDispatch()
  const {posts, isSuccess} = useSelector((state) => state.post)

  useEffect(() => {
    dispatch(getAllPosts())
    return () => {
      posts.map((post) => {
        return setPostFeed(post)
      })
      reset()
    }
  }, [dispatch, posts])

  const mainFeed = postFeed[0]
  const imageFeed = postFeed.slice(2, 4)

 let business = postFeed.filter((post) => post.category === 'Business')
 let mainPolitics = postFeed.filter((post) => post.category === 'Politics')
 let politics = mainPolitics.slice(1, 4)
 let health = postFeed.filter((post) => post.category === 'Health')
//  let science = postFeed.filter((post) => post.category === 'Science')
  let largePol = mainPolitics.slice(4, 5)
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="grid-container">
          <main className="main">
            <LargePost
              imgSource={mainFeed?.imageOne}
              category={mainFeed?.category}
              createdAt={"April, 2023"}
              link={`/posts/${mainFeed?.linkText}`}
              content={
                mainFeed?.header
              }
              author={mainFeed?.author.toUpperCase()}
              linkText={
                mainFeed?.title
              }
            />
          </main>
          <aside className="aside">
            <div className="left-side">
              {imageFeed.map((post) => (
                <SmallPost
                key={post._id}
                imgSource={post.imageOne}
                category={post.category}
                createdAt={"Jan, 2019"}
                link={`/posts/${post.linkText}`}
                linkText={
                  post.title
                }
                author={post.author}
              />
              ))}
            </div>
            <div className="right-side">
              <h3>Business</h3> 
              {isSuccess && business.map((post, i) => (
                <InlinePost key={post._id} category={post.category}
                createdAt={post.createdAt}
                link={`posts/${post.linkText}`}
                linkText={
                  post.title
                }/>
              ))} 
            </div>
            {/* {isLoading && <div>Loading</div>}
            {!isLoading && message ? <div>Error: {message}</div>: null}
            {!isLoading && posts.length > 0 ? (
              <ul>
                {posts.map((post) => (
                  <li key={post.id}>{post.name}</li>
                ))}
              </ul>
            ): null} */}
          </aside>
        </div>
        <section className="health">
          <h3>Health</h3>
          <div className="health-grid">
            {health.map((post) => (
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
            {politics.map((post) => (
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
            {largePol.map((post) => (
              <LargePost
              imgSource={post.imageOne}
              category={post.category}
              createdAt={moment(post.createdAt).fromNow()}
              link={`/posts/${post.linkText}`}
              content={post.header}
              author={post.author}
              linkText={post.title}
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
