// import React from 'react';
// import { render, screen } from '@testing-library/react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import WalletDrawerNavigator from './WalletDrawerNavigator';

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

// describe('WalletDrawerNavigator', () => {
//   it('should change page to Login screen after Splash screen when user not logged in', async () => {
//     render(
//       <NavigationContainer>
//         <WalletDrawerNavigator />
//       </NavigationContainer>
//     );

//     const loginButton = await screen.findByLabelText('login button');

//     expect(loginButton).toBeOnTheScreen();
//   });
// });
