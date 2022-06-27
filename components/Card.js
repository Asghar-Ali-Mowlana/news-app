import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Card = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{item.title}</Text>
      <Text style={styles.authorText}>
        By {item.author == null ? 'N/A' : item.author} - {item.source.name}
      </Text>
      <Text style={styles.publishedText}>
        {item.publishedAt.substring(0, 10)}
      </Text>
      <View style={styles.imageDescriptionContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.urlToImage,
          }}
        />
        <Text numberOfLines={7} style={styles.descriptionText}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 4,
    borderColor: '#dfdfdf',
    backgroundColor: '#fdfdfd',
  },
  image: {
    flex: 1.5,
    height: 150,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000000',
  },
  authorText: {
    fontSize: 16,
    color: '#2f2f2f',
    paddingVertical: 5,
  },
  publishedText: {
    fontSize: 14,
    color: '#5f5f5f',
  },
  imageDescriptionContainer: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  descriptionText: {
    flex: 2,
    paddingHorizontal: '2%',
    fontSize: 16,
    color: '#161616',
  },
});

export default Card;
