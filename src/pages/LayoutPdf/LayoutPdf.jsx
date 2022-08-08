import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary";

import FooterShort from "../../components/footer/footerShort/FooterShort";
import Pdf from "../../components/layoutFull/pdf/Pdf";

import { NoMatchPage } from "../NoMatch";

import { dateConverterToDMY } from "../../helpers/dateFun";

import { houseCards } from "../../dummyData";

import s from "./layoutPdf.module.css";

function LayoutPdf() {
  const [project, setProject] = useState(null);
  const [layout, setLayout] = useState(null);
  const { projectId } = useParams();
  const { layoutId } = useParams();

  useEffect(() => {
    setProject(
      houseCards?.filter((item) => item.id.toString() === projectId)[0]
    );
  }, [projectId]);

  useEffect(() => {
    setLayout(
      project?.flats?.filter((flat) => flat.id.toString() === layoutId)[0]
    );
  }, [project, layoutId]);

  return (
    <div className={s.layoutPdf}>
      <div className="container">
        <span className={s.date}>Дата формирования {dateConverterToDMY()}</span>
        <div className={s.pdfWrapper}>
          <Pdf project={project} layout={layout} />
        </div>
      </div>
      <FooterShort />
    </div>
  );
}

export default withErrorBoundary(LayoutPdf, {
  fallbackRender: () => <NoMatchPage />,
  onError(error, info) {
    // eslint-disable-next-line no-console
    console.error(error);
    // eslint-disable-next-line no-console
    console.log(info);
  },
});
