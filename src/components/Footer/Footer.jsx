import "./Footer.css"

export default function Footer(){
	return (
		<div className="footer">
			<div className="leftnav">
				<h4>Area1</h4>
				<p>Your trsuted housing patners in <span> Daystar Uni</span>. We provide legitimate
				 house hunting services for Daystar students stationed at Athi river campus at a friendli fee.</p>
			</div>
			<div className="rightnav">
				<h5>Quick <span>Links</span></h5>
				<ul>
					<li><a href="Home">Home</a></li>
                    <li><a href="#About us">About us</a></li>
                    <li><a href="#Featured Apartments">Featured Apartments</a></li>
                    <li><a href="#Testimonials">Testimonials</a></li>
					<li><a href="#Join us">Join us</a></li>
				</ul>
			</div>
			<div className="centernav">
				<h5> Our <span>Services</span></h5>
				<ul>
				<li><a>House hunting</a></li>
				<li><a>House moving</a></li>
				<li><a>Carpet cleaning</a></li>
				</ul>
			</div>
		</div>)
}

 