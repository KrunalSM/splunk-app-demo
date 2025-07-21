import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@splunk/react-ui/Button';
import Heading from '@splunk/react-ui/Heading';
import Menu from '@splunk/react-ui/Menu';

import { StyledContainer, StyledGreeting } from './LiveDashboardReactStyles';

class LiveDashboardReact extends Component {
    static propTypes = {
    name: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onCheck: PropTypes.func.isRequired,
};

    static defaultProps = {
        name: 'My Tasks',
    };

    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 1, title: 'My first task', done: true },
                { id: 2, title: 'My second task', done: false },
                { id: 3, title: 'My third task', done: false },
            ],
        };
    }

    handleClick(index) {
        const item = this.props.items[index];
        this.props.onCheck(item.id);
    }

    render() {
        const { name } = this.props;
        const { counter } = this.state;

        const message =
            counter === 0
                ? 'You should try clicking the button.'
                : `You've clicked the button ${counter} time${counter > 1 ? 's' : ''}.`;

        return (
            <StyledContainer>
                <Heading level={1}>{this.props.name}</Heading>
                <Menu>
                    {this.props.items.map((item, index) =>
                        <Menu.Item
                            selectable
                            selected={item.done}
                            onClick={() => this.handleClick(index)}
                            key={item.id}
                        >
                            {item.title}
                        </Menu.Item>
                    )}
                </Menu>
            </StyledContainer>
        );
    }
}
export default LiveDashboardReact;
