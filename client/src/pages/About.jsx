import Navbar from "../components/Navbar";
import { images } from "../assets/index";

function About() {
  return (
    <>
      <Navbar />
      <div className="container post about">
        <div className="post-head">
          <h1 className="heading">About CodeBlog</h1>
          <div className="image-box large">
            <figure>
              <img src={images.image8} alt="" />
            </figure>
          </div>
        </div>
        <div className="post-body about-body">
          <div className="post-text about-text">
            <h2>We bring you curated selection of stories we strongly love</h2>
            <p className="text">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Fusce id purus. Cras sagittis. Fusce ac
              felis sit amet ligula pharetra condimentum. Quisque ut nisi. In
              turpis.Fusce neque.
              <br /> <br />
              Nullam sagittis. Vestibulum rutrum, mi nec elementum vehicula,
              eros quam gravida nisl, id fringilla neque ante vel mi.
              Pellentesque libero tortor, tincidunt et, tincidunt eget, semper
              nec, quam. Nullam nulla eros, ultricies sit amet, nonummy id,
              imperdiet feugiat, pede.Fusce neque. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. Proin faucibus arcu quis
              ante. Ut varius tincidunt libero. Nulla neque dolor, sagittis
              eget, iaculis quis, molestie non, velit.
            </p>
            <div className="link-button">
              <a href="/contact" className="btn">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
