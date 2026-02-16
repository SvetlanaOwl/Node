import { loadUsers } from "/js/loadUsers.js";
export function initAdminPanel() {
    const modal = document.getElementById("passwordModal");
    const closeBtn = document.getElementById("closePasswordModal");
    const submitBtn = document.getElementById("submitPasswordChange");
    const token = localStorage.getItem("authToken");

    // Load user first
    loadUsers(token).then(() => {
        // Attach event listeners to dynamically created buttons
        document.querySelectorAll(".changePasswordBtn").forEach(btn => {
            btn.addEventListener("click", () => {
                console.log("Change password button clicked for user:", btn.dataset.username);
                const username = btn.dataset.username;
                document.getElementById("passwordUsername").value = username;
                console.log("Opening modal for user:", username);
                document.getElementById("passwordModal").style.display = "block";
                document.getElementById("modal-bg").style.display = "flex";
            });
        });
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.getElementById("modal-bg").style.display = "none";
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
}