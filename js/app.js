(function() {

  var UsersModel = Backbone.Model.extend({
    defaults: function() {
      return {
        firstname: "",
        lastname: "",
        email: ""
      }
    }
  });

  var UsersCollection = Backbone.Collection.extend({
    model: UsersModel,
    comparator: "firstname",
    url: "assets/users.json"
  });

  var testCollection = new UsersCollection();
  testCollection.fetch({
    success: function() {
      console.log(testCollection);
    }
  });

})();