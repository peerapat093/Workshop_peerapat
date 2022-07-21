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
        const {productName,uniPrice, thumbnail}  = this.props.product;

        return(
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail " src={thumbnail} alt="" />
               <h5 className="mt-2">{productName}</h5>
                <p className="title text-right" >{uniPrice} THB</p>

                {this.props.onAddOrder &&
                <button className="btn btn-block btn-secondary title" onClick ={() => this.props.onAddOrder(this.props.product)}>
                    ซื้อ
                </button>
                }
                {(this.props.onDelProduct || this.onEditPriduct) &&
                <button className="btn btn-block btn-info col-5  title" onClick ={() => this.props.onEditProduct(this.props.product)}>
                    แก้ไข
                </button>
                }
                {(this.props.onDelProduct || this.onEditPriduct) &&
                <button className="btn btn-block btn-danger col-5 float-riight title" onClick ={() => this.props.onDelProduct(this.props.product)}>
                      ลบ 
                </button>
                }

                <hr />
            </div>)
    }
} 
export default ProductItem;