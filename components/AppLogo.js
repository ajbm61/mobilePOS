import React from 'react'
import { Image } from 'react-native-elements'

const AppLogo = () => (
  <Image
    source={require('../assets/flame.png')}
    style={{ width: 150, height: 150 }}
  />
)

export default AppLogo
