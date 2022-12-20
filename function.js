var input = document.querySelector('#zipcode');
var city = document.querySelector('#city');
var state = document.querySelector('#state');
var country = document.querySelector('#country');
var info = document.querySelector('.info');
var codelength = /^\d{6}$/

input.addEventListener('keyup', () => {
    if (input.value.match(codelength)) {
        $.ajax({
            type: "GET",
            url: "https://api.postalpincode.in/pincode/" + input.value,

            success: (response) => {
                // info.innerHTML = (response[0].PostOffice[0].Name);
                city.value = (response[0].PostOffice[0].District);
                state.value = (response[0].PostOffice[0].State);
                country.value = (response[0].PostOffice[0].Country);
            }
        });
        info.innerHTML = "";

    }
    else{
        info.innerHTML = "Type valid zipcode";
        city.value = "No Response";
        state.value = "No Response";
        country.value = "No Response";
    }

}); 