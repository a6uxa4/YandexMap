import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
        color: 'red',
    };
}

function LinkTab(props) {
    return <Tab component={Link} {...props} />;
}

export default function BasicTabs({
    tabsValue,
    children,
    handleChange,
    value,
    matches,
}) {
    return (
        <Box sx={{ width: '100%' }}>
            <StyledBox matches={matches}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    sx={!matches ? { width: '100%' } : { width: '800px' }}
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: '#5460e6',
                        },
                    }}
                >
                    {tabsValue?.map((item) => (
                        <LinkTab
                            style={{
                                color: '#5460e6',
                            }}
                            key={item.id}
                            label={item.title}
                            {...a11yProps(item.id)}
                        />
                    ))}
                </Tabs>
            </StyledBox>
            {children}
        </Box>
    );
}

const StyledBox = styled(Box)`
    border-bottom: 1;
    border-color: divider;
    overflow-x: ${({ matches }) =>
        matches !== 'false' ? 'initial' : 'scroll'};
    color: #5460e6;
    span {
        color: #5460e6 !important;
    }
`;
