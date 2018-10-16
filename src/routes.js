import Home from './components/Home'
import List from './components/List'
import Users from './components/Users'
import Login from './components/Login'
import Reg from './components/Reg'

// 配置路由 数组   export 公开
export const routes = [
  {path:'/', name:"homeLink", component:Home},
  {path:'/list/:id', name:"listLink", component:List},
  {path:'/users', name:"usersLink", component:Users, 
    // 路由独享守卫
    // beforeEnter: (to, from, next) => {
    //   if(to.path == '/users'){
    //     alert('还没有登录，请先登录');
    //     next('/login')
    //   }else{
    //     next()
    //   }
    // }
  },
  {path:'/login', name:"loginLink", component:Login},
  {path:'/reg', name:"regLink", component:Reg},
  {path:'*', redirect:'/'}  //匹配不到以上，则跳转回首页
]