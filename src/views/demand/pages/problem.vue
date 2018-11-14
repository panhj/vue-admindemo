<template>
<div class="table">
    <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
            type="index"
            width="100"
            label="序号"
            align="center"
            :index="1">
        </el-table-column>
        <el-table-column
            prop="date"
            label="日期"
            align="center"
            width="300">
        </el-table-column>
         <el-table-column
            prop="name"
            label="姓名"
            align="center"
            width="300">
        </el-table-column>
        <el-table-column
            prop="address"
            align="center"
            label="地址">
        </el-table-column>
    </el-table>
</div>    
</template>

<script>
export default {
    data () {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
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
