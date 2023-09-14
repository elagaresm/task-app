import Content from "./Content";

export default function Contents({contentList, activeContent}) {
  return (
    <div className="py-12 px-10">
      <Content contentList={contentList} activeContent={activeContent}/>
    </div>
  );
}
