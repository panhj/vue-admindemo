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
    <div class="pagination">
        <el-pagination
        layout="prev, pager, next"
        :total="total"
        @current-change="getPage">
        </el-pagination>
    </div>
</div>    
</template>

<script>
export default {
    data () {
        return {
            currentPage: 1,
            total:10,
            tableData: [
            ]
        }
    },
    methods: {
        getList () {
            this.$axios({
                method: 'get',
                url: 'Inquiry/getQuestions/' + this.currentPage + '/10',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                let list = response.data.data.userQuestions;
                this.total = response.data.data.count;
                for(let item of list) {
                    this.tableData.push({
                        problem: item.description,
                        type: item.category,
                        status: '未读',
                        author: item.name,
                        tell: item.tel,
                        address: item.mail,
                        time: '2018-11-15',
                        oprate: '查看'
                    })
                }
            }).catch(e => {
                console.error(e);
            })
        },
        getPage (p) {
            alert('还没做，当前页：'+p)
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
.pagination {
    margin-top: 20px;
}
</style>
