import Link from "next/link";
import Icons from "../atoms/Icons";
import Image from "next/image";

const EnterPassword = () => {
  return (
    <div className="h-fit w-1/3 border border-blacks p-3">
      <div>
        <Icons type="close" />
      </div>
      <div>
        <h3 className="font-semibold py-3 text-2xl text-center">
          Enter your password
        </h3>
        <p className="text-base text-center">
          This is a security check to secure your account
        </p>
        <form className="py-7">
          <label>Your password</label>
          <div className="flex justify-between w-full h-12 border border-[#ABA6A6] bg-[#F5F5F5] rounded-md p-3 my-3">
            <input type="text" className="bg-[#F5F5F5] w-full" />
            <div className="relative h-8 w-8 grid items-center justify-center">
              <Image src="assets/EyeClosed.svg" fill alt="view info" />
            </div>
          </div>
          <Link href="" className="font-semibold py-3">
            Forget Password?
          </Link>
        </form>
        <button className="text-white bg-[#874CF6] p-3 rounded-lg w-full mt-6">
          Done
        </button>
      </div>
    </div>
  );
};

export default EnterPassword;
