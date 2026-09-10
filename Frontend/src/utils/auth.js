const API_URI = "http://localhost:5000/api";


//centralized authentication instead of code in seperate files
// auth.js = getToken() + getStoredUser() + logout() + verifyToken() 




// get token from local storage 
export const getToken = () =>{
    return localStorage.getItem("token");
};

//get stored user
export const getStoredUser = () =>{
    const user = localStorage.getItem("user");

    if(!user){
        return null;
    }

    try{
        return JSON.parse(user);
    }catch(err){
        localStorage.removeItem("user");
        return null;
    }
}

// logout
// remove users saved data from local storage
export const logout = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};

//verify token
// checks from the database if the token is valid or not
export const verifyToken = async () =>{
    const token = getToken();

    if(!token){
        return null;
    }

    try{
        const response = await fetch(
            `${API_URI}/auth/me`,
            {
                method: "GET",
                headers: {
                   Authorization :  `Bearer ${token}`,
                },
            }
        );

        if(!response.ok){
            logout();   
            return null;
        }

        const data =  await response.json();

        //keep info updated
        localStorage.setItem(
            "user",
            JSON.stringify(data.user)
        );

        return data.user;
    }catch (err) {
        console.error("Authentication check failed:", err);
        return null;
    }
};