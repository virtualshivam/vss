import {NavLink} from 'react-router-dom';
import logoimg from './img/logo.png';
import MenuIcon from '@material-ui/icons/Menu';



const Navbar=()=>{

	
	const responsiveMenuHide=()=>{
		const links_div = document.querySelector('.links_div');
		const link = document.getElementsByClassName('link');

		links_div.classList.add('hide_links_div');
		link[0].classList.add('hide_link');
		link[1].classList.add('hide_link');
		link[2].classList.add('hide_link');
		link[3].classList.add('hide_link');
		link[4].classList.add('hide_link');

	}

	const responsivness=()=>{
		const links_div = document.querySelector('.links_div');
		const link = document.getElementsByClassName('link');
		const menu =document.querySelector('.menu');

		links_div.classList.remove('hide_links_div');
		link[0].classList.remove('hide_link');
		link[1].classList.remove('hide_link');
		link[2].classList.remove('hide_link');
		link[3].classList.remove('hide_link');
		link[4].classList.remove('hide_link');

		links_div.classList.toggle('responsive_links_div');
		link[0].classList.toggle('responsive_link');
		link[1].classList.toggle('responsive_link');
		link[2].classList.toggle('responsive_link');
		link[3].classList.toggle('responsive_link');
		link[4].classList.toggle('responsive_link');
		menu.classList.toggle('.responsive_menu');

	}


	return <section  className="menu">
		<div className="logo_div">
			<NavLink exact to='/'><img src={logoimg} alt="logo" id="logo_img" /></NavLink>
		</div>
		<div className='burger_div' onClick={responsivness}><MenuIcon style={{fontSize:'45px'}} /></div>
		<div className="links_div">
			<div className="link" onClick={responsiveMenuHide}><NavLink exact activeClassName="menu_active" className="nav_link" to='/'>home</NavLink></div>
			<div className="link" onClick={responsiveMenuHide}><NavLink exact activeClassName="menu_active" className="nav_link" to='/about'>about</NavLink></div>
			<div className="link" onClick={responsiveMenuHide}><NavLink exact activeClassName="menu_active" className="nav_link" to='/service'>service</NavLink></div>
			<div className="link" onClick={responsiveMenuHide}><NavLink exact activeClassName="menu_active" className="nav_link" to='/login'>log in</NavLink></div>
			<div className="link" onClick={responsiveMenuHide}><NavLink exact activeClassName="menu_active" className="nav_link" to='/contact'>contact us</NavLink></div>
		</div>
	</section>
}

export default Navbar;
