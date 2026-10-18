import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { brand } from '@/constants/Colors';

type Props = {
  title: string;
  subtitle: string;
};

export default function TabScreen({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>BETSY</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  brand: {
    color: brand,
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    opacity: 0.7,
    lineHeight: 22,
  },
});
