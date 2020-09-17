import getData from '../getData';

const putExchangeRates = (data) => {
    return {
        type: 'PUT_EXCHANGE_RATES',
        data
    }
}

const putExchangeRatesTh = () => (dispatch, getState) => {
    return getData()
        .then(res=> {
            console.log(res)
        })
        .catch(err => console.log(err))
};


const mapDispatchToProps = (dispatch) => {
    return {
        putExchangeRates: ()=> dispatch(putExchangeRatesTh())
    }
}

export default mapDispatchToProps;