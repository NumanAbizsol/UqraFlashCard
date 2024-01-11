import { Collapse, Select } from "antd";
const { Panel } = Collapse;

const QuizType = () => {
  return (
    <Collapse
      size="large"
      expandIconPosition="end"
      style={{ backgroundColor: "white" }}
      className="test"
      bordered={false}
    >
      <Panel header={<h4 style={{ margin: "0" }}>Quiz Setting</h4>} key="1">
        <Select
          style={{
            width: "100%",
            height: "34px",
            borderRadius: "4px",
            border: "2px solid #0000001A",
            gap: "4PX",
          }}
          value="Default setting"
          // value={quizSettings.setting}
          // onChange={(value) => {
          //   const arr = settings.find((pre) => {
          //     if (pre.name === value) return pre.setting;
          //   });
          //   console.log({ ...arr.setting });
          //   setQuizSetting({
          //     ...arr.setting,
          //   });
          // }}
        >
          <option value={"default Setting"}>Choose an option</option>
          {/* {settings.map((setting, index) => (
              <option key={index} value={setting.name}>
                {setting.name}
              </option>
            ))} */}
        </Select>
      </Panel>
    </Collapse>
  );
};

export default QuizType;
