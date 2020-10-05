import React from 'react'
import styles from './FormDropDown.module.css'

const singleListItem = (value, key) => {
    return <option key={key}> {value} </option>
}

const listItems = (listItem) => {
    return listItem.map((item, pos) => singleListItem(item, pos))
}

const FormDropDown = (props) => {
    return (
        <div className={styles.container}>
            <label> {props.label}
                <select
                    name={!!props.name ? props.name : null}
                    className={styles.dropdown}
                    onChange={(e) => props.handleChange ? props.handleChange(e) : null}
                    value={!!props.value ? props.value.toLowerCase() : ''}
                >
                    {listItems(props.data)}
                </select>
            </label>
        </div>
    )
}

export default FormDropDown
