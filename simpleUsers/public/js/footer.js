export async function loadFooter() {
    const token = localStorage.getItem("authToken");
    //Get user role
    const verifyRes = await fetch("/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token })
    });
    const verifyJson = await verifyRes.json();
    const role = verifyJson.role;
    //Get footer config
    const items = await fetch("/footer").then(res => res.json());
    const footerItems = document.getElementById("footer");
    //create footer links based on role
    items
    .filter(item => item.roles.includes(role))
    .forEach(item => {
        const a = document.createElement("a");
        a.href = item.href;
        a.textContent = item.label;
        footerItems.appendChild(a);
    });
}