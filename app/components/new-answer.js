import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var input = {
        content: this.get('content'),
        author: this.get('author'),
        question: this.question
      };
      this.set('addNewAnswer', false),
      this.sendAction('saveAnswer', input);
    }
  }
});
