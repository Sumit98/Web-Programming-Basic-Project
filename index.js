
var remove_items = document.getElementsByClassName("btn-danger")
for (var i = 0; i < remove_items.length; i++) {
    var button = remove_items[i]
    button.addEventListener('click', function (event) {
        console.log("button clicked")
        var buttonclicked = event.target
        buttonclicked.parentElement.parentElement.remove()
    })
}