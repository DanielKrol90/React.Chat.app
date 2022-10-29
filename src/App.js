import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

function App() {
  return (

      <ChatEngine 
        height="100vh"
        projectID="2b37a1e8-f714-402e-bee6-eef8bb6a0708"
        userName="King_Daniel"
        userSecret="wieliczka90"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />

  );
}

export default App;
