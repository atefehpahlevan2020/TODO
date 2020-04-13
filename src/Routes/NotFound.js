import React from 'react';
import './../Static/NotFound.css';
import Layout from './../Components/Layouts/Layout';

function NotFound() {

    return (
        <Layout>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>Oops!</h1>
                    </div>
                    <h2>404 - Page not found</h2>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <a href="http://localhost:3000/">Homepage</a>
                </div>
            </div>
        </Layout>
    )
}
export default NotFound;
