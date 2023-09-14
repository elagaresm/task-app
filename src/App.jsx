import Tabs from "./Tabs";
import Contents from "./Contents";
import "./App.css";

function App() {
  function handleOpenModalClick() {
    /*TODO: implement useRef to open the modal and focus it*/
  }

  function handleCloseModalClick() {
    /*TODO: implement useRef to close the modal*/
  }

  function handleCloseOuterModalClick() {
    modal.addEventListener("click", (e) => {
      const dialogDimensions = modal.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        modal.close();
      }
    });
  }

  return (
    <>
      <button data-open>Click here</button>
      <div className="w-[80vmin] h-[300px] absolute top-28 right-1/2 translate-x-1/2 border border-solid border-white bg-white shadow-2xl">
        <Tabs />
        <Contents />
      </div>
      <dialog data-modal className="absolute right-1/2 bottom-1/2">
        <form>
          <label htmlFor="addList">Add a list</label>
          <input id="addList" name="listName" type="text" />
          <button type="submit">Submit</button>
          <button data-close></button>
        </form>
      </dialog>
    </>
  );
}

export default App;
