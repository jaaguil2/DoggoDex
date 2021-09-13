

function Total({ seenDogs, dogList}) {
  return (
    <h2>{`Total: ${seenDogs.length}/${dogList.length}`}</h2>
  )
}

export default Total