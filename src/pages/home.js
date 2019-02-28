import React from 'react';
import PrivateRoute from '../components/PrivateRoute';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from '../components/layout'

const Home = () => {
    return (
        <Layout>
                        <div>This is home screen </div>
        </Layout>
    )
}

const profile = () => {
    return (
        <Layout>
            <div>This is profile page 2 </div>
        </Layout>
    )
}


const home = () =>
    typeof window !== `undefined` ? (
        <Router>
            <div>
                <Route exact path="/home" component={Home} />
                <PrivateRoute path="/home/profile" component={profile} />
            </div>
        </Router>
    ) : null;

export default home;
