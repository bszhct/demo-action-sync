import * as React from 'react'
import {observer} from 'mobx-react'
import {IPropBase} from '../../common/interface'

const data = []
for (let a = 1; a <= 100; a += 1) {
  data.push({
    id: a,
    name: `姓名 - ${a}`,
    age: a,
    time: new Date().getUTCDate(),
  })
}


@observer
export default class Home extends React.Component<IPropBase> {
  render() {
    return (
      <div className="list-container">
        {
          data.map(item => (
            <div className="list-item" key={item.id}>
              <div className="name">{item.name}</div>
              <div className="list-detail">
                <div className="detail-item">
                  年龄：
                  {item.age}
                </div>
                <div className="detail-item">
                  时间：
                  {item.time}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}
