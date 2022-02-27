// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, pages, timesCheckedOut, discarded) {
      title = this.title;
      author = this.author;
      copyrightDate = this.copyrightDate;
      isbn = this.isbn;
      pages = this.pages;
      timesCheckedOut = this.timesCheckedOut;
      discarded = this.discarded;
    }
  
    checkout(uses = 1) {
      this.timesCheckedOut += uses;
    }
  }
  
  // Define your Manual and Novel classes here:
  class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
      super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
  
    dispose(currentYear) {
      if (currentYear - this.copyright > 5) {
        this.discarded = true;
      }
    }
  
  }
  
  class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
      super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
  
    dispose() {
      if (this.timesCheckedOut > 100) {
        this.discarded = true;
      }
    }
  }
  
  // Declare the objects for exercises 2 and 3 here:
  let prideAndPrejudice= new Novel("Pride and Prejudice", "Jane Austen",1813, 1111111111111,432, 32, false );
  
  let topSecretShuttleBuilding = new Manual ("Top Secret Shuttle Building Manual",  "Redacted", 2013, 0000000000000, 1147, 1, false );
  
