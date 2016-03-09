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

  var UsersView = Backbone.View.extend({
    el: "#users__body",
    collection: new UsersCollection(),
    initialize: function() {
      var scope = this;
      this.collection.fetch({
        success: function() {
          scope.render();
        }
      });
    },

    render: function() {
      var scope = this;
      this.collection.forEach(function(model) {
        scope.output(model);
      });
      return this;
    }, 

    output: function(model) {
      var row = document.createElement('tr');
      row.innerHTML = "<td>" + model.get("first name") + "</td>\
                       <td>" + model.get("last name") + "</td>\
                       <td>" + model.get("email") + "</td>";
      this.el.appendChild(row);
    }
  });

  var app = new UsersView();

})();