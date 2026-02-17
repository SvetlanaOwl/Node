export async function loadStatus() {
    const res = await fetch("/status");
    const json = await res.json();

    const statusDisplay = document.getElementById("statusDisplay");
    const timestamp = document.getElementById("timestamp");

    const indicator = `<span class="status-indicator ${json.status === 'ok' ? 'status-ok' : 'status-error'}"></span>`;

    statusDisplay.innerHTML = `${indicator} ${json.status}`;
    timestamp.textContent = "Last updated: " + json.timestamp;
}

document.getElementById("refreshBtn").addEventListener("click", loadStatus);