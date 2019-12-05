<template>
    <el-dialog
      title="Edit Country"
      :visible.sync="visible"
      width="30%"
      :before-close="handleClose">
      <span>This is a message</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose()">Cancel</el-button>
        <el-button type="primary" @click="handleClose()">Confirm</el-button>
      </span>
    </el-dialog>
</template>

<script>
    export default {
        props: {
            visible: [Boolean]
        },

        methods: {
            handleClose() {
                this.$emit('close-edit-country')
            }
        }
    }
</script>
