import React, { Component } from 'react';

class Heat extends Component {

    constructor(props) {
        super(props)
        this.setHeat = props.setHeat
    }
    


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // console.log(event.target.value)
        this.setHeat(event.target.value)
        // this.setState({
        //     [name]: value
        // });
    }

    render () {
        return (
            <div className="HeatForm">
            {/* <form> */}
                <div className="field">
                    <div className="control">
                        <label className="label"><strong>Heat:</strong></label>
                        <br />
                        <label className="radio">
                            <input type="radio"
                                name="test"
                                onChange={this.handleChange}
                                value="Mild"
                                // checked={this.state.test === 'Mild'}
                            />
                        Mild
                        </label>
                        <br />
                        <label className="radio">
                            <input type="radio"
                                name="test"
                                onChange={this.handleChange}
                                value="Medium"
                                // checked={this.state.test === 'Medium'}
                        />
                        Medium
                        </label>
                        <br />
                        <label className="radio">
                            <input type="radio"
                                name="test"
                                onChange={this.handleChange}
                                value="Spicy"
                                // checked={this.state.test === 'Spicy'}
                        />
                        Spicy
                        </label>
                    </div>
                </div>
                {/* </form> */}
            </div>
        )
    }

}

export default Heat;
