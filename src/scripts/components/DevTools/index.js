import { createDevTools } from 'redux-devtools';

import SliderMonitor from 'redux-slider-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const Monitor = (
  <DockMonitor toggleVisibilityKey='H'
               changePositionKey='Q'>
    <LogMonitor />
  </DockMonitor>
);

export default createDevTools(<SliderMonitor />);
