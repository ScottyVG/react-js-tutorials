import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px",
<<<<<<< HEAD
=======
    };

    const bodyStyle = {
      // backgroundColor: "rgb(243, 250, 216)",
      // height: "700px",
      // width: "auto"
>>>>>>> 364e7f5f42f4ad18d01c6e4ee15e1611508b7954
    };

    return (

<<<<<<< HEAD
      <div class="body">
=======
      <div class="body" style={bodyStyle}>
>>>>>>> 364e7f5f42f4ad18d01c6e4ee15e1611508b7954

        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">

              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}
