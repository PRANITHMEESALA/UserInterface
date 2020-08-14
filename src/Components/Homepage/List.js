import React, { Component } from 'react'
import './List.css'


export default class List extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[
                {logo:require('../Assets/custom _ 1/BTC.png'),Name:"BTC",Abbrevation:"Bitcoin",         Price:"9427.70",Changes:"-0.37", MarketCap:9427.70,Trade:"Buy"},
                {logo:require('../Assets/custom _ 1/ETH.png'),Name:"ETH",Abbrevation:"Ethereum",        Price:"219.16", Changes:"+3.44", MarketCap:219.16, Trade:"Buy"},
                {logo:require('../Assets/custom _ 1/EOS.png'),Name:"EOS",Abbrevation:"EOS",             Price:"2.6086", Changes:"+10.05",MarketCap:2.6086, Trade:"Buy"},
                {logo:require('../Assets/custom _ 1/BCH.png'),Name:"BCH",Abbrevation:"BitCoin Cash",    Price:"236.08", Changes:"+7.4",  MarketCap:236.08, Trade:"Buy"},
                {logo:require('../Assets/custom _ 1/BSV.png'),Name:"BSV",Abbrevation:"BitCoin SV",      Price:"188.99", Changes:"+6.7",  MarketCap:188.99, Trade:"Buy"},
                {logo:require('../Assets/custom _ 1/RSR.png'),Name:"RSR",Abbrevation:"Cordona",         Price:"9427.70",Changes:"+3.44", MarketCap:9427.70,Trade:"Buy"},
                {logo:require('../Assets/custom _ 1/ADA.png'),Name:"ADA",Abbrevation:"Ethereum Classic",Price:"219.16", Changes:"+10.05",MarketCap:219.16, Trade:"Buy"},
                {logo:require('../Assets/custom _ 1/ETC.png'),Name:"ETC",Abbrevation:"Litecoin",        Price:"2.6086", Changes:"+7.4",  MarketCap:2.6086, Trade:"Buy"},
                {logo:require('../Assets/custom _ 1/LTC_LOGO.png'),Name:"LTC",Abbrevation:"Tronix",          Price:"236.08", Changes:"+6.7",  MarketCap:236.08, Trade:"Buy"},
                {logo:require('../Assets/custom _ 1/TROn.png'),Name:"TRX",Abbrevation:"Reverse Rights",  Price:"188.99", Changes:"+3.44", MarketCap:188.99, Trade:"Buy"}
            
            ]
        }
    }
    
    render() {
        const styles= {
         Color: this.state.list.find(key=>{
           return  key.Changes < 1 ? "red":"green";
            })   
        }
        
        var output = this.state.list.map(item=>{
                    return(
                        

                            <tbody>
                            <tr> 
                                 <td >
                                     <img className="mar" src={item.logo} alt=""/>
                                     {item.Name}
                                     </td>
                                <td className="abbr">{item.Abbrevation}</td>
                                <td className="price">${item.Price}</td>
                                <td className="changes" style={styles} >{item.Changes }</td>
                                <td className="market">{item.MarketCap}</td>
                                <td className="Trade"> <button>{item.Trade}</button></td>
                            </tr>
                            </tbody>
                            
                                
                    
                                
                        
              
                    );
        })
        return (
            <div >
                <div className="list">
                
                <table className ="headings ">
                    <thead>
                    <tr >
                                  <th> Name</th>
                                  <th>   </th>
                                  <th>Price</th>
                                  <th> Changes</th>
                                  <th>Market Cap</th>
                                  <th>Trade</th>
                            </tr>

                    </thead>
                    {output}
                  </table>
                  
                        </div>
                    
                
            
                
            </div>
        )
    }
}
