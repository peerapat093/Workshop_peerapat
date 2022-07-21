import React,{Component} from "react";
import Productitem from "./Productitem";



class ProductList extends Component {

    showProducts(){
            return( this.props.products && this.props.products.map(product => (
                <Productitem key={product.id} product={product} onAddOrder =  {this.props.onAddOrder} onDelProduct={this.props.onDelProduct} onEditProduct={this.props.onEditProduct}/>
            ))
            );
    }
        render(){
            return(
                <div className="row">
                    {this.showProducts()}

                </div>
            );
        }
}
export default ProductList;