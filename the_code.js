/* 
https://en.wikipedia.org/wiki/Romanization_of_Russian
Passed 100 different tests
*/

function romanize(cyrillic) {
  let lowers = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя' 
  let eng = ['a','b','v','g','d','e','e','zh','z','i','i','k','l','m','n','o','p','r','s','t','u','f','kh','ts','ch','sh','shch','ie','y','','e','iu','ia']
  let firstName = cyrillic.toLowerCase().split(' ')[0].split('').map(e => eng[lowers.indexOf(e)]).join('')
  let lastName = cyrillic.toLowerCase().split(' ')[1].split('').map(e => eng[lowers.indexOf(e)]).join('')
  return firstName.charAt(0).toUpperCase() + firstName.slice(1) + ' ' + lastName.charAt(0).toUpperCase() + lastName.slice(1)
}

// romanize("Катя Кактус")
// ='Katia Kaktus'
