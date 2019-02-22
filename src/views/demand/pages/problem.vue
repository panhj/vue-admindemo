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
            prop="companyTypeString"
            label="单位类型"
            align="center"
            :show-overflow-tooltip="true"
            min-width="30">
        </el-table-column>
         <el-table-column
            prop="coopRange"
            label="合作内容"
            align="center"
            min-width="20">
        </el-table-column>
         <el-table-column
            prop="important"
            label="重要程度"
            align="center"
            min-width="10">
        </el-table-column>
         <el-table-column
            prop="tradeTypeString"
            label="所属行业线"
            align="center"
            min-width="25">
        </el-table-column>
         <el-table-column
            prop="userName"
            label="申请人姓名"
            align="center"
            min-width="15">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="120">
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
        <p><b>单位名称：</b><span>{{rowData.companyName}}</span></p>
        <p><b>对接人姓名：</b><span>{{rowData.peopleName}}</span></p>
        <p><b>单位类型：</b><span>{{rowData.companyType | arr2string}}</span></p>
        <p><b>岗位：</b><span>{{rowData.jobType | arr2string}}</span></p>
        <p><b>合作范围：</b><span>{{rowData.coopRange}}</span></p>
        <p><b>合作行业：</b><span>{{rowData.coopTrade}}</span></p>
        <p><b>潜在合作项目：</b><span>{{rowData.coopProject}}</span></p>
        <p><b>客户界面：</b><span>{{rowData.dahuaInterface | arr2string}}</span></p>
        <p><b>重要程度：</b><span>{{rowData.important}}</span></p>
        <p><b>所属区域：</b><span>{{rowData.area}}</span></p>
        <p><b>对接人姓名：</b><span>{{rowData.peopleName2}}</span></p>
        <p><b>对接人工号：</b><span>{{rowData.jobNumber}}</span></p>
        <p><b>所属行业线：</b><span>{{rowData.tradeType | arr2string}}</span></p>
        <p><b>岗位：</b><span>{{rowData.jobType2 | arr2string}}</span></p>
        <p><b>申请人姓名：</b><span>{{rowData.userName}}</span></p>
        <p><b>申请人联系方式：</b><span>{{rowData.userContact}}</span></p>
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
            rowData: {
                //合作伙伴信息
                componyName: '', //单位名称
                peopleName: '',   //对接人姓名
                componyType: [],   //单位类型(多选)
                jobType: [],   //岗位(多选)
                coopRange: '',   //合作范围
                coopTrade: '',   //合作行业
                coopProject: '',   //潜在合作项目
                interface: [],   //客户界面(多选)
                important: '重要',   //重要程度(单选)
                //大华对接人员信息
                area: '',   //所属区域
                peopleName2: '',   //对接人姓名
                jobNumber: '',   //对接人工号
                tradeType: [],   //所属行业线(多选)
                jobType2: [],   //岗位(多选)
                //申请人信息
                userName: '',   //申请人姓名
                userContact: '',   //申请人联系方式
            }
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
                    item.companyTypeString = item.companyType.join(", ");
                    item.tradeTypeString = item.tradeType.join(", ");
                    this.tableData.push(item);
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
    filters: {
        arr2string: (value) => {
            return value ? value.join(',') : '--';
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
