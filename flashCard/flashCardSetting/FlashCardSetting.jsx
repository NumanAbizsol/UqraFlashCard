import React, { useState } from "react";
import QuizType from "./QuizType";
import FlashCardTypes from "./FlashCardTypes";
import FlashcardTool from "./FlashCardTools";
import FlashcardPresentation from "./FlashCardPresentation";
import ShuffleSetting from "./ShuffleSetting";
import CustomInput from "../../../components/inputs/input/Input";
import FlashCardSave from "./FlashCardSave";

const FlashCardSetting = () => {
  const [saveSetting, setSaveSetting] = useState({
    save: "",
  });

  const [error, setError] = useState({
    save: "",
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "0px 20px",
      }}
    >
      <QuizType />
      <FlashCardTypes />
      <FlashcardPresentation />
      <ShuffleSetting />
      <FlashcardTool />
      <FlashCardSave />
    </div>
  );
};

export default FlashCardSetting;
