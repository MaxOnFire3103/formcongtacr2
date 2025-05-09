let routeCount = 0;
const maxRoutes = 5;

document.getElementById('add-route').addEventListener('click', () => {
  if (routeCount < maxRoutes) {
    routeCount++;
    const routeDiv = document.createElement('div');
    routeDiv.className = 'route';
    routeDiv.innerHTML = `
      <h3>Lộ Trình ${routeCount}</h3>
      <label>Điểm xuất phát:</label>
      <input type="text" name="start-${routeCount}" required><br>
      <label>Điểm đến:</label>
      <input type="text" name="end-${routeCount}" required><br>
      <label>Ngày đi:</label>
      <input type="date" name="depart-${routeCount}" required><br>
      <label>Ngày về:</label>
      <input type="date" name="return-${routeCount}" required><br>
    `;
    document.getElementById('routes').appendChild(routeDiv);
  } else {
    alert('Chỉ được thêm tối đa 5 lộ trình.');
  }
});
