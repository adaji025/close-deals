import Logo from "@assets/svg/logo.svg";
import useNotification from "@hooks/useNotification";
import {
  Button,
  Checkbox,
  LoadingOverlay,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { userLogin } from "@services/auth";
import { Fragment, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const { handleError } = useNotification();
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (value: any) => {
    setLoading(true);

    userLogin(value)
      .then((res: any) => {
        console.log(res.data.data);
        localStorage.setItem("_closeDeals", res.data.data);
        navigate("/dashboard");
      })
      .catch((err) => {
        handleError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const validate = useCallback(() => {
    if (form.values.email === "" || form.values.password === "") {
      return true;
    }
    return false;
  }, [form]);

  return (
    <Fragment>
      <LoadingOverlay visible={loading} />
      <div className="auth1">
        <div className="auth2">
          <div className="flex items-end min-h-screen w-full">
            <div className="px-5 min-h-[50vh] bg-white w-full flex py-10 flex-col justify-center items-center rounded-t">
              <img src={Logo} alt="" />
              <div className="mt-10 max-w-[500px] w-full mx-auto">
                <div className="text-2xl font-bold text-black">
                  Sign into CloseDeals
                </div>
                <div className="mt-2">
                  Enter Email used to register your account
                </div>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                  <TextInput
                    type="email"
                    size="md"
                    mt={16}
                    label="Email"
                    radius="md"
                    {...form.getInputProps("email")}
                    autoComplete="email"
                  />
                  <PasswordInput
                    size="md"
                    mt={16}
                    label="Password"
                    radius="md"
                    {...form.getInputProps("password")}
                  />
                  <Button
                    radius="md"
                    size="md"
                    mt={20}
                    className="w-full bg-primary disabled:bg-primary/80"
                    type="submit"
                    disabled={validate()}
                  >
                    Log in
                  </Button>
                  <div className="mt-4 flex justify-between">
                    <Checkbox color="black" label="Remember me" />
                    <div
                      className="cursor-pointer text-black"
                      onClick={() => navigate("/forgot-password")}
                    >
                      Forgot your password?
                    </div>
                  </div>
                </form>

                <div
                  className="text-center mt-16 cursor-pointer"
                  onClick={() => navigate("/sign-up")}
                >
                  Don’t have an account? Click to create an account/Sign up
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
