//1
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    bookInfo() {
        console.log(`Название книги: ${this.title}`);
        console.log(`Автор: ${this.author}`);
        console.log(`Кол-во страниц: ${this.pages}`);
    }
}

const book = new Book('LearnJS', 'Author', 300);

book.bookInfo();

//2
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    displayInfo() {
        console.log(`Имя: ${this.name}, email: ${this.email}`);
    }
}

const user1 = new User('Nik', 'example@gmail.com');
const user2 = new User('Alex', 'example@outlook.com');
user1.displayInfo();
user2.displayInfo();

//3
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    set width(value) {
        if (value <= 0) {
            console.error('Ширина должна быть положительным числом.');
        } else {
            this._width = value;
        }
    }

    get width() {
        return this._width;
    }

    get perimeter() {
        return this.width + this.height * 2;
    }

    get height() {
        return this._height;
    }

    set height(val) {
        val <= 0 ? console.log('Высота должна быть положительным числом') : this._height = val;
    }
}

const myRect = new Rectangle(5, 10);
console.log(myRect.area); // 50
myRect.width = -3; // Ширина должна быть положительным числом.
console.log(myRect.width); // 5

myRect.height = -5;
console.log(myRect.perimeter);
console.log(myRect.height);

