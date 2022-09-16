import Linkedin from '../assets/linkedin.png'
import Git from '../assets/github.svg'
const Footer =() =>{
    return (
        <div className='footer'>
            <a href='https://www.linkedin.com/in/iuniia-pakhomova/'>
                <img src='../assets/linkedin.png' alt='linkedin'/></a>
            <a href='https://github.com/yuniapak' alt='github'>
                <img src='../assets/github.svg'/>
            </a>
            <p>Icons by <a target="_blank" href="https://icons8.com">Icons8</a></p>
        </div>
    )
}
export default Footer