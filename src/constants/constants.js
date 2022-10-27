const services = [
    {
        title: 'Szkolenia PPOŻ i BHP',
        content: 'Wyspecjalizowana kadra przepowadzi odpowiednie szkolenia dostosowane do zaistniałych potrzeb'
    },
    {
        title: 'Instrukcje bezpieczeństwa',
        content: 'Wyspecjalizowana kadra przepowadzi odpowiednie szkolenia dostosowane do zaistniałych potrzeb'
    },
    {
        title: 'Dokumentacja PPOŻ',
        content: 'Przygotowanie dokumentacji do kontroli oraz budynków do odbioru'
    },
    {
        title: 'Ochrona PPOŻ i BHP',
        content: 'Zapewniamy najwyższą ochronę dla firm w temacie PPOŻ i BHP'
    },
    {
        title: 'Przeglądy urządzeń',
        content: 'Przegląd urządzeń przeciwpożarowych'
    }
];

const transition = {
    duration: 1.5,
    ease: [0.43, 0.13, 0.23, 0.96],
};

const returnElVariants = {
    exit: { opacity: 0, y: 50, transition },
    enter: { opacity: 1, y: 0, transition },
};

const slideInNav = {
    exit: {  x: '100%', transition: {duration: .8, type: 'spring'} },
    enter: { x: 0, transition: {duration: .8, delay: .3, type: 'spring'} },
}

export { services, returnElVariants, slideInNav };