window.onload = function() {
  var data = Array(4);
  data[0] = ['солнечный', 'траурный', 'плюшевый', 'бешеный', 'памятный', 'трепетный', 'базовый', 'скошенный', 'преданный', 'ласковый', 'пойманный', 'радужный', 'огненный', 'радостный', 'тензорный', 'шёлковый', 'пепельный', 'ламповый', 'жареный', 'загнанный'];
  data[1] = ['зайчик', 'верник', 'глобус', 'ветер', 'щавель', 'пёсик', 'копчик', 'ландыш', 'стольник', 'мальчик', 'дольщик', 'Игорь', 'невод', 'егерь', 'пончик', 'лобстер', 'жемчуг', 'кольщик', 'йогурт', 'овод'];
  data[2] = ['стеклянного', 'ванильного', 'резонного', 'широкого', 'дешёвого', 'горбатого', 'собачьего', 'исконного', 'волшебного', 'картонного', 'лохматого', 'арбузного', 'огромного', 'запойного', 'великого', 'бараньего', 'вандального', 'едрёного', 'парадного', 'укромного'];
  data[3] = ['глаза', 'плова', 'Пельша', 'мира', 'деда', 'жира', 'мема', 'ада', 'бура', 'жала', 'нёба', 'гунна', 'хлама', 'шума', 'воза', 'сала', 'фена', 'зала', 'рака'];
  
  function makeCreative() {
    var result = [];
    data.forEach(function(item) {
      result.push(item[Math.floor(item.length * Math.random(item.length))]);
    });
    return result.join(' ');
  }

  var btn = document.querySelector('.js-butt');
  btn.addEventListener('click', function() {
    var text = makeCreative();
    var query = 'http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=32&client=tw-ob&q=' + text.replace(/ /g, '+') + '&tl=Ru-ru';
    var player = document.getElementById('audio');
    var source = document.createElement('source');
    var container = document.querySelector('.container');
    
    player.parentNode.removeChild(player);
    player = document.createElement('audio');
    player.setAttribute('id', 'audio');
    player.setAttribute('autoplay', true);
    player.setAttribute('controls', true);
    
    source.setAttribute('src', query);
    source.setAttribute('type', 'audio/mpeg');
    
    player.appendChild(source);
    container.appendChild(player);
    document.querySelector('.js-grob-text').innerText = text + '!!!';
 });
}