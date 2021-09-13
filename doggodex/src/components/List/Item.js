

// Component to build each item
function Item({name, setDog, seenDogs, setSeenDogs}) { 
  

  const clicked = (e) => {
    setDog(e.currentTarget.innerText)
  }

  const handleChecked = (e) => {
    let target = e.target.id
    let newArr = seenDogs.slice()
    if (newArr.includes(target)) {
      newArr = newArr.filter(dog => dog !== target)
    } else {
      newArr.push(target)
    }
    setSeenDogs(newArr)
  }

  return (
    <div>
      <input id={name} type='checkbox' onClick={handleChecked} />
      <p onClick={clicked}>{name.toUpperCase()}</p>
    </div>
    
  );
};

export default Item
