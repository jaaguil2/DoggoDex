import Item from "./Item"

// Component to list each element
function ListtItems({ dataArr}) {
  return (
    <div>
      {dataArr.map((element) => (
        <Item name={element.name} />
      ))}
    </div>
  )
}

export default ListtItems
