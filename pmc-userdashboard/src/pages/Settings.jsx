import Icons from "@/components/atoms/Icons";
import PageLayout from "@/components/templates/PageLayout";

const Security = () => {
  return (
    <PageLayout>
      <h2 className="text-4xl hidden mb-10 md:block">Account Settings</h2>

      {/* Password */}
      <div className="grid gap-5 items-center border border-[rgba(179,_179,_179,_0.5] rounded-md p-5 sm:grid-cols-[1fr_auto] sm:gap-5">
        <div className="grid gap-3">
          <h3 className="text-2xl font-semibold">Password</h3>
          <p className="text-neutral-500">
            Remember not to store your password in your email or cloud and don’t
            share it with anyone.
          </p>
        </div>

        {/* Change Password */}
        <button className="px-5 py-3 cursor-pointer border border-black rounded-md">
          Change password
        </button>
      </div>

      {/* Phone Numbers */}
      <div className="mt-10 border border-[rgba(179,_179,_179,_0.5] rounded-md">
        <div className="grid gap-5 items-center p-5 sm:grid-cols-[1fr_auto] sm:gap-5">
          <div className="grid gap-3">
            <h3 className="text-2xl font-semibold">Phone numbers</h3>
            <p className="text-neutral-500">
              Make sure to keep your primary phone number up-to-date.
            </p>
          </div>

          {/* Change Password */}
          <button className="px-5 py-3 cursor-pointer border border-black rounded-md">
            Add phone number
          </button>
        </div>

        {/* Numbers */}
        <div className="grid grid-cols-[auto_auto_1fr] items-start gap-5 p-5 border-t border-[rgba(179,_179,_179,_0.5]">
          <div className="grid place-items-center w-7 h-7 bg-[#F2F2F2] rounded-full">
            <Icons type="locked" />
          </div>
          <div>
            <p>+xxxxxxxx87</p>
            <p className="font-medium mt-1">Verified</p>
          </div>
          <div className="bg-[#EBEBEB] px-5 py-1 text-sm w-max rounded-md">
            Primary
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Security;
