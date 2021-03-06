"use strict";
// // function Greeter(greeting: string) {
// //     this.greeting = greeting;
// //   }
//   Greeter.prototype.greet = function() {
//     return "Hello, " + this.greeting;
//   };
//   // Oops, we're passing an object when we want a string. This will print
//   // "Hello, [object Object]" instead of "Hello, world" without error.
// //   let greeter = new Greeter("world");
//   let button = document.createElement("button");
//   button.textContent = "Say Hello";
//   button.onclick = function() {
//     alert(greeter.greet());
//   };
//   document.body.appendChild(button);
<template>
    <CenteredLayout>
        <div>
        <b-modal v-if="myModal">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                    <p class="modal-card-title">You are using Internet Explorer</p>
                    </header>
                    <section class="modal-card-body">
                    <div class="columns is-mobile">
                        <div class="column">
                            Unfortunately, we do not support Internet Explorer. We reccommend using Google Chrome.
                        </div>
                    </div>
                    </section>
                    <footer class="modal-card-foot">
                    </footer>
                </div>
            </b-modal>
        </div>
         </CenteredLayout>
</template>




 <script>
import CenteredLayout from '../../../layouts/Centered'
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
    name: 'unsupportedBrowserModal',
    compnents: {
        CenteredLayout
    }
//   },
  data() {
       return {
           myModal: false
       }
  },
  methods: {
      showModal(){
          if (navigator.userAgent.indexOf("chrome") != -1) {
        //       alert("chrome")
              this.myModal = true
          }
        }
    //     if (navigator.userAgent.indexOf("Chrome") != -1 ){
    //     //  alert("chrome")
    //   this.$refs['showUnsupportedBrowserModal'].show();
    // }
  }
}







// isSupportedBrowser(){
//     if (navigator.userAgent.indexOf("Chrome") != -1 )
//   }

// function getBrowserName() {

// if( navigator.userAgent.indexOf("Chrome") != -1 )
// {

//   alert('Chrome');
// //   showUnsupportedBrowserModal;
// }
// else if( navigator.userAgent.indexOf("Safari") != -1)
// {
//   return 'Safari';
// }
// else if( navigator.userAgent.indexOf("Firefox") != -1 )
// {
//   return 'Firefox';
// }
// else if( ( navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true ) ) //IF IE > 10
// {
//   return 'IE';
// }
// else
// {
//   return 'unknown';
// }
// }
// isSupportedBrowser()
// getBrowserName()

// function isSupportedBrowser(){
//     if(navigator.userAgent.indexOf("Chrome") != -1 ){
//         return false;
//     }
//     return true;
// }

</script>
