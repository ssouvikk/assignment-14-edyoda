import React, { Component } from 'react'
import ProductRow from '../../Components/ProductRow/ProductRow'
import Button from '../../Components/Button/Button'
import styles from './Products.module.css'
import CategoryRow from '../../Components/CategoryRow/CategoryRow'
import Navlink from '../../Components/Navlink/Navlink'
import InputModal from '../../Components/InputModal/InputModal'


export default class Products extends Component {
    constructor(props) {
        super(props);
        this.addProductPageLink = React.createRef();
    }

    state = {
        showModal: false
    }

    productRows = () => {
        if (this.props.data) {
            return this.props.data.products.map((product, pos) => <ProductRow
                key={pos}
                pos={pos}
                data={product}
                handleTick={(ps) => this.props.handleTick(ps)}
                clickHandle={(pId) => this.props.delProduct(pId)}
            />)
        }
    }

    categoryRows = () => {
        if (this.props.data) {
            return this.props.data.categories.map((cat, pos) => <CategoryRow
                key={pos}
                data={cat}
                pos={pos}
                clickHandle={(cId) => this.props.delCat(cId)}
            />)
        }
    }

    addProductBtnClicked = () => this.addProductPageLink.current.click()

    showModal = () => {
        this.setState({ showModal: true })
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.products}>
                    <div className={styles.scroll}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product Name</th>
                                    <th>Unit Sold</th>
                                    <th>In stock</th>
                                    <th>Expire Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.productRows()}
                            </tbody>
                        </table>
                    </div>
                    <Button handleClick={this.addProductBtnClicked} label="Add new product" />
                    <Button handleClick={this.props.delMarked} label="Delete selected products" />
                </div>
                <div className={styles.categories}>
                    <h3 className={styles.catHeading}>Product categories</h3>
                    <div className={styles.scroll}>
                        <table className={styles.table}>
                            <tbody>
                                {this.categoryRows()}
                            </tbody>
                        </table>
                    </div>
                    <Button handleClick={this.showModal} label="add new category" />
                </div>
                <div style={{ display: "none" }}>
                    <Navlink to="/addProduct" ref={this.addProductPageLink} />
                </div>
                <InputModal updateNow={this.props.updateProjectData} show={this.state.showModal} close={() => this.setState({ showModal: false })} />
            </div>
        )
    }
}
