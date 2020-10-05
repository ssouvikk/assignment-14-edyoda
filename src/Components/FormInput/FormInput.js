import React from 'react'
import styles from './FormInput.module.css'

const FormInput = (props) => {
    return (
        <div className={styles.container}>
            <label> {props.label}
                <input
                    onChange={(e) => props.handleChange(e)}
                    disabled={!!props.disabled}
                    value={props.value}
                    name={props.name}
                    type={props.type ? props.type : "text"}
                    placeholder={props.placeholder}
                    required
                />
            </label>
        </div>
    )
}

export default FormInput
