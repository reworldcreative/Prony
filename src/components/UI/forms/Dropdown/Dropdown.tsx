import React, { FC, useContext, useEffect, useRef, useState } from "react";
import "./Dropdown.scss";
import UpArrowIcon from "@/assets/img/icons/UpArrow.svg";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";

interface DropdownProps {
  options: string[];
  current: string;
  onSelect: (selectedOption: string) => void;
}

const Dropdown: FC<DropdownProps> = ({ options, current, onSelect }) => {
  const theme = useContext(GlobalContext);

  const DropdownListRef = useRef<HTMLUListElement>(null);
  const DropdownButton = useRef<HTMLButtonElement>(null);
  const DropdownContainerRef = useRef<HTMLDivElement>(null);
  const [focusedItem, setFocusedItem] = useState<number>(1);

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    if (event.key === "Tab" && !event.shiftKey && DropdownListRef.current) {
      event.preventDefault();
      const children = DropdownListRef.current.children;

      if (children && children.length > 0) {
        (children[focusedItem] as HTMLElement)?.focus();

        if (focusedItem === DropdownListRef.current.children.length) {
          DropdownButton.current.focus();
          setFocusedItem(1);
        } else {
          setFocusedItem(focusedItem + 1);
        }
      }
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(current);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (DropdownContainerRef.current && !DropdownContainerRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelectedOption(current);
  }, [current]);

  return (
    <div className={`dropdown ${isOpen ? "dropdown_open" : ""}`} ref={DropdownContainerRef}>
      <button className="dropdown__current" onClick={toggleDropdown} aria-live="assertive" ref={DropdownButton}>
        <span
          className="dropdown__currentItem subtitle"
          aria-label={`Dropdown selector is ${isOpen ? "open" : "close"}. Current selected value is ${selectedOption}`}
        >
          {selectedOption}
        </span>
        <img
          src={UpArrowIcon}
          alt="dropdown arrow"
          width={12}
          height={7}
          aria-hidden="true"
          className={`dropdown__icon ${theme && theme.theme}`}
        />
      </button>
      {isOpen && (
        <ul className="dropdown__options" ref={DropdownListRef} onKeyDown={handleTabKeyDown}>
          {options.map((option, index) => (
            <li className="dropdown__item subtitle" key={index} onClick={() => selectOption(option)} tabIndex={0}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
