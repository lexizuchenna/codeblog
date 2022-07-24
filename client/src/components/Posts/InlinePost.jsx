

function InlinePost({ category, createdAt, link, linkText }) {
  return (
    <div className="inline-post">
      <h2>
        <a href={link}>{linkText}</a>
      </h2>
      <div className="image-box">
        <data role="category" className="category">
          {category}
        </data>
        <data className="date">{createdAt}</data>
      </div>
    </div>
  );
}

export default InlinePost;
