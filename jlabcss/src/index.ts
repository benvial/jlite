import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jlabcss extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jlabcss:plugin',
  description: 'A JupyterLab theme',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jlabcss is activated!');
    const style = 'jlabcss/index.css';

    manager.register({
      name: 'jlabcss',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
