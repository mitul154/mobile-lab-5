// create a context hook to provide developer information to the Footer component

import {createContext, useContext, useState} from 'react';

const DeveloperInfoContext = createContext<any>(null);

export const DeveloperInfoProvider = ({children}: any) => {
  const appName = 'ToDo App';
  const developerName = 'Mitul';

  return (
    <DeveloperInfoContext.Provider value={{appName, developerName}}>
      {children}
    </DeveloperInfoContext.Provider>
  );
};

export const useDeveloperInfo = () => {
  return useContext(DeveloperInfoContext);
};
