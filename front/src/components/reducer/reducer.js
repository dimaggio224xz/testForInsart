const initialState = {
    USD_UAH: {
        buy: 0,
        sale: 0,
        newBuy: 0,
        newSale: 0,
        changeBuy: false,
        changeSale: false
    },
    EUR_UAH: {
        buy: 0,
        sale: 0,
        newBuy: 0,
        newSale: 0,
        changeBuy: false,
        changeSale: false
    },
    BTC_USD: {
        buy: 0,
        sale: 0,
        newBuy: 0,
        newSale: 0,
        changeBuy: false,
        changeSale: false
    },
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case 'PUT_EXCHANGE_RATES':
            return {...state, ...action.data};

        default:
            return state;
    }
    
}


export default reducer;