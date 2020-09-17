import getData from '../getData';

const putExchangeRates = (data) => {
    return {
        type: 'PUT_EXCHANGE_RATES',
        data
    }
}

const putExchangeRatesTh = () => (dispatch, getState) => {
    let obj = getState();
    return getData()
        .then(res=> {

            for (let key in obj) {
                if (key === 'error') {
                    continue;
                }
                obj[key].buy = res[key].buy;
                obj[key].sale = res[key].sale;

                if (!obj[key].changeBuy) {
                    obj[key].newBuy = res[key].buy;
                }
                if (!obj[key].changeSale) {
                    obj[key].newSale = res[key].sale;
                }
            }

            return dispatch(putExchangeRates({...obj}));
        })
        .catch(err => console.log(err))
};


const mapDispatchToProps = (dispatch) => {
    return {
        putExchangeRates: ()=> dispatch(putExchangeRatesTh())
    }
}

export default mapDispatchToProps;