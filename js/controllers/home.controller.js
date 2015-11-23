let HomeController =  function ( HomeService) {

let vm  = this;

   vm.addContact = function (obj){

   return HomeService.addContact(obj);

   }


};
HomeController.$inject= ['HomeService'];
export default HomeController;
