<template>
	<div class="product">
		<ul class="sub-nav">
			<router-link v-for="item in nav" v-text="item.text" :to="'/shop/'+$route.params.shopName + '/product/type/' +item.id" tag="li"></router-link>
		</ul>
		<div class="list">
			<router-view></router-view>
		</div>
		
	</div>
</template>
<style type="text/css" lang="less">
.product {
    .sub-nav {
    	float:left;
    	li {
    		width:100px;
    		line-height:40px;
    		text-align:center;
    		background:#f5f5f5;
    		color:#666;
    		font-size:16px;
    		border-left:2px solid transparent;
    		&.router-link-active {
    			border-left-color:red;
    			background:#fff;
    			color:red;
    		}
    	}
    }
    .list {
        margin-left:110px;
    }
}	
</style>
<script type="text/javascript">
	export default {
		data:() => ({
			nav:{}
		}),
		created() {
			this.$http
				.get('data/menu.json')
				.then(({data}) => {
					this.nav = data
				})
		}
	}
</script>