document.addEventListener('DOMContentLoaded', function() {
    const initialsContainer = document.getElementById('initials-container');
    const centerContainer = document.getElementById('center-container');
    const gauche = document.getElementById('gauche');
    const droite = document.getElementById('droite')
    const newTitlesContainer = document.getElementById('new-titles-container');
    const link1 = document.getElementById('link1');
    const title1 = document.getElementById('new-title1');
    const title2 = document.getElementById('new-title2');
    const title3 = document.getElementById('new-title3');
    const carre1= document.getElementById('carre1');
    const carre2= document.getElementById('carre2');
    const carre3= document.getElementById('carre3');
    

    const carre = document.querySelectorAll(".carre")

    let hovered = false;

    initialsContainer.addEventListener('mouseenter', function() {
        if (!hovered) {
            hovered = true;
            const initials = document.querySelectorAll('.initial');
            const separators = document.querySelectorAll('.separator');

            // Appliquer l'animation aux noms
            initials.forEach(initial => {
                initial.style.animation = 'slide-right 2s forwards';
            });

            // Appliquer l'animation aux séparateurs
            separators.forEach(separator => {
                separator.style.animation = 'slide-right 2s forwards';
            });

            // Afficher le centre après l'animation
            setTimeout(() => {
                initialsContainer.style.display = 'none';
                centerContainer.style.display = 'flex';
                centerContainer.style.animation = 'fade-in 1s forwards';
            }, 2000);
        }
    });

    link1.addEventListener('click', function(event) {
        event.preventDefault();
        centerContainer.classList.add('moved-up');
        setTimeout(() => {
            newTitlesContainer.style.display = 'flex';
            newTitlesContainer.style.animation = 'fade-in-new-titles 1s forwards';
            carre.forEach(el => {
                el.style.animation = 'fade-in-new-titles 2s forwards';
            }); // Corrigé : boucle sur chaque élément de carre
        }, 500);
    });

    const links = document.querySelectorAll('.category-link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            
            links.forEach(l => l.classList.remove('selected'));
            this.classList.add('selected');
        });
    });


title1.addEventListener('mouseover', function(event) {
    carre1.style.backgroundImage = "url('Capture d’écran 2024-03-14 à 02.57.33.png')";
    carre2.style.backgroundImage = "url('Capture d’écran 2024-03-14 à 02.57.33.png')";
    carre3.style.backgroundImage = "url('Capture d’écran 2024-03-14 à 02.57.33.png')";

});
title1.addEventListener('mouseout', function(event) {
    carre1.style.backgroundImage = "";
    carre2.style.backgroundImage = "";
    carre3.style.backgroundImage = "";
});
title2.addEventListener('mouseover', function(event) {
    carre1.style.backgroundImage = "url('Capture d’écran 2024-05-17 à 23.03.53.png')";
    carre2.style.backgroundImage = "url('Capture d’écran 2024-05-17 à 23.03.53.png')";
    carre3.style.backgroundImage = "url('Capture d’écran 2024-05-17 à 23.03.53.png')";

});
title2.addEventListener('mouseout', function(event) {
    carre1.style.backgroundImage = ""; // Réinitialise l'image de fond
    carre2.style.backgroundImage = ""; // Réinitialise l'image de fond
    carre3.style.backgroundImage = ""; // Réinitialise l'image de fond
});
title3.addEventListener('mouseover', function(event) {
    carre1.style.backgroundImage = "url('Capture d’écran 2022-01-05 à 23.02.06.png')";
    carre2.style.backgroundImage = "url('Capture d’écran 2022-01-05 à 23.02.06.png')";
    carre3.style.backgroundImage = "url('Capture d’écran 2022-01-05 à 23.02.06.png')";

});
title3.addEventListener('mouseout', function(event) {
    carre1.style.backgroundImage = ""; // Réinitialise l'image de fond
    carre2.style.backgroundImage = ""; // Réinitialise l'image de fond
    carre3.style.backgroundImage = ""; // Réinitialise l'image de fond
});
const newTitles = document.querySelectorAll('.new-title');

    newTitles.forEach(newTitle => {
        newTitle.addEventListener('click', function(event) {
            // Ouvre la page cible
            window.location.href = this.href;
        });
    });
});

