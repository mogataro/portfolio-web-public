<template lang="pug">
div.loading-wait(
  v-if="isLoading"
)
  BaseOverlay
  BaseLoadingIcon
</template>

<script>
import BaseLoadingIcon from '@/components/Base/BaseLoadingIcon'
import BaseOverlay from '@/components/Base/BaseOverlay'

export default {
  name: 'LoadingWait',
  components: {
    BaseLoadingIcon,
    BaseOverlay
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
