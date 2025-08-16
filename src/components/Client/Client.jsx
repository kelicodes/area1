import "./Client.css"
import {useState} from "react"

export default function Client(){
	const [number,setNumber]=useState("")

	const handlesubmit=()=>{
		if (number.trim() === "") return;
		setNumber('')
	}
	
	return (
		<div className="client">
			<h3>Are You looking for an Apartment?</h3>
			<p>We gat you.<span>Drop your phone number below</span> and our team will contact you.</p>
			<div className="phone">
				<input value={number} onChange={(e)=>setNumber(e.target.value)} type="text" placeholder="phone number"/>
				<button onClick={handlesubmit}  className="sub">SUBMIT</button>
			</div>
		</div>)
}