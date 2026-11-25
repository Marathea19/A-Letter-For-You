
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openStory() {
    showScreen('intro');
}

function next(id) {
    showScreen(id);
}

function answer(choice) {
    const response = document.getElementById('response');

    if (choice === 'yes') {
        response.innerHTML =
            "Well, you definitely made someone smile. And that someone is me. ♡";
    } else {
        response.innerHTML =
            "Then allow me to tell you: you've made me smile more times than you know.";
    }

    document.getElementById('questionNext').style.display = 'inline-block';
}

function revealSecret() {
    document.getElementById('secretNote').style.display = 'block';
}

function finalAnswer(answer) {
    const response = document.getElementById('finalResponse');

    if (answer === 'yes') {
        response.innerHTML =
            "<div class='note'>You have no idea how happy this makes me. Thank you for giving me this chance. I'll do my best to make it meaningful. ♡</div>";
    } else if (answer === 'maybe') {
        response.innerHTML =
            "<div class='note'>Of course. We can take things one step at a time. I don't mind being patient. Your comfort matters to me. ♡</div>";
    } else {
        response.innerHTML =
            "<div class='note'>Thank you for being honest with me. I respect your feelings, and I appreciate you taking the time to read my little story. ♡</div>";
    }
}

// Floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '♥';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (12 + Math.random() * 20) + 'px';
    heart.style.animationDuration = (6 + Math.random() * 5) + 's';

    document.getElementById('hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 11000);
}

setInterval(createHeart, 900);
