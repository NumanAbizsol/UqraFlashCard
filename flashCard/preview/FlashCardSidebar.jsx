import React, { useState } from "react";
import SwitchButton from "../../../components/shared/switchButton/SwitchButton";

const FlashCardSidebar = () => {
  const [quizSettings, setQuizSetting] = useState({
    saveTableView: false,
    saveShuffle: false,
    saveAudio: false,
  });
  const settings = [
    { key: "saveAsNewSetting", label: "Table View" },
    { key: "saveShuffle", label: "Shuffle" },
    { key: "saveAudio", label: "Audio" },
  ];
  return (
    <div
      style={{
        minWidth: "20%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "15px 30px",
          }}
        >
          <h4>Quiz Questions</h4>
        </div>
        <div>
          {settings.map((setting) => (
            <div
              key={setting.key}
              style={{
                padding: "10px 25px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{setting.label}</span>
              <SwitchButton
                value={quizSettings[setting.key]}
                onChange={(isChecked) => {
                  setQuizSetting((state) => ({
                    ...state,
                    [setting.key]: isChecked,
                  }));
                  if (isChecked === false) {
                    setQuizSetting((state) => ({
                      ...state,
                      setting: "",
                    }));
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <button type="button">+ Hello Numan</button>
      </div>
    </div>
  );
};

export default FlashCardSidebar;
