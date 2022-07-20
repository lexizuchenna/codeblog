import {BsInstagram, BsFacebook, BsTwitter, BsYoutube} from 'react-icons/bs'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="container">
        <header className='flex'>
            <div className="logo">
                <span className="icon">C</span> CODEBLOG
            </div>
            <div className="social-head">
                <ul>
                    <li> <a href="https://instagram.com"> {< BsInstagram/>}  </a> </li>
                    <li> <a href="https://Facebook.com"> {< BsFacebook/>}  </a> </li>
                    <li> <a href="https://Twitter.com"> {< BsTwitter/>}  </a> </li>
                    <li> <a href="https://Youtube.com"> {< BsYoutube/>}  </a> </li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header