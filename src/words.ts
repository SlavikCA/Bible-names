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

  const now = new Date()
  const start = new Date(2022, 0, 0)
  const diff = Number(now) - Number(start)
  let day = Math.floor(diff / (1000 * 60 * 60 * 24))
  day = day % answers.length
  return answers[day]
}

// https://azbyka.ru/shemy/imena-biblejskie.shtml
// https://ru.wikinews.org/wiki/%D0%9A%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D1%8F:%D0%91%D0%B8%D0%B1%D0%BB%D0%B5%D0%B9%D1%81%D0%BA%D0%B8%D0%B5_%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0_%D0%BF%D0%BE_%D0%B0%D0%BB%D1%84%D0%B0%D0%B2%D0%B8%D1%82%D1%83
// https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%B1%D0%BB%D0%B5%D0%B9%D1%81%D0%BA%D0%B8%D0%B5_%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0

const answers = [
  'симон',
  'давид',
  'павел',
  'аарон',
  'агарь',
  'иисус',
  'сарра',
  'иаков',
  'авдий',
  'мария',
  'пилат',
  'авель',
  'иосиф',
  'аврам',
  'иcаак',
  'иоанн',
  'амнон',
  'иоиль',
  'иавис',
  'иаред',
  'иосия',
  'ионав', //  (4 Царств 10:15) – сын Рехава.
  'авиуд', // (1 Паралипоменон 3:10) - из родословия Давида.
  'тимон', // Апостол от семи­де­ся­ти, один из слу­жи­те­лей церк­ви в Иеруса­ли­ме. (Деян 6:5)
  'тихик', // Апостол от семи­де­ся­ти, спо­движ­ник апо­сто­ла Павла. (Деян 20:4; Еф 6:21; Кол 4:7; 2Тим 4:12; Тит 3:12)
  'фарес'  // Сын Иуды (1) и Фамари, брат-близ­нец Зары. (Быт 38:28-29).
]

export const allWords = [...answers]
