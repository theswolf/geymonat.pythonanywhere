'use strict';

/*for(var b in window) {
  if(window.hasOwnProperty(b)) console.log(b);
}*/

var Header = window.widgets['Header'];

var Page = React.createClass({
  render: function() {
    return (
      <div >
        <Header />
      </div>
    );
  }
});

ReactDOM.render(<div>
          <Page/>
          </div>, document.getElementById('entrypoint'));
