

// Component to build each item
function Item({name, setDog}) {

  const clicked = (e) => {
    setDog(e.currentTarget.innerText)
  }

  return (
    <div>
      <input type='checkbox' />
      <p onClick={clicked}>{name.toUpperCase()}</p>
    </div>
    
  );
};

export default Item;
