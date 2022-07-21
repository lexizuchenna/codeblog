import React from "react";

import Navbar from "../components/Navbar";
import {images} from '../assets/index'

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div class="grid-container">
          <main class="main">
            <div className="image-box">
              <img src={images.image2} alt="" />
              <p className="category">Design</p>
              <data className="date">APRIL 2, 2022</data>
            </div>
            <h2>
              <a href="">How Art And Culture Can Help Us Rethink Our Time</a>
            </h2>
            <p datatype="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis fugit laboriosam perferendis nulla porro nisi molestiae
              soluta voluptas explicabo?
            </p>
            <small>By MICHAEL KELLER</small>
          </main>
          <aside class="aside">
            <div class="left-side">
              <div>
                <div className="image-box">
                  <img src="" alt="" />
                  <p className="category">Design</p>
                  <data className="date">APRIL 2, 2022</data>
                </div>
                <h2>
                  <a href="">
                    How Art And Culture Can Help Us Rethink Our Time
                  </a>
                </h2>
                <small>By MICHAEL KELLER</small>
              </div>

              <div>
                <div className="image-box">
                  <img src="" alt="" />
                  <p className="category">Design</p>
                  <data className="date">APRIL 2, 2022</data>
                </div>
                <h2>
                  <a href="">
                    How Art And Culture Can Help Us Rethink Our Time
                  </a>
                </h2>
                <small>By MICHAEL KELLER</small>
              </div>

              <div>
                <div className="image-box">
                  <img src="" alt="" />
                  <p className="category">Design</p>
                  <data className="date">APRIL 2, 2022</data>
                </div>
                <h2>
                  <a href="">
                    How Art And Culture Can Help Us Rethink Our Time
                  </a>
                </h2>
                <small>By MICHAEL KELLER</small>
              </div>

              <div>
                <div className="image-box">
                  <img src="" alt="" />
                  <p className="category">Design</p>
                  <data className="date">APRIL 2, 2022</data>
                </div>
                <h2>
                  <a href="">
                    How Art And Culture Can Help Us Rethink Our Time
                  </a>
                </h2>
                <small>By MICHAEL KELLER</small>
              </div>
            </div>
            <div class="right-side">
              <div>
                <div className="image-box">
                  <img src="" alt="" />
                </div>
                <h2>
                  <a href="">
                    How Art And Culture Can Help Us Rethink Our Time
                  </a>
                </h2>
              </div>
              <div>
                <div className="image-box">
                  <img src="" alt="" />
                </div>
                <h2>
                  <a href="">
                    How Art And Culture Can Help Us Rethink Our Time
                  </a>
                </h2>
              </div>
              <div>
                <div className="image-box">
                  <img src="" alt="" />
                </div>
                <h2>
                  <a href="">
                    How Art And Culture Can Help Us Rethink Our Time
                  </a>
                </h2>
              </div>
              <div>
                <div className="image-box">
                  <img src="" alt="" />
                </div>
                <h2>
                  <a href="">
                    How Art And Culture Can Help Us Rethink Our Time
                  </a>
                </h2>
              </div>
              <div>
                <div className="image-box">
                  <img src="" alt="" />
                </div>
                <h2>
                  <a href="">
                    How Art And Culture Can Help Us Rethink Our Time
                  </a>
                </h2>
              </div>
              <div>
                <div className="image-box">
                  <img src="" alt="" />
                </div>
                <h2>
                  <a href="">
                    How Art And Culture Can Help Us Rethink Our Time
                  </a>
                </h2>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default Home;
