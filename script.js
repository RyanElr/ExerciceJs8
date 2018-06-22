//Déclaration des variables
function displayAge(){
  var reg = /[\d\.\,]+/;
  var age = document.getElementById('age').value;
//On compare l'âge , si il est à moins de 18 ans il est mineur , égale ou supérieur à 18 ans il est majeur
  if(reg.test(age)){
    if(age >= 18){
      alert(" Vous êtes majeur");
    }
    else {
      alert(" Vous êtes mineur");
    }
  }
}
