import Navbar from "../Navbar";

import {images} from '../../assets/index'

function Post() {
  return (
    <>
      <Navbar />
      <div className="container post">
        <h1 className="heading">
          Democracy’s chief executive: Interpreting the constitution and
          defining the future
        </h1>
        <div className="image-box">
          <figure>
            <img src={images.image8} alt="" />
          </figure>
          <div className="image-items">
            <data className="category">
              Design
            </data>
            <data className="date">
              June, 2003
            </data>
          </div>
        </div>
        <div className="post-text">
          <h2>First impressions</h2>
        </div>
      </div>
    </>
  );
}

export default Post;
