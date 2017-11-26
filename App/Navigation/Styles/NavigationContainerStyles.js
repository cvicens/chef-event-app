import { Colors, ApplicationStyles } from '../../Themes/'
//import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default {
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: Colors.background
  },
  title: {
    color: Colors.snow
  },
  leftButton: {
    tintColor: Colors.snow
  },
  rightButton: {
    color: Colors.snow
  }
}
