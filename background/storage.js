// Generated by CoffeeScript 1.10.0
define(["jquery", "utils"], function($, utils) {
  var storage;
  storage = {
    maxLength: 200,
    history: [],
    init: function() {
      var dfd;
      dfd = $.Deferred();
      chrome.storage.sync.get('historyRating', (function(_this) {
        return function(data) {
          _this.history = data.historyRating || [];
          return dfd.resolve(data);
        };
      })(this));
      return dfd;
    },
    isInHistory: function(word) {
      return this.history.find(function(item) {
        return item[word] != null;
      });
    },
    addRating: function(word, rating) {
      var item;
      item = this.isInHistory(word);
      if (item && (rating != null)) {
        item[word] = rating;
        return chrome.storage.sync.set({
          historyRating: this.history
        });
      }
    },
    addHistory: function(word) {
      var item;
      if (!this.isInHistory(word)) {
        if (this.history.length >= this.maxLength) {
          this.history.shift();
        }
        item = {};
        item[word] = 0;
        this.history.push(item);
        return chrome.storage.sync.set({
          historyRating: this.history
        });
      }
    }
  };
  return storage;
});
