
const categoriesEl = document.querySelectorAll(".item h2")
console.log(`В списке ${categoriesEl.length} категории`);

for (const item of categoriesEl) {
    console.log(`Категория: ${item.textContent}`);

    const ulItems = item.nextElementSibling.children.length;
    console.log(`Количество элементов: ${ulItems}`);
}

