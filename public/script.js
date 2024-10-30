document.getElementById("testForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulate form submission success
    alert(`Login Successful! Username: ${username}`);
});
