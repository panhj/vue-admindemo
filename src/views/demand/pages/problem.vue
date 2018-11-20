<template>
<div class="table">
    <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
            type="index"
            width="50"
            label="序号"
            align="center"
            :index="1">
        </el-table-column>
        <el-table-column
            prop="problem"
            label="问题"
            align="center"
            width="300">
        </el-table-column>
         <el-table-column
            prop="type"
            label="类型"
            align="center"
            width="120">
        </el-table-column>
         <el-table-column
            prop="status"
            label="状态"
            align="center"
            width="120">
        </el-table-column>
         <el-table-column
            prop="author"
            label="反馈者"
            align="center"
            width="120">
        </el-table-column>
         <el-table-column
            prop="tell"
            label="联系电话"
            align="center"
            width="200">
        </el-table-column>
         <el-table-column
            prop="address"
            label="邮箱"
            align="center"
            width="300">
        </el-table-column>
         <el-table-column
            prop="time"
            label="反馈时间"
            align="center"
            width="150">
        </el-table-column>
        <el-table-column
            prop="oprate"
            align="center"
            label="操作">
        </el-table-column>
    </el-table>
</div>    
</template>

<script>
export default {
    data () {
        return {
            tableData: [{
                problem: '我的问题是我的网站炸了',
                type: '售前咨询',
                status: '已读',
                author: '王小虎',
                tell: '13600567213',
                address: 'm13600567213@126.com',
                time: '2018-11-15',
                oprate: '查看'
            },
            ]
        }
    },
    methods: {
        getList () {
            this.$axios({
                method: 'get',
                url: '/api/openeco/Inquiry/getQuestions',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                console.log(response.data);
            }).catch(e => {
                console.error(e);
            })
        }
    },
    mounted () {
        this.getList();
    }
}
</script>
<style>
.el-table th {
    background-color: #ebeef5 !important;
}
</style>

<style scoped>
.table .el-table {
    border: 1px solid #ebeef5;
}
</style>
