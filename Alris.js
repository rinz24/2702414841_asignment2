document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.style.transition = "transform 0.3s ease-in-out";
        
        section.addEventListener("mouseover", function() {
            section.style.transform = "scale(1.05)";
        });
        
        section.addEventListener("mouseout", function() {
            section.style.transform = "scale(1)";
        });
    });
});
