import Ember from 'ember';

export default Ember.Controller.extend({
  previewVisible: false,

  actions: {
    togglePreview: function() {
      this.toggleProperty('previewVisible');
    },

    saveDocument: function() {
      var self = this;

      var doc = this.store.createRecord('document', {
        name: this.get('name'),
        text: this.get('text'),
        created: new Date()
      });

      doc.save().then(function() {
        self.setProperties({name: '', text: ''});
        self.transitionToRoute('document', doc);
      });
    },

    cancelDocument: function() {
      this.setProperties({name: '', text: ''});
      this.transitionToRoute('documents.index');
    }
  }
});
