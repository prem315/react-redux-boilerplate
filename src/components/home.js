import React from 'react';
import { connect } from 'react-redux';
import { incNumber, decNumber } from '../actions/counter';

class Home extends React.Component{

    // constructor(props){
    //     super(props);
    // }

    addToCounter(data){
        
        this.props.incNumber(data);
    }
    removeToCounter(data){
        
        this.props.decNumber(data);
    }
    render() {
        return(
            <div>
                <button  
                        onClick={this.addToCounter.bind(this, this.props.counter)}>Add</button>
                <div>{this.props.counter}</div>
                <button onClick={this.removeToCounter.bind(this, this.props.counter)}>Reduce</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter.counterData
    }
}

export default connect(mapStateToProps, { incNumber, decNumber })(Home);
