import React from 'react';

import { createDevTools } from 'redux-devtools';

import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import SliderMonitor from 'redux-slider-monitor';

export const DevToolsLogDockable = createDevTools(
  <DockMonitor
    toggleVisibilityKey='H'
    changePositionKey='Q'
    monitorState={{ isVisible: false }}>
    <LogMonitor />
  </DockMonitor>
);

export const DevToolsSlider = createDevTools(<SliderMonitor />);
export const DevToolsLog = createDevTools(<LogMonitor />);
