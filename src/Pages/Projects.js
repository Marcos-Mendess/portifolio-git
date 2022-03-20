import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import ProjectItem from "../components/Projects/ProjectItems";
import ProjectInfo from "../assets/data/projects";

export const ProjectsStyles = styled.div`
  padding: 10rem 0;
  .projects_allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects_searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects_searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects_searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects_searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects_searchBar,
    .projects_searchBar form,
    .projects_searchBar input {
      width: 100%;
      position: relative;
    }
  }
`;

function Projects() {
  const [searchText, setSearchText] = useState("");
  const [projectData, setProjectData] = useState(ProjectInfo);

  function handleChange(event) {
    event.preventDefault();
    setSearchText(event.target.value);
    if (!event.target.value.lenght > 0) {
      setProjectData(ProjectInfo);
    }
  }

  useEffect(() => {
    if (searchText === "") return;
    setProjectData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  return (
    <ProjectsStyles style={{ "padding-top": "2rem" }}>
      <div className="container">
        <SectionTitle heading="Projetos" subheading="" />
        <div className="projects_searchBar">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Nome do projeto"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects_allItems">
          {projectData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </ProjectsStyles>
  );
}

export default Projects;
