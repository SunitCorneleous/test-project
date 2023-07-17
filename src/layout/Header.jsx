import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import LoginModal from "../components/LoginModal";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { createPortal } from "react-dom";

const modalComponent = document.getElementById("modal-content");

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: "Home", path: "/", type: "link" },
    { title: "About", path: "/about", type: "link" },
    { title: "Contact", path: "/contact", type: "link" },
  ];

  const modalHandler = () => {
    console.log("modal action");

    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const targetElement = document.querySelector("body");

    if (isOpen) {
      disableBodyScroll(targetElement);
    } else {
      enableBodyScroll(targetElement);
    }

    return () => {
      enableBodyScroll(targetElement);
    };
  }, [isOpen]);

  return (
    <div className="flex justify-between items-center py-6 px-12">
      <h1 className="text-3xl font-bold">
        <Link to={navItems[0].path}>LOGO</Link>
      </h1>

      {/* navigation */}

      <nav>
        <ul className="flex text-xl items-center">
          {navItems.map((item, index) => (
            <li className="ml-6" key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}

          <li>
            <Button
              title={"Login"}
              customClass={"ml-6"}
              actionHandler={modalHandler}
            ></Button>

            {isOpen &&
              createPortal(
                <LoginModal modalHandler={modalHandler} />,
                modalComponent
              )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
