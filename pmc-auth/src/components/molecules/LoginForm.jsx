import Button from "../atoms/Button";
import Inputs from "../atoms/Inputs";

const LoginForm = () => {
  return (
    <form action="" className="grid grid-rows-[1fr_auto]">
      <div>
        <h2 className="text-2xl text-center font-semibold mt-8 ">
          Login Account
        </h2>
        <p className="mt-4 text-center">
          Don’t have an account? <span className="font-semibold">Sign up</span>
        </p>

        <div className="mt-8 grid gap-7">
          <Inputs type="text" label="Email or Phone Number" />
          <Inputs type="password" label="Password" />
        </div>
        <p className="w-max ml-auto mt-4">Forgot Password?</p>
        <p className="text-center mt-8">
          By signing up I agree to the{" "}
          <span className="font-semibold underline">Terms of Use</span>, and
          consent to the processing of my personal and biometric data as stated
          in the <span className="font-semibold underline">Privacy Policy</span>
          .
        </p>
      </div>

      <Button filled className="w-full">
        Log In
      </Button>
    </form>
  );
};

export default LoginForm;
