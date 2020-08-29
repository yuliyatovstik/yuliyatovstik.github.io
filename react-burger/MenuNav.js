import React, { Component, Fragment } from 'react';

class MenuNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggle: true
        }
    }

    handleClick() {
        this.setState(state => ({
            isToggle: !state.isToggle
        })
        )
    }

    render() {

        const { isToggle } = this.state

        return (
            <div className='header-nav'>
                <div className='button-burger' onClick={(id) => this.handleClick(id)}>
                    {this.state.isToggle ? <span className='button-active'></span> : <span className='button-active close'></span>}
                </div>
                <ul className={isToggle ? 'nav-list burger-close' : 'nav-list burger-open'}>
                    <li className='nav-item'>Home</li>
                    <li className='nav-item'>About us</li>
                    <li className='nav-item'>Catalog</li>
                    <li className='nav-item'>Contacts</li>
                </ul>
            </div>
        )
    }
}

export default MenuNav;