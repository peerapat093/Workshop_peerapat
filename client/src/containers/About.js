import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () =>{
    return(
        <div>
            <Header />
            <div className="container col-md-5">
                <h3>สวัสดีครับ</h3>
                <p className="title text-justify mt-4 mb-4">
                    ร้านดีร้านเป็นกันเองของอร่อย
                </p>
                <h4 className="text-success">จาก เฮลตี้ คาแฟ่</h4>

            </div>
            <Footer  company="KANAKI" email="odsatuk123@gmail.com"/>
        </div>
    )
}

export default About;