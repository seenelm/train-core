import axios from "axios";
import { UserRegisterRequest, UserLoginRequest } from "../model/request/userApiRequest";
import { UserRegisterResponse, UserLoginResponse } from "../model/response/userApiResponse";

class UserService {

    constructor() {}

    async register(request: UserRegisterRequest): Promise<UserRegisterResponse> {
       try {
            const response = await axios.post<UserRegisterResponse>('http://localhost:3000/api/register', request);
            return response.data;
       } catch (error) {
        console.error("Error: ", error);
        throw error;
       }
       
    }

    async login(request: UserLoginRequest): Promise<UserLoginResponse> {
        try {
             const response = await axios.post<UserLoginResponse>('http://localhost:3000/api/login', request);
             return response.data;
        } catch (error) {
         console.error(error);
         throw error;
        }
        
     }
}

export default UserService;