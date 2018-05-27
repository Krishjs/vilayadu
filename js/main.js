(function () {
    var kjs = {
      app: null,
      addComponents: function () {
        Vue.component('menu-item', {
          props: ['menuitem'],
          template: '<li><a :href="menuitem.url">{{ menuitem.text }}</a></li>'
        });
      },
      init: function () {
        this.addComponents();
        this.app = new Vue({
          el: '#kjsapp',
          data: {
            name: 'Vilayadu',
            menu: [{
                url: 'about',
                text: "About"
              },
              {
                url: 'work',
                text: "Work"
              },
              {
                url: 'Tournament',
                text: "Tournament"
              }
            ]
          }
        });
      },
    };
    kjs.init();
  })();