import Link from "next/link";
import Button from "../atoms/Button";
import Inputs from "../atoms/Inputs";
import { encrypt, decrypt } from "@/secure";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createThunk } from "@/features/reducers/auth";

const CreateAccountForm = () => {
  // // const msg = "this is a test";
  // const msg = { message: "this is a test" };
  // // initial message
  // console.log("initial message ", msg);

  // // encrypt a message
  // const e = encrypt(msg, "json");
  // console.log("encrypted", e.toString());

  // // decrypt a message
  // const d = decrypt(e.toString(), "json");
  // console.log("decrypted", d);
  const dispatch = useDispatch()
  

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(createThunk({ phoneNumber, password }));
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-rows-[1fr_auto]">
      <div>
        <h2 className="text-2xl text-center font-semibold mt-10 md:text-left">
          Create Account
        </h2>

        <div className="mt-8 grid gap-7">
          <Inputs type="phone" label="Phone Number" setValueFn={setPhoneNumber} value={phoneNumber}/>
          <Inputs type="password" label="Password" setValueFn={setPassword} value={password}/>
        </div>
        <p className="text-xs mt-4">
          Most be at least 8 characters and have 1 uppercase letter, 1 number
          and 1 symbol
        </p>

        <Button filled type="submit" className="w-full mt-10">
          Sign up
        </Button>

        <p className="mt-5 text-center">
          Already registered?{" "}
          <Link href="/login" className="font-semibold">
            Log in
          </Link>
        </p>

        <p className="text-center text-sm mt-8">
          By signing up I agree to the{" "}
          <span className="font-semibold underline">Terms of Use</span>, and
          consent to the processing of my personal and biometric data as stated
          in the <span className="font-semibold underline">Privacy Policy</span>
          .
        </p>
      </div>
    </form>
  );
};

export default CreateAccountForm;
