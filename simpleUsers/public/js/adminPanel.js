import { loadUsersTable } from "/js/loadUsersTable.js";
export function initAdminPanel() {
    const modal = document.getElementById("passwordModal");
    const closeBtn = document.getElementById("closePasswordModal");
    const submitBtn = document.getElementById("submitPasswordChange");
    const delUserBtn = document.getElementById("submitDeleteUser");
    const closeDeleteUserModal = document.getElementById("closeDeleteUserModal");
    const token = localStorage.getItem("authToken");

    // Load user first
    loadUsersTable(token).then(() => {
        // Attach event listeners to dynamically created buttons
        document.querySelectorAll(".changePasswordBtn").forEach(btn => {
            btn.addEventListener("click", () => {
                const username = btn.dataset.username;
                document.getElementById("passwordUsername").value = username;
                document.getElementById("passwordModal").style.display = "block";
                document.getElementById("modal-bg").style.display = "flex";
            });
        });
        //Attach event listeners to dynamically created delete buttons
        document.querySelectorAll(".deleteUserBtn").forEach(btn => {
            btn.addEventListener("click", () => {
                const username = btn.dataset.username;
                document.getElementById("deleteUsername").value = username;
                document.getElementById("deleteUserModal").style.display = "block";
                document.getElementById("modal-del-user").style.display = "flex";
            });
        });
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.getElementById("modal-bg").style.display = "none";
    });
    //Close delete user modal
    closeDeleteUserModal.addEventListener("click", () => {
        document.getElementById("deleteUserModal").style.display = "none";
        document.getElementById("modal-del-user").style.display = "none";
    });
    // Submit password change
    submitBtn.addEventListener("click", async () => {
        const payload = {
            token,
            username: document.getElementById("passwordUsername").value,
            newPassword: document.getElementById("passwordNew").value
        };
    
        const res = await fetch("/users/change-password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const json = await res.json();

        if (json.success) {
            alert("Password updated");
            modal.style.display = "none";
            location.reload();
        } else {

            alert(json.message);
        }
    });
    
    //Submit delete user
    delUserBtn.addEventListener("click", async () => {
        const token = localStorage.getItem("authToken");
            const username = document.getElementById("deleteUsername").value
        
        const res = await fetch("/users/delete/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token, username })
        });
        const json = await res.json();

        if (json.success) {
            alert("User deleted");
            document.getElementById("deleteUserModal").style.display = "none";
            location.reload();
        } else {
         alert(json.message);
        }
    });
}