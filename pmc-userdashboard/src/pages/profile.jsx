import UserContactInfo from "@/components/molecules/UserContactInfo";
import UserDetails from "@/components/molecules/UserDetails";
import UserPersonalInfo from "@/components/molecules/UserPersonalInfo";

const { default: PageLayout } = require("@/components/templates/PageLayout");

const Profile = () => {
  return (
    <PageLayout>
      <div className="grid gap-5">
        <h2 className="text-4xl hidden md:block">Profile Details</h2>

        {/* User Details */}
        <UserDetails />

        {/* User Contact Info */}
        <UserContactInfo />

        {/* User Personal Info */}
        <UserPersonalInfo />
      </div>
    </PageLayout>
  );
};

export default Profile;
