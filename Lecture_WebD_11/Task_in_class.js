function createLibrary() {

    let books = [];
    let students = [];

    //  BOOK FUNCTIONS 

    function addBook(bookId, title, author, category) {

        books.push({
            bookId,
            title,
            author,
            category,

            available: true,
            issuedTo: null,

            issueDate: null,
            issueTime: null,

            returnDate: null,
            returnTime: null,

            issueHistory: []
        });

        console.log(title + " added successfully.");
    }

    function removeBook(bookId) {

        let index = books.findIndex(
            book => book.bookId === bookId
        );

        if (index !== -1) {

            books.splice(index, 1);

            console.log("Book removed.");

        } else {

            console.log("Book not found.");
        }
    }

    function searchBook(bookId) {

        let book = books.find(
            book => book.bookId === bookId
        );

        if (book) {

            console.log(book);

        } else {

            console.log("Book not found.");
        }
    }

    function showAllBooks() {

        console.log(books);
    }

    //  STUDENT FUNCTIONS 

    function registerStudent(studentId, name) {

        students.push({
            studentId,
            name,

            issuedBooks: [],

            fine: 0
        });

        console.log(name + " registered successfully.");
    }

    function removeStudent(studentId) {

        let index = students.findIndex(
            student => student.studentId === studentId
        );

        if (index !== -1) {

            students.splice(index, 1);

            console.log("Student removed.");

        } else {

            console.log("Student not found.");
        }
    }

    function viewStudent(studentId) {

        let student = students.find(
            student => student.studentId === studentId
        );

        if (student) {

            console.log(student);

        } else {

            console.log("Student not found.");
        }
    }

    function showAllStudents() {

        console.log(students);
    }

    //  ISSUE BOOK 

    function issueBook(bookId, studentId) {

        let book = books.find(
            book => book.bookId === bookId
        );

        let student = students.find(
            student => student.studentId === studentId
        );

        if (!book || !student) {

            console.log("Book or Student not found.");
            return;
        }

        if (!book.available) {

            console.log("Book already issued.");
            return;
        }

        let currentDate = new Date();

        book.available = false;

        book.issuedTo = student.name;

        book.issueDate =
            currentDate.toLocaleDateString();

        book.issueTime =
            currentDate.toLocaleTimeString();

        student.issuedBooks.push(
            book.title
        );

        book.issueHistory.push({
            studentName: student.name,
            issueDate: book.issueDate,
            issueTime: book.issueTime
        });

        console.log(
            book.title +
            " issued to " +
            student.name
        );

        console.log(
            "Issue Date:",
            book.issueDate
        );

        console.log(
            "Issue Time:",
            book.issueTime
        );
    }

    // RETURN BOOK

    function returnBook(bookId, studentId) {

        let book = books.find(
            book => book.bookId === bookId
        );

        let student = students.find(
            student => student.studentId === studentId
        );

        if (!book || !student) {

            console.log("Book or Student not found.");
            return;
        }

        let currentDate = new Date();

        book.available = true;

        book.issuedTo = null;

        book.returnDate =
            currentDate.toLocaleDateString();

        book.returnTime =
            currentDate.toLocaleTimeString();

        let index =
            student.issuedBooks.indexOf(
                book.title
            );

        if (index !== -1) {

            student.issuedBooks.splice(
                index,
                1
            );
        }

        console.log(
            book.title +
            " returned successfully."
        );

        console.log(
            "Return Date:",
            book.returnDate
        );

        console.log(
            "Return Time:",
            book.returnTime
        );
    }

    //  FINE FUNCTIONS 

    function addFine(studentId, amount) {

        let student = students.find(
            student => student.studentId === studentId
        );

        if (student) {

            student.fine += amount;

            console.log(
                "₹" + amount +
                " fine added."
            );

        } else {

            console.log("Student not found.");
        }
    }

    function payFine(studentId, amount) {

        let student = students.find(
            student => student.studentId === studentId
        );

        if (!student) {

            console.log("Student not found.");
            return;
        }

        student.fine -= amount;

        if (student.fine < 0) {

            student.fine = 0;
        }

        console.log(
            "₹" + amount +
            " fine paid."
        );
    }

    function checkFine(studentId) {

        let student = students.find(
            student => student.studentId === studentId
        );

        if (student) {

            console.log(
                student.name +
                "'s Fine: ₹" +
                student.fine
            );

        } else {

            console.log("Student not found.");
        }
    }

    // HISTORY

    function viewIssueHistory(bookId) {

        let book = books.find(
            book => book.bookId === bookId
        );

        if (book) {

            console.log(
                "Issue History of",
                book.title
            );

            console.log(
                book.issueHistory
            );

        } else {

            console.log("Book not found.");
        }
    }

    // LIBRARY STATS 

    function libraryStats() {

        let issuedBooks = 0;

        for (let book of books) {

            if (!book.available) {

                issuedBooks++;
            }
        }

        console.log(
            "Total Books:",
            books.length
        );

        console.log(
            "Total Students:",
            students.length
        );

        console.log(
            "Currently Issued Books:",
            issuedBooks
        );
    }

    return {
        addBook,
        removeBook,
        searchBook,
        showAllBooks,
        registerStudent,
        removeStudent,
        viewStudent,
        showAllStudents,
        issueBook,
        returnBook,
        addFine,
        payFine,
        checkFine,
        viewIssueHistory,
        libraryStats
    };
}


