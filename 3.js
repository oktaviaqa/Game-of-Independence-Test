const questionText = document.querySelector('#questionText')
const answer1 = document.querySelector('#answer1')
const answer2 = document.querySelector('#answer2')
const answer3 = document.querySelector('#answer3')

let countAns1 = 0,
    countAns2 = 0,
    countAns3 = 0,
    index = 0;

function setQuestions () {
    questionText.innerText = questions[index].question
    answer1.innerText = questions[index].answer1
    answer2.innerText = questions[index].answer2
    answer3.innerText = questions[index].answer3
    index++
}


answer1.addEventListener('click', function () {
    if (index > questions.length-1) return console.log('DUAH');
    countAns1++
    document.querySelector('#count1').innerText = countAns1
    setQuestions()
})
answer2.addEventListener('click', function () {
    if (index > questions.length) return console.log('DUAH');
    countAns2++
    document.querySelector('#count2').innerText = countAns2
    setQuestions()
})
answer3.addEventListener('click', function () {
    if (index > questions.length) return console.log('DUAH');
    countAns3++
    document.querySelector('#count3').innerText = countAns3
    setQuestions()
})