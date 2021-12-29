export function signInRequest() {
  return {
    type: "@auth/SIGN_IN_REQUEST",
  };
}

export function signInSuccess(token) {
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: { token },
  };
}

export function signFailure() {
  return {
    type: "@auth/SIGN_FAILURE",
  };
}

export function signOut() {
  return {
    type: "@auth/SIGN_OUT",
  };
}
