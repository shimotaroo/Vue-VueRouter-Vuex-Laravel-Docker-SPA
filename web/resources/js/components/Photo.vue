<template>
    <div class="photo">
        <figure class="photo__wrapper">
            <img
                class="photo__image"
                :src="item.url"
                :alt="`Photo by ${item.owner.name}`"
            >
        </figure>
        <Router-link
            class="photo__overlay"
            :to="`/photos/${item.id}`"
            :title="'View the photo by ${item.owner.name}'"
        >
            <div class="photo__controls">
                <button 
                    class="photo__action photo__action--like"
                    :class="{ 'photo__action--liked' : item.liked_by_user }"
                    title="Like Photo"
                    @click.prevent="like"
                >
                    <i class="icon icon-md-heart"></i>{{ item.likes_count }}
                </button>
                <a 
                    :href="`/photos/${item.id}/download`" 
                    class="photo__action"
                    title="Download Photo"
                    @click.stop
                >
                    <i class="icon icon-md-arrow-round-down"></i>
                </a>
            </div>
            <div class="photo__username">
                {{ item.owner.name }}
            </div>
        </Router-link>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    like () {
        this.$emit('like', {
            id: this.item.id,
            liked: this.item.liked_by_user
        })
    }
}
</script>