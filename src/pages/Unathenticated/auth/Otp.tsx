import Logo from "@assets/svg/logo.svg";
import { Button, PinInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const VeryOtp = () => {
  const navigate = useNavigate();
  return (
    <div className="auth1">
      <div className="auth2">
        <div className="flex items-end min-h-screen w-full">
          <div className="px-5 min-h-[50vh] bg-white w-full flex py-10 flex-col justify-center items-center rounded-t">
            <img src={Logo} alt="" />
            <div className="mt-10 max-w-[500px] w-full mx-auto">
              <div className="text-2xl font-bold text-black">
                Forgot password
              </div>
              <div className="mt-2">
                Check your email for a 5 digits OTP , input them in the field
                below and reset your password
              </div>

              <div className="flex flex-col items-center gap-2 justify-center mt-4">
                <div className="Enter OTP">Enter OTP</div>
                <PinInput size="md" />
              </div>
              <Button
                size="md"
                mt={20}
                className="w-full bg-primary"
                onClick={() => navigate("/reset-password")}
              >
                Continue
              </Button>

              <div
                className="text-center mt-16 cursor-pointer"
                onClick={() => navigate("/reset-password")}
              >
                Don’t have an account? Click to create an account/Sign up
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeryOtp;
