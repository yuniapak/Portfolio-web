import Nav from '../components/Nav'
import { useState, useEffect } from 'react'
import Quiz1 from '../assets/Quiz1.png'
import Quiz2 from '../assets/Quiz2.png'

const Portfolio = () => {
  let imagesQuiz = [Quiz1, Quiz2]
  const [index, setIndex] = useState(0)
  const [showP, setShowP] = useState(false)
  const [card, setCard] = useState('')
  const showInfo = (e) => {
    setShowP(true)
    setCard(e.target.className)
    console.log(e.target.className)
  }
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (index === imagesQuiz.length - 1) {
  //       setIndex(0)
  //     } else {
  //       setIndex(1)
  //     }
  //   }, 8000)
  //   return () => clearInterval(index)
  // }, [])

  return (
    <div className="portfolio">
      <div classsName="portfolio-nav">
        <Nav />
      </div>
      <div className="projects">
        <div className="project-card">
          <div className="about-lang" onClick={showInfo}>
            <h2>QuizCards</h2>
            <div className="about-lang">
              <img src={imagesQuiz[index]} alt="image" />
            </div>
            <div>
              {showP && card == 'about-lang' ? (
                <p>
                  Built using PERN. Flash card study app, with easy
                  authentication system and user design. Allows you to create
                  your own card library and take a quiz to check your knowledge.
                  Full CRUD on cards page, to create, update, delete your cards
                  from the library.{' '}
                </p>
              ) : null}
              <a href="https://github.com/yuniapak/quizcards">GitHub</a>
              <a href="https://quizardsapp.herokuapp.com/">Game</a>
            </div>
          </div>
        </div>
        <div>&nbsp;</div>
        <div className="project-card">
          <div key="project-card-2" onClick={showInfo}>
            <h2>My Garden</h2>
            <img src={imagesQuiz[index]} alt="image" />
            <div className="about-lang-1">
              {showP && card == 'about-lang-1' ? (
                <p>
                  {' '}
                  Built using MERN. Gardening App that allows you to find any
                  sort of information about plants and how to care about garden,
                  has a built in search bar to find right plant. Function for
                  companion planting that allows you to see what would be best
                  planted with each other, using full CRUD you can add plant to
                  the cart and make a chart for companion plants out of your
                  cart.{' '}
                </p>
              ) : null}
              <a href="https://github.com/yuniapak/Your-Garden">GitHub</a>
              <a href="#">Game</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div key="project-card-3" onClick={showInfo}>
            <h2>Maze Game: 'Sweet pea'</h2>
            <div className="about-lang-2">
              <img src={imagesQuiz[index]} alt="image" />
            </div>
            <div className="about-lang-2">
              {showP && card == 'about-lang-2' ? (
                <p>
                  Built with vanilla JavaScript, HTML and CSS. Game with
                  animated character named 'Pea', that moves using arrow
                  buttons, has 3 levels and live bar. To win a game you have to
                  move through Maze and don't hit the wall, each hit will take
                  one live away.
                </p>
              ) : null}
              <a href="https://github.com/yuniapak/Maze">GitHub</a>
              <a href="https://devilish-plants.surge.sh/index.html">Game</a>
            </div>
          </div>
        </div>
        <div>&nbsp;</div>
        <div className="project-card">
          <div key="project-card-4" onClick={showInfo}>
            <h2>Maze Game: 'Sweet pea'</h2>
            <div className="about-lang-3">
              <img src={imagesQuiz[index]} alt="image" />
            </div>
            <div className="about-lang-3">
              {showP && card == 'about-lang-3' ? (
                <p>
                  Built with vanilla JavaScript, HTML and CSS. Game with
                  animated character named 'Pea', that moves using arrow
                  buttons, has 3 levels and live bar. To win a game you have to
                  move through Maze and don't hit the wall, each hit will take
                  one live away.
                </p>
              ) : null}
              <a href="https://github.com/yuniapak/Maze">GitHub</a>
              <a href="https://devilish-plants.surge.sh/index.html">Game</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Portfolio