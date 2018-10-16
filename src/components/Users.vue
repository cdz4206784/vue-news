<template>
    <div class="container">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-light" v-for="(user,index) in users">
                    <td>{{index+1}}</td>
                    <td>{{user.username}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.phone}}</td>
                    <td>
                        <button type="button" class="btn btn-success btn-sm" v-on:click="showEditUsers(index)">Edit</button>
                        <button type="button" class="btn btn-danger btn-sm" v-on:click="deleteUsers(index)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <hr>

        <form class="form" v-on:submit="saveUsers">
            <div class="form-group">
                <label class="col-form-label" for="inputDefault">UserName</label>
                <input type="text" class="form-control" placeholder="id" v-model="newUsers.id">
                <input type="text" class="form-control" placeholder="Enter your username" v-model="newUsers.username">
            </div>
            <div class="form-group">
                <label class="col-form-label" for="inputDefault">Email</label>
                <input type="text" class="form-control" placeholder="Enter your email" v-model="newUsers.email">
            </div>
            <div class="form-group">
                <label class="col-form-label" for="inputDefault">Phone</label>
                <input type="text" class="form-control" placeholder="Enter your phone" v-model="newUsers.phone">
            </div>

            <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
            
        </form>
        
        <br>
        
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            users: [],  // 列表
            newUsers: {},    // 添加
            selected:''
        }
    },

    methods:{
        // 添加/修改
        saveUsers(e){
            e.preventDefault();
            if(isNaN(this.newUsers.id)){
                // 添加
                this.users.push({
                    id: this.users.length + 1,
                    username: this.newUsers.username,
                    email: this.newUsers.email,
                    phone: this.newUsers.phone
                })
            }else{
                // 修改
                // console.log(this.newUsers);  //不会直接响应绑定到v-model
                this.users.splice(this.selected,1,this.newUsers)
            }
            
            // 重置表单
            this.newUsers = ""
            
        },

        // 修改，将值体现到表单
        showEditUsers(index){
            this.selected = index;
            //Object类型的数据,若使用=赋值，则赋值操作为浅度拷贝; 这里为了确保点“保存”后，列表才更改，需要进行深度拷贝
            this.newUsers = JSON.parse(JSON.stringify(this.users[index]));
        },

        // 删除
        deleteUsers(index){
            if(confirm("确定删除吗?")){
                this.users.splice(index,1)
            }
        }
    },

    created(){
        this.$axios.get("http://jsonplaceholder.typicode.com/users").then(res=>{
            // console.log(res.data)
            this.users = res.data
        })
        
    }

}
    
</script>

<style>

</style>
