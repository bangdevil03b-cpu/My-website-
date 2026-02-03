const familyLinks = document.querySelectorAll(".family-member");

familyLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const member = event.target.closest('a').getAttribute("data-member");
        const details = document.getElementById(`${member}-details`);
        
        // Toggle tampilan detail
        details.style.display = (details.style.display === "block") ? "none" : "block";
    });
});