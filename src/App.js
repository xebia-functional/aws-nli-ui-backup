import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { post } from 'aws-amplify/api';

function App() {
  const callLambdaFunction = async () => {
    const apiName = 'NaturalLanguageInterface';
    const path = '/';
    const myInit = {
      body: { name: 'John' },
      headers: {},
    };

    try {
      const response = post(apiName, path, myInit);
      console.log('Lambda response:', response);
    } catch (err) {
      console.error('Error calling Lambda:', err);
    }
  };

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
          <button onClick={callLambdaFunction}>Call Lambda</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
