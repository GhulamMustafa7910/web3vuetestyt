

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { userCryptoStore } from '~/stores/crypto'

const messsageInput = ref(null as any)

const cryptoStore = userCryptoStore()

const { wave, connectWallet } = userCryptoStore()
const { account , guestPosts, guestPostsCount} = storeToRefs(cryptoStore)
</script>

 <template>
   <div>
     <h1 style="text-align: center">Ghulam Mustafa Crypto Guest Book</h1> <br>
     <button style="text-align: center" v-if="!account" @click="connectWallet()">
       Connect Wallet
     </button> <br>
     <div style="text-align: center" v-if="account">
       <input type="text" v-model="messageInput">
     </div> <br>
     <button style="text-align: center" @click="wave(messageInput)">
       Send
     </button> <br>
     <div style="text-align: center" v-if="account">
       <h3> Number of enteries: {{ guestPostsCount }} </h3>
     </div>
     <div style="text-align: center" v-for="(guestPost, index) in guestPosts" :key="index">
       <div v-if="guestPost.message">
         <span>{{guestPost.timestamp}}</span>
         <span>{{guestPost.message}}</span>
       </div>
     </div>
   </div>
 </template>
 <route lang="yaml">
   meta:
   layout: home
   </route>

