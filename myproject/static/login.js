function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "username": username, "password": password })
    })
        // .then(response => response.json())
        .then(response => {
            if (response.redirected) {
                window.location.href = response.url; // Redirect to the channels page
            } else {
                return response.json();
            }
        })
        .then(data => {
            document.getElementById("loginMessage").innerText = data.message;
        });
}


function redirectToSignup() {
  window.location.href = '/signup_page';
}