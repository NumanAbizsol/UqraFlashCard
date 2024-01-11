import React from "react";
import TextSetting from "./TextSetting";
import Background from "./Background";
import Language from "./Language";

const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "0px 20px",
      }}
    >
      <TextSetting />
      <Background />
      <Language />
    </div>
  );
};

export default Layout;
