import React from 'react';
import { Link } from 'react-router-dom';
import Table from './Table/Table';
import { ReactComponent as SVG } from '../../images/project.svg';

import './Project.scss';

function Project() {
  return (
    <>
      <div className="section-wrapper">
        <div className="project">
          <Table />
          <Link to="/contact" className="btn-wrapper">
            <button className="btn btn--primary">Have questions?</button>
          </Link>
        </div>

        <div className="svg-wrapper">
          <SVG className="svg"></SVG>
        </div>
      </div>
    </>
  );
}

export default Project;
