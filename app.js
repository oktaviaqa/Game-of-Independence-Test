const inputName = document.querySelector('#inputName')
const homeBtn = document.querySelector('#homeBtn')
const formHome = document.querySelector('#formHome')
const checkboxHome = document.querySelector('#checkboxHome')
const homePage = document.querySelector('#homePage')
const homeCard = document.querySelector('.homeCard')
const yourNameAvatar = document.querySelector('#yourNameAvatar')
const yourNameQuiz = document.querySelector('#yourNameQuiz')
const yourNameResult = document.querySelector('#yourNameResult')
// 
const avatarPage = document.querySelector('#avatarPage')
setTimeout(() => {
    homeCard.classList.add('active')
    // homePage.classList.add('active')
}, 300);


let username = '';

formHome.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(inputName.value);

    // remove paragraf invalid input & redborder di input text
    // kalo sudah ada
    let invalidInput = document.querySelector('#invalidInput')
    if (invalidInput) {
        invalidInput.remove()
        inputName.classList.remove('inputRedBorder')
    }

    // kalo input valid & cekbox true
    if ( isUsernameValid(inputName.value) && checkboxHome.checked === true) {
        username = inputName.value
        // todo animation swipe
        // setTimeout(() => {
        //     avatarPage.classList.add('active')
        // }, 300);
        homeCard.classList.remove('active')
        setTimeout(() => {
            homePage.classList.add('displaynone')
            // slide.classList.add('active')
            avatarPage.classList.remove('displaynone')
            avatarPage.classList.add('active')
            yourNameAvatar.innerText = 'Halo, ' + username
            yourNameQuiz.innerText = 'Halo, ' + username
            yourNameResult.innerText = username

        }, 500);
        // containerAvatar.classList.add('active')
        // setTimeout(() => {
        //     // homePage.classList.add('displaynone')
            
        // }, 700);
        
    }
    // kalo nama invalid
    else if ( !isUsernameValid(inputName.value) ) {
        let newElement = document.createElement('P')
        newElement.innerText = 'nama tidak valid!'
        newElement.classList.add('invalidInput')
        newElement.setAttribute('id', 'invalidInput')
        homeCard.insertBefore(newElement, homeBtn)
        inputName.classList.add('inputRedBorder')
    }
    // kalo belum cek agreement
    else if ( checkboxHome.checked === false ) {
        let newElement = document.createElement('P')
        newElement.innerText = 'Acc dulu dongs'
        newElement.classList.add('invalidInput')
        newElement.setAttribute('id', 'invalidInput')
        homeCard.insertBefore(newElement, homeBtn)
    }
})

// username only huruf or spasi
// username harus > 3
// return true / false
function isUsernameValid (user) {
    user = user.toLowerCase()
    if (user.length <= 3) return false
    let huruf = "abcdefghijklmnopqrstuvwxyz"
    
    for (let h = 0; h < user.length; h++) { //M
        let isVerify = false
        for (let i = 0; i < huruf.length; i++) { //m
            if (user[h] === huruf[i] || user[h] ===" ") {
                isVerify = true
                break;
            }
        }
        if ( !isVerify ) {
            return false
        }
    }
    return true
}

// PAGE 2

const card1 = document.querySelector('#card1')
const card2 = document.querySelector('#card2')
const card3 = document.querySelector('#card3')
const card4 = document.querySelector('#card4')
const card5 = document.querySelector('#card5')
const quizPage = document.querySelector('#quizPage')
const imgResult = document.querySelector('#imgResult')

card1.addEventListener('click', function() {
    avatarPage.classList.remove('active')
    setTimeout(() => {
        avatarPage.classList.add('displaynone')
        quizPage.classList.remove('displaynone')
        quizPage.classList.add('active')
        setQuestions()
        imgResult.src = document.querySelector('#card1').children[0].src
    }, 500);
}) 
card2.addEventListener('click', function() {
    avatarPage.classList.remove('active')
    setTimeout(() => {
        avatarPage.classList.add('displaynone')
        quizPage.classList.remove('displaynone')
        quizPage.classList.add('active')
        setQuestions()
        imgResult.src = document.querySelector('#card2').children[0].src
    }, 500);
}) 
card3.addEventListener('click', function() {
    avatarPage.classList.remove('active')
    setTimeout(() => {
        avatarPage.classList.add('displaynone')
        quizPage.classList.remove('displaynone')
        quizPage.classList.add('active')
        setQuestions()
        imgResult.src = document.querySelector('#card3').children[0].src
    }, 500);
}) 
card4.addEventListener('click', function() {
    avatarPage.classList.remove('active')
    setTimeout(() => {
        avatarPage.classList.add('displaynone')
        quizPage.classList.remove('displaynone')
        quizPage.classList.add('active')
        setQuestions()
        imgResult.src = document.querySelector('#card4').children[0].src
    }, 500);
}) 
card5.addEventListener('click', function() {
    avatarPage.classList.remove('active')
    setTimeout(() => {
        avatarPage.classList.add('displaynone')
        quizPage.classList.remove('displaynone')
        quizPage.classList.add('active')
        setQuestions()
        imgResult.src = document.querySelector('#card5').children[0].src
    }, 500);
}) 

// PAGE 3

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


function resultPageAction(){
    quizPage.classList.remove('active')
    setTimeout(() => {
        quizPage.classList.add('displaynone')
        resultPage.classList.remove('displaynone')
        resultPage.classList.add('active')
        
    }, 500);
}

answer1.addEventListener('click', function () {
    if (index > questions.length-1) {
        // resultPageFunc()
        resultPageAction()
        return resultPageFunc()
    }
    countAns1++
    setQuestions()
})
answer2.addEventListener('click', function () {
    if (index > questions.length-1) {
        // resultPageFunc()
        resultPageAction()
        return resultPageFunc()
    }
    countAns2++
    setQuestions()
})
answer3.addEventListener('click', function () {
    if (index > questions.length-1) {
        // resultPageFunc()
        resultPageAction()
        return resultPageFunc()
    }
    countAns3++
    setQuestions()
})

const category = document.querySelector('#categoryText')
const descriptionCategory = document.querySelector('#descriptionText')
let result = ''
function resultPageFunc(){ 
    if(countAns1 > countAns2 && countAns1 > countAns3){
        category.innerText = 'Patriotisme'
        descriptionCategory.innerText='Kamu adalah orang yang sangat peduli terhadap negaramu... KAMU HARUS BANGGA KARENA ITU'
    }
    else if (countAns2 > countAns1 && countAns2 > countAns3){
        category.innerText = 'Nasionalisme'
        descriptionCategory.innerText='Kamu adalah orang yang mencintai negaramu dengan semestinya... PERTAHANKAN HAL ITU...'
    }
    else if (countAns3 > countAns1 && countAns3 > countAns2){
        category.innerText = 'Heroisme'
        descriptionCategory.innerText='Kamu adalah orang yang membela kebenaran... cuma tolonglah untuk menghargai negara'
    } else {
        category.innerText = 'Nasionalisme'
        descriptionCategory.innerText='Kamu adalah orang yang mencintai negaramu dengan semestinya... PERTAHANKAN HAL ITU...'
    }
}

