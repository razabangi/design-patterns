### Structural Patterns
## => Adapter

In the Adapter Design Pattern, a class converts the interface of one class to be what another class expects.

In this example we have a SimpleBook class that has a getAuthor() and getTitle() methods. 
The client, expects a getAuthorAndTitle() method. To "adapt" SimpleBook for testAdapter we have an adapter class, 
BookAdapter, which takes in an instance of SimpleBook, and uses the SimpleBook getAuthor() and getTitle() methods in it's own getAuthorAndTitle() method.

Adapters are helpful if you want to use a class that doesn't have quite the exact methods you need, 
and you can't change the orignal class. The adapter can take the methods you can access in the original class, 
and adapt them into the methods you need.

```typescript
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
```