

// Imported Components
import Search from "./Search";
import ListItems from "./ListItems";

// Main component for list branch
function List({ dataArr }) {
  return (
    <div>
      <Search />
      <ListItems dataArr={dataArr} />
    </div>
  );
};

export default List;