//  USING THE SYSTEM 

const library = createLibrary();

//Books in Library

library.addBook(
    101,
    "JavaScript Basics",
    "John Doe",
    "Programming"
);

library.addBook(
    102,
    "Data Structures",
    "Mark Allen",
    "Programming"
);

library.addBook(
    103,
    "Computer Networks",
    "Tanenbaum",
    "Networking"
);

library.addBook(
    104,
    "Operating Systems",
    "Galvin",
    "System Design"
);

library.addBook(
    105,
    "Database Management Systems",
    "Korth",
    "Database"
);

library.addBook(
    106,
    "Artificial Intelligence",
    "Stuart Russell",
    "AI"
);

library.addBook(
    107,
    "Machine Learning",
    "Tom Mitchell",
    "AI"
);

library.addBook(
    108,
    "Clean Code",
    "Robert Martin",
    "Software Engineering"
);

library.addBook(
    109,
    "Web Development",
    "David Flanagan",
    "Web"
);

library.addBook(
    110,
    "Cloud Computing",
    "Rajkumar Buyya",
    "Cloud"
);

//regeister students

library.registerStudent(1, "Aryan");

library.registerStudent(2, "Yash");

library.registerStudent(3, "Ashutosh");

library.registerStudent(4, "Shreyansh");

library.registerStudent(5, "Devansh");

library.registerStudent(6, "Aman");

library.registerStudent(7, "Rohit");

library.registerStudent(8, "Ankit");

console.log();

//Book Jo issue hue hai.

library.issueBook(101, 1);

library.issueBook(102, 2);

library.issueBook(103, 3);

library.issueBook(104, 4);

library.issueBook(105, 5);

library.issueBook(106, 6);

console.log();

//TEST
console.log("Test");
library.issueBook(
    102,
    4
);

console.log();

//Fine jo jude hai.

library.addFine(
    1,
    500
);

library.addFine(
    2,
    250
);

library.addFine(
    5,
    1000
);

library.addFine(
    6,
    750
);

console.log();

//Fine jo pay hogye hai.

library.payFine(
    1,
    200
);

library.payFine(
    2,
    100
);

library.payFine(
    6,
    300
);

console.log();

//test
console.log("Test");
library.payFine(
    1,
    10000
);

//check fine

library.checkFine(1);

library.checkFine(2);

library.checkFine(5);

library.checkFine(6);

console.log();

//Return book

library.returnBook(
    101,
    1
);

library.returnBook(
    104,
    4
);

library.returnBook(
    106,
    6
);

console.log();

//Search Book

library.searchBook(103);

library.searchBook(108);

library.searchBook(110);

library.viewIssueHistory(101);

console.log();

//Test
console.log("Test");
library.searchBook(
    999
);

console.log();

library.viewStudent(1);

library.viewStudent(3);

library.viewStudent(5);

library.viewStudent(6);

console.log();

library.searchBook(101);

library.searchBook(103);

library.searchBook(108);

library.searchBook(110);

console.log();

//book ki issue history

library.viewIssueHistory(101);

library.viewIssueHistory(104);

library.viewIssueHistory(106);

console.log();

library.libraryStats();

console.log();

library.showAllBooks();

console.log();

library.showAllStudents();

//Add Book
//Remove Book
//Search Book
//Register Student
//Remove Student
//Issue Book
//Return Book
//Issue Date & Time
//Return Date & Time
//Fine System
//View Student Details
//View Book Details
//View All Books
//View All Students
//Library Statistics
//Issue History