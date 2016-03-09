var items = [
    {
          do: 'Write a mini project',
          id: 1
    },
    {
          do: 'remember req params and queries',
          id: 2
    },
    {
          do: 'im running out of ideas',
          id: 3
    }
];

module.exports = {
  getItems: function( req, res ){
    res.send(items);
  },
  postItem: function( req, res ){
    items.push(req.body);
    res.send(items);
  },
  deleteItem: function( req, res ){
    for (var i = 0; i < items.length; i++) {
      if(items[i].id === parseInt(req.params.itemId)){
        items.splice(i, 1);
      }
    }
    res.send(items);
  },
  deletedItem: function( req, res ){
    var message = null;

    if(req.query.id) console.log("THIS IS MY LOG");
    else console.log("THIS IS MY ELSE LOG");
    for (var i = 0; i < items.length; i++) {
      if(items[i].id === parseInt(req.query.id)){
        message = items[i];
        items.splice(i, 1);
      }
    }

    if(!message) res.status(500).send('<p>Invalid query</p>');
    else res.send({"Deleted:": message, "Result": items});
  }
};
