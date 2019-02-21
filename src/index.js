import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';

class App extends React.Component {
     //to initialise state instead of constructor we used state

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position =>this.setState({ lat: position.coords.latitude }),        //contains latitudes
            err => this.setState({ errorMessage: err.message })
        );    
    }

    componentDidUpdate() {
        
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat)
            return <div>Error: {this.state.errorMessage}</div>
        
        if(this.state.lat && !this.state.errorMessage)
            return <SeasonDisplay lat={this.state.lat} />
        
        else
            return <Spinner message="Please aceept location request" />
    }

    //React says we  have to define render!
    
    render() {
            return (
                <div className="border red">
                    {this.renderContent()}
                </div>
            )
        };
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);