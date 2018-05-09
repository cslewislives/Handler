import React from 'react';
import {Select, SelectInput, SelectOptions, SelectOption} from 'mdbreact';

class SelectPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Choose Glass..'
        }
        this.optionClick = this
            .optionClick
            .bind(this);

        this.onClick = this
            .onClick
            .bind(this);
        this.otherDropdownsClose = this
            .otherDropdownsClose
            .bind(this);
    }

    optionClick(value) {
        if (value.constructor === Array) {
            value = value.join(', ');
        }
        this.setState({value: value});
    }

    onClick(event) {
        if (event.target.dataset.multiple === 'true') {
            return;
        }

        if (event.target.classList.contains('select-dropdown')) {
            this.otherDropdownsClose();
            if (event.target.nextElementSibling) {
                event
                    .target
                    .nextElementSibling
                    .classList
                    .add('fadeIn');
            }
        } else {
            this.otherDropdownsClose();
        }
    }

    otherDropdownsClose() {
        let dropdowns = document.querySelectorAll('.dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains('fadeIn')) {
                dropdowns[i]
                    .classList
                    .remove('fadeIn');
            }
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.onClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onClick);
    }

    render() {
        return (
            <Select>
                <SelectInput value={this.state.value}></SelectInput>
                <SelectOptions>
                    <SelectOption disabled>Choose Glass...</SelectOption>
                    <SelectOption triggerOptionClick={this.optionClick}>Wine</SelectOption>
                    <SelectOption triggerOptionClick={this.optionClick}>Water</SelectOption>
                    <SelectOption triggerOptionClick={this.optionClick}>Rocks</SelectOption>
                    <SelectOption triggerOptionClick={this.optionClick}>Coups</SelectOption>
                    <SelectOption triggerOptionClick={this.optionClick}>Port</SelectOption>
                    <SelectOption triggerOptionClick={this.optionClick}>Mugs</SelectOption>
                </SelectOptions>
            </Select>
        );
    }
};

export default SelectPage;