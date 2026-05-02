const form = document.getElementById('search-form');
const definition = document.getElementById('definition');
const textDisplay = document.getElementById('text');
const pronunciation = document.getElementById('pronunciation');
const audio = document.getElementById('audio');
const synonym = document.getElementById('synonyms');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    wordSearch();
});

async function wordSearch() {
    const word = document.getElementById('text-input').value.trim();

    if (!word) return;

    const endpoint = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error('Check the word and try again');
        }

        const data = await response.json();

        const meaning = data[0]?.meanings[0]?.definitions[0]?.definition || "Word not defined.";
        const phonetics = data[0]?.phonetic || data[0]?.phonetics[0]?.text || "N/A";


        textDisplay.textContent = word;
        definition.textContent = meaning;
        pronunciation.textContent = `Pronunciation: ${phonetics}`;

        const synonyms = data[0]?.meanings
            ?.flatMap(m => m.definitions)
            ?.flatMap(d => d.synonyms || [])
            ?.filter(Boolean);

        const uniqueSynonyms = [...new Set(synonyms)].slice(0, 10);

        synonym.textContent =
            uniqueSynonyms.length > 0
                ? `Synonyms: ${uniqueSynonyms.join(', ')}`
                : "Synonyms: None found";



        

    } catch (error) {
        textDisplay.textContent = "Error";
        definition.textContent = "Definition not found";
        pronunciation.textContent = "";
        synonym.textContent = "";
    }
}




