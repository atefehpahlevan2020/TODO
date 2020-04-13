import React from 'react';
import { Container , Jumbotron as Jumb } from 'react-bootstrap';
import styled from 'styled-components';
import brown from './../../Static/img/brown.jpg';


export const Styles = styled.div`
    .jumbotron {
        background:url(${brown}) no-repeat fixed bottom;
        background-size:cover;
        color:#efefef;
        height:400px;
        position:relative;
        z-index:-2;
    }
    .overlay{
        background-color:#000;
        opacity:0.5;
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index:-1;
    }
    .head{
        text-align:center;
        padding-top:80px;
    }
    .head1{
        text-align:center;
    }
`;

const Jumbotron = () => {
    return (
        <Styles>
            <Jumb fluid className='jumbotron'>
                <div className="overlay"></div>
                <Container>
                    <h1 className='head'>Welcome</h1>
                    <p className='head1'>An application created with React JS and Bootstrap</p>
                </Container>
            </Jumb>
        </Styles>
)
}
export default Jumbotron;