import React, { Component } from "react";
// import { Link } from "react-router-dom";
import './assets/css/Testimoni.css';

class Testimoni extends Component {
  render() {
    return (
        <section>
          <div className="card col-md-6 mt-5 mb-5">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="60000">
                <div className="w-100 carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="carousel-caption">
                            <div className="row">
                                <div className="col-sm-9">
                                    <small>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
                                        porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
                                        elit.</small>
                                    <small className="smallest mute">- Yayo Dudemous</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                            <div className="row">
                                <div className="col-sm-9">
                                    <small>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
                                        porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
                                        elit.</small>
                                    <small className="smallest mute">- Yayo Dudemous</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                            <div className="row">
                                <div className="col-sm-9">
                                    <small>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi
                                        porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id
                                        elit.</small>
                                    <small className="smallest mute">- Yayo Dudemous</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="float-right navi">
                    <a className="" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon ico" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon ico" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Testimoni;
