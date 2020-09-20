import calcMainResault from './calcMainResault';

const obj2 ={error: true};
const state = {
    USD_UAH: {
    },
    EUR_UAH: {
    },
    BTC_USD: {
    },
    error: false
}

test('must be false', () => {
    const answ1 = calcMainResault();
    const answ2 = calcMainResault(1, 'BTC', 'USD', obj2);
    const answ3 = calcMainResault(1, 'BTC', 'RUB', {});
    const answ4 = calcMainResault('12px', 'BTC', 'BTC', {});
    const answ5 = calcMainResault(33, 'BTC', 'EUR', state);
    
    expect(answ1).toBeFalsy();
    expect(answ2).toBeFalsy();
    expect(answ3).toBeFalsy();
    expect(answ4).toBeFalsy();
    expect(answ5).toBeFalsy();
});