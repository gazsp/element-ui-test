<template>
    <ui-app>
        <template slot="header">
            Countries
        </template>

        <el-table :data="tableData"
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
    </ui-app>
</template>

<script>
    export default {
        data() {
            return {
                tableData: []
            }
        },

        mounted() {
            this.initTableData()
        },

        methods: {
            // TODO: Move to main.js / VueX
            initTableData() {
                var id = 1
                this.tableData = window._state.countries.map((item)=> {
                    return ({
                        id: id,
                        name: item.name,
                        code: item.code
                    })
                    id++
                })
            },

            editRow(index) {
                console.log('editRow', index)
            },

            deleteRow(index) {
                console.log('deleteRow', index)
            }
        }
    }
</script>
