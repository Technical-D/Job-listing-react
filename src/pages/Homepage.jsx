import Hero from "../components/Hero";
import Homecard from "../components/Homecard";
import Joblisting from "../components/Joblisting";
import Viewalljob from "../components/Viewalljob";

const Homepage = () => {
  return (
    <>
    <Hero />
    <Homecard />
    <Joblisting isHome={true}/>
    <Viewalljob />
    </>
)
}

export default Homepage