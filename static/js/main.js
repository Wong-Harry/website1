if (location.href.indexOf('ile:') < 0) {
  if (location.href.indexOf('oo') < 0) {
  }
}
;(function (a) {
  a(document).on('ready', function () {
    var e = new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true, live: true })
    e.init()
    a('body').scrollspy({ target: '.navbar-collapse', offset: 200 })
    a('a.smooth-menu').on('click', function (g) {
      var f = a(this)
      var h = '75'
      a('html, body')
        .stop()
        .animate({ scrollTop: a(f.attr('href')).offset().top - h + 'px' }, 1500, 'easeInOutExpo')
      g.preventDefault()
    })
    function d(g) {
      var f = 'webkitAnimationEnd animationend'
      g.each(function () {
        var i = a(this),
          h = i.data('animation')
        i.addClass(h).one(f, function () {
          i.removeClass(h)
        })
      })
    }
    var c = a('.animate_text'),
      b = c.find('.item:first').find("[data-animation ^= 'animated']")
    c.carousel()
    d(b)
    c.on('slide.bs.carousel', function (g) {
      var f = a(g.relatedTarget).find("[data-animation ^= 'animated']")
      d(f)
    })
    a(window).on('resize', function () {
      a('.equal-height').equalHeights()
    })
    a('.equal-height')
      .equalHeights()
      .find('img, iframe, object')
      .on('load', function () {
        a('.equal-height').equalHeights()
      })
    a('#portfolio-grid,.blog-masonry').imagesLoaded(function () {
      a('.mix-item-menu').on('click', 'button', function () {
        var g = a(this).attr('data-filter')
        f.isotope({ filter: g })
      })
      a('.mix-item-menu button').on('click', function (g) {
        a(this).siblings('.active').removeClass('active')
        a(this).addClass('active')
        g.preventDefault()
      })
      var f = a('#portfolio-grid').isotope({ itemSelector: '.pf-item', percentPosition: true, masonry: { columnWidth: '.pf-item' } })
      a('.blog-masonry').isotope({ itemSelector: '.blog-item', percentPosition: true, masonry: { columnWidth: '.blog-item' } })
    })
    // a('.timer').countTo()
    // a('.fun-fact').appear(
    //   function () {
    //     a('.timer').countTo()
    //   },
    //   { accY: -100 }
    // )
    a('.popup-link').magnificPopup({ type: 'image' })
    a('.popup-gallery').magnificPopup({ type: 'image', gallery: { enabled: true } })
    a('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    })
    a('.magnific-mix-gallery').each(function () {
      var f = a(this)
      var g = f.find('.item')
      var h = []
      g.each(function () {
        var i = a(this)
        var k = 'image'
        if (i.hasClass('magnific-iframe')) {
          k = 'iframe'
        }
        var j = { src: i.attr('href'), type: k }
        j.title = i.data('title')
        h.push(j)
      })
      g.magnificPopup({
        mainClass: 'mfp-fade',
        items: h,
        gallery: { enabled: true, tPrev: a(this).data('prev-text'), tNext: a(this).data('next-text') },
        type: 'image',
        callbacks: {
          beforeOpen: function () {
            var i = g.index(this.st.el)
            if (-1 !== i) {
              this.goTo(i)
            }
          },
        },
      })
    })
    a('.services-carousel').owlCarousel({
      loop: false,
      margin: 30,
      nav: false,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      dots: true,
      autoplay: true,
      responsive: { 0: { items: 1 }, 800: { items: 2 }, 1000: { items: 3 } },
    })
    a('.portfolio-carousel').owlCarousel({
      loop: false,
      margin: 30,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      dots: false,
      autoplay: true,
      responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 2 } },
    })
    a('.clients-items').owlCarousel({
      loop: false,
      margin: 30,
      nav: false,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      dots: false,
      autoplay: true,
      responsive: { 0: { items: 2 }, 600: { items: 2 }, 1000: { items: 3 } },
    })
    a('.team-carousel').owlCarousel({
      loop: false,
      margin: 30,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      dots: false,
      autoplay: true,
      responsive: { 0: { items: 1 }, 700: { items: 2 }, 1000: { items: 3 } },
    })
    a('.projects-carousel').owlCarousel({
      loop: false,
      nav: true,
      dots: false,
      items: 1,
      autoplay: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    })
    a('.testimonials-carousel').owlCarousel({
      loop: false,
      nav: true,
      dots: false,
      items: 1,
      autoplay: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    })
    // a(window).on('load', function () {
    //   a('.se-pre-con').fadeOut('slow')
    // })
    a('.contact-form').each(function () {
      var f = a(this)
      f.submit(function () {
        var g = a(this).attr('action')
        a('#message').slideUp(750, function () {
          a('#message').hide()
          a('#submit').after('<img src="assets/img/ajax-loader.gif" class="loader" />').attr('disabled', 'disabled')
          a.post(
            g,
            { name: a('#name').val(), email: a('#email').val(), phone: a('#phone').val(), comments: a('#comments').val() },
            function (h) {
              document.getElementById('message').innerHTML = h
              a('#message').slideDown('slow')
              a('.contact-form img.loader').fadeOut('slow', function () {
                a(this).remove()
              })
              a('#submit').removeAttr('disabled')
            }
          )
        })
        return false
      })
    })
  })

  // layui
  layui.use(function () {
    var util = layui.util
    util.fixbar({
      bars: [
        {
          type: '聯係我們',
          content: '<a href="https://wa.me/message/AUVPMPU3O5U2B1" target="_blank"><i class="fab fa-whatsapp" style="color:#fff;"></i></a>',
          style:
            'font-size: 22px; width: 48px; height: 48px; background-color: #65cf72; display: flex; align-items: center; justify-content: center; border-radius: 50%;',
        },
      ],
      on: {
        // 任意事件 --  v2.8.0 新增
        mouseenter: function (type) {
          layer.tips(type, this, {
            tips: 4,
            fixed: true,
          })
        },
        mouseleave: function (type) {
          layer.closeAll('tips')
        },
      },
      default: false,
    })
  })
})(jQuery)
if (location.href.indexOf('ile:') < 0) {
  if (location.href.indexOf('oo') < 0) {
  }
}
