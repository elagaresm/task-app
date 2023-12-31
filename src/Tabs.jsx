// import { useEffect } from "react";

export default function Tabs({ tabList, activeTab, setActiveTab, contentList, setActiveContent }) {
  function handleClick(index) {
    setActiveTab(tabList[index]);
    setActiveContent(contentList[index])
  }

  const styles = {
    h3: "bg-[#e4e9fd] text-center py-4 cursor-pointer font-bold",
    activeH3:
      "bg-[#e4e9fd] text-center py-4 cursor-pointer font-bold bg-white text-[#6495ED]",
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))]">
      {tabList.map((tab, index) => {
        return (
          <h3
            key={index}
            onClick={() => handleClick(index)}
            className={activeTab === tab ? styles.activeH3 : styles.h3}
          >
            {tab.title}
          </h3>
        );
      })}
    </div>
  );
}
