// ==========
// DEPENDENCIES
// ==========

const fs = require("fs");
const util = require("util");

// Creates a promise, which the program will complete before moving on. 
const readFileAsync = util.promisify(fs.readFile);
// Creates a promise, which the program will complete before moving on. 
const writeFileAsync = util.promisify(fs.writeFile);

// Creates a new class called "Store"
// A data array will be created inside of one of the below functions
// getNotes, addNotes, and deleteNotes are the only three remaining
class Store {
    constructor() {
        this.lastId = 0;
    };
    read() {
        return readFileAsync("db/db.json", "utf8");
    };
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    };
    getNotes() {
        return this.read().then(notes => {
            // let parsedNotes = [].concat(JSON.parse(notes));
            let parsedNotes = JSON.parse(notes);
            console.log(parsedNotes);
            return parsedNotes;
        });
    };
    addNotes(notes) {
        //create new obj with notes param using notes.title and notes.text
        console.log(notes);
        // note = [
        //     {
        //         title: "example",
        //         text: "This is an example note."
        //     }
        // ]
        //this.read().then(youll get info back)
        //this.write with old json info and new obj from frontend
    };
    deleteNotes(id) {

    };
};

module.exports = new Store();

