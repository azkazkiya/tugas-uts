import React from 'react';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';


export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View className='bg-slate-300'>
      <View >
        <Text
          className='color-black p-10'>
          Open up the code for this screen:
        </Text>

        <View>
          <MonoText>{path}</MonoText>
        </View>

        <Text className=''>
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </View>

      <View>
        <ExternalLink
          href="https://youtube">
          <Text>
            Tap here if yougg app doesn't automatically update after making changes
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}

