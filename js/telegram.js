const RU = 'RU';
const EN = 'EN';

const NEW_GAME = {
  [RU]: 'Новая игра',
  [EN]: 'New Game',
};

const RETRY = {
  [RU]: 'Новая игра',
  [EN]: 'Try again',
};

const KEEP_GOING = {
  [RU]: 'Продолжить',
  [EN]: 'Keep going',
};

const GAME_INTRO = {
  [RU]: 'Соединяйте плитки, чтобы получить <strong>плитку 2048!</strong>',
  [EN]: 'Join the numbers and get to the <strong>2048 tile!</strong>',
};


document.addEventListener("DOMContentLoaded", (event) => {
  // Translations
  if (
    window.Telegram &&
    window.Telegram.WebApp &&
    window.Telegram.WebApp.user &&
    window.Telegram.WebApp.initDataUnsafe.user.language_code &&
    window.Telegram.WebApp.initDataUnsafe.user.language_code === RU.toLowerCase()
  ) {
    document.getElementById('new-game').textContent=NEW_GAME[RU];
    document.getElementById('retry').textContent=RETRY[RU];
    document.getElementById('keep-playing').textContent=KEEP_GOING[RU];
    document.getElementById('game-intro').innerHTML=GAME_INTRO[RU];
  }

  // Expand Mini App
  setInterval(() => {
    if (!window.Telegram.WebApp.isExpanded) {
      window.Telegram.WebApp.expand();
      window.Telegram.WebApp.HapticFeedback.impactOccurred('heavy');

      // Part of fix scroll top
      window.scrollTo(0, 10);
    }
  }, 100);
});
