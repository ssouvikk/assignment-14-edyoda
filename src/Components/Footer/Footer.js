import React, { Component } from 'react'
import styles from './Footer.module.css'

export default class Footer extends Component {
    render() {
        return (
            <div className={styles.wrapper} >
                Copyright &copy; <strong> 2020 </strong> All right reserved. Design: Souvik Mondal
            </div>
        )
    }
}
