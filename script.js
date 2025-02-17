document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let formData = new FormData(this);
    let surveyData = {};

    formData.forEach((value, key) => {
        surveyData[key] = value;
    });

    fetch('https://script.google.com/macros/s/AKfycbzL9BnghzIEgZvMSRcxENBZj7am483gF70LVVfTk4RdJeupGSWCeijH20sE_2EgsJJd/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(surveyData)
    }).then(() => {
        alert("Survey submitted successfully!");
        document.getElementById("surveyForm").reset();
    });
});
