import React from 'react'
import ReactDatePicker from 'react-datepicker';
import styles from './CustomDatePicker.module.css'
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = (props) => {
    const today = new Date()
    return (
        <div className={styles.container}>
            <label> {props.label}
                <ReactDatePicker
                    selected={props.value}
                    onChange={date => props.handleChange(date)}
                    dateFormat="dd/MM/yyyy"
                    closeOnScroll={true}
                    minDate={today.setDate(today.getDate() + 10)}
                />
            </label>
        </div>
    )
}

export default CustomDatePicker
