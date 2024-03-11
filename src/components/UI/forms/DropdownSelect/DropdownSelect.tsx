import React, { FC, useContext, useEffect, useRef, useState } from "react";
import "./DropdownSelect.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import Button from "@/components/UI/buttons/Button/Button";
import RadioButton from "../RadioButton/RadioButton";

const DropdownSelect: FC = () => {
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
  const [selectedOption, setSelectedOption] = useState<string>();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      DropdownContainerRef.current &&
      !DropdownContainerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [time, setTime] = useState("");

  const handleGetTime = (value: string) => {
    setTime(value);
  };
  return (
    <div
      className={`dropdownSelect ${isOpen ? "dropdownSelect_open" : ""}`}
      ref={DropdownContainerRef}
    >
      <button
        className="dropdownSelect__current"
        onClick={toggleDropdown}
        aria-live="assertive"
        ref={DropdownButton}
      >
        <div className="dropdownSelect__mark subtitle-second">1</div>

        <span
          className="dropdownSelect__currentItem text"
          aria-label={`Dropdown selector is ${
            isOpen ? "open" : "close"
          }. Current selected value is ${selectedOption}`}
        >
          Created in
        </span>
        <div
          aria-hidden="true"
          className={`dropdownSelect__icon ${theme.theme}`}
        />
      </button>

      <div className="dropdownSelect__container">
        <p className="dropdownSelect__title heading-h6">Created in</p>

        <div className="dropdownSelect__list">
          <RadioButton
            group="time"
            labelText="Last 24 hours"
            value="Last 24 hours"
            size="big"
            getRadioValue={handleGetTime}
            selectedValue={time}
          />
          <RadioButton
            group="time"
            labelText="Last week"
            value="Last week"
            size="big"
            getRadioValue={handleGetTime}
            selectedValue={time}
          />
          <RadioButton
            group="time"
            labelText="Last month"
            value="Last month"
            size="big"
            getRadioValue={handleGetTime}
            selectedValue={time}
          />
        </div>

        <div className="dropdownSelect__buttons">
          <Button type="primary">Apply filters</Button>
          <Button type="default">Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default DropdownSelect;
