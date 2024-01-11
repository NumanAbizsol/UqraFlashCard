import React from "react";
import Flip from "./Flip";
import FlashCardSidebar from "./FlashCardSidebar";

const Preview = () => {
  return (
    <div style={{ display: "flex", gap: "1%" }}>
      <FlashCardSidebar />
      <Flip />
    </div>
  );
};

export default Preview;
