const React = require('react')
const Vegetable = require('../../Models/vegetable')
const Vegetables_Mong = require('../../Models/Vegetables_Mong')


function Index(props)   {
    const {fruits} = props

    return (
        <div>
            <nav><a href='/vegetable/New'>Please Enter a new vegetable you just thought about Here! </a></nav>

            <h1> Eat your vegetable Index Page</h1>

        <ul>{
            Vegetable.map((vegetable, i) =>{
                return (
                    <li key={vegetable._id}> 
                    The <a href={`/vegetable/${Vegetable._id}`}>{Vegetable.name}</a> is {Vegetable.color} {Vegetable.readyToEat ? 'It is ready to eat': 'It is not ready to eat'}
                    </li>
                )

            })}

            </ul>


        </div>
    )
}

module.exports = Index;