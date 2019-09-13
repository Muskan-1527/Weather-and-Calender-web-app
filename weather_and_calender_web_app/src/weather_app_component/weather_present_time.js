import React from 'react';

class PresentDate extends React.Component {
    state = {
        curTime: null
    }
    componentDidMount() {
        setInterval( () => {
            this.setState({
                curTime : new Date().toLocaleString()
            })
        },1000)
    }

    render() {
        return (
            <div className="font-weight-bold font-italic">
               IST: {this.state.curTime}
            </div>
        )
    }

}

export default PresentDate;