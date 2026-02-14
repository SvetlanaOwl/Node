export async function checkAccess() {
    const token = localStorage.getItem("authToken");
    if (!token) return redirect();

    const verifyRes = await fetch("/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token })
    });

    const verifyJson = await verifyRes.json();
    if (!verifyJson.valid || verifyJson.role !== "admin") {
        return redirect();
    }

    //import { loadUsers } from "/js/loadUsers.js"; // так не работает
    const { loadUsers } = await import("/js/loadUsers.js"); //await для ожидания завершения импорта

    document.getElementById("status").textContent = "Access granted";
            
    loadUsers(token);
}