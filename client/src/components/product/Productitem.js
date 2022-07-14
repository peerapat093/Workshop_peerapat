import React,{Component} from "react";
// const ProductItem = (props) =>{
//     const {productName,uniPrice} = props;
//     return(
//     <dev>
//        <p>{productName}</p>
//         <p>{uniPrice}</p>

//     </dev>)
// }

class ProductItem extends Component{
    //  constructor(props){
    //     super(props);
    //     console.log('constructor|' + props.productName);
    //  }

     
    
    render(){
        const {productName,uniPrice, thumbnail} = this.props.product;

        return(
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail " src={thumbnail} alt="" />
               <h5 className="mt-2">{productName}</h5>
                <p className="title text-right" >{uniPrice} THB</p>
                <button className="btn btn-block btn-secondary title" onClick ={() => this.props.onAddOrder(this.props.product)}>
                    ซื้อ
                </button>
                <hr />
            </div>)
    }
} 
export default ProductItem;