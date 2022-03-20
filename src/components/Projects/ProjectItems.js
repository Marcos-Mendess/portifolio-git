import React from "react";
import styled from "styled-components";
import ProjectImg from "../../assets/images/utracker.jpg";

const ProjectItemStyles = styled.div`
  .projectItem_img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem_info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem_title {
    font-size: 2.2rem;
  }
  .projectItem_desc {
    font-size: 1.6rem;
    font-family: "RobotoMono Regular";
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem_img {
      height: 350px;
    }
  }
`;

function ProjectItem({
  img = ProjectImg,
  title = "Project Name",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  href = "",
}) {
  return (
    <ProjectItemStyles>
      <a
        href={href}
        className="projectItem_img"
        target="_blank"
        rel="noreferrer"
      >
        <img src={img} alt="project img" />
      </a>
      <div className="projectItem_info">
        <a href={href} target="_blank" rel="noreferrer">
          <h3 className="projectItem_title">{title}</h3>
        </a>
        <p className="projectItem_desc">{desc}</p>
      </div>
    </ProjectItemStyles>
  );
}
export default ProjectItem;
