import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import instagram_logo from "../../assets/icons/instagram_logo.png";

const ColStyle = styled.div`
  padding-bottom: 1rem;
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
    display: flex;
  }
  .img_container {
    padding-top: 3px;
    margin-left: 1rem;
    width: 30px;
    height: 30px;
  }
  .title_container {
    justify-content: center;
    margin-left: 1rem;
    margin-top: 0.5rem;
  }
`;

export default function FooterCol({
  heading = "Col Heading",
  links = [
    {
      type: "Link",
      title: "Home",
      path: "/home",
      img: instagram_logo,
    },
    {
      type: "Link",
      title: "About",
      path: "/about",
      img: instagram_logo,
    },
  ],
}) {
  return (
    <ColStyle>
      <h2 className="heading">{heading}</h2>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === "Link" ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                <div className="img_container">
                  <img src={item.img} alt="Instalogo" />
                </div>
                <span className="title_container">{item.title}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyle>
  );
}
