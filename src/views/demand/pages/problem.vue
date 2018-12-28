<template>
<div class="table">
    <el-table
        :data="tableData"
        :stripe="true"
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
            align="left"
            :show-overflow-tooltip="true"
            min-width="300">
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
            width="80">
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
            width="150">
        </el-table-column>
         <el-table-column
            prop="address"
            label="邮箱"
            align="center"
            width="230">
        </el-table-column>
         <el-table-column
            prop="time"
            label="反馈时间"
            align="center"
            width="150">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="90">
            <template slot-scope="scope">
                <el-button
                @click.native.prevent="showRow(scope.$index, scope.row)"
                type="text"
                size="mini">
                查看
                </el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="pagination">
        <el-pagination
        layout="prev, pager, next"
        :total="total"
        @current-change="getPage">
        </el-pagination>
    </div>
    <el-dialog
    title="详情"
    :visible.sync="dialogVisible"
    width="30%">
    <p><b>反馈者：</b><span>{{rowData.author}}</span></p>
    <p><b>类型：</b><span>{{rowData.type}}</span></p>
    <p><b>联系电话：</b><span>{{rowData.tell}}</span></p>
    <p><b>邮箱：</b><span>{{rowData.address}}</span></p>
    <p><b>反馈时间：</b><span>{{rowData.time}}</span></p>
    <p><b>问题详情：</b><span>{{rowData.problem}}</span></p>
    <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
    </el-dialog>
</div>
</template>

<script>
export default {
    data () {
        return {
            currentPage: 0,
            total:10,
            tableData: [],
            dialogVisible: false,
            rowData: {}
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
                this.tableData = [];
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
                        time: item.date,
                    })
                }
            }).catch(e => {
                console.error(e);
            })
        },
        getPage (p) {
            this.currentPage = p;
            this.getList();
        },
        showRow (index, row) {
            this.rowData = row;
            this.dialogVisible = true;
        }
    },
    mounted () {
        this.getList();
    }
}
</script>
<style scoped>
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
    text-align: center;
}
p {
    text-align: left;
}
</style>
