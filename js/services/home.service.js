let HomeService = function($http, PARSE) {


  let url = PARSE.URL +'/classes/contacts';

  this.addContact = addContact;

  function addContact (obj) {

    let Contact = function(obj) {
      this.name = obj.name;
      this.email = obj.email;
      this.website = obj.website;
      this.message = obj.message;
      this.nameText = obj.nameText;
      this.emailText = obj.emailText;
      this.websiteText = obj.websiteText;
      this.messageText = obj.messageText;
      this.text = obj.text;
    }

      let c = new Contact(obj);

       if(!obj) {
         return console.log( 'you have nothing');
        }  

        if (!validateEmpty(obj.name)) {
          return obj.nameText ='name is empty';
        }

         if (!validateEmpty(obj.email)) {
          return obj.emailText ='email is empty';
        }

         if (!validateEmpty(obj.website)) {
          return obj.websiteText ='website is empty';
        }

        if (!validateEmpty(obj.message)) {
          return obj.messageText ='message is empty';
        }

         if(!validateEmail(obj.email)) {
          return obj.emailText ='email needs an @ symbol';
        }

        if(!validateWebsite(obj.website)) {
          return obj.websiteText ='website needs to be valid';
        }

        alert('contact submitted!');
        return $http.post(url, c, PARSE.CONFIG);
        };

        function validateEmpty (field) {
            return field ? true : false;
        }

       function validateEmail (field) {
          return (field.indexOf('@') >= 0) ? true : false;
        }

        function validateWebsite (field) {
        var pattern = /^https?:\/\//i;
        return pattern.test(field);
        }

};

HomeService.$inject = ['$http', 'PARSE'];

export default HomeService;