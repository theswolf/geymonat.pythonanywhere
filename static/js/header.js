'use strict';

(function(context) {

  context.widgets =   context.widgets || {};


  var Header = React.createClass({
    render: function() {
      return (
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
             <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
          </Nav>
          </Navbar.Collapse>
          </Navbar>
      );
    }
  });

  context.widgets['Header'] = Header;
})(window)
