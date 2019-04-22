const chars = 'ABCDEFGHIJK0123456789';

const btn = document.querySelector('button');
const section = document.querySelector('section');

const codesNumber = 50;
const charsNumber = 50;

btn.textContent = `Generate ${codesNumber} codes`;

const codesGenerator = () => {

    for (let i = 0; i < codesNumber; i++) {
        let code = "";
        for (let j = 0; j < charsNumber; j++) {
            const index = Math.floor(Math.random() * chars.length);
            code += chars[index];
        }

        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);

    }
};

btn.addEventListener('click', codesGenerator);