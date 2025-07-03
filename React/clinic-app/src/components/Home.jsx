import Contact from "../Contact";
import Testimonial from "../Testimonial";
import About from "./About";
import Appointmnet from "./Appointment";
import Hero from "./Hero";
import Teams from "./Teams";
import Treatment from "./Treatment";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Appointmnet />
            <Treatment />
            <Teams />
            <Testimonial />
            <Contact />
        </>
    )
}