
// here i am making the function to create our random number everytime the page loads
//
$( document ).ready(function(){
    var random=Math.floor(Math.random()*81+19)


    //displaying random nuber to the randomNumber id in my html
    $('#randomNumber').text(random);


        //creating random number for each crystal
        var crystalNum1 = Math.floor(Math.random()*11+1)
        var crystalNum2 = Math.floor(Math.random()*11+1)
        var crystalNum3 = Math.floor(Math.random()*11+1)
        var crystalNum4 = Math.floor(Math.random()*11+1)

        //variables to keep score
        var userTotal = 0;
        var wins = 0;
        var losses = 0;

    $('#wins').text(wins);
    $('#losses').text(losses);

    //i will create a function to reset the game every round
    function reset(){
        random=Math.floor(Math.random()*81+19)
        $('#randomNumber').text(random);
        crystalNum1 = Math.floor(Math.random()*11+1)
        crystalNum2 = Math.floor(Math.random()*11+1)
        crystalNum3 = Math.floor(Math.random()*11+1)
        crystalNum4 = Math.floor(Math.random()*11+1)
        userTotal = 0;
        $('#yourscore').text(userTotal);
    }

    //creating functions to add wins
    function win(){
        alert('you won!');
        wins++
        $('#wins').text(wins);
        reset();
    }
    
    function loss(){
        alert('you lost!');
        losses++
        $('#losses').text(losses);
        reset();
    }

        //creating onclick events for our crystals
        $('#crystal1').on ('click', function(){
            userTotal = userTotal + crystalNum1;
            $('#yourscore').text(userTotal);

                if (userTotal == random){
                    win();
                }
                else if (userTotal > random){
                    loss();
                }
        })
        $('#crystal2').on ('click', function(){
            userTotal = userTotal + crystalNum2;
            $('#yourscore').text(userTotal);

                if (userTotal == random){
                    win();
                }
                else if (userTotal > random){
                    loss();
                }
        })
        $('#crystal3').on ('click', function(){
            userTotal = userTotal + crystalNum3;
            $('#yourscore').text(userTotal);

                if (userTotal == random){
                    win();
                }
                else if (userTotal > random){
                    loss();
                }
        })
        $('#crystal4').on ('click', function(){
            userTotal = userTotal + crystalNum4;
            $('#yourscore').text(userTotal);

                if (userTotal == random){
                    win();
                }
                else if (userTotal > random){
                    loss();
                }
        })

});