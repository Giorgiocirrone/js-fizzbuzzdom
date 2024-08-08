const target = document.getElementById('target');

const list = document.createElement('ul');

for (g = 1; g <= 10; g++) {

    const listItem = document.createElement('li');

    listItem.append(`numero${g}`);

    list.appendChild(listItem);

    target.appendChild(list);





}