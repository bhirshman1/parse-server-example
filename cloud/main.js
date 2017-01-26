Parse.Cloud.define("iosPush", function(request, response) {

  var user = request.user;
  var params = request.params;
  var someKey = params.someKey;
  var data = params.data;

  var recipientUser = new Parse.User();
  recipientUser.id = someKey;

  var pushQuery = new Parse.Query(Parse.Installation);
  pushQuery.equalTo('deviceType', 'ios'); // targeting iOS devices only
  //pushQuery.equalTo("user", recipientUser);

  Parse.Push.send({
    where: pushQuery, // Set our Installation query
    data: data
  }, { success: function() {
      console.log("#### PUSH OK");
  }, error: function(error) {
      console.log("#### PUSH ERROR" + error.message);
  }, useMasterKey: true});

  response.success('success');
});
