import React from 'react';

class Cart extends React.Component{
    state = { 
        isOpen: false
    };
    openCart = () =>{
        this.setState({ isOpen: true});
    };
    closeCart = () =>{
        this.setState({ isOpen: false});
    };
    render(){
        let classes = ["cart"];
        if(!!this.state.isOpen){
            classes.push("cart-open");
        }
        return(
            <div class="main-cart">
                <div className={classes.join(" ")}>
                    {this.state.isOpen &&(
                    <div onClick={() => this.closeCart()}
                        className="cart-close-btn">
                        X
                    </div>
                )}
                {!this.state.isOpen && (
                    <span onClick={() => this.openCart()}
                    className="cart-closed">

                    </span>
                )}
                <div className="cart-content">
                    <div className="cart-header">
                        <span className="cart-header-title">Cart</span>
                    </div>
                    <div className="cart-containter">
                        <p className="empty-cart">
                            Add some products in the cart <br/>
                        </p>
                    </div>
                </div>
                </div>
                
            </div>
        )
        
    };

    
    
}



export default Cart;