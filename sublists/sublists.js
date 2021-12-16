class List {
  constructor(list) {
    this.list = list;
  }
  compare(arrayList) {
    let listOne = this.list.toString();
    let listTwo = arrayList.list.toString();
    console.log(listOne);
    console.log(listTwo);
    if (listOne === listTwo) return "EQUAL";
    if (listTwo.includes(listOne)) return "SUBLIST";
    if (listOne.includes(listTwo)) return "SUPERLIST";
    return "UNEQUAL";
  }
}

const listOne = new List([1, 2, 3]);
const listTwo = new List([1, 2, 3]);

console.log(listTwo.compare(listTwo));
