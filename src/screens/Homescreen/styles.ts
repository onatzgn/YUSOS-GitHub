import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  headerMain: {
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  settingsIcon: {
    padding: 10,
  },
  subtitleText: {
    paddingHorizontal: 20,
    fontSize: 18,
    color: '#666',
  },
});

export default styles;
