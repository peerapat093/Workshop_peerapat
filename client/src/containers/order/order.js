import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";


class Order extends Component {
    constructor(props) {
        super(props);
        this.state = { order: null };
    }

    componentDidMount() {
        axios.get("http://localhost:3050/orders").then(
            res => {
                this.setState({ order: res.data });
            }
        )
    }
    delOrder(order) {
        axios.delete("http://localhost:3050/orders/" + order.id).then(res => {
            axios.get("http://localhost:3050/orders").then(
                res => {
                    this.setState({ order: res.data });
                }
            )
        })
    }


    showOrders() {
        // console.log(JSON.stringify(this.state.order ))
        return this.state.order && this.state.order.map(order => {
            const date = new Date(order.orderedDate);
            return (
                <div key={order.id} className="col-md-3">
                    <hr />
                    <p>
                        <button className="btn btn-danger btn-sm title" onClick={() => this.delOrder(order)}>x</button>
                    </p>
                    <h5>วันที่ {date.toLocaleDateString()}{date.toLocaleTimeString()} </h5>
                    <ul>
                        {order.orders && order.orders.map(record => {
                            return (<li 
                            key={record.product.id}>
                                {record.product.productName}x{record.quantity} = {record.product.uniPrice * record.quantity}
                            </li>)
                        })}
                    </ul>
                    <p className="title">ยอดรวม{order.totalPrice}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <h1>รายการสั่งซื้อ</h1>
                    <div className="row">
                        {this.showOrders()}
                    </div>
                </div>
                <Footer  company =  "kanaki" email = "odsatuk123@gmail.com"/>
            </div>
        )
    }
}
export default Order;