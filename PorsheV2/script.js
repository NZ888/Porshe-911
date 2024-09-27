document.addEventListener('DOMContentLoaded', 
    
    function() {

    let clickCount = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;
    const image = document.getElementById('car-image');
    const counter = document.getElementById('click-counter');

    image.addEventListener('click', 
        
        function() {
        clickCount++;
        counter.textContent = `Clicks: ${clickCount}`;
        localStorage.setItem('clickCount', clickCount);
    });
    
});
