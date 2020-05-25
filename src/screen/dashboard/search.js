//import liraries
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Makiko } from 'react-native-textinput-effects';
 
const MakikoInput = () => {
  <Makiko
    label={'Comment'}
    iconClass={FontAwesomeIcon}
    iconName={'comment'}
    iconColor={'white'}
    inputPadding={16}
    inputStyle={{ color: '#db786d' }}
  />
};

export default MakikoInput;