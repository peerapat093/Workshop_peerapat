
import React,{Component} from "react";

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(()=> this.tick(),1000);
    }

    componentDidUpdate(){
        
    }

    componentWillUnmount(){
        clearTimeout(this.timerID);
    }

    tick(){
        this.setState({date : new Date()});
    }

    render(){
        const style = {height : 64, marginTop : 5};

        return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 text-left">
                    <h1 className="text-success"><img style={style} src="/imagse/logo/logo.png" alt=""/> เฮลตี้ คาเฟ่ </h1>
                </div>
                <div className="col-md-2 text-right">
                <h5 className="text-muted mt-3 ">{this.state.date.toLocaleTimeString()}</h5>
                </div>
            </div>
            </div>
        )
    }
}

export default Header;