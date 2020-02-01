
var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    var deck = new Array();
    var player_deck = new Array();
    var delear_deck = new Array();
    createDeck();
    //Delear();
    //Player();
    //Start();
    var game_p_count;
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
    var input1 = Delear();
    var input2 = Player();
    document.getElementById("demo1").innerHTML = JSON.stringify(input1);
    //console.log ('ssssss',input1);
    document.getElementById("demo2").innerHTML = JSON.stringify(input2);
    //console.log('AAAAAAA',input1[0]);
    //console.log('BBBBBBB',input1[1]);
    //console.log('CCCCCCC',input2[0]);
    //console.log('DDDDDDD',input2[1]);

    //if()
    //document.getElementById("demo3").innerHTML = "player has to press HIT or STAND";
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
    var game_d_count = getFields(delear_deck, "Weight");
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
    var carding = shuffle();
    player_deck.push(carding);
    game_p_count = getFields(player_deck,"Weight");
    //console.log('#######',player_deck);
    //console.log('$$$$$$$',game_p_count);
    //document.getElementById("Hit").innerHTML = game_p_count;
    document.getElementById("demo2").innerHTML = game_p_count + '  '+JSON.stringify(player_deck) ;
    if(game_p_count == 21) {
        document.getElementById("demo4").innerHTML = "player won!!!!!!!!!!!!!!";
    }
    if(game_p_count > 21) {
        document.getElementById("demo4").innerHTML = "Delear won!!!!!!!!!!!!!!";
    }
}

function Stand() {
    
}


function Greet(){
    // good morning.
    //var num = 10;
    document.getElementById("demo").innerHTML = "good morningal";
    //alert(elem)

}



