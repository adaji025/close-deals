import { Fragment } from "react";
import BannerImage from "@assets/png/banner.png";
import Ball from "@assets/svg/ball.svg";
import Ball1 from "@assets/svg/ball-1.svg";
import Star from "@assets/svg/star.svg";
import GeneralElectric from "@assets/svg/partners/General Electric.svg";
import Accenture from "@assets/svg/partners/Accenture.svg";
import Pingan from "@assets/svg/partners/Ping An.svg";
import Spectrum from "@assets/svg/partners/Charter Spectrum.svg";
import Verizon from "@assets/svg/partners/Verizon.svg";
import UnitedHealth from "@assets/svg/partners/United Healthcare.svg";

const Banner = () => {
  return (
    <Fragment>
      <div className="app-width flex flex-col justify-center min-h-screen relative">
        <div className="text-center font-semibold text-[48px] mt-32 max-w-[840px] mx-auto text-black">
          Instantly improve your{" "}
          <span className="text-primary">sales call</span> and{" "}
          <span className="bg-secondary/80 rounded-md px-2">
            conversion rate
          </span>
        </div>
        <div className="mt-10 flex justify-center">
          <img src={BannerImage} alt="" />
        </div>
        <div>
          <img
            src={Ball1}
            alt=""
            className="absolute top-[150px] left-[200px] animate-pulse"
          />
        </div>
        <div>
          <img
            src={Ball}
            alt=""
            className="absolute right-[100px] bottom-[200px] animate-pulse"
          />
        </div>
        <div>
          <img
            src={Star}
            alt=""
            className="absolute right-[100px] top-[200px] animate-pulse"
          />
        </div>
        <div>
          <img
            src={Star}
            alt=""
            className="absolute left-[100px] bottom-[200px] animate-pulse"
          />
        </div>
      </div>
      <div className="bg-[#0E0029] px-5 py-10">
        <div className="px-5 text-center text-white/50 text-lg mb-6">
          Trusted collaborators and companies that employ our services
        </div>
        <div className="app-width flex justify-center flex-wrap gap-5">
          <img src={GeneralElectric} alt="" />
          <img src={Accenture} alt="" />
          <img src={Pingan} alt="" />
          <img src={Spectrum} alt="" />
          <img src={Verizon} alt="" />
          <img src={UnitedHealth} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
