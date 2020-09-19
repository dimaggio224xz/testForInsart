import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../actions';

import UsdUah from '../UsdUah';
import EurUah from '../EurUah';
import BtcUsd from '../BtcUsd';
import Converter from '../Converter';
import ErrorMSG from '../ErrorMSG';

const mapStateToProps = (store) => ({error: store.error});



const App = (props) => {

    useEffect(()=> {
        localStorage.setItem('counterError', 0);

        props.putExchangeRates()
        const i = setInterval(()=>{
            props.putExchangeRates()
        }, 5100);

        return ()=> clearInterval(i);
    }, [])

    const errorStyle = props.error ? 'd-none' : 'd-none';

    return (
        <>
        <div className='wrapper'>
            <header>
                <div className='text-logo'>
                    Currency Exchange
                </div>
            </header>
            <main>
                <div className='container'>
                    <div className='table-responsive'>
                        <table className="table table-bordered">
                            
                            <caption className={errorStyle}>
                                <ErrorMSG/>
                            </caption>

                            <thead>
                                <tr>
                                    <td className='td-style'>Currency/Current <br/>Date</td>
                                    <td className='td-style'>Buy</td>
                                    <td className='td-style'>Sell</td>
                                </tr>
                            </thead>
                            <tbody>
                                <UsdUah/>

                                <EurUah/>

                                <BtcUsd/>
                            </tbody>
                        </table>
                    </div>


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


export default connect( mapStateToProps, mapDispatchToProps )(App);