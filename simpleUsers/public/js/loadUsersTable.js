export async function loadUsersTable(token) {
    const res = await fetch("/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token })
    });

    const users = await res.json();
    const tbody = document.querySelector("#userTable tbody");
    tbody.innerHTML = "";

    Object.entries(users).forEach(([username, data]) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${username}</td>
            <td>${data.role}</td>
            <td><button class="changePasswordBtn" data-username="${username}">Change Password</button></td>
            <td><button class="deleteUserBtn" data-username="${username}">Delete User</button></td>
        `;
        tbody.appendChild(tr);
    });
}