import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Card from '../components/Card';

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getNewsFromApiAsync = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=cbc5e2222f1d454c8399e9027288cc29',
      );
      const newsData = await response.json();
      setData(newsData.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNewsFromApiAsync();
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({id}, index) => {
              return index;
            }}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(item.url).catch(err =>
                    console.error('Error', err),
                  );
                }}>
                <Card item={item} />
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
