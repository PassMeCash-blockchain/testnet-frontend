import PageLayout from "@/components/Templates/PageLayout";
import Button from "@/components/atoms/Button";
import LoginForm from "@/components/molecules/LoginForm";
import Modal from "@/components/molecules/Modal";
import { FaUserLock, FaUserCheck } from "react-icons/fa";

const login = () => {
  return (
    <PageLayout
      img="/assets/background-bg-wallet.png"
      title="Welcome Back"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat tellus vitae aliquam nisl, habitant auctor praesent."
    >
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
      </div>
    </PageLayout>
  );
};

export default login;
