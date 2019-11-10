var friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/getFriends", function(req, res) {
      return res.json(friendsData);
    });
  
    app.post("/api/addFriend", function(req, res) {
        var newFriend = req.body;

        console.log(newFriend);
        friendsData.push(newFriend);
        res.json(true);
    });
};
  