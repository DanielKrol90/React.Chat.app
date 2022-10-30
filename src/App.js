import { ChatEngine } from 'react-chat-engine';

import { ChatFeed, LoginForm } from "./components";

import "./App.css";

function App() {

  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
      height="100vh"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
