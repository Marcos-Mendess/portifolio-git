import React from "react";
import PText from "../components/PText";
import AboutImg from "../assets/images/Background.png";
import styled from "styled-components";
import DownloadButton from "../components/Home/DownloadButton";

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
      width: 70%;
      border-radius: 1rem;
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
    img {
      justify-content: left;
    }
  }
`;

function Home() {
  return (
    <AboutPageStyles
      style={{
        "margin-top": "1rem",
        "padding-top": "2rem",
        "padding-bottom": "10rem",
      }}
    >
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">Olá, eu sou Marcos Mendes</p>
            <h2 className="about_heading">Front-end Web developer</h2>
            <div className="about_info">
              <PText>
                Natural de Recife, Pernambuco, um local conhecido por suas
                praias e carnavais. Desde a minha infância sempre fui
                interessado em tecnologia, adoro criar coisas que podem ser
                úteis de verdade para os outros.
                <br /> <br />
                Comecei no ambiente de desenvolvimento a partir de jogos, sempre
                achei interessante automatizar algumas funções repetitivas e o
                processo sempre foi desafiador e satisfatório.
                <br />
                <br />
                Tenho a visão de transformar o mundo em um local melhor,
                acredito que a tecnologia pode transformar vidas.
                <br />
                <br />
                Curiosidades: Gamer nas horas vagas e atleta da maioria dos
                esportes que envolvam a redonda.
              </PText>
            </div>
            <DownloadButton btnText="Download CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="MarcosImage" />
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
}

export default Home;
