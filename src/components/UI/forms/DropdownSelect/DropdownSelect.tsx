import React, { FC, useContext, useEffect, useRef, useState } from "react";
import "./DropdownSelect.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import Button from "@/components/UI/buttons/Button/Button";
import RadioBlock from "./RadioBlock";
import CheckboxBlock from "./CheckboxBlock";

interface DropdownSelectProps {
  getValue: (value: string | string[]) => void;
  defaultValue?: string;
  selectType: "radio" | "checkbox";
}

const DropdownSelect: FC<DropdownSelectProps> = ({ getValue, defaultValue, selectType }) => {
  const theme = useContext(GlobalContext);

  const DropdownButtons = useRef<HTMLDivElement>(null);
  const DropdownButton = useRef<HTMLButtonElement>(null);
  const DropdownContainerRef = useRef<HTMLDivElement>(null);
  const [focusedItem, setFocusedItem] = useState<number>(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>();
  const [value, setValue] = useState(selectType === "radio" ? defaultValue : []);

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

  const selectOption = (option: string) => {
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

  const handleSetValue = (value: string) => {
    setValue(value);
  };

  const handleSetValues = (value: string[]) => {
    setValue(value);
  };

  return (
    <div className={`dropdownSelect ${isOpen ? "dropdownSelect_open" : ""}`} ref={DropdownContainerRef}>
      <button className="dropdownSelect__current" onClick={toggleDropdown} aria-live="assertive" ref={DropdownButton}>
        <div className="dropdownSelect__mark subtitle-second">1</div>

        <span
          className="dropdownSelect__currentItem text"
          aria-label={`Dropdown selector is ${isOpen ? "open" : "close"}. Current selected value is ${selectedOption}`}
        >
          Created in
        </span>
        <div aria-hidden="true" className={`dropdownSelect__icon ${theme.theme}`} />
      </button>

      <div className="dropdownSelect__container">
        <p className="dropdownSelect__title heading-h6">Created in</p>

        <div className="dropdownSelect__list">
          {selectType === "radio" && (
            <RadioBlock
              getValue={handleSetValue}
              defaultValue={selectType === "radio" ? value.toString() : ""}
              group="time"
              options={[
                {
                  value: "Last-day",
                  labelText: "Last 24 hours",
                },
                {
                  value: "Last-week",
                  labelText: "Last week",
                },
                {
                  value: "Last-month",
                  labelText: "Last month",
                },
              ]}
            />
          )}

          {selectType === "checkbox" && (
            <CheckboxBlock
              getValue={handleSetValues}
              defaultValue={selectType === "checkbox" ? value.toString() : ""}
              options={[
                {
                  value: "status1",
                  labelText: "Status1",
                },
                {
                  value: "status2",
                  labelText: "Status2",
                },
              ]}
            />
          )}
        </div>

        <div className="dropdownSelect__buttons" ref={DropdownButtons} onKeyDown={handleTabKeyDown}>
          <Button
            type="primary"
            click={() => {
              selectOption(value.toString());
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
