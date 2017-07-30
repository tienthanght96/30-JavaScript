
const listInput = document.querySelectorAll('.controls input');

function updateEvent() {
    let suffix = this.dataset.type || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

listInput.forEach(
    current => current.addEventListener('change', updateEvent)
);
listInput.forEach(
    current => current.addEventListener('mousemove', updateEvent)
);
