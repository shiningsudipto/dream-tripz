"use client";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";
const CustomDrawer = ({ label, children }) => {
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
        size="200px"
      >
        {children}
      </Drawer>
    </>
  );
};

export default CustomDrawer;
