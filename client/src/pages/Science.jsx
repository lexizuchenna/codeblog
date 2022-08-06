import {useEffect, useState} from "react";
import  {useSelector, useDispatch} from 'react-redux'
import moment from 'moment'
import {getPostByCategory, reset} from '../feautres/post/postSlice'


import SmallPost from "../components/Posts/SmallPost";
import Navbar from "../components/Navbar";

function Science() {
    const dispatch = useDispatch()
  const {posts} = useSelector((state) => state.post)

  const [Feed, setFeed] = useState([])

  useEffect(() => {
   dispatch(getPostByCategory('Science'))
   posts.map((post) => {
     return setFeed(post)
   })
   console.log(posts)
   return () => {
     reset() 
   }
  }, [dispatch, posts])
  return (
    <>
      <Navbar />
      <div className="container">
        <section className="health">
          <h3>Science</h3>
          <div className="health-grid">
            {Feed.map((post) => (
              <SmallPost
              key={post._id}
              imgSource={post.imageOne}
              category={post.category}
              createdAt={moment(post.createdAt).fromNow()}
              link={`posts/${post.linkText}`}
              linkText={post.title
              }
              author={post.author.toUpperCase()}
            />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Science