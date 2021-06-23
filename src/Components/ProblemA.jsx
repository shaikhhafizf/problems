import React, { Component } from 'react';

class ProblemA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groceries: ['Blueberry', 'Banana', 'Apple', 'Parle', 'Cake', 'Biscuits'],
            basket: []
        }
    }
    add = (name) => () => {
        var basket = this.state.basket, already = true
        basket.map(data => {
            if (data === name) {
                already = false
            }
        })
        if (already) basket.push(name)
        this.setState({
            basket
        })
    }
    remove = (name) => () => {
        var basket = this.state.basket
        basket = basket.filter(data => data !== name)
        this.setState({
            basket
        })
    }
    render() {
        return (
            <div>
                <div className='ComponentHeader'>
                    <svg viewBox="0 0 512 512" enable-background="new 0 0 512 512">
                        <path d="M461.5,222h-411c-11.046,0-20,8.954-20,20l40,207c0,11.046,8.954,20,20,20h331c11.046,0,20-8.954,20-20l40-207  C481.5,230.954,472.546,222,461.5,222z M138,403.5c0,5.799-4.701,10.5-10.5,10.5H127.5c-5.799,0-10.5-4.701-10.5-10.5v-117  c0-5.799,4.701-10.5,10.5-10.5h0.001c5.799,0,10.5,4.701,10.5,10.5V403.5z M204,403.5c0,5.799-4.701,10.5-10.5,10.5H193.5  c-5.799,0-10.5-4.701-10.5-10.5v-117c0-5.799,4.701-10.5,10.5-10.5h0.001c5.798,0,10.5,4.701,10.5,10.5V403.5z M266,403.5  c0,5.799-4.701,10.5-10.5,10.5H255.5c-5.799,0-10.5-4.701-10.5-10.5v-117c0-5.799,4.701-10.5,10.5-10.5h0.001  c5.798,0,10.5,4.701,10.5,10.5V403.5z M331,403.5c0,5.799-4.701,10.5-10.5,10.5s-10.5-4.701-10.5-10.5v-117  c0-5.799,4.701-10.5,10.5-10.5s10.5,4.701,10.5,10.5V403.5z M396,403.5c0,5.799-4.701,10.5-10.5,10.5s-10.5-4.701-10.5-10.5v-117  c0-5.799,4.701-10.5,10.5-10.5s10.5,4.701,10.5,10.5V403.5z" />
                        <path d="M416.595,121.376c-3.04-25.57-25.181-47.13-50.66-50.02c-7.088-0.521-30.334-0.401-46.035-0.348  C318.899,60.897,310.373,53,300,53h-87c-10.387,0-18.92,7.919-19.901,18.049c-19.155-0.169-49.697-0.793-60.374,3.647  c-19.07,7.12-34.01,24.74-37.04,44.99c-4.64,29.089-9.399,58.169-13.91,87.291c6.721,0.029,13.44,0.159,20.16-0.021  c4.53-27.64,8.83-55.31,13.34-82.95c1.83-16.4,15.96-30.24,32.12-32.61c6.937-0.618,30.914-0.396,46.275-0.343  C195.911,99.648,203.703,106,213,106h87c9.31,0,17.11-6.37,19.34-14.982c14.012,0.012,34.461,0.038,39.715-0.012  c18.1-0.27,35.21,14.37,37.569,32.34c4.561,27.86,8.82,55.77,13.471,83.61c6.7,0.21,13.42-0.011,20.13,0.01  C425.805,178.416,421.114,149.916,416.595,121.376z" />
                    </svg>
                </div>
                <div className='Lists'>
                    <div>
                        <h4>Groceries</h4>
                        <div className='items'>
                            {this.state.groceries.map(data => (<button onClick={this.add(data)}><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 3.5H5C3.89543 3.5 3 4.39543 3 5.5V19.5C3 20.6046 3.89543 21.5 5 21.5H19C20.1046 21.5 21 20.6046 21 19.5V5.5C21 4.39543 20.1046 3.5 19 3.5Z" stroke='transperent' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 8.5V16.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8 12.5H16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                                {data}</button>))}
                        </div>
                    </div>
                    <div>
                        <h4>Basket</h4>
                        <div className='items'>
                            {this.state.basket.map(data => (<button onClick={this.remove(data)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8 12H16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                {data}</button>))}
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default ProblemA;