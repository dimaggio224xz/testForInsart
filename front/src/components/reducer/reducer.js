const initialState = {
    USD_UAH: {
        buy: 0,
        sale: 0,
        newBuy: 0,
        newSell: 0,
        changeBuy: false,
        changeSell: false
    },
    EUR_UAH: {
        buy: 0,
        sale: 0,
        newBuy: 0,
        newSell: 0,
        changeBuy: false,
        changeSell: false
    },
    BTC_USD: {
        buy: 0,
        sale: 0,
        newBuy: 0,
        newSell: 0,
        changeBuy: false,
        changeSell: false
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