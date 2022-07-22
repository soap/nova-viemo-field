<template>
  <PanelItem :index="index" :field="field">
      <template #value>
        <iframe
                ref="player"
                :src="videoUrl"
                :height="height"
                :width="width"
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
        />
      </template>
  </PanelItem>
</template>

<script>
export default {
  props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],
  
  computed: {
    videoUrl() {
      return `https://player.vimeo.com/video/${this.field.value}`;
    },
    
    height() {
      return this.field.options.height;
    },
            
    width() {
      return this.field.options.width;
    },
  },
}
</script>
