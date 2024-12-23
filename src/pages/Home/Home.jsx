import Footer from "../../Components/Footer/Footer";
import HowItWorks from "../../Components/HowItWorks";
import SuccessStories from "../../Components/SuccessStories";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/*  */}
      {/* extra section */}
      <SuccessStories></SuccessStories>
      <HowItWorks></HowItWorks>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
