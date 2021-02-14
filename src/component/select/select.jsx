import React, {useState} from "react";
import SelectList from "../select-list/select-list";
import "./select.scss";

const Select = ({animationButton}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(`No list`)

  const toggleList = () => {
    setIsOpen(!isOpen);
  }

  const handleSelect = (evt) => {
    setCurrentValue(evt.target.dataset.value);
    setIsOpen(false);
  }

    return (
        <div className={`form__select select ${isOpen && `select--open`}`} onClick={() => toggleList()}>
          <span className="select__value">
            <input
              className="select__value-input"
              readOnly
              autoComplete="off"
              value={currentValue}
            />
          </span>
          <p className="select__selected-value">{currentValue}</p>
          <SelectList isOpen={isOpen} handleSelect={handleSelect}/>
        </div>
    )
}

export default Select;
