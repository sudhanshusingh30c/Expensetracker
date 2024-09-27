import React from 'react';

import { SnackbarProvider } from 'notistack';


import HomePage from './Pages/Home'
function App() {

  return (
    <SnackbarProvider >
      <div>
        <HomePage />
    </div>
    </SnackbarProvider>
  );
}

export default App;
