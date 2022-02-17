import React from "react";
import DP from "../images/userDP.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-8">
            <div className="dev-details mb-5 d-flex align-items-center">
              <div className="profile-pic">
                <img src={DP} alt="user profile" width="100px" />
              </div>
              <div className="user-details mx-2">
                <div className="name-position">
                  <h3 className="name fw-bold m-0">William M. Tsikata</h3>
                  <p className="m-0">Frontend web developer</p>
                </div>
                <div className="socials d-flex mt-2">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/william-tsikata-294916192?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4oZwOjZxSi6Sarso9oqvxw%3D%3D"
                    className="mx-1"
                  >
                    <FaFacebook size="25" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/tsikatawill"
                    className="mx-1"
                  >
                    <FaGithub size="25" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/william-tsikata-294916192?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4oZwOjZxSi6Sarso9oqvxw%3D%3D"
                    className="mx-1"
                  >
                    <FaLinkedin size="25" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/tsikatawill"
                    className="mx-1"
                  >
                    <FaTwitter size="25" />
                  </a>
                </div>
              </div>
            </div>
            <div className="about-site">
              <p className="lead">
                This website was created around the TMDB API. It makes use of
                API calls to fetch popular movies, Sci-Fi, best R-Rated Movies
                and allows users to get details on their favourite movies using
                the search functionality.
              </p>
              <p>
                This project was built in hopes of allowing users to
                effortlessly get movie details and dazzles users with a
                beautiful UI.
              </p>
            </div>
          </div>
          <aside className="col-md-4">
            <h4 className="fw-bold">Check out some of my other projects</h4>
            <ul className="list-group">
              <a
                className="list-group-item"
                target="_blank"
                rel="noreferrer"
                href="https://dudey-ai.netlify.app"
              >
                Dudey AI
              </a>

              <a
                className="list-group-item"
                target="_blank"
                rel="noreferrer"
                href="https://ez-contacts.netlify.app"
              >
                EZ Contacts
              </a>

              <a
                className="list-group-item"
                target="_blank"
                rel="noreferrer"
                href="https://linearr.netlify.app"
              >
                Linearr
              </a>

              <a
                className="list-group-item"
                target="_blank"
                rel="noreferrer"
                href="https://webuiild.netlify.app"
              >
                WeBuild
              </a>

              <a
                className="list-group-item"
                target="_blank"
                rel="noreferrer"
                href="https://cryptobaase.netlify.app"
              >
                Cryptobaase
              </a>

              <a
                className="list-group-item"
                target="_blank"
                rel="noreferrer"
                href="https://feedbackk-app.netlify.app"
              >
                Feedback app
              </a>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default About;
