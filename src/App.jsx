import React, { useState, useRef, useCallback } from 'react'
import { SafeAreaView, ActivityIndicator, BackHandler, Platform } from 'react-native'
import { WebView } from 'react-native-webview'

export default function App() {
  const [loading, setLoading] = useState(true)
  const webViewRef = useRef(null)

  const handleBack = useCallback(() => {
    if (Platform.OS === 'android') {
      webViewRef.current?.goBack()
      return true
    }
    return false
  }, [])

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBack)
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', handleBack)
  }, [handleBack])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <WebView
        ref={webViewRef}
        source={{ uri: 'https://amanicleaners.com' }}
        style={{ flex: 1 }}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
        pullToRefreshEnabled
        onLoadEnd={() => setLoading(false)}
        renderLoading={() => (
          <ActivityIndicator
            style={{ position: 'absolute', top: '50%', left: '50%' }}
            size="large"
            color="#000"
          />
        )}
      />
    </SafeAreaView>
  )
}
