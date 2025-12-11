import input from "analiza-sync";

export function searchStock(identifier) {
  let newData = [];
  for (let index = 0; index < data.stocks.length; index++) {
    if (data.stocks[index].id === identifier) {
      newData.push(data.stocks[index]);
    } else if (data.stocks[index].name === identifier) {
      newData.push(data.stocks[index]);
    }
  }
  return newData;
}

export function filterStocksByPrice(givenPrice, above, data) {
  let newData = [];
  if (above) {
    for (let index = 0; index < data.stocks.length; index++) {
      if (data.stocks[index].currentPrice > givenPrice) {
        newData.push(data.stocks[index]);
      }
    }
    if (!above) {
      if (data.stocks[index].currentPrice < givenPrice) {
        newData.push(data.stocks[index]);
      }
    }
  }
  return newData;
}



export function OperateOnStock(operation, identifier) {
  if (operation == "sell") {
    console.log('You have selected a sell action');
    
    for (let index = 0; index < data.stocks.length; index++) {
      if (
        data.stocks[index].id === identifier ||
        data.stocks[index].name === identifier
      ) {
        let stock = data.stocks[index];
        const sumBuy = input("How many utils would you like to sell? ");
        stock.availableStocks += sumBuy;
        stock.previousPrices.push(stock.currentPrice);
        stock.currentPrice *= 0.95;
        data.lastUpdated = new Date();
        for (let cate = 0; cate < data.stocks.length; cate++) {
          if (data.stocks[cate].category === stock.category) {
            data.stock[cate].currentPrice *= 0.99;
          }
        }
      }
    }
    console.log('Your sale was successful');
    
  } else if (operation == "buy") {
    console.log('You have selected a buy action');
    
    for (let index = 0; index < data.stocks.length; index++) {
      if (
        data.stocks[index].id === identifier ||
        data.stocks[index].name === identifier
      ) {
        let stock = data.stocks[index];
        const sumBuy = input("How many utils would you like to buy? ");
        while (sumBuy > stock.availableStocks) {
          console.log("A larger number of utils than there are... try again: ");
          sumBuy = input("How many utils would you like to buy? ");
        }
        stock.availableStocks += sumBuy;
        stock.previousPrices.push(stock.currentPrice);
        stock.currentPrice *= 1.05;
        data.lastUpdated = new Date();
        for (let cate = 0; cate < data.stocks.length; cate++) {
          if (data.stocks[cate].category === stock.category) {
            data.stock[cate].currentPrice *= 1.01;
          }
        }
      }
    }
  }
   console.log('Your buy was successful');
}
