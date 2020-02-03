
var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    var deck = new Array();
    var player_deck = new Array();
    var delear_deck = new Array();
    var boo = true;
    createDeck();
    //Delear();
    //Player();
    //Start();
    var game_p_count;
    var game_d_count;
    //Player();
    //Hit();
    //Hit();

function createDeck() {
    deck = new Array();
    for (var i = 0 ; i < values.length; i++) {
        for(var x = 0; x < suits.length; x++) {
            var weight = parseInt(values[i]);
            if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                weight = 10;
            if (values[i] == "A")
                weight = 11;
            var card = { Value: values[i], Suit: suits[x], Weight: weight };
            deck.push(card);
        }
    }
    //console.log(deck);
}

function getFields(input, fields) {
    var count_value =0;    
    // var count_value = _.pluck(input,'fields');
    // console.log(count_value);
    for (var i=0; i < input.length ; i++) {
        count_value = count_value + (input[i][fields]); 
    }
    //console.log('jjjjjjjjjj',count_value);
    return count_value;

}

function Start() {
    var delear_arr = Delear();
    var player_arr = Player();
    document.getElementById("demo1").innerHTML = 'DELEAR CARDS and COUNT : '+JSON.stringify(delear_arr) ;
    //console.log ('dddddd',delear_arr);
    //console.log ('pppppp',player_arr);
    document.getElementById("demo2").innerHTML = 'PLAYER CARDS and COUNT : '+JSON.stringify(player_arr);
    // console.log('AAAAAAA',delear_arr[0]);
    // console.log('BBBBBBB',delear_arr[1]);
    // console.log('CCCCCCC',player_arr[0]);
    // console.log('DDDDDDD',player_arr[1]);
    // console.log('EEEEEEE',delear_arr[2]);
    // console.log('FFFFFFF',player_arr[2]);
    document.getElementById("demo3").innerHTML = "player has to press HIT or STAND";

    if(player_arr[0] == 21 && delear_arr[0] < 21) {
        document.getElementById("demo5").innerHTML = "PLAYER WON THE GAME!!!!!!!!!!GAME ENDS";
    }
    // if(player_arr[0] < 21 && delear_arr[0] == 21) {
    //     document.getElementById("demo5").innerHTML = "DELEAR WON THE GAME!!!!!!!!!!GAME ENDS";
    // }
    if(player_arr[0] == 21 && delear_arr[0] == 21) {
        document.getElementById("demo5").innerHTML = "ITS PUSH TIE MATCH!!!!!!!!!!GAME ENDS";
    }

    document.getElementById("myBtn").disabled = true;
}

function shuffle() {
    var item = deck[Math.floor(Math.random()*deck.length)];
    for( var i = 0; i < deck.length; i++){ 
        if ( deck[i] === item) {
            deck.splice(i, 1);
        }
    }
    //console.log(item);
    return item;
}

function Delear() {
    
    let count = 0;
    
    while(count < 2) {
        var dcards = shuffle();
        delear_deck.push(dcards);
        count++;
    }
    game_d_count = getFields(delear_deck, "Weight");
    //console.log('aaaaaaa',game_d_count);
    return [game_d_count , delear_deck] ;
    //document.getElementById("greet").innerHTML = "good morningal";
    //console.log('@@@@@@@',delear_deck);
    //console.log('aaaaaaa',game_d_count);
    // console.log(deck);
    // console.log('@@@@@@@@@@',item);
}

function Player() {
    
    let count = 0;
    
    while(count < 2) {
        var pcards = shuffle();
        player_deck.push(pcards);
        count++;
    }
    game_p_count = getFields(player_deck,"Weight");
    //console.log('!!!!!!!',player_deck);
    //console.log('lllllll',game_p_count);
    // console.log(deck);
    // console.log('@@@@@@@@@@',item);
    // var data = prompt("Please enter your name", "Harry Potter");
    // if (customerName!= null) {
    //     document.getElementById("welcome").innerHTML =
    //     "Hello " + customerName + "! How are you today?";
    // }
    return [game_p_count , player_deck];
}

function Hit() {
    // var carding = deck[Math.floor(Math.random()*deck.length)];
    // for( var i = 0; i < deck.length; i++){ 
    //     if ( deck[i] === item) {
    //         deck.splice(i, 1);
    //     }
    // }
    if(boo == true) {
        var carding = shuffle();
        player_deck.push(carding);
        game_p_count = getFields(player_deck,"Weight");
        //console.log('#######',player_deck);
        //console.log('$$$$$$$',game_p_count);
        //document.getElementById("Hit").innerHTML = game_p_count;
        document.getElementById("demo2").innerHTML = game_p_count + '  '+JSON.stringify(player_deck) ;
        if(game_p_count == 21) {
            document.getElementById("demo4").innerHTML = "PLAYER WON!!!!!!!!!!!!!!GAME ENDS";
        }
        if(game_p_count > 21) {
            document.getElementById("demo4").innerHTML = "ITS BUST !!!!!!DELEAR WON!!!!!!!!!!!!!!GAME ENDS";
        }
    } else {
        var carding = shuffle();
        delear_deck.push(carding);
        game_d_count = getFields(delear_deck,"Weight");
        document.getElementById("demo1").innerHTML = game_d_count + '  '+JSON.stringify(delear_deck) ;
        if(game_d_count == 21) {
            document.getElementById("demo4").innerHTML = "DELEAR WON!!!!!!!!!!!!!!GAME ENDS";
        }
        if(game_d_count > 21) {
            document.getElementById("demo4").innerHTML = "ITS BUST !!!!!!PLAYER WON!!!!!!!!!!!!!!GAME ENDS";
        }
        if((game_d_count > game_p_count) && (game_d_count<=21)) {
            document.getElementById("demo4").innerHTML = "DELEAR WON!!!!!!!!!!!!!!GAME ENDS";
        }
    } 
    
}

function Stand() {
    if(boo = true) {
        document.getElementById("demo6").innerHTML = 'PLAYER COUNT: ' +game_p_count +' ITS DELEAR TURN';
        boo = false; 
        if(game_d_count == 21) {
            document.getElementById("demo4").innerHTML = 'DELEAR COUNT: ' +game_d_count +"DELEAR WON!!!!!!!GAME ENDS";
        }
    } else {
        document.getElementById("demo7").innerHTML = 'DELEAR COUNT: ' +game_d_count +' PLAYER WON GAME';
        if(game_p_count == game_d_count) {
            document.getElementById("demo5").innerHTML = "ITS PUSH TIE MATCH!!!!!!!!!!GAME ENDS";
        }
    }
}


function Greet(){
    // good morning.
    //var num = 10;
    document.getElementById("demo").innerHTML = "good morningal";
    //alert(elem)

}



