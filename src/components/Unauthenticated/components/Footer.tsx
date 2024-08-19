import Logo from "@assets/svg/logo-2.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "@mantine/core";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // "smooth" for smooth scrolling, "auto" for instant
    });
  }

  return (
    <footer className="bg-[#05000F] py-14 md:py-20 mt-32 text-white">
      <div className="app-width">
        <div className="md:bg-[#0C0120]">
          <div className="flex gap-5 flex-col md:flex-row justify-between items-center mb-10 rounded-xl">
            <div className="bg-[#0C0120] flex-1 min-h-[170px] p-5 text-center md:text-start">
              <div className="max-w-[492px]">
                <div className="font-bold text-[24px] md:text-[30px]">
                  Do you need help?
                </div>
                <div className="text-white/50">
                  Do you need help understanding our product offerings,
                  services, types of work, and top projects? We can also assist
                  with calculating costs and preparing a commercial proposal.
                </div>
                <div className="flex justify-center mt-5 md:hidden">
                  <Button
                    className="bg-primary"
                    rightSection={<FaArrowRightLong />}
                  >
                    Get consultation
                  </Button>
                </div>
              </div>
            </div>
            <div className="min-h-[170px] hidden  max-w-[480px] w-full bg-[#130236] py-10 circle text-center md:flex justify-center items-center gap-3 text-xl font-semibold">
              <div>Get consultation</div>
              <FaArrowRightLong size={18} />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-between text-white/50">
          <div className="flex gap-20">
            <div className="md:min-w-[240px]">
              <div className="text-xs italic">Info</div>
              <div className="grid mt-7 gap-2">
                <div>About us</div>
                <div>Works</div>
                <div>Contacts</div>
              </div>
            </div>
            <div>
              <div className="text-xs italic">Our services</div>
              <div className="grid mt-7 gap-2">
                <div>Real-time telepromter</div>
                <div>Machine learning</div>
                <div>Call results analysis</div>
                <div>Call success rate metrics</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:items-end">
            <div>
              <img src={Logo} alt="" />
            </div>

            <div className="mt-16 border border-white/30 w-[45px]"></div>
            <div className="mt-5 grid gap-2 sm:text-end">
              <div>+1 981 981-23-19</div>
              <div>hello@logoipsum.com</div>
            </div>
          </div>
        </div>

        <div className="mt-10 max-w-[848px] w-full flex gap-10 text-white/50">
          <div className="flex-1 border-t border-white/30 flex justify-between gap-5 pt-10">
            <div className="text-xs italic">Instagram</div>
            <FaInstagram />
          </div>
          <div className="flex-1 border-t border-white/30 flex justify-between gap-5 pt-10">
            <div className="text-xs italic">Instagram</div>
            <FaWhatsapp />
          </div>
        </div>

        <div className="mt-10 flex justify-between items-center gap-10 text-white/50 text-xs">
          <div>&copy; {currentYear} — Copyright</div>
          <div
            className="flex justify-center items-center h-[60px] w-[60px] rounded-full border border-white/30 cursor-pointer"
            onClick={scrollToTop}
          >
            <BsArrowUp size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
