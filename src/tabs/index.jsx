import React from 'react';
import classNames from 'classnames';
import RcTabs from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

class Tabs extends React.Component {
  
  static defaultProps = Object.assign({}, RcTabs.defaultProps, {
    prefixCls: 'dh-tab'
  });

  static propTypes = {
    type: React.PropTypes.oneOf(['line', 'diamond']),
    className: React.PropTypes.string,
    animated: React.PropTypes.bool
  }
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    const { type, extraContent, onTabClick, animated } = props;
    return (
      <RcTabs
        {...props}
        className={classNames({
          [`dh-tab-${type}`]: type,
          [props.classname]: !!props.className
        })}
        renderTabBar={() => (
          <ScrollableInkTabBar
            extraContent={extraContent}
            onTabClick={onTabClick}
          />
        )}
        renderTabContent={() => (<TabContent animated={animated} />)}
        tabBarPosition="top"
      />
    );
  }
}
Tabs.TabPanel = RcTabs.TabPane;
export default Tabs;