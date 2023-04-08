const React = require('react')


function New() {
    return(
        <div>
            <h1> New Fruit Page</h1>

            <form action='/fruits' method='POST'>

{/* name="name" is the name of the fruit as it is assigned in the database */}
                Name: <input type="text" name="name" 
                 /> 

                <br/>

                color: <input type="text" name="color" 
                 />

                 <br/>

                 Is ready to eat: <input type="checkbox" name="readyToEat"/>

                 <br/>

                 <input type='submit' value="Create new fruit" />
            </form>
        </div>
    )
}

module.exports = New; 