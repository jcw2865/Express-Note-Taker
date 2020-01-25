// ==========
// DEPENDENCIES
// ==========

const fs = require("fs");
const util = require("util");

// Creates a promise, which the program will complete before moving on. 
const readFileAsync = util.promisify(fs.readFile);
// Creates a promise, which the program will complete before moving on. 
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    constructor() {
        this.lastId = 0;
    };
    read() {
        return readFileAsync("/db.json", "utf8");
    };
    write(note) {
        return writeFileAsync("/db.json", JSON.stringify(note));
    };
    getNotes() {

    };
    addNotes(note) {

    };
    deleteNotes(id) {

    };
};

module.exports = new Store();

