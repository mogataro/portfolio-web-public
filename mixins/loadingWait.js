export default {
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    async onClickSave() {
      this.isLoading = true
      if (this.onClickSaveMixin) {
        await this.onClickSaveMixin()
      }
      this.isLoading = false
    }
  }
}
