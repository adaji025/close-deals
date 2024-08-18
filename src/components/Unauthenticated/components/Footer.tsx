import Logo from "../../../assets/svg/logo-2.svg";
import { CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-14 md:py-20 mt-32 text-white">
      <div className="app-width">
        <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="font-extralight">
            <img src={Logo} alt="" />
            <div className="mt-5">Tagline</div>
          </div>
          <div>
            <h2 className="font-semibold">CSL</h2>
            <div className="grid gap-3 mt-3 font-extralight">
              <div>About</div>
              <div>Testimonial</div>
              <div>Pricing</div>
              <div>FAQ</div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold">Privacy and Security</h2>
            <div className="grid gap-3 mt-3 font-extralight">
              <div className="cursor-pointer" onClick={() => navigate("/privacy-policy")}>Privacy policy</div>
              <div className="cursor-pointer" onClick={() => navigate("/terms-of-use")}>Terms of Use</div>
              <div className="cursor-pointer" onClick={() => navigate("/cookie-privacy")}>Cookie Policy</div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold">Visit our socials</h2>
            <div className="flex gap-5 mt-7">
              <CiYoutube size={20} color="white" />
              <FaXTwitter size={20} color="white" />
              <FaInstagram size={20} color="white" />
              <FaFacebookF size={20} color="white" />
            </div>
          </div>
        </div>
        <div className="mt-16 border-b border-white/20 pb-16">
          <div className="font-extralight">Subscribe to our newsletter</div>
          <div className="mt-1 flex">
            <input
              type="text"
              placeholder="youremail@gmail.com"
              className="py-3 px-5 outline-none max-w-[500px] w-full rounded-l-full bg-white/15 placeholder:text-white"
            />
            <button className="bg-white rounded-r-full p-3 text-primary">
              Subscribe
            </button>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10 flex flex-col sm:flex-row justify-between gap-5 mt-10">
          <div className="font-extralight">Terms and Conditions</div>
          <div className="font-extralight">
            &copy; {currentYear} CSl
          </div>
          <div className="font-extralight">Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
