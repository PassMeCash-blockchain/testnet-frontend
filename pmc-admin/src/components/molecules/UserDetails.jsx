import Image from "next/image";

const UserDetails = () => {
  return (
    <div className="grid gap-5 items-center rounded-md md:grid-cols-[auto_1fr] md:border md:border-[rgba(179,_179,_179,_0.5] md:p-5">
      {/* Details */}
      {/* Image */}
      <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto sm:m-0 md:w-20 md:h-20 ">
        <Image src="/assets/user-test-img-1.jpg" fill alt="User Image" />
      </div>

      <div className="grid gap-5 sm:grid-cols-[1fr_auto]">
        {/* Name and Email */}
        <div className="text-center sm:text-left">
          <p className="font-semibold text-xl">Mary Chukwuamaka</p>
          <p className="text-[#999999]">Janedoe@gmail.com</p>
        </div>

        {/* Edit Profile Photo */}
        <button className="px-5 py-3 border border-[rgba(179,_179,_179,_0.5)] cursor-pointer rounded-md md:border-black">
          Edit profile photo
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
