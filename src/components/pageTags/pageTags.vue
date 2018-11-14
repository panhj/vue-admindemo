<template>
<div class="tag-container">
    <ul>
        <slot></slot>
    </ul>
</div>
</template>

<script>
export default {
    name: 'pageTags',
    data () {
        return {

        }
    },
    computed: {

    }
}
</script>

<style lang="less" scoped>
.tag-container {
    background-color: #eee;
    border-bottom: 1px solid #ddd;
    min-height: 45px;
    ul {
        position: absolute;
        top: 0; left: 0;
        padding: 0; margin: 0;
    }
}
</style>
