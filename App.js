import "./style.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import {GoogleLogin} from '@react-oauth/google';

const App = () => {
    return(
        <>
            <script src="https://accounts.google.com/gsi/client" async defer></script>
            <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js" async defer></script>
            <div class="main">
                <div class="navbar">
                    <div class="icon">
                        <h2 class="logo">OLX lite</h2>
                    </div>

                    <div class="menu">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">ADMIN</a></li>
                            <li><a href="#">NON-ADMIN</a></li>
                            <li><a href="#">CONTACT</a></li>
                        </ul>
                    </div>

                    <div class="search">
                        <input class="srch" type="search" name="" placeholder= "Type To search" />
                        <a href="#"> <button class="btn">Search</button></a>
                    </div>

                </div> 
                <div class="content">
                    <h1>Used items at <br/><span>the best</span> <br/>price</h1>
                    <p class="par">Hey,we at OLX lite <br/>offer you used things at the best price available.
                        <br/> </p>

                        <button class="cn"><a href="#">JOIN US</a></button>

                        <div class="form">
                            <h2>Login Here</h2>
                            <input type="email" name="email" placeholder="Enter Email Here" />
                            <input type="password" name="" placeholder="Enter Password Here" />
                            <button class="btnn"><a href="#">Login</a></button>

                            <p class="link">Don't have an account ?<br/>
                            <a href="#">Sign up </a> here</p>
                            <p class="liw">Log in with</p>

                            <GoogleOAuthProvider clientId="229751792230-mr0fpshb80j21jfucj0dui2c7hmmridl.apps.googleusercontent.com">
                                <GoogleLogin
                            onSuccess={(credentialResponse) => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                            />
                            </GoogleOAuthProvider>

                            <div class="icons">
                                <a href="src/App.js"><ion-icon name="logo-google"></ion-icon></a>
                            </div>
                        </div>                            
                </div>
            </div>
        </>
    );
};

export default App;
import "./style.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import {GoogleLogin} from '@react-oauth/google';

const App = () => {
    return(
        <>
            <script src="https://accounts.google.com/gsi/client" async defer></script>
            <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js" async defer></script>
            <div class="main">
                <div class="navbar">
                    <div class="icon">
                        <h2 class="logo">OLX lite</h2>
                    </div>

                    <div class="menu">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">ADMIN</a></li>
                            <li><a href="#">NON-ADMIN</a></li>
                            <li><a href="#">CONTACT</a></li>
                        </ul>
                    </div>

                    <div class="search">
                        <input class="srch" type="search" name="" placeholder= "Type To search" />
                        <a href="#"> <button class="btn">Search</button></a>
                    </div>

                </div> 
                <div class="content">
                    <h1>Used items at <br/><span>the best</span> <br/>price</h1>
                    <p class="par">Hey,we at OLX lite <br/>offer you used things at the best price available.
                        <br/> </p>

                        <button class="cn"><a href="#">JOIN US</a></button>

                        <div class="form">
                            <h2>Login Here</h2>
                            <input type="email" name="email" placeholder="Enter Email Here" />
                            <input type="password" name="" placeholder="Enter Password Here" />
                            <button class="btnn"><a href="#">Login</a></button>

                            <p class="link">Don't have an account ?<br/>
                            <a href="#">Sign up </a> here</p>
                            <p class="liw">Log in with</p>

                            <GoogleOAuthProvider clientId="229751792230-mr0fpshb80j21jfucj0dui2c7hmmridl.apps.googleusercontent.com">
                                <GoogleLogin
                            onSuccess={(credentialResponse) => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                            />
                            </GoogleOAuthProvider>

                            <div class="icons">
                                <a href="src/App.js"><ion-icon name="logo-google"></ion-icon></a>
                            </div>
                        </div>                            
                </div>
            </div>
        </>
    );
};

export default App;