const englishWordSelect = document.getElementById('english-word');
const translateBtn = document.getElementById('translate-btn');
const germanTranslation = document.getElementById('german-translation');
const spanishTranslation = document.getElementById('spanish-translation');
const frenchTranslation = document.getElementById('french-translation');

const dictionary = {
    'hello': { german: 'Hallo', spanish: 'Hola', french: 'Bonjour' },
    'goodbye': { german: 'Auf Wiedersehen', spanish: 'Adiós', french: 'Au revoir' },
    'yes': { german: 'Ja', spanish: 'Sí', french: 'Oui' },
    'no': { german: 'Nein', spanish: 'No', french: 'Non' },
    'please': { german: 'Bitte', spanish: 'Por favor', french: 'S\'il vous plaît' },
    'thanks': { german: 'Danke', spanish: 'Gracias', french: 'Merci' },
    'good morning': { german: 'Guten Morgen', spanish: 'Buenos días', french: 'Bonjour' },
    'good night': { german: 'Gute Nacht', spanish: 'Buenas noches', french: 'Bonne nuit' },
    'sorry': { german: 'Entschuldigung', spanish: 'Lo siento', french: 'Désolé' },
    'excuse me': { german: 'Entschuldigen Sie', spanish: 'Perdón', french: 'Excusez-moi' },
    'how are you': { german: 'Wie geht es Ihnen?', spanish: '¿Cómo estás?', french: 'Comment ça va?' },
    'I\'m fine': { german: 'Mir geht es gut', spanish: 'Estoy bien', french: 'Je vais bien' },
    'what is your name': { german: 'Wie heißen Sie?', spanish: '¿Cómo te llamas?', french: 'Comment vous appelez-vous?' },
    'my name is': { german: 'Mein Name ist', spanish: 'Me llamo', french: 'Je m\'appelle' },
    'nice to meet you': { german: 'Freut mich', spanish: 'Encantado/a', french: 'Enchanté(e)' },
    'good': { german: 'Gut', spanish: 'Bueno', french: 'Bon' },
    'bad': { german: 'Schlecht', spanish: 'Malo', french: 'Mauvais' },
    'see you later': { german: 'Bis später', spanish: 'Hasta luego', french: 'À plus tard' },
    'welcome': { german: 'Willkommen', spanish: 'Bienvenido/a', french: 'Bienvenue' },
    'congratulations': { german: 'Herzlichen Glückwunsch', spanish: 'Felicidades', french: 'Félicitations' },
    'happy birthday': { german: 'Alles Gute zum Geburtstag', spanish: 'Feliz cumpleaños', french: 'Joyeux anniversaire' },
    'happy new year': { german: 'Frohes Neues Jahr', spanish: 'Feliz año nuevo', french: 'Bonne année' },
    'merry christmas': { german: 'Frohe Weihnachten', spanish: 'Feliz Navidad', french: 'Joyeux Noël' },
    'good afternoon': { german: 'Guten Nachmittag', spanish: 'Buenas tardes', french: 'Bon après-midi' },
    'take care': { german: 'Pass auf dich auf', spanish: 'Cuídate', french: 'Prends soin de toi' }
};

translateBtn.addEventListener('click', translateWord);

function translateWord() {
    const englishValue = englishWordSelect.value;
    if (englishValue && dictionary[englishValue]) {
        germanTranslation.textContent = dictionary[englishValue].german;
        spanishTranslation.textContent = dictionary[englishValue].spanish;
        frenchTranslation.textContent = dictionary[englishValue].french;
    } else {
        alert('Please select a word!');
    }
}
