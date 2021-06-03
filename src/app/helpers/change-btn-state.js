function disableBtn(btn) {
  btn.style.pointerEvents = 'none';
  btn.style.background = 'gray';
}


function enableBtn(btn) {
  btn.style.pointerEvents = 'auto';
  btn.style.removeProperty('background');
}

export {disableBtn, enableBtn};
