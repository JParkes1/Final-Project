// Impenetrable Quiz

// Event listener
document.getElementById('MarkQ').addEventListener('click', MarkTheQuiz)

// Event Functions
function MarkTheQuiz() {
    let Q1 = document.getElementById('Question1').value;
    let Q2 = document.getElementById('Question2').value;
    let Q3 = document.getElementById('Question3').value;
    let Q4 = document.getElementById('Question4').value;
    let Q5 = document.getElementById('Question5').value;

    Q1 = Q1.toLowerCase();
    Q2 = Q2.toLowerCase();
    Q3 = Q3.toLowerCase();
    Q4 = Q4.toLowerCase();
    Q5 = Q5.toLowerCase();

    let score = 0;
    let percentage = 0;

    if (Q1 == 'alphonso davies' || Q1 == 'davies' || Q1 == 'davies') {
        console.log('correct')
        score++;
        percentage = percentage + 20;
    } else {
        console.log('incorrect')
    }

    if (Q2 == 'golf') {
        console.log('correct')
        score++;
        percentage = percentage + 20;
    } else {
        console.log('incorrect')
    }

    if (Q3 == 'trevor harris' || Q3 == 'harris' || Q3 == 'trevor') {
        console.log('correct')
        score++;
        percentage = percentage + 20;
    } else {
        console.log('incorrect')
    }

    if (Q4 == 'roger' || Q4 == 'goodell' || Q4 == 'roger goodell') {
        console.log('correct')
        score++;
        percentage = percentage + 20;
    } else {
        console.log('incorrect')
    }

    if (Q5 == 'max holloway' || Q5 == 'max' || Q5 == 'holloway') {
        console.log('correct')
        score++;
        percentage = percentage + 20;
    } else {
        console.log('incorrect')
    }

    document.getElementById('Score').innerHTML = score
    document.getElementById('Percentage').innerHTML = percentage

    if (score == 1) {
        document.getElementById('howWell').innerHTML = '1 out of 5, thats pretty bad!'
    } else if (score == 2) {
        document.getElementById('howWell').innerHTML = '2 out of 5, thats not great!'
    } else if (score == 3) {
        document.getElementById('howWell').innerHTML = '3 out of 5, your just average!'
    } else if (score == 4) {
        document.getElementById('howWell').innerHTML = '4 out of 5, pretty good!'
    } else if (score == 5) {
        document.getElementById('howWell').innerHTML = '5 out of 5, wow ok!'
    } else {
        document.getElementById('howWell').innerHTML = '0 out of 5, did you even try?'
    }
}