import React from "react";


export default class Footer extends React.Component {
  render() {
    const footerStyles = {
      marginTop: "30px",
    };

    return (
      <footer style={footerStyles}>
        <div class="row">
          <div class="col-lg-12">
            <p>Copyright &copy; Scotty's Favorite Todo List</p>
            <p>Brought to you with the help of my friends at http://glyphicons.com/ who supplied the AWESOME icons</p>
          </div>
        </div>
      </footer>
    );
  }
}
