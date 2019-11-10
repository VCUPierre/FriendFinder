$(document).ready(function(){
    $("submitBtn").on("click", function(){
        event.preventDefault();
        var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#role").val().trim(),
        scores: "...",
        
      };

      // Question: What does this code do??
      $.post("/api/addFriend", newFriend).then(function(data) {
          console.log("friend added...");
        });
    });
})