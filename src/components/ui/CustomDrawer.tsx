"use client";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { ReactNode, useState } from "react";

type TDrawer = {
  label: ReactNode;
  children: ReactNode;
  size?: string;
};

const CustomDrawer = ({ label, size = "200px", children }: TDrawer) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button onClick={toggleDrawer} className="">
        {label}
      </button>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className=""
        size={size}
      >
        {children}
      </Drawer>
    </>
  );
};

export default CustomDrawer;
