const nombre = 'Deadpool';
const real = 'Wade Winston';

const normal = nombre + ' ' + real;

const template = `${nombre} ${real}`;

console.log('normal: ' + normal);
console.log('template: ' + template);

console.log(normal === template); // true


const html = `
<h1>Hola</h1>
<p>Mundo</p>
`;
console.log(html);