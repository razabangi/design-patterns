class SampleBook
{
    private title!: string;
    private author!: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    public getTitle() {
        return this.title;
    }

    public getAuthor() {
        return this.author;
    }
}

class BookAdapter
{
    private book!: SampleBook;

    constructor(bookIn: SampleBook) {
        this.book = bookIn;
    }

    public getTitleAndAuthor() {
        return `${this.book.getTitle()} by ${this.book.getAuthor()}`
    }
}

let obj = new SampleBook("Rich and Poor Dad", "Angrez");
let obj2 = new BookAdapter(obj);
console.log(obj2.getTitleAndAuthor());
