import React, { FC, useContext, useEffect, useRef, useState } from "react";
import "./ChangelogDropdown.scss";
import UpArrowIcon from "@/assets/img/icons/UpArrow.svg";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";

interface ChangelogDropdownProps {
  current: string;
  addClass?: string;
  onSelect: (selectedOption: string) => void;
}

interface optionsData {
  name: string;
  color: string;
}

export const options = [
  {
    name: "New",
    color: "#27AE60",
  },
  {
    name: "All entries",
    color: "#CDDAF2",
  },
  {
    name: "Improved",
    color: "#272557",
  },
  {
    name: "Fixed",
    color: "#F43658",
  },
];

const ChangelogDropdown: FC<ChangelogDropdownProps> = ({ current, addClass, onSelect }) => {
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
  const [selectedOption, setSelectedOption] = useState<optionsData>(options.find((option) => option.name === current));

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: optionsData) => {
    setSelectedOption(option);
    onSelect(option.name);
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
    setSelectedOption(options.find((option) => option.name === current));
  }, [current]);

  return (
    <div className="dropdown__container">
      <p className="dropdown__label">Status:</p>

      <div
        className={`dropdown ${isOpen ? "dropdown_open" : ""} ${addClass ? addClass : ""}`}
        ref={DropdownContainerRef}
      >
        <button
          type="button"
          className="dropdown__current"
          onClick={toggleDropdown}
          aria-live="assertive"
          ref={DropdownButton}
        >
          <p
            className="dropdown__currentItem text"
            aria-label={`Dropdown selector is ${
              isOpen ? "open" : "close"
            }. Current selected value is ${selectedOption}`}
          >
            <span className="dropdown__mark" aria-hidden="true" style={{ background: selectedOption.color }} />

            {selectedOption.name}
          </p>
          <img
            src={UpArrowIcon}
            alt="dropdown arrow"
            width={12}
            height={7}
            aria-hidden="true"
            className={`dropdown__icon ${theme && theme.theme}`}
            loading="lazy"
          />
        </button>
        {isOpen && (
          <ul className="dropdown__options" ref={DropdownListRef} onKeyDown={handleTabKeyDown}>
            {options.map((option, index) => (
              <li className="dropdown__item subtitle" key={index} onClick={() => selectOption(option)} tabIndex={0}>
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ChangelogDropdown;
