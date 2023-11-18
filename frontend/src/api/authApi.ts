import axios from "axios";
import { getAccessToken } from "../utils/getAccessToken";

export const LoginRequest = async (username: string, password: string) => {
	const response = await axios.post("auth/sign-in", {
		email: username,
		password,
	});
	return response;
};

export const LogoutUser = async () => {
	const response = await axios({
		url: "/auth/logout",
		method: "POST",
		headers: { Authorization: `Bearer ${getAccessToken()}` },
	});
	return response;
};

export const POST_VerifyUser = async (activeToken: string) => {
	const response = await axios({
		url: "/user/verify",
		method: "GET",
		data: { active_token: activeToken },
	});
	return response;
};
