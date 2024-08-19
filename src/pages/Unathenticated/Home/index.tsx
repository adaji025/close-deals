import Navbar from "@components/Unauthenticated/components/Navbar";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Testimonies from "./components/Testimonies";
import Demo from "./components/Demo";
import Footer from "@components/Unauthenticated/components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Offer />
      <Testimonies />
      <Demo />
      <Footer />
    </div>
  );
};

export default Home;
