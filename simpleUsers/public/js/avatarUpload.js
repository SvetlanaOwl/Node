export async function initAvatarUpload() {
  const form = document.getElementById("avatarForm");
  if (!form) return; // profile page only

  form.onsubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("authToken");
    const file = document.getElementById("avatarInput").files[0];

    if (!file) {
      alert("Please select an image first");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", file);
    formData.append("token", token);

    const res = await fetch("/upload-avatar", {
      method: "POST",
      body: formData
    });

    const json = await res.json();

    if (json.success) {
      document.getElementById("avatarPreview").src = json.avatar;
    } else {
      alert("Avatar upload failed");
    }
  };
}