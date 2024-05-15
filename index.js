const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
  return tutorials.map(line => {
    const makingItSplit = line.split(" ")
    return makingItSplit.map(word => {
      const wordFirstLetter = word[0].toUpperCase()
      const theRestOfIt = word.slice(1, word.length)
      return  wordFirstLetter + theRestOfIt
    }).join(" ")
    
  })
}
