import React, { Component } from 'react';
import MainRoute from "./MainRoute";
import { withRouter } from "react-router-dom";

class App extends Component {
      render() {
        return (
          <div>
            <MainRoute />
          </div>
        );
      }
    }
    
    export default withRouter(App);