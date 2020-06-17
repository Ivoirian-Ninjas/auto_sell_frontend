import React from 'react'
import current_user from '../helpers/current_user';


export default function Footer() {
    return (
          <div className="footer_part">
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-5 ml-auto">
                                        <h2 className="footer-heading mb-4">Subscribe</h2>
                                        <ul className="list-unstyled">
                                            {!current_user() ? <React.Fragment>
                                                <li><a href="/login">Login</a></li>
                                                <li><a href="/signup">Sign Up</a></li>
                                            </React.Fragment> :

                                            <li><a href='#'>You are signed in as {current_user().email}</a></li>
                                            }
                                        </ul>
                                    </div>
                                    <div className="col-md-4 ml-auto">
                                        <h2 className="footer-heading mb-4">Features</h2>
                                        <ul className="list-unstyled">
                                            <li><a href="/cars">Cars for sale</a></li>
                                            <li><a href="/about">About us</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <h2 className="footer-heading mb-4">Follow Us</h2>
                                        <a href="https://www.facebook.com/Auto-Sale-102363378195261/?modal=admin_todo_tour"  target="_blank" className="pl-0 pr-3"><span className="fab fa-facebook-f"></span></a>
                                        <a href="https://twitter.com/CK_Auto_Sale"  target="_blank" className="pl-3 pr-3"><span className="fab fa-twitter"></span></a>
                                        <a href="https://www.linkedin.com/company/54332336"  target="_blank" className="pl-3 pr-3"><span className="fab fa-linkedin"></span></a>
                                        <a href="https://www.instagram.com/ck_autosale/"  target="_blank" className="pl-3 pr-3"><span className="fab fa-instagram"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-5 mt-5 text-center">
                            <div className="col-md-12">
                                <div className="border-top pt-5">
                                    <p>
                                        Copyright &copy; All rights reserved | Designed by &nbsp;
                                        <a href="mailto:michel8cloe@gmail.com" target="_blank" className="text_black">michel8cloe</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
        </div>
    )
}
