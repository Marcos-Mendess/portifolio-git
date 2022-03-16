import React from "react";
import Footer from "../components/Footer";
import PText from "../components/PText";
import AboutImg from "../assets/images/MarcosImg.jpg";
import styled from "styled-components";

import DownloadButton from "../components/DownloadButton";

const AboutPageStyles = styled.div`
  padding: 6rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  .about_heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }

  .about_info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      width: 78%;
      border-radius: 5rem;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about_subheading {
      font-size: 2.8rem;
    }
    .about_heading {
      font-size: 2.8rem;
    }
  }
`;

function Home() {
  return (
    <AboutPageStyles style={{ margin: 0, padding: 0 }}>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">Olá, eu sou Marcos Mendes</p>
            <h2 className="about_heading">Front-end Web developer</h2>
            <div className="about_info">
              <PText>
                I am from Recife, Pernambuco. A place of beauty and nature.
                Since my childhood, i love art and design. I always try to
                design stuff with my unique point of view. I also love to create
                things that can be usefull to others.
                <br /> <br />
                I started coding since I was in high school. Coding is also an
                art for me. I love it and now I have the opportunity to design
                along with the coding. I find it really interesting and I
                enjoyed the process a lot.
                <br />
                <br />
                My vision is to make the world a better place. Now almost
                everything is becoming better than ever. It is time for us to
                create more good stuff that helps the world to become a better
                place.
              </PText>
            </div>
            <DownloadButton btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="MarcosImage" />
          </div>
        </div>
      </div>
      <Footer />
    </AboutPageStyles>
  );
}

export default Home;
