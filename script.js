function submitSurvey(event) {
    event.preventDefault();
    // You can handle form submission here, e.g., sending data to a server
    document.getElementById('surveyForm').reset();
    document.getElementById('successMessage').style.display = 'block';
    setTimeout(function() {
        document.getElementById('successMessage').style.display = 'none';
    }, 3000);
}