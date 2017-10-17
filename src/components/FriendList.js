import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

class FriendList extends Component {
   
  constructor(props, context){
      super(props, context);
      this.state = {
          male: false,
          female: false,
          currentPage: 1,
          perPage: 1
      }
     console.log(this.state.male)
  }
    
    maleButton (e) {
        this.setState({
            male: !this.state.male,
            female: false
        });
         console.log(this.state.male)
    }
    
    femaleButton (e) {
        this.setState({
            female: !this.state.female,
            male: false
        });
          console.log(this.state.female)
    }
    
    handleClick(e) {
        this.setState({
            currentPage: Number(e.target.id)
        });
    }
    
  render () {
    const { currentPage, perPage } = this.state;
    const friends = this.props.friends;
      
    // display current items
    const indexOfLastItem = currentPage * perPage;
    const indexOfFirstItem = indexOfLastItem - perPage;
    const currentItems = friends.slice(indexOfFirstItem, indexOfLastItem)
    
    // filter friends
    const filterFriends = currentItems.filter( friend => this.state.male && friend.gender == 'Male' ||
    this.state.female && friend.gender === 'Female' || !this.state.male && !this.state.female)
    
    const items = filterFriends.map(( friend, index) =>{
       return (
              <FriendListItem
                key={index}
                id={index}
                name={friend.name}
                starred={friend.starred}
                gender={friend.gender}
                {...this.props.actions} />
            ); 
    })
    
    // pagination 
    const pageNumbers = [];
      for(let i = 1; i <= Math.ceil(friends.length/ perPage); i++) {
          pageNumbers.push(i);
      }
      
    // filter numbers
    /* const filterPageNumbers = pageNumbers.filter(
    number => this.state.male && this.friend.gender == 'male' ||
    this.state.female && this.friend.gender === 'female' || !this.state.male && !this.state.female)*/
    
    const pagination = pageNumbers.map(number => {
        return(
        <li
         key={number}
         id={number}
         onClick={this.handleClick.bind(this)}
        >
       {number}
        </li>
        );
    });
    
    console.log(pageNumbers)
    return (
        <div>
        <div className="showGender">
        <p>Show friends by gender</p>
        <button onClick={this.maleButton.bind(this)} >Male</button>
    　　　<button onClick={this.femaleButton.bind(this)} >Female</button>
       </div>
      <ul className="friendList">
           {items}
      </ul>
      <ul id="pageNumbers"
          style={{ display: pageNumbers.length < 1 ? "none" : "block" ,  listStyle: "none", display : "flex" }} >
          {pagination}
          </ul>
     </div>
    );
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;

