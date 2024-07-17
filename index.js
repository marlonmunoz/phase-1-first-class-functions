function receivesAFunction(callBackFunction){
    return callBackFunction();
}

function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function");
    }
    return namedFunction;
  }

  function returnsAnAnonymousFunction() {
    return () => {
      console.log("Hello from the anonymous function!");
    };
  }