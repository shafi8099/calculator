function insert(num) {

    document.form.display.value = document.form.display.value + num;

  }

  function equal() {

    var exp = document.form.display.value;

    if (exp) {

      document.form.display.value = exp;

    }

  }

  function backspace() {

    var exp = document.form.display.value;

    document.form.display.value = exp.substring(0, exp.length -1);

  }

  function remove() {
    
    document.form.display.value = "";
 }