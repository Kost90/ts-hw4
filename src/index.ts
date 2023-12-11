interface ICalculator {
  x: number;
  y: number;
  additionNumber(x: number, y: number): number;
  substractinNumb(x: number, y: number): number;
  multNumbers(x: number, y: number): number;
  divisionNumbers(x: number, y: number): number;
}

const calculate = (param: ICalculator): number => {
  return param.x + param.y;
};

interface Ibook {
  titel: string;
  cost: number;
}

interface IAutor {
  firstname: string;
  lastname: string;
}

interface IBookService {
  book: Ibook;
  autor: IAutor;
  getInformation(book: Ibook, autor: IAutor): string;
}

const bookService: IBookService = {
  book: {
    titel: "Harry Potter",
    cost: 100,
  },
  autor: {
    firstname: "Goan",
    lastname: "Rolling",
  },
  getInformation: (): string =>
    `book name ${bookService.book.titel} autor ${bookService.autor.firstname} ${bookService.autor.lastname}`,
};
