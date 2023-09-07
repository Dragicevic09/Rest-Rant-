//Imports react
const React = require('react')

// Imports default.jsx "skeleton"
const Def = require('./default')

//Creates an error stub function
// Def component wraps the custom 404 code
function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/404error.jpg" alt="tie dye 404 smile error" width="800px"/>
                </div>
                <div>
                    Photo by <a href="AUTHOR_LINK">Visuals</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

// Exports error 404 function
module.exports = error404