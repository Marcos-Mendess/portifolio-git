import React from "react";
import FooterCol from "./FooterCol";
import PText from "../PText";
import styled from "styled-components";
import instagram_logo from "../../assets/icons/instagram_logo.png";
import linkedin_logo from "../../assets/icons/linkedin_logo.png";
import git_logo from "../../assets/icons/git_logo.png";
import mail_logo from "../../assets/icons/mail_logo.png";
import whatsapp_logo from "../../assets/icons/whatsapp_logo.png";
import location_logo from "../../assets/icons/location_logo.png";

const FooterStyles = styled.footer`
  padding-top: 6rem;
  margin-bottom: 0px;
  padding-bottom: 0px;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 10rem;
  }
  .footer_col1 {
    flex: 2;
  }
  .footer_col2,
  .footer_col3 {
    flex: 1;
  }
  .footer_col1_title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-dark);
    text-align: left;
    padding: 1rem 0;
    margin-top: 3em;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 3rem;
      }
    }
    .footer_col1 .para {
      max-width: 100%;
    }
    .copyright {
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 0;
      padding-top: 0;
      .container {
        div {
          padding: 0;
          margin-top: 0.5rem;
        }
      }
    }
    padding-top: 0rem;
    padding-bottom: 0rem;
  }
`;

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer_col1">
          <h1 className="footer_col1_title">Marcos Mendes</h1>
          <PText>
            Desenvolvedor | Frontend | React <br /> <br />
            Resido em Recife, Pernambuco e costumo desenvolver aplicações
            utilizando Node, Express, React e PostgreSQL
          </PText>
        </div>
        <div className="footer_col2">
          <FooterCol
            heading="Informações para contato"
            links={[
              {
                title: "(81) 99833-7386",
                path: "/contacts",
                img: whatsapp_logo,
              },
              {
                title: "marcos_fmendes@hotmail.com",
                path: "mailto:marcos_fmendes@hotmail.com",
                img: mail_logo,
              },
              {
                title: "Recife, Pernambuco",
                path: "https://www.google.com.br/maps/place/Recife,+PE",
                img: location_logo,
              },
            ]}
          />
        </div>
        <div className="footer_col3">
          <FooterCol
            heading="Social media"
            links={[
              {
                title: "Linkedin",
                path: "https://www.linkedin.com/in/marcos-vin%C3%ADcius-farias-mendes-684b3816a/",
                img: linkedin_logo,
              },
              {
                title: "GitHub",
                path: "https://github.com/Marcos-Mendess",
                img: git_logo,
              },
              {
                title: "Instagram",
                path: "https://www.instagram.com/marcos_fmendes/",
                img: instagram_logo,
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText> © 2022 - Marcos Mendes </PText>
        </div>
      </div>
    </FooterStyles>
  );
}

export default Footer;
