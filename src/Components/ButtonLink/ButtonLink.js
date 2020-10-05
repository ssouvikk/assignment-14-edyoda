import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ButtonLink.module.css'

const ButtonLink = (props) => {
    return (
        <Link className={styles.btn} onClick={props.handleClick} >
            {props.label}
        </Link>
    )
}

export default ButtonLink
