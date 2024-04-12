import React, { PropsWithChildren } from "react";
type HeaderProps = {
  image: { src: string; alt: string };
};
const Header: React.FC<PropsWithChildren<HeaderProps>> = ({
  image,
  children,
}) => {
  return (
    <div className="">
      <img
        src={image.src}
        className="size-16 rounded-full mx-auto my-2"
        alt={image.alt}
      />
      {children}
    </div>
  );
};

export default Header;

//  PropsWithChildren<GENERIC TYPE> also React.FC<ACCEPT GENERIC>
