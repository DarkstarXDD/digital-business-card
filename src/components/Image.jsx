import portrait from "../assets/images/portrait.jpg"

export default function Image() {
  return (
    <img
      className="hero-img"
      src={portrait}
      alt="A portrait of a women with brown hair smiling at the camera"
      width="317"
      height="317"
    />
  )
}
