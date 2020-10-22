import React from 'react';

class Size extends React.Component{
    render(){
        return(
            <div class="size">
                <h4 class = "filter">Sizes:</h4>
                <Filter fname = "XS" />
                <Filter fname = "S" />
                <Filter fname = "M" />
                <Filter fname = "ML" />
                <Filter fname = "L" />
                <Filter fname = "XL" />
                <Filter fname = "XXL" />
            </div>
        )
    }
}
function Filter(props){
    return(
        <div class="filter-size">
            <label>
                <input type="checkbox" value={props.fname}/>
                <span class="checkmark">{props.fname}</span>
            </label>
        </div>
    )
}

export default Size;