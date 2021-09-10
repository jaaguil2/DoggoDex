

// Imported Components
import Search from "./Search";
import ListtItems from "./ListItems";

// Main component for list branch
function List({ dataArr }) {
  return (
    <div>
      <Search />
      <ListtItems dataArr={dataArr} />
    </div>
  );
};

export default List;
