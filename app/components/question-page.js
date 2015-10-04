import Ember from 'ember';

export default Ember.Component.extend({

  model() {
    return { cakes: this.store.findAll('rental'),
    answers: this.store.findAll('answer') };
  },

  actions: {
    update(rental, params) {
      this.sendAction('update', question, params);
    }
  }
});
