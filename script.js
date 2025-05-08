const date = new Date();
const shortMonth = date.toLocaleString('default', { month: 'short' });
const year = date.getFullYear();
const month = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
document.getElementById('day').textContent = month;
document.getElementById('month').textContent = shortMonth;
document.getElementById('calendar-year').textContent = year;
document.getElementById('calendar-month').textContent = month + ' ' + shortMonth;

function updateTime() {
  const date = new Date();

  const pad = (num) => String(num).padStart(2, '0');
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  document.getElementById('h').textContent = hours;
  document.getElementById('min').textContent = minutes;
  document.getElementById('sec').textContent = seconds;
  document.getElementById('calendar-time').textContent = hours + ":" + minutes;
  document.getElementById('clock-h').textContent = hours;
  document.getElementById('clock-min').textContent = minutes;
  document.getElementById('clock-sec').textContent = seconds;
}

// Call once immediately
updateTime();

// Then keep updating every second
setInterval(updateTime, 1000);

document.getElementById('calendar-year').onclick = function() {
  const islandInfoParagraphs = document.querySelectorAll('.island-info');
  islandInfoParagraphs.forEach(p => {
    p.textContent = year;
    p.style.color = 'red';
    p.style.marginLeft = '10px';
    p.style.fontWeight = '900';
    p.style.fontSize = '20px';
    p.style.cursor = 'pointer';
  });
  const island = document.querySelectorAll('.island');
  island.forEach(p => {
    p.style = 'padding-left: 10px; padding-right: 10px;';
  });
  document.getElementById('island-info').onclick = function() {
    document.getElementById('screen').style.display = 'none';
    document.getElementById('calendar-screen').style.display = 'inline-block';
  };
}
document.getElementById('calendar-month').onclick = function() {
  document.getElementById('island').style = 'box-shadow: 0 15px 15px rgba(255, 52, 52, 0.356), 0 0 10px rgb(255, 52, 52, 0.356);'
  document.getElementById('island-info').textContent = month + ' ' + shortMonth;
  document.getElementById('island-info').style = 'color: red; margin-left: 10px; font-weight: 900;';
  const islandInfoParagraphs = document.querySelectorAll('.island-info');
  islandInfoParagraphs.forEach(p => {
    p.textContent = month + shortMonth;
    p.style.color = 'red';
    p.style.marginLeft = '10px';
    p.style.fontWeight = '900';
    p.style.fontSize = '20px';
    p.style.cursor = 'pointer'
  });
  const island = document.querySelectorAll('.island');
  island.forEach(p => {
    p.style = 'padding-left: 0px; padding-right: 0px;';
  });
  document.getElementById('island-info').onclick = function() {
    document.getElementById('screen').style.display = 'none';
    document.getElementById('calendar-screen').style.display = 'inline-block';
  };
}
document.getElementById('battery-power').onclick = function () {
  const islandInfoParagraphs = document.querySelectorAll('.island-info');
  islandInfoParagraphs.forEach(p => {
    p.textContent = '100%';
    p.style.color = 'rgb(0, 206, 0)';
    p.style.marginLeft = '10px';
    p.style.fontWeight = '600';
    p.style.fontSize = '23px';
    p.style.cursor = 'pointer';
  });
  const island = document.querySelectorAll('.island');
  island.forEach(p => {
    p.style = 'padding-left: 10px; padding-right: 10px;';
  });
  document.getElementById('island-info').onclick = function() {
    document.getElementById('screen').style.display = 'none';
    document.getElementById('settings-screen').style.display = 'inline-block';
  };
};

document.getElementById('music-control').onclick = function() {
  const islandInfoParagraphs = document.querySelectorAll('.island-info');
  islandInfoParagraphs.forEach(p => {
    p.textContent = 'music';
    p.style.color = 'rgb(255, 0, 149)';
    p.style.marginLeft = '10px';
    p.style.fontWeight = '900';
    p.style.fontSize = '15px';
    p.style.cursor = 'pointer';
  });
  const island = document.querySelectorAll('.island');
  island.forEach(p => {
    p.style = 'padding-left: 20px; padding-right: 20px;';
  });
  document.getElementById('island-info').onclick = function() {
    document.getElementById('screen').style.display = 'none';
    document.getElementById('music-screen').style.display = 'inline-block';
  };
}

document.getElementById('card').onmouseup = function() {
  const islandInfoParagraphs = document.querySelectorAll('.island-info');
  islandInfoParagraphs.forEach(p => {
    p.textContent = 'P a y';
    p.style.color = 'rgb(255, 255, 255)';
    p.style.marginLeft = '10px';
    p.style.fontWeight = '900';
    p.style.fontSize = '20px';
    p.style.cursor = 'pointer';
  });
  const island = document.querySelectorAll('.island');
  island.forEach(p => {
    p.style = 'padding-left: 20px; padding-right: 20px;';
  });
  document.getElementById('wallet-island').style = 'background-color: rgb(255, 255, 255); transition: 1s; padding-left: 20px; padding-right: 20px;';
  document.getElementById('island-info-wallet').style = 'color: rgb(0, 0, 0); font-size: 0px; font-weight: 900; margin-left: 0px;';
  document.getElementById('card').onmouseup = function() {
    const islandInfoParagraphs = document.querySelectorAll('.island-info');
    islandInfoParagraphs.forEach(p => {
      p.textContent = '';
    });
    document.getElementById('wallet-island').style = 'background-color: rgb(255, 255, 255); transition: 1s; padding-left: 0px; padding-right: 0px;';
  }
  document.getElementById('island-info').onclick = function() {
    document.getElementById('screen').style.display = 'none';
    document.getElementById('wallet-screen').style.display = 'inline-block';
  };
}

document.getElementById('clock-time').onclick = function() {
  const islandInfoParagraphs = document.querySelectorAll('.island-info');
  islandInfoParagraphs.forEach(p => {
    p.textContent = 'Clock';
    p.style.color = 'rgb(132, 87, 255)';
    p.style.marginLeft = '10px';
    p.style.fontWeight = '900';
    p.style.fontSize = '15px'
    p.style.cursor = 'pointer'
  });
  document.getElementById('island-info').onclick = function() {
    document.getElementById('screen').style.display = 'none';
    document.getElementById('clock-screen').style.display = 'inline-block';
  };
}

document.getElementById('chatgpt-island-click').onmouseup = function() {
  const islandInfoParagraphs = document.querySelectorAll('.island-info');
  islandInfoParagraphs.forEach(p => {
    p.textContent = 'ChatGPT';
    p.style.color = 'rgb(156, 156, 156)';
    p.style.marginLeft = '10px';
    p.style.fontWeight = '600';
    p.style.fontSize = '13px';
    p.style.cursor = 'pointer';
  });
  const island = document.querySelectorAll('.island');
  island.forEach(p => {
    p.style = 'padding-left: 10px; padding-right: 10px; background-color: rgb(43, 43, 43);';
  });
  document.getElementById('island-info').onclick = function() {
    document.getElementById('screen').style.display = 'none';
    document.getElementById('chatgpt-screen').style.display = 'inline-block';
  };
}

document.getElementById('to-second-screen').onclick = function() {
  document.getElementById('screen').style.display = 'none'
  document.getElementById('second-screen').style.display = 'inline-block'
}
document.getElementById('to-home-screen').onclick = function() {
  document.getElementById('second-screen').style.display = 'none'
  document.getElementById('screen').style.display = 'inline-block'
}

document.getElementById('settings-icon').onmouseup = function() {
  document.getElementById('screen').style.display = 'none';
  document.getElementById('settings-screen').style.display = 'inline-block';
  document.getElementById('to-home-screen').style.display = 'none'
  document.getElementById('to-second-screen').style.display = 'none'
};
document.getElementById('leave-settings').onmouseup = function() {
  document.getElementById('screen').style.display = 'inline-block';
  document.getElementById('settings-screen').style.display = 'none';
  document.getElementById('to-home-screen').style.display = 'inline-block'
  document.getElementById('to-second-screen').style.display = 'inline-block'
};
document.getElementById('notes-icon').onmouseup = function() {
  document.getElementById('screen').style.display = 'none';
  document.getElementById('notes-screen').style.display = 'inline-block';
  document.getElementById('to-home-screen').style.display = 'none'
  document.getElementById('to-second-screen').style.display = 'none'
};
document.getElementById('leave-notes').onmouseup = function() {
  document.getElementById('screen').style.display = 'inline-block';
  document.getElementById('notes-screen').style.display = 'none';
  document.getElementById('to-home-screen').style.display = 'inline-block'
  document.getElementById('to-second-screen').style.display = 'inline-block'
};
document.getElementById('calendar').onmouseup = function() {
  document.getElementById('screen').style.display = 'none';
  document.getElementById('calendar-screen').style.display = 'inline-block';
  document.getElementById('to-home-screen').style.display = 'none'
  document.getElementById('to-second-screen').style.display = 'none'
};
document.getElementById('leave-calendar').onmouseup = function() {
  document.getElementById('screen').style.display = 'inline-block';
  document.getElementById('calendar-screen').style.display = 'none';
  document.getElementById('to-home-screen').style.display = 'inline-block'
  document.getElementById('to-second-screen').style.display = 'inline-block'
};
document.getElementById('clock-icon').onmouseup = function() {
  document.getElementById('screen').style.display = 'none';
  document.getElementById('clock-screen').style.display = 'inline-block';
  document.getElementById('to-home-screen').style.display = 'none'
  document.getElementById('to-second-screen').style.display = 'none'
};
document.getElementById('clock-widget').onmouseup = function() {
  document.getElementById('screen').style.display = 'none';
  document.getElementById('clock-screen').style.display = 'inline-block';
  document.getElementById('to-home-screen').style.display = 'none'
  document.getElementById('to-second-screen').style.display = 'none'
};
document.getElementById('leave-clock').onmouseup = function() {
  document.getElementById('screen').style.display = 'inline-block';
  document.getElementById('clock-screen').style.display = 'none';
  document.getElementById('to-home-screen').style.display = 'inline-block'
  document.getElementById('to-second-screen').style.display = 'inline-block'
};
document.getElementById('app-store-icon').onmouseup = function() {
  document.getElementById('screen').style.display = 'none';
  document.getElementById('app-store-screen').style.display = 'inline-block';
  document.getElementById('to-home-screen').style.display = 'none'
  document.getElementById('to-second-screen').style.display = 'none'
};
document.getElementById('leave-app-store').onmouseup = function() {
  document.getElementById('screen').style.display = 'inline-block';
  document.getElementById('app-store-screen').style.display = 'none';
  document.getElementById('to-home-screen').style.display = 'inline-block'
  document.getElementById('to-second-screen').style.display = 'inline-block'
};
document.getElementById('music-icon').onmouseup = function() {
  document.getElementById('screen').style.display = 'none';
  document.getElementById('music-screen').style.display = 'inline-block';
  document.getElementById('to-home-screen').style.display = 'none'
  document.getElementById('to-second-screen').style.display = 'none'
};
document.getElementById('leave-music').onmouseup = function() {
  document.getElementById('screen').style.display = 'inline-block';
  document.getElementById('music-screen').style.display = 'none';
  document.getElementById('to-home-screen').style.display = 'inline-block'
  document.getElementById('to-second-screen').style.display = 'inline-block'
};
document.getElementById('wallet-icon').onmouseup = function() {
  document.getElementById('screen').style.display = 'none';
  document.getElementById('wallet-screen').style.display = 'inline-block';
  document.getElementById('field').style = 'transition: 1s; background-color: rgba(0, 0, 0, 0.52);'
  document.getElementById('to-home-screen').style.display = 'none'
  document.getElementById('to-second-screen').style.display = 'none'
};
document.getElementById('leave-wallet').onmouseup = function() {
  document.getElementById('screen').style.display = 'inline-block';
  document.getElementById('wallet-screen').style.display = 'none';
  document.getElementById('field').style = 'transition: 1s; background-color: rgba(0, 0, 0, 0);';
  document.getElementById('to-home-screen').style.display = 'inline-block';
  document.getElementById('to-second-screen').style.display = 'inline-block';
};
document.getElementById('youtube-icon').onmouseup = function() {
  document.getElementById('screen').style.display = 'none';
  document.getElementById('phone').style = 'transform: rotate(-90deg); transition: 1s;';
  document.getElementById('youtube-screen').style.display = 'inline-block';
  document.getElementById('field').style = 'transition: 3s; background-color: rgb(223, 0, 0);';
  document.getElementById('to-home-screen').style.display = 'none';
  document.getElementById('to-second-screen').style.display = 'none';
  const islandInfoParagraphs = document.querySelectorAll('.island-info');
  islandInfoParagraphs.forEach(p => {
    p.textContent = 'YouTube';
    p.style.color = 'rgb(255, 0, 0)';
    p.style.marginLeft = '10px';
    p.style.fontWeight = '900';
    p.style.fontSize = '12px'
    p.style.cursor = 'pointer'
  });
  document.getElementById('island-info').onclick = function() {
    document.getElementById('screen').style.display = 'none';
    document.getElementById('youtube-screen').style.display = 'inline-block';
    document.getElementById('phone').style = 'transform: rotate(-90deg); transition: 1s;';
  };
};
document.getElementById('leave-youtube').onmouseup = function() {
  document.getElementById('screen').style.display = 'inline-block';
  document.getElementById('phone').style = 'transform: rotate(0deg); transition: 1s;';
  document.getElementById('youtube-screen').style.display = 'none';
  document.getElementById('field').style = ' background-color: rgba(255, 0, 0, 0); transition: 1s;';
  document.getElementById('to-home-screen').style.display = 'inline-block';
  document.getElementById('to-second-screen').style.display = 'inline-block';
};
document.getElementById('chatgpt-icon').onmouseup = function() {
  document.getElementById('screen').style.display = 'none';
  document.getElementById('chatgpt-screen').style.display = 'inline-block';
  document.getElementById('field').style = 'transition: 1s; background-color: rgba(78, 78, 78, 0.66);'
  document.getElementById('to-home-screen').style.display = 'none'
  document.getElementById('to-second-screen').style.display = 'none'
};
document.getElementById('leave-chatgpt').onmouseup = function() {
  document.getElementById('screen').style.display = 'inline-block';
  document.getElementById('chatgpt-screen').style.display = 'none';
  document.getElementById('field').style = 'transition: 1s; background-color: rgba(0, 0, 0, 0);';
  document.getElementById('to-home-screen').style.display = 'inline-block';
  document.getElementById('to-second-screen').style.display = 'inline-block';
};
