import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';

// import './style.css';
import './style.scss';

const title = 'Hello, React with Webpack and Babel';

ReactDOM.render(
    <Fragment>
        <i className="fab fa-acquisitions-incorporated"></i>
        <i className="fas fa-biking"></i>
        <i className="fas fa-biking"></i>
        <i className="fas fa-biking"></i>
        <div>{title}</div>
    </Fragment>,
    document.getElementById('app')
);
