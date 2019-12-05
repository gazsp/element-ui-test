<template>
    <el-dialog
      title="Edit Country"
      :visible.sync="visible"
      width="30%"
      :before-close="handleClose">
      <!-- Running low on time, so using normal inputs instead of element UI components -->
      <p>
          <label class="el-label" for="code">Code</label>
          <input v-on="inputListeners()" class="el-input__inner" type="text" name="code" v-model="state.code">
      </p>
      <p>
          <label class="el-label" for="code">Name</label>
          <input v-on="inputListeners()" class="el-input__inner" type="text" name="name" v-model="state.name">
      </p>

      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose()">Cancel</el-button>
        <el-button type="primary" @click="handleSave()">Save</el-button>
      </span>
    </el-dialog>
</template>

<script>
    export default {
        props: {
            item: [Object],
            visible: [Boolean]
        },

        data() {
            return {
                state: {}
            }
        },

        mounted() {
            this.$watch('visible', (val) => {
                if (val) {
                    // Copy item to data when dialog is made visible
                    this.state = JSON.parse(JSON.stringify(this.item))
                }
            })
        },

        methods: {
            // Emit input changes to keep parent model up to date
            inputListeners() {
                var self = this;
                return Object.assign({}, this.$listeners, {
                    input: function(event) {
                        self.$emit('input', self.state)
                    }
                })
            },

            handleSave() {
                this.$emit('save-country');
                this.handleClose()
            },

            handleClose() {
                this.$emit('close-edit-country')
            }
        }
    }
</script>
