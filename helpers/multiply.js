const { Console } = require('console');
const colors = require('colors');
const fs = require('fs');

const createFile = async ( base = 5, list, final ) => {
    let output = `
==============================
        TABLE OF ${base}
==============================
`;
    for (let i = 1; i <= final; i++) {
        output += `\t\t${base} x ${i} = ${base * i}\n`;
    }
    try {
        if (list) {
            console.log(colors.rainbow(output));
        }
        return await buildFile(output, base);
    } catch (error) {
        throw error;
    }
}


const buildFile = (output, base) => {
    const nameFile = `table-${base}.txt`;
    fs.writeFileSync(`./output/${nameFile}`, output);
    return nameFile;
}

module.exports = {
    createFile
}