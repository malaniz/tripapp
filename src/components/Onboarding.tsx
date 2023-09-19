import React, {useState, useRef} from 'react';
import {View, FlatList, Animated, StyleSheet} from 'react-native';
import slides from './../mockupData/slidesOnboarding';
import OnBoardingItem from './OnBoardingItem';
import Paginator from './OnBoardingPaginator';

export default function () {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(0);

  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View className="flex-1 justify-center items-center bg-gray-900">
      <View style={styles.container}>
        <FlatList
          data={slides}
          renderItem={({item}) => (
            <OnBoardingItem
              item={item}
              currentIndex={currentIndex}
              finalSlideIndex={slides.length - 1}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {x: scrollX},
                },
              },
            ],
            {
              useNativeDriver: false,
            },
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
});
