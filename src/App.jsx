import React, { Component } from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Projects from './Projects'
import {Routes,Route,Navigate} from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <div>
         <NavBar/>
        <Routes>
            <Route exact path="/" element = {<Home/>}/>
            <Route exact path="/contact" element = {<Contact/>}/>
            <Route exact path="/about" element = {<About/>}/>
            <Route exact path="/project" element = {<Projects/>}/>
            <Route path="*" element={<Navigate to ="/" />}/>

        </Routes>
      </div>
    )
  }
}

export default App

// import React from 'react'
// import NavBar from './NavBar'
// import Home from './Home'
// import Contact from './Contact'
// import About from './About'
// import Service from './Service'
// import {Routes,Route,Navigate} from 'react-router-dom'

// const App = () => {
//     return(
//         <>
//         <NavBar/>
//         <Routes>
//             <Route exact path="/" element = {<Home/>}/>
//             <Route exact path="/contact" element = {<Contact/>}/>
//             <Route exact path="/about" element = {<About/>}/>
//             <Route exact path="/service" element = {<Service/>}/>
//             <Route path="*" element={<Navigate to ="/" />}/>

//         </Routes>
//         </>
//     );
// };


// export default App;