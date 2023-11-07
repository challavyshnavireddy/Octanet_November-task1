
import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Post from './Post';


class GirevanceRedressal extends Component {
    render() {
        return (
          <ChatBot 
            steps={[
              {
                id:'q-firstname', 
                message:'Please,Enter your name', 
                trigger:'firstname',
              },
              {
                id:'firstname', 
                user:true,
                trigger:'q-email'
              },
              
              {
                id:'q-email', 
                message:'Enter your e-mail', 
                trigger:'email',
              },
              {
                id:'email', 
                user:true,
                trigger:'q-concern'
              },
              {
                id:'q-concern', 
                message:'Please,Enter your issue', 
                trigger:'concern',
              },
              {
                id:'concern', 
                user:true,
                trigger:'q-submit'
              },
              {
                id:'q-submit', 
                message:'Do you wish to submit?', 
                trigger:'submit'
              },
              {
                id:'submit', 
                options:[
                {value:'y', label:'Yes', trigger:'end-message'},
                {value:'n', label:'No', trigger:'no-submit'},
                ] 
              },
              {
                      id: 'no-submit',
                      message:'Your information was not submitted.', 
                      end: true,
                   },
                        {
                      id: 'end-message',
                      component: <Post />,
                      asMessage: true,
                      end: true,
                   },
            ]}
          />
            
            );
          }
}

export default GirevanceRedressal;