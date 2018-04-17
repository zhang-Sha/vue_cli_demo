<template>
    <ul class="type">
    	<li v-for="item in list">
    		<img :src="'img/item/'+item.img" />
    		<div class="content">
    			<h3>{{item.title}}</h3>
    			<p class="sales">已售{{item.sales}}份</p>
    			<p>
    				<span class="price">￥{{item.price}}</span>
    				<span class="add" @click="addNum(item);$store.commit('addPrice',item.price)">+</span>
    				<span class="num" v-show="item.num>0">{{item.num}}</span>
    				<span class="reduce" v-show="item.num>0" @click="reduceNum(item);$store.commit('reducePrice',item.price)">-</span>
    			</p>
    		</div>
    	</li>
    </ul>
</template>
<style type="text/css" lang="less">
.type {
	li {
		border-bottom:1px solid #ccc;
		padding:10px;
		img {
			width:70px;
			float:left;
		}
		.content {
			margin-left:80px;
			h3 {
				font-size:14px;
				font-weight:normal;
			}
			.sales {
				color:#666;
				font-size:12px;
			}
			p {
				span {
                    font-size:12px;
				}
				.add,
				.num,
				.reduce {
					float:right;
					color:red;
				}
				.add,.reduce {
					display:inline-block;
					width:20px;
					height:20px;
					border:1px solid #ccc;
					border-radius:50%;
					text-align:center;
					line-height:17px;
					font-size:20px;

				}
				.num {
					color:#333;
					padding:0 10px;
					font-size:16px;
				}
			}
		}
	}
}	
</style>
<script type="text/javascript">
	export default {
		data:() => ({
			list:[],
			allData:{}
		}),
		methods:{
			addNum(item) {
				item.num++
			},
			reduceNum(item) {
				item.num--
			},
			//因为组件创建完成和监听到路由更改后都需要发送ajax获取数据，这里将该方法提取出来，还有一个问题是，如果已经获取到的数据，再次获取时不想重新发送ajax，那么我们就可以将获取的数据缓存
			getData() {
				let id = this.$route.params.id;
				if(this.allData[id]) {
					this.list = this.allData[id]
				} else {
					this.$http
						.get('data/'+id+'.json')
						.then(({data})=>{
							this.list = data;
							this.allData[id] = data;
						})
				}
			}
		},
		created() {
			this.getData();
		},
		//watch属性可以监听数据的改变，key是监听的数据字段，value是一个函数
		watch:{
			$route() {
				//监听到路由改变后，重新发送ajax获取数据
				this.getData();
			}
		}
	}
</script>