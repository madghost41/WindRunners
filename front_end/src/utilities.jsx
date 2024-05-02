import axios from "axios";

export const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
})


export const userConfirmation = async() => {
    const token = localStorage.getItem("token");
    if(token) {
        api.defaults.headers.common["Authorization"] = `Token ${token}`
        const response = await api.get("users/")
        if (response.status === 200) {
            console.log(response.data)
            return { user: response.data.user, email: response.data.email }
        } else {
            console.log("error userConfirmation", response)
            return null
        }
    } else {
        console.log("userConfirmation no token in localStorage");
        return null
    }
}


export const userSignup = async (email, password) => {
    console.log("user signup")
    const response = await api.post("user/signup/", { email: email, password: password})
    if(response.status === 201) {
        let { user, token } = response.data;
        localStorage.setItem("token", token);
       
        api.defaults.headers.common["Authorization"] = `Token${token}`;
        return user;
    }
    alert(response.data);
    return null;
};


export const userLogin = async (email, password) => {
    const response = await api.post("user/login/", { email: email, password: password });
    if (response.status === 200){
        const { user, token } = response.data;
        localStorage.setItem("token", token);
        api.defaults.headers.common["Authorization"] = `Token${token}`;
        return { user, email }
    } else {
        console.log('login error', response)
    }
}


export const userLogout = async () => {
    const response = await api.post("user/logout/")
    if(response.status === 204) {
        localStorage.removeItem("token")
        delete api.defaults.headers.common["Authorization"]
        return null
    } else {
        console.log('error logging usser out', response)
        return false;
    }
}


