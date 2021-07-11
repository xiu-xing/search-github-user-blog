import { useEffect } from "react";
import { useUserQuery } from "../../generated/graphql"

export default function UserInfo() {
  const [userinfo, setUserInfo] = useUserQuery({
    variables: { login: "xiu-xing" }
  })

  useEffect(() => {
    console.log("userinfo", userinfo);
  }, [userinfo])
  return <div>
    <h1>这里进行用户信息展示</h1>
  </div>
}