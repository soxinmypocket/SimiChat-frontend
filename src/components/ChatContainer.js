import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: 'black',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};


const ChatContainer = () => {
  return (
    <div className="menu">
      <center> 
      <h2>Chat Container</h2>
      
      <ThemeProvider className="chatcontainer" theme={theme}>
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you!',
            trigger: '4',
          },
          {
            id: '4',
            message: 'What number I am thinking?',
            trigger: '5',
          },
          {
            id: '5',
            options: [
              { value: 1, label: 'Number 1', trigger: '4' },
              { value: 2, label: 'Number 2', trigger: '3' },
              { value: 3, label: 'Number 3', trigger: '3' },
            ],
          },
          {
            id: '6',
            message: 'Wrong answer, try again.',
            trigger: '2',
          },
          {
            id: '7',
            message: 'Awesome! You are a telepath!',
            end: true,
          },
        ]}
      />
      </ThemeProvider>
      </center>
    </div>
    

  );

}
    // render() {
    //   return (
    //     <div className="menu">
    //       <h2>Centers Container</h2>
    //       <ChatBot
    //       steps={[
    //         {
    //           id: 'hello-world',
    //           message: 'Hello World!',
    //           end: true,
    //         },
    //       ]}
    //       />
          
    //     </div>
  
    //   );
//     }
  
// }
  

export default ChatContainer;