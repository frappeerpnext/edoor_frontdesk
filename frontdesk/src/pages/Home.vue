<template>
  <div class="max-w-3xl py-12 mx-auto">
    <Button
      icon-left="code"
      @click="$resources.ping.fetch"
      :loading="$resources.ping.loading"
    >
      Click to send 'ping' request
    </Button>
    <div>
      {{ $resources.ping.data }}
    </div>
    <pre>{{ $resources.ping }}</pre>
    <!-- <v-frappe-chart
  type="percentage"
  :labels="['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
  :data="[{ values: [250, 40, 30, 35, 8, 52, 17, -4] }]"
  :colors="['red']"
/> -->

    <!-- <Button @click="showDialog = true">Open Dialog</Button>
    <Dialog title="Title" v-model="showDialog">
    </Dialog> -->
    <Button @click="$router.push({ path: '/login', replace: true })">LOG IN</Button>
    <Button @click="$auth.logout">LOG out</Button>
    <hr/>
    <div class="p-6">
      {{manager}}
    </div>
    <ListManager
				ref="miniTicketList"
				:options="{
					doctype: 'Room List',
					fields: ['room_name', 'room_type_name'],
					limit: 50,
					order_by: 'modified desc',
				}"
			>
				<template #body="{ manager }">
					<div>
            {{manager.list}}
						<!-- <MiniTicketList
							:manager="manager"
							size="lg"
							class="overflow-y-scroll"
							:style="{
								height:
									viewportWidth > 768
										? 'calc(100vh - 144px)'
										: null,
							}"
						/> -->
						<div class="pb-2">
							<Button
								v-if="manager.hasNextPage"
								@click="manager.nextPage()"
							>
								Load More
							</Button>
						</div>
					</div>
				</template>
			</ListManager>
  </div>
</template>

<script>
import { Dialog } from 'frappe-ui'
import ListManager from '../components/global/ListManager.vue';
import MiniTicketList from '../components/desk/global/MiniTicketList.vue';

export default {
  name: 'Home',
  inject: ["$auth"],
  data() {
    return {
      showDialog: false,
    }
  },
  resources: {
    ping: {
      method: 'ping',
    },
  },
  components: {
    Dialog,
    ListManager,
    MiniTicketList
},
}
</script>
