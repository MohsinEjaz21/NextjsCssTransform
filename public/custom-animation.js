const playButton = document.querySelector('#transformBtn');
const svgContainer = document.querySelector('#svg');
const animation = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://assets8.lottiefiles.com/private_files/lf30_GXVoLb.json'
});

playButton.addEventListener('click', () => {
  svgContainer.classList.remove('hide');
  console.log('play');
  animation.goToAndPlay(0, true);
});

animation.addEventListener('complete', () => {
  svgContainer.classList.add('hide');
});