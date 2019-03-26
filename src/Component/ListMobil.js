import React from 'react';
import { Link } from "react-router-dom";

const ListMobil = props => {
    // console.log("debug props value", props)
    const path = "/mobil/" + props.id
    return (  
        <div className="col-md-4">
            <div className="card rounded">
                <div className="card-image">
                    <span className="card-notify-badge">Bekas</span>
                    <span className="card-notify-year">{ props.tahun }</span>
                    <img className="img-fluid" src="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC011A021001.jpg&width=440&height=262" alt="Alternate Text" />
                </div>
                <div className="card-image-overlay m-auto">
                    <span className="card-detail-badge">Rp. { props.harga}</span>
                    <span className="card-detail-badge">{ props.jarak_tempuh } Km</span>
                </div>
                <div className="card-body text-center">
                    <div className="ad-title m-auto">
                        <h5>{ props.judul_lapak }</h5>
                    </div>
                    <Link to="/product_detail" className="ad-btn" >View</Link>
                </div>
            </div>
        </div>
    );
};


export default ListMobil;