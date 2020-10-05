import React, { Component } from 'react'
import Button from '../../Components/Button/Button'
import CustomDatePicker from '../../Components/CustomDatePicker/CustomDatePicker'
import FormDropDown from '../../Components/FormDropDown/FormDropDown'
import FormInput from '../../Components/FormInput/FormInput'
import FormTextArea from '../../Components/FormTextarea/FormTextArea'
import Navlink from '../../Components/Navlink/Navlink'
import styles from './AddProduct.module.css'

export default class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.inputImg = React.createRef();
        this.productPageLink = React.createRef();
    }

    state = {
        img: '',
        name: '',
        stock: '',
        unitSold: 55,
        expireDate: '',
        description: '',
        category: 'new arrival',
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e, updateNow) => {
        e.preventDefault()
        if (this.state.img) {
            const projectData = JSON.parse(localStorage.getItem('projectData'))
            const productData = { ...this.state, expireDate: new Date(this.state.expireDate).toDateString().substr(4) }
            projectData.productsPage.products.push(productData)
            localStorage.setItem('projectData', JSON.stringify(projectData))
            updateNow()
            this.productPageLink.current.click()
        } else {
            alert('please select a image for this product')
        }
    }

    updateDate = (date) => {
        this.setState({ expireDate: date })
    }

    handleImgSelection = () => {
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
                        this.setState({ img: reader.result })
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

    render() {

        const dropDownOptions = ['new arrival', 'most popular', 'trending']
        return (
            <div className={styles.container}>
                <h3 className={styles.heading}>Add Product</h3>
                <form className={styles.form} onSubmit={(e) => this.handleSubmit(e, this.props.update)}>
                    <div className={styles.parts}>
                        <div className={styles.halfWidth}>
                            <FormInput
                                handleChange={this.handleChange}
                                value={this.state.name}
                                label="product name"
                                type="text"
                                name="name"
                            />
                            <FormTextArea
                                handleChange={this.handleChange}
                                value={this.state.description}
                                label="description"
                                name="description"
                            />
                            <FormDropDown
                                handleChange={this.handleChange}
                                value={this.state.category}
                                label="category"
                                data={dropDownOptions}
                                name="category"
                            />

                            <div className={styles.flexContainer}>
                                <div className={`${styles.fixingLeft}`}>
                                    <CustomDatePicker
                                        handleChange={this.updateDate}
                                        label="Expire date"
                                        value={this.state.expireDate}
                                    />
                                </div>
                                <div className={`${styles.fixingRight}`}>
                                    <FormInput
                                        handleChange={this.handleChange}
                                        value={this.state.stock}
                                        label="Units in stock"
                                        type="text"
                                        name="stock"
                                    />
                                </div>
                            </div>
                        </div>
                        <div onClick={this.handleImgSelection} className={styles.halfWidth}>
                            {this.state.img ? <img className={styles.imgContainer} src={this.state.img} alt="selected product" /> : (
                                <div className={styles.imgContainer}>
                                    <div className={styles.iconContainer}>
                                        <i className={`fa fa-cloud-upload ${styles.icon}`} aria-hidden="true"></i>
                                    </div>
                                </div>
                            )}
                            <Button label="upload product image" />
                        </div>
                        <input
                            style={{ display: "none" }}
                            onChange={this.handleFileInput}
                            type="file"
                            name="img"
                            ref={this.inputImg}
                        />
                    </div>
                    <div className={styles.addProBtn}>
                        <Button label="add product now" />
                    </div>
                </form>
                <div style={{ display: "none" }}>
                    <Navlink to="/products" ref={this.productPageLink} />
                </div>
            </div>
        )
    }
}
