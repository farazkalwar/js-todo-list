const body = document.querySelector('body')
const input = document.querySelector('#todo-input')
const template = document.querySelector('#list-item')
const list = document.querySelector('#list')

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") addClicked();
});

function addClicked() {
    if (input.value.trim() === "") return

    const clone = template.content.cloneNode(true);
    const label = clone.querySelector('.list-item-label');
    label.innerText = input.value
    list.append(clone)
    input.value = null

    updateCount()
}

function clearClicked() {
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkedBoxes.forEach(element => {
        element.parentElement.remove();
    });
}

function updateCount() {
    const count = document.querySelectorAll('input[type="checkbox"]:not(:checked)');
    const countLabel = document.querySelector('#lbl-count')
    countLabel.innerText = `${count.length} left to do`
}