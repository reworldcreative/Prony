import React, { FC, useContext, useEffect, useRef, useState } from "react";
import "./DropdownSelect.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import Button from "@/components/UI/buttons/Button/Button";
import RadioBlock from "./RadioBlock";
import CheckboxBlock from "./CheckboxBlock";

interface DropdownSelectProps {
  getValue: (value: string[]) => void;
  defaultValue?: string[];
  selectType: "radio" | "checkbox";
  title: string;
  options: { name: string; labelText: string }[];
}

const DropdownSelect: FC<DropdownSelectProps> = ({ getValue, defaultValue, selectType, title, options }) => {
  const theme = useContext(GlobalContext);

  const DropdownButtons = useRef<HTMLDivElement>(null);
  const DropdownButton = useRef<HTMLButtonElement>(null);
  const DropdownContainerRef = useRef<HTMLDivElement>(null);
  const dropdownListRef = useRef<HTMLDivElement>(null);
  const [focusedItem, setFocusedItem] = useState<number>(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string[]>();
  const [value, setValue] = useState([]);
  const [side, setSide] = useState<"left" | "right">("left");

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Tab" && !event.shiftKey && DropdownButtons.current) {
      event.preventDefault();
      const children = DropdownButtons.current.children;

      if (children && children.length > 0) {
        (children[focusedItem] as HTMLElement)?.focus();

        if (focusedItem === DropdownButtons.current.children.length) {
          DropdownButton.current.focus();
          setFocusedItem(1);
        } else {
          setFocusedItem(focusedItem + 1);
        }
      }
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string[]) => {
    setIsOpen(false);
    setSelectedOption(option);
    getValue(option);
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
    const dropdownContainer = dropdownListRef.current;
    const screenWidth = window.innerWidth;
    const containerRect = dropdownContainer.getBoundingClientRect();

    containerRect.right + 100 > screenWidth ? setSide("right") : setSide("left");
  }, [isOpen]);

  return (
    <div className={`dropdownSelect ${isOpen ? "dropdownSelect_open" : ""}`} ref={DropdownContainerRef}>
      <button className="dropdownSelect__current" onClick={toggleDropdown} aria-live="assertive" ref={DropdownButton}>
        {value.length > 0 && (
          <div className="dropdownSelect__mark subtitle-second">
            {value.length > 0 ? (typeof value === "string" ? 1 : value.length) : ""}
          </div>
        )}

        <span
          className="dropdownSelect__currentItem text"
          aria-label={`Dropdown selector is ${isOpen ? "open" : "close"}. Current selected value is ${selectedOption}`}
        >
          {title}
        </span>
        <div aria-hidden="true" className={`dropdownSelect__icon ${theme && theme.theme}`} />
      </button>

      <div className={`dropdownSelect__container dropdownSelect__container_${side}`} ref={dropdownListRef}>
        <p className="dropdownSelect__title heading-h6">{title}</p>

        <div className="dropdownSelect__list">
          {selectType === "radio" && (
            <RadioBlock
              getValue={(value: string) => setValue([value])}
              defaultValue={defaultValue[0]}
              group="time"
              options={options}
            />
          )}

          {selectType === "checkbox" && (
            <CheckboxBlock getValue={setValue} defaultValue={defaultValue} options={options} />
          )}
        </div>

        <div className="dropdownSelect__buttons" ref={DropdownButtons} onKeyDown={handleTabKeyDown}>
          <Button
            type="primary"
            click={() => {
              selectOption(value);
            }}
          >
            Apply filters
          </Button>
          <Button type="default" click={toggleDropdown}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DropdownSelect;
