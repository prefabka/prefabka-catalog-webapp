function renderCatalog() {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = '';
    houses.forEach(house => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => showDetails(house);
        card.innerHTML = `
            <img src="${house.image}" alt="${house.name}" onerror="this.src='https://via.placeholder.com/300x200?text=Фото+недоступно'">
            <h3>${house.name}</h3>
            <p><strong>Площадь:</strong> ${house.area}</p>
            <p><strong>Цена:</strong> ${house.price}</p>
        `;
        catalog.appendChild(card);
    });
}

function showDetails(house) {
    const detailsDiv = document.getElementById('details');
    detailsDiv.innerHTML = `
        <img src="${house.image}" alt="${house.name}" style="width:100%;border-radius:8px;" onerror="this.src='https://via.placeholder.com/300x200?text=Фото+недоступно'">
        <h3>${house.name}</h3>
        <p><strong>Площадь:</strong> ${house.area}</p>
        <p><strong>Цена:</strong> ${house.price}</p>
        <p>${house.description}</p>
        <button class="calc-btn" onclick="alert('Скоро будет калькулятор стоимости!')">Рассчитать полную стоимость</button>
        <div class="back-btn" onclick="showCatalog()">← Назад</div>
    `;
    document.getElementById('catalog').style.display = 'none';
    detailsDiv.style.display = 'block';
}

function showCatalog() {
    document.getElementById('catalog').style.display = 'flex';
    document.getElementById('details').style.display = 'none';
}

window.onload = function () {
    if (window.Telegram && window.Telegram.WebApp) {
        Telegram.WebApp.ready();
        Telegram.WebApp.setHeaderTitle("PrefabKa");
    }
    renderCatalog();
};
