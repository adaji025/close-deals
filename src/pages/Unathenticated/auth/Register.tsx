import Logo from "@assets/svg/logo.svg";
import {
  Button,
  LoadingOverlay,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { Fragment, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import { userSignUp } from "@services/auth";
import { showNotification } from "@mantine/notifications";
import useNotification from "@hooks/useNotification";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [pw, setPw] = useState("");

  const { handleError } = useNotification();
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
      .then(() => {
        showNotification({
          title: "Success",
          color: "green",
          message: "User registration successful",
        });
        navigate("/login");
      })
      .catch((err) => {
        handleError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const validatePw = useCallback(() => {
    if (form.values.password !== pw) {
      setError("Passwords does not match");
    } else {
      setError("");
    }
  }, [pw]);

  const validateFistStep = useCallback(() => {
    if (
      form.values.firstname === "" ||
      form.values.lastname === "" ||
      form.values.email === ""
    ) {
      return true;
    }
    return false;
  }, [form]);

  const validateForm = useCallback(() => {
    if (
      form.values.firstname === "" ||
      form.values.lastname === "" ||
      form.values.email === "" ||
      form.values.password === "" ||
      pw == ""
    ) {
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
                        className="w-full bg-primary disabled:bg-primary/80"
                        onClick={() => setStep(2)}
                        radius="md"
                        disabled={validateFistStep()}
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
                          label="Password"
                          {...form.getInputProps("password")}
                        />
                        <span className="text-sm">
                          Password must be 8 characters
                        </span>
                      </div>

                      <div>
                        <PasswordInput
                          radius="md"
                          size="md"
                          mt={16}
                          label="Confirm Password"
                          onKeyUp={validatePw}
                          onChange={(e) => setPw(e.target.value)}
                        />

                        <span className="text-sm text-red-500">{error}</span>
                      </div>

                      <Button
                        size="md"
                        mt={20}
                        className="w-full bg-primary disabled:bg-primary/80"
                        type="submit"
                        disabled={validateForm()}
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
