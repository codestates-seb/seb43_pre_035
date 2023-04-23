import { useEffect, useState } from 'react';
import axios from "axios";
import styled from 'styled-components';
import { TempContainer } from './Threads';
// const url = "https://koreanjson.com/users";
// const url_signup = "/signup";


const url_signup = "https://2a51-124-61-224-204.ngrok-free.app/users/signup";
// const url_login = "https://1ec1-124-61-224-204.ngrok-free.app/users/login";
// const url_mypage = "https://1ec1-124-61-224-204.ngrok-free.app/users/1";

// axios.interceptors.request.use(config => {
//     console.log('Request was sent');
//     return config;
//   });

const Users = ({dimensions}) => {
    const tempWidth = dimensions.width + 115;
    const [userInfo, setUserInfo] = useState({email: 'aaaa', displayName: 'aaaa', name: 'aaaaa'});
    let alreadyDidOnce = false;

    const config = {
        headers : {
            "Access-Control-Allow-Origin": "*"
        }
    }

    useEffect(()=> {


    // if (!alreadyDidOnce){
    //         axios
    //             .post(url_signup, {email: 'sunga.jlhasddfdfdffasdf@gmail.com', password: 'asdfasdf1*', displayName: 'sungster', name: '장성아'})
    //             .then((response) => {
    //                 console.log("axios post sent! success");
    //                 console.log(response.data);


    //                 alreadyDidOnce = true;
    //             })
    //             .catch(err => {
    //                 console.log("this is an axios fetch error", err);
    //                 alreadyDidOnce = true;
    //             })

    //         }
        // axios
        //     .get(url)
        //     .then((response) => {
        //         console.log(response.data[0].name);
        //         // console.log(Object.assign(userInfo, {name: response.data[0].name}));
        //         // setUserInfo(Object.assign(userInfo, {name: response.data[0].name}));
        //         setUserInfo({email: 'sunga.jlh@gmail.com', displayName: 'sungster', name: response.data[0].name});
        //     });
    }, []);

    // useEffect(()=> {

    // }, [userInfo]);

    return (
        <TempContainer width={tempWidth}>
            {userInfo.email} - {userInfo.displayName} - {userInfo.name}
            {}
        </TempContainer>
    )
}

export default Users;