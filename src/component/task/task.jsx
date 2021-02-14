import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Select from "../select/select";
import "./task.scss";

const Task = () => {
    const [animation, setAnimation] = useState(false);
    const [value, setValue] = useState(``);

    const useStylesReddit = makeStyles((theme) => ({
      root: {
        border: 'none',
        overflow: 'hidden',
        outline: `none`,
        backgroundColor: 'transparent',
        width: `540px`,
        fontSize: `20px`,
        color: `grey`,
        marginLeft: animation ? `30px` : `px`,
        paddingTop: `7px`,
        transition: animation ? `0.3s` : `none`,
      }
    }));

    const classes = useStylesReddit();

    const startAnimation = () => {
        setAnimation(true);
    }

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return (
        <div className={`task-wrapper ${animation && `task-wrapper--animation`}`} onClick={() => startAnimation()}>
            <form className="task-form form">
                <div className={`form__triangle form__triangle--big ${animation && `form__triangle--animation-big`}`}></div>
                <div className={`form__triangle form__triangle--small ${animation && `form__triangle--animation-small`}`}></div>
                <input className="form__checkbox" type="checkbox" id="check"/>
                <label htmlFor="check" className={`form__label ${animation && `form__label--animation`}`}></label>
                <TextField
                  id="standart-multiline-flexible"
                  multiline
                  rowsMax={3}
                  value={value}
                  onChange={handleChange}
                  placeholder="Write a new task"
                  InputProps={{classes, disableUnderline: true}}
                />
                <div className={`form__wrapper ${animation && `form__wrapper--animation`}`}>
                  <div className="form__calendar">
                    <svg fill="#807c7c" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 6 1 L 6 3 L 5 3 C 3.9 3 3 3.9 3 5 L 3 19 C 3 20.1 3.9 21 5 21 L 19 21 C 20.1 21 21 20.1 21 19 L 21 5 C 21 3.9 20.1 3 19 3 L 18 3 L 18 1 L 16 1 L 16 3 L 8 3 L 8 1 L 6 1 z M 5 5 L 6 5 L 8 5 L 16 5 L 18 5 L 19 5 L 19 7 L 5 7 L 5 5 z M 5 9 L 19 9 L 19 19 L 5 19 L 5 9 z"/></svg>
                  </div>
                  <Select />
                </div>
            </form>
        </div>
    )
}

export default Task;
