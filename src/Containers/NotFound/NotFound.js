import React from 'react'
import styles from './NotFound.module.css'
import notFoundPage from './../../Assets/404.png'

const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1> error !!! </h1>
            <div className={styles.img}>
                <img src={notFoundPage} alt="not found" />
            </div>
            <h1>
                page not found
            </h1>
        </div>
    )
}

export default NotFound
