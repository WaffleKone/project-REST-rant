const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/images/confusedmonkey.jpg" alt="A very confused monkey"/>
                <div>
                  Photo by <a href="https://www.istockphoto.com/portfolio/photomaru">Photomaru</a> on <a href="https://www.istockphoto.com">istockphoto</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
