import Logo from "@assets/svg/logo.svg";
import {
  Button,
  LoadingOverlay,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { userSignUp } from "@services/auth";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = (values: any) => {
    setLoading(true);

    userSignUp(values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
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
                  Create an account with CloseDeals
                </div>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                  {step === 1 && (
                    <>
                      <TextInput
                        type="email"
                        radius="md"
                        size="md"
                        mt={16}
                        label="Work Email (required)"
                        {...form.getInputProps("email")}
                      />
                      <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <TextInput
                          size="md"
                          label="First name"
                          className="flex-1"
                          radius="md"
                          {...form.getInputProps("firstname")}
                        />
                        <TextInput
                          size="md"
                          label="Last name"
                          className="flex-1"
                          radius="md"
                          {...form.getInputProps("lastname")}
                        />
                      </div>
                      <Button
                        type="button"
                        size="md"
                        mt={20}
                        className="w-full bg-primary"
                        onClick={() => setStep(2)}
                        radius="md"
                      >
                        Next
                      </Button>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <div className="mt-2">
                        Enter password and confirm your account password
                      </div>
                      <div>
                        <PasswordInput
                          radius="md"
                          size="md"
                          mt={16}
                          label="Confirm Password"
                          {...form.getInputProps("password")}
                        />
                        <span className="text-sm">
                          Password must be 8 characters
                        </span>
                      </div>
                      <PasswordInput
                        radius="md"
                        size="md"
                        mt={16}
                        label="Password"
                      />

                      <Button
                        size="md"
                        mt={20}
                        className="w-full bg-primary"
                        type="submit"
                      >
                        Get started
                      </Button>
                    </>
                  )}
                </form>

                <div
                  className="text-center mt-16 cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Have an account already? Click to sign in
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
