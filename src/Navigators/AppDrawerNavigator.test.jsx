// import React from 'react';
// import { render, screen } from '@testing-library/react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import AppDrawerNavigator from './AppDrawerNavigator';

// jest.mock('@fortawesome/react-native-fontawesome', () => ({
//   FontAwesomeIcon: ''
// }));

// // jest.mock('@react-navigation/drawer', () => ({
// //   createDrawerNavigator: jest.fn()
// // }));
// // jest.mock('./WalletDrawerNavigator');

// beforeEach(() => {
//   jest.useFakeTimers();
// });

// afterEach(() => {
//   jest.useRealTimers();
// });

// describe('AppDrawerNavigator', () => {
//   it('should change page to Login screen after Splash screen when user not logged in', async () => {
//     render(
//       <NavigationContainer>
//         <AppDrawerNavigator />
//       </NavigationContainer>
//     );

//     const loginButton = await screen.findByLabelText('login button');

//     expect(loginButton).toBeOnTheScreen();
//   });
// });
