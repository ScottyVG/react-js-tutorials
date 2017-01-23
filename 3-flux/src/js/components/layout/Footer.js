import React from "react";


export default class Footer extends React.Component {
  render() {
    const footerStyles = {
      marginTop: "30px",
    };

    return (
      <footer style={footerStyles}>
        <div class="row">
          <div class="col-md-12 text-center">
            <p class="col-md-6">Copyright &copy; Scotty's Favorite Todo List</p>
            <p class="col-md-6">Brought to you with the help of my friends at http://glyphicons.com/ who supplied the AWESOME icons</p>
          </div>
        </div>
      </footer>
    );
  }
}
