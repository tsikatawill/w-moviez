import React from "react";
import DP from "../images/userDP.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

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
                This website was created Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Asperiores eveniet minus delectus laboriosam
                incidunt molestiae. Enim, saepe repellendus mollitia sed dolorem
                distinctio omnis reiciendis eius incidunt temporibus. Quo, optio
                natus....
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                exercitationem assumenda, dignissimos tempore doloremque
                dolores, possimus ea quas maxime officia, iste voluptatem
                corporis. Nostrum atque, officia soluta doloremque vitae ab?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae exercitationem ad aut nisi unde dolore nemo dolorem
                quia tenetur est, odit sit nesciunt ipsam perferendis inventore
                maiores iure id quos?
              </p>
            </div>
          </div>
          <aside className="col-md-4">
            <h4 className="fw-bold">Check out some of my other projects</h4>
            <div className="list-group">
              <Link
                to="https://dudey-ai.netlify.app"
                className="list-group-item"
                children="AI"
              />
              <Link
                to="https://ez-contacts.netlify.app"
                className="list-group-item"
                children="Contacts"
              />
              <Link
                to="https://linearr.netlify.app"
                className="list-group-item"
                children="Linear"
              />
              <Link
                to="https://webuiild.netlify.app"
                className="list-group-item"
                children="WeBuild"
              />
              <Link
                to="https://cryptobaase.netlify.app"
                className="list-group-item"
                children="Cryptobaase"
              />
              <Link
                to="https://feedbackk-app.netlify.app"
                className="list-group-item"
                children="app"
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default About;
