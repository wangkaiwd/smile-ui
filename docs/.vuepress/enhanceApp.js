/**
 * Created by wangkai on 2019/4/25
 * 应用级别的配置
 */
import SmileButton from 'components/smileButton';
import SmileButtonGroup from 'components/smileButtonGroup';
import SmileTab from 'components/smileTabs/tab';
import SmileTabItem from 'components/smileTabs/tabItem';
import message from 'components/smileMessage';
import SmileInput from 'components/smileInput';
import SmileLayout from 'components/smileLayout/layout';
import SmileHeader from 'components/smileLayout/header';
import SmileFooter from 'components/smileLayout/footer';
import SmileContent from 'components/smileLayout/content';
import SmileAside from 'components/smileLayout/aside';
import SmileRow from 'components/smileGrid/row';
import SmileCol from 'components/smileGrid/col';
import SmileModal from 'components/smileModal';
import SmilePopover from 'components/smilePopover';

export default ({ Vue }) => {
  Vue.component('SmileButton', SmileButton);
  Vue.component('SmileButtonGroup', SmileButtonGroup);
  Vue.component('SmileTab', SmileTab);
  Vue.component('SmileTabItem', SmileTabItem);
  Vue.component('SmileInput', SmileInput);
  Vue.component('SmileLayout', SmileLayout);
  Vue.component('SmileFooter', SmileFooter);
  Vue.component('SmileHeader', SmileHeader);
  Vue.component('SmileAside', SmileAside);
  Vue.component('SmileContent', SmileContent);
  Vue.component('SmileRow', SmileRow);
  Vue.component('SmileCol', SmileCol);
  Vue.component('SmileModal', SmileModal);
  Vue.component('SmilePopover', SmilePopover);
  Vue.use(message);
}
