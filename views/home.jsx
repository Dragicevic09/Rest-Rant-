//Imports React
const React = require('react')

//Imports the default "skeleton"
const Def = require('./default')

//Home stub function
function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <div>
                        <a href="/places">
                            <button className="btn-primary">Places Page</button>
                        </a>
                    </div>    
                    <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
            </main>

        </Def>
    )
}

//Exports home function
module.exports = home