import { images } from "../assets/index";

function Contacts() {
  return (
    <>
      <div className="container">
        <div className="contact-flex">
          <div className="contact-details">
            <h1>Contact</h1>
            <p>We're looking for each other</p>

            <div className="address">
              <h3>Address</h3>
              <p>
                Mainland, Abakaliki Exp Rd <br />
                24 Bank Street, Emene, Enugu
              </p>
            </div>

            <div className="info">
              <h3>Info</h3>
              <a href="mailto:lextechspec@gmail.com">lextechspec@gmail.com</a>
              <a href="tel:+2349039615758">+234 903 961 5758</a>
            </div>
          </div>
          <div className="contact-image">
            <img src={images.contact} alt="" />
          </div>
        </div>
        <hr />
        <div className="contact-form">
          <h2>Write to us</h2>
          <form action="">
            <div className="form-group">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contacts;
