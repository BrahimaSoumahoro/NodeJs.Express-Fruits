const React = require('react')


function New() {
    return(
        <div>
            <h1> New Vegetable Page</h1>

            <form action='/vegetables_Mong' method='POST'>

{/* name="name" is the name of the vegetable as it is assigned in the database */}
                Name: <input type="text" name="name" 
                 /> 

                <br/>

                color: <input type="text" name="color" 
                 />

                 <br/>

                 Is ready to eat: <input type="checkbox" name="readyToCook"/>

                 <br/>

                 <input type='submit' value="Add a new Vegetable in your basket" />
            </form>
        </div>
    )
}

module.exports = New; 