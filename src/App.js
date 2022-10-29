import { ChatEngine } from 'react-chat-engine';

import { ChatFeed } from "./components";

import "./App.css";

function App() {
  return (
    <ChatEngine
      height="100vh"
      userName="Daniel"
      userSecret="123456"
      projectID="e7b9f75e-2d83-4842-900f-9536a465e95d"
       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
