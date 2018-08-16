let carros = new Set();
carros.add('Ferrari');
console.log(carros.has('Ferrari')); // true
console.log(carros.has('Honda')); // false
carros.delete('Ferrari');
console.log(carros.has('Ferrari')); // false
let map = new Map();
map.set('server', 'http://git.serpro/');
map.set('project', 'sief-angular');
console.log(map.get('server') + map.get('project'));