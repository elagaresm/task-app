import Tabs from "./Tabs";
import Contents from './Contents'
import "./App.css";

function App() {
  return (
    <>
      <button data-open>Click here</button>
      <div className="w-[80vmin] h-[300px] absolute top-28 right-1/2 translate-x-1/2 border border-solid border-white bg-white shadow-2xl">
        <Tabs />
        <Contents />
      </div>
      <dialog data-modal>
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
