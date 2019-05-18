import React from "react";
import Jumbo from "../../../../UI/jumbo/jumbotron";
import { data } from "./introData";

const intro = () => {
  return (
    <Jumbo
      title={data.title}
      subTitle={data.subTitle}
      text={data.text}
      bHref={data.bHref}
      bText={data.btext}
    />
  );
};

export default intro;
