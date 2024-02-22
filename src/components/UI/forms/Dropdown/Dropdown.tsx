import React, { FC, useContext, useRef, useState } from "react";
import "./Dropdown.scss";
import UpArrowIcon from "@/assets/img/icons/UpArrow.svg";
import { ThemeContext } from "@/components/widgets/ThemeContextType/ThemeContextType";

interface DropdownProps {
  options: string[];
  current: string;
  onSelect: (selectedOption: string) => void;
}

const Dropdown: FC<DropdownProps> = ({ options, current, onSelect }) => {
  const theme = useContext(ThemeContext);

  const DropdownListRef = useRef<HTMLUListElement>(null);
  const DropdownButton = useRef<HTMLButtonElement>(null);
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

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <button
        className="dropdown__current"
        onClick={toggleDropdown}
        aria-live="assertive"
        ref={DropdownButton}
      >
        <span
          className="dropdown__currentItem subtitle"
          aria-label={`Dropdown selector is ${
            isOpen ? "open" : "close"
          }. Current selected value is ${selectedOption}`}
        >
          {selectedOption}
        </span>
        <img
          src={UpArrowIcon}
          alt="dropdown arrow"
          width={12}
          height={7}
          aria-hidden="true"
          className={`dropdown__icon ${theme.theme}`}
        />
      </button>
      {isOpen && (
        <ul
          className="dropdown__options"
          ref={DropdownListRef}
          onKeyDown={handleTabKeyDown}
        >
          {options.map((option, index) => (
            <li
              className="dropdown__item subtitle"
              key={index}
              onClick={() => selectOption(option)}
              tabIndex={0}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
