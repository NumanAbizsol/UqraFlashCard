import { Collapse } from "antd";
import React, { useState } from "react";
import CustomCheckbox from "../../../components/inputs/checkbox/Checkbox";

const { Panel } = Collapse;

const ShuffleSetting = () => {
  const [quizSettings, setQuizSetting] = useState({
    shuffleQuestions: false,
  });

  const [settings, setSettings] = useState([]);
  const handleAssignmentGroupChange = (option) => {
    setQuizSetting((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
    // if (
    //   option === "allowMultipleAttempts" &&
    //   !quizSettings.allowMultipleAttempts === false
    // ) {
    //   setQuizSetting((prevOptions: any) => ({
    //     ...prevOptions,
    //     allowedAttemptsType: "Lowest",
    //     allowedAttemptsCount: 0,
    //   }));
    // }
    // if (option === "isQuestionTime") {
    //   setQuizSetting((prevOptions: any) => ({
    //     ...prevOptions,
    //     isQiuzTime: false,
    //     sameTimeForAllQuestion: false,
    //     perQuestionTime: 0,
    //     showOneQuestionAtATime: false,
    //     lockQuestionAftershow: false,
    //     totelQuizTime: 0,
    //   }));
    // }
    // if (option === "sameTimeForAllQuestion") {
    //   setQuizSetting((prevOptions: any) => ({
    //     ...prevOptions,
    //     perQuestionTime: 0,
    //   }));
    // }
    // if (option === "isQiuzTime") {
    //   setQuizSetting((prevOptions: any) => ({
    //     ...prevOptions,
    //     isQuestionTime: false,
    //   }));
    // }
  };
  return (
    <Collapse
      size="large"
      expandIconPosition="end"
      style={{ backgroundColor: "white" }}
      className="test"
      bordered={false}
    >
      <Panel header={<h4 style={{ margin: "0" }}>Shuffle Settings</h4>} key="1">
        <div style={{ gap: "10px", fontSize: "14px" }}>
          <span className="d-flex align-start gap-5">
            <CustomCheckbox
              checked={quizSettings.shuffleQuestions}
              onChange={() => handleAssignmentGroupChange("shuffleQuestions")}
            />
            Shuffle Questions
          </span>
        </div>
      </Panel>
    </Collapse>
  );
};

export default ShuffleSetting;
