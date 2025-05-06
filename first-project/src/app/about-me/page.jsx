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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.Lorem ipsum
 Quasi, voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.Lorem ipsum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.Lorem ipsum
         Quasi, voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.Lorem ipsum
      </p>
    </div>
      <div className="img-about-me">
      <img className='about-me-img'
        src="https://img.freepik.com/free-photo/autumn-leaf-close-up-with-city-lights-bokeh-rainy_1268-29450.jpg?t=st=1744958637~exp=1744962237~hmac=7da8551b65463b60591390f5690f4ed555d50629109c4a545f6aea737981a24c&w=996"/>
      </div>
    </div>

    </>
  )
}
export default AboutMe