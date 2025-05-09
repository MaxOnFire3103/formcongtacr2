function calculateCosts() {
  let total = 0;
  const rows = document.querySelectorAll('.cost-section');
  rows.forEach(row => {
    const qty = row.querySelector('[data-role="qty"]');
    const price = row.querySelector('[data-role="price"]');
    const subtotal = row.querySelector('[data-role="subtotal"]');
    const quantity = parseFloat(qty?.value || '0');
    const unitPrice = parseFloat(price?.value || '0');
    const sub = quantity * unitPrice;
    if (subtotal) subtotal.value = sub;
    total += sub;
  });
  document.getElementById('total-cost').innerText = total.toLocaleString('vi-VN');
}

document.addEventListener('DOMContentLoaded', () => {
  calculateCosts();
  document.body.addEventListener('input', calculateCosts);
  document.body.addEventListener('change', calculateCosts);
});