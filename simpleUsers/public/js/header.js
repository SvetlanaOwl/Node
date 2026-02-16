export async function loadHeader() {
    const token = localStorage.getItem("authToken");

    //Get user role
    const verifyRes = await fetch("/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token })
    });

    const verifyJson = await verifyRes.json();
    const role = verifyJson.role;
    const username = verifyJson.username;

    //Get header config
    const res = await fetch("/header");
    const items = await res.json();

    const left = document.getElementById("header-left");
    const right = document.getElementById("header-right");

    //create header links based on role
    items
    .filter(item => item.roles.includes(role))
    .forEach(item => {
        const a = document.createElement("a");
        a.href = item.href;
        a.textContent = item.label;

        const current = window.location.pathname;
        if (current === item.href) {
            a.classList.add("active");
        }

        left.appendChild(a);
    });

    const dropdown = document.createElement("div");
    dropdown.className = "profile-dropdown";

    // Avatar creation with fallback to first letter of username or "?" if not available
    let avatar;

    if (verifyJson.avatar) {
    avatar = document.createElement("img");
    avatar.className = "avatar";
    avatar.src = verifyJson.avatar;
        } else {
            avatar = document.createElement("div");
            avatar.className = "avatar";
            avatar.textContent = username[0].toUpperCase();
        }

    const nameEl = document.createElement("div");
    nameEl.className = "username";
    nameEl.textContent = username || "User";

    const menu = document.createElement("div");
    menu.className = "dropdown-menu";

    const profileLink = document.createElement("a");
    profileLink.href = "/profile.html";
    profileLink.textContent = "Profile";

    const logoutBtn = document.createElement("button");
    logoutBtn.textContent = "Logout";
    logoutBtn.onclick = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/index.html";
    };

    menu.appendChild(profileLink);
    menu.appendChild(logoutBtn);

    dropdown.appendChild(avatar);
    dropdown.appendChild(nameEl);
    dropdown.appendChild(menu);

    dropdown.onclick = () => {
    dropdown.classList.toggle("dropdown-open");
    };

    right.appendChild(dropdown);
}