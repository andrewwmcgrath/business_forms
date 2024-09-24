document.getElementById('questionnaireForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = {
        q1: document.getElementById('q1').value,
        q2: document.getElementById('q2').value,
        q3: document.getElementById('q3').value,
        q4: document.getElementById('q4').value,
        q5: document.getElementById('q5').value
    };

    // Simulate storing data in a JSON file (here it just logs to console)
    console.log('Form Data Submitted:', formData);

    // You can replace this with an actual POST request to save the data to a server or database
});
