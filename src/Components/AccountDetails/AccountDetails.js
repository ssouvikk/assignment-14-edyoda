import React, { Component } from 'react'
import Button from '../Button/Button'
import DeleteIcon from '../DeleteIcon/DeleteIcon'
import EmptyDiv from '../EmptyDiv/EmptyDiv'
import FormInput from '../FormInput/FormInput'
import styles from './AccountDetails.module.css'
import MsgModal from '../../Components/MsgModal/MsgModal'

export default class AccountDetails extends Component {
    constructor(props) {
        super(props);
        this.inputImg = React.createRef();
    }

    state = { ...this.props.data, password: '', password2: '', showMsg: false, }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidUpdate = () => {
        if (this.props.data.email !== this.state.email) {
            this.setState({ ...this.props.data })
        }
    }


    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.password === this.state.password2) {
            const currentUser = JSON.parse(localStorage.getItem('user'))
            if (currentUser.data.email === this.state.email) {
                let currentState = this.state
                delete currentState.password2
                delete currentState.showMsg
                let prevProjectData = JSON.parse(localStorage.getItem('projectData'))
                prevProjectData.accountsPage[this.props.userType] = currentState
                localStorage.setItem('projectData', JSON.stringify(prevProjectData))
                currentUser.data = currentState
                localStorage.setItem('user', JSON.stringify(currentUser))
                this.setState({ password2: "", password: "", showMsg: true })
            } else {
                alert('you can not change other users details')
            }
        } else {
            alert('Please use same password for both fields')
        }
    }

    chooseImg = () => {
        this.inputImg.current.click()
    }

    handleFileInput = (e) => {
        if (e.target.files.length) {
            const fileName = e.target.files[0].name
            const extension = fileName.substr(fileName.lastIndexOf('.') + 1)
            if (extension === 'jpg' || extension === 'jpeg' || extension === 'png' || extension === 'svg' || extension === 'webp') {
                const sizeOfFile = ((e.target.files[0].size) / 1024) //size in KB
                if (sizeOfFile < 1024) {
                    const reader = new FileReader()
                    reader.addEventListener("load", () => {
                        this.setState({ profilePic: reader.result })
                    })
                    reader.readAsDataURL(e.target.files[0])
                } else {
                    alert('file size must be less than 1 MB')
                }
            } else {
                alert('plz choose a valid image file')
            }
        }
    }

    updateImg = () => {
        this.setState({ profilePic: '' })
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.avatarSection}>
                    <h3 className={styles.Heading}>Change Avatar</h3>
                    <div className={styles.imgContainer}>
                        {this.state.profilePic ? <img className={styles.avatarImg} src={this.state.profilePic} alt={"avatar"} /> : <EmptyDiv />}
                        <div className={styles.DeleteIcon}> <DeleteIcon clickToDelete={this.updateImg} /> </div>
                    </div>
                    <Button handleClick={this.chooseImg} label="upload new photo" />
                    <input style={{ display: "none" }} onChange={this.handleFileInput} type="file" name="img" ref={this.inputImg} />
                </div>

                <div className={styles.accountSettings}>
                    <h3 className={styles.Heading}>Account Settings</h3>
                    <form onSubmit={this.handleSubmit} className={styles.Form}>
                        <div className={styles.leftPart} >
                            <FormInput handleChange={this.handleChange} value={this.state.name} label="Account name" name="name" />
                            <FormInput handleChange={this.handleChange} value={this.state.password} label="Account password" name="password" type="password" />
                            <FormInput handleChange={this.handleChange} value={this.state.phone} label="Phone" name="phone" />
                        </div>
                        <div className={styles.rightPart}>
                            <FormInput handleChange={this.handleChange} value={this.state.email} label="Account email" name="email" type="email" disabled={1} />
                            <FormInput handleChange={this.handleChange} value={this.state.password2} label="Re enter your password" name="password2" type="password" />
                            <div className={styles.btnfixing}>
                                <Button label="update your profile" />
                            </div>
                        </div>
                    </form>
                    <Button label="delete your account" />
                </div>
                <MsgModal msg={{ 1: 'User details updated successfully' }} show={this.state.showMsg} close={() => this.setState({ showMsg: false })} />
            </div>
        )
    }
}
