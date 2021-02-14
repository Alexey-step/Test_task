import React from "react";
import "./select-list.scss";

const items = [`No list`, `first-item`, `second-item`, `third-item`];

const SelectList = ({isOpen, handleSelect}) => {
  if (isOpen) {
    return (
      <ul className="select__list">
        {items.map((item, i) => (
          <li
            className="select__list-item"
            key={i}
            data-value={item}
            onClick={(evt) => handleSelect(evt)}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return ``;
};

export default SelectList;
