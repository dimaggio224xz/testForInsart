import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../actions'
import pancil from '../../icons/pencil.png';
import checkmark from '../../icons/checkmark.png';
import cross from '../../icons/cross.png';
import chackPrice from '../chackPrice';

const mapStateToProps = (store) => ({...store});




const BtcUsd = (props) => {

    const data = props.BTC_USD;
    const buy10 = (data.buy /100) * 10;
    const sale10 = (data.sale /100) * 10;


    const [buy, setBuy] = useState(0);
    const [sale, setSale] = useState(0);


    const [disabledBuy, setDisabledBuy] = useState(false);
    const [disabledSalse, setDisabledSale] = useState(false);


    const [buyFocus, setBuyFocus] = useState(false);
    const [saleFocus, setSaleFocus] = useState(false);

    const [buyHover, setBuyHover] = useState(false);
    const [saleHover, setSaleHover] = useState(false);

    const [btnBuy, setBtnBuy] = useState('d-none');
    const [btnSale, setBtnSale] = useState('d-none');

    // const btnBuy = buyFocus || buy !== data.newBuy ? 'btn-warp' : 'd-none';
    // const btnSale = saleFocus || sale !== data.newSale ? 'btn-warp' : 'd-none';

    useEffect(()=>{
        if(!buyFocus) {
            setBuy(data.newBuy);
        }
        if (!saleFocus) {
            setSale(data.newSale);
        }
    })

    const chackBuy = (e) => {

        const value = e.target.value;
        if(chackPrice(value)) {
            setBuy(value);

            if (+value > data.buy + buy10 || +value < data.buy - buy10) {
                if(!disabledBuy) 
                    setDisabledBuy(true);
            } else {
                if(disabledBuy) 
                    setDisabledBuy(false);
            }
        }
        
    }

    const chackSale = (e) => {
        const value = e.target.value;
        if(chackPrice(value)) {
            setSale(value);

            if (+value > data.sale + sale10 || +value < data.sale - sale10) {
                if(!disabledBuy) 
                    setDisabledSale(true);
            } else {
                if(disabledBuy) 
                    setDisabledSale(false);
            }
        }
    }


    const saveBuy= () => {
        props.saveBuyBtc(buy);
        setBtnBuy('d-none');
    }

    const saveSale = () => {
        props.saveSaleBtc(sale)
        setBtnSale('d-none');
    }

    const cancelBuy = () => {
        setBuy(data.newBuy);
        setBtnBuy('d-none');
    }

    const cancelSale = () => {
        setBuy(data.newSale)
        setBtnSale('d-none');
    }


    const buyPencil = buyHover && !buyFocus ? 'pencil' : 'd-none';
    const salePencil = saleHover && !saleFocus ? 'pencil' : 'd-none';




    return (
        <>
        <tr>
            <td>BTC/USD</td>
            
            <td>
                <input onMouseOver={()=>setBuyHover(true)} onMouseOut={()=>setBuyHover(false)}
                    onFocus={()=>{setBuyFocus(true); setBtnBuy('btn-warp')}} onBlur={()=>{setBuyFocus(false); setDisabledBuy(false)}}
                    onChange={(e)=>chackBuy(e)} value={buy} className='data-input'>
                </input>
                <img className={buyPencil} src={pancil}/>

                <div className={btnBuy}>
                    <button disabled={disabledBuy} onClick={()=>saveBuy()} className='btn-save'>
                        <img className='icon-img' src={checkmark}/>
                    </button>

                    <button onClick={()=>cancelBuy()} className='btn-cancel'>
                        <img className='icon-img' src={cross}/>
                    </button>
                </div>
            </td>


            <td>
                <input onMouseOver={()=>setSaleHover(true)} onMouseOut={()=>setSaleHover(false)}
                    onFocus={()=>{setSaleFocus(true); setBtnSale('btn-warp')}} onBlur={()=>{setSaleFocus(false); setDisabledSale(false)}}
                    onChange={(e)=>chackSale(e)} value={sale} className='data-input'>
                </input>
                <img className={salePencil} src={pancil}/>

                <div className={btnSale}>
                    <button disabled={disabledSalse} onClick={()=>saveSale()} className='btn-save'>
                        <img className='icon-img' src={checkmark}/>
                    </button>

                    <button onClick={()=>cancelSale()} className='btn-cancel'>
                        <img className='icon-img' src={cross}/>
                    </button>
                </div>
            </td>
        </tr>
        </>
    )
}


export default connect( mapStateToProps, mapDispatchToProps )(BtcUsd);