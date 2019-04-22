const btn = document.querySelector('button');

const names = ["Ania", "Julka", 'Edek', "Milka", "Ala", "Genowefa", "Krystian"];

const prefixs = ["It seems to me", "I have a feeling", "To be honest", "I honestly think", "On 100 % fortresses", "I 'm sure"];

const nameGenerator = () => {
    const indexName = Math.floor(Math.random() * names.length);

    const indexPrefix = Math.floor(Math.random() * prefixs.length);

    document.querySelector('div').textContent = prefixs[indexPrefix] + " - " + names[indexName];
}

btn.addEventListener('click', nameGenerator);