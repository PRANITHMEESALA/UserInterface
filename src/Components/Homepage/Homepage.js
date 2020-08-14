import React from 'react'
import './Homepage.css'
import logo from '../Assets/custom _ 1/Centralex-logo-horizontal-white@2x.png'
import profile from '../Assets/custom _ 1/Ellipse 7.png'
import notification from '../Assets/custom _ 1/Icon ionic-ios-notifications.svg'
import List from '../Homepage/List'
import Referral from '../Assets/custom _ 1/Referral@2x.png'
import Ellipse from '../Assets/custom _ 1/Ellipse 59.svg'
import Group from '../Assets/custom _ 1/Group 1.png'
import Create from '../Assets/images/Create_account.png'
import Bankacc from '../Assets/images/bank_Account.png'
import Buy from '../Assets/images/Buy&sell.png'
import Dashboard from '../Assets/images/Dashboard_Image.png'
import Group98 from '../Assets/custom _ 1/Group 98.svg'
import bluelogo from '../Assets/custom _ 1/Centralex-logo-horix-blue.png'
import facebook from '../Assets/custom _ 1/Icon awesome-facebook-f.svg'
import twitter from '../Assets/custom _ 1/Icon awesome-twitter.svg'
import insta from '../Assets/custom _ 1/Icon feather-instagram.svg'
import telegram from '../Assets/custom _ 1/Icon awesome-telegram-plane.svg'
import rectangle from '../Assets/custom _ 1/Rectangle 314.svg'









export default function Homepage() {
    return (
        <div>
                
            <div className="container-fluid">
                    <div  className="row part-1"> <br/>
                    <div className="headers d-flex flex-row justify-content-around align-items-baseline">
                
                <div>
                        <img src={logo} alt="logo" />
                </div>
                <div className="clr">
                        EXCHANGE
                </div>
                <div className="clr">
                        PORTFOLIO
                </div>
                <div className="clr">
                        DOWNLOAD APP
                </div>
                <div className="clr">
                        <img src={profile} alt="profile"/>
                </div>
                <div className="clr">RAMA</div>
                <div>
                <img src={notification} alt="notification"/>
                </div>
              
             </div> 
             <div className="Begin">
                     <h1 className="clr">Buy and sell cryptocurrency</h1> <br/>
                     <span className="clr"> Most Easy to trade and manage your cryptocurrency portfolio</span> <br/> <br/><br/>
                   <input type="text" name="" id="" placeholder="Enter your email id" className="sizes"/> 
                   <button className="btn btn-success"> Let's Begin</button>
             </div> 

              <div className=" list ">
             
                        <List/>
                        
              </div>

                    </div>
                  <div className="row part-2">
                  <div>
                                 <img className="ellipse" src={Ellipse} alt=""/>
                         </div>
                  <div className=" invite d-flex flex-row index justify-content-around ">
                        
                        <div className ="index index1  d-flex flex-column ">
                                <h2>Earn Referral up to <br/> $10 worth of crypto</h2> <br/>
                                <p> Once your friend buy or sell $100 of cryptocurrency you <br/> will both get $10 of bitcoin.</p>
                                <button className="btn btn-primary"> Invite </button>
                        </div>
                        <div className ="index d-flex flex-column ">
                                <img src={Referral} alt="" width="280" height="280"/>
                        </div>
                 </div>
                 <div>
                                 <img className="ellipse-2" src={Ellipse} alt=""/>
                         </div>
                  </div>
                 <div className="row part-3">
                        <div className="portfolio  d-flex flex-row justify-content-around p1">
                                <div className="p1 p2">
                                        <img src={Dashboard} alt="" width="650" height="650"/>
                                </div>
                                <div className="p1 d-flex flex-column justify-content-around">
                                                <h1>Create your portfolio</h1>
                                        <ul className="data">
                                                <li> <h2>
                                                Trading for Everyone
                                                        </h2></li>
                                                <li>Easy to use trading platform for beginner and <br/> advanced traders</li>
                                                <li> <h2>
                                                Competitive Rates
                                                        </h2> </li> 
                                                 <li> Start earning crypto with our competitive trading <br/>fees and 2 layer referral system </li>                                      
                                                <li> <h2>
                                                Being Innovative
                                                        </h2> </li>
                                                <li> Centralex is developing revolutionary products <br/> that will benefit the crypto-eco-system as whole </li>
                                                <li>
                                                        <h2>
                                                        Account Transparency
                                                        </h2>
                                                        </li>
                                                <li> All traded assets are on a blockchain or tokenized <br/> real assets, which allows Centralex to show full <br/>liquidity and backing</li>
                                                <li>
                                                        <h2>
                                                        Monitorin & Alerting
                                                        </h2>
                                                </li>
                                                <li> Our securit flagging and AI will monitor all our <br/> system 24/7 in order to safeguard your crypto <br/> assets</li>
                                        </ul>
                                </div>
                        </div>
                        
                 </div>
                 <img className="ellipse3" src={Ellipse} alt="Ellipse"/>
                 <h1 className="head">Most Reliable Exchange </h1>  
                 <div className=" row part-4">  
                                      
                         <div className=" group d-flex flex-row justify-content-between "> 
                         
                
                                <dl className="para">
                                        <dt>
                                         Unrivaled Transparency       
                                        </dt>
                                        <dd>
                                                All traded assets are written to the blockchain and are <br/> 
                                                therefore cryptographically verifiable, which means full <br/> transparency of both accounts and exchange liquidity.
                                        </dd>
                                        <dt> State-of-the-art, multi-layered security </dt>
                                        <dd>
                                                Our system is monitored 24/7 using a combination of cutting- <br/> edge AI. robust security flagging and real-time alers,and we do <br/> not store your private keys.With our high-leve security <br/>
                                                management system you can rest assured that your crypto <br/> assets and transactions are safe and secure.
                                        </dd>
                                        <dt>
                                                Speed and user-friedliness
                                        </dt>
                                        <dd>
                                                Designed for simplicity and with mass adoption in mind,<br/>
                                                Centralex offers ultra-fast trading speeds and an intuitive <br/>
                                                easy-to-use UI for both novice and experienced traders
                                        </dd>
                                </dl>
                         </div>
                         <div className="group">
                                <img src={Group} alt=""/>
                         </div>
                         

                                 

                 </div>
                 <img className="ellipse4" src={Ellipse} alt="Ellipse"/>

                 <div className=" row part-5">
                         <h1 className="header2">How to begin</h1>
                                <div className=" images d-flex flex-row justify-content-around ">
                                        <div className="im d-flex flex-column justify-content-between">
                                        <img  src={Create} alt="Create" height="250"/>
                                         <h4>Create an account</h4>
                                        </div>
                                        <hr className="strip"></hr>
                                        <div className="im horizental"></div>
                                        <div className="im d-flex flex-column justify-content-between">
                                                <img src={Bankacc} alt="" height="250"/>
                                                <h4>Link your bank account</h4>
                                        </div>
                                        <hr className="strip"></hr>
                                        
                                        <div className="im d-flex flex-column justify-content-between">
                                        <img className="im" src={Buy} alt="Buy" height="250"/>
                                                
                                                <h4>Start buying & selling</h4>
                                        </div>
                                </div>
                 </div>
                 <div className=" row part-6">
                 <div className=" invite d-flex flex-row index justify-content-around ">
                        
                        <div className ="index index2  d-flex flex-column ">
                                <h2>Earn Referral up to <br/> $10 worth of crypto</h2> <br/>
                                <p> Once your friend buy or sell $100 of cryptocurrency you <br/> will both get $10 of bitcoin.</p>
                                <button className="btn btn-primary"> Invite </button>
                        </div>
                        <div className ="index d-flex flex-column ">
                                <img className="group98" src={Group98} alt="" width="380" height="380"/>
                        </div>
                 </div>
                 </div>
                 <div className=" row part-7">
                        <div className=" ftr d-flex flex-row f justify-content-around align-items-baseline">
                                <div className="f company d-flex flex-column  justify-content-between  f1">
                                       <div  className="">
                                        <img  className="f1 bluelogo"src={bluelogo} alt=""/> <br/> <br/> <br/> <br/>

                                        <h4 className="">CONTACT WITH US</h4>
                                        <div className=" f d-flex flex-row justify-content-between" >
                                                <img src={twitter} alt=""/>
                                                <img src={telegram} alt=""/>
                                                <img src={facebook} alt=""/>
                                                <img src={insta} alt=""/>
                                                

                                        </div>
                                       </div>
                                        
                                </div>
                                
                                     <ul className="f product d-flex flex-column ">
                                             <li> <h4>PRODUCT</h4></li>
                                             <li>Centralex</li>
                                             <li>Commerce </li>
                                             <li>Custody</li>
                                             <li>Earn</li>
                                             <li>Pro</li>
                                             <li>USD Coin</li>
                                             <li>Wallet</li>
                                             <li>Ventures</li>
                                     </ul>   
                                     <ul className="f company1 d-flex flex-column ">
                                             <li> <h4>COMPANY</h4></li>
                                             <li>About</li>
                                             <li>Affiliates </li>
                                             <li>Careers</li>
                                             <li>Partners</li>
                                             <li>Press</li>
                                             <li>Legal & Privacy</li>
                                             <li>Support</li>
                                             
                                     </ul>   
                                     <ul className="f learn d-flex flex-column ">
                                             <li> <h4>LEARN</h4></li>
                                             <li>What is Bitcoin</li>
                                             <li>Buy Crypto </li>
                                             <li>Supported countries</li>
                                             
                                             
                                     </ul> 
                                
                        </div>
                 </div>
                 <div className=" row part-8">
                        <h4 className="copyright" >@Copyright 2018 - 2020 Centralex Group Ltd.</h4>
                 </div>
            </div>   
        </div>
    )
}
