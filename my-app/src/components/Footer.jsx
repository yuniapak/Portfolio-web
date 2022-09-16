import Linkedin from '../assets/linkedin.png'
import Git from '../assets/github.svg'
const Footer =() =>{
    return (
        <div className='footer'>
            <a href='https://www.linkedin.com/in/iuniia-pakhomova/'>
                <img src={Linkedin} alt='linkedin'/></a>
            <a href={Git} alt='github'>
                <img src='../assets/github.svg' alt='git'/>
            </a>
            <p>Icons by <a target="_blank" href="https://icons8.com" rel="noopener noreferrer">Icons8</a></p>
        </div>
    )
}
export default Footer