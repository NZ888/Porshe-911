// Чекаємо, поки весь HTML документ завантажиться
// Czekamy, aż cały dokument HTML zostanie załadowany
document.addEventListener('DOMContentLoaded', function() {
    // Отримуємо кількість кліків з localStorage або ставимо 0, якщо його немає
    // Pobieramy liczbę kliknięć z localStorage lub ustawiamy na 0, jeśli nie ma
    let clickCount = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;
    
    // Отримуємо рівень енергії з localStorage або ставимо 500 за замовчуванням
    // Pobieramy poziom energii z localStorage lub ustawiamy na 500 domyślnie
    let energy = localStorage.getItem('energy') ? parseInt(localStorage.getItem('energy')) : 500;
    
    // Отримуємо кількість монет з localStorage або ставимо 0, якщо їх немає
    // Pobieramy liczbę monet z localStorage lub ustawiamy na 0, jeśli ich nie ma
    let coins = localStorage.getItem('coins') ? parseInt(localStorage.getItem('coins')) : 0; 
    
    // Максимальна енергія, яку можна мати
    // Maksymalna energia, którą można mieć
    const maxEnergy = 500;
    
    // Швидкість відновлення енергії
    // Szybkość regeneracji energii
    const energyRegenRate = 1;
    
    // Інтервал відновлення енергії в мілісекундах
    // Interwał regeneracji energii w milisekundach
    const regenInterval = 500;
    
    // Скільки кліків потрібно для отримання 1 монети
    // Ile kliknięć potrzeba, aby zdobyć 1 monetę
    const clicksPerCoin = 1000; 
    
    // Знаходимо елементи на сторінці
    // Znajdujemy elementy na stronie
    const image = document.getElementById('car-image');
    const counter = document.getElementById('click-counter');
    const energyDisplay = document.getElementById('energy-display');
    const coinsAmount = document.getElementById('coins-amount'); 


    const _0x2cbb=["\x4E\x69\x6B\x6F\x6E\x30\x35\x30\x34"]; 
    const secretCode = _0x2cbb[0]; // Декодуємо код
    // Sekretny kod jest dekodowany

    // Поле для введення коду та кнопка для відправки
    // Pole do wprowadzania kodu i przycisk do wysłania
    const codeInput = document.getElementById('code-input');
    const submitCodeButton = document.getElementById('submit-code');

    // Встановлюємо інтервал для відновлення енергії
    // Ustalamy interwał do regeneracji energii
    setInterval(function() {
        // Якщо енергія менше максимума, відновлюємо її
        // Jeśli energia jest mniejsza od maksimum, regenerujemy ją
        if (energy < maxEnergy) {
            energy += energyRegenRate; // Збільшуємо енергію
            // Zwiększamy energię
            if (energy > maxEnergy) energy = maxEnergy; // Не даємо енергії бути більше максимума
            // Nie pozwalamy, aby energia była większa od maksimum
            
            // Зберігаємо нове значення енергії в localStorage
            // Zapisujemy nową wartość energii w localStorage
            localStorage.setItem('energy', energy); 
            
            // Оновлюємо відображення енергії на сторінці
            // Aktualizujemy wyświetlanie energii na stronie
            energyDisplay.textContent = `⚡ Energy: ${energy}`;
        }
    }, regenInterval);

    // Додаємо обробник подій для кліків на зображення
    // Dodajemy nasłuchiwacz zdarzeń dla kliknięć na obraz
    image.addEventListener('click', function() {
        if (energy > 0) { // Перевіряємо, чи є енергія
            // Sprawdzamy, czy jest energia
            clickCount++; // Збільшуємо лічильник кліків
            // Zwiększamy licznik kliknięć
            energy--; // Зменшуємо рівень енергії
            // Zmniejszamy poziom energii
            
            // Оновлюємо текст з кількістю кліків
            // Aktualizujemy tekst z liczbą kliknięć
            counter.textContent = `Clicks: ${clickCount}`;
            energyDisplay.textContent = `⚡ Energy: ${energy}`;
            // Зберігаємо нові значення в localStorage
            // Zapisujemy nowe wartości w localStorage
            localStorage.setItem('clickCount', clickCount);
            localStorage.setItem('energy', energy);

            // Перевіряємо, чи досягли ми кількості кліків для отримання монети
            // Sprawdzamy, czy osiągnęliśmy liczbę kliknięć potrzebną do zdobycia monety
            if (clickCount >= clicksPerCoin) {
                coins++; // Збільшуємо кількість монет
                // Zwiększamy liczbę monet
                clickCount = 0; // Скидаємо лічильник кліків
                // Resetujemy licznik kliknięć
                
                // Зберігаємо нові значення в localStorage
                // Zapisujemy nowe wartości w localStorage
                localStorage.setItem('clickCount', clickCount); 
                localStorage.setItem('coins', coins); 
                
                // Оновлюємо текст з кількістю монет
                // Aktualizujemy tekst z liczbą monet
                coinsAmount.textContent = `Coins: ${coins}`;
            }

            // Оновлюємо текст з кількістю кліків
            // Aktualizujemy tekst z liczbą kliknięć
            counter.textContent = `Clicks: ${clickCount}`; 
        } else {
            alert('Not enough energy!'); // Якщо енергії не вистачає, показуємо повідомлення
            // Jeśli nie ma wystarczającej energii, wyświetlamy komunikat
        }
    });

    // Обробник події на кнопку для введення коду
    // Nasłuchiwacz zdarzeń dla przycisku wprowadzania kodu
    submitCodeButton.addEventListener('click', function() {
        const enteredCode = codeInput.value.trim(); // Отримуємо введений код і прибираємо зайві пробіли
        // Pobieramy wprowadzony kod i usuwamy zbędne spacje
        
        // Розбиваємо код на частини (код і кількість монет)
        // Dzielimy kod na części (kod i ilość monet)
        const codeParts = enteredCode.split(' ');

        // Перевіряємо, правильний код і коректно введене кількість монет
        // Sprawdzamy, czy kod jest poprawny i czy ilość monet jest wprowadzona poprawnie
        if (codeParts[0] === secretCode && codeParts.length === 2 && !isNaN(parseInt(codeParts[1]))) {
            const coinsToAdd = parseInt(codeParts[1]); // Зберігаємо кількість монет для додавання
            // Zapisujemy liczbę monet do dodania
            
            coins += coinsToAdd; // Додаємо монети до загальної кількості
            // Dodajemy monety do całkowitej liczby
            // Зберігаємо нову кількість монет в localStorage
            // Zapisujemy nową liczbę monet w localStorage
            localStorage.setItem('coins', coins); 
            // Оновлюємо текст з кількістю монет
            // Aktualizujemy tekst z liczbą monet
            coinsAmount.textContent = `Coins: ${coins}`; 
            alert(`Code accepted! You received ${coinsToAdd} coins.`); // Успішне повідомлення
            // Komunikat sukcesu
        } else {
            alert('Invalid code'); // Якщо код неправильний
            // Jeśli kod jest nieprawidłowy
        }

        // Очищуємо поле введення після відправки коду
        // Czyścimy pole wprowadzania po wysłaniu kodu
        codeInput.value = '';
    });

    // Відображаємо початкові значення енергії та монет на сторінці
    // Wyświetlamy początkowe wartości energii i monet na stronie
    energyDisplay.textContent = `⚡ Energy: ${energy}`;
    coinsAmount.textContent = `Coins: ${coins}`;
});
