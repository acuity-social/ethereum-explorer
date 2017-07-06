
import React from 'react';
import {Link} from 'react-router-dom';

export default class Navleft extends React.Component{

    render(){

        return (

            <div className="nav-left">

                <nav>

                    <ul>
                        <li>
                            <Link to="/">
                                <i className="fa fa-line-chart" aria-hidden="true"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/account">
                                <i className="fa fa-balance-scale" aria-hidden="true"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="fa fa-arrows" aria-hidden="true"></i>
                            </Link>
                        </li>
                    </ul>

                </nav>

            </div>

        )

    }

}