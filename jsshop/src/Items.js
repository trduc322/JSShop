import React from 'react';

class Items extends React.Component{
    
    render(){
        return(
        <div class="shelf">   
            <Header/> 
            <Item {...this.props}/>
            <Item {...this.props}/>
            <Item {...this.props}/>
            <Item {...this.props}/>
            <Item {...this.props}/>
        </div>
        )
    }
}

function Item(props){
    return(
        <div class="item">
            <img src = "shirt.jpg"></img>
            <p class="item-title">Checkmate Polo</p>
            <div class="price">
                <small>$</small>
                <b>49</b>
                <span>.99</span>
            </div>
            <div class="add-to-cart-btn">Add to cart</div>
        </div>
    )
}

function Header(){
    return(
        <div class = "shelf-header">
            <small class="product-found">
                <span>
                    5
                    Product(s) found.
                </span>
            </small>
            <div class = "sort">
                Order by
                <select>
                    <option value>Select</option>
                    <option value="lowest">Lowest to highest</option>
                    <option value="highest">Highest to lowest</option>
                </select>
            </div>
        </div>
    )
   
}

export default Items;