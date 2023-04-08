const React = require('react')

function Show(props) {
    const {fruit} = props;
    console.log(props)
    return (
    <div>
        <h1>Hello Show Page of functional Component</h1>

    

        <p> {fruit.name} is {fruit.color} {" "}
        {fruit.readyToEat ? 'It is ready to eat' : 'It is not ready to eat... Cant touch this' }
        </p>
    </div>
    
    )
}


/* in the class you will have to use "this keyword" */

// class Show extends React.Component {
//     render() {
//         return (
//             <h1>Show <Route></Route></h1>
//         )
//     }
// }

module.exports = Show;