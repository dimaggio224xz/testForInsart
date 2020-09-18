import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../actions';

import UsdUah from '../UsdUah';
import EurUah from '../EurUah';
import BtcUsd from '../BtcUsd';
import Converter from '../Converter';





const App = (props) => {

    useEffect(()=> {
        props.putExchangeRates()
        const i = setInterval(()=>{
            props.putExchangeRates()
        }, 5000);

        return ()=> clearInterval(i);
    }, [])



    return (
        <>
        <div className='wrapper'>
            <header>
                <div>
                    Text<br/>Logo
                </div>
            </header>
            <main>
                <div className='container'>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <td>Currency/Current <br/>Date</td>
                                <td>Buy</td>
                                <td>Sell</td>
                            </tr>
                        </thead>
                        <tbody>
                            <UsdUah/>

                            <EurUah/>

                            <BtcUsd/>
                        </tbody>
                    </table>

                    <Converter/>

                </div>
            </main>
            <footer>
                2020 all right reserved
            </footer>
        </div>
        </>
    )
}


export default connect( null, mapDispatchToProps )(App);