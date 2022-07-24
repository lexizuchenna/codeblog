function SmallPost({ imgSource, category, createdAt, link, author, linkText }) {
  return (
    <div className="small-post">
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
      <small>
        By <span className="author">{author}</span>
      </small>
    </div>
  );
}

export default SmallPost;
