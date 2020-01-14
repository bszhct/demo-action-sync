import * as React from 'react'
import {Link} from '@reach/router'
import {IPropBase} from '../../common/interface'


class Register extends React.Component<IPropBase> {
  render() {
    return (
      <div className="register-container">
        注册页

        <div>
          <Link className="link-item" to="/list">列表页</Link>
        </div>
      </div>
    )
  }
}

export default Register
