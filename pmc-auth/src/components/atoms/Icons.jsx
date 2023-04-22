import { BsCheckLg } from "react-icons/bs";

const Icons = ({ icon, className }) => {
  switch (icon) {
    case "check":
      return <BsCheckLg className={className} />;

    default:
      return (
        <p className="text-red-500">
          Icon name missing! :{" "}
          <span className="text-neutral-600">icon="Icon Name"</span>
        </p>
      );
      break;
  }
};

export default Icons;
