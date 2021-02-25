import React from 'react';
import {useState} from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

const Login=()=>{

let[formData,setFormData]=useState({
	email:'',
	pass:''
})

const inputEvent=(e)=>{
	let {value,name}=e.target;
	setFormData((preVal)=>{
		return {
			...preVal,
			[name]:value
		}
	})
}


const submitEvent=(e)=>{
	e.preventDefault();
	alert(`Log In Successfull. Email:${formData.email} and Password:${formData.pass}`);

}

return (<>
	<div className='Login_form_div'>
		<div className="form_center_div">
			<form onSubmit={submitEvent}>
				<div className="input_div">
					<input spellcheck='false' type="email" placeholder='Email address or phone number' onChange={inputEvent} name='email' value={formData.email} required />
				</div>
				<div className="input_div">
					<input spellcheck='false' type="password" placeholder='Password' onChange={inputEvent} name='pass' value={formData.pass} required />
				</div>
				<div className="btn_div">
					<button type='submit'>Log In</button>
				</div>
				<p className='forget_password'><a>Forgotten Password?</a></p>
				<hr id='hr_line'/>
				<h4 className="add_login_options">Or sign in using &nbsp; <sub><span><FacebookIcon style={{color:"#1778f2",fontSize:'45px'}}/></span>&nbsp;&nbsp;&nbsp;&nbsp;  <span><GitHubIcon style={{fontSize:'45px'}}/></span>&nbsp;&nbsp;&nbsp;&nbsp;   <span><TwitterIcon style={{color:'#00aced',fontSize:'45px'}}/></span></sub></h4>
			</form>
		</div>
	</div>
	</>)
}

export default Login;