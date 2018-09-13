const fs = require('fs');

const colors = require('colors');

let data = '';

let getListaTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {


        if (!Number(base) || !Number(limite)) {
            reject(`El valor ${base} o ${limite} No es un numero`);

        }

        console.log('======================='.green);
        console.log(`La tabla del ${base}`.green);
        console.log('======================='.green);


        for (let i = 1; i <= limite; i++) {

            var row = `${base} X ${i} = ${base*i}`;
            data += row;
            console.log(row);
            // return `${base} X ${i} = ${base*i}`;    //En caso de funcion de feclecha es con return 


        }


        resolve(data);

    })



}

let getListaAsync = async(base, limite) => {

    let dato = await getListaTabla(base, limite);

    //  console.log(dato);
    return dato;
}

let genTabla = async(base, limite) => {

    for (let i = 1; i <= limite; i++) {

        data += `${base} X ${i} = ${base*i}\n`;
        // console.log(`${base} X ${i} = ${base*i}`);
    }

    return data;

}

let genArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} No es un numero`);
            return;
        }
        let nombre = `tablas/tabla-${base}.txt`
        genTabla(base, limite).then(datos => {

            fs.writeFile(nombre, datos, (err) => {

                if (err)
                    reject(err);
                else
                    resolve(nombre.green);
            });


        });

    });


}

module.exports = {
    genArchivo,
    getListaTabla,
    getListaAsync
}