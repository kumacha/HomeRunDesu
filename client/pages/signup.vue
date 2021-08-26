<template>
  <div>
    サインアップページ
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
          <v-row>
            <v-col>
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
                        v-model="register_valid"
                        lazy-validation
                      >
                        <v-text-field
                          v-model="register_email"
                          label="メールアドレス"
                          :rules="emailRules"
                          required
                          validate-on-blur
                        />
                        <v-text-field
                          v-model="register_name"
                          label="ユーザー名"
                          :rules="nameRules"
                          required
                          validate-on-blur
                        />

                        <v-text-field
                          ref="register_password"
                          v-model="register_password"
                          label="パスワード"
                          required
                          :append-icon="
                            show_registerPassword ? 'mdi-eye' : 'mdi-eye-off'
                          "
                          :type="show_registerPassword ? 'text' : 'password'"
                          :rules="register_passwordRules"
                          validate-on-blur
                          loading
                          @click:append="
                            show_registerPassword = !show_registerPassword
                          "
                        >
                          <template #progress>
                            <v-progress-linear absolute height="2" />
                          </template>
                        </v-text-field>
                        <v-text-field
                          v-model="register_password_again"
                          label="パスワード（確認）"
                          required
                          :append-icon="
                            show_registerPassword ? 'mdi-eye' : 'mdi-eye-off'
                          "
                          :type="show_registerPassword ? 'text' : 'password'"
                          validate-on-blur
                          :rules="register_passwordAgainRules"
                          @click:append="
                            show_registerPassword = !show_registerPassword
                          "
                        />
                        <v-alert
                          v-if="registerErrorMsg"
                          dense
                          text
                          type="error"
                        >
                          {{ registerErrorMsg }}
                        </v-alert>
                        <div id="register-btn">
                          <v-btn
                            block
                            :disabled="!register_valid"
                            color="#2BB7A4"
                            class="mr-4 white--text"
                            @click="email_register"
                          >
                            登録
                          </v-btn>
                        </div>
                      </v-form>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
