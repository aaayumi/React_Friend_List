import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

class FriendList extends Component {
   
  constructor(props, context){
      super(props, context);
      this.state = {
          maleButton: false,
          femaleButton: false,
          currentPage: 1,
          perPage: 1
      }
  }
    
    maleButton (e) {
        this.setState({
            maleButton: !this.state.maleButton,
            femaleButton: false
        });
         console.log(this.state.maleButton)
    }
    
    femaleButton (e) {
        this.setState({
            femaleButton: !this.state.femaleButton,
            maleButton: false
        });
          console.log(this.state.femaleButton)
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
    
    // filter friends by gender
    const filterFriends = currentItems.filter( friend => this.state.male && friend.gender == 'Male' ||
    this.state.female && friend.gender === 'Female' || !this.state.male && !this.state.female)
    
    const items = filterFriends.map((friend, index) =>{
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
    
    // add pagination 
    const pageNumbers = [];
      for(let i = 1; i <= Math.ceil(friends.length/ perPage); i++) {
          pageNumbers.push(i);
      }
        
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

