const checkboxes = document.querySelectorAll('.inbox ul li input[type="checkbox"]');


let lastChecked;
function handleCheck(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {

            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}
checkboxes.forEach(current => current.addEventListener('click', handleCheck));