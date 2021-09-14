

function Total({ seenDogs, dogList}) {
  return (
    <h3>{`TOTAL SEEN: ${seenDogs.length}/${dogList.length}`}</h3>
  )
}

export default Total