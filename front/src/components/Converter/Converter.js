import React, { useState } from 'react';
import { connect } from 'react-redux';
import arrowsIcon from '../../icons/arrows.png';

import chackPrice from '../chackPrice';
import calcMainResault from '../calcMainResault';

const mapStateToProps = (store) => ({...store});




const Converter = (props) => {

    const [give, setGive] = useState('');
    const [get, setGet] = useState('');

    const [giveSelect, setGiveSelect] = useState('USD');
    const [getSelect, setGetSelect] = useState('UAH');



    const chackGiveInput = (e) => {
        const value = e.target.value;
        if (chackPrice(value)) {
            setGive(value)
        }
    }

    const giveSelectChange = (e) => {
        const value = e.target.value;
        setGiveSelect(value);
        setGet('');
    } 
    const getSelectChange = (e) => {
        const value = e.target.value;
        setGetSelect(value);
        setGet('');
    } 

    const changeSelects = () => {
        const sel1 = giveSelect;
        const sel2 = getSelect;
        if (sel1 === sel2) {
            return;
        }

        if (get !== '') {
            setGive(get);
            setGet('');
        }
        setGiveSelect(sel2);
        setGetSelect(sel1);
    }

    const calcResult = () => {
        if (props.BTC_USD && props.USD_UAH && props.EUR_UAH) {
            const answer = calcMainResault(give, giveSelect, getSelect, props)
            console.log(answer)
        }

    }



    return (
        <>
        <div className='converter-wrap'>
            <div className='converter'>
                <div className='converter-inputs'>
                    <label>
                        <span>Change</span>
                        <input onChange={(e)=>chackGiveInput(e)} value={give}></input>
                    </label>

                    <select onChange={(e)=>giveSelectChange(e)} value={giveSelect}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="UAH">UAH</option>
                        <option value="BTC">BTC</option>
                    </select>
                </div>

                <button onClick={()=>changeSelects()} className='converter-arrows-btn'>
                    <img src={arrowsIcon}/>
                </button>

                <div className='converter-inputs'>
                    <label>
                        <span>Get</span>
                        <input disabled value={get}></input>
                    </label>

                    <select onChange={(e)=>getSelectChange(e)} value={getSelect}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="UAH">UAH</option>
                        <option value="BTC">BTC</option>
                    </select>
                </div>
            </div>

            <button onClick={()=>calcResult()} className='calc-btn'>Calculate</button>
        </div>
        </>
    )
}

export default connect( mapStateToProps )(Converter);