Parse.Cloud.define("sendEmail", function(request, response) {
  var sendgrid = require("sendgrid");
  sendgrid.initialize("pratikandasha", "ashiki2016");

  var name = request.params.name;
  var email = request.params.email;
  var phone = request.params.phone;
  var message = request.params.message;

  sendgrid.sendEmail({
   to: "pratikandasha@gmail.com",
   from: email,
   fromname: name,
   subject: "Email from PratikAndAsha.github.io",
   text: "Name: "+name+"\nEmail: "+email+"\nPhone: "+phone+"\nMessage:\n\n"+message
   }, {
     success: function(httpResponse) {
       console.log(httpResponse);
       response.success("Email sent!");
    },
     error: function(httpResponse) {
       console.error(httpResponse);
       response.error("Uh oh, something went wrong");
    }
  });
});