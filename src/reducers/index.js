import {combineReducers} from 'redux';

import DrawerContent from './drawerContentReducers';
import Combine from './combineReducers';
import Meaning from './meaningReducers';
import Search from './searchReducers';
import Login from './loginReducers';
import ForgotPass from './forgotPassReducers';
import Signup from './signupReducers';
import Profile from './profileReducers';
import EditProfile from './editProfileReducers';
import ChangePassword from './changePasswordReducers';
import Notifications from './notificationsReducers';
import AppSettings from './appSettingsReducers';
import NameInformation from './nameInformationReducers';
import Filter from './filterReducers';

export default combineReducers({
  drawerContent: DrawerContent,
  combine: Combine,
  meaning: Meaning,
  search: Search,
  login: Login,
  forgotPass: ForgotPass,
  signup: Signup,
  profile: Profile,
  editProfile: EditProfile,
  changePassword: ChangePassword,
  notifications: Notifications,
  appSettings: AppSettings,
  nameInformation: NameInformation,
  filter: Filter,
});
