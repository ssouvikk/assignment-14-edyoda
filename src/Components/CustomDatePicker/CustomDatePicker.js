import React from 'react'
import ReactDatePicker from 'react-datepicker';
import styles from './CustomDatePicker.module.css'
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = (props) => {
    return (
        <div className={styles.container}>
            <label> {props.label}
                <ReactDatePicker
                    selected={props.value}
                    onChange={date => props.handleChange(date)}
                    dateFormat="dd/MM/yyyy"
                    closeOnScroll={true}
                    minDate={new Date()}
                />
            </label>
        </div>
    )
}

export default CustomDatePicker
