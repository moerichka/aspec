import React, {useState, useEffect} from "react";
import s from "./projectLayouts.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import ProjectLayout from "../projectLayout";
import Button from "../button";

function ProjectLayouts(props) {
  const navigate = useNavigate()
  const [windowWidth, setWindowWidth] = useState(window.screen.width);
  
  useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className={s.projectLayouts}>
      <div className={`${s.container} container`}>
        <h2 className="h2-title">{props.title}</h2>
        <div className={s.grid}>
          {props?.project?.flats?.map((flat, index) => {
            return windowWidth < 901 ? (
              index < 4 ?
              <ProjectLayout thisProject={props.project} flat={flat} key={flat.id}/> : ""
            ) : (
              index < 3 ?
              <ProjectLayout thisProject={props.project} flat={flat} key={flat.id}/> : ""
            );
          })}
        </div>
        <div className={s.button}>
          <Button
            bgColor={"blue"}
            width={windowWidth < 900 ? "224px" : "176px"}
            content={"Смотреть все"}
            onClick={()=>navigate("/estateselection")}
            className={s.button}
          />
        </div>
      </div>
    </div>
  );
}

ProjectLayouts.propTypes = {
  title: PropTypes.string,
  project: PropTypes.object
}

ProjectLayouts.defaultProps = {
  title: "Планировки проекта"
}

export default ProjectLayouts;
