
export const savedUserSession = (id:number, token:string) => {
    localStorage.setItem("userId", String(id));
    localStorage.setItem("token", token);
}

export const getUserId = () => {
    const value = localStorage.getItem("userId");
    return value ? Number(value) : null;
}

export const getToken = () => {
    return localStorage.getItem("token");
}

export const clearSession = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
}