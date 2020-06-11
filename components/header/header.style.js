import { StyleSheet } from 'react-native';
import { colors } from '../../../src/meta/constants/color_consts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  spacer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 26,
  },
  today: {
    position: 'absolute',
    backgroundColor: colors.brandPink,
    width: 20,
    height: 3,
    bottom: 0,
    right: 17,
  },
  columns: { flex: 1, flexDirection: 'row' },
  column: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default styles;
