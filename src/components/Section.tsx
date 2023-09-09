import React, {type PropsWithChildren} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  return (
    <View className="mt-8 px-2">
      <Text
        className="w-screen md:w-auto text-center text-2xl text-black dark:text-white pt-6 pb-8 px-1"
        style={styles.title}>
        {title}
      </Text>
      <View style={styles.container}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#dcfe00',
    marginLeft: -8,
  },
  container: {
    marginTop: -20,
  }
})

export default Section;
