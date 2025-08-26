

document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress div");

    const options = { threshold: 0.3 };

    const animateProgress = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percentage = bar.getAttribute("data-skill");
                bar.style.width = percentage + "%";
                observer.unobserve(bar); // Run only once
            }
        });
    };

    const observer = new IntersectionObserver(animateProgress, options);
    progressBars.forEach(bar => observer.observe(bar));
});


const typedText = [
    "Building user-friendly applications",
    "Solving complex problems with code",
    "Turning ideas into real-world solutions"
];

let i = 0, j = 0;
let currentText = '';
let isDeleting = false;
const speed = 100;

function type() {
    const element = document.querySelector('.typing');
    if(i >= typedText.length) i = 0;
    const fullText = typedText[i];

    if(!isDeleting) {
        currentText = fullText.slice(0, j+1);
        j++;
    } else {
        currentText = fullText.slice(0, j-1);
        j--;
    }

    element.textContent = currentText;

    if(!isDeleting && currentText === fullText) {
        isDeleting = true;
        setTimeout(type, 1500);
    } else if(isDeleting && currentText === '') {
        isDeleting = false;
        i++;
        j = 0;
        setTimeout(type, 500);
    } else {
        setTimeout(type, speed);
    }
}

document.addEventListener("DOMContentLoaded", type);

document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const text = btn.getAttribute('data-copy');
        navigator.clipboard.writeText(text).then(() => {
            btn.textContent = '✔'; // show success checkmark
            setTimeout(() => {
                btn.innerHTML = '<i class="fa-solid fa-copy"></i>';
            }, 1500);
        });
    });
});


const downloadBtn = document.querySelector('.resume-btn');
const downloadCountSpan = document.querySelector('#download-count span');
let downloadCount = 0;

downloadBtn.addEventListener('click', () => {
    downloadCount++;
    downloadCountSpan.textContent = downloadCount;
});


const aboutContainer = document.querySelector('.about-container');

window.addEventListener('scroll', () => {
    const triggerPoint = window.innerHeight - 100;
    const top = aboutContainer.getBoundingClientRect().top;

    if (top < triggerPoint) {
        aboutContainer.classList.add('active');
    }
});





