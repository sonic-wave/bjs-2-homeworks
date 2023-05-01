class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
      this.name = name,
      this.releaseDate = releaseDate,
      this.pagesCount = pagesCount,
      this.state = 100,
      this.type = null
    }
  
    fix() {
      this.state *= 1.5;
    }
  
    set state (number) {
      if (number < 0) {
        this._state = 0;
      } else if (number >100) {
        this._state = 100;
      } else {
        this._state = number;
      }
    }
     
    get state (){
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.state = 100,
      this.type = "magazine";
    }
  } 
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.state = 100,
      this.type = "book";
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.state = 100,
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.state = 100,
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.state = 100,
      this.type = "detective";
    }
  }
  
  class Library {
    constructor(name, books) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
            this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      for (let i = 0; i < this.books.length; i++) {
        for (let key in this.books[i]) {
          if (key === type && this.books[i][key] === value) {
            return (this.books[i]);
          }
        }
      } return null;
    }
  
    giveBookByName(bookName) {
        if (this.books.find(item => item.name === bookName)) {
            let book = this.books.find(item => item.name === bookName);
            this.books = this.books.filter(item => item.name !== bookName);
            return book;
        } return null;
      } 
  }