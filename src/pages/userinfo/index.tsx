import { useEffect, useState } from "react";
import { useUserQuery } from "../../generated/graphql"
import './index.css'
export default function UserInfo(props: any) {
  interface UInfo {
    name?: any
    avatarUrl: string
    createdAt: string
    email: string
    url: string
  }
  interface Edges {
    name: string
    sshUrl: string
    url: string
  }
  interface Node {
    node: Edges
  }

  let [login, setLogin] = useState("")
  let [uinfo, setUInfo] = useState<UInfo>()
  let [edges, setE] = useState<Node[]>()
  const [userinfo, setUserInfo] = useUserQuery({
    variables: { login: login }
  })

  useEffect(() => {
    if (props.location.search != "") {
      let str: string = props.location.search
      setLogin(str.slice(1))
    }
  }, [])

  useEffect(() => {
    if (userinfo.data?.user) {
      let obj: UInfo = userinfo.data.user
      setUInfo({
        avatarUrl: obj.avatarUrl,
        createdAt: obj.createdAt,
        email: obj.email,
        url: obj.url,
        name: obj.name
      })
    }
    if (userinfo.data?.user?.repositories.edges) {
      let arr: any = userinfo.data?.user?.repositories.edges
      setE([...arr])
    }
  }, [userinfo])

  return (
    <div className="container">
      <div className="u-box">
        <div className="u-title">用户详情：</div>
        {uinfo &&
          <div className="u-userinfo">
            <img src={uinfo.avatarUrl} alt="" className="u-img" />
            <div className="u-info">
              <div className="u-nickname">用户昵称：{uinfo.name || 'github'}</div>
              <div className="u-email">用户邮箱：{uinfo.email || '123456@qq.com'}</div>
              <div className="u-url">用户地址：{uinfo.url}</div>
              <div className="time">创建时间：{uinfo.createdAt}</div>
            </div>
          </div>
        }
      </div>
      <div className="u-content">
        <div className="repositories">项目仓库：</div>
        {edges && edges.map(item => {
          return (
            <div className="edges">
              <div className="r-name">仓库名称：{item.node.name}</div>
              <div className="r-ssh">克隆地址：{item.node.sshUrl}</div>
              <div className="r-address">仓库地址：{item.node.url}</div>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}