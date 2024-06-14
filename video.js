const link1 = document.getElementById('link2');
const centerContainer = document.getElementById('center-container');
const newTitlesContainer = document.getElementById('new-titles-container');




    // Lorsque vous cliquez sur le lien 'VIDEOS.'
    link2.addEventListener('click', function(event) {
        event.preventDefault();
        centerContainer.classList.add('moved-up');
        setTimeout(() => {
            newTitlesContainer.style.display = 'flex';
            newTitlesContainer.style.animation = 'fade-in-new-titles 1s forwards'; // Corrigé : boucle sur chaque élément de carre
        }, 500);
    });


    // Gestion de la sélection des liens
    const links = document.querySelectorAll('.category-link');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            links.forEach(l => l.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    
