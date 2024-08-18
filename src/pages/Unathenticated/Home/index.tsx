import Navbar from "@components/Unauthenticated/components/Navbar";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Testimonies from "./components/Testimonies";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Offer />
      <Testimonies />
    </div>
  );
};

export default Home;
