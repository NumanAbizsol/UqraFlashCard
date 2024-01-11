import { Collapse } from "antd";
import React, { useState } from "react";
import CustomRadio from "../../../components/inputs/radio/Radio";
const { Panel } = Collapse;

const CoursePublish = () => {
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
        <Panel header={<h4 style={{ margin: "0" }}>Course Publish</h4>} key="1">
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
                <b>Draft</b>
              </span>
            </span>
            <div
              style={{
                width: "100%",
                padding: "10px 30px",
              }}
            >
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                cupiditate soluta sint, labore, esse officia adipisci quod optio
                non obcaecati suscipit explicabo sequi? Ratione repudiandae,
                eligendi dolorem cumque, odio quod eos sit placeat iure atque
                inventore sed, dicta nisi error.
              </p>
            </div>
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
                <b>Publish</b>
              </span>
            </span>
            <div
              style={{
                width: "100%",
                padding: "10px 30px",
              }}
            >
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                cupiditate soluta sint, labore, esse officia adipisci quod optio
                non obcaecati suscipit explicabo sequi? Ratione repudiandae,
                eligendi dolorem cumque, odio quod eos sit placeat iure atque
                inventore sed, dicta nisi error.
              </p>
            </div>
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
                <b>Coming Soon</b>
              </span>
            </span>
            <div
              style={{
                width: "100%",
                padding: "10px 30px",
              }}
            >
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                cupiditate soluta sint, labore, esse officia adipisci quod optio
                non obcaecati suscipit explicabo sequi? Ratione repudiandae,
                eligendi dolorem cumque, odio quod eos sit placeat iure atque
                inventore sed, dicta nisi error.
              </p>
            </div>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default CoursePublish;
