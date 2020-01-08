import React, { Component } from "react";

import Client from "./Contentful";

const AfnContext = React.createContext();

export default class AfnProvider extends Component {
  state = {
    numOfPeopleToServe: 0,
    numOfPeopleToServe: [],
    recipeCreator: "",
    title: "",
    description: "",
    healthy: false,
    noAlcohol: false,
    noMilk: false,
    noPork: false,
    difficulty: "",
    preparationTime: 0,
    cookTime: 0,
    cleanTime: 0,
    steps : 0,
    numOfIngredients : 0,
    instructions: {},
    images: [],
    plateAndServeDescription: "",
    plateAndServeImage: ""
  };

  getData = async () => {
    try {
      let response = await Client.getEntry("7d8eJUvyb36K1F3XzV7nOl");
      console.log(response);

      /*
      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        //
        price: maxPrice,
        maxPrice,
        maxSize
      });
      */
    } catch(error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getData();
    
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    let tempRooms = [...rooms];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);
    //filter by size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    this.setState({
      sortedRooms: tempRooms
    });
  };
  render() {
    return (
      <AfnContext.Provider
        value={{
          ...this.state,
          //getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </AfnContext.Provider>
    );
  }
}
const AfnConsumer = AfnContext.Consumer;

export { AfnProvider, AfnConsumer, AfnContext };

export function withAfnConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <AfnContext>
        {value => <Component {...props} context={value} />}
      </AfnContext>
    );
  };
}
