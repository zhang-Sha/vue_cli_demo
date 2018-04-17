<template>
	<div class="shop">
		<div class="header">
            <h2>{{data.title}}</h2>
            <img src="img/logo.jpg" />
            <p>{{data.info}}</p>
        </div>
        <ul class="nav">
            <router-link v-for="item in data.menu" v-text="item.text" :to="'/shop/'+ $route.params.shopName + '/' + item.id" tag="li"></router-link>
        </ul>
        <router-view class="cont">

        </router-view>
        <div class="footer">
        	<a href="javascript:;">去结算</a>
        	<p>共 {{$store.state.num}} 元</p>
        	
        </div>
	</div>
</template>
<style type="text/css" lang="less">
.shop {
	.header {
		height:90px;
		background:orange;
		padding:10px;
		color:#fff;
		h2 {
			line-height:30px;
			font-size:18px;
			font-weight:normal;
			text-align:center;
		}
		img {
			width:60px;
			height:60px;
			border-radius: 50%;
			float: left;
		}
		p {
			margin-left:80px;
			line-height:40px;
			font-size:14px;
		}
	}
	.nav {
		text-align:center;
		background:#eee;
		li {
			display:inline-block;
			height:40px;
			line-height:40px;
			padding:0 25px;
			font-size:16px;
			color:#666;
			border-bottom:2px solid transparent;
			&.router-link-active {
				color:red;
				border-bottom-color:red;
			}
		}
	}
	.cont {
		margin-bottom:50px;
	}
	.footer {
		position:fixed;
		left:0;right:0;bottom:0px;
		height:50px;
		line-height:50px;background:#eee;
		p {
            text-align:center;
            font-size:18px;
		}
		a {
			float:right;
			padding:0 30px;
			background:orange;
			color:#fff;
			font-size:18px;
		}

	}
}
</style>
<script type="text/javascript">

    //实例化vue对象在main.js中实现了，这里需要配置vue对象即可
    export default {
        data:() => ({
           data:{} 
        }),
        created() {
            this.$http
            	.get('data/'+ this.$route.params.shopName +'.json')
            	.then(({data}) => {
            		this.data = data
            	})
        }
    }
</script>