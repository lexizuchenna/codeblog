import React from "react";

import Navbar from "../components/Navbar";
import LargePost from "../components/Posts/LargePost";
import SmallPost from "../components/Posts/SmallPost";
import InlinePost from "../components/Posts/InlinePost";
import { images } from "../assets/index";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="grid-container">
          <main className="main">
            <LargePost
              imgSource={images.image4}
              category={"Design"}
              createdAt={"April, 2022"}
              link={"/"}
              content={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit."
              }
              author={"Michael Bryan"}
              linkText={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur"
              }
            />
          </main>
          <aside className="aside">
            <div className="left-side">
              <SmallPost
                imgSource={images.image1}
                category={"Art"}
                createdAt={"March, 2019"}
                link={"/"}
                linkText={
                  "Why boxed water isnt the best solution they want you to think it is"
                }
                author={"Kris Media"}
              />
              <SmallPost
                imgSource={images.image3}
                category={"Music"}
                createdAt={"Jan, 2019"}
                link={"/"}
                linkText={
                  "Best Way to make Money in 2022"
                }
                author={"Alexander Ukwueze"}
              />
            </div>
            <div className="right-side">
              <h3>Business</h3>
              <InlinePost
                category={"Business"}
                createdAt={"Feb, 1998"}
                link={"/"}
                linkText={
                  "Uber and Lyft are finally available in all of New York State"
                }
              />
              <InlinePost
                category={"Business"}
                createdAt={"Feb, 1998"}
                link={"/"}
                linkText={
                  "Uber and Lyft are finally available in all of New York State"
                }
              />
              <InlinePost
                category={"Business"}
                createdAt={"Feb, 1998"}
                link={"/"}
                linkText={
                  "Uber and Lyft are finally available in all of New York State"
                }
              />
              <InlinePost
                category={"Business"}
                createdAt={"Feb, 1998"}
                link={"/"}
                linkText={
                  "Uber and Lyft are finally available in all of New York State"
                }
              />
              <InlinePost
                category={"Business"}
                createdAt={"Feb, 1998"}
                link={"/"}
                linkText={
                  "Uber and Lyft are finally available in all of New York State"
                }
              />
            </div>
          </aside>
        </div>
        <section className="health">
          <h3>Health</h3>
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
        <section className="politics">
          <h3>Politics</h3>
          <div class="politics-grid">
            <div class="left-pol">
            <SmallPost
              imgSource={images.image10}
              category={"Art"}
              createdAt={"March, 2019"}
              link={"/"}
              linkText={
                "Why boxed water isnt the best solution they want you to think it is"
              }
              author={"Kris Media"}
            />
            <SmallPost
              imgSource={images.image7}
              category={"Health"}
              createdAt={"March, 2018"}
              link={"/"}
              linkText={"Childhood survivors and later health researches"}
              author={"Kris Media"}
            />
            <SmallPost
              imgSource={images.image8}
              category={"Politics"}
              createdAt={"March, 2019"}
              link={"/"}
              linkText={
                "Why boxed water isnt the best solution they want you to think it is"
              }
              author={"Kris Media"}
            />
            <SmallPost
              imgSource={images.image12}
              category={"Politics"}
              createdAt={"March, 2018"}
              link={"/"}
              linkText={"Childhood survivors and later health researches"}
              author={"Kris Media"}
            />
            </div>
            <div class="right-pol">
            <LargePost
              imgSource={images.image5}
              category={"Politics"}
              createdAt={"April, 2022"}
              link={"/"}
              content={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit."
              }
              author={"Michael Bryan"}
              linkText={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur"
              }
            />
            </div>
          </div>
        </section>
        <section className="advert">
          <div>
            <h4>
              <span className="icon">C</span> ADVERT WITH CODEBLOG
            </h4>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
