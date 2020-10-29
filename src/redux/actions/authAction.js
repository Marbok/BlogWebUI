import { tokenUrl } from '../../utils/Constant';

export const AUTHORIZATION = 'AUTHORIZATION';
export const AUTHORIZATION_ERROR = 'AUTHORIZATION_ERROR';
export const LOGOUT = 'LOGOUT';

function authFinish(result) {
    return { type: AUTHORIZATION, result }
}

function authError() {
    return { type: AUTHORIZATION_ERROR }
}

export function auth(login, password) {
    let user = {
        nickname: login,
        password: password
    }
    return (dispatch) => {
        fetch(tokenUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(json => dispatch(authFinish(json.token)))
            .catch(() => dispatch(authError()));
    }
}

export function logout() {
    return { type: LOGOUT }
}