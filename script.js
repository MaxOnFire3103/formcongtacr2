function updateCompanyInfo(value) {
  const logoMap = {
    swensens: 'logo-swensens.png',
    pizza: 'logo-pizza.png',
    dq: 'logo-dq.png',
    aka: 'logo-aka.png',
    chang: 'logo-chang.png'
  };
  const nameMap = {
    swensens: 'CÔNG TY CỔ PHẦN KEM AN MINH',
    pizza: 'CÔNG TY CỔ PHẦN PIZZA NGON',
    dq: 'CÔNG TY CỔ PHẦN DQ VIỆT NAM',
    aka: 'CÔNG TY CỔ PHẦN AKA HOUSE',
    chang: 'CÔNG TY TNHH CHANG THAI CUISINE'
  };
  document.getElementById('company-logo').src = logoMap[value];
  document.getElementById('company-name').innerHTML =
    `<option value="${value}" selected>${nameMap[value]}</option>` +
    Object.entries(nameMap)
      .filter(([k]) => k !== value)
      .map(([k, v]) => `<option value="${k}">${v}</option>`)
      .join('');
}

function calculateDays() {
  const routes = document.querySelectorAll('.route');
  let totalDays = 0;
  routes.forEach(route => {
    const start = route.querySelector('[name^="depart-"]');
    const end = route.querySelector('[name^="return-"]');
    const dayBox = route.querySelector('.day-count');
    if (start && end && start.value && end.value) {
      const startDate = new Date(start.value);
      const endDate = new Date(end.value);
      const diffTime = endDate - startDate;
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
      if (days > 0 && dayBox) {
        dayBox.value = days;
        totalDays += days;
      }
    }
  });
  document.getElementById('total-days').innerText = totalDays;
}

function calculateCosts() {
  let total = 0;
  const rows = document.querySelectorAll('.cost-section');
  rows.forEach(row => {
    const qty = row.querySelector('[data-role="qty"]');
    const price = row.querySelector('[data-role="price"]');
    const subtotal = row.querySelector('[data-role="subtotal"]');
    if (qty && price && subtotal) {
      const qtyVal = parseFloat(qty.value || '0');
      const priceVal = parseFloat(price.value || '0');
      const cost = qtyVal * priceVal;
      subtotal.value = cost;
      total += cost;
    }
  });
  document.getElementById('total-cost').innerText = total.toLocaleString('vi-VN');
}

document.addEventListener('input', () => {
  calculateDays();
  calculateCosts();
});

window.addEventListener('DOMContentLoaded', () => {
  calculateDays();
  calculateCosts();
});
