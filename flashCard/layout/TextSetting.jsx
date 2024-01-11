import { Collapse, Select } from "antd";
import CustomRadio from "../../../components/inputs/radio/Radio";
import { useState } from "react";
// import CustomCheckbox from "../../../components/inputs/checkbox/Checkbox";
const { Panel } = Collapse;
const { Option } = Select;

const TextSetting = () => {
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
        <Panel header={<h4 style={{ margin: "0" }}>Quiz Type</h4>} key="1">
          <div style={{ gap: "10px" }}>
            <span
              className="d-flex align-start gap-5"
              style={{ paddingRight: "10px" }}
            >
              <CustomRadio
                value={"practiceQuiz"}
                checked={textSettings?.quizType == "practiceQuiz"}
                onChange={(e) =>
                  setTextSetting((state) => ({
                    ...state,
                    quizType: e.target.value,
                  }))
                }
              />
              <span style={{ paddingLeft: "6px", fontSize: "14px" }}>H1</span>
            </span>
            <span
              className="d-flex align-start gap-5"
              style={{ marginTop: "12px" }}
            >
              <CustomRadio
                value={"gradedQuiz"}
                checked={textSettings?.quizType == "gradedQuiz"}
                onChange={(e) =>
                  setTextSetting((state) => ({
                    ...state,
                    quizType: e.target.value,
                  }))
                }
              />
              <span style={{ paddingLeft: "6px", fontSize: "14px" }}> H2</span>
            </span>
            <span
              className="d-flex align-start gap-5"
              style={{ marginTop: "12px" }}
            >
              <CustomRadio
                value={"heading3"}
                checked={textSettings?.quizType == "heading3"}
                onChange={(e) =>
                  setTextSetting((state) => ({
                    ...state,
                    quizType: e.target.value,
                  }))
                }
              />
              <span style={{ paddingLeft: "6px", fontSize: "14px" }}> H3</span>
            </span>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <span style={{ fontSize: "14px", marginBottom: "17px" }}>
              Text Size
            </span>

            <Select
              style={{
                width: "150px",
                borderRadius: "4px",
                marginLeft: "40px",
              }}
              placeholder="Choose Size"
              value={textSettings.allowedAttemptsType}
              onChange={(value) => handleSelectChange(value)} // Pass the selected value directly
            >
              <Option value="Lowest">h4</Option>
              <Option value="Average">h5</Option>
              <Option value="Highest">h6</Option>
              {/* <Option value="Matching">Matching</Option>
              <Option value="EssayQuestion">Essay Question</Option> */}
            </Select>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <span style={{ fontSize: "14px", marginBottom: "17px" }}>
              Font Family
            </span>

            <Select
              style={{
                width: "150px",
                borderRadius: "4px",
                marginLeft: "20px",
              }}
              placeholder="Choose Size"
              value={textSettings.allowedAttemptsType}
              onChange={(value) => handleSelectChange(value)} // Pass the selected value directly
            >
              <Option value="Lowest">Serif Fonts</Option>
              <Option value="Average">Sans-serif Fonts</Option>
              <Option value="Highest">Monospaced</Option>
              <Option value="Matching">Script Fonts</Option>
              <Option value="EssayQuestion">Modern Fonts</Option>
            </Select>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default TextSetting;
