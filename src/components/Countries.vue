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
            initTableData() {
                var id = 1

                // TODO: Move to main.js / VueX
                this.tableData = window._state.countries.map((item)=> {
                    return ({
                        id: id,
                        name: item.name,
                        code: item.code
                    })
                    id++
                })

            }
        }
    }
</script>
