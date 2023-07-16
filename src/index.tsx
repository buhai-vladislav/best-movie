import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { NextUIProvider } from '@nextui-org/react'
import { Provider } from 'react-redux'
import { store } from './store'
import { GoogleOAuthProvider } from '@react-oauth/google'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="938320411765-b6a1j5h9p34im2bqep00j1ndsj8hah1n.apps.googleusercontent.com">
      <Provider store={store}>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
