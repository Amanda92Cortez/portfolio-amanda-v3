document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".btn");
    btn.addEventListener("mouseover", function() {
        btn.style.transform = "scale(1.1)";
    });
    btn.addEventListener("mouseout", function() {
        btn.style.transform = "scale(1)";
    });
});


// Sobre Mim
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.sidebar ul li');
    const sections = {
        'Sobre Mim': document.querySelector('#sobre-mim'),
        'Experiência': document.querySelector('#experiencia'),
        'Habilidades': document.querySelector('#habilidades'),
        'Educação': document.querySelector('#educacao'),
        // 'Estudo': document.querySelector('#estudo'),

        // Adicione os outros itens aqui, como Habilidades e Educação
    };

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(li => li.classList.remove('active'));  // Remove a classe 'active' de todos os itens
            item.classList.add('active');  // Adiciona a classe 'active' ao item clicado

            const sectionName = item.textContent.trim();  // Obtém o nome da seção clicada
            for (const section in sections) {
                if (sections.hasOwnProperty(section)) {
                    sections[section].style.display = section === sectionName ? 'block' : 'none';
                }
            }
        });
    });

    // Exibe a primeira seção (Sobre Mim) por padrão
    sections['Sobre Mim'].style.display = 'block';
    sections['Experiência'].style.display = 'none';  // As outras seções começam ocultas
    sections['Habilidades'].style.display = 'none';
    sections['Educação'].style.display = 'none';
    // sections['Estudo'].style.display = 'none';

});

// Projetcts
document.addEventListener("DOMContentLoaded", function () {
    const projectsContainer = document.querySelector(".projects-container");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let index = 0;
    const projectCards = document.querySelectorAll(".project-card");
    const totalProjects = projectCards.length;
    const visibleProjects = 3;

    function updateCarousel() {
        const offset = -index * (100 / visibleProjects) + "%";
        projectsContainer.style.transform = "translateX(" + offset + ")";
    }

    nextBtn.addEventListener("click", function () {
        if (index < totalProjects - visibleProjects) {
            index++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", function () {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });
});


// Filtros
function filtrarProjetos(categoria) {
    let projetos = document.querySelectorAll('.projeto');

    projetos.forEach(projeto => {
        if (categoria === 'todos' || projeto.dataset.categoria === categoria) {
            projeto.style.display = 'block'; // Mostra o projeto
        } else {
            projeto.style.display = 'none'; // Esconde o projeto
        }
    });
}
