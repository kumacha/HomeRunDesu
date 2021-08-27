<template>
  <div>
    <v-row justify="center">
      <v-col>
        <p>就職活動であなたの武器となっているものに自信をつけませんか？</p>
      </v-col>
    </v-row>
    <v-container>
      <v-row justify="center" align-content="center">
        <v-col v-for="(item, index) in cards" :key="index" md="3">
          <div>
            <v-hover>
              <template #default="{ hover }">
                <v-card :to="item.to">
                  <v-img max-height="272.5" :src="item.src"></v-img>
                  <v-card-title>{{ item.title }}</v-card-title>
                  <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
                  <v-fade-transition>
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="#555555"
                    ></v-overlay>
                  </v-fade-transition>
                </v-card>
              </template>
            </v-hover>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: '自己PR',
          to: '/post/self',
          src: 'images/post/post1.png',
          subtitle:
            '就活用に使っている自己PRをみんなに共有して褒められてみましょう！',
        },
        {
          title: 'ガクチカ',
          to: '/post/gakutika',
          src: 'images/post/post2.png',
          subtitle: '学生時代に力を入れたことをアピールして褒められよう！',
        },
        {
          title: '研究室・ゼミ',
          to: '/post/zemi',
          src: 'images/post/post4.png',
          subtitle: '研究テーマや学会での活躍をアピールしよう！',
        },
        {
          title: '成果物',
          to: '/post/product',
          src: 'images/post/post3.png',
          subtitle: '今まで制作・開発したものを投稿して褒めてもらおう！',
        },
      ],
    };
  },
};
</script>

<style>
.card {
  max-height: 350px;
}
</style>
