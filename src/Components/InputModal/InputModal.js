import React, { useState } from 'react'
import Modal from 'react-modal';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import styles from './InputModal.module.css'
Modal.setAppElement('#root')

const InputModal = (props) => {
    const [catVal, setcatVal] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const projectData = JSON.parse(localStorage.getItem('projectData'))
        projectData.productsPage.categories.push(catVal)
        localStorage.setItem('projectData', JSON.stringify(projectData))
        setcatVal('')
        props.updateNow()
        props.close()
    }
    return (
        <Modal
            className={styles.container}
            isOpen={props.show}
            onRequestClose={props.close}
            style={{ overlay: { backgroundColor: "rgba(62,68,87,0.75)" } }}
        >
            <h3 className={styles.heading}>Add category</h3>
            <form onSubmit={handleSubmit} >
                <FormInput value={catVal} handleChange={(e) => setcatVal(e.target.value)} label="add category" />
                <Button label="add new category" />
            </form>
        </Modal>
    )
}

export default InputModal
