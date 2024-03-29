//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()
const repeatString = (str, count, separator) => {
  let finalStr = ""
  for (let i = 0; i < count ; i++) {
    finalStr = `${str}${separator}`.repeat(count-1) + str
  }
  return finalStr
}
console.log(repeatString("ho",3, "-"))
console.log(repeatString("yo", 3, " "))
console.log(repeatString("yo", 3, ","))

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

const checkStart = (str, subStr)=> {
  let startString = str.toLowerCase()
  return startString.toLowerCase().startsWith(subStr.toLowerCase())
}
console.log(checkStart("Incubator", "inc"))
console.log(checkStart("Incubator", "yo"))
console.log(checkStart("Hello World", "hell"))
console.log(checkStart("Hello World", "world"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, symbolsCount)=> {
  return str.slice(0, symbolsCount)+"..."
}
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))
console.log(truncateString("Привет! Как дела?", 11))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()
const getMinLengthWord = (str)=> {
  if(str === ""){
    return null
  }else {
    let arrStr = str.split(" ")
    let shortestWord = arrStr[0]
    for (let i = 1; i < arrStr.length; i++) {
      if(arrStr[i].length < shortestWord.length){
        shortestWord = arrStr[i]
      }
    }
    return shortestWord
  }
}
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))
console.log(getMinLengthWord("Привет, как у тебя дела?"))
console.log(getMinLengthWord(""))


//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"
const setUpperCase = (str)=> {
  return str.toLowerCase().split(" ").map(el=> el[0].toUpperCase() + el.slice(1)).join(" ")
}
console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))
console.log(setUpperCase("приВет, каК У теБя дЕла?"))
// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true




