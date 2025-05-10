import Footer from "../../Components/Footer/Footer";
import HowItWorks from "../../Components/HowItWorks";
import LostAndFound from "../../Components/LostAndFound";
import SuccessStories from "../../Components/SuccessStories";
import Banner from "./Banner";
import FAQSection from "./FAQSection";
import NewsletterSection from "./NewsletterSection";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/*  */}
      <LostAndFound></LostAndFound>
      {/* extra section */}
      <SuccessStories></SuccessStories>
      <HowItWorks></HowItWorks>
      <FAQSection></FAQSection>
      <NewsletterSection></NewsletterSection>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
