const links = document.querySelectorAll("nav a"); 


links.forEach(link => {
    link.addEventListener("click", () => {
        console.log("A link was clicked!");
    });
});
