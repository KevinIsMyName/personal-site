import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

import Pdf from "../data/resume/resume.pdf";

const Resume = () => (
  <Main title="Resume" description="Kevin Wu's Resume.">
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="resume">Resume</Link>
          </h2>
          <a href={Pdf} target="_blank" rel="noreferrer">
            Click here to view the PDF in a separate page.
          </a>
        </div>
      </header>
      <iframe title="resume" src={Pdf} width="100%" height="999px" />
    </article>
  </Main>
);

export default Resume;
