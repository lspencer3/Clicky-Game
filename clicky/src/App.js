import React, { Component } from "react";
import Counter from "./components/Counter.js";
import images from "./images.json";
import ImagesCard from "./components/imagecard.js";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images
  };


    //let clickedarr = new Array()


  movefriends = array => {
    // Filter this.state.friends for friends with an id not equal to the id being removed

    this.setState({ images: this.state.images.sort()})

  };


  clicked = (id) =>{
    /*for (let i = 0; i < clicked.length; i++){
      if (id == clicked[i]){
        handleDecrement()
      }
    }
    clickedarr.push(id)  */
    console.log("hello")  
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        {this.state.images.map(images => ( 
          <ImagesCard
          id = {images.id}
          name ={images.name}
          image={images.image}
          />
        ))}
      </div>
    );
  }
}


export default App;
