import Tabs from "./Tabs";
import Contents from "./Contents";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [tabList, setTabList] = useState([{ title: "Tab 1" }]);
  const [activeTab, setActiveTab] = useState(tabList[0]);
  const [contentList, setContentList] = useState([
    { title: "Content 1", body: ["foo", "bar"] },
  ]);
  const [activeContent, setActiveContent] = useState(contentList[0]);
  const modalRef = useRef(null);
  const inputRef = useRef(null);

  function handleOpenModalClick() {
    modalRef.current?.showModal();
    inputRef.current?.focus();
  }

  function handleCloseOuterModalClick(e) {
    const dialogDimensions = modalRef.current?.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modalRef.current?.close();
    }
  }

  function handleModalSubmit(e) {
    e.preventDefault();
    const tabTitle = inputRef.current?.value;
    modalRef.current?.close();
    inputRef.current.value = "";

    if (tabList.length < 3) {
      setTabList([...tabList, { title: tabTitle }]);
      setContentList([...contentList, {title: "New Tab", body: ["Enter a new bullet point"]}]);
    } else {
      alert("Maximum amount of lists reached (3)");
    }
  }

  return (
    <>
      <button onClick={handleOpenModalClick}>Click here</button>
      <div className="w-[80vmin] h-[300px] absolute top-28 right-1/2 translate-x-1/2 border border-solid border-white bg-white shadow-2xl">
        <Tabs
          tabList={tabList}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          contentList = {contentList}
          setActiveContent={setActiveContent}
        />
        <Contents contentList={contentList} activeContent={activeContent} />
      </div>
      <dialog
        ref={modalRef}
        className="absolute right-1/2 bottom-1/2"
        onClick={handleCloseOuterModalClick}
        onSubmit={handleModalSubmit}
      >
        <form>
          <label htmlFor="addList">Add a list</label>
          <input ref={inputRef} id="addList" name="listName" type="text" />
          <button type="submit">Submit</button>
          <button onClick={() => modalRef.current?.close()}></button>
        </form>
      </dialog>
    </>
  );
}

export default App;
