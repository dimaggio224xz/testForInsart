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
    const [disabledSale, setDisabledSale] = useState(false);


    const [buyFocus, setBuyFocus] = useState(false);
    const [saleFocus, setSaleFocus] = useState(false);

    const [buyHover, setBuyHover] = useState(false);
    const [saleHover, setSaleHover] = useState(false);

    const [btnBuy, setBtnBuy] = useState('d-none');
    const [btnSale, setBtnSale] = useState('d-none');

    const chack10Buy = value => +value > data.buy + buy10 || +value < data.buy - buy10 ? true : false;
    const chack10Sale = value => +value > data.sale + sale10 || +value < data.sale - sale10 ? true : false;


    useEffect(()=>{
        if(!buyFocus && btnBuy!=='btn-warp') {
            setBuy(data.newBuy);
        }
        if (!saleFocus && btnSale!=='btn-warp') {
            setSale(data.newSale);
        }
    }, [props.BTC_USD])

    const chackBuy = (e) => {

        const value = e.target.value;
        if(chackPrice(value)) {
            setBuy(value);

            if (chack10Buy(value)) {
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

            if (chack10Sale(value)) {
                if(!disabledSale) 
                    setDisabledSale(true);
            } else {
                if(disabledSale) 
                    setDisabledSale(false);
            }
        }
    }



    const onFocusBuy = () => {
        if(chack10Buy(buy)) {
            setDisabledBuy(true)
        } else {
            setDisabledBuy(false)
        }
        setBuyFocus(true);
        setBtnBuy('btn-warp');
    }

    const onFocusSale = () => {
        if(chack10Sale(sale)) {
            setDisabledSale(true)
        } else {
            setDisabledSale(false)
        }
        setSaleFocus(true);
        setBtnSale('btn-warp');
    }

    const onBlurBuy = () => {
        if(chack10Buy(buy)) {
            setDisabledBuy(true)
        } else {
            setDisabledBuy(false)
        }
        setBuyFocus(false);
    }
    
    const onBlurSale = () => {
        if(chack10Sale(sale)) {
            setDisabledSale(true)
        } else {
            setDisabledSale(false)
        }
        setSaleFocus(false);
    }



    const saveBuy= () => {
        if(!chack10Buy(buy)) {
            props.saveBuyBtc(buy);
            setBtnBuy('d-none');
        }
    }

    const saveSale = () => {
        if(!chack10Sale(sale)) {
            props.saveSaleBtc(sale)
        setBtnSale('d-none');
        }
    }

    const cancelBuy = () => {
        setBuy(data.newBuy);
        setBtnBuy('d-none');
    }

    const cancelSale = () => {
        setSale(data.newSale)
        setBtnSale('d-none');
    }


    const buyPencil = buyHover && !buyFocus ? 'pencil' : 'd-none';
    const salePencil = saleHover && !saleFocus ? 'pencil' : 'd-none';


    const btnBuyStyle = disabledBuy ? 'btn-save btn-disabled' : 'btn-save';
    const btnSaleStyle = disabledSale ? 'btn-save btn-disabled' : 'btn-save';

    return (
        <>
        <tr>
            <td className='td-style'>BTC/USD</td>
            
            <td>
                <input onMouseOver={()=>setBuyHover(true)} onMouseOut={()=>setBuyHover(false)}
                    onFocus={()=>onFocusBuy()} onBlur={()=>onBlurBuy()}
                    onChange={(e)=>chackBuy(e)} value={buy} className='data-input'>
                </input>
                <img className={buyPencil} src={pancil} alt='some icon'/>

                <div className={btnBuy}>
                    <button onClick={()=>saveBuy()} className={btnBuyStyle}>
                        <img className='icon-img' src={checkmark} alt='some icon'/>
                    </button>

                    <button onClick={()=>cancelBuy()} className='btn-cancel'>
                        <img className='icon-img' src={cross} alt='some icon'/>
                    </button>
                </div>
            </td>


            <td>
                <input onMouseOver={()=>setSaleHover(true)} onMouseOut={()=>setSaleHover(false)}
                    onFocus={()=>onFocusSale()} onBlur={()=>onBlurSale()}
                    onChange={(e)=>chackSale(e)} value={sale} className='data-input'>
                </input>
                <img className={salePencil} src={pancil} alt='some icon'/>

                <div className={btnSale}>
                    <button onClick={()=>saveSale()} className={btnSaleStyle}>
                        <img className='icon-img' src={checkmark} alt='some icon'/>
                    </button>

                    <button onClick={()=>cancelSale()} className='btn-cancel'>
                        <img className='icon-img' src={cross} alt='some icon'/>
                    </button>
                </div>
            </td>
        </tr>
        </>
    )
}


export default connect( mapStateToProps, mapDispatchToProps )(BtcUsd);