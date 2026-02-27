export async function loadSupplements(token) {
    const res = await fetch("/supplements", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        //body: JSON.stringify({ token })
    });

    const data = await res.json();//получаем данные
    const tbody = document.querySelector("#supplementsTable tbody");// получаем элемент таблицы
    tbody.innerHTML = "";//очищаем таблицу
    
    data.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${item.Name}</td>
        <td>${item.Serving_size}</td>
        <td><a href="${item.Link}" target="_blank">View Details</a></td>
        <td>${item.Comments}</td>
        `;
    tbody.appendChild(tr);//добавляем строку в таблицу
});
}
