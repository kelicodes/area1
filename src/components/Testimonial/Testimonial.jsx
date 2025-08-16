import {useState,useEffect} from 'react'
import {assets} from "../../assets/assets"
import "./Testimonial.css"
export const Testimonial=()=>{
	const [currentslide,setCurrentslide]=useState(0)
 const testimonials = [
    {
      name: "Elija Montana",
      year_of_study: "1st Year",
      image: assets.test1,
      testimonial:
        "Finding my apartment here was a blessing! The photos were accurate, the landlord was genuine, and I moved into my Westlands flat in less than a week.",
    },
    {
      name: "Judy Montana",
      year_of_study: "2nd Year",
      image: assets.test2,
      testimonial:
        "This platform made my apartment search stress-free. I viewed three houses online, visited one, and signed the lease the same day.",
    },
    {
      name: "Edward Steve",
      year_of_study: "3rd Year",
      image: assets.test3,
      testimonial:
        "I was worried about hidden charges, but everything was transparent. The place I rented in Kilimani was exactly as listed — 10/10 experience.",
    },
  ]

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentslide((prev) => (prev + 1) % testimonials.length);
  }, 4000);

  return () => clearInterval(interval);
}, []);


	const current=testimonials[currentslide]



	return(
		<div className="Testimonial">
      <h3>Testimonials</h3>
      {current && (
        <div className="mytestimonial">
          <div className="left">
            <img src={current.image} alt={current.name} />
            <p>{current.name}</p>
            <p>{current.year_of_study}</p>
          </div>
          <div className="right"><p>{current.testimonial}</p></div>
        </div>
      )}

      {/* Dots Navigation */}
      <div className="dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentslide(index)}
            className={`dot ${index === currentslide ? "active" : ""}`}
          ></button>
        ))}
      </div>
    </div>)
}


export default Testimonial





 // <div className="flex justify-center mt-4 space-x-2">
 //        {testimonials.map((_, index) => (
 //          <button
 //            key={index}
 //            onClick={() => setCurrentIndex(index)}
 //            className={`w-3 h-3 rounded-full ${
 //              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
 //            }`}
 //          ></button>
 //        ))}
 //      </div>