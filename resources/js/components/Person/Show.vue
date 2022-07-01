<template>
<!--    v-if="person" - показывай значения, когда они не = null-->
    <div v-if="person">
        <div>
            Name: {{ this.person.name }}
        </div>
        <div>
            Age: {{ this.person.age }}
        </div>
        <div>
            Job: {{ this.person.job }}
        </div>
        <router-link :to="{ name: 'person.edit', params: { id: this.person.id } }">Edit</router-link>

    </div>
</template>

<script>
export default {
    name: "Show",

    data() {
        return {
            person: null
        }
    },

    mounted() {
        this.getPersone()
    },

    methods: {
        getPersone() {
            // $route.params - вызывает динамические переменные, например, :id из router.js
            axios.get(`/api/people/${this.$route.params.id}` )
                .then(res => {
                    // Заполненные поля
                    this.person = res.data.data
                })
        },
    }
}
</script>

<style scoped>

</style>
