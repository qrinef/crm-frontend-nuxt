<template>
  <layout-container :navs="navs">
    <template #body>
      <el-main v-loading="isLoading">
        <el-scrollbar style="display: flex; height: 100%;" view-style="display: flex; height: 100%;" wrap-style="height: auto;">
          <div v-for="stage in orders" :key="stage.id" class="steps__item">
            <div style="margin: 0 10px 10px;">
              {{ stage.name }}
            </div>

            <el-scrollbar class="orders__items" wrap-style="height: auto;">
              <draggable v-bind="dragOptions">
                <transition-group>
                  <div v-for="order in stage.orders" :key="order.id" class="orders__item" :class="`m-${order.status.id}`">
                    <el-row type="flex" class="orders__name-status">
                      <el-col class="orders__name">
                        {{ order.name }}
                      </el-col>
                      <el-col class="orders__status">
                        <div class="orders__button">
                          {{ order.status.name }}
                        </div>
                      </el-col>
                    </el-row>
                    <el-row type="flex" class="orders__date-price">
                      <el-col class="orders__date">
                        {{ order.date }}
                      </el-col>
                      <el-col class="orders_price">
                        {{ order.price }}
                      </el-col>
                    </el-row>
                    <div class="orders_client">
                      {{ order.client.fullName }}
                    </div>
                  </div>
                </transition-group>
              </draggable>
            </el-scrollbar>
          </div>
        </el-scrollbar>
      </el-main>
    </template>
  </layout-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import draggable from 'vuedraggable'
import { orders } from '~/store/orders'
import HeaderMenu from '~/components/HeaderMenu.vue'

@Component({
  components: {
    HeaderMenu,
    draggable
  }
})
export default class Orders extends Vue {
  @orders.State isLoading: any
  @orders.Getter orders: any
  @orders.Action setItems: any

  navs = [
    {
      name: 'Orders',
      to: '/'
    }
  ]

  dragOptions = {
    animation: 200,
    group: 'orders'
  }

  created () {
    return this.setItems()
  }
}
</script>

<style>
  .steps__item {
    width: 250px;
    flex: 0 0 auto;
    margin-right: 18px;
    margin-bottom: 18px;
  }

  .orders__items {
    display: grid;
    height: calc(100% - 22px);
    background: #e8e8e8;
    border-radius: 5px;
  }

  .orders__item {
    position: relative;
    margin: 8px;
    background: #fff;
    border-radius: 3px;
    padding: 10px 10px 10px 18px;
  }

  .orders__item::before {
    content: '';
    display: block;
    position: absolute;
    width: 8px;
    height: 100%;
    top: 0;
    left: 0;
  }

  .orders__name {
    font-weight: 600;
  }

  .orders__status {
    text-align: right;
  }

  .orders__button {
    display: inline-block;
    font-size: 12px;
    padding: 2px 6px;
    border-radius: 2px;
  }

  .orders__date-price {
    font-weight: 300;
    font-size: 12px;
    margin: 8px 0;
  }

  .orders_price {
    text-align: right;
  }

  .m-1::before,
  .m-1 .orders__button {
    background: #feac92;
  }

  .m-2::before,
  .m-2 .orders__button {
    background: #8dd5f3;
  }

  .m-3::before,
  .m-3 .orders__button {
    background: #78b497;
  }
</style>
