import { account  } from "./appwriteClient.js";

//Function to handle user login
export async function login() {
    const loginButton = document.getElementById("loginBtn");
    loginButton.addEventListener("click", async () => {
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        try {
            const session = await account.createEmailPasswordSession(email, password);
            console.log("Logged in:", session);
            window.location.href = "./tw_profile.html";
        } catch (err) {
            console.error("Login error:", err.message);
        }
    });
}

//Function to handle user logout
export async function logout() {
    const logoutButton = document.getElementById("logoutBtn");
    logoutButton.addEventListener("click", async () => {
        try {
            await account.deleteSession("current");
            window.location.href = "./index.html";
        } catch (err) {
            console.error("Logout error:", err.message);
        }
    });
}

