const optionBlockOne = document.getElementById('option-block-one');
const optionBlockTwo = document.getElementById('option-block-two');
const optionBlockThree = document.getElementById('option-block-three');

function addColor(position) {
  if (position == 'one') {
    if (optionBlockOne.classList.contains('active')) {
      optionBlockOne.classList.remove('active');
      removeContent();
    } else {
      optionBlockOne.classList.add('active');
      optionBlockTwo.classList.remove('active');
      optionBlockThree.classList.remove('active');
      addContent('one');
    }
  } else if (position == 'two') {
    if (optionBlockTwo.classList.contains('active')) {
      optionBlockTwo.classList.remove('active');
      removeContent();
    } else {
      optionBlockTwo.classList.add('active');
      optionBlockOne.classList.remove('active');
      optionBlockThree.classList.remove('active');
      addContent('two');
    }
  } else if (position == 'three') {
    if (optionBlockThree.classList.contains('active')) {
      optionBlockThree.classList.remove('active');
      removeContent();
    } else {
      optionBlockThree.classList.add('active');
      optionBlockOne.classList.remove('active');
      optionBlockTwo.classList.remove('active');
      addContent('three');
    }
  }
}

const lineOne = document.getElementById('line-one');
const lineTwo = document.getElementById('line-two');
const lineThree = document.getElementById('line-three');

function addContent(position) {
  if (position == 'one') {
    lineOne.classList.add('active');
    lineTwo.classList.add('active');
    lineThree.classList.add('active');

    document.getElementById('line-one-img').src = '../../images/apple-watch-sell.jpeg';
    document.getElementById('line-one-title').innerHTML = 'Apple Watch';
    document.getElementById('line-one-price').innerHTML = 'R$ 4.059,00';

    document.getElementById('line-two-img').src = '../../images/samsumg-watch.jpg';
    document.getElementById('line-two-title').innerHTML = 'Samsumg SmartWatch';
    document.getElementById('line-two-price').innerHTML = 'R$ 899,00';

    document.getElementById('line-three-img').src = '../../images/miband.jpg';
    document.getElementById('line-three-title').innerHTML = 'Samsumg SmartWatch';
    document.getElementById('line-three-price').innerHTML = 'R$ 330,00';
  } else if (position == 'two') {
    lineOne.classList.add('active');
    lineTwo.classList.add('active');
    lineThree.classList.add('active');

    document.getElementById('line-one-img').src = '../../images/geneva-watch.jpg';
    document.getElementById('line-one-title').innerHTML = 'Geneva Romans';
    document.getElementById('line-one-price').innerHTML = 'R$ 2.339,00';

    document.getElementById('line-two-img').src = '../../images/thunder-black.jpg';
    document.getElementById('line-two-title').innerHTML = 'Thunder Black';
    document.getElementById('line-two-price').innerHTML = 'R$ 1.899,00';

    document.getElementById('line-three-img').src = '../../images/curren-old-town.jpg';
    document.getElementById('line-three-title').innerHTML = 'Curren Old Town';
    document.getElementById('line-three-price').innerHTML = 'R$ 3.730,00';
  } else if (position == 'three') {
    lineOne.classList.add('active');
    lineTwo.classList.add('active');
    lineThree.classList.remove('active');

    document.getElementById('line-one-img').src = '../../images/digital-1.jpeg';
    document.getElementById('line-one-title').innerHTML = 'X-Games Master Boy';
    document.getElementById('line-one-price').innerHTML = 'R$ 349,00';

    document.getElementById('line-two-img').src = '../../images/digital-2.jpeg';
    document.getElementById('line-two-title').innerHTML = 'Skmei Sport';
    document.getElementById('line-two-price').innerHTML = 'R$ 189,00';

  }
}

function removeContent() {
  lineOne.classList.remove('active');
  lineTwo.classList.remove('active');
  lineThree.classList.remove('active');
}