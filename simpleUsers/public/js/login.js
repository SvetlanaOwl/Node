export async function initLogin() {
    const form = document.getElementById("login-box");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const result = document.getElementById("login-result");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        const res = await fetch("/login", { // send login data to server
            method: "POST", // use POST method
            headers: { "Content-Type": "application/json" }, // set content type to JSON
            body: JSON.stringify( {username, password} ) // send data as JSON string
            });
        
        const json = await res.json(); // parse response as JSON

            if (json.success) {
                localStorage.setItem("authToken", json.token); // store auth token in localStorage

        const [, role] = json.token.split("|"); // username|role|sig

            if (role === "admin") window.location.href = "/adminpanel.html";
            else if (role === "editor") window.location.href = "/editor.html";
            else if (role === "viewer") window.location.href = "/viewer.html";
        } else {
            result.textContent = json.message || "Login failed"; 
            result.style.color = "red";
        }
    });
}
                       
        

        