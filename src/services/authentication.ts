const url = 'http://localhost:3000';
import { signin } from '../models/signin';
import { signup } from '../models/signup';

export default {
    postSignIn: async (body: signin) => {
        return await fetch(`${url}/signin`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json())
        .catch((err)=> {console.log(err)});
    },
    postSignUp: async (body: signup) => {
        return await fetch(`${url}/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then((res) => res.json())
        .catch((err)=> {console.log(err)});
    },
    getProfile: async (token: string) => {
        return await fetch(`${url}/profile`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },

        }).then((res) => res.json())
        .catch((err)=> {console.log(err)});
    },

};
