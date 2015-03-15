import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("about");

  this.resource("posts", function() {
    this.resource("post", {
      path: ":post_id"
    });
  });

  this.resource("authors", function() {
    this.resource("author", {
      path: ":author_id"
    });
  });

  this.route("home");

  this.resource("users", function() {
    this.route("new");

    this.route("edit", {
      path: ":user_id/edit"
    });

    this.route("show", {
      path: ":user_id"
    });
  });
});

export default Router;