

// Component to build each item
function Item({name, setDog}) {

  const clicked = (e) => {
    setDog(e.currentTarget.innerText)
  }


  return (
    <p onClick={clicked}>{name}</p>
  );
};

export default Item;
