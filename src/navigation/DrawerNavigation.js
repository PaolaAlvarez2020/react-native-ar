import React, { useState } from "react";
import { Icon, Button, Text } from "@rneui/themed";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { AccountStack } from "./AccountStack";
import { PatientStack } from "./PatientStack";
import { ARStack } from "./ARStack";
import { screen } from "../utils";
import { useAuth } from "../hooks";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  BLACK,
  PRIMARY,
  PRIMARY_DARK,
  PRIMARY_LIGHT,
  WHITE,
  WHITE_GRAY,
} from "../styles/colors";

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  const { auth, logout } = useAuth();
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <Drawer.Navigator
      initialRouteName={screen.account.drawer}
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: WHITE_GRAY,
        },
        headerTintColor: PRIMARY_DARK, // Color de los iconos de la cabecera
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerActiveTintColor: PRIMARY_DARK,
        drawerInactiveTintColor: PRIMARY_LIGHT,
        drawerIcon: ({ focused, color, size }) =>
          iconOptions(route, focused, color, size),
        headerRight: () => (
          <>
            <Button
              onPress={logout}
              buttonStyle={{
                backgroundColor: WHITE_GRAY,
                marginRight: 10,
                borderTopLeftRadius: 100,
                borderTopRightRadius: 100,
                borderBottomLeftRadius: 100,
                borderBottomRightRadius: 99,
              }}
              icon={{
                type: "material-community",
                name: "exit-to-app",
                size: 24,
                color: PRIMARY_DARK,
              }}
            />
          </>
        ),
      })}
    >
      <Drawer.Screen
        name={screen.account.drawer}
        component={AccountStack}
        options={{ title: screen.account.title }}
      />
      {auth.me.is_staff && (
        <Drawer.Screen
          name={screen.patient.drawer}
          component={PatientStack}
          options={{ title: screen.patient.title }}
        />
      )}
      <Drawer.Screen
        name={screen.ar.drawer}
        component={ARStack}
        options={{ title: screen.ar.title }}
      />
    </Drawer.Navigator>
  );
}

function iconOptions(route, focused, color, size) {
  let iconName;

  if (route.name === screen.account.drawer) {
    iconName = focused ? "account-circle" : "account-circle-outline";
  } else if (route.name === screen.patient.drawer) {
    iconName = focused ? "heart" : "heart-outline";
  } else if (route.name === screen.ar.drawer) {
    iconName = focused ? "cube-scan" : "cube-outline";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
  // return <Ionicons name={iconName} size={size} color={color} />;
}
