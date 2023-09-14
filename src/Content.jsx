import List from "./List";

export default function Content({ contentList, activeContent }) {

  const contents = contentList.map((content, index) => {
    return (
      <div className={activeContent !== content ? "hidden" : ""} key={`content-${index}`}>
        <ul>{content.title}</ul>
        <List list={content.body}/>
      </div>
    )
  })

  return <>{ contents }</>
}
