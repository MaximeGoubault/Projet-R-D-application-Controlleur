import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListScreen from './components/ListScreen'; // Ajustez le chemin selon votre structure
import DetailScreen from './components/DetailScreen'; // Créez ce composant pour les détails du trajet
import SeatDetailScreen from './components/SeatDetailScreen';
import QRCodeScreen from './components/QRCodeScreen'; // Créez ce composant
import OtherScreen from './components/OtherScreen'; // Créez ce composant

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TicketStackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Recherche de trajet"
      screenOptions={{
        headerShown: true,
        headerLargeTitle: true,
        headerStyle: {
          backgroundColor: '#001523',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        headerRight: () => (
          <TouchableOpacity onPress={() => alert('Les notifications ne sont pas implémentées')}>
            <Ionicons name="notifications" size={25} color="#fff" />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="Liste des trajets" component={ListScreen} />
      <Stack.Screen name="Details du trajet" component={DetailScreen} />
      <Stack.Screen name="Informations complémentaire" component={SeatDetailScreen} />
    </Stack.Navigator>
  );
}

function QRCodeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerLargeTitle: true,
        headerStyle: {
          backgroundColor: '#001523',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        headerRight: () => (
          <TouchableOpacity onPress={() => alert('Les notifications ne sont pas implémentées')}>
            <Ionicons name="notifications" size={25} color="#fff" />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="QRCode" component={QRCodeScreen} />
    </Stack.Navigator>
  );
}

function OtherStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerLargeTitle: true,
        headerStyle: {
          backgroundColor: '#001523',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        headerRight: () => (
          <TouchableOpacity onPress={() => alert('Les notifications ne sont pas implémentées')}>
            <Ionicons name="notifications" size={25} color="#fff" />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="Autres" component={OtherScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Train') {
              iconName = 'train-outline';
            } else if (route.name === 'QRCode') {
              iconName = 'qr-code-outline';
            } else if (route.name === 'Autres') {
              iconName = 'ellipsis-horizontal-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3D93A6',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Train" component={TicketStackScreen} options={{ headerShown: false }} />
        <Tab.Screen name="QRCode" component={QRCodeStackScreen} />
        <Tab.Screen name="Autres" component={OtherStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
