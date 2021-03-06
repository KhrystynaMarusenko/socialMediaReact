import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "85a370a3-bfb0-4172-a765-a18776c646a6"
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    putStatus(status){
        return instance.put(`profile/status`, {status});
    },
    savePhoto(photos){
        const formData = new FormData();
        formData.append("image", photos)
        return instance.put(`profile/photo`, formData, {
            headers:{
                'Content-Type' : 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    me () {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe = false, captcha = null){
        return instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    logout(){
        return instance.delete('auth/login')
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}