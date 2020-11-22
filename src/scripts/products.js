const optionBlockOne = document.getElementById('option-block-one');
const optionBlockTwo = document.getElementById('option-block-two');
const optionBlockThree = document.getElementById('option-block-three');

// optionBlockOne.addEventListener('click', () => {
//   console.log("oi")
//   optionBlockOne.classList.add('active');
// })

function addColor(position) {
  console.log(position)
  if (position == 'one') {
    if (optionBlockOne.classList.contains('active')) {
      console.log("aoba")
      optionBlockOne.classList.remove('active');
    } else {
      optionBlockOne.classList.add('active');
    }

    optionBlockTwo.classList.remove('active');
    optionBlockThree.classList.remove('active');
  } else if (position == 'two') {
    if (optionBlockTwo.classList.contains('active')) {
      console.log("aoba")
      optionBlockTwo.classList.remove('active');
    } else {
      optionBlockTwo.classList.add('active');
    }

    optionBlockOne.classList.remove('active');
    optionBlockThree.classList.remove('active');
  } else if (position == 'three') {
    if (optionBlockThree.classList.contains('active')) {
      console.log("aoba")
      optionBlockThree.classList.remove('active');
    } else {
      optionBlockThree.classList.add('active');
    }

    optionBlockOne.classList.remove('active');
    optionBlockTwo.classList.remove('active');
  }

}