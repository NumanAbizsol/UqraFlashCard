import { Collapse } from "antd";
import { useState } from "react";
import SwitchButton from "../../../components/shared/switchButton/SwitchButton";
import CustomInput from "../../../components/inputs/input/Input";
const { Panel } = Collapse;

const FlashCardSave = () => {
  const [quizSettings, setQuizSetting] = useState({
    saveAsNewSetting: false,
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
        <Panel header={<h4 style={{ margin: "0" }}>Save Settings</h4>} key="1">
          <div className="d-flex flex-column gap-10">
            <div>
              <span style={{ marginRight: "10px", fontSize: "14px" }}>
                Do you want to save these setting as new settings
              </span>
              <SwitchButton
                value={quizSettings.saveAsNewSetting}
                onChange={(isChecked) => {
                  setQuizSetting((state) => ({
                    ...state,
                    saveAsNewSetting: isChecked,
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
            <span className="d-flex align-center gap-5">
              <CustomInput
                placeholder="Enter Setting Name"
                disabled={quizSettings.saveAsNewSetting === false}
                value={quizSettings.setting}
                onChange={(e) => {
                  setQuizSetting((state) => ({
                    ...state,
                    setting: e.target.value,
                  }));
                  console.log(quizSettings.setting, "setting");
                }}
              />
            </span>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default FlashCardSave;
