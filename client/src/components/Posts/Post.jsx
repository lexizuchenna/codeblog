import Navbar from "../Navbar";

import SmallPost from "./SmallPost";
import { images } from "../../assets/index";

function Post() {
  return (
    <>
      <Navbar />
      <div className="container post">
        <div className="post-head">
          <h1 className="heading">
            Democracy’s chief executive: Interpreting the constitution and
            defining the future
          </h1>
          <div className="image-box large">
            <figure>
              <img src={images.image8} alt="" />
            </figure>
            <div className="image-items">
              <data className="category">Design</data>
              <data className="date">June, 2003</data>
            </div>
          </div>
        </div>
        <div className="post-body">
          <div className="post-text">
            <h2>First impressions</h2>
            <p className="text">
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
              libero, sit amet adipiscing sem neque sed ipsum. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos hymenaeos. Donec mi odio, faucibus at, scelerisque quis,
              convallis in, nisi. Curabitur ullamcorper ultricies nisi. Nam eget
              dui.
              <br /> <br />
              Aenean viverra rhoncus pede. Phasellus volutpat, metus eget
              egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut
              lacus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
              ac, enim. Suspendisse potenti. In turpis. Praesent congue erat at
              massa. Aenean massa. Sed cursus turpis vitae tortor. Cras non
              dolor. Suspendisse enim turpis, dictum sed iaculis condimentum nec
              nisi.
            </p>

            <h2>Second impressions</h2>
            <p className="text">
              Cras sagittis. Nam at tortor in tellus interdum sagittis. Vivamus
              quis mi. Etiam rhoncus. Sed a libero.
              <br /> <br />
              Pellentesque egestas, neque sit amet convallis pulvinar, justo
              nulla eleifend augue, ac auctor orci leo non est. Nam pretium
              turpis et arcu. Phasellus nec sem in justo pellentesque facilisis.
              Sed libero. Aliquam lobortis.
            </p>
          </div>
          <div className="quote-box">
            <blockquote >
              “User engagement and experience has become a major focus for any
              web-based service in recent years”
            </blockquote>
          </div>
          <div className="image-box small">
            <figure>
              <img src={images.image6} alt="" />
            </figure>
          </div>
          <div className="post-text">
            <h2>A perfect fit</h2>
            <p className="text">
              Praesent nonummy mi in odio. Aliquam lorem ante, dapibus in,
              viverra quis, feugiat a, tellus. Nulla porta dolor. Integer ante
              arcu, accumsan a, consectetuer eget, posuere ut, mauris. In hac
              habitasse platea dictumst.
              <br /> <br />
              Praesent ac massa at ligula laoreet iaculis. Etiam ultricies nisi
              vel augue. Quisque malesuada placerat nisl. Nulla neque dolor,
              sagittis eget, iaculis quis, molestie non, velit. Duis lobortis
              massa imperdiet quam.
            </p>

            <h2>Quality</h2>
            <p className="text">
              Suspendisse feugiat. Maecenas tempus, tellus eget condimentum
              rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed
              ipsum. Sed libero. In hac habitasse platea dictumst. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas.
              <br /> <br />
              Nunc sed turpis. Vestibulum rutrum, mi nec elementum vehicula,
              eros quam gravida nisl, id fringilla neque ante vel mi. Proin
              pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed
              gravida augue augue mollis justo. Curabitur turpis. Nam at tortor
              in tellus interdum sagittis.
              <br /> <br />
              Proin pretium, leo ac pellentesque mollis, felis nunc ultrices
              eros, sed gravida augue augue mollis justo. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Proin magna.
              Curabitur a felis in nunc fringilla tristique. Curabitur suscipit
              suscipit tellus.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
      <section className="health">
          <h3>Related</h3>
          <div className="health-grid">
            <SmallPost
              imgSource={images.image6}
              category={"Health"}
              createdAt={"March, 2019"}
              link={"/"}
              linkText={
                "Why boxed water isnt the best solution they want you to think it is"
              }
              author={"Kris Media"}
            />
            <SmallPost
              imgSource={images.image9}
              category={"Health"}
              createdAt={"March, 2018"}
              link={"/"}
              linkText={"Childhood survivors and later health researches"}
              author={"Kris Media"}
            />
            <SmallPost
              imgSource={images.image11}
              category={"Health"}
              createdAt={"March, 2019"}
              link={"/"}
              linkText={
                "Why boxed water isnt the best solution they want you to think it is"
              }
              author={"Kris Media"}
            />
            <SmallPost
              imgSource={images.image2}
              category={"Health"}
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

export default Post;
