import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainContainer from './Navigation/MainContainer';

function App() {
  return(
    <NavigationContainer>
      <MainContainer/>
    </NavigationContainer>
  );
}

export default App;