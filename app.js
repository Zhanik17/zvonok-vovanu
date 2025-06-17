const phrases = [
  "Алё, ты зачем беспокоишь Вована по пустякам?",
  "Если надо решить — решим. Но быстро.",
  "У тебя 5 минут, чтобы всё объяснить.",
  "Ты чё, совсем попутал? Давай конкретику.",
  "Я сейчас подъеду. Жди."
];

function playPhrase() {
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  alert(phrase);
}
