import { clsxes } from "./libraries";

const Heading = ({ children, className, level }) => {
  switch (level) {
    case 1:
      return <h1 className={clsxes("text-3xl", className)}>{children}</h1>;
    case 2:
      return <h2 className={clsxes("text-2xl", className)}>{children}</h2>;
    case 3:
      return <h3 className={clsxes("text-xl", className)}>{children}</h3>;
    case 4:
      return <h4 className={clsxes("text-lg", className)}>{children}</h4>;
    case 5:
      return <h5 className={clsxes("text-base", className)}>{children}</h5>;
    case 6:
      return <h6 className={clsxes("text-sm", className)}>{children}</h6>;

    default:
      return <h6 className={clsxes("text-xs", className)}>{children}</h6>;
  }
};

export default Heading;
