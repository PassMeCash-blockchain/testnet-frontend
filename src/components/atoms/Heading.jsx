import React from 'react'

export const Heading = ({ children, className, level }) => {
  switch (level) {
    case 1:
      return <h1 className={clsx(styles.levelOne, className)}>{children}</h1>;
    case 2:
      return <h2 className={clsx(styles.levelTwo, className)}>{children}</h2>;
    case 3:
      return <h3 className={clsx(styles.levelThree, className)}>{children}</h3>;
    case 4:
      return <h4 className={clsx(styles.levelFour, className)}>{children}</h4>;
    case 5:
      return <h5 className={clsx(styles.levelFive, className)}>{children}</h5>;
    case 6:
      return <h6 className={clsx(styles.levelSix, className)}>{children}</h6>;

    default:
      return <h6 className={clsx(styles.levelSix, className)}>{children}</h6>;
      break;
}

}