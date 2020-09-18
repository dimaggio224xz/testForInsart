import getData from '../getData';

const putExchangeRates = (data) => {
    return {
        type: 'PUT_EXCHANGE_RATES',
        data
    }
}

const saveBuyUsd = (data) => {
    console.log(data)
    return {
        type: 'SAVE_BUY_USD',
        data: +((+data).toFixed(1))
    }
}
const saveSaleUsd = (data) => {
    return {
        type: 'SAVE_SALE_USD',
        data: +((+data).toFixed(1))
    }
}

const saveBuyEur = (data) => {
    return {
        type: 'SAVE_BUY_EUR',
        data: +((+data).toFixed(1))
    }
}
const saveSaleEur = (data) => {
    return {
        type: 'SAVE_SALE_EUR',
        data: +((+data).toFixed(1))
    }
}

const saveBuyBtc = (data) => {
    return {
        type: 'SAVE_BUY_BTC',
        data: +((+data).toFixed(0))
    }
}
const saveSaleBtc = (data) => {
    return {
        type: 'SAVE_SALE_BTC',
        data: +((+data).toFixed(0))
    }
}

const putError = () => {
    return {
        type: 'PUT_ERROR'
    }
}

const putExchangeRatesTh = () => (dispatch, getState) => {
    let state = getState();
    let obj = {...state};
    return getData()
        .then(res=> {

            for (let key in obj) {
                if (key!=='USD_UAH' && key!=='EUR_UAH' && key!=='BTC_USD') {
                    continue;
                }
                let newObj = {}
                newObj.buy = res[key].buy;
                newObj.sale = res[key].sale;
                
                if (!obj[key].changeBuy) {
                    newObj.newBuy = res[key].buy;
                    newObj.changeBuy = false;
                } else {
                    newObj.changeBuy = true;
                    newObj.newBuy = obj[key].newBuy;
                }

                if (!obj[key].changeSale) {
                    newObj.newSale = res[key].sale;
                    newObj.changeSale = false;
                } else {
                    newObj.changeSale = true;
                    newObj.newSale = obj[key].newSale;
                }
                obj[key] = newObj;
            }
            obj.error = false;
            return dispatch(putExchangeRates({...obj}));
        })
        .catch(err => dispatch(putError()))
};


const mapDispatchToProps = (dispatch) => {
    return {
        putExchangeRates: ()=> dispatch(putExchangeRatesTh()),
        saveSaleBtc: (data)=> dispatch(saveSaleBtc(data)),
        saveBuyBtc: (data)=> dispatch(saveBuyBtc(data)),
        saveSaleEur: (data)=> dispatch(saveSaleEur(data)),
        saveBuyEur: (data)=> dispatch(saveBuyEur(data)),
        saveSaleUsd: (data)=> dispatch(saveSaleUsd(data)),
        saveBuyUsd: (data)=> dispatch(saveBuyUsd(data))
    }
}

export default mapDispatchToProps;