document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("feedbackText");
    const charCount = document.getElementById("charCount");
    const form = document.getElementById("feedbackForm");
    const messageArea = document.getElementById("messageArea");

    textarea.addEventListener("input", () => {
        const length = textarea.value.length;
        charCount.textContent = `${length}/100`;
    });
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const feedback = textarea.value.trim();

        if (feedback === "") {
            messageArea.textContent = "Please enter your feedback.";
            messageArea.style.color = "red";
        } else {
            messageArea.textContent = "Thank you for your feedback!!";
            messageArea.style.color = "green";
            textarea.value = "";
            charCount.textContent = "0/100";
        }
    });
});
