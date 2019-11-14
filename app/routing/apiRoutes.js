var friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/getFriends", function(req, res) {
      return res.json(friendsData);
    });
  
    app.post("/api/addFriend", function(req, res) {
        var newFriend = req.body.scores;
        var matchedFriend;

        console.log(newFriend);
        matchedFriend = choiceFriend(newFriend);
        friendsData.push(newFriend);
        res.json(matchedFriend);
    });

    function choiceFriend(newUserScore) {
      let topMatch, match = 0 ,friendScoreArr = [];
      

      for (let friend in friendsData){
        var difference = 0;
        
        for (let score in newUserScore){
          //friendScoreArr.push(Math.abs(friendsData[friend].scores[score] - newUse.scores[score])) 
          difference += (Math.abs(parseInt(friendData[friend].scores[score]) - parseInt(newUserScore[score])));
        }
        friendScoreArr.push(difference);
      }
      for (let i = 0; i < friendScoreArr.length; i++){
        if(friendScoreArr[i] <= friendScoreArr[match]){
          match = i;
        }
      }
      topMatch = friendsData[match];

      return topMatch;
    }
};
  