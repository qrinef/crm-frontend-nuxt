<template>
  <el-main>
    <el-scrollbar class="steps__items" view-class="steps__scrollbar__view">
      <div v-for="step in steps" :key="step.key" class="steps__item">
        {{ step.label }}

        <el-scrollbar class="orders__items" view-class="orders__scrollbar__view">
          <draggable v-bind="dragOptions">
            <transition-group>
              <div v-for="order in step.orders" :key="order.key" class="orders__item" :class="`m-${order.status.id}`">
                <el-row type="flex" class="orders__name-status">
                  <el-col class="orders__name">
                    {{ order.label }}
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
                  {{ order.client }}
                </div>
              </div>
            </transition-group>
          </draggable>
        </el-scrollbar>
      </div>
    </el-scrollbar>
  </el-main>
</template>

<style>
  .el-main {
    background: #EDEDED;
    height: calc(100vh - 60px);
  }

  .steps__items {
    height: 100%;
  }
  .steps__item {
    width: 250px;
    margin-right: 18px;
    margin-bottom: 18px;
  }
  .steps__scrollbar__view {
    display: flex;
    height: 100%;
  }
  .steps__scrollbar__view > * {
    flex: 0 0 auto;
  }

  .orders__items {
    height: calc(100% - 20px);
    background: #E8E8E8;
    padding: 8px;
    border-radius: 5px;
  }
  .orders__item {
    position: relative;
    margin-bottom: 8px;
    background: #fff;
    border-radius: 3px;
    padding: 10px 10px 10px 18px;
  }
  .orders__item:before {
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
  .m-1:before, .m-1 .orders__button {
    background: #FEAC92;
  }
  .m-2:before, .m-2 .orders__button {
    background: #8DD5F3;
  }
  .m-3:before, .m-3 .orders__button {
    background: #78B497;
  }
  .orders__scrollbar__view {
    max-height: calc(100% - 20px);
  }

  .el-scrollbar__bar {
    /*opacity: 1;*/
  }
</style>

<script>
import draggable from 'vuedraggable'

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default {
  name: 'Home',
  components: {
    draggable
  },
  data () {
    const av = [20, 3, 6, 1, 15, 5, 3, 7, 2, 10]

    const generateData = (_) => {
      const data = []
      let y = 0

      for (const [i, st] of av.entries()) {
        const orders = []
        for (let x = 1; x <= st; x++) {
          y++
          orders.push({
            key: y,
            label: `Order №${y}`,
            client: 'Cullough Lina Kenyon',
            status: { id: getRandomInt(1, 3), name: 'In progress' },
            price: '$ 2300',
            date: '2020-01-01'
          })
        }

        data.push({
          key: i + 1,
          label: `Step ${i + 1}`,
          orders
        })
      }

      return data
    }
    return {
      steps: generateData()
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 200,
        group: 'orders'
      }
    }
  }
}
</script>
