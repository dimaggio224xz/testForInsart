export default async function () {
        let error5 = localStorage.getItem('counterError');
        console.log(error5)
        if (error5 >= 5) {
            localStorage.setItem('counterError', 1);
            throw new Error(`WRONG_DATA`);
        }
        else {
            localStorage.setItem('counterError', ++error5)
        }


    const res = await fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
    if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
    const a = await res.json();
    if(a.length !== 4) {
        throw new Error(`WRONG_DATA`);
    }
    const obj = {
        [a[0].ccy + '_' + a[0].base_ccy] : {
            buy: +(+a[0].buy).toFixed(1),
            sale: +(+a[0].sale).toFixed(1)
        },
        [a[1].ccy + '_' + a[1].base_ccy] : {
            buy: +(+a[1].buy).toFixed(1),
            sale: +(+a[1].sale).toFixed(1)
        },
        [a[3].ccy + '_' + a[3].base_ccy] : {
            buy: +(+a[3].buy).toFixed(0),
            sale: +(+a[3].sale).toFixed(0)
        }
    }

    return obj;
}