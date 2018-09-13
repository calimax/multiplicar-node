const fs = require('fs');
const { genArchivo, getListaTabla, getListaAsync } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');


let comando = argv._[0];

switch (comando) {
    case 'listar':

        //getListaTabla(argv.base, argv.limite).then(res => console.log(res)).catch(e => console.log(e));
        getListaTabla(argv.base, argv.limite);

        //console.log('Listar Flecha');

        break
    case 'crear':
        genArchivo(argv.base, argv.limite).then(res => console.log('Archivo Creado', res));
        console.log(comando);
        break
    default:
        console.log(`comando ${comando} no reconocido`);


}
//const multiplicar = require('./multiplicar/multiplicar');




//let base = 'a4';
//let argv2 = process.argv;
// let params = argv[2];
// let base = params.split('=')[1];

//console.log(argv);
//console.log(argv.base);
//console.log('Limite', argv.limite);

// genArchivo(base).then((nombre) => {
//     console.log(nombre);
// }).catch(e => console.log(e))