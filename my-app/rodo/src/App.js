import React from 'react';
import Header from "./components/Headr";
import Footer from "./components/Footer";
import Todo from "./components/Todo";



class App extends React.Component {
  render() {
    return(
 <div>
 <Header />
 <Todo />

 <Footer />
 </div>);
}
}


export default App;
