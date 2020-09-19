import React from 'react';


const ErrorMSG = () => 
<>
    <div className='error-msg'>
        <div className='error-msg-text'>
            <div>500</div>
            Server error :(
            <br/>
            <a href='https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5' target='_blank'>Server link</a>
        </div>
    </div>
</>;

export default ErrorMSG;