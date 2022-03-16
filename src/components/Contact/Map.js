import React from "react";
import styled from "styled-components";
import MapImg from "../../assets/images/mapa_red.png";
import PText from "../PText";

const MapStyles = styled.div`
  padding-bottom: 0;
  margin-bottom: 0;
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Estou aqui</h3>
          <PText>Recife, Pernambuco, Brasil</PText>
          <a
            className="map__card__link"
            href="https://www.google.com.br/maps/dir//-8.1361723,-34.913834/@-8.1302662,-34.9099734,16z/data=!4m2!4m1!3e0"
            target="_blank"
            rel="noreferrer"
          >
            Abrir no google maps
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
