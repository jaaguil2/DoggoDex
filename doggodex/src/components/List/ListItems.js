import Item from "./Item"

// Component to list each element
function ListItems({ dataArr}) {
  return (
    <div>
      {dataArr.map((element, idx) => (
        <Item key={idx} name={element.name} />
      ))}
    </div>
  )
}

export default ListItems
