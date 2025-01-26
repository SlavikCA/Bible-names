const defaultMessage = ' Using word of the day instead.'

export function getWordOfTheDay() {
  if (location.search) {
    try {
      const query = atob(location.search.slice(1))
      if (query.length !== 5) {
        alert(`Incorrect word length from encoded query. ${defaultMessage}`)
      } else {
        return query.toLowerCase();
      }
    } catch (e) {
      alert(`Malformed encoded word query. ${defaultMessage}`)
    }
  }

  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
}

// https://azbyka.ru/shemy/imena-biblejskie.shtml
// https://ru.wikinews.org/wiki/%D0%9A%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D1%8F:%D0%91%D0%B8%D0%B1%D0%BB%D0%B5%D0%B9%D1%81%D0%BA%D0%B8%D0%B5_%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0_%D0%BF%D0%BE_%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82%D1%83
// https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%B1%D0%BB%D0%B5%D0%B9%D1%81%D0%BA%D0%B8%D0%B5_%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0

// имена из массива answers могут быть загаданы и использованы для отгадок
const answers = [
  'иисус',
  'симон',
  'давид',
  'павел',
  'аарон',
  'иавал',
  'агарь',
  'ефрем',
  'иаиль',
  'михей',
  'нахор',
  'садок',
  'марфа',
  'милка',
  'нафан',
  'зелфа',
  'рувим',
  'молох',
  'зилот',
  'аггей',
  'сарра',
  'иаков',
  'ездра',
  'авдий',
  'мария',
  'варак',
  'димас', //Один из помощников апостола Павла, впоследствии оставивший его. (Кол 4:14; 2Тим 4:10; Флм 1:23)
  'пилат',
  'варух',
  'аммон',
  'авель',
  'валла', // Рабыня Рахили, которую хозяйка, отдала в наложницы своему мужу Иакову. В результате этого родились Дан и Неффалим. (Быт 30:1-8)
  'акила',
  'ванея',
  'иофор', //Мадиамский священник, отец Сепфоры, тесть Моисея. В Исх 2:18
  'лоида', //Бабка Тимофея, христианка, о которой с похвалой отзывается Павел. (2Тим 1:5)
  'иоиль',
  'лаван',
  'левий',
  'ламех',
  'исаия',
  'исаак',
  'фарес',
  'фарра',
  'халев',
  'тихик',
  'сихем',
  'иосиф',
  'иувал', //Сын Ламеха (Быт 4:21)
  'аврам',
  'иафет', //Сын Ноя
  'алфей',
  'иcаак',
  'иасон', //Фессалоникиец, принимавший у себя в доме Павла и Силу
  'иоанн',
  'амнон',
  'иоиль',
  'иавис',
  'иаред',
  'иосия',
  'авиуд', // (1 Паралипоменон 3:10) - из родословия Давида.
  'тимон', // Апостол от семидесяти, один из служителей церкви в Иерусалиме. (Деян 6:5)
  'тихик', // Апостол от семидесяти, сподвижник апостола Павла. (Деян 20:4; Еф 6:21; Кол 4:7; 2Тим 4:12; Тит 3:12)
  'фарес'  // Сын Иуды (1) и Фамари, брат-близнец Зары. (Быт 38:28-29).
]

// имена из массива allowedGuesses могут быть использованы для отгадок, но никогда не будут загаданы
const allowedGuesses = [
  'крисп', // Апостол от семидесяти, ученик апостола Павла. (Деян 18:8; 1Кор 1:14)
  'емима', // Старшая дочь Иова (Иов 42:14).
  'иофам',
  'иорам',
  'ахаик',
  'апфия',
  'ионав', // (4 Царств 10:15) – сын Рехава.
  'амрам',
  'силом',
  'фирца',
  'хирам',
  'цилла',
  'эраст',
  'ноема',
  'наама'
]

export const allWords = [...answers, ...allowedGuesses]
