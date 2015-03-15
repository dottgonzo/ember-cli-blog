import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    remove: function(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord().then(function(){
          location.reload();
        });
      }
    }
  },
  model: function() {
    return this.store.find('user');
  }
});
