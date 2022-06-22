import React, {Fragment} from 'react';

function Header({props, hello}){

    return (
        <Fragment>
            <h1 id="main-title" onClick={hello} className="center my-0 py-0 upper">{props}</h1>
        </Fragment>
    )
}

export default Header;