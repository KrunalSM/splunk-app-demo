import React from 'react';
import { render } from 'react-dom';

import { SplunkThemeProvider } from '@splunk/themes';
import { getUserTheme, getThemeOptions } from '@splunk/splunk-utils/themes';

import LiveDashboardReact from '../src/LiveDashboardReact';

getUserTheme()
    .then((theme) => {
        const containerEl = document.getElementById('main-component-container');
        const splunkTheme = getThemeOptions(theme);
        render(
            <SplunkThemeProvider {...splunkTheme}>
                <LiveDashboardReact name="World" />
            </SplunkThemeProvider>,
            containerEl
        );
    })
    .catch((e) => {
        const errorEl = document.createElement('span');
        errorEl.innerHTML = e;
        document.body.appendChild(errorEl);
    });
