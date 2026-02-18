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

   if  (document.getElementById("status")) {
    document.getElementById("status").textContent = "Access granted";
   }
}