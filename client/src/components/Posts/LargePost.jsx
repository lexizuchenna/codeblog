import React from "react";

function LargePost({ imgSource, category, createdAt, link, content, author, linkText }) {
  return (
    <div className="large-post">
      <div className="image-box">
        <figure>
          <img src={imgSource} alt="" />
        </figure>
        <data role="category" className="category">
          {category}
        </data>
        <data className="date">{createdAt}</data>
      </div>
      <h2>
        <a href={link}>{linkText}</a>
      </h2>
      <p datatype="content">{content}</p>
      <small>
        By <span className="author">{author}</span>
      </small>
    </div>
  );
}

export default LargePost;
