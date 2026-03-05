//Criação de uma timeline do GSAP com animações sincronizadas com o scroll
gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: true, //DEPURAÇÃO 
    },
});

tl.to(
    '#fanta',
    {
        top: '120%', //MOVE O ELEMENTO COM O ID FANTA PARA 120% DO TOPO
        left: '0%', 
    },
    'orange'
); //Nomeando este trecho de animação como 'orange' para sincronização

tl.to(
    '#laranja-cortada',
    {
        top: '160%', //MOVE O ELEMENTO COM O ID 'orange-cut' PARA 160% DO TOPO
        left: '23%', //MOVE O ELEMENTO PARA 23% DA ESQUERDA
    },
    'orange'
); //Sincronizado com a animação nomeada 'orange'

tl.to(
    '#laranja',
    {
        width: '15%',
        top: '160%', 
        right: '10%', 
    },
    'orange'
); //Sincronizado com a animação nomeada 'orange'

tl.to(
    '#folha',
    {
        top: '110%',
        rotate: '530deg', 
        left: '70%', 
    },
    'orange'
); //Sincronizado com a animação nomeada 'orange'

tl.to(
    '#folha2',
    {
        top: '110%',
        rotate: '530deg', 
        left: '0%', 
    },
    'orange'
); //Sincronizado com a animação nomeada 'orange'

//CRIANDO OUTRA TimeLine

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%',
        scrub: true,
        markers: true, //DEPURAÇÃO 
    },
});

//DEFININDO A ANIMAÇÃO DOS ELEMENTOS COM A TIMELINE 'tl2'
tl2.from(
    '.lemon1',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#cocacola',
    {
        rotate: '-90deg',
        right: '-100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '.lemon2',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#pepsi',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.to(
    '#laranja-cortada',
    {
        width: '18%', 
        left: '42%', 
        top: '204%',
    },
    'ca'
);

tl2.to(
    '#fanta',
    {
        width: '35%', 
        left: '33%', 
        top: '210%',
    },
    'ca'
);