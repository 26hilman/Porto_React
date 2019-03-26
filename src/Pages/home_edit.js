import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import '../Pages/assets/css/Home.css';

import Navigation from '../Component/Navigation';
import Footer from '../Component/Footer';
import Testimoni from '../Component/Testimoni';
import Search from '../Component/Search';
import GetAllMobil from '../Component/GetAllMobil';

class HomePage extends Component {
    // constructor
    componentDidMount = async () => {
        // const self = this;
        this.props.getAllMobil();
    }
  render() {
    {
        this.state.GetAllMobil.map((item, key) => {
            // console.log("testing item value", item)
            const merk_mobil = item.merk_mobil !== null ? item.merk_mobil : "";
            const model_mobil = item.model_mobil !== null ? item.model_mobil : "";
            const transmisi = item.transmisi !== null ? item.transmisi : "";
            const jarak_tempuh = item.jarak_tempuh !== null ? item.jarak_tempuh : "";
            const tahun = item.tahun !== null ? item.tahun : "";
            const tipe_bahan_bakar = item.tipe_bahan_bakar !== null ? item.tipe_bahan_bakar : "";
            const warna_mobil = item.warna_mobil !== null ? item.warna_mobil : "";
            const harga = item.harga !== null ? item.harga : "";
            const judul_lapak = item.judul_lapak !== null ? item.judul_lapak : "";
            const deskripsi_lapak = item.deskripsi_lapak !== null ? item.deskripsi_lapak : "";
    return (
        <section>
            <Navigation />
            <Search/>
            {/* <GetAllMobil key = {
                key
            }
            merk_mobil = {
                merk_mobil
            }
            model_mobil = {
                model_mobil
            }
            transmisi = {
                transmisi
            }
            jarak_tempuh = {
                jarak_tempuh
            }
            tahun = {
                tahun
            }
            tipe_bahan_bakar = {
                tipe_bahan_bakar
            }
            warna_mobil = {
                warna_mobil
            }
            harga = {
                harga
            }
            judul_lapak = {
                tipe_bahan_bakar
            }
            deskripsi_lapak = {
                deskripsi_lapak
            }
            
            /> */}
            <Testimoni/>
            <Footer />
        </section>
    );
  });
}
export default connect("is_login", actions)(withRouter(HomePage));