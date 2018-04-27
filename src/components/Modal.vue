<template>
  <div v-if="showModal">
    <transition name="modal">
      <div class="modal-mask" v-show="shown">
        <div class="modal-wrapper">
          <div class="modal-container">
            <button type="button" class="close" @click="hide()"></button>
            <div class="modal-header">
              <slot name="header"></slot>
            </div>
            <div class="modal-body">
              <slot name="body">
                default body
              </slot>
            </div>
            <div class="modal-footer"><slot name="footer"></slot></div>
            <slot name="container"></slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>

export default {
	model:{
		prop: 'showModal',
		event: 'changeVisibility',
	},
	data(){
		return {
      shown: false, 
		};
	},
	props: {
		showModal: {
			type: Boolean,
			default: false,
		}
	},
  methods:{
    hide(){
      this.shown = false; 
      window.setTimeout(()=>this.$emit('changeVisibility', false),  550);
    }
  },
  // mounted(){
  //   this.shown = true;
  // },
  updated(){
    if(this.showModal)
      window.setTimeout(() => this.shown = true, 10); 
  },
};
	
</script>
<style scoped>
button.close{
    float: right;
    margin-top: -15px;
    margin-right: -15px;
    cursor: pointer;
    color: #fff;
    border: 1px solid #AEAEAE;
    border-radius: 80px;
    background: #605F61;
    font-size: 21px;
    font-weight: bold;
    display: inline-block;
    /*line-height: 0px;*/
    padding: 0px 8px;
}
button.close::after{
  content: "x";
}

.modal-mask {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity 0.5s ease;
}
/*.modal-leave-to, .modal-enter {
  display: none;
}*/
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 80%;
  margin: 0px auto;
  /*padding: 20px 45px;*/
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all 0.5s ease;
  font-family: Helvetica, Arial, sans-serif;
}

@media screen and (min-width:1100px){
  .modal-container{
    width:950px;
  }
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 40px 45px;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}


.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>