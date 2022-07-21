
import React, {Component} from "react";
import Calculator from "./Calculator";
import ProductList from "../product/ProductList";
import axios from "axios";

class Monitor extends Component{
   
   constructor(props){
      super(props);
      this.state = {totalPrice: 0, orders: [], confirm: false,msg:''};
      this.addOrder = this.addOrder.bind(this);
      this.delOrder = this.delOrder.bind(this);
      this.cancelOrder = this.cancelOrder.bind(this);
      this.confirmOrder = this.confirmOrder.bind(this);


   }
   addOrder(product){
      
      let findOrder = this.state.orders.find(order => order.product.id ===  product.id);
      if(findOrder){
         findOrder.quantity++;
         
      }else{
         this.state.orders.push({product: product, quantity: 1});
      }
      const totalPrice = this.state.totalPrice + parseInt(product.uniPrice);
      this.setState({totalPrice: totalPrice, orders: this.state.orders,confirm:false});
      
   }
    
   delOrder(product){
      let findOrder = this.state.orders.find(orders => orders.product.id === product.id);
      let resultOrder = this.state.orders.filter(orders => orders.product.id !== product.id);
      const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.uniPrice));
      this.setState({totalPrice: totalPrice, orders: resultOrder,confirm:false});

   }
   confirmOrder(){
      const {totalPrice,orders} = this.state;
      if(orders && orders.length > 0){
      axios.post("http://localhost:3050/orders",{orderedDate : new Date(),totalPrice,orders})
      .then(res => {
         this.setState({totalPrice: 0,orders:[],confirm:true,msg:'บันทึกรายการสั่งซื้อเรียบร้อย'});
      })
   }else{
      this.setState({totalPrice: 0,orders:[],confirm:true,msg:'กรุณาเลือกสินค้า'});

   }
   }
   cancelOrder(){
      this.setState({totalPrice:0,orders:[],confirm:false});
   }
      
   render(){
    return(
        <div className="container-fluid">
            {this.state.confirm &&
            <div className="alert alert-secondary title text-right" role="alert">
               {this.state.msg}
            </div>
            }

            <div className="row">
                 <div className="col-md-9">
                    <ProductList  products = {this.props.products} onAddOrder = {this.addOrder}/>
                 </div>
                 <div className="col-md-3">        
                    <Calculator  totalPrice={this.state.totalPrice} orders={this.state.orders} onDelOrder= {this.delOrder} onConfirmOrder={this.confirmOrder} onCancelOrder={this.cancelOrder}/>
                 </div>
            </div>
        </div>
    )
   } 
}
export default Monitor;