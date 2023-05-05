import Icons from "../atoms/Icons";
import SectionSpacing from "../templates/SectionSpacing";

const UserProgressBar = () => {
  return (
    <SectionSpacing>
      <div className="grid grid-rows-2">
        <div className="flex gap-20 justify-center text-lg">
          {/* <div>Create New Card</div>
          <div>Add Pin</div>
          <div>Fund Card</div> */}
          <p>Create New Card</p>
          <p>Add Pin</p>
          <p>Fund Card</p>
        </div>
        <div className="flex gap-5 justify-center place-items-center">
          <div className="h-4 w-4 rounded-full bg-[#874CF6]"></div>
          <hr className="w-36 border-[0.8px] bg-[#874CF6]"></hr>
          <div className="h-4 w-4 rounded-full bg-[#E0E0E0]"></div>
          <hr className="w-36 border-[0.8px] bg-[#874CF6]"></hr>
          <div className="h-4 w-4 rounded-full bg-[#E0E0E0]"></div>
        </div>
      </div>
    </SectionSpacing>
  );
};

export default UserProgressBar;
