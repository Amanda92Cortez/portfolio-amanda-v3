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

// // Projetcts
// document.addEventListener("DOMContentLoaded", function () {
//     const projectsContainer = document.querySelector(".projects-container");
//     const prevBtn = document.getElementById("prevBtn");
//     const nextBtn = document.getElementById("nextBtn");
//     let index = 0;
//     const projectCards = document.querySelectorAll(".project-card");
//     const totalProjects = projectCards.length;
//     const visibleProjects = 3;

//     function updateCarousel() {
//         const offset = -index * (100 / visibleProjects) + "%";
//         projectsContainer.style.transform = "translateX(" + offset + ")";
//     }

//     nextBtn.addEventListener("click", function () {
//         if (index < totalProjects - visibleProjects) {
//             index++;
//             updateCarousel();
//         }
//     });

//     prevBtn.addEventListener("click", function () {
//         if (index > 0) {
//             index--;
//             updateCarousel();
//         }
//     });
// });


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


// Matrix

const canvas = document.getElementById("neonNetwork");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = Array.from({ length: 100 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    dx: Math.random() * 2 - 1,
    dy: Math.random() * 2 - 1
}));

function drawNetwork() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.fillStyle = "cyan";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            let dx = particles[i].x - particles[j].x;
            let dy = particles[i].y - particles[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.strokeStyle = "#FF204E";
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

setInterval(drawNetwork, 50);