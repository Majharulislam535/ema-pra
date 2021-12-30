import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../ContextApi/useAuth';

const Registration = () => {

    const { googleSignIn, error, setError } = useAuth();

    const handleClick = () => {
        googleSignIn()
            .then((result) => {
                setError('')
            })
            .catch((error) => {
                setError(error.massage)
            })
    }


    return (
        <div>
            <div className='App'>
                <h2>Please Registration</h2>
                <form action="">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='enter your Name' />
                    <br />
                    <br />
                    <label htmlFor="">E-mail:</label>
                    <input type="email" placeholder='enter your email' />
                    <br />
                    <br />
                    <label htmlFor="">Password:</label>
                    <input type="password" placeholder='enter your password' />
                    <br />
                    <br />
                    <button className='btn-regular' type="submit">Submit</button>
                </form>
                <p>-------------Or-----------------</p>
                <br />
                <button className='btn-regular' onClick={handleClick}>Google SignIn</button>
                <br />
                <br />
                <Link to='/login'>Already Register</Link>
            </div>
        </div>
    );
};

export default Registration;