<template>
    <ui-app>
        <template slot="header">
            Countries
        </template>

        <el-table :data="paginatedTableData"
            style="width:100%"
            >
            <el-table-column
                prop="id"
                label="id"
                width="60"
            >
            </el-table-column>

            <el-table-column
                prop="code"
                label="Code"
                width="80"
            >
            </el-table-column>

            <el-table-column
                prop="name"
                label="Name"
            >
            </el-table-column>

            <el-table-column
                fixed="right"
                label="Actions"
                width="120"
            >
                <template slot-scope="scope">
                    <el-button @click="editRow(scope.$index)" type="primary" icon="el-icon-edit" circle></el-button>
                    <el-button @click="deleteRow(scope.$index)" type="danger" icon="el-icon-delete" circle></el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-container>
            <el-pagination
                background
                @current-change="pageChanged"
                :page-size="10"
                :page-count="pageCount"
                layout="prev, pager, next"
                :total="totalItems">
            </el-pagination>
        </el-container>

        <ui-edit-country
            v-model="editItem"
            @close-edit-country="editDialogShown = false"
            @save-country="saveCountry"
            :item="editItem"
            :visible="editDialogShown">
        </ui-edit-country>
    </ui-app>
</template>

<script>
    import EditCountry from './EditCountry.vue'

    export default {
        components: {
            "ui-edit-country": EditCountry
        },

        data() {
            var tableData = window._state.countries
            var pageSize = 10

            return {
                page: 0,
                pageSize: pageSize,
                tableData: tableData,
                totalItems: tableData.length,
                pageCount: Math.ceil(tableData.length) / pageSize,

                editDialogShown: false,
                editItemIndex: 0,
                editItem: {}
            }
        },

        computed: {
            paginatedTableData() {
                let count = this.page * this.pageSize
                return this.tableData.slice(count, count + this.pageSize)
            }
        },

        methods: {
            pageChanged(value) {
                this.page = value - 1
            },

            editRow(index) {
                this.editItemIndex = index
                this.editItem = this.paginatedTableData[index]
                this.editDialogShown = true
                console.log('editRow', index, this.editItem)
            },

            deleteRow(index) {
                console.log('deleteRow', index)
            },

            saveCountry() {
                this.$set(this.paginatedTableData, this.editItemIndex, this.editItem)
            }
        }
    }
</script>
