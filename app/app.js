//element variable definitions
let title = document.getElementById("title")
let bar = document.getElementById("bar")
let cards = document.getElementsByClassName("card")

//Starting animation to make all elements visible, make all the elements fade in from white
for(let i=0; i<cards.length; i++) {
    TweenMax.from(cards[i], { duration: 3, backgroundColor: "#fff" });
}
TweenMax.from(title, { duration: 3, color: "#fff"})
TweenMax.from(bar, { duration: 3, backgroundColor: "#fff" })

//Mouse over events for gallery
//loop through the cards array
for(let i=0; i<cards.length; i++) {
    //for each card in the array add an event listener for mousover, mouseout, and click
    cards[i].addEventListener("mouseover", function() { 
        //move card right and up to show a focus on the mouse hover
        TweenMax.to(cards[i], { duration: .7, x: 10, y: -10 } )
    })

    cards[i].addEventListener("mouseout", function() {
        //move card back to original location to show mouse out
        TweenMax.to(cards[i], { duration: .7, x: 0, y: 0 } )
    })
    
    //when a card is clicked, fade every element out to white
    cards[i].addEventListener("click", function() {
        for(let i=0; i<cards.length; i++) {
            TweenMax.to(cards[i], { duration: 2, backgroundColor: "#fff" });
        }
        TweenMax.to(title, { duration: 2, color: "#fff"})
        TweenMax.to(bar, { duration: 2, backgroundColor: "#fff" })
    })
}


