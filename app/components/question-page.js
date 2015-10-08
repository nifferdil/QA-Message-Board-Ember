import Ember from 'ember';

export default Ember.Component.extend({

  model() {
    return { questions: this.store.findAll('question'),
    answers: this.store.findAll('answer') };
  },

  actions: {
    update(rental, params) {
      this.sendAction('update', question, params);
    }
  }
});
