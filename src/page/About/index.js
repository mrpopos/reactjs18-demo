import { useParams } from "react-router-dom"

const About = () => {
  const params = useParams()
  return (
    <div>
      <h5>关于我们</h5>
      <p>params.id:{params.id}</p>
    </div>
  )
}

export default About
