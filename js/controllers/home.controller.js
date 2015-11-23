let HomeController =  function (HomeService) {

let vm = this
 
 vm.addContact = addContact;

 function addContact (obj){
  HomeService.addContact(obj).then((res) =>{
    console.log(res);
  })
 }
};
HomeController.$inject=[ 'HomeService'];

export default HomeController;
