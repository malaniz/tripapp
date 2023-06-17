import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Section from '../components/Section';
const logo = require('../../assets/logo-demo.png');

export default function () {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = 'bg-neutral-300 dark:bg-slate-900';

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className={backgroundStyle}>
        <View className="bg-white dark:bg-black">
          <Image source={logo} className="h-20 w-20 mx-auto" />
          <Section title="Tailwind CSS">
            <Text> awesome this is finally working</Text>
          </Section>
          <Section title="React Nativation">
            <Text> Done! need screens definition </Text>
          </Section>
          <Section title="Assets">
            <Text> create a folder with some</Text>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
