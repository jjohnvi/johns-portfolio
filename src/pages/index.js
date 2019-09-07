import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo"></div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <p>{config.subHeading2}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img
              src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/69710096_10217844211553562_7061990810987790336_n.jpg?_nc_cat=101&_nc_oc=AQnrKt_xzI-G2hFctS3e37e1Sucf1AGoS_e2z2c0gB6KAilP7IgUlGN4dZKyEOnSERg&_nc_ht=scontent-ort2-1.xx&oh=346a83260536539a3729270802c01ae5&oe=5DD1A126"
              alt=""
            />
          </a>
          <div className="content">
            <h2 className="major">About Me</h2>
            <p>
              Perpetual learner, thrives from challenging problems, frustrated
              enough to seek perfection, and simply loves code. Every single
              day, I find a way to challenge myself for self-improvement. I have
              a passion for people. I was a psychology major initially with the
              intention of understanding people. With the skills of empathy,
              communication, patience, analyzing, and understanding, I brought
              that with me to my workspace. I strive when the people I work with
              strive. I also strive when I can be the one to lead people to
              success.
            </p>
            {/* <a href="/#" className="special">
              Learn more
            </a> */}
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            {/* <img src={pic2} alt="" /> */}
          </a>
          <div className="content">
            <h2 className="major">Skills</h2>
            <div className="icons__cont">
              <div className="name__icon">
                Javascript
                <div className="icons__cont__background">
                  <svg viewBox="0 0 128 128">
                    <path
                      fill="#F0DB4F"
                      d="M1.408 1.408h125.184v125.185h-125.184z"
                    ></path>
                    <path
                      fill="#323330"
                      d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="name__icon">
                React
                <div className="icons__cont__background">
                  <i class="devicon-react-original colored"></i>
                </div>
              </div>
              <div className="name__icon">
                PostgreSQL
                <div className="icons__cont__background">
                  <i class="devicon-postgresql-plain colored"></i>
                </div>
              </div>
              <div className="name__icon">
                SASS
                <div className="icons__cont__background">
                  <i class="devicon-sass-original colored"></i>
                </div>
              </div>
              <div className="name__icon">
                Node.js
                <div className="icons__cont__background">
                  <i class="devicon-nodejs-plain colored"></i>
                </div>
              </div>
            </div>
            <div className="icons__cont__2">
              <div className="name__icon">
                Express
                <div className="icons__cont__background">
                  <i class="devicon-express-original colored"></i>
                </div>
              </div>
              <div className="name__icon">
                HTML
                <div className="icons__cont__background">
                  <i class="devicon-html5-plain colored"></i>
                </div>
              </div>
              <div className="name__icon">
                CSS
                <div className="icons__cont__background">
                  <i class="devicon-css3-plain colored"></i>
                </div>
              </div>
              <div className="name__icon">
                Redux
                <div className="icons__cont__background">
                  <img
                    src="https://res.cloudinary.com/john-personal-proj/image/upload/v1566949511/random/13142323_cqxcfx.png"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
            <a href="/#three" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Outlook</h2>
            <p>
              Approaching a project, the first thing I have in mind is
              accessibility with both development and design. If it's not user
              friendly, it's not a good website. Then comes the architecture.
              How orgnanized my information is crucial. A website is also a
              presentation, therefore, information needs to be placed where it
              can be easily accessed for users. With the rest of the
              fundamentals balanced, a good website can be built with the
              audience in mind. Simplicity is key.
            </p>
            <a href="/#four" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Projects</h2>
          <p>Check out what I've built!</p>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img
                  src="https://res.cloudinary.com/john-personal-proj/image/upload/v1567019324/random/Screen_Shot_2019-08-28_at_2.07.17_PM_2_cxaft7.png"
                  alt=""
                />
              </a>
              <h3 className="major">mello</h3>
              <p>
                A social media platform for users to share their experiences,
                thoughts, and interests with an image. Users can follow other
                users, create and like posts, and comment on posts.
              </p>
              <a href="/#" className="special">
                Visit
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img
                  src="https://res.cloudinary.com/john-personal-proj/image/upload/v1567018773/random/Screen_Shot_2019-08-28_at_1.54.07_PM_2_m6kfl0.png"
                  alt=""
                />
              </a>
              <h3 className="major">Wisemind.</h3>
              <p>
                First project I've built! A quote generating app fitting to
                user's desired category.
              </p>
              <a href="/#" className="special">
                Visit
              </a>
            </article>
            {/* <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article> */}
            {/* <article>
              <a href="/#" className="image">
                <img
                  src="https://res.cloudinary.com/john-personal-proj/image/upload/v1566949173/random/Screen_Shot_2019-08-27_at_6.05.08_PM_2_uml5vx.png"
                  alt=""
                />
              </a>
              <h3 className="major">mello</h3>
              <p>
                A social media platform for users to share their experiences,
                thoughts, and interests with an image. Users can follow other
                users, create and like posts, and comment on posts.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article> */}
          </section>
          <ul className="actions">
            <li>
              {/* <a href="/#" className="button">
                Browse All
              </a> */}
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
