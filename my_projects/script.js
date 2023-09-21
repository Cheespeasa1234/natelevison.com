const javaCard = document.querySelector('.card-java');
const pythonCard = document.querySelector('.card-python');
const nodeCard = document.querySelector('.card-node');
const webCard = document.querySelector('.card-web');
const cards = [javaCard, pythonCard, nodeCard];

cards.forEach(card => {
    card.addEventListener('click', () => {
    	card.style.cursor = "wait";
	card.animate([
            {transform:'rotateY(0deg) rotate(0deg)'},{transform:'rotateY(180deg) rotate(-10deg) translateY(-100px)',opacity:0}
        ], {
            duration: 500,
            easing: 'ease-in-out',
            iterations: 1,
            fill: 'forwards',
        }).onfinish = () => {
            setTimeout(()=>{
		card.style.cursor = "default";
		card.animate([
		    {transform:'translateY(-100px)', opacity: 0}, {transform:'translateY(0px)', opacity: 1}
		], {
		    duration: 500,
		    easing: 'ease-in-out',
		    iterations: 1,
		    fill: 'forwards'
		});
	    },2000);
	    window.location.href = `./${card.classList[1].split("-")[1]}`;
        };
    });
});
