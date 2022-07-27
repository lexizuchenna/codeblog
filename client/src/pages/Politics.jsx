import SmallPost from "../components/Posts/SmallPost";
import { images } from "../assets/index";
import Navbar from "../components/Navbar";

function Politics() {
  return (
    <>
      <Navbar />
      <div className="container">
        <section className="health">
          <h3>Politics</h3>
          <div className="health-grid">
            <SmallPost
              imgSource={images.image6}
              category={"Politics"}
              createdAt={"March, 2019"}
              link={"/"}
              linkText={
                "Why boxed water isnt the best solution they want you to think it is"
              }
              author={"Kris Media"}
            />
            <SmallPost
              imgSource={images.image9}
              category={"Politics"}
              createdAt={"March, 2018"}
              link={"/"}
              linkText={"Childhood survivors and later health researches"}
              author={"Kris Media"}
            />
            <SmallPost
              imgSource={images.image11}
              category={"Politics"}
              createdAt={"March, 2019"}
              link={"/"}
              linkText={
                "Why boxed water isnt the best solution they want you to think it is"
              }
              author={"Kris Media"}
            />
            <SmallPost
              imgSource={images.image2}
              category={"Politics"}
              createdAt={"March, 2018"}
              link={"/"}
              linkText={"Childhood survivors and later health researches"}
              author={"Kris Media"}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Politics;
