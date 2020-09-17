import React from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../actions'

const BtcUsd = (props) => {

    return (
        <>
        <tr>
            <td>BTC/USD</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
        </tr>
        </>
    )
}


export default connect( null, mapDispatchToProps )(BtcUsd);