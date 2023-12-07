interface ICalculator {
  x: number;
  y: number;
  additionNumber(): number;
  substractinNumb(): number;
  multNumbers(): number;
  divisionNumbers(): number;
}

const calculate = (param: ICalculator): number => {
  return param.x + param.y;
};

interface Ibook {
  name: string;
}

interface IAutor extends Ibook {
  autor: string;
}

interface IBookService extends IAutor {
  getInformation(): string;
}

const bookService: IBookService = {
  name: "Harry Potter",
  autor: "Goan Rolling",
  getInformation: (): string =>
    `book name ${bookService.name} autor ${bookService.autor}`,
};
