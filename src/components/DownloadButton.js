import React from "react";
import styled from "styled-components";
import curriculo from "../assets/Curriculo/curriculo.pdf";
const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "transperant" : "var(--gray-1)"};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? "var(--gary-1)" : "black")};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

function DownloadButton({
  btnText = "test",
  btnLink = "test",
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <a
        className="button"
        to={btnLink}
        href={curriculo}
        download="Marcos Vinícius Farias Mendes CV"
      >
        {btnText}
      </a>
    </ButtonStyle>
  );
}

export default DownloadButton;
