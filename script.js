//1
function globFunc() {
  const mess = "Hello";
  return function () {
    console.log(mess);
  };
}

const sayHello = globFunc();
sayHello();

//2

const func1 = () => {
  const var1 = "первая";

  const func2 = () => {
    const var2 = "вторая";

    const func3 = () => {
      const var3 = "третья";

      console.log(var1);
      console.log(var2);
      console.log(var3);
    };

    func3();
    console.log(var1);
    console.log(var2);
  };

  func2();
  console.log(var1);
};

func1();

//3
