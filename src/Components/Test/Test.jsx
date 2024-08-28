import React, { Component } from "react";
import './test.css'

 
class Test extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {'active': false}; //, 'class': ''
    // }

toggleClass(e) {
    if(e.target.classList.contains('activeTest')){
      e.target.classList.remove('activeTest')
    }else{
      e.target.classList.add('activeTest')
    }
  }

    render() {
        const arr = ['home', 'move', 'house']

        return (
            <div className="mainDiv">
                {arr.map((text) => (
                    <h1 key={text} className="h1"
                        // className={
                        //     this.state.active
                        //         ? "active"
                        //         : ""
                        // }
                        onClick={this.toggleClass.bind(this)} 
                    >
                    {text}
                </h1>
                ))}
            </div>
        );
    }
}
 
export default Test;