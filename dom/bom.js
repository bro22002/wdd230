const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function() {
    const newList = input.value;
    input.value = "";

    const listElement = document.createElement("li");
    const listText = document.createElement("text");
    const listBtn = document.createElement("button");

    listElement.appendChild(listText);
    listText.innerHTML = newList;
    listElement.appendChild(listBtn);
    listBtn.innerHTML = '❎';
    list.appendChild(listElement);

    listBtn.addEventListener('click', () => {
        list.removeChild(listElement);
      });

    input.focus();
})