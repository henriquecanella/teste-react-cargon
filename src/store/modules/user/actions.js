export function registerUserRequest(data) {
  return {
    type: "@user/REGISTER_USER_REQUEST",
    payload: { data },
  };
}

export function editUserRequest(data) {
  return {
    type: "@user/EDIT_USER_REQUEST",
    payload: { data },
  };
}
