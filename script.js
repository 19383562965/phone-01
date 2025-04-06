const date = new Date();
const shortMonth = date.toLocaleString('default', { month: 'short' });
const month = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
document.getElementById('day').textContent = month;
document.getElementById('month').textContent = shortMonth;

function updateTime() {
  const date = new Date();

  const pad = (num) => String(num).padStart(2, '0');
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  document.getElementById('h').textContent = hours;
  document.getElementById('min').textContent = minutes;
  document.getElementById('sec').textContent = seconds;
}

// Call once immediately
updateTime();

// Then keep updating every second
setInterval(updateTime, 1000);

document.getElementById('settings-icon').onmouseup = function() {
  document.getElementById('screen').style.display = 'none';
  document.getElementById('settings-screen').style.display = 'inline-block';
};
document.getElementById('leave-settings').onclick = function() {
  document.getElementById('screen').style.display = 'inline-block';
  document.getElementById('settings-screen').style.display = 'none';
};
document.getElementById('notes-icon').onmouseup = function() {
  document.getElementById('screen').style.display = 'none';
  document.getElementById('notes-screen').style.display = 'inline-block';
};
document.getElementById('leave-notes').onclick = function() {
  document.getElementById('screen').style.display = 'inline-block';
  document.getElementById('notes-screen').style.display = 'none';
};