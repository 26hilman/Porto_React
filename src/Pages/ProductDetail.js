import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import '../Pages/assets/css/ProductDetail.css';

import Navigation from '../Component/Navbar_Sebelum_Login';
import Footer from '../Component/Footer';

class ProductDetailPage extends Component {
    componentDidMount = async () => {
        this.props.getAllMobil();
    }
  render() {
    return (
        <section>
        <Navigation/>
        <div className="container">
            <div className="card">
                <div className="container-fliud">
                    <div className="wrapper row">
                        <div className="preview col-md-6">
                            <div className="preview-pic tab-content">
                                <div className="tab-pane active" id="pic-1"><img src="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC011A021001.jpg&width=440&height=262" alt="Gambar-1"/></div>
                                <div className="tab-pane" id="pic-2"><img src="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=CAC80HOC021B121001.jpg&width=440&height=262" alt="Gambar-2"/></div>
                                <div className="tab-pane" id="pic-3"><img src="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262" alt="Gambar-3"/></div>
                                <div className="tab-pane" id="pic-4"><img src="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=CAC80HOC021B121001.jpg&width=440&height=262" alt="Gambar-4"/></div>
                                <div className="tab-pane" id="pic-5"><img src="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC011A021001.jpg&width=440&height=262" alt="Gambar-5"/></div>
                            </div>
                            <ul className="preview-thumbnail nav nav-tabs">
                                <li className="active"><a data-target="#pic-1" data-toggle="tab"><img
                                            src="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC011A021001.jpg&width=440&height=262" alt="Gambar-1" /></a></li>
                                <li><a data-target="#pic-2" data-toggle="tab"><img
                                            src="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=CAC80HOC021B121001.jpg&width=440&height=262" alt="Gambar-2" /></a></li>
                                <li><a data-target="#pic-3" data-toggle="tab"><img
                                            src="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC091A021001.jpg&width=440&height=262" alt="Gambar-3" /></a></li>
                                <li><a data-target="#pic-4" data-toggle="tab"><img
                                            src="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=CAC80HOC021B121001.jpg&width=440&height=262" alt="Gambar-4" /></a></li>
                                <li><a data-target="#pic-5" data-toggle="tab"><img
                                            src="https://imageonthefly.autodatadirect.com/images/?USER=eDealer&PW=edealer872&IMG=USC80HOC011A021001.jpg&width=440&height=262" alt="Gambar-5" /></a></li>
                            </ul>
                        </div>
                        <div className="details col-md-6">
                            <h3 className="product-title">{ this.props.mobilDetail.judul_lapak }</h3>
                            <h4 className="price">Harga : <span>Rp. { this.props.mobilDetail.harga }</span></h4>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td className="tab-title">Model Mobil</td>
                                        <td>{ this.props.mobilDetail.model_mobil }</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr className="tab-even">
                                        <td className="tab-title">Transmisi</td>
                                        <td>{ this.props.mobilDetail.transmisi }</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td className="tab-title">Jarak Tempuh</td>
                                        <td>{ this.props.mobilDetail.jarak_tempuh } Km</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td className="tab-title">Tahun</td>
                                        <td>{ this.props.mobilDetail.tahun }</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td className="tab-title">Bahan Bakar</td>
                                        <td>{ this.props.mobilDetail.tipe_bahan_bakar }</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td className="tab-title">Warna</td>
                                        <td>{ this.props.mobilDetail.warna_mobil }</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="card">
                <div className="container-fliud">
                    <div className="wrapper row">
                        <div className="preview col-md-12">
                            <h3>Deskripsi</h3>
                            <p className="card-text">{ this.props.mobilDetail.deskripsi_lapak }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        <Footer />
    </section>
    );
  }
}

export default connect("is_login, mobilDetail", actions)(withRouter(ProductDetailPage));