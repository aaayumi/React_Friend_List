import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  render () {
    return (
      <div>
      <input
        type="text"
        autoFocus="true"
        className={classnames('form-control', styles.addFriendInput)}
        placeholder="Type the name of a friend"
        value={this.state.name}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
        <div className="selectGender"><p>Select the gender of a friend</p>
        <input type="checkbox" id="gender" name="gender" value="male" onChange={this.maleChange.bind(this)}  />
        <label for="gender">Male</label>
        <input type="checkbox" id="gender" name="gender" value="female" onChange={this.femaleChange.bind(this)} />
        <label for="gender">Female</label>
        </div>
      </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      male: false,
      maleCheck : false,
      female: false,
      femaleCheck: false
    };
  }

  handleChange (e) {
    this.setState({ name: e.target.value
                  });
      
    console.log(this.state.name)
  }

  maleChange(e) {
      this.setState({
            male: !this.state.male,
            female: false
      })
    console.log(this.state.gender)
  }

   femaleChange(e) {
      this.setState({
            female: !this.state.female,
            male: false
      })
    console.log(!this.state.female)
  }


  handleSubmit (e) {
    const name = e.target.value.trim();
    const gender = this.state.male ? "male" : "female" || this.state.female ? "female" : "male";
      
    console.log(gender)
    if (e.which === 13) {
      this.props.addFriend(name, gender);
      this.setState({ name: '' , gender: ''});
    }
  }
}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
