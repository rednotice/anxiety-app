<template>
    <div class="accomplished">
        <v-row justify="center">
            <v-col cols="12" sm="6">
                <div class="challenge-box d-flex flex-column align-center">
                    <p class="display-1 text-center text-uppercase">Congratulations</p>
                    <p class="headline">Your new score is:</p>
                    <p class="display-2">{{counter}}</p>
                    <p class="display-1 text-center">You are on your way to be fearless!</p>
                    <v-btn outlined color="primary" class="mt-2" to='/challenge'>Next Challenge</v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'ChallengeAccomplished',
    data: () => ({
        counter: null
    }),
    methods: {
        initCounter() {
            return this.counter = this.$store.state.oldRewardPoints;
        },
        incrementCounter() {
            const vm = this;
            setInterval(() => {
                if(vm.counter < vm.$store.state.user.rewardPoints) {
                    vm.counter++;
                }
            }, 100);
        }
    },
    mounted() {
        this.initCounter();
        this.incrementCounter();
    },
}
</script>