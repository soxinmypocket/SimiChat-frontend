import React from 'react';
import ChatBot from 'react-simple-chatbot';

const ChatContainer = () => {
  return (
    <div className="chatcontainer">
      <center> 
      {/* <ThemeProvider className="chatcontainer" theme={theme} style={{width: '900px'}}> */}
      <ChatBot
      headerTitle="SimiChat"
      // botAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBlQkPMjd0o6BtadcGqkNEFNt0bxRYDK4GaA&usqp=CAU"
      width="700px"
      botDelay="2000"
      
      speechSynthesis={{ enable: true, lang: 'french' }}
      recognitionEnable={true}
        steps={[
          {
            id: '1',
            message: "Hi! I'm Simi, a therapy coach. What is your name?",
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: "{previousValue}. That's a nice name.",
            trigger: '4',
          },
          {
            id: '4',
            user: true,
            trigger: '5',
          },
          {
            id: '5',
            message: 'Before we get started, how familiar are you with therapy?',
            trigger: '6'
          },
          {
            id: '6',
            options: [
              { value: 1, label: "I've never been to therapy before", trigger: '9' },
              { value: 2, label: "I've had therapy sessions in the past", trigger: '9' },
            ],
          },
          {
            id: '9',
            message: "Okay. So, Can you tell me a little bit about what is going on? Just pick one for now, it will help me customize a design just for you",
            trigger: '10',
          },
          {
            id: '10',
            options: [
              { value: 'Depression', label: 'Depression', trigger: '21' },
              { value: 'Anxiety', label: 'Anxiety', trigger: '11' },
              { value: 'Sadness', label: 'Sadness', trigger: '25' },
              { value: 'Sleep Problems', label: 'Sleep Problems', trigger: '29' },
            ],
          },
          // // Anxiety
          {
            id: '11',
            message: "{previousValue} I see....That must be tough. But you came to the right place. Can you tell me a little more about what is giving you {previousValue}",
            trigger: '12'
          },
          {
            id: '12',
            user: true,
            trigger: '13'
          },
          {
            id: '13',
            message: "I'm sorry to hear that. Anxiety is a typical human reaction to stress. If you feel caught up in your anxiety, try one or a few of the following exercises anytime and anywhere to find relief.",
            trigger: '16'
          },
          {
            id: '16',
            options: [
              { value: 1, label: 'Okay', trigger: '14' }
            ],
          },
          {
            id: '14',
            message: "Take a time-out. Practice yoga, listen to music, meditate, get a massage, or learn relaxation techniques. Stepping back from the problem helps clear your head.",
            trigger: '15'
          },
          {
            id: '15',
            component: (
              <a href="https://www.healthline.com/health/anxiety-exercises" target="_blank"> Anxiety Exercises </a>
            ),
            trigger: '17'
          },
          // {
          //   id: '16',
          //   options: [
          //     { value: 1, label: 'Okay', trigger: '17' }
          //   ],
          // },
          {
            id: '17',
            message: "Did you find that helpful?",
            trigger: '18'
          },
          {
            id: '18',
            options: [
              { value: 1, label: 'Yes, I feel relieved', trigger: '19' },
              { value: '2', label: 'Not at all', trigger: '20' },//review
            ],
          },
          
          //Break- end session or restart
          {
            id: '19',
            message: "Great! Would you like to talk about something else?",
            trigger: '20'
          },
          {
            id: '20',
            options: [
              { value: 1, label: "No, Let's call it a day", trigger: '33'}, 
              { value: 2, label: 'Yes', trigger: '9' },
            ],
          },
          {
            id: '33',
            message: "Alright, Goodbye!",
            end: true,
          },
//---------------------------------------------------------------------------------------------------------------------------------------------
          //Depression
          {
            id: '21',
            message: "{previousValue} I see....That must be tough. But you came to the right place. Can you tell me a little more about what is making you feel depressed",
            trigger: '22'
          },
          {
            id: '22',
            user: true,
            trigger: '23'
          },
          {
            id: '23',
            message: "You are not alone. Depression can drain your energy, leaving you feeling empty and fatigued. This can make it difficult to muster the strength or desire to seek treatment. However, there are small steps you can take to help you feel more in control and improve your overall sense of well-being.",
            trigger: '24'
          },
          {
            id: '24',
            component: (
              <a href="https://www.healthline.com/health/depression/how-to-fight-depression" target="_blank"> How to Fight Depression </a>
            ),
            trigger: '17'
          },

          //Sadness
          {
            id: '25',
            message: "{previousValue} I see....That must be tough. But you came to the right place. Can you tell me a little more about what is making you feel this way?",
            trigger: '26'
          },
          {
            id: '26',
            user: true,
            trigger: '27'
          },
          {
            id: '27',
            message: "Im sorry you feel this way. Everyone experiences sadness at some point or other in their lives. Studies have shown that sadness lasts longer than many other emotions because we tend to spend more time thinking about it. Ruminating, or going over our sad thoughts and feelings again and again, can lead to depression and keep you from overcoming sadness. There are several things you can do to help yourself through the hard times.",
            trigger: '28'
          },
          {
            id: '28',
            component: (
              <a href="https://www.lifehack.org/articles/lifestyle/fifteen-simple-ways-overcome-depression-and-sadness.html" target="_blank"> Simple Ways To Overcome Sadness </a>
            ),
            trigger: '17'
          },

          // Sleep problems
          {
            id: '29',
            message: "{previousValue} I see....That must be tough. But you came to the right place. Can you tell me a little more about what is causing you to loose sleep",
            trigger: '30'
          },
          {
            id: '30',
            user: true,
            trigger: '31'
          },
          {
            id: '31',
            message: "Getting a good night's rest is very important for your health. Your life won't wait until you're rested, so you'll need all the energy you can to get through today. Some of the nation's leading sleep doctors offer tips on how to power through the day after a bad night's rest. Here are some tips to help you improve your sleep.",
            trigger: '32'
          },
          {
            id: '32',
            component: (
              <a href="https://www.webmd.com/sleep-disorders/features/tired-after-bad-nights-sleep" target="_blank"> How to Fix Sleep Problems </a>
            ),
            trigger: '17'
          },

        ]}
      />
      {/* </ThemeProvider> */}
      </center>
    </div>
  );

}
  

export default ChatContainer;