import React from "react";
import { Container } from "../components/Contact";
import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <Container>
        <img
          src="/Assets/Landing/autrefishlogo.png"
          className="uk-position-center"
          alt="autrefish logo"
          style={{ width: "400px", height: "300px" }}
        />
        <a
          className="uk-position-bottom-center "
          href="mailto:weare@autrefish.com"
        >
          <button
            id="contactBttn"
            className=" uk-button uk-button-default "
            uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true;"
            style={{ margin: "0px 50px 100px 0px" }}
          >
            Contact Us!
          </button>
        </a>
      </Container>
    </Layout>
  );
}

export default Contact;
