document.addEventListener("DOMContentLoaded", () => {
    const listElement = document.getElementById("myList");
    const inputElement = document.getElementById("itemInput");
    const addBtn = document.getElementById("addItemBtn");
    const clearBtn = document.getElementById("clearAllBtn");

    const STORAGE_KEY = "myShoppingList";
    let items = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    renderList();

    addBtn.addEventListener("click", () => {
        const newItem = inputElement.value.trim();
        if (newItem !== "") {
            items.push(newItem);
            saveToLocalStorage();
            addListItem(newItem);
            inputElement.value = "";
        }
    });
    clearBtn.addEventListener("click", () => {
        items = [];
        saveToLocalStorage();
        listElement.innerHTML = "";
    });
    function renderList() {
        listElement.innerHTML = "";
        items.forEach(item => addListItem(item));
    }
    function addListItem(itemText) {
        const li = document.createElement("li");
        li.textContent = itemText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "X";
        removeBtn.classList.add("remove-btn");

        removeBtn.addEventListener("click", () => {
            items = items.filter(i => i !== itemText);
            saveToLocalStorage();
            li.remove();
        });

        li.appendChild(removeBtn);
        listElement.appendChild(li);
    }
    function saveToLocalStorage() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
});
