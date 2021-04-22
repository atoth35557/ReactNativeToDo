// In App.js in a new project

import * as React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { AppRoute } from "./src/navigation/app-routes";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

const App = () => {
  const isAuthorized: boolean = false;

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppNavigator initialRouteName={AppRoute.AUTH} />
          </NavigationContainer>
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
};

export default App;
