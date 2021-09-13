

// Displays Image
function Image({ image, dogBreed, dogSubBreed }) {
  return (
    <img src={image} alt={dogSubBreed + '-' + dogBreed} />
  )
}

export default Image
