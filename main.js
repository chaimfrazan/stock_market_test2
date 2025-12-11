import {
  searchStock,
  filterStocksByPrice,
  OperateOnStock,
} from "./market_logic.js";
import { stockMarket } from "./data.js";
import { theMenue } from "./menu.js";
import input from "analiza-sync";

const data = stockMarket;
let booli = true;
console.log('------welcome to stock market------');

while (booli) {
  theMenue();
  let choice = input("please enter your choice: ");
  if (choice == "1") {
    let searchChoice = input('please enter identifier! id or name: ')
    console.log(searchStock(searchChoice));
  }
  else if (choice == "2") {
    let givenPrice = input('please enter a price: ')
    let belowAndAbove = input('please enter above/below of stocks of the your price: ')
    let boolchoice = true
    if (belowAndAbove == 'above') {
        boolchoice = true
    }
    else if (belowAndAbove == below){
        boolchoice = false
    }
    else {belowAndAbove = input('please enter above/below of stocks of the your price: ')}
    console.log(filterStocksByPrice(givenPrice,boolchoice,data));
  }
  else if (choice == "3") {
    let operation = input('enter your operation: ')
    let identifier = input('please enter identifier! id or name: ')
    OperateOnStock(operation,identifier)
  }

}
