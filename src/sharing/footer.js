import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className='footer_footer-start'>
            <footer className="footer_page-footer">
                <div className="footer_top">
                    <div className='footer_main'>
                        <div className='footer_List1'>
                            <div className='footer_logo'>
                                <img src='logo.png'></img>
                                <div class="titles">
                                    <h1 id='first'>Coding Crafters</h1>
                                    <h2 id='second'>Community|Enthusiam|Knowledge</h2>
                                </div>
                            </div>
                        </div>
                        <div className="footer_links">
                            <div className="footer_one">
                                {/* <div>
                                <a id='first-abt' href='/aboutus'>About us </a>
                                </div> */}
                                <div>
                                    <a id='second-gly' class href="/Test1">Gallery</a>
                                </div>
                                <div>
                                    <a id='third-et' class href="/events">Event</a>
                                </div>
                            </div>
                        </div>
                        <div className='footer_links'>
                            <div class="two">
                                <div className='footer_links_contact_us'>
                                    Connect with us :
                                </div>
                                <div className='footer_icon'>
                                    <div className='footer_mail'>
                                        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/agpitcodingcrafters6308%40gmail.com?compose=new">
                                        <img className='footer_gmail' src='gmail.png' alt='gmail'></img>
                                        </a>
                                    </div>
                                    <div className='footer_lkn'>
                                    <a href="https://www.linkedin.com/company/coding-crafter-s/mycompany/">
                                        <img className='footer_linkedin' src='linkedin.png' alt='linkedin'></img>
                                        </a>
                                    </div>
                                    <div className='footer_github'>
                                    <a href="https://github.com/Coding-Crafters">
                                       
                                        <img className='footer_git' src='git.png' alt='github'></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='footer_links' >
                            <div class="three">
                                <div className='footer_links_feedback_to_us'>
                                    Give us your important perspective . <br />Please take a moment to share your feedback

                                </div>
                                <div >
                                <a href='/feedback'>    <button className='footer_btn'>FEEDBACK</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer-Bottom */}
                <div className='footer_footer-bottom'>
                    <div className='footer_bottom'>
                        Copyright © 2023 Coding Crafters
                    </div>
                </div>
            </footer >
        </div>
    )

}

export default Footer;