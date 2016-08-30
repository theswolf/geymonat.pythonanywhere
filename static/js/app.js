'use strict';

/*for(var b in window) {
  if(window.hasOwnProperty(b)) console.log(b);
}*/

var Header = widget('Header');
var Container =  widget('Container');

var Page = React.createClass({
  render: function() {
    return (
      <div >
        <Header />
        <Container />
      </div>
    );
  }
});

ReactDOM.render(<div>
          <Page/>
          </div>, document.getElementById('entrypoint'));
