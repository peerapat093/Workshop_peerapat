/* eslint-disable no-lone-blocks */
import Header from '../components/Header';
import Monitor from "../components/monitor/Monitor";
import Footer from '../components/Footer';
// import ProductItem from './components/product/Productitem';
import { Component } from 'react';
import axios from "axios";

class Home extends Component {

 
  constructor(props) {
    super(props);
    this.state = {products : "" };
  }

  componentDidMount(){
  //   this.setState({products : [
  //     {productId: 1 , productName: "สลัดผัก", uniPrice: "120", thumbnail: "/imagse/product/1.jpg"},
  //     {productId: 2 , productName: "ไก่ทอด", uniPrice: "90", thumbnail: "/imagse/product/2.jpg"},
  //     {productId: 3 , productName: "บิงซู", uniPrice: "200", thumbnail: "/imagse/product/3.jpg"},
  //     {productId: 4 , productName: "เฟรนฟราย", uniPrice: "140", thumbnail: "/imagse/product/4.jpg"},
  //     {productId: 5 , productName: "เค้ก 3 ชั้น", uniPrice: "200", thumbnail: "/imagse/product/5.jpg"},
  //     {productId: 6 , productName: "กาแฟ เฮลตี้ฟู้ด", uniPrice: "140", thumbnail: "/imagse/product/6.jpg"}

  //   ]})
  // fetch("http://localhost:3050/products",{method:"GET"})
  // .then(res => res.json())
  // .then(res => {this.setState({products : res})}); 
    
    axios.get("http://localhost:3050/products").then(res =>{
      {this.setState({products : res.data}) } 
    });

  }
  
  render(){
  return (
    <div> 
      <Header />
    <Monitor products={this.state.products}/>
      <Footer  company =  "kanaki" email = "odsatuk123@gmail.com" />
        
     
      
    </div>
  );
  }
}  


export default Home;
