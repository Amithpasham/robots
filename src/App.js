import React,{ Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import "tachyons";
import './App.css';
import Popup from './Popup';


class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: [],
      search_field: "",
      popup: false
    }
    this.popupImg = "";
    this.filtered_robots =[]
    
  }

  async componentDidMount() {
    await fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      this.setState({robots: users});
    });
  }
  
  onSearchChange = (event) => {
    this.setState({search_field: event.target.value});
  }

  popupFunction = (event) => {
    if(this.state.popup) {
      console.log("close");
      this.setState({popup: false});
    }
    else {
      this.popupData = {
       imgsrc: event.target.src,
       details: this.filtered_robots[event.target.id]
      }
      console.log(this.popupData.details);
      this.setState({popup: true});
    }
  }

  render() {

    const {robots, search_field, popup} = this.state;
    this.filtered_robots = robots.filter(robot => robot.name.toLowerCase().includes(search_field.toLowerCase()));

    return (
      <React.Fragment>
        {popup?<Popup popup={this.popupFunction} imgsrc={this.popupData.imgsrc} details={this.popupData.details}/>:""}
        <div className="tc">
          <h1>Robofans</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            { (!this.filtered_robots.length)?
                <h2>No profile match your search</h2>
                :
                <CardList robots={this.filtered_robots} popup={this.popupFunction}/>
            }
          </Scroll>
        </div>
      </React.Fragment>
      
    );
  }
}

export default App;