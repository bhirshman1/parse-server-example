// iOS push testing
Parse.Cloud.define("iosPush", function(request, response) {
 
  var user = request.user;
  var params = request.params;
  var someKey = params.someKey
  var data = params.data
 
  var pushQuery = new Parse.Query(Parse.Installation);
  pushQuery.equalTo('deviceType', 'ios'); // targeting iOS devices only
  pushQuery.equalTo("someKey", someKey)
 
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
