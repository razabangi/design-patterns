"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SampleBook {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
}
class BookAdapter {
    constructor(bookIn) {
        this.book = bookIn;
    }
    getTitleAndAuthor() {
        return `${this.book.getTitle()} by ${this.book.getAuthor()}`;
    }
}
let obj = new SampleBook("Rich and Poor Dad", "Angrez");
let obj2 = new BookAdapter(obj);
console.log(obj2.getTitleAndAuthor());
