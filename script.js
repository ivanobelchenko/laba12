const App = {
  data() {
    return{
      name:"",
      surname:"",
      isButtonDisabled:true,
      list:[],
    };
  },
  methods:{
    nameDelt() {
      this.name = event.target.value;
      console.log(this.name);
    },
    surnameDelt() {
      this.surname = event.target.value;
      console.log(this.surname);
    },
    addNewNote() {
        this.list.push(`
        ${this.surname[0].toUpperCase() + this.surname.toLowerCase().slice(1)} ${this.name[0].toUpperCase() + this.name.toLowerCase().slice(1)}
        `);
        this.name="";
        this.surname="";
        console.log(this.list);
    }
  },
  watch: {
    name(value) {
      if (value.length > 0 && this.surname.length > 0) {
        this.isButtonDisabled = false;
      } else {
        this.isButtonDisabled = true;
      }
    },

    surname(value) {
      if (value.length > 0 && this.name.length > 0) {
        this.isButtonDisabled = false;
      } else {
        this.isButtonDisabled = true;
      }
    },
  },
  computed: {
    countSymbols() {
      return this.name.length + this.surname.length;
    },
  }
};

Vue.createApp(App).mount('#app');

const randomizeBackgroundGradient = () => {
  const gradientList = [
      ['rgba(0, 155, 255, 0.75)', 'rgba(0, 255, 155, 0.85)'],
      ['rgba(252, 110, 81, 0.75)', 'rgba(218, 68, 83, 0.85)'],
      ['rgba(252, 110, 81, 0.75)', 'rgba(246, 187, 66, 0.85)'],
      ['rgba(255, 206, 84, 0.75)', 'rgba(140, 193, 82, 0.85)'],
      ['rgba(160, 212, 104, 0.75)', 'rgba(55, 188, 155, 0.85)'],
      ['rgba(72, 207, 173, 0.75)', 'rgba(59, 175, 218, 0.85)'],
      ['rgba(93, 156, 236, 0.75)', 'rgba(150, 122, 220, 0.85)'],
      ['rgba(172, 146, 236, 0.75)', 'rgba(215, 112, 173, 0.85)']
  ];

  let randomGradient = Math.floor(Math.random() * gradientList.length);
  document.documentElement.style.setProperty('--gradient-color-1', gradientList[randomGradient][0]);
  document.documentElement.style.setProperty('--gradient-color-2', gradientList[randomGradient][1]);
}

document.addEventListener('DOMContentLoaded', randomizeBackgroundGradient);