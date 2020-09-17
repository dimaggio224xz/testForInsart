import getData from '../getData';

const putExchangeRates = (data) => {
    return {
        type: 'PUT_EXCHANGE_RATES',
        data
    }
}

const saveBuyUsd = (data) => {
    return {
        type: 'SAVE_BUY_USD',
        data
    }
}
const saveSaleUsd = (data) => {
    return {
        type: 'SAVE_SALE_USD',
        data
    }
}

const saveBuyEur = (data) => {
    return {
        type: 'SAVE_BUY_EUR',
        data
    }
}
const saveSaleEur = (data) => {
    return {
        type: 'SAVE_SALE_EUR',
        data
    }
}

const saveBuyBtc = (data) => {
    return {
        type: 'SAVE_BUY_BTC',
        data
    }
}
const saveSaleBtc = (data) => {
    return {
        type: 'SAVE_SALE_BTC',
        data
    }
}

const putExchangeRatesTh = () => (dispatch, getState) => {
    let state = getState();
    let obj = {...state};
    return getData()
        .then(res=> {
            console.log(obj)
            for (let key in obj) {
                if (key === 'error') {
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
                    newObj.newBuy = obj[key].buy;
                }
                if (!obj[key].changeSale) {
                    newObj.newSale = res[key].sale;
                    newObj.changeSale = false;
                } else {
                    newObj.changeSale = true;
                    newObj.newSale = obj[key].sale;
                }
                obj[key] = newObj;
            }

            return dispatch(putExchangeRates({...obj}));
        })
        .catch(err => console.log(err))
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