import { useEffect, useState } from "react";
import { useSearchQuery } from "../../generated/graphql";
import './index.css'
import github from '../img/github.png'
import { Link } from "react-router-dom";

export default function Search() {
  interface Item {
    id: string
    name: string
    url: string
    avatarUrl: string
    login: string
  }
  let [intoStr, setIntoStr] = useState("")
  let [query, setQuery] = useState("")
  let [userlist, setUserList] = useState<Item[]>()

  const [search, setSearch] = useSearchQuery({
    variables: { query: query, first: 50 }
  })



  useEffect(() => {
    if (search.data?.search.nodes) {
      let nodes: any = search.data?.search.nodes
      setUserList([...nodes]);
    }
  }, [search])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setQuery(intoStr)
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="serach">
        <img className="img" src={github} alt="" />
        <div className="title">搜索GitHub用户</div>
        <form className="from" onSubmit={event => { handleSubmit(event) }}>
          <input className="ipt" type="text" value={intoStr}
            placeholder="请输入您要搜索的用户"
            onChange={(e) => { setIntoStr(e.currentTarget.value) }} />
          <input className="submit" type="submit" value="搜索" />
        </form>
      </div>
      <div className="content">
        <div className="show">搜索结果展示：</div>
        {userlist?.length && userlist?.map((item, index) => {
          return (
            <div className="item" key={item.id}>
              <div className="left">
                <img src={item.avatarUrl} alt="" className="img1" />
                <div className="userinfo">
                  <div className="nickname">用户名：{item.name}</div>
                  <div className="address">仓库：{item.url}</div>
                </div>
              </div>
              <div className="right">
                <div>{item.login}</div>
                <Link to={{
                  pathname: "/userinfo",
                  search: `${item.login}`
                }}>点击查看详细信息</Link>
              </div>
            </div>
          )
        })
        }
        {/* <ListItem /> */}
      </div>
    </div>
  )
}