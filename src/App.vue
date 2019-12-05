<template>
    <div>
        <el-container>
            <el-aside>
                <el-menu>
                    <router-link to="/"><el-menu-item>Home</el-menu-item></router-link>
                    <router-link to="/countries"><el-menu-item>Countries</el-menu-item></router-link>
                </el-menu>
            </el-aside>

            <el-container>
              <el-header>
                <h1><slot name="header"></slot></h1>
              </el-header>

              <el-main>
                <slot></slot>
              </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('App component mounted')
        }
    }
</script>
