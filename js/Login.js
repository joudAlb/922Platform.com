    
    // Define login function outside DOMContentLoaded event listener
    function login() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username === 'user0' && password === 'admin') {
            // Redirect to a specific page after successful login
            window.location.href = 'HomePageuserDark.html'; 
        }
        if (username === 'ِAuther' && password === 'auther') {
            // Redirect to a specific page after successful login
            window.location.href = 'HomePageAutheratyView.html'; 
        }
        else {
            document.getElementById('error-message').innerText = 'Invalid username or password';
        }
    }

    // Other functions and event listeners


// Move this outside of the DOMContentLoaded event listener
function BackToHome() {
    // Redirect to the home page
    window.location.href = 'homePage.html'; // Change 'home_page.html' to your home page URL
}
