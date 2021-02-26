import  React from 'react';
import { Link } from 'react-router-dom'

function Home(){
    return (
        <div>
            Home
            <Link to='/pizza'>
            Pizza
            </Link>
        </div>
    )
}
export default Home;