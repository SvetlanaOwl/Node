export async function loadProfile() {
  const token = localStorage.getItem("authToken");
  const res = await fetch("/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token })
  });

  const json = await res.json();

  document.getElementById("firstName").textContent = json.firstName || "-";
  document.getElementById("lastName").textContent = json.lastName || "-";
  document.getElementById("email").textContent = json.email || "-";
  document.getElementById("description").textContent = json.description || "-";

  // Avatar preview on profile page
  if (json.avatar) {
    document.getElementById("avatarPreview").src = json.avatar;
  }
}