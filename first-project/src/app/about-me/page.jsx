import './style.css'
import Nav from '../components/Nav'
function AboutMe() {
  return(
    <>
      <Nav/>
    <div className="info-about-me">
    <div className="text-about-me">
    <h1>Hi, My name's <br />
      <span>Maratov Jamshid</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.
      </p>
    </div>
      <div className="img-about-me">
      <img 
        src="https://img.freepik.com/free-photo/rendering-person-with-different-personalities_23-2151112932.jpg?t=st=1744821168~exp=1744824768~hmac=5baea37561bc6e5023c09838227172db2e33c81f0ec81e8857409ce3d33dd673&w=1380"/>
      </div>
    </div>
    </>
  )
}
export default AboutMe