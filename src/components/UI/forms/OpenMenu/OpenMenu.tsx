import React, { FC, useEffect, useRef, useState } from "react";
import "./OpenMenu.scss";
const OpenMenu: FC<{
  openButton?: React.RefObject<HTMLButtonElement>;
  isOpen: boolean;
  children: React.ReactNode;
  addClass?: string;
}> = ({ openButton, isOpen, children, addClass }) => {
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
      className={`openMenu ${addClass ? addClass : ""}`}
      ref={TabMenuRef}
      onKeyDown={handleTabKeyDown}
    >
      {children}
    </nav>
  );
};

export default OpenMenu;
