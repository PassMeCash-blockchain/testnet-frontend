import PageLayout from "@/components/Templates/PageLayout";
import Inputs from "@/components/atoms/Inputs";
import { useEffect, useState } from "react";

const login = () => {
  const [pass, setpass] = useState("");

  useEffect(() => console.log(pass), [pass]);
  return (
    <PageLayout
      img="/assets/background-bg-wallet.png"
      title="Welcome Back"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat tellus vitae aliquam nisl, habitant auctor praesent."
    >
      <form action="">
        <h1>This is the form</h1>
        <div className="mt-5">
          <Inputs
            label="Password"
            type="text"
            value={pass}
            setValueFn={setpass}
          />
        </div>
      </form>
    </PageLayout>
  );
};

export default login;
