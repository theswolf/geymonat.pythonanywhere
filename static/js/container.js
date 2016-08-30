'use strict';

(function(context) {

  context.widgets =   context.widgets || {};


  var Container = React.createClass({
    render: function() {
      return (
        <div class="container">

          </div>
      );
    }
  });

  context.widgets['Container'] = Container;
})(window)
