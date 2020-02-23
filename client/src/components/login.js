import React,{ Component } from "react";

export default class Login extends Component{
    render(){
        return(
            <div className="login-root bg-gradient-primary">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-9 col-lg-12 col-xl-10">
                            <div class="card shadow-lg o-hidden border-0 my-5">
                                <div class="card-body p-0">
                                    <div class="row">
                                        <div class="col-lg-6 d-none d-lg-flex">
                                            <div class="flex-grow-1 bg-login-image login-card"></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="p-5">
                                                <div class="text-center">
                                                    <h4 class="text-dark mb-4">Welcome Back!</h4>
                                                </div>
                                                <form class="user">
                                                    <div class="form-group"><input class="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Username" name="email" /></div>
                                                    <div class="form-group"><input class="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Password" name="password" /></div>
                                                    <div class="form-group">
                                                        <div class="custom-control custom-checkbox small">
                                                            <div class="form-check"><input class="form-check-input custom-control-input" type="checkbox" id="formCheck-1" /><label class="form-check-label custom-control-label" for="formCheck-1">Remember Me</label></div>
                                                        </div>
                                                    </div><button class="btn btn-primary btn-block text-white btn-user" type="submit">Login</button>
                                                    <hr />
                                                </form>
                                                <div class="text-center"><a class="small" href="forgot-password.html">Forgot Password?</a></div>
                                                <div class="text-center"><a class="small" href="register.html">Request an Account</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}