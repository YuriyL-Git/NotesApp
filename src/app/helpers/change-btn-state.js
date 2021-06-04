function disableButtons(...buttons) {
  buttons.forEach(btn => {
    btn.style.pointerEvents = 'none';
    btn.style.background = 'gray';
  });
}


function enableButtons(...buttons) {
  buttons.forEach(btn => {
    btn.style.pointerEvents = 'auto';
    btn.style.removeProperty('background');
  });
}

export {disableButtons, enableButtons};
