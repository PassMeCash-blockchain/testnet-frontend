import PageLayout from "@/components/Templates/PageLayout";
<<<<<<< HEAD
import Inputs from "@/components/atoms/Inputs";
import LoginForm from "@/components/molecules/LoginForm";
import Image from "next/image";
import { useEffect, useState } from "react";

const login = () => {
  const [pass, setpass] = useState("");

  useEffect(() => console.log(pass), [pass]);
=======
import Button from "@/components/atoms/Button";
import LoginForm from "@/components/molecules/LoginForm";
import Modal from "@/components/molecules/Modal";
import { FaUserLock, FaUserCheck } from "react-icons/fa";

const login = () => {
>>>>>>> origin/main
  return (
    <PageLayout
      img="/assets/background-bg-wallet.png"
      title="Welcome Back"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat tellus vitae aliquam nisl, habitant auctor praesent."
    >
<<<<<<< HEAD
      <div className="p-8 h-full grid grid-rows-[auto_1fr] md:p-16">
        <div className="relative w-20 mx-auto">
          <Image src="/assets/logo.png" width={1000} height={1000} alt="Logo" />
        </div>
        <LoginForm />
=======
      <div>
        <LoginForm />
        <Modal>
          <div>
            {/* Icon */}
            <FaUserLock className="text-7xl text-[#874CF6] mx-auto" />

            <h3 className="font-medium text-center mt-5 text-xl">
              Blocked Account
            </h3>
            <p className="text-center mt-2">
              Your account has been blocked after multiple failed consecutive
              login attempts
            </p>

            {/* Buttons */}
            <div className="grid grid-cols-[1fr_1.5fr] gap-4  mt-5">
              <Button className="w-full">Cancel</Button>
              <Button filled className="w-full">
                Reactivate Now
              </Button>
            </div>
          </div>
        </Modal>

        <Modal className="hidden">
          <div>
            {/* Icon */}
            <FaUserCheck className="text-7xl text-[#874CF6] mx-auto" />

            <h3 className="font-medium text-center mt-5 text-xl">
              Account Unblocked
            </h3>
            <p className="text-center mt-2">
              Congratulations! Your account have been successfully unlocked.
            </p>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-4  mt-5">
              <Button className="w-full">Cancel</Button>
              <Button filled className="w-full">
                Confirm
              </Button>
            </div>
          </div>
        </Modal>
>>>>>>> origin/main
      </div>
    </PageLayout>
  );
};

export default login;
