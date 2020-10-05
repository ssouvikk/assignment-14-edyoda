import React from 'react'
import styles from './DeleteIcon.module.css'

const DeleteIcon = (props) => {
    return (
        <span onClick={props.clickToDelete} className={styles.wrapper}>
            <i className={`fa fa-trash-o ${styles.icon}`} aria-hidden="true"></i>
        </span>
    )
}

export default DeleteIcon
