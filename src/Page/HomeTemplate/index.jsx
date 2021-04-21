import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../../Components/menu/Navbar';


function LayoutHome(props) {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}


export default function HomeTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}

            render={(propsComponent) => (
                <LayoutHome>

                    <Component {...propsComponent} />
                </LayoutHome>

            )}
        />
    );
}

