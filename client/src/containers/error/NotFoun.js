 import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const NotFoun = () => {
    return(
        <div>
            <Header />
            <div className="container col-md-8 text-center">
                <h1 className="mt-5">404</h1>
                <h2 className="mb-4">NotFoun</h2>
                <p className="title mb-5">ไม่พบหน้า</p>
            </div>
            <Footer />
        </div>
    )
}

export default NotFoun;