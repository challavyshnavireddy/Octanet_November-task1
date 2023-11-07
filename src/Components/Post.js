import React, { Component } from 'react';
import axios from 'axios';


class Post extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { submit, firstname, email,concern } = steps;

    this.state =  { submit, firstname, email,concern }; 
  }


  componentDidMount() {
    const userObject = {
      submit:this.state.submit.value,
      first_name:this.state.firstname.value,
      email:this.state.email.value,
      concern:this.state.concern.value,
    };
    axios.post(`/api`, userObject)
    .then(res => {
      console.log(res.status)
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
        <div>Sorry,for the in convenience.
            We will get back to you in two to three working days.
        </div>
        );
    }
  };


  export default Post;