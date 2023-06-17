import React, {type PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  return (
    <View className="mt-8 px-2">
      <Text className="text-2xl text-black dark:text-white">{title}</Text>
      {children}
    </View>
  );
};

export default Section;
