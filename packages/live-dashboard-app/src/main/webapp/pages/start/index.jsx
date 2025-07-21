import React from 'react';

import layout from '@splunk/react-page';
import LiveDashboardReact from '@splunk/live-dashboard-react';
import { getUserTheme } from '@splunk/splunk-utils/themes';
import IndexList from './IndexList';
import SplunkThemeProvider from '@splunk/themes/SplunkThemeProvider';

import { StyledContainer, StyledGreeting } from './StartStyles';

getUserTheme()
    .then((theme) => {
        layout(
            <SplunkThemeProvider family="enterprise" colorScheme="light" density="comfortable">
                <StyledContainer>
                    <IndexList />
                </StyledContainer>
            </SplunkThemeProvider>,
            {
                theme,
            }
        );
    })
    .catch((e) => {
        const errorEl = document.createElement('span');
        errorEl.innerHTML = e;
        document.body.appendChild(errorEl);
    });
