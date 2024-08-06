import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>custom app</h1>
    </div>
  )
}


// const reactElement = {
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'click me to visit google'
// }

const anotherEle = (
  <a href="http://google.com" target="_blank">Visit google</a>
)

const anotheruser = "chai"

const reactElement1 = React.createElement(
  'a',
  {href:'https:google.com',target:'_blank'},
  'click to visit google',
  anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).
render( 

  reactElement1

)
