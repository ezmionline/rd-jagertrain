'use strict';

var Jagertrain = function() {
  var firebaseRef = new Firebase("https://jagertrain.firebaseio.com");
  var store = new Lawnchair({ adapter: 'dom', table: 'customers'}, function() {
    console.log('Initialised database!');
    this.nuke();
  });

  this.purchaseShot = function(customerId) {

    var transactionsRef = firebaseRef.child('transactions');
    // we can also chain the two calls together
    transactionsRef.push().set({
      customer: customerId,
      date: Firebase.ServerValue.TIMESTAMP
    });

    var balance = 0;

    store.exists(customerId, function(exists) {
      if(!exists) {
        balance = 5;
        console.log('New customer (' + customerId + ')! Balance set to ' + balance);
      } else {
        store.get(customerId, function(doc) {

          if(doc.balance !== null && doc.balance > 0) {
            balance = doc.balance - 1;
            console.log('Cha-ching, customer ' + customerId + ' bought a jager. ' + balance + ' remaining.');
          } else {
            console.log('Oh no, customer ' + customerId + ' is out of jager credits!');
          }
        });
      }
    });

    store.save({ key: customerId, balance: balance }, function(doc) {
      console.log(doc);
      return doc;
    });
  };
};
