var form = document.getElementById("sheetdb-form");
form.addEventListener("submit", e => {
    e.preventDefault();
    
    var confimation = confirm("Are you sure you want to submit the form?");

    if (confimation) {
        fetch(form.action, {
            method: "POST",
            body: new FormData(document.getElementById("sheetdb-form")),
        }).then(function(response) {
            return response.json();
        }).then(function(html){
            // Clear the form inputs
            form.reset();
            alert("Your response has been submitted");
        });
    }
});
