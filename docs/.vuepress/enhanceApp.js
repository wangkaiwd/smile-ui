/**
 * Created by wangkai on 2019/4/25
 * 应用级别的配置
 */
import SmileButton from 'components/smileButton';
import SmileButtonGroup from 'components/smileButtonGroup';
import SmileTab from 'components/smileTabs/tab';
import SmileTabItem from 'components/smileTabs/tabItem';
import message from 'components/smileMessage';

export default ({ Vue }) => {
  Vue.component('SmileButton', SmileButton);
  Vue.component('SmileButtonGroup', SmileButtonGroup);
  Vue.component('SmileTab', SmileTab);
  Vue.component('SmileTabItem', SmileTabItem);
  Vue.use(message);
}
