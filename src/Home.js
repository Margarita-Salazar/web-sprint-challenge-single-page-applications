import  React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

function Home(){
    return (
        <div>
            <h1>Lambda Eats</h1>
            <div className='img-container'>
                <h2>Your favorite food delivered by coding</h2>
                <Link to='/pizza'>
                Pizza
                </Link>
            </div>
        </div>
    )
}
export default Home;