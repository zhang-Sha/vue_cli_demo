import Vue from 'vue'
import Router from 'vue-router'
import Shop from './components/shop.vue'
import Product from './components/product.vue'
import Evaluate from './components/evaluate.vue'
import Seller from './components/seller.vue'
import Type from './components/type.vue'

Vue.use(Router)

export default new Router({
  routes: [
    //shop
    {
      path:'/shop/:shopName',
      component:Shop,
      children:[
        {
          path:'product',
          component:Product,
          redirect:'product/type/01',
          children:[
            {
              path:'type/:id',
              component:Type
            }
          ]
        },
        {
          path:'evaluate',
          component:Evaluate
        },
        {
          path:'seller',
          component:Seller
        },
        {
          path:"*",
          redirect:'product/type/01'
        }
      ]
    },
    {
      path:"*",
      redirect:'/shop/dks/product/type/01'
    }
  ]
})
