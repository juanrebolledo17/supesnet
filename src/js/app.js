import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import '../scss/main.scss';
import slick from 'slick-carousel';

window.slick = slick;
window.$ = window.jQuery = $;

window.addEventListener('load', () => {
	const moviesSidebarImgs = document.querySelectorAll('.recent-movies .grid-of-movies .movie');
	const seriesSidebarImgs = document.querySelectorAll('.recent-series .grid-of-series .serie');
	const superheroQuotes = [
		{
			author: 'Batman / Bruce Wayne',
			quote: 'Hay una diferencia entre tu y yo. Ambos miramos dentro del abismo, pero cuando el nos miro de vuelta, tú pestañeaste',
		},
		{
			author: 'Miss Marvel / Kamala Khan',
			quote: 'Bueno no es algo que eres, es algo que haces',
		},
		{
			author: 'Batman / Bruce Wayne',
			quote: 'El pesar perdona aquello que nunca debe ser perdonado',
		},
		{
			author: 'Superman / Clark Kent',
			quote: 'Eres mucho más fuerte de lo que crees que eres. Confia en mi',
		},
		{
			author: 'Batman / Bruce Wayne',
			quote: 'Confiar esta en tu adn, no en el mío',
		},
		{
			author: 'Captain America / Steve Rogers',
			quote: 'Cuando las masas y la prensa y el mundo entero te dice que te muevas, tu trabajo es plantarte como un árbol al lado del río de la verdad y decirle al mundo entero: "No, muevete tú"',
		},
		{
			author: 'Wonder Woman / Diana Prince',
			quote: 'Pienso en cada razón que hay para vivir. Madres, hermanas, gorilas y tortas. Volar',
		},
		{
			author: 'Batman / Bruce Wayne',
			quote: 'Tal vez, eso es batman. No triunfar sino fracasar, y recuperarse de nuevo. Sabiendo que fracasará, que fracasará en un millón de ocasiones pero ni así se dentendrá',
		},
		{
			author: 'Miss Marvel / Kamala Khan',
			quote: 'El universo es tan grande, no tiene centro. Nosotros somos el centro',
		},
		{
			author: 'Lex Luthor',
			quote: 'Si Dios es todopoderoso, no es bueno del todo. Y si es bueno del todo, entonces no es todopoderoso',
		},
		{
			author: 'Superman / Clark Kent',
			quote: 'Has el bien a otros y todo hombre puede ser un superhombre',
		},
		{
			author: 'Batman / Bruce Wayne',
			quote: 'Un héroe puede ser cualquiera, incluso alguien que hace algo tan simple como poner un abrigo sobre los hombros de un niño pequeño para hacerle saber que el mundo no ha terminado',
		},
		{
			author: 'Daredevil / Matt Murdock',
			quote: '¿Que hago?, yo peleo',
		},
		{
			author: 'Batman / Bruce Wayne',
			quote: 'No es quien soy en el interior, mis actos son los que me definen',
		},
		{
			author: 'Stephanie Brown / Batgirl',
			quote: 'No todo tiene que ser acerca del miedo. Hay espacio en nuestra línea de trabajo para la esperanza también',
		},
		{
			author: 'Batman / Bruce Wayne',
			quote: '¿Y crees que asesinar es la respuesta?, eso no me haría diferente a ti, pero somos diferentes. Puedo sumergirme en la oscuridad y aun así encontrar la salida. Tú y los otros perdieron el camino',
		},
		{
			author: 'Dr. Octopus / Otto Octavius',
			quote: 'La inteligencia es un privilegio y necesita ser utilizado para el bien mayor de las personas',
		},
		{
			author: 'Lenore Look',
			quote: 'Ser un superhéroe es un trabajo difícil, tienes que salvar el mundo. Pero ir a la escuela es más difícil, tienes que salvarte a ti mismo'
		},
		{
			author: 'Green Lantern / Hal Jordan',
			quote: 'Yo sé lo que es no vivir para llenar las expectativas. Sentir que nada de lo que hagas será suficiente'
		},
		{
			author: 'Wonder Girl / Donna Troy',
			quote: 'No tengo idea de donde voy a estar mañana pero acepto el hecho de que el mañana llegará y que me levantaré a conocerlo'
		},
		{
			author: 'Mr. Furious',
			quote: 'Alguien debe dehaber arrancado la sección "R" de mi diccionario, porque no conozco la palabra "rendirse"'
		},
		{
			author: 'Wanda Maximoff / Scarlet Witch',
			quote: 'Pero la historia de todo el mundo empieza con un "erase una vez" y depende de nosotros compartir el tiempo que tenemos para asegurarnos de vivir felices para siempre'
		},
		{
			author: 'Wonder Woman / Diana Prince',
			quote: 'Es acerca de lo que crees, y yo creo en el amor. Solo el amor verdaderamente salvará al mundo'
		},
		{
			author: 'Daredevil / Matt Murdock',
			quote: 'La violencia no discrimina. Viene tan fría y abrazadora como una brisa de invierno y te deja con una sensación que no puedes quitarte'
		},
		{
			author: 'professor X / Charles Xavier',
			quote: 'Solo por que alguien tropieza y pierde su camino, no significa que no puede ser salvado'
		},
		{
			author: 'Dr. Strange / Stephen Strange',
			quote: 'La fé es mi espada. La verdad mi escudo y el conocimiento mi armadura'
		},
		{
			author: 'The Punisher / Frank Castle',
			quote: 'Quien no castiga el mal, ordena que se haga'
		},
		{
			author: 'Iron Man / Tony Stark',
			quote: 'los héroes estan hechos por el camino que eligen, no por los poderes con los que son agraceados',
		},
		{
			author: 'Green Arrow / Oliver Queen',
			quote: 'Esto. Esto es lo que soy. Esto es quien soy venga lo que venga. Si lo niego, niego todo por que he luchado',
		},
		{
			author: 'Batman / Bruce Wayne',
			quote: 'Si Clark quisiera podría usar su super velocidad para aplastarme contra el cemento. pero sé como piensa, no es solo la kriptonita, tiene otra gran debilidad. Clark en esencia es una buena persona y yo en el fondo, no lo soy',
		},
		{
			author: 'Jim Gordon',
			quote: 'Vas a hacer una diferencia. Muchas veces no será grande, ni siquiera será visible. pero importará de cualquier manera',
		},
		{
			author: 'Nora Allen',
			quote: 'Acepta las cosas que no puedes cambiar, cambia las que si puedes y ten la sabiduría de entender la diferencia',
		},
		{
			author: 'Thomas Wayne',
			quote: '¿Por que caemos?, para aprender a levantarnos'
		},
		{
			author: 'The Punisher / Frank Castle',
			quote: 'Huesos, promesas. ¿Sabes que tienen en común?, ambos se rompen'
		},
		{
			author: 'Spiderman / Peter Parker',
			quote: 'Con un gran poder, viene una gran responsabilidad',
		},
		{
			author: 'The Punisher / Frank Castle',
			quote: 'Eso no es venganza. La venganza no es un móvil válido, es una respuesta emocional. Venganza no, castigo'
		},
		{
			author: 'Spiderman / Peter Parker',
			quote: 'Ningún hombre puede ganar todas las batallas, pero ningún hombre debería caer sin una lucha',
		},
		{
			author: 'The Punisher / Frank Castle',
			quote: 'Tu no sabes lo que es el odio, y que tu vida entera se convierta en una expresión de eso. Nada más importa, nada puede compararse con ello, nada puede saber más dulce'
		},
		{
			author: "Martian Manhunter / J'on J'onzz",
			quote: 'El futuro lo vale. Todo el dolor. todas las lagrimas. El futuro vale la pelea',
		},
		{
			author: 'The Punisher / Frank Castle',
			quote: 'Quien no castiga el mal, ordena que se haga'
		},
		{
			author: 'Superman / Clark Kent',
			quote: 'Yo creo que un héroe es un individuo ordinario que encuentra la fuerza de perseverar y resistir a pesar de los obstaculos'
		},
		{
			author: 'The Punisher / Frank Castle',
			quote: 'Estas son tus herramientas. Lo demás son los lujos de los vivos. Los muertos no tienen música, los muertos no tienen belleza, los muertos no tienen sabor, color, calor o amistad. Porque los muertos no sienten. Los muertos tienen un propósito. Los muertos tienen una misión. Eso es todo lo que tenemos'
		},
		{
			author: 'Green Hornet',
			quote: 'No es morir lo que deberías temer. Es nunca haber vivido en primer lugar'
		},
		{
			author: 'The Punisher / Frank Castle',
			quote: 'El primer disparo debería ser mortal'
		},
		{
			author: 'Daredevil / Matt Murdock',
			quote: 'La depresión es algo vivo. Existe alimentándose de tus humores más oscuros. Y siempre esta hambrienta'
		},
		{
			author: 'Dr. Octopus / Otto Octavius',
			quote: 'El verdadero crimen sería no finalizar lo que empezamos'
		},
		{
			author: 'Professor X / Charles Xavier',
			quote: 'El mayor poder en la tierra es el magnifíco poder que todos nosotros poseemos... el poder del cerebro humano'
		},
		{
			author: 'May Parker',
			quote: 'Yo creo que hay un héroe en todos nosotros. Que nos mantiene honestos, nos da fuerza, nos hace nobles y finalmente nos permite morir con orgullo. Aunque algunas veces debamos ser firmes y renunciar a las cosas que más queremos'
		},
		{
			author: 'The Flash / Barry Allen',
			quote: 'La vida no nos da propósito, nosotros le damos propósito a la vida'
		},
		{
			author: 'Superman / Clark Kent',
			quote: '¿Que sucede cuando una fuerza imparable choca contra un objeto inmovible?, se rinden'
		}
	];
	const quoteContent = document.querySelector('.dynamic-hero-quote');
	const quoteAuthor = document.querySelector('.quote-author');

	function overlayOnHover(elements) {
		elements.forEach(element => {
			element.addEventListener('mouseover', () => {
				element.classList.add('layer');
			});

			element.addEventListener('mouseleave', () => {
				element.classList.remove('layer');
			});
		});
	}

	function changeQuote(quotes) {
		const currentQuote = {};
		const randomNumber = getRandomInt(quotes.length);
		const nextQuote = quotes[randomNumber];

		quoteAuthor.textContent = nextQuote.author;
		quoteContent.textContent = nextQuote.quote;
	}

	function getRandomInt(max) {
		// max++;
		return Math.floor(Math.random() * Math.floor(max));
	}

	overlayOnHover(moviesSidebarImgs);
	overlayOnHover(seriesSidebarImgs);
	changeQuote(superheroQuotes);

	setInterval(() => {
		changeQuote(superheroQuotes);
	}, 43200000);
});

$('.slider-1').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	infinite: true,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 1500,
	responsive: [
		{
			breakpoint: 998,
			settings: {
				slidesToShow: 4,
				arrows: false
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				arrows: false
			}
		},
		{
			breakpoint: 640,
				settings: {
				slidesToShow: 1,
				arrows: false
			}
		}
	]
});
