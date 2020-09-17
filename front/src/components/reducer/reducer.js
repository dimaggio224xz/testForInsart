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

        case 'SAVE_BUY_USD':
            return {...state, ...{USD_UAH: {...state.USD_UAH, ...{newBuy: +action.data, changeBuy: true}} }};

        case 'SAVE_SALE_USD':
            return {...state, ...{USD_UAH: {...state.USD_UAH, ...{newSale: +action.data, changeSale: true}} }};

        
        case 'SAVE_BUY_EUR':
            return {...state, ...{EUR_UAH: {...state.EUR_UAH, ...{newBuy: +action.data, changeBuy: true}} }};

        case 'SAVE_SALE_EUR':
            return {...state, ...{EUR_UAH: {...state.EUR_UAH, ...{newSale: +action.data, changeSale: true}} }};

            
        case 'SAVE_BUY_BTC':
            return {...state, ...{BTC_USD: {...state.BTC_USD, ...{newBuy: +action.data, changeBuy: true}} }};

        case 'SAVE_SALE_BTC':
            return {...state, ...{BTC_USD: {...state.BTC_USD, ...{newSale: +action.data, changeSale: true}} }};

        default:
            return state;
    }
    
}


export default reducer;