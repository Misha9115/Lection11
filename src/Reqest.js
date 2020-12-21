//import Photo from './Photo';
import React from 'react';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: {
                //Добавление юзера
                /* name: 'Misha',
                 avatar: 'Avatar'*/

                //Добавление заметки
                /*   title: "Bookmark title",
                   url: "Bookmark url"*/

                //Измененный текст заметки
                /*   title: "GitHub",
                   url: "github.com"*/

            }
        };
        //    localStorage.setItem('login', false)

    };

    componentDidMount() {

        //добавление юзера
        /*  fetch('https://5fda5a486cf2e7001737f4d4.mockapi.io/api/v1/users', {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify(this.state.photo)
              })
              .then(response => response.json())
              .then(result => alert(result.message));
              */

        //  Добавление заметки
        /*    fetch('https://5fda5a486cf2e7001737f4d4.mockapi.io/api/v1/users/53/bookmarks', {
               method: 'POST',
               headers: {
               'Content-Type': 'application/json;charset=utf-8'
               },
               body: JSON.stringify(this.state.photo)
               })
               .then(response => response.json())
               .then(result => alert(result.message));*/


        //Изминение заметки
        /* fetch('https://5fda5a486cf2e7001737f4d4.mockapi.io/api/v1/users/53/bookmarks/67', {
         method: 'PUT',
         headers: {
         'Content-Type': 'application/json;charset=utf-8'
         },
         body: JSON.stringify(this.state.photo)
         })
         .then(response => response.json())
         .then(result => alert(result.message));*/
    }
    render() {

        return null
    }
}

