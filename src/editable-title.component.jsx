import React from 'react';
import PropTypes from 'prop-types';

import BaseComponent from './shared/base.component';

export default class EditableTitle extends BaseComponent {
    constructor(props) {
        super(props);
        this._bind('_titleChange', 'toggleInputEnabled');

        this.state = { disabled: true };
    }

    _titleChange(event$) {
        this.props.onTitleChange(event$.target.value);
    }

    toggleInputEnabled() {
        this.setState({
            disabled: !this.state.disabled
        });
    }

    render() {
        return (
            <div className="editable-title" onDoubleClick={this.toggleInputEnabled.bind(this)}>
                <input
                    value={this.props.title}
                    onChange={this._titleChange}
                    disabled={this.state.disabled} />
            </div>
        );
    }
}

EditableTitle.propTypes = {
    title: PropTypes.string,
    onTitleChange: PropTypes.func
};

EditableTitle.defaultProps = {
    title: 'Radio'
};
