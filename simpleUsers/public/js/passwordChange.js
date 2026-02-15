    export async function submitPasswordChange() {
        const newPassword = document.getElementById("modal-password").value;
        const token = localStorage.getItem("authToken");

        const res = await fetch("/users/change-password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                token,
                username: selectedUser,
                newPassword
            })
        });

        const data = await res.json();
        const result = document.getElementById("modal-result");

        if (data.success) {
            result.style.color = "green";
            result.textContent = data.message;
        } else {
            result.style.color = "red";
            result.textContent = data.error || "Something went wrong";
        }
    }