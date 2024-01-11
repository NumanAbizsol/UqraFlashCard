import { Collapse, Select } from "antd";
import { useState } from "react";
const { Panel } = Collapse;
const { Option } = Select;

const Language = () => {
  const [textSettings, setTextSetting] = useState({
    quizType: "practiceQuiz",
    allowMultipleAttempts: false,
  });

  // const handleAssignmentGroupChange = (option) => {
  //   setTextSetting((prevOptions) => ({
  //     ...prevOptions,
  //     [option]: !prevOptions[option],
  //   }));
  //   if (
  //     option === "allowMultipleAttempts" &&
  //     !textSettings.allowMultipleAttempts === false
  //   ) {
  //     setTextSetting((prevOptions) => ({
  //       ...prevOptions,
  //       allowedAttemptsType: "Lowest",
  //       allowedAttemptsCount: 0,
  //     }));
  //   }
  //   if (option === "isQuestionTime") {
  //     setTextSetting((prevOptions) => ({
  //       ...prevOptions,
  //       isQiuzTime: false,
  //       sameTimeForAllQuestion: false,
  //       perQuestionTime: 0,
  //       showOneQuestionAtATime: false,
  //       lockQuestionAftershow: false,
  //       totelQuizTime: 0,
  //     }));
  //   }
  //   if (option === "sameTimeForAllQuestion") {
  //     setTextSetting((prevOptions) => ({
  //       ...prevOptions,
  //       perQuestionTime: 0,
  //     }));
  //   }
  //   if (option === "isQiuzTime") {
  //     setTextSetting((prevOptions) => ({
  //       ...prevOptions,
  //       isQuestionTime: false,
  //     }));
  //   }
  // };

  const handleSelectChange = (e) => {
    setTextSetting((prevQuiz) => ({
      ...prevQuiz,

      allowedAttemptsType: e,
    }));
  };
  return (
    <div>
      <Collapse
        size="large"
        expandIconPosition="end"
        style={{ backgroundColor: "white" }}
        className="test"
        bordered={false}
      >
        <Panel header={<h4 style={{ margin: "0" }}>Language</h4>} key="1">
          <div style={{ paddingTop: "20px" }}>
            <span style={{ fontSize: "14px", marginBottom: "17px" }}>
              Language
            </span>

            <Select
              style={{
                width: "170px",
                borderRadius: "4px",
                marginLeft: "40px",
              }}
              placeholder="Choose Language"
              value={textSettings.allowedAttemptsType}
              onChange={(value) => handleSelectChange(value)} // Pass the selected value directly
            >
              <Option value="Lowest">English</Option>
              <Option value="Average">Hindi</Option>
              <Option value="Highest">Urdu</Option>
              <Option value="Matching">Dutch</Option>
              <Option value="EssayQuestion">Germany</Option>
            </Select>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Language;
