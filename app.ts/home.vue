<template>
  <CenteredLayout class="distribution-admin">
    <h1 class="title is-spaced">{{bandName}} Distribution Admin</h1>
    <br>
    <router-link to="/distribution/settings"  class="button is-info is-large is-fullwidth" id="settings">Settings</router-link>
    <br>
    <router-link to="/distribution/schedule"  class="button is-info is-large is-fullwidth" id="schedule-builder">Schedule Builder</router-link>
    <br>
    <router-link to="/distribution/manage" class="button is-info is-large is-fullwidth" id="manage-host">Manage Hosts</router-link>
    <br>
    <router-link to="/distribution/stats" class="button is-info is-large is-fullwidth" id="stats">Stats</router-link>
    <br>
    <router-link to="/distribution/review" class="button is-info is-large is-fullwidth" id="review-reservation">Review Reservations</router-link>
    <br>
    <router-link to="/distribution/admin-waitlist" class="button is-info is-large is-fullwidth" id="wait-list">Wait List</router-link>
    <br>
    <router-link to="/distribution/track-user-movement" class="button is-info is-large is-fullwidth" id="track-user-movement">Track User Movement</router-link>
    <br>
    <router-link to="/distribution/location"  class="button is-info is-large is-fullwidth" id="location-settings">Location Settings</router-link>
    <br>
    <router-link to="/distribution/qr-code"  class="button is-info is-large is-fullwidth" id="qr-code">QR Code</router-link>
    <br>
    <router-link  v-if="userIsHost" to="/distribution/host"  class="button is-info is-large is-fullwidth" id="hosting-screen">Hosting Screen</router-link>
    <br>
  </CenteredLayout>
</template>

<script>
import CenteredLayout from '../../../layouts/Centered'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    CenteredLayout
  },
  computed: {
    ...mapGetters('distributionHost', [
      'usersAwaitingOrdersCount',
      'usersToGreetCount'
    ]),
    ...mapGetters('settings', [
      'bandName'
    ]),
    ...mapGetters('user', [
      'getUser',
      'userIsHost'
    ])
  }
}
</script>

<style scoped>
@media only screen and (max-width: 380px) {
  .distribution-admin .button {
    font-size: 1.25rem !important;
  }
}
</style>
