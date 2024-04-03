// let score = 20;
// let number = Math.trunc(Math.random() * 20) + 1;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent =
//       '⛔ You didn\'t enter a number';
//   } else if (guess !== number) {
//     if (score > 1) {
//       document.querySelector('.message').textContent =
//         guess > number ? '⏫ Too High' : '⏬ Too Low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You Lose';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else {
//     document.querySelector('.message').textContent = '🏆 You Win';
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   document.querySelector('.score').textContent = score;
//   number = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.message').textContent = 'Start guessing...';
// });

let score = 20;
const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      '⛔ You didnt enter a number';
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⏫Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score === 0) {
      document.querySelector('.message').textContent = 'You Lose';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⏬Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score === 0) {
      document.querySelector('.message').textContent = 'You Lose';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🏆You Win';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
  }
});
