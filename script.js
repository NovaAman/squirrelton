addPointsButton.addEventListener('click', () => {
  counter += 90000;
  counterElement.textContent = counter.toLocaleString();
  localStorage.setItem('counter', counter);
});
addPointsButton.removeEventListener('click');