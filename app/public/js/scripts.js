$(document).ready(function(){
    $("#submitBtn").on("click", function(){
        event.preventDefault();
        var score = function(){
            var arr = []
            for (let i = 1; i < 11; i++){
                arr.push($("#qSelect"+i).val().substring(0,1));
            }
            return arr;
        }
            
        var newFriend = {
            "name": $("#name").val().trim(),
            "photo": $("#photo").val().trim(),
            "score": score()
        };

        console.log(newFriend);
    //   Question: What does this code do??
        $.post("/api/addFriend", newFriend).then(function(data) {
        //  console.log("friend added...");
          console.log("new friend added");
          getFriend(newFriend);
        //});
        });
    });

    function getFriend(friend) {

        $.ajax({
            url: "/api/getFriends",
            data: friend
        }).then(function(res){
            // console.log("get...");
            console.log(res);
            alert("You matched with - "+ res[0].name);
        })
    }
});