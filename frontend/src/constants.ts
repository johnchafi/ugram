export const API_URL = process.env.API_URL || "http://localhost:3000";
export const UNSPLASH_CALLBACK = process.env.UNSPLASH_CALLBACK || "http://localhost:8080";

export const SET_VISIBILITY_UPLOAD_MODAL = "SET_VISIBILITY_UPLOAD_MODAL";
export type SET_VISIBILITY_UPLOAD_MODAL = typeof SET_VISIBILITY_UPLOAD_MODAL;

export const EDIT_PROFILE = "EDIT_PROFILE";
export type EDIT_PROFILE = typeof EDIT_PROFILE;

export const GET_USER = "GET_USER";
export type GET_USER = typeof GET_USER;

export const PROFILE_FETCH_DATA_SUCCESS = "PROFILE_FETCH_DATA_SUCCESS";
export type PROFILE_FETCH_DATA_SUCCESS = typeof PROFILE_FETCH_DATA_SUCCESS;

export const RECEIVE_USERS = "RECEIVE_USERS";
export type RECEIVE_USERS = typeof RECEIVE_USERS;

export const THROW_ERROR = "THROW_ERROR";
export type THROW_ERROR = typeof THROW_ERROR;

export const GET_PICTURES = "GET_PICTURES";
export type GET_PICTURES = typeof GET_PICTURES;

export const GET_PICTURES_USER = "GET_PICTURES_USER";
export type GET_PICTURES_USER = typeof GET_PICTURES_USER;

export const SIGNUP = "SIGNUP";
export type SIGNUP = typeof SIGNUP;

export const LOGIN = "LOGIN";
export type LOGIN = typeof LOGIN;

export const DELETE_PICTURE = "DELETE_PICTURE";
export type DELETE_PICTURE = typeof DELETE_PICTURE;

export const UPDATE_PICTURE = "UPDATE_PICTURE";
export type UPDATE_PICTURE = typeof UPDATE_PICTURE;

export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export type UPLOAD_PICTURE = typeof UPLOAD_PICTURE;

export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export type RECEIVE_SEARCH = typeof RECEIVE_SEARCH;

export const RECEIVE_NEW_USERS = "RECEIVE_NEW_USERS";
export type RECEIVE_NEW_USERS = typeof RECEIVE_NEW_USERS;

export const REMOVE_PROFILE_SUCCESS = "REMOVE_PROFILE_SUCCESS";
export type REMOVE_PROFILE_SUCCESS = typeof REMOVE_PROFILE_SUCCESS;
