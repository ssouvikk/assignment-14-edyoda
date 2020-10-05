import React from 'react'
import styles from './FormTextArea.module.css'

const FormTextArea = (props) => {
    return (
        <div className={styles.container}>
            <label> {props.label}
                <textarea
                    onChange={(e) => props.handleChange(e)}
                    required
                    rows="3"
                    name={props.name}
                    // placeholder={props.placeholder}
                    value={props.value}
                >

                </textarea>
            </label>
        </div>
    )
}

export default FormTextArea
