(function(context) {
  //console.log(window.ReactBootstrap);
  for(var ui in context.ReactBootstrap) {
    if(context.ReactBootstrap.hasOwnProperty(ui)) {
      context[ui] = context.ReactBootstrap[ui];
    //  console.log(context[ui]);
    }
  }
})(window);

(function(context) {
  var widget = function(name) {
    return  context.widgets[name];
  };
  context.widget = widget;
})(window);
