<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Input</div>
      <div class="page__desc">表单输入</div>
    </div>
    <div class="page__bd">
      <div class="weui-toptips weui-toptips_warn" v-if="showTopTips">错误提示</div>

      <div class="weui-cells__title">表单</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-field label="qq" placeholder="请输入qq"></mp-field>

        <mp-field label="手机号" placeholder="请输入手机号" type="number" state="vcode"></mp-field>

        <mp-field label="名称" placeholder="请输入名称" state="success"></mp-field>

        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">日期</div>
          </div>
          <div class="weui-cell__bd">
            <picker mode="date" :value="date" start="2015-09-01" end="2017-09-01" @change="bindDateChange">
              <div class="weui-input">{{date}}</div>
            </picker>
          </div>
        </div>

        <div class="weui-cell weui-cell_input">
          <div class="weui-cell__hd">
            <div class="weui-label">时间</div>
          </div>
          <div class="weui-cell__bd">
            <picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
              <div class="weui-input">{{time}}</div>
            </picker>
          </div>
        </div>

        <div class="weui-cell weui-cell_input weui-cell_vcode">
          <div class="weui-cell__hd">
            <div class="weui-label">验证码</div>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" placeholder="请输入验证码" />
          </div>
          <div class="weui-cell__ft">
            <img class="weui-vcode-img" src="/static/images/vcode.jpg" style="width: 108px" />
          </div>
        </div>
      </div>

      <div class="weui-cells__tips">底部说明文字底部说明文字</div>

      <div class="weui-cells__title">表单报错</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-field label="卡号" placeholder="请输入卡号" type="number" state="warning"></mp-field>
      </div>

      <div class="weui-cells__title">文本框：{{textInput}}</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-field placeholder="请输入文本" v-model="textInput"></mp-field>
      </div>

      <div class="weui-cells__title">文本域：{{textTextarea}}</div>
      <div class="weui-cells weui-cells_after-title">
        <mp-field placeholder="请输入文本" v-model="textTextarea" type="textarea" maxlength="50"></mp-field>
      </div>

      <div class="weui-cells__title">选择</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_select">
          <div class="weui-cell__hd" style="width: 105px">
            <picker @change="bindCountryCodeChange" :value="countryCodeIndex" :range="countryCodes">
              <div class="weui-select">{{countryCodes[countryCodeIndex]}}</div>
            </picker>
          </div>
          <div class="weui-cell__bd weui-cell__bd_in-select-before">
            <input class="weui-input" placeholder="请输入号码" />
          </div>
        </div>
      </div>

      <div class="weui-cells__title">选择</div>
      <div class="weui-cells weui-cells_after-title">
        <div class="weui-cell weui-cell_select">
          <div class="weui-cell__bd">
            <picker @change="bindAccountChange" :value="accountIndex" :range="accounts">
              <div class="weui-select">{{accounts[accountIndex]}}</div>
            </picker>
          </div>
        </div>
        <div class="weui-cell weui-cell_select">
          <div class="weui-cell__hd weui-cell__hd_in-select-after">
            <div class="weui-label">国家/地区</div>
          </div>
          <div class="weui-cell__bd">
            <picker @change="bindCountryChange" :value="countryIndex" :range="countries">
              <div class="weui-select weui-select_in-select-after">{{countries[countryIndex]}}</div>
            </picker>
          </div>
        </div>
      </div>

      <checkbox-group @change="bindAgreeChange">
        <label class="weui-agree" for="weuiAgree">
          <div class="weui-agree__text">
            <checkbox class="weui-agree__checkbox" id="weuiAgree" value="agree" checked="isAgree" />
            <div class="weui-agree__checkbox-icon">
              <icon class="weui-agree__checkbox-icon-check" type="success_no_circle" size="9" v-if="isAgree"></icon>
            </div>
            阅读并同意
            <navigator url="" class="weui-agree__link">《相关条款》</navigator>
          </div>
        </label>
      </checkbox-group>

      <div class="weui-btn-area">
        <button class="weui-btn" type="primary" bindtap="showTopTips">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
import mpField from '../../../packages/field';

export default {
  data() {
    return {
      showTopTips: false,
      textInput: '',
      textTextarea: '',

      date: '2016-09-01',
      time: '12:01',

      countryCodes: ['+86', '+80', '+84', '+87'],
      countryCodeIndex: 0,

      countries: ['中国', '美国', '英国'],
      countryIndex: 0,

      accounts: ['微信号', 'QQ', 'Email'],
      accountIndex: 0,

      isAgree: false,
    };
  },
  components: {
    mpField,
  },
  methods: {
    showTopTips() {
      const that = this;
      this.setData({
        showTopTips: true,
      });
      setTimeout(() => {
        that.setData({
          showTopTips: false,
        });
      }, 3000);
    },
    onInput(e) {
      this.textInput = e.target.value;
    },
    bindDateChange(e) {
      this.setData({
        date: e.detail.value,
      });
    },
    bindTimeChange(e) {
      this.setData({
        time: e.detail.value,
      });
    },
    bindCountryCodeChange(e) {
      this.setData({
        countryCodeIndex: e.detail.value,
      });
    },
    bindCountryChange(e) {
      this.setData({
        countryIndex: e.detail.value,
      });
    },
    bindAccountChange(e) {
      this.setData({
        accountIndex: e.detail.value,
      });
    },
    bindAgreeChange(e) {
      this.setData({
        isAgree: !!e.detail.value.length,
      });
    },
  },
};
</script>

<style lang="less">

</style>

