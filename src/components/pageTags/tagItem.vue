<template>
<li :class="{active: $route.path == to}">
    <router-link :to="to">{{title}}</router-link>
    <a @click="$emit('close', to)">x</a>
</li>
</template>
<script>
export default {
    name: 'tag-item',
    props: [
        'to',
        'title'
    ],
    data () {
        return {

        }
    },
}
</script>

<style scoped>
li {
    float: left;
    list-style: none;
    text-align: center;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    font-size: 15px;
    height: 45px;
    box-sizing: border-box;
}
li a {
    display: inline-block;
    padding: 0 5px 0 25px;
    height: 100%;
    line-height: 45px;
    text-decoration: none;
    color: #777;
}
li a:nth-child(2) {
    padding: 0 5px;
    margin-right: 12px;
    cursor: pointer;
    font-size: 18px;
    transform: scaleY(.86);
}
.active {
    background-color: #fff;
    color: #333;
    border-bottom: none;
}
</style>
