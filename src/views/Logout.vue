<template>
</template>

<script>
export default {
    name: 'logout',
    created() {
        this.$store.dispatch('logout');
    }
}
</script>
