const React = require('react');
const Vegetable = require('../../Models/vegetable');

function Show(props) {
    const {Vegetable} = props;
    console.log(props)
    return (
    <div>
        <h1>Hello Show Page of functional Component</h1>

        <p> {Vegetable.name} is {Vegetable.color} {" "}
        {Vegetable.readyToEat ? 'It is ready to eat' : 'It is not ready to eat... Cook it first, it is healthy for you' }
        </p>
    </div>
    
    )
}

module.exports = Show;