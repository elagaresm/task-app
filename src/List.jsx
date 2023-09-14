export default function List({ list }) {
  return (
    <>
      {list.map((ele, index) => {
        return <li key={`li-${index}`}>{ele}</li>;
      })}
    </>
  );
}
