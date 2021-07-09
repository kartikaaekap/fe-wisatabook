<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="10">
      <v-list-item>
        <v-list-item-icon class="mr-2 mr-md-10">
          <v-avatar :size="sizeAvatar">
            <v-img :src="wisataBook.catalog_data.hero_image" fluid></v-img>
          </v-avatar>
        </v-list-item-icon>
        <v-list-item-content class="ml-2 ml-md-10">
          <p class="text-h6 text-md-h5">{{ wisataBook.name }}</p>
          <v-list-item class="ml-0 pl-0">
            <v-rating
              v-model="rating"
              class="ml-0 pl-0"
              dense
              readonly
              :color="colorRating"
              size="20"
            ></v-rating>
            <v-chip class="ma-2" color="accent" outlined label>
              {{ wisataBook.catalog_data.category }}
            </v-chip>
          </v-list-item>
          <p>{{ wisataBook.catalog_data.address }}</p>
          <v-list-item class="ml-0 pl-0">
            <v-progress-circular
              :value="wisataBook.catalog_data.review_rating"
              :color="colorProgress"
            >
              {{ wisataBook.catalog_data.review_rating }}
            </v-progress-circular>
            <span class="ml-2">Excellent · 4,823 reviews</span>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
      <v-tabs centered color="accent">
        <v-tab>
          <v-icon> mdi-grid </v-icon>
          <span> PHOTOS </span></v-tab
        >
      </v-tabs>
      <v-slide-group v-model="selectedCaption" show-arrows mandatory>
        <v-slide-item
          v-for="tag in tags"
          :key="tag"
          v-slot="{ active, toggle }"
        >
          <v-chip
            :color="active ? 'blue lighten-5' : 'grey lighten-2'"
            :text-color="active ? 'blue darken-2' : 'black'"
            :outlined="active ? false : true"
            class="ma-2"
            @click="toggle"
          >
            {{ tag }}
          </v-chip>
        </v-slide-item>
      </v-slide-group>
      <v-row>
        <v-col
          v-for="picture in showPicture"
          :key="picture.size_sm"
          :color="$vuetify.theme.dark ? '#121212' : 'white'"
          class="d-flex child-flex"
          cols="4"
        >
          <div style="cursor: pointer" @click="handleShowImage()">
            <v-img aspect-ratio="1" :src="picture.size_lg"></v-img>
          </div>
        </v-col>
      </v-row>
      <v-dialog v-if="isPopup" v-model="isPopup">
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(picture, i) in showPicture"
            :key="i"
            :src="picture.size_lg"
          ></v-carousel-item>
        </v-carousel>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  props: {
    items: { type: Array, default: () => [] },
  },
  async asyncData({ store }) {
    return {
      wisataBook: await store.dispatch('getWisataBook'),
    }
  },
  data: () => ({
    rating: 5,
    colorRating: '#FFA726',
    colorProgress: '#8E24AA',
    selectedCaption: null,
    isPopup: false,
    gambar: [
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },
    ],
    tags: [
      'All',
      'Featured Image',
      'Lobby',
      'Room',
      'Living Area',
      'Living Room',
      'Room Amenity',
      'Bathroom',
      'Indoor Pool',
      'Gym',
      'Spa',
      'Restaurant',
      'Breakfast Meal',
      'Bar',
      'Meeting Facility',
      'Business Center',
      'Executive Lounge',
      'Exterior Detail',
      'Exterior',
      'City View',
    ],
  }),
  computed: {
    sizeAvatar() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 80
        case 'sm':
          return 80
        case 'md':
          return 150
        case 'lg':
          return 180
        case 'xl':
          return 180
      }
      return this.sizeAvatar
    },
    // eslint-disable-next-line object-shorthand
    showPicture: function () {
      let img = this.wisataBook.images
      const model = this.selectedCaption
      if (model === 1) {
        img = this.wisataBook.images.filter(
          (item) => item.caption === 'Featured Image'
        )
      } else if (model === 2) {
        img = this.wisataBook.images.filter((item) => item.caption === 'Lobby')
      } else if (model === 3) {
        img = this.wisataBook.images.filter((item) => item.caption === 'Room')
      } else if (model === 4) {
        img = this.wisataBook.images.filter(
          (item) => item.caption === 'Living Area'
        )
      } else if (model === 5) {
        img = this.wisataBook.images.filter(
          (item) => item.caption === 'Living Room'
        )
      } else if (model === 6) {
        img = this.wisataBook.images.filter(
          (item) => item.caption === 'Room Amenity'
        )
      } else if (model === 7) {
        img = this.wisataBook.images.filter(
          (item) => item.caption === 'Bathroom'
        )
      } else if (model === 8) {
        img = this.wisataBook.images.filter(
          (item) => item.caption === 'Indoor Pool'
        )
      } else if (model === 9) {
        img = this.wisataBook.images.filter((item) => item.caption === 'Gym')
      } else if (model === 10) {
        img = this.wisataBook.images.filter((item) => item.caption === 'Spa')
      } else if (model === 11) {
        img = this.wisataBook.images.filter(
          (item) => item.caption === 'Restaurant'
        )
      } else if (model === 12) {
        img = this.wisataBook.images.filter(
          (item) => item.caption === 'Breakfast Meal'
        )
      } else if (model === 13) {
        img = this.wisataBook.images.filter((item) => item.caption === 'Bar')
      } else if (model === 14) {
        img = this.wisataBook.images.filter(
          (item) => item.caption === 'Meeting Facility'
        )
      } else if (model === 15) {
        img = this.wisataBook.images.filter(
          (item) => item.caption === 'Business Center'
        )
      } else if (model === 16) {
        img = this.wisataBook.images.filter(
          (item) => item.caption === 'Executive Lounge'
        )
      } else if (model === 17) {
        img = this.wisataBook.images.filter(
          (item) => item.caption === 'Exterior Detail'
        )
      } else if (model === 18) {
        img = this.wisataBook.images.filter(
          (item) => item.caption === 'Exterior'
        )
      } else if (model === 19) {
        img = this.wisataBook.images.filter(
          (item) => item.caption === 'City View'
        )
      }
      return img
    },
  },
  methods: {
    showImage() {
      this.isPopup = true
    },
    handleShowImage() {
      this.showImage()
    },
  },
}
</script>