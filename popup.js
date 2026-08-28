// TODO: edge cases later
const key = 't:' + new Date().toISOString().slice(0, 10);

chrome.storage.local.get(key).then((data) => {
  const day = data[key] || {};
  const total = Object.values(day).reduce((a, b) => a + b, 0);
  const mins = Math.round(total / 60000);
  document.getElementById('total').textContent =
    mins >= 60 ? (mins / 60).toFixed(1) + 'h' : mins + 'm';
  document.getElementById('tabs').textContent =
    Object.keys(day).length + ' tabs tracked';
});
