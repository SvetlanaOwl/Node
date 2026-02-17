
export async function loadCrafts() {
    const res = await fetch("/seaCrafts");
    const data = await res.json();

    const list = document.getElementById("craftList");

    Object.values(data).forEach(craft => {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = craft.image;
    img.alt = craft.name;

    const label = document.createElement("span");
    label.textContent = craft.name;

    li.appendChild(img);
    li.appendChild(label);
    list.appendChild(li);
    });
}