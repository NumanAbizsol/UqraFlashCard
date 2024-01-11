import React, { useState } from "react";
import Tab from "../../components/shared/headerAndTabs/Tabs";
// import GeneralForm from "./generalInfo/GeneralForm";
import FlashCardSetting from "./flashCardSetting/FlashCardSetting";
import Layout from "./layout/Layout";
import Publish from "./publish/Publish";
import Preview from "./preview/Preview";
import GeneralForm from "./generalInfo/GeneralForm";

const tabData = [
  { name: "General Info", page: GeneralForm },
  { name: "Flashcard Settings", page: FlashCardSetting },
  { name: "Layout", page: Layout },
  { name: "Adding Flashcard", page: null },
  { name: "Publish", page: Publish },
  { name: "Preview", page: Preview },
];

const FlashCard = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  // const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  return (
    <div>
      <div className="tabs-div">
        <div style={{ backgroundClip: "white" }}>
          <Tab
            tabData={tabData}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        </div>
        <div>
          {tabData[selectedTab].page &&
            React.createElement(tabData[selectedTab].page, {
              setSelectedTab: setSelectedTab,
            })}
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
