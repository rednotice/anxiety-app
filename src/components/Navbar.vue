<template>
    <nav>
        <v-navigation-drawer v-model="drawer" app color="base">
            <div class="py-4 pl-4 d-flex justify-space-between">
                <h2>AnXiety</h2>
                <v-btn v-if="loggedIn" text :to="'/logout'">
                    Logout
                    <v-icon>mdi-exit-to-app</v-icon>
                </v-btn>
            </div>

            <v-list v-if="loggedIn">
                <v-list-item link v-for="link in auth" :key="link.text" :to="link.route">
                    <v-list-item-action>
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-list v-if="!loggedIn">
                <v-list-item link v-for="link in guest" :key="link.text" :to="link.route">
                    <v-list-item-action>
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-list dense>
                <v-list-item link v-for="link in legal" :key="link.text" :to="link.route">
                    <v-list-item-content>
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app dense color="base">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

            <v-toolbar-title class="headline">
                <span>{{title}}</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-title v-if="loggedIn" class="headline">
                    <v-chip
                        class="ma-2"
                        color="primary"
                        text-color="white"
                    >
                        <v-avatar left>
                            <v-icon small>mdi-trophy</v-icon>
                        </v-avatar>
                        {{rewardPoints}}
                    </v-chip>
            </v-toolbar-title>
        </v-app-bar>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {
            drawer: null,
            auth: [
                {icon: 'mdi-lightbulb', text: 'Instructions', route: '/'},
                {icon: 'mdi-account', text: 'Subscribe Now', route: '/subscribe'},
            ],
            guest: [
                {icon: 'mdi-exit-to-app', text: 'Sign Up', route: '/signup'},
                {icon: 'mdi-exit-to-app', text: 'Sign In', route: '/signin'}
            ],
            legal: [
                {text: 'TOS', route: '/tos'},
                {text: 'Privacy Policy', route: '/privacypolicy'},
            ]
        }
    },
    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn;
        },
        title() {
            return this.$route.meta.title;
        },
        rewardPoints() {
            return this.$store.getters.user.rewardPoints;
        },
    }
}
</script>

<style scoped>
.icon {
  text-transform: none !important;
}
</style>