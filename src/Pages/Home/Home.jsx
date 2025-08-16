cimport Hero from "../../components/Hero/Hero"
import How from "../../components/How/How"
import Featured from "../../components/Featured/Featured"
import Testimonial from "../../components/Testimonial/Testimonial"
import Client from "../../components/Client/Client"
import Spinner from "../../components/Spinner/Spinner"
import { useState, useEffect } from "react";

import "./Home.css"


export default function Home() {
	const [loading,setLoading]=useState(true)
	useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
  
  	loading ? <Spinner/> :
  
    <div className="home">
      <section id="Hero">
        <Hero />
      </section>
      <section id="About-us">
        <How />
      </section>
      <section id="Featured-Apartments">
        <Featured />
      </section>
      <section id="Testimonials">
        <Testimonial />
      </section>
      <section>
        <Client/>
      </section>
    </div>

  );
}
