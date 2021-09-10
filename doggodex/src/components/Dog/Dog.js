

// Imported Components
import Image from "./Image"
import Button from "./Button"

// Main component for selected dog
function Dog({ data }) {
  return (
    <div>
      <h2>{data.name}</h2>
      <Image image={ data.image } />
      <Button />
    </div>
  )
}

export default Dog
