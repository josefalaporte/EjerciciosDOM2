//Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del siguiente formulario
//Imprime los nombres en la consola.

//function getFormValue () {
   // var firstName = document.getElementById("form1").elements.namedItem("fname").value;
    //var lastName = document.getElementById("form1").elements.namedItem("lname").value;
    //console.log("Nombre: " + firstName);
    //console.log("Apellido: " + lastName);}

function getFormValue() {
    const firstName = document.querySelector('#form1 input[name ="fname"]').value;
    const lastName = document.querySelector('#form1 input[name="lname"]').value;
    console.log("Nombre: " + firstName);
    console.log("Apellido:" + lastName);

}