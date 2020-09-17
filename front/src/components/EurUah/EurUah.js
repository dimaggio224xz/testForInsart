import React from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../actions'


const EurUan = (props) => {

    return (
        <>
        <tr>
            <td>EUR/UAN</td>
            <td>Jacob</td>
            <td>Thornton</td>
        </tr>
        </>
    )
}


export default connect( null, mapDispatchToProps )(EurUan);