import React from 'react'
import Modal from 'react-modal';
import Button from '../Button/Button';
import styles from './MsgModal.module.css'
Modal.setAppElement('#root')

const MsgModal = (props) => {
    return (
        <Modal
            className={styles.container}
            isOpen={props.show}
            onRequestClose={props.close}
            style={{ overlay: { backgroundColor: "rgba(62,68,87,0.75)" } }}
        >
            {props.msg[1] ? <h3 className={`${styles.heading} ${styles.success}`}>Success!!!</h3> : <h3 className={`${styles.heading} ${styles.fail}`}>Failed!!!</h3>}
            <p className={styles.msg}>
                {props.msg[1] ? props.msg[1] : props.msg[0]}
            </p>
            <Button label="close" handleClick={() => props.close()} />
        </Modal>
    )
}

export default MsgModal
