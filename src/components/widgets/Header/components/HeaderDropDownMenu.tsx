import React, { FC, useEffect, useRef, useState } from "react";
import "./HeaderDropDownMenu.scss";
import { Link } from "react-router-dom";
const HeaderDropDownMenu: FC<{
  openButton?: React.RefObject<HTMLButtonElement>;
  isOpen: boolean;
}> = ({ openButton, isOpen }) => {
  const TabMenuRef = useRef<HTMLDivElement>(null);
  const [focusedItem, setFocusedItem] = useState<number>(1);

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Tab" && !event.shiftKey && TabMenuRef.current) {
      event.preventDefault();
      const children = TabMenuRef.current.children;

      if (children && children.length > 0) {
        (children[focusedItem] as HTMLElement)?.focus();

        if (focusedItem === TabMenuRef.current.children.length) {
          openButton.current.focus();
          setFocusedItem(1);
        } else {
          setFocusedItem(focusedItem + 1);
        }
      }
    }
  };

  const links = [
    { text: "Workspaces", url: "/" },
    { text: "Profile", url: "/" },
    { text: "Logout", url: "/" },
  ];

  const handleClickOutside = (event: MouseEvent) => {
    if (
      TabMenuRef.current &&
      !TabMenuRef.current.contains(event.target as Node)
    ) {
      openButton.current.click();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      isOpen && document.addEventListener("click", handleClickOutside);
    }, 100);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="headerDropDownMenu"
      ref={TabMenuRef}
      onKeyDown={handleTabKeyDown}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.url}
          className="heading-h6 headerDropDownMenu__link"
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderDropDownMenu;
