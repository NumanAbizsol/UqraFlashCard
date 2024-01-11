import { useState } from "react";
import CustomRadio from "../../../components/inputs/radio/Radio";
import { Collapse } from "antd";
const { Panel } = Collapse;

const Security = () => {
  const [textSettings, setTextSetting] = useState({
    quizType: "practiceQuiz",
    allowMultipleAttempts: false,
  });
  return (
    <div>
      <Collapse
        size="large"
        expandIconPosition="end"
        style={{ backgroundColor: "white" }}
        className="test"
        bordered={false}
      >
        <Panel header={<h4 style={{ margin: "0" }}>Security</h4>} key="1">
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
              <span style={{ paddingLeft: "6px", fontSize: "14px" }}>
                Public on the web (Open access)
              </span>
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
              <span style={{ paddingLeft: "6px", fontSize: "14px" }}>
                Private access with a link ( Upgrade required )
              </span>
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
              <span style={{ paddingLeft: "6px", fontSize: "14px" }}>
                Private access with a link ( Upgrade required )
              </span>
            </span>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Security;
