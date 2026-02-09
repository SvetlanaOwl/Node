async function loadHeader() {
    const token = localStorage.getItem("authToken");

    //Get user role
    const verifyRes = await fetch("/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token })
    });

    const verifyJson = await verifyRes.json();
    const role = verifyJson.role;

    //Get header config
    const res = await fetch("/header");
    const items = await res.json();

    const left = document.getElementById("header-left");
    const right = document.getElementById("header-right");

    items
    .filter(item => item.roles.includes(role))
    .forEach(item => {
        const a = document.createElement("a");
        a.href = item.href;
        a.textContent = item.label;
        left.appendChild(a);
    });

    //right side: profile + logout
    const profile = document.createElement("a");
    profile.href = "/profile.html";
    profile.textContent = "Profile";
    right.appendChild(profile);

    const logoutBtn = document.createElement("button");
    logoutBtn.textContent = "Logout";
    logoutBtn.className = "logout-btn";
    logoutBtn.onclick = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/index.html";
    };
    right.appendChild(logoutBtn);
}