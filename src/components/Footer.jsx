import { Link } from "react-router-dom";
import "./Footer.style.css";
import {
	FaFacebookSquare,
	FaTwitterSquare,
	FaLinkedin,
	FaGithubSquare,
} from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className='main_footer'>
				<div className='left_footer_bar'>
					<div>
						<Link to='/home'>Home</Link> <span className='space'> {"-"} </span>
						<Link to='/produse'>Produse</Link>
						<hr />
						<p>Company Name &copy;{new Date().getFullYear} 2015</p>
					</div>
				</div>
				<div className='socialmedia'>
					<Link>
						<FaFacebookSquare className='icon' />
						<FaTwitterSquare className='icon' />
						<FaLinkedin className='icon' />
						<FaGithubSquare className='icon' />
					</Link>
				</div>
			</div>
		</>
	);
}

export default Footer;
