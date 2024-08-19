import Logo from "@assets/svg/logo.svg";
import { Button, TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
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
                Enter Email used to register your account
              </div>

              <TextInput size="md" mt={16} label="Email" />
              <Button
                size="md"
                mt={20}
                className="w-full bg-primary"
                onClick={() => navigate("/verify-otp")}
              >
                Continue
              </Button>

              <div
                className="text-center mt-16 cursor-pointer"
                onClick={() => navigate("/")}
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

export default ForgotPassword;
