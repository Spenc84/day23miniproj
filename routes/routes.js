var ctrl = require('../serveCtrls/controller'),
    time = require('../middleware/middleware').addTimeStamp;

module.exports = function( app ){
  app.route('/api/items')
     .get(ctrl.getItems)
     .post(time, ctrl.postItem)
     .delete(ctrl.deletedItem);
  app.route('/api/items/:itemId')
     .delete(ctrl.deleteItem);
};
