import { signInAction } from "./actions";
import {push} from "connected-react-router";

export const signIn = () => {
  return async (dispatch, getState) => {
    const state = getState()
    const isSignedIn = state.users.isSignedIn

    if(!isSignedIn) {
      // 実際は以下にfirebaseと通信をするようなサインイン処理を書くが、
      // まだ実装していないのでダミー処理を書く
      const url = 'https://api.github.com/users/deatiger'

      const response = await fetch(url)
                            .then(res => res.json())
                            .catch(() => null)

      const username = response.login

      dispatch(signInAction({
        isSignedIn: true,
        uid:"0002",
        username: username,
      }))
      dispatch(push('/'))
    }
  }
}