window.onload = function () {
    const countTravels = function () {
        const cards = document.querySelectorAll(".card")
        alert("There are " + cards.length + " travels displayed in the page")
    }
    countTravels()
}
    const removeCards = function () {
        const cards = document.querySelectorAll(".card");
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            card.remove();
        }
}