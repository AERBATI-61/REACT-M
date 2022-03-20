// rcc + tab

import React, {Component} from 'react';
class User extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <input type="text"/>
                    <button>Gonder</button>
                </form>
            </div>
        );
    }
}
export default User;

// class compenentin mutlaka Component'ten miras almasi gerekiyor,
// render function ile istediginiz parent tag'i gondermeniz gerekiyor,
// Sonrada olusturdugunuz class adini baska classlarin kullanimi icin export etmeniz gerekiyor.