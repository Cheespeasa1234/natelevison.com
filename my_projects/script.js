const javaCard = document.querySelector('.card-java');
const pythonCard = document.querySelector('.card-python');
const nodeCard = document.querySelector('.card-node');
const cards = [javaCard, pythonCard, nodeCard];

cards.forEach(card => {
    card.addEventListener('click', () => {
        const animationKeyframes = [
            { transform: 'rotateY(0deg) rotate(0deg)' },
            { 
                transform: 'rotateY(180deg) rotate(-10deg)',
                opacity: 0,
            },
            // { transform: 'rotateY(0deg) rotate(0deg)' },
        ];
        const animationOptions = {
            duration: 600,
            // easing rule
            easing: 'ease-in-out',
            iterations: 1,
            fill: 'forwards',
        };
        const anim = card.animate(animationKeyframes, animationOptions);
        anim.onfinish = () => {
            window.location.href = `./${card.classList[1].split("-")[1]}`;
        }
    });
});