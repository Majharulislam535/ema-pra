import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../ContextApi/useAuth';
import useFirebase from '../Firebase/useFirebase';

const Login = () => {

    const { googleSignIn, setUser, user, setError, error } = useAuth();
    let navigate = useNavigate();
    const { state } = useLocation();

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then((result) => {
                navigate(state?.path || "/placeOrder");
                setError('');
            })
            .catch((error) => {
                setError(error.massage);
            })
    }

    return (
        <div>
            <div className='App'>
                <h2>Please Login</h2>
                <form action="">
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
                <button onClick={handleGoogleLogIn} className='btn-regular'>Google SignIn</button>
                <br />
                <br />
                <Link to='/registration'>New user</Link>
                {
                    <p>{error}</p>
                }
            </div>
        </div>
    );
};

export default Login;