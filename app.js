function addUser() {

    const url = 'http://localhost:3002/users';

    const data = {
        "name": document.getElementById('name').value,
        "email": document.getElementById('email').value,
        "ether_address": document.getElementById('ether_address').value,
    }

    $.ajax({
        url: url,
        type: "POST",
        crossDomain: true,
        data: data,
        dataType: "json",
        success: function (response) {
            var resp = JSON.parse(response)
            alert(resp.status);
            console.log("success")
        },
        error: function (xhr, status) {
            //alert("error");
            console.log("error")
            alert("Interest registered successfully")
        }
    });

    return false;
}