function header(msg) {
  console.log('\n--------------------------------')
  console.log(`\t\t${msg}`)
  console.log('--------------------------------')
}


function question1(arr, num, times) {
  return arr.filter(n => n === num).length === times
}

header('Q1')
var inputArray = [1,2,3,3,4,33,56]
console.log(question1(inputArray, 3, 2))
console.log(question1(inputArray, 4, 2))


function question2(arg) {
  return typeof arg
}

header('Q2')
console.log(question2({}))
console.log(question2(true))
console.log(question2(x => x))
console.log(question2(0))
console.log(question2(''))
console.log(question2(undefined))


function question3(str) {
  // var newStr = ""
  // str.split('').forEach(c => {
  //   if(!newStr.includes(c)) newStr += c
  // })
  // return newStr

  return str.split('').reduce((prev, curr) => !prev.includes(curr) ? prev + curr : prev, "")
}

header('Q3')
console.log(question3("Whatistimenow"))


function question4(arr1, arr2) {
  var newArr = []
  for (var i = 0; i < arr1.length || i < arr2.length; i++) {
    newArr.push( (arr1[i] || 0) + (arr2[i] || 0) )
  }
  return newArr
}

header('Q4')
var array1 = [1,0,2,3,4]
var array2 = [3,5,6,7,8,13]
console.log(question4(array1, array2))


function question5(str, ins, pos) {
  return str.slice(0,pos) + ins + str.slice(pos)
}

header('Q5')
console.log(question5('We are doing some tests.','JavaScript ',18))


function question6(num1, num2) {
  return Number((num1 - num2).toFixed(2))
}

header('Q6')
console.log(question6(38.3, 30))
console.log(question6(86.6, 83.3))


function question7(color) {
  document.querySelector('body > p:nth-child(1)').style.background = color
}


function question8(books) {
  var msg = ''
  books.forEach(book => {
    var readText = book.readingStatus ? "Already read" : "You still need to read"
    msg += `${readText} '${book.title}' by ${book.author}\n`
  })
  return msg
}

var books = [
  {
    title: 'Bill Gates',
    author: 'The Road Ahead',
    readingStatus: true
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    readingStatus: true
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    readingStatus: false
  }]
header('Q8')
console.log(question8(books))


function question9(obj) {
  return Object.keys(obj).join(',')
}

header('Q9')
console.log(question9({name : "David Rayy", sclass : "VI", rollno : 12 }))

function mod7or11(num) {
  return num % 7 === 0 || num % 11 === 0
}

function question10(x, y) {
  return mod7or11(x) !== mod7or11(y)
}

header('Q10')
console.log(question10(14,23)) // T
console.log(question10(12,22)) // T
console.log(question10(14,22)) // F
console.log(question10(4,25)) // F
