import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navlink.module.css'

const Navlink = React.forwardRef((props, ref) => (
    <Link
        ref={!!ref ? ref : null}
        onClick={() => props.handlePageChange ? props.handlePageChange(props.to) : null}
        to={props.to}
        className={`${styles.link} ${props.activePage === props.to ? styles.activeLink : ''}`}
    >
        {!!props.iconClasses ? <i className={`${props.iconClasses} ${styles.icons}`} aria-hidden="true"></i> : ''}
        <p className={styles.linkName}> {props.label} </p>
    </Link>
))

export default Navlink
