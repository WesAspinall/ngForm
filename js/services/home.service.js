let HomeService = function($http, PARSE) {


 let url = PARSE.URL +'/classes/contacts';

 this.addContact = addContact;

  let Contact = function(obj) {
    this.name = obj.name;
    this.email = obj.email;
    this.website = obj.website;
    this.message = obj.message;
  }

   function addContact (obj) {
    console.log(obj.name);
    let c = new Contact(obj);
    return $http.post(url, c, PARSE.CONFIG);
  };


};

HomeService.$inject = ['$http', 'PARSE'];

export default HomeService;