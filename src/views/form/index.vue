<template>
  <!-- 内部门户 -->
  <div id="ContractDetailsPage" style="padding: 10px;">
    <el-row :gutter="20" >
      <el-col :span="12">
        <draggable>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>{{ htsum }}待审核合同</span>
              <router-link to="/partnerCenter/contAudit"><el-button style="float: right; padding: 3px 0" type="text" size="mini">...</el-button></router-link>
            </div>
            <el-table
              :data="tableData1"
              :show-header="false"
              :height="syheight"
              size="mini"
              row-key="id"
              highlight-current-row
              tooltip-effect="dark"
              fit
              stripe
              style="width: 100%;">
              <el-table-column prop="name"/>
              <el-table-column prop="create_time" show-overflow-tooltip/>
              <el-table-column prop="first_part" show-overflow-tooltip align="center" width="200"/>
            </el-table>
          </el-card>
        </draggable>
      </el-col>
      <el-col :span="12">
        <draggable>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>{{ zdsum }}超期账单</span>
              <router-link to="/bills/billInquiry">
                <el-button style="float: right; padding: 3px 0" type="text" size="mini">...</el-button>
              </router-link>
            </div>
            <el-table
              :data="tableData2"
              :show-header="false"
              :height="htheight"
              size="mini"
              row-key="id"
              highlight-current-row
              tooltip-effect="dark"
              fit
              stripe
              style="width: 100%;">
              <el-table-column prop="customer_name"/>
              <el-table-column prop="start_date" show-overflow-tooltip/>
              <el-table-column prop="end_date" show-overflow-tooltip/>
              <el-table-column :formatter="fee_formatter" prop="fee" align="center" width="100"/>
            </el-table>
          </el-card>
        </draggable>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top:10px;">
      <el-col :span="12">
        <draggable>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>试用客户</span>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
            </div>
            <el-table
              :data="tableData3"
              :show-header="false"
              :height="zdheight"
              size="mini"
              row-key="id"
              highlight-current-row
              tooltip-effect="dark"
              fit
              stripe
              style="width: 100%;">
              <el-table-column prop="name"/>
              <el-table-column prop="date" show-overflow-tooltip/>
              <el-table-column prop="address" show-overflow-tooltip/>
            </el-table>
          </el-card>
        </draggable>
      </el-col>
      <el-col :span="12">
        <draggable>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>最新通知</span>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
            </div>
            <el-table
              :data="tableData4"
              :show-header="false"
              :height="tzheight"
              size="mini"
              row-key="id"
              highlight-current-row
              tooltip-effect="dark"
              fit
              stripe
              style="width: 100%;">
              <el-table-column prop="name"/>
              <el-table-column prop="date" show-overflow-tooltip/>
              <el-table-column prop="address" show-overflow-tooltip/>
            </el-table>
          </el-card>
        </draggable>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Sortable from 'sortablejs'
export default {
  name: 'Internal',
  components: {
    draggable,
    Sortable
  },
  data() {
    return {
      tableData1: [], // 待审核合同
      tableData2: [], //  超期账单
      tableData3: [], // 试用客户
      tableData4: [], // 消息通知
      syheight: document.documentElement.clientHeight * 0.355, // 试用客户 表格高度
      htheight: document.documentElement.clientHeight * 0.355, // 待审核合同 表格高度
      zdheight: document.documentElement.clientHeight * 0.35, // 超期账单 表格高度
      tzheight: document.documentElement.clientHeight * 0.35, // 最新通知 表格高度
      htsum: '', // 合同总计
      zdsum: '' // 账单总计
    }
  },
  computed: {

  },
  created() {
  },
  methods: {

  }
}
</script>

<style >
#ContractDetailsPage .el-card .el-card__header{
  padding: 8px 10px!important;
}
.box-card{

}
</style>
