
// Displays Image
function Image({ image, dogBreed, dogSubBreed }) {
  return (
    <img src={ image } alt={dogBreed+'-'+dogSubBreed} />
  )
}

export default Image
