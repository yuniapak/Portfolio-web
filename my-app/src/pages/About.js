import Nav from '../components/Nav'
import myPicture from '../assets/myPic.JPG'
import REACT from '../assets/icons/REACT1.png'
import NODE from '../assets/icons/JS.png'
import CSS from '../assets/icons/CSS1.png'
import HTML from '../assets/icons/HTML1.png'
import DJANGO from '../assets/icons/django.png'
import MONGO from '../assets/icons/Mongo.png'
import PYTHON from '../assets/icons/Python.png'
import JS from '../assets/icons/vanillaJS.png'
import VUE from '../assets/icons/VUE.png'
import PSQL from '../assets/icons/postgres.png'
import Resume from '../assets/IuniiaPakhomova-Resume.pdf'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  const [lang, setLang] = useState('front')
  const [style, setStyle] = useState('about-lang')
  const [regular, setRegular] = useState('about-lang-active')
  const switchLang = () => {
    if (lang == 'front') {
      setLang('back')
      setStyle('about-lang-active')
      setRegular('about-lang')
    }
  }
  const switchBack = () => {
    if (lang == 'back') {
      setLang('front')
      setStyle('about-lang')
      setRegular('about-lang-active')
    }
  }
  return (
    <div>
      <Nav />
      <div className="about">
        <img src={myPicture} />
        <h2>Hello, my name is Iuniia Pakhomova</h2>
        <div className="about-icons">
          <div onClick={switchBack} className={regular}>
            <h3>Languages</h3>
          </div>
          <div onClick={switchLang} className={style}>
            <h3>BackEnd</h3>
          </div>

          {lang == 'front' ? (
            <div>
              <img src={REACT} />
              <img src={JS} />
              <img src={HTML} />
              <img src={CSS} />
              <img src={PYTHON} />
              <img src={VUE} />
            </div>
          ) : (
            <div>
              <img src={NODE} />
              <img src={MONGO} />
              <img src={PSQL} />
              <img src={DJANGO} />
            </div>
          )}
        </div>
        <p>
          Model turned Software Engineer with a passion for graphic design and
          problem solving. I love challenges, creating a plan and strategic
          goals, and reaching a destination. In team settings, I bring passion,
          vision, motivation, and a strong sense of organization and structure.{' '}
        </p>
        <Link to={Resume} target="_blank" downoload>
          My Resume
        </Link>
        <h4>feel free to email me</h4>
      </div>
    </div>
  )
}
export default About
