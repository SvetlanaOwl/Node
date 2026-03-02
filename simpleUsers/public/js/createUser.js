export function initUserCreation() {
    const modal = document.getElementById("addUserModal");
    const openBtn = document.getElementById("addUserBtn");
    const cancelBtn = document.getElementById("createUserCancel");
    const confirmBtn = document.getElementById("createUserConfirm");

    openBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    cancelBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    confirmBtn.addEventListener("click", async () => {
    const token = localStorage.getItem("authToken");
    const payload = {
        token,
        userName: document.getElementById("newUserName").value,
        password: document.getElementById("newPassword").value,
        role: document.getElementById("newRole").value,
        firstName: document.getElementById("newFirstName").value,
        lastName: document.getElementById("newLastName").value,
        email: document.getElementById("newEmail").value,
        description: document.getElementById("newDescription").value,
    };
    const res = await fetch("/users/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });
    const json = await res.json();

    if (json.succes) {
        alert("User created successfully");
        modal.style.display = "none";
        location.reload();
    } else {
        alert(json.message);
    }
    });
}