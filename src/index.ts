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
    if(y === 0) throw new Error ('Unexpected value')
    return x / y;
  }
}

const calculate = (
  x: number,
  y: number,
  actions: ActionsCalculator,
  calc: ICalculator
): number => {
  return calc[actions](x,y) as number
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
