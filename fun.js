let wSLIDER = document.querySelector("#weightinput")
let wOUTPUT = document.querySelector("#weightoutput")
    wOUTPUT.innerHTML = `${wSLIDER.value} kg`;

let hSLIDER = document.querySelector("#heightinput")
let hOUTPUT = document.querySelector("#heightoutput")
    hOUTPUT.innerHTML = `${hSLIDER.value} cm`;

function updateValue(o,s) {
    let mu;
    if (o == wOUTPUT) {
        mu = "kg"
    } else if (o == hOUTPUT) {
        mu = "cm"
    }
    o.innerHTML = `${s.value} ${mu}`;

    let bmiscore = document.querySelector("#bmiscore")
    let bmi = Math.round(wSLIDER.value/(hSLIDER.value/100)**2) 
    bmiscore.innerHTML = `BMI SCORE: ${bmi}` 

    let verdictinp = document.querySelector("#verdict");
    let verdict;

    if (bmi <= 18.5) {
        verdict = "You are underweight";
        document.querySelector("#box").classList.remove("bg-success");
        document.querySelector("#box").classList.remove("bg-warning");
        document.querySelector("#box").classList.remove("bg-danger");
        document.querySelector("#box").classList.add("bg-warning");
    } else if (bmi <= 24.9) {
        verdict = "You are healthy";
        document.querySelector("#box").classList.remove("bg-success");
        document.querySelector("#box").classList.remove("bg-warning");
        document.querySelector("#box").classList.remove("bg-danger");
        document.querySelector("#box").classList.add("bg-success");
    } else if (bmi <= 29.9) {
        verdict = "You are overweight";
        document.querySelector("#box").classList.remove("bg-success");
        document.querySelector("#box").classList.remove("bg-warning");
        document.querySelector("#box").classList.remove("bg-danger");
        document.querySelector("#box").classList.add("bg-warning");
    } else if (bmi <= 34.9) {
        verdict = "You are obese";
        document.querySelector("#box").classList.remove("bg-success");
        document.querySelector("#box").classList.remove("bg-warning");
        document.querySelector("#box").classList.remove("bg-danger");
        document.querySelector("#box").classList.add("bg-danger");
    } else if (bmi <= 39.9) {
        verdict = "You are very obese";
        document.querySelector("#box").classList.remove("bg-success");
        document.querySelector("#box").classList.remove("bg-warning");
        document.querySelector("#box").classList.remove("bg-danger");
        document.querySelector("#box").classList.add("bg-danger");
    } else {
        verdict = "You are morbidly obese";
        document.querySelector("#box").classList.remove("bg-success");
        document.querySelector("#box").classList.remove("bg-warning");
        document.querySelector("#box").classList.remove("bg-danger");
        document.querySelector("#box").classList.add("bg-danger");
    }
    verdictinp.innerHTML = verdict;

};

