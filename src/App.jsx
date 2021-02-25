import {Switch, Route} from 'react-router-dom';
import './app.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Login from './Login';
import ErrorPage from './ErrorPage';

const App =()=>{
	return (<>
		<div style={{height: '100vh',width:'100%',boxSizing:'border-box'}}>
		<Navbar/>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/home" component={Home}/>
			<Route exact path="/about" component={About}/>
			<Route exact path="/service" component={Service}/>
			<Route exact path="/contact" component={Contact}/>
			<Route exact path="/login" component={Login}/>
			<Route component={ErrorPage} />
		</Switch>
		</div>
		</>);
}

export default App; 