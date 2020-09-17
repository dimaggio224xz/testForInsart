import React from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../actions'


const UsdUah = (props) => {

    return (
        <>
        <tr>
            <td>USD/UAN</td>
            <td>Mark</td>
            <td>Otto</td>
        </tr>
        </>
    )
}


export default connect( null, mapDispatchToProps )(UsdUah);