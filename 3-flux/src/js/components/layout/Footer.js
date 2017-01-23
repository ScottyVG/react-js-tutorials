import React from "react";


export default class Footer extends React.Component {
  render() {
    const footerStyles = {
      marginTop: "30px",
    };

    return (
      <footer style={footerStyles}>
        <div class="row">
<<<<<<< HEAD
          <div class="col-md-12 text-center">
            <p class="col-md-6">Copyright &copy; Scotty's Favorite Todo List</p>
            <p class="col-md-6">Brought to you with the help of my friends at http://glyphicons.com/ who supplied the AWESOME icons</p>
=======
          <div class="col-lg-12">
            <p>Copyright &copy; Scotty's Favorite Todo List</p>
            <p>Brought to you with the help of my friends at http://glyphicons.com/ who supplied the AWESOME icons</p>
>>>>>>> 364e7f5f42f4ad18d01c6e4ee15e1611508b7954
          </div>
        </div>
      </footer>
    );
  }
}
