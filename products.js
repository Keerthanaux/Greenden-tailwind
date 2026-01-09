 var sidenav = document.getElementById("sidenav")
    var menuicon = document.getElementById("menuicon")
    var closenav = document.getElementById("close-nav")

    menuicon.addEventListener("click", function () {
        sidenav.style.right = "0"
    })

    closenav.addEventListener("click", function () {
        sidenav.style.right = "-50%"
    })
document.addEventListener("DOMContentLoaded", function () {

    var search = document.getElementById("search")
    var productContainer = document.getElementById("product-container")
    var productCards = productContainer.querySelectorAll(":scope > div")

    search.addEventListener("keyup", function () {
        var enteredValue = search.value.toUpperCase()

        productCards.forEach(function (card) {
            var productName = card.querySelector("h1").innerText.toUpperCase()

            if (productName.includes(enteredValue)) {
                card.style.display = "block"
            } else {
                card.style.display = "none"
            }
        })
    })

})

