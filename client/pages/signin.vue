<template>
  <div>
    サインインページ
    <div>
      <nuxt-link to="signin">サインイン</nuxt-link>
      <nuxt-link to="signout">サインアウト</nuxt-link>
      <nuxt-link to="signup">ユーザー登録はコチラ</nuxt-link>
    </div>
    <v-container>
      <v-row justify="center">
        <v-col sm="12" md="7">
          <h2 class="text-center subtitle-1 font-weight-bold mb-2">
            メールアドレスでアカウント登録
          </h2>
          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="#2BB7A4"
            grow
            class="mb-3"
          >
            <v-tab to="signin">ログイン</v-tab>
            <v-tab to="signup">アカウント登録</v-tab>
          </v-tabs>

          <v-row>
            <v-col sm="12">
              <v-card flat>
                <v-card-text class="pa-0">
                  <v-form
                    ref="register_form"
                    v-model="login_valid"
                    lazy-validation
                  >
                    <v-text-field
                      v-model="login_email"
                      label="メールアドレス"
                      required
                      validate-on-blur
                    />

                    <v-text-field
                      ref="register_password"
                      v-model="login_password"
                      label="パスワード"
                      required
                      :append-icon="
                        show_loginpassword ? 'mdi-eye' : 'mdi-eye-off'
                      "
                      :type="show_loginpassword ? 'text' : 'password'"
                      validate-on-blur
                      loading
                      @click:append="show_loginpassword = !show_loginpassword"
                    >
                      <template #progress>
                        <v-progress-linear absolute height="2" />
                      </template>
                    </v-text-field>
                    <v-alert v-if="loginErrorMsg" dense text type="error">
                      {{ loginErrorMsg }}
                    </v-alert>
                    <v-row justify="center">
                      <v-col md="8">
                        <div id="register-btn">
                          <v-btn
                            block
                            :disabled="!login_valid"
                            color="#2BB7A4"
                            class="mr-4 white--text"
                            @click="email_login"
                          >
                            ログイン
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase';
export default {
  data() {
    return {
      tab: null,
      login_valid: true,
      login_email: '',
      login_password: '',
      show_loginpassword: false,
      loginErrorMsg: '',
      socialLoginErrorMsg: '',
    };
  },
  methods: {
    email_login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.login_email, this.login_password)
        .then((user) => {
          firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
              // サインインしていない状態
              // サインイン画面に遷移する等
              // 例:
              this.router.push('/');
            } else {
              // サインイン済み
              console.log('サインイン済み');
              this.$router.push('/timeline');
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style></style>
