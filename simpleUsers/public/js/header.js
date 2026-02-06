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

    const nav = document.getElementById("header");

    items
    .filter(item => item.roles.includes(role))
    .forEach(item => {
        const a = document.createElement("a");
        a.href = item.href;
        a.textContent = item.label;
        nav.appendChild(a);
    });
}