"use client"

import './globals.css'
import { Open_Sans } from 'next/font/google';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "../features/user";

const inter = Open_Sans({ subsets: ['latin'] });

const store = configureStore( {
  reducer: {
      user: userReducer,
  },
})

export const metadata = {
  title: 'Oddaj rzeczy',
  description: 'Strona dla chętnych aby oddać rzeczy w dobre ręce',
}

export default function RootLayout({ children }) {
  return (

        <html lang="en">
            <body className={inter.className}>
            <Provider store={store}>
                {children}
            </Provider>
            </body>
        </html>


  )
}
