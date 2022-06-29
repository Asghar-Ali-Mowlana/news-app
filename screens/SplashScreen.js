import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Home from './Home';

const SplashScreen = () => {
  const [loadingData, setLoadingData] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingData(false);
    }, 3000);
  }, []);

  return loadingData ? (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../android/app/src/main/assets/NEWSTOPIA.png')}
      />
    </View>
  ) : (
    <Home />
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: "50%",
    height: "50%",
  },
});
