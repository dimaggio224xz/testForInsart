function calcMainResault(num, s1, s2, p) {
    if (!p.error) {
        num = +num;

        if(s1 === s2) {
            return num;
        }
        else if (s1==='UAH' && s2!=='BTC') {
            return num / p[s2+'_UAH'].newSale;
        }
        else if (s1==='UAH' && s2==='BTC') {
            return num / p.USD_UAH.newSale / p.BTC_USD.newSale;
        }
        else if (s1!=='BTC' && s2==='UAH') {
            return num * p[s1+'_UAH'].newBuy;
        }
        else if (s1==='BTC' && s2==='UAH') {
            return num * p.BTC_USD.newBuy * p.USD_UAH.newBuy;
        }
        else if (s1==='BTC' && s2==='USD') {
            return num * p.BTC_USD.newBuy;
        }
        else if (s1==='BTC' && s2==='EUR') {
            return (num * p.BTC_USD.newBuy) * p.USD_UAH.newSale / p.EUR_UAH.newSale;
        }
        else if (s1==='USD' && s2==='BTC') {
            return num / p.BTC_USD.newSale;
        }
        else if (s1==='USD' && s2==='EUR') {
            return num * p.USD_UAH.newBuy / p.EUR_UAH.newSale;
        }
        else if (s1==='EUR' && s2==='USD') {
            return num * p.EUR_UAH.newBuy / p.USD_UAH.newSale;
        }
        else if (s1==='EUR' && s2==='BTC') {
            return num * p.EUR_UAH.newBuy / p.USD_UAH.newSale / p.BTC_USD.newSale;
        }
        else {
            return false;
        }
    }
    else return false;
}

export default calcMainResault;