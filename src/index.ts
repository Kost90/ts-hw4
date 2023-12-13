enum ActionsCalculator {
  "+" = "addition",
  "-" = "substraction",
  "*" = "mult",
  "/" = "division",
}

type ICalculateMethod = (x: number, y: number) => number;

interface ICalculator {
  addition: ICalculateMethod;
  substractin: ICalculateMethod;
  mult: ICalculateMethod;
  division: ICalculateMethod;
}

class Calculator implements ICalculator {
  public addition(x: number, y: number): number {
    return x + y;
  }
  public substractin(x: number, y: number): number {
    return x - y;
  }
  public mult(x: number, y: number): number {
    return x * y;
  }
  public division(x: number, y: number): number {
    return x / y;
  }
}

const calculate = (
  x: number,
  y: number,
  actions: ActionsCalculator,
  calc: ICalculator
): number => {
  switch (actions) {
    case "addition":
      return calc.addition(x, y);
    case "substraction":
      return calc.substractin(x, y);
    case "mult":
      return calc.mult(x, y);
    case "division":
      return calc.division(x, y);
    default:
      throw new Error("Invalid action type");
  }
};

interface IAutor {
  firstname: string;
  lastname: string;
  books: Ibook[];
}

interface Ibook {
  titel: string;
  cost: number;
  autor: IAutor;
}

interface IBookService {
  add(book: Ibook): void;
}

class BookService implements IBookService {
  private books: Ibook[];

  public add(book: Ibook) {
    this.books.push(book);
  }
}
