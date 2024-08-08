console.log('JS OK');


const resultElement = document.getElementById('fizz-buzz');

const multipleOf3 = 'Fizz';
const multipleOf5 = 'Buzz';

let list = '';

for (i = 1; i <= 100; i++) {
    const li = document.createElement('li');

    if (i % 3 === 0) {
        li.append(multipleOf3);
        if (i % 5 === 0) {
            li.append(multipleOf5);
            li.classList.add('bg-fizz-buzz');
        }
        else {
            li.classList.add('bg-fizz');
        }
    }
    else if (i % 5 === 0) {
        li.append(multipleOf5);
        li.classList.add('bg-buzz');
    }
    else {
        li.append(i);
        li.classList.add('bg-number');
    }

    resultElement.appendChild(li);
}