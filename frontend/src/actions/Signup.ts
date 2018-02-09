import * as constants from "../constants";
import axios from "axios";
import { throwError } from "./Errors";

export interface SignupUser {
	type: constants.SIGNUP;
	tokenUrl: string;
}
export type SignupAction = SignupUser;

function redirectionToken(tokenUrl) : SignupUser {
	return {
		type: "SIGNUP",
		tokenUrl
	};
}
// API

function fetchSignup(formData) {
	return axios.post(`http://api.ugram.net/signup`, formData);
}

export function signupUser(formData) {
	return function (dispatch) {
		return fetchSignup(formData).then(
			tokenUrl => dispatch(redirectionToken(tokenUrl.request.responseURL)),
			error => dispatch(throwError("Signup", error))
		);
	};
}