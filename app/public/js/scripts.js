$(document).ready(function(){
    $("submitBtn").on("click", function(){
        event.preventDefault();
        var score = function(){
            var arr = []
            for (let i = 1; i < 11; i++){
                arr.push($("#qSelect"+i).val().substring(0,1));
            }
            return arr;
        }
        var newFriend = {
            name: $("#name").val().trim(),
            photo: $("#role").val().trim(),
            score: score()
        };

        console.log(newFriend);
      // Question: What does this code do??
      //$.post("/api/addFriend", newFriend).then(function(data) {
        //  console.log("friend added...");
          
        //});
    });
})