<template>
	<div>
		<div
			v-for="ask in asks"
			:key="ask.id"
		>
			{{ ask.title }}
		</div>
	</div>
</template>

<script>
import { fetchAskList } from '../api';

export default {
	data() {
		return {
			asks: []
		};
	},
	created() {
		fetchAskList()
			.then(res => (this.asks = res.data))
			.catch(err => {
				console.log('err:', err);
			});
	}
};
</script>

<style scoped>
</style>