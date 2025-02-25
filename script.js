document.addEventListener("DOMContentLoaded", function () {
    const sertifikaButton = document.getElementById("sertifikaButton");
    const projelerButton = document.getElementById("projelerButton");
    const gonulluButton = document.getElementById("gonulluButton");

    const sertifikalar = document.getElementById("sertifikalar");
    const projeler = document.getElementById("projeler");
    const gonulluCalismalar = document.getElementById("gonulluCalismalar");

    const kategoriler = [sertifikalar, projeler, gonulluCalismalar];

    function showCategory(selectedCategory) {
        kategoriler.forEach(category => {
            if (category === selectedCategory) {
                category.style.display = "block";
                category.classList.add("show"); // Hafif gecikme ekleyerek yumuşak animasyon
            } else {
                category.classList.remove("show");
                category.style.display = "none" // Animasyon bitince kaybolsun
            }
        });
    }

    sertifikaButton.addEventListener("click", () => showCategory(sertifikalar));
    projelerButton.addEventListener("click", () => showCategory(projeler));
    gonulluButton.addEventListener("click", () => showCategory(gonulluCalismalar));

   
    
});
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("#kategoriler button");
    const categories = document.querySelectorAll(".kategoriler");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            categories.forEach((category, catIndex) => {
                if (index === catIndex) {
                    category.classList.add("active");
                } else {
                    category.classList.remove("active");
                }
            });
        });
    });
});