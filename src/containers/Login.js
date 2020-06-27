import LoginClass from '../templates/LoginClass'
import {compose} from 'redux'
import {connect} from 'react-redux';
import * as Actions from '../reducks/users/operations';

const mapStateToProps = state => {
  return {
    users: state.users // 渡したい state だけをオブジェクト型で記述
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      signIn() {
        dispatch(Actions.signIn()) // Store から Dispatch する関数
      }
    }
  }
}
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(LoginClass)