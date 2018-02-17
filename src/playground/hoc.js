// Higher Order Component - Regular component that renders other components
// Reuse code
// Render Hijacking
// Prop manipulation

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is the info: {props.info}</p>
    </div>
);

const withWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <h1>Confidential</h1>}
            <WrappedComponent {...props} /> 
        </div>
    );
}

const isAuthenticated = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? 
                (
                    <WrappedComponent {...props}/>
                ) :
                (
                     <div><p>Please login to continue.</p><p>Buhahaha!!!</p></div>
                )}
             
        </div>
    );
}
const AuthInfo = isAuthenticated(Info);
const ConfidentialMessage = withWarning(Info);

//ReactDOM.render(<ConfidentialMessage isAdmin={false} info="Nitin Parasa is great"/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Nitin Parasa is great"/>,document.getElementById('app'));




