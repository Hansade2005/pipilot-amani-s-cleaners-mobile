import { AppRegistry } from 'react-native'
import App from './App.jsx'

const appName = "Amani's  Cleaners"

AppRegistry.registerComponent(appName, () => App)
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
})
