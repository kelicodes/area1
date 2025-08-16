import "./Hero.css"
import {Link } from 'react-router-dom'

export default function Hero(){
	return(
		<div className="hero">
			<div className="content">
				<h1>Find your <span> perfect hostel </span> near Daystar</h1>
				<p>Book affordable off-campus housing in minutes -- stress free and student friendly</p>
			</div>
			<div className="buttons">
			<Link to="/collection">
			<button className="btn">Browse hostels</button>
			</Link>
			<a className="stain" href=''>Join us</a>
			</div>
		</div>)
} 