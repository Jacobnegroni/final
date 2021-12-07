const content = document.getElementById('keyboard');

content.addEventListener('keyup', changeTransform);

function changeTransform (event) {
  // if (event.keyCode === 32) {
	content.style.transform = transform.replace('rotateY(0deg)', 'rotateY(180deg)');
  // }
}
