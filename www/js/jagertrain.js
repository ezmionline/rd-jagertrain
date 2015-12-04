'use strict';

var Jagertrain = function() {
  var firebaseRef = new Firebase("https://jagertrain.firebaseio.com");

  this.purchaseShot = function(customerId) {
    var transactionsRef = firebaseRef.child('transactions');
    transactionsRef.push().set({
      customer: customerId,
      date: Firebase.ServerValue.TIMESTAMP
    });
  };
};
