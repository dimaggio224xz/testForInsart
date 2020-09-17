import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../actions'
import pancil from '../../icons/pencil.png';
import checkmark from '../../icons/checkmark.png';
import cross from '../../icons/cross.png';

const UsdUah = (props) => {

    const [buy, setBuy] = useState(0);
    const [sale, setSale] = useState(0);

    const [buyFocus, setBuyFocus] = useState(false);
    const [saleFocus, setSaleFocus] = useState(false);
    const [buyHover, setBuyHover] = useState(false);
    const [saleHover, setSaleHover] = useState(false);

    const chackBuy = (e) => {
        const value = e.target.value;
    }

    const chackSale = (e) => {
        const value = e.target.value;
    }




    const buyPencil = buyHover && !buyFocus ? 'pencil' : 'd-none';
    const salePencil = saleHover && !saleFocus ? 'pencil' : 'd-none';
    const btnBuy = buyFocus ? 'btn-warp' : 'd-none';
    const btnSale = saleFocus ? 'btn-warp' : 'd-none';


    return (
        <>
        <tr>
            <td>USD/UAN</td>

            <td>
                <input onMouseOver={()=>setBuyHover(true)} onMouseOut={()=>setBuyHover(false)}
                    onFocus={()=>setBuyFocus(true)} onBlur={()=>setBuyFocus(false)}
                    onChange={(e)=>chackBuy(e)} value={buy} className='data-input'>
                </input>
                <img className={buyPencil} src={pancil}/>

                <div className={btnBuy}>
                    <button className='btn-save'>
                        <img className='icon-img' src={checkmark}/>
                    </button>
                    <button className='btn-cancel'>
                        <img className='icon-img' src={cross}/>
                    </button>
                </div>
            </td>
            <td>
                <input onMouseOver={()=>setSaleHover(true)} onMouseOut={()=>setSaleHover(false)}
                    onFocus={()=>setSaleFocus(true)} onBlur={()=>setSaleFocus(false)}
                    onChange={(e)=>chackSale(e)} value={sale} className='data-input'>
                </input>
                <img className={salePencil} src={pancil}/>

                <div className={btnSale}>
                    <button className='btn-save'>
                        <img className='icon-img' src={checkmark}/>
                    </button>
                    <button className='btn-cancel'>
                        <img className='icon-img' src={cross}/>
                    </button>
                </div>
            </td>
        </tr>
        </>
    )
}


export default connect( null, mapDispatchToProps )(UsdUah);