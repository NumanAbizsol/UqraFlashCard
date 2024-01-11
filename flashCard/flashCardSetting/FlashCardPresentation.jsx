import { Collapse } from "antd";
import React, { useState } from "react";
import CustomCheckbox from "../../../components/inputs/checkbox/Checkbox";
import TextArea from "antd/es/input/TextArea";

const { Panel } = Collapse;

const FlashcardPresentation = () => {
  const [quizSettings, setQuizSetting] = useState({
    customizeEndMessage: false,
    comments: false,
  });

  const [endMessage, setEndMessage] = useState("");

  const handleAssignmentGroupChange = (option) => {
    setQuizSetting((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  const handleEndMessageChange = (e) => {
    setEndMessage(e.target.value);
  };

  return (
    <Collapse
      size="large"
      expandIconPosition="end"
      style={{ backgroundColor: "white" }}
      className="test"
      bordered={false}
    >
      <Panel header={<h4 style={{ margin: "0" }}>Presentation</h4>} key="1">
        <div style={{ gap: "10px", fontSize: "14px" }}>
          <span className="d-flex align-start gap-5">
            <CustomCheckbox
              checked={quizSettings.customizeEndMessage}
              onChange={() =>
                handleAssignmentGroupChange("customizeEndMessage")
              }
            />
            customize End Message
          </span>
          <div
            style={{
              paddingTop: "20px",
              display: "flex",
              justifyContent: "center",
              transition: "opacity 0.5s, max-height 0.5s",
              opacity: quizSettings.customizeEndMessage ? 1 : 0,
              maxHeight: quizSettings.customizeEndMessage ? "1000px" : "0px",
              overflow: "hidden",
            }}
          >
            <TextArea
              value={endMessage}
              onChange={handleEndMessageChange}
              placeholder="PlaceHolder"
              autoSize={{ minRows: 6, maxRows: 10 }}
              style={{
                width: "15%",
                height: "20vh",
              }}
            />
          </div>
          <span
            className="d-flex align-start gap-5"
            //   style={{ marginTop: "12px" }}
          >
            <CustomCheckbox
              checked={quizSettings.comments}
              onChange={() => handleAssignmentGroupChange("comments")}
            />
            <span style={{ fontSize: "14px" }}>comments</span>
          </span>
        </div>
      </Panel>
    </Collapse>
  );
};

export default FlashcardPresentation;
