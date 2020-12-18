document.getElementById("confirm").addEventListener("click", displayMenu);

function displayMenu() {
    //PATTY
    var patties = document.getElementsByName("patty");
    var patty;
    for (var i = 0; i < patties.length; i++) {
        if (patties[i].checked) {
            patty = patties[i].value;
            patties[i].checked = false;
        }
    }

    //SAUCE
    var sauce = document.getElementById("sauce").value;
    document.getElementById("sauce").value = "";

    //SPICE
    var spices = document.getElementsByName("spice");
    var spice;
    for (var i = 0; i < spices.length; i++) {
        if (spices[i].checked) {
            spice = spices[i].value;
            spices[i].checked = false;
        }
    }

    //Vegetable
    var vegetable1 = document.getElementById("veggie1").value;
    document.getElementById("veggie1").value = "";

    var vegetable2 = document.getElementById("veggie2").value;
    document.getElementById("veggie2").value = ""

    //PRICE
    var price_string = document.getElementById("price").value;
    var price = Number(price_string.substr(1, price_string.length));
    document.getElementById('price').value = "R";

    var result = `${patty} ${sauce} ${spice}  ${vegetable1} ${vegetable2} Burger for R${price}<br>`;

    document.getElementById('menu').innerHTML += result;
};