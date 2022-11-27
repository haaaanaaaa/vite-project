<script>
import { defineComponent, reactive } from "vue";
import View from "../chat/View.vue";
import Send from "../chat/Send.vue";

import { getDatabase, ref, push, onValue } from "firebase/database";
import DisplayName from "../chat/DisplayName.vue";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import Header from "../header/Header.vue";

export default defineComponent({
  components: {
    View,
    Send,
    DisplayName,
    Header,
  },
  setup() {
    const updateChat = (snap) => {
      data.chat = [];
      for (const key in snap) {
        data.chat.push({
          message: snap[key].message,
          uid: snap[key].uid,
          displayName: snap[key].displayName,
        });
      }
    };
    const data = reactive({
      user: {},
      chat: [],
      input: "",
      displayName: "",
    });
    data.user = getAuth().currentUser;
    data.displayName = data.user.displayName ?? "自分さん";
    const refMessage = ref(getDatabase(), "chat");
    onValue(refMessage, (snapshot) => {
      const data = snapshot.val();
      updateChat(data);
    });
    const pushMessage = (chatData) => {
      chatData.uid = data.user.uid;
      chatData.displayName = data.displayName;

      const db = getDatabase(); // 追加
      push(ref(db, "chat"), chatData); // 追加
    };
    const updateDisplayName = (name) => {
      updateProfile(data.user, {
        displayName: name,
      });
      data.displayName = name;
    };
    return {
      data,
      pushMessage, // 末尾に , を追加
      updateDisplayName,
    };
  },
  beforeRouteEnter: (to, from, next) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next();
      } else {
        next("/login");
      }
    });
  },
});
</script>

<template>
  <Header />
  <div class="container">
    <DisplayName v-model="data.displayName" @update="updateDisplayName" />
    <!-- 追加 -->
    <View :data="data" />
    <Send @sendMessage="pushMessage" />
  </div>
</template>
<style scoped></style>
