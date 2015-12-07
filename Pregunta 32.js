function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
    
    
  function foo() {
    return 2;
  }
}
test();

function testPaso1(){
    var a;
    
    function foo(){
        return 2;
    }
    
    console.log(a);
    console.log(foo());
    
    a=1;

}

function testPaso2(){
    var a;

    function foo(){
        return 2;
    }
    
    console.log(undefined);
    
    console.log(function foo(){
        return 2;
    });
    
    a=1;

}


function testPaso3(){
    var a;

    function foo(){
        return 2;
    }

    console.log(undefined);

    console.log(2);

    a=1;

}