import React from "react";
import styled from "styled-components";
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
        href="https://doc-08-8c-docs.googleusercontent.com/docs/securesc/i6fakgd7f8c2sothg162f7gin0gubuai/g0pb4q5gf03k0irnlrmvfg4setrl9cfv/1647460650000/06159338018623915181/06159338018623915181/1mOdq3xRBg51IdunnfrelBrXnkDcvUtay?e=download&ax=ACxEAsZB0brgVr3-LX8HkjjrGRALo7Agz4sd8sQihUNv5YS8vK0QHUIyFvp12kv-rwn3cORMnx4vQFv_xgvws8Jl-oiMV_cI7XcIDyvuYjrNSnHfp_7TvRDNxuj0JOoVDrs2P_8RHgEgeZFWwidbUvdaTfXTfYSVtfwBD69ObM8osmlnqg0-V0QrlAnWXAAGpZDKfbLYJnHJWLQcWuf_Zmn25IUPBBbD-yycs7B4r6fWb2SKXLBWwZti81beZfem48-Zdw577370jSLdey4yzsLoH6N6pYOetoZdfq6bk14L3ZBic030D60CGRzhpQMREsYD4DUo5iL4qKisESnoVCuCVb_ryZ-8w6IYeUQDkF2C_LuRLTPZNZKyGojCkGw75oxht5yQXIaxGwJclaw1H9s86rdXqaNaN18gLvZVFjMplNqn6AI-oKXiQuELCmfmxZR7EBJae5NZAXDMNwZpTc5KFNeCP9c8pNqX897iTo0WHWXE6Nyi41A4PwX_wB1R0rnxbTeGfHF0fSZA6HTztqNtbfzus501i6udeGEP9SdmfCzWYAASRzWh7U2LkdiDRiyZz9CL_c45ls50bvcb4jW1fj1jMcW1E5A7e8ua5_-UlcZ8UMDFX0Iani2AmsvZeoxfLJ-1yDPq790iX8513_2ixqCoEOozjNhWuQlfRGsb&authuser=0"
      >
        {btnText}
      </a>
    </ButtonStyle>
  );
}

export default DownloadButton;
