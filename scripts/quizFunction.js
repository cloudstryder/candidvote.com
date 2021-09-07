/*
Functions
*/
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Taking data from questions.js and loading it into this script
function populateQuestionsObject(value) {
  questionsObject[value['id']] = value;
}

// Load question into html
function init_question() {
    $("#question").text(questionsObject[questionsOrder[questionIndex]].question); // Load question
    $("#progress").attr("style", "width: ".concat(Math.trunc(((questionIndex+1)/questionsOrder.length)*100), "%")); // Progress bar

    // If user is on question 0, hide back button
    if (jQuery.isEmptyObject(userAnswers)) {
        $('#back').hide()
    } else {
        $('#back').show()
    }
}

// Next question
function next_question(answer) {
    // If user is on last question, return
    if (questionIndex === questionsOrder.length) {
        return;
    }

    // Add answer to dictionary with the real questionIndex as key
    userAnswers[questionsOrder[questionIndex]] = answer;
    questionIndex++; // Increase question index by 1

    // Take user to results when it's the last question
    if (questionIndex < questionsOrder.length) {
        init_question();
    } else {
        results();
    }
}

// Previous Question
function prev_question() {

    // If user is on question 0, do nothing
    if (jQuery.isEmptyObject(userAnswers)) {
        $('#back').hide()
        return;
    }
    questionIndex--; // Subtract one from question index

    // Delete the previous answer
    delete userAnswers[questionsOrder[questionIndex]];

    // Render question
    init_question();
}

// Percent Calculation (ignore, math stuff)
function percentageCalculation() {
    // calc max
    var max = new Object(); // Max possible scores
    var score = new Object(); // User scores
    var pct = new Object(); // Percentages/Score

    /* Prepare max and score disctionaries with correct effect keys */
    // For every user answer
    for (const id in userAnswers) {

        // For every effect (axis) that the question effects
        for (const effectName in questionsObject[id].effects) {

            // Prepare the max effects and score for each question
            max[effectName] = 0
            score[effectName] = 0
        }

    }

    // For every user answer
    for (const id in userAnswers) {

        // This if statement can be taken out as there is no null, might be a good idea to leve in tho idk
        if (userAnswers[id] !== null) {

            // For effect in question effects
            for (const effectName in questionsObject[id].effects) {

                // Adds the absolute value of the effect into the max variable
                max[effectName] += Math.abs(questionsObject[id].effects[effectName]);

                // Adds the weighted score based off of the answer. Eg, question has an effect of soc=-1, user answers -0.5, -1*-0.5=0.5 gets added onto the score
                score[effectName] += userAnswers[id]*questionsObject[id].effects[effectName];
            }

        }
    }

    // For every effect
    for (const i in Object.keys(max)) {
        effectName = Object.keys(max)[i]

        // If user answered other than nuetral on effect's questions
        if (max[effectName] > 0) {
            pct[effectName] = ((score[effectName]/max[effectName])*10).toFixed(2);
        } else {
            pct[effectName] = 0
        }
    }

    return pct;
}

// Results
function results() {

    // Answers is a dictionary with keys of each question ID in string format and answer from -1 (strongly disagree) to 1 (strongly agree)
    window.sessionStorage.userAnswers = JSON.stringify(userAnswers);

    // Calculate final results
    pct = percentageCalculation();
    window.sessionStorage.percentages = JSON.stringify(pct);

    // prepare arguments
    var args = '?';
    for (const i in Object.keys(pct)) {
        effectName = Object.keys(pct)[i]
        args += `${effectName}=${pct[effectName]}`

        var cycle = parseInt(i)
        if (cycle+1 !== Object.keys(pct).length) {
            args += '&'
        }
    }
    //return;
    const zipCode = "&"+window.location.search.split("&")[1];
    location.href = ((window.location.hostname == "sapplyvalues.github.io") ? `feedback.html` : `results.html`) + args + zipCode;


}

/*
Init Variables
*/
var userAnswers = new Object(); // Store answers from user
var questionIndex = 0; // Current question index
var questionsObject = new Object(); // Dictionary for questions and keys
questions.forEach(populateQuestionsObject);

// Populate questions
var questionsOrder = Object.keys(questionsObject); //Array of shuffled question IDs
shuffleArray(questionsOrder);

// Question initialization
init_question();
