import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        question: this.question,
        date_added: Date.now()
      };
      this.set('addNewAnswer', false),
      this.sendAction('saveAnswer', params);
    }
  }
});
