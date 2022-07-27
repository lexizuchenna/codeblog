import SmallPost from "../components/Posts/SmallPost";
import { images } from "../assets/index";
import Navbar from "../components/Navbar";

function Business() {
  return (
    <>
      <Navbar />
      <div className="container">
        <section className="health">
          <h3>Business</h3>
          <div className="health-grid">
            <SmallPost
              imgSource={images.image6}
              category={"Business"}
              createdAt={"March, 2019"}
              link={"/"}
              linkText={
                "Why boxed water isnt the best solution they want you to think it is"
              }
              author={"Kris Media"}
            />
            <SmallPost
              imgSource={images.image9}
              category={"Business"}
              createdAt={"March, 2018"}
              link={"/"}
              linkText={"Childhood survivors and later health researches"}
              author={"Kris Media"}
            />
            <SmallPost
              imgSource={images.image11}
              category={"Business"}
              createdAt={"March, 2019"}
              link={"/"}
              linkText={
                "Why boxed water isnt the best solution they want you to think it is"
              }
              author={"Kris Media"}
            />
            <SmallPost
              imgSource={images.image2}
              category={"Business"}
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

export default Business;
