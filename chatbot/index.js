const main = document.getElementsByClassName('main')[0];
const buttonStart = document.getElementsByClassName('start')[0];
const welcome = document.getElementsByClassName('welcome-chatbot')[0];
const chatbot = document.getElementsByClassName('chatbot')[0];
const buttonSend = document.getElementsByClassName('send-btn')[0];
const input = document.getElementsByClassName('input-box')[0];
const sendBox = document.getElementsByClassName('send-block')[0];

function toStart() {
  welcome.style.display = 'none';
  chatbot.style.display = 'flex';
  main.style.justifyContent = 'flex-start';
  main.style.alignItems = 'flex-start';
  sendBox.style.display = 'flex';
}
buttonStart.addEventListener('click', toStart);

function toSend() {
  const stringBlock = document.createElement('div');
  stringBlock.className = 'qa-block';
  chatbot.appendChild(stringBlock);
  const boxForBot = document.createElement('div');
  boxForBot.className = 'bot-box';
  stringBlock.appendChild(boxForBot);
  const botText = document.createElement('div');
  botText.className = 'bot-box-answer';
  boxForBot.appendChild(botText);
  const message = document.createElement('div');
  message.className = 'user-box-answer';
  message.innerText = input.value;
  const boxForUser = document.createElement('div');
  boxForUser.className = 'user-box';
  boxForUser.appendChild(message);
  stringBlock.appendChild(boxForUser);

  const arrAnsw = input.value.toLowerCase().split(' ');

  const arrResponce = {
    взбодриться:
      'Для взбодрительного эффекта, вы можете выбрать китайский чай, такой как Желтый чай, Зеленый чай или Дарху. Они все содержат кофеин, который помогает взбодриться. Если хочешь узнать больше о желтом чае - напиши "желтый чай"',
    расслабиться:
      'Чтобы расслабиться, можно попробовать выпить тайский зеленый чай, ванильный чай или ароматный чай, например чай с мятой. Также можно попробовать успокаивающие чаи, такие как чай из звезды аниса или чай из листьев мате. Если рассказать больше о тайском зеленом чае - напиши "тайский зеленый чай"',
    'тайский зеленый чай':
      'Тайский зеленый чай является одним из самых популярных сортов чая в Таиланде и восточной Азии. Он имеет освежающий вкус и запах, а также имеет ряд полезных свойств для здоровья. Тайский зеленый чай производится из молодых листьев чайного дерева и проходит минимальную обработку, что позволяет сохранить большое количество полезных веществ. Тайский зеленый чай идеален для тех, кто хочет расслабиться и очистить свое тело от вредных веществ. Если понравилось - напиши "хорошо", если интересно узнать где купить - напиши "где купить" ',
    хорошо: 'Были рады быть вам полезными. Приятного чаепития!',
    'где купить':
      'Можно заказать в нашем онлайн магазине. Спасибо за ваш интерес',
    'желтый чай':
      'Желтый чай является редким и дорогим видом китайского чая, который имеет светлый, мягкий вкус и золотистый цвет. Он произрастает в Китае в провинциях Юньнан и Хубей, где используется мягкая вода и нежный климат. Желтый чай имеет мягкую, приятную ароматику и нежный, сладковатый вкус. Он часто используется для праздничных торжеств и церемоний. Если понравилось - напиши "хорошо", если интересно узнать где купить - напиши "где купить" ',
    хорошо: 'Были рады быть вам полезными. Приятного чаепития!',
    привет: 'Здравствуй, дорогой друг',
  };

  // if (arrResponce.hasOwnProperty(input.value)) {
  //   botText.innerText = arrResponce[input.value];
  // } else {
  //   const otherText = 'Этот запрос пока сложен для меня, можем веруться к первому вопросу или другой предложенной ранее команде';
  //   botText.innerText = otherText;
  // }

  for (let i = 0; i < arrAnsw.length; i++) {
    for (let key in arrResponce) {
      if (key.includes(arrAnsw[i])) {
        botText.innerText = arrResponce[key];
      }
    }
  }

  if (botText.innerText.length === 0) {
    const otherText =
      'Этот запрос пока сложен для меня, можем веруться к первому вопросу или другой предложенной ранее команде';
    botText.innerText = otherText;
  }
  input.value = '';
}

buttonSend.addEventListener('click', toSend);

input.addEventListener('keyup', (event) => {
  if (event.code === 'Enter') {
    toSend();
  }
});
