import React from "react";
import Layout from "../components/Layout/Layout";
import image from "../images/about.jpeg"
const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
        <h3 className="center mt-3">About Us</h3>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={image}
            alt="aboutus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 d-flex  align-items-center">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;