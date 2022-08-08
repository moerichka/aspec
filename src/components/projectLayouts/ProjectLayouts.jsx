/* eslint-disable no-nested-ternary */
import React, {useState, useEffect} from "react";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import ProjectLayout from "../projectLayout";
import Button from "../button";

import s from "./projectLayouts.module.css";

function ProjectLayouts(props) {
  const navigate = useNavigate()
  const [windowWidth, setWindowWidth] = useState(window.screen.width);
  
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className={s.projectLayouts}>
      <div className={`${s.container} container`}>
        <h2 className="h2-title">{props.title}</h2>
        <div className={s.grid}>
          {props?.project?.flats?.map((flat, index) => windowWidth < 901 ? (
              index < 4 ?
              <ProjectLayout thisProject={props.project} flat={flat} key={flat.id}/> : ""
            ) : (
              index < 3 ?
              <ProjectLayout thisProject={props.project} flat={flat} key={flat.id}/> : ""
            ))}
        </div>
        <div className={s.button}>
          <Button
            BGColor="blue"
            width={windowWidth < 900 ? "224px" : "176px"}
            content="Смотреть все"
            onClick={()=>navigate("/estate-selection")}
            className={s.button}
          />
        </div>
      </div>
    </div>
  );
}

ProjectLayouts.propTypes = {
  title: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  project: PropTypes.object
}

ProjectLayouts.defaultProps = {
  title: "Планировки проекта",
  project: {}
}

export default ProjectLayouts;
