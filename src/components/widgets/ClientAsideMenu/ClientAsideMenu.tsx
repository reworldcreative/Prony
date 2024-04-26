import React, { FC, useEffect, useRef, useState } from "react";
import "./ClientAsideMenu.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ClientAsideMenu: FC = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const rootElement = document.getElementById("root");
  const asideMenuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const [focusedItem, setFocusedItem] = useState<number>(1);
  const asideNavigationRef = useRef<HTMLDivElement>(null);

  openMenu ? rootElement.classList.add("scroll-lock") : rootElement.classList.remove("scroll-lock");

  const menuProfileLinks = [
    { text: "Profile", url: "/client/profile" },
    { text: "Avatar", url: "/client/avatar" },
    { text: "Email Preferences", url: "/client/email" },
    { text: "Change password", url: "/client/password" },
  ];

  const menuBillingLinks = [
    { text: "Billing Plan", url: "/client/billing" },
    { text: "Payment Methods", url: "/client/payment" },
    { text: "Billing History", url: "/client/history" },
  ];

  const handleClickOutside = (event: MouseEvent) => {
    if (
      asideMenuRef.current &&
      !burgerRef.current.contains(event.target as Node) &&
      !asideMenuRef.current.contains(event.target as Node)
    ) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Tab" && !event.shiftKey && asideNavigationRef.current) {
      event.preventDefault();
      const children = asideNavigationRef.current.children;

      if (children && children.length > 0) {
        if (focusedItem === asideNavigationRef.current.children.length) {
          burgerRef.current.focus();
          setFocusedItem(1);
        } else {
          setFocusedItem(focusedItem + 1);
          (children[focusedItem].childNodes[0] as HTMLElement)?.focus();
        }
      }
    }
  };

  return (
    <>
      <div className="burger">
        <button
          className="burger__button"
          aria-label={openMenu ? "Close menu" : "Open menu"}
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          ref={burgerRef}
          tabIndex={0}
        >
          <span className="burger__line" aria-hidden="true" />
        </button>
      </div>

      <aside className={`clientAsideMenu ${openMenu ? "clientAsideMenu_open" : ""}`} ref={asideMenuRef}>
        <nav className="clientAsideMenu__navigation" ref={asideNavigationRef} onKeyDown={handleTabKeyDown}>
          <Link
            to={"/client"}
            className={`clientAsideMenu__link clientAsideMenu__link-title heading-h6 ${
              location.pathname.toLowerCase() === "/client" ? "clientAsideMenu__link_active" : ""
            }`}
          >
            Workspaces
          </Link>

          <h2 className="heading-h6 clientAsideMenu__link-title">Profile</h2>

          {menuProfileLinks.map((link, index) => (
            <Link
              to={link.url}
              key={index}
              className={`heading-h6 clientAsideMenu__link ${
                link.url.toLowerCase() === location.pathname.toLowerCase() ? "clientAsideMenu__link_active" : ""
              }`}
            >
              {link.text}
            </Link>
          ))}

          <h2 className="heading-h6 clientAsideMenu__link-title">Billing</h2>

          {menuBillingLinks.map((link, index) => (
            <Link
              to={link.url}
              key={index}
              className={`heading-h6 clientAsideMenu__link ${
                link.url.toLowerCase() === location.pathname.toLowerCase() ? "clientAsideMenu__link_active" : ""
              }`}
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default ClientAsideMenu;
