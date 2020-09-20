import reducer from './reducer';
import {
    PUT_EXCHANGE_RATES,
    SAVE_BUY_USD,
    SAVE_SALE_USD,
    SAVE_BUY_EUR,
    SAVE_SALE_EUR,
    SAVE_BUY_BTC,
    SAVE_SALE_BTC,
    PUT_ERROR
} from '../actionTypes';

const state = {
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

const action1 = () => ({
    type: PUT_ERROR
})
test('set error true', () => {
    const answ = reducer(state, action1())
    expect(answ.error).toBe(true)
});



const action2 = () => ({
    type: PUT_EXCHANGE_RATES,
    data: {}
})
test('store must be new', () => {
    const answ = reducer(state, action2())
    expect(answ !== state).toBe(true)
});


test('set usd uah newBuy', () => {
    const answ = reducer(state, {type: SAVE_BUY_USD, data: 30})
    expect(answ.USD_UAH.newBuy).toBe(30)
    expect(answ.USD_UAH.changeBuy).toBe(true)
});

test('set usd uah newSale', () => {
    const answ = reducer(state, {type: SAVE_SALE_USD, data: 32})
    expect(answ.USD_UAH.newSale).toBe(32)
    expect(answ.USD_UAH.changeSale).toBe(true)
});


test('set usd uah newBuy', () => {
    const answ = reducer(state, {type: SAVE_BUY_EUR, data: 12})
    expect(answ.EUR_UAH.newBuy).toBe(12)
    expect(answ.EUR_UAH.changeBuy).toBe(true)
});

test('set usd uah newSale', () => {
    const answ = reducer(state, {type: SAVE_SALE_EUR, data: 76})
    expect(answ.EUR_UAH.newSale).toBe(76)
    expect(answ.EUR_UAH.changeSale).toBe(true)
});

test('set usd uah newBuy', () => {
    const answ = reducer(state, {type: SAVE_BUY_BTC, data: 9000})
    expect(answ.BTC_USD.newBuy).toBe(9000)
    expect(answ.BTC_USD.changeBuy).toBe(true)
});

test('set usd uah newSale', () => {
    const answ = reducer(state, {type: SAVE_SALE_BTC, data: 10000})
    expect(answ.BTC_USD.newSale).toBe(10000)
    expect(answ.BTC_USD.changeSale).toBe(true)
});


