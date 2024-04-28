import React, { FC, useEffect, useRef, useState } from "react";
import "./TabsTop.scss";

interface TabsTopProps {
  tabs: string[];
  baseClass?: string;
  getActiveTab?: (activeTab: number) => void;
}

const TabsTop: FC<TabsTopProps> = ({ tabs, baseClass = "", getActiveTab }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabRefs = useRef([]);

  useEffect(() => {
    const currentTab = tabRefs.current[activeTab];
    if (currentTab) {
      setUnderlineStyle({
        width: currentTab.offsetWidth,
        left: currentTab.offsetLeft,
      });
    }
  }, [activeTab, tabs]);

  useEffect(() => {
    getActiveTab(activeTab);
  }, [activeTab]);

  return (
    <div className={`tabs-container ${baseClass}`}>
      <div className={`tabs ${baseClass ? `${baseClass}__top` : ""}`}>
        {tabs.map((tab, index) => (
          <button
            type="button"
            key={index}
            ref={(el) => (tabRefs.current[index] = el)}
            className={`heading-h6 tab ${baseClass ? `${baseClass}__button` : ""} ${
              index === activeTab ? "active" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="underline" style={underlineStyle}></div>
    </div>
  );
};

export default TabsTop;
