import BannerImage from "@assets/png/banner.png";
import Ball from "@assets/svg/ball.svg";
import Ball1 from "@assets/svg/ball-1.svg";
import Star from "@assets/svg/star.svg";

const Banner = () => {
  return (
    <div className="app-width flex flex-col justify-center min-h-screen relative">
      <div className="text-center font-semibold text-[48px] mt-32 max-w-[840px] mx-auto text-black">
        Instantly improve your <span className="text-primary">sales call</span>{" "}
        and{" "}
        <span className="bg-secondary/80 rounded-md px-2">conversion rate</span>
      </div>
      <div className="mt-10 flex justify-center">
        <img src={BannerImage} alt="" />
      </div>
      <div>
        <img src={Ball1} alt="" className="absolute top-[150px] left-[200px] animate-pulse" />
      </div>
      <div>
        <img src={Ball} alt="" className="absolute right-[100px] bottom-[200px] animate-pulse" />
      </div>
      <div>
        <img src={Star} alt="" className="absolute right-[100px] top-[200px] animate-pulse" />
      </div>
      <div>
        <img src={Star} alt="" className="absolute left-[100px] bottom-[200px] animate-pulse" />
      </div>
    </div>
  );
};

export default Banner;
