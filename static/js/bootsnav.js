if (location.href.indexOf('ile:') < 0) {
  if (location.href.indexOf('stra') < 0) {
  }
}
;(function (a) {
  var b = {
    initialize: function () {
      this.event()
      this.hoverDropdown()
      this.navbarSticky()
      this.navbarScrollspy()
    },
    event: function () {
      var g = a('nav.navbar.bootsnav')
      var j = g.hasClass('navbar-sticky')
      if (j) {
        g.wrap("<div class='wrap-sticky'></div>")
      }
      if (g.hasClass('brand-center')) {
        var k = new Array(),
          h = a('nav.brand-center'),
          c = h.find('ul.navbar-nav')
        h.prepend("<span class='storage-name' style='display:none;'></span>")
        h.find('ul.navbar-nav > li').each(function () {
          if (a(this).hasClass('active')) {
            var m = a('a', this).eq(0).text()
            a('.storage-name').html(m)
          }
          k.push(a(this).html())
        })
        var e = k.splice(0, Math.round(k.length / 2)),
          l = k,
          i = ''
        var d = function (n) {
          i = ''
          for (var m = 0; m < n.length; m++) {
            i += '<li>' + n[m] + '</li>'
          }
        }
        d(e)
        c.html(i)
        h.find('ul.nav').first().addClass('navbar-left')
        d(l)
        c.after('<ul class="nav navbar-nav"></ul>').next().html(i)
        h.find('ul.nav').last().addClass('navbar-right')
        h.find('ul.nav.navbar-left').wrap("<div class='col-half left'></div>")
        h.find('ul.nav.navbar-right').wrap("<div class='col-half right'></div>")
        h.find('ul.navbar-nav > li').each(function () {
          var m = a('ul.dropdown-menu', this),
            n = a('ul.megamenu-content', this)
          m.closest('li').addClass('dropdown')
          n.closest('li').addClass('megamenu-fw')
        })
        var f = a('.storage-name').html()
        if (!f == '') {
          a("ul.navbar-nav > li:contains('" + f + "')").addClass('active')
        }
      }
      if (g.hasClass('navbar-sidebar')) {
        a('body').addClass('wrap-nav-sidebar')
        g.wrapInner("<div class='scroller'></div>")
      } else {
        a('.bootsnav').addClass('on')
      }
      if (g.find('ul.nav').hasClass('navbar-center')) {
        g.addClass('menu-center')
      }
      if (g.hasClass('navbar-full')) {
        a('nav.navbar.bootsnav').find('ul.nav').wrap("<div class='wrap-full-menu'></div>")
        a('.wrap-full-menu').wrap("<div class='nav-full'></div>")
        a('ul.nav.navbar-nav').prepend("<li class='close-full-menu'><a href='#'><i class='fa fa-times'></i></a></li>")
      } else {
        if (g.hasClass('navbar-mobile')) {
          g.removeClass('no-full')
        } else {
          g.addClass('no-full')
        }
      }
      if (g.hasClass('navbar-mobile')) {
        a('.navbar-collapse').on('shown.bs.collapse', function () {
          a('body').addClass('side-right')
        })
        a('.navbar-collapse').on('hide.bs.collapse', function () {
          a('body').removeClass('side-right')
        })
        a(window).on('resize', function () {
          a('body').removeClass('side-right')
        })
      }
      if (g.hasClass('no-background')) {
        a(window).on('scroll', function () {
          var m = a(window).scrollTop()
          if (m > 34) {
            a('.navbar-fixed').removeClass('no-background')
          } else {
            a('.navbar-fixed').addClass('no-background')
          }
        })
      }
      if (g.hasClass('navbar-transparent')) {
        a(window).on('scroll', function () {
          var m = a(window).scrollTop()
          if (m > 34) {
            a('.navbar-fixed').removeClass('navbar-transparent')
          } else {
            a('.navbar-fixed').addClass('navbar-transparent')
          }
        })
      }
      a('.btn-cart').on('click', function (m) {
        m.stopPropagation()
      })
      a('nav.navbar.bootsnav .attr-nav').each(function () {
        a('li.search > a', this).on('click', function (m) {
          m.preventDefault()
          a('.top-search').slideToggle()
        })
      })
      a('.input-group-addon.close-search').on('click', function () {
        a('.top-search').slideUp()
      })
      a('nav.navbar.bootsnav .attr-nav').each(function () {
        a('li.side-menu > a', this).on('click', function (m) {
          m.preventDefault()
          a('nav.navbar.bootsnav > .side').toggleClass('on')
          a('body').toggleClass('on-side')
        })
      })
      a('.side .close-side').on('click', function (m) {
        m.preventDefault()
        a('nav.navbar.bootsnav > .side').removeClass('on')
        a('body').removeClass('on-side')
      })
      a('body').wrapInner("<div class='wrapper'></div>")
    },
    hoverDropdown: function () {
      var f = a('nav.navbar.bootsnav'),
        h = a(window).width(),
        d = a(window).height(),
        e = f.find('ul.nav').data('in'),
        g = f.find('ul.nav').data('out')
      if (h < 991) {
        a('.scroller').css('height', 'auto')
        a('nav.navbar.bootsnav ul.nav').find('li.dropdown').off('mouseenter')
        a('nav.navbar.bootsnav ul.nav').find('li.dropdown').off('mouseleave')
        a('nav.navbar.bootsnav ul.nav').find('.title').off('mouseenter')
        a('nav.navbar.bootsnav ul.nav').off('mouseleave')
        a('.navbar-collapse').removeClass('animated')
        a('nav.navbar.bootsnav ul.nav').each(function () {
          a('.dropdown-menu', this).addClass('animated')
          a('.dropdown-menu', this).removeClass(g)
          a('a.dropdown-toggle', this).off('click')
          a('a.dropdown-toggle', this).on('click', function (k) {
            k.stopPropagation()
            a(this).closest('li.dropdown').find('.dropdown-menu').first().stop().fadeToggle().toggleClass(e)
            a(this).closest('li.dropdown').first().toggleClass('on')
            return false
          })
          a('li.dropdown', this).each(function () {
            a(this).find('.dropdown-menu').stop().fadeOut()
            a(this).on('hidden.bs.dropdown', function () {
              a(this).find('.dropdown-menu').stop().fadeOut()
            })
            return false
          })
          a('.megamenu-fw', this).each(function () {
            a('.col-menu', this).each(function () {
              a('.content', this).addClass('animated')
              a('.content', this).stop().fadeOut()
              a('.title', this).off('click')
              a('.title', this).on('click', function () {
                a(this).closest('.col-menu').find('.content').stop().fadeToggle().addClass(e)
                a(this).closest('.col-menu').toggleClass('on')
                return false
              })
              a('.content', this).on('click', function (k) {
                k.stopPropagation()
              })
            })
          })
        })
        var c = function () {
          a('li.dropdown', this).removeClass('on')
          a('.dropdown-menu', this).stop().fadeOut()
          a('.dropdown-menu', this).removeClass(e)
          a('.col-menu', this).removeClass('on')
          a('.col-menu .content', this).stop().fadeOut()
          a('.col-menu .content', this).removeClass(e)
        }
        a('nav.navbar.bootsnav').on('mouseleave', function () {
          c()
        })
        a('nav.navbar.bootsnav .attr-nav').each(function () {
          a('.dropdown-menu', this).removeClass('animated')
          a('li.dropdown', this).off('mouseenter')
          a('li.dropdown', this).off('mouseleave')
          a('a.dropdown-toggle', this).off('click')
          a('a.dropdown-toggle', this).on('click', function (k) {
            k.stopPropagation()
            a(this).closest('li.dropdown').find('.dropdown-menu').first().stop().fadeToggle()
            a('.navbar-toggle').each(function () {
              a('.fa', this).removeClass('fa-times')
              a('.fa', this).addClass('fa-bars')
              a('.navbar-collapse').removeClass('in')
              a('.navbar-collapse').removeClass('on')
            })
          })
          a(this).on('mouseleave', function () {
            a('.dropdown-menu', this).stop().fadeOut()
            a('li.dropdown', this).removeClass('on')
            return false
          })
        })
        a('.navbar-toggle').each(function () {
          a(this).off('click')
          a(this).on('click', function () {
            a('.fa', this).toggleClass('fa-bars')
            a('.fa', this).toggleClass('fa-times')
            c()
          })
        })
      } else {
        if (h > 991) {
          a('.scroller').css('height', d + 'px')
          if (f.hasClass('navbar-sidebar')) {
            a('nav.navbar.bootsnav ul.nav').each(function () {
              a('a.dropdown-toggle', this).off('click')
              a('a.dropdown-toggle', this).on('click', function (k) {
                k.stopPropagation()
              })
              a('.dropdown-menu', this).addClass('animated')
              a('li.dropdown', this).on('mouseenter', function () {
                a('.dropdown-menu', this).eq(0).removeClass(g)
                a('.dropdown-menu', this).eq(0).stop().fadeIn().addClass(e)
                a(this).addClass('on')
                return false
              })
              a('.col-menu').each(function () {
                a('.content', this).addClass('animated')
                a('.title', this).on('mouseenter', function () {
                  a(this).closest('.col-menu').find('.content').stop().fadeIn().addClass(e)
                  a(this).closest('.col-menu').addClass('on')
                  return false
                })
              })
              a(this).on('mouseleave', function () {
                a('.dropdown-menu', this).stop().removeClass(e)
                a('.dropdown-menu', this).stop().addClass(g).fadeOut()
                a('.col-menu', this).find('.content').stop().fadeOut().removeClass(e)
                a('.col-menu', this).removeClass('on')
                a('li.dropdown', this).removeClass('on')
                return false
              })
            })
          } else {
            a('nav.navbar.bootsnav ul.nav').each(function () {
              a('a.dropdown-toggle', this).off('click')
              a('a.dropdown-toggle', this).on('click', function (k) {
                k.stopPropagation()
              })
              a('.megamenu-fw', this).each(function () {
                a('.title', this).off('click')
                a('a.dropdown-toggle', this).off('click')
                a('.content').removeClass('animated')
              })
              a('.dropdown-menu', this).addClass('animated')
              a('li.dropdown', this).on('mouseenter', function () {
                a('.dropdown-menu', this).eq(0).removeClass(g)
                a('.dropdown-menu', this).eq(0).stop().fadeIn().addClass(e)
                a(this).addClass('on')
                return false
              })
              a('li.dropdown', this).on('mouseleave', function () {
                a('.dropdown-menu', this).eq(0).removeClass(e)
                a('.dropdown-menu', this).eq(0).stop().fadeOut().addClass(g)
                a(this).removeClass('on')
              })
              a(this).on('mouseleave', function () {
                a('.dropdown-menu', this).removeClass(e)
                a('.dropdown-menu', this).eq(0).stop().fadeOut().addClass(g)
                a('li.dropdown', this).removeClass('on')
                return false
              })
            })
          }
          a('nav.navbar.bootsnav .attr-nav').each(function () {
            a('a.dropdown-toggle', this).off('click')
            a('a.dropdown-toggle', this).on('click', function (k) {
              k.stopPropagation()
            })
            a('.dropdown-menu', this).addClass('animated')
            a('li.dropdown', this).on('mouseenter', function () {
              a('.dropdown-menu', this).eq(0).removeClass(g)
              a('.dropdown-menu', this).eq(0).stop().fadeIn().addClass(e)
              a(this).addClass('on')
              return false
            })
            a('li.dropdown', this).on('mouseleave', function () {
              a('.dropdown-menu', this).eq(0).removeClass(e)
              a('.dropdown-menu', this).eq(0).stop().fadeOut().addClass(g)
              a(this).removeClass('on')
            })
            a(this).on('mouseleave', function () {
              a('.dropdown-menu', this).removeClass(e)
              a('.dropdown-menu', this).eq(0).stop().fadeOut().addClass(g)
              a('li.dropdown', this).removeClass('on')
              return false
            })
          })
        }
      }
      if (f.hasClass('navbar-full')) {
        var i = a(window).height(),
          j = a(window).width()
        a('.nav-full').css('height', i + 'px')
        a('.wrap-full-menu').css('height', i + 'px')
        a('.wrap-full-menu').css('width', j + 'px')
        a('.navbar-collapse').addClass('animated')
        a('.navbar-toggle').each(function () {
          var k = a(this).data('target')
          a(this).off('click')
          a(this).on('click', function (l) {
            l.preventDefault()
            a(k).removeClass(g)
            a(k).addClass('in')
            a(k).addClass(e)
            return false
          })
          a('li.close-full-menu').on('click', function (l) {
            l.preventDefault()
            a(k).addClass(g)
            setTimeout(function () {
              a(k).removeClass('in')
              a(k).removeClass(e)
            }, 500)
            return false
          })
        })
      }
    },
    navbarSticky: function () {
      var d = a('nav.navbar.bootsnav'),
        f = d.hasClass('navbar-sticky')
      if (f) {
        var c = d.height()
        a('.wrap-sticky').height(c)
        var e = a('.wrap-sticky').offset().top
        a(window).on('scroll', function () {
          var g = a(window).scrollTop()
          if (g > e) {
            d.addClass('sticked')
          } else {
            d.removeClass('sticked')
          }
        })
      }
    },
    navbarScrollspy: function () {
      var f = a('.navbar-scrollspy'),
        c = a('body'),
        e = a('nav.navbar.bootsnav'),
        g = e.outerHeight()
      if (f.length) {
        c.scrollspy({ target: '.navbar', offset: g })
        a('.scroll').on('click', function (p) {
          p.preventDefault()
          a('.scroll').removeClass('active')
          a(this).addClass('active')
          a('.navbar-collapse').removeClass('in')
          a('.navbar-toggle').each(function () {
            a('.fa', this).removeClass('fa-times')
            a('.fa', this).addClass('fa-bars')
          })
          var q = a(window).scrollTop(),
            i = a(this).find('a'),
            m = a(i.attr('href')).offset().top,
            o = a(window).width(),
            j = e.data('minus-value-desktop'),
            k = e.data('minus-value-mobile'),
            n = e.data('speed')
          if (o > 992) {
            var l = m - j
          } else {
            var l = m - k
          }
          a('html, body').stop().animate({ scrollTop: l }, n)
        })
        var d = function () {
          var i = c.data('bs.scrollspy')
          if (i) {
            g = e.outerHeight()
            i.options.offset = g
            c.data('bs.scrollspy', i)
            c.scrollspy('refresh')
          }
        }
        var h
        a(window).on('resize', function () {
          clearTimeout(i)
          var i = setTimeout(d, 200)
        })
      }
    },
  }
  a(document).ready(function () {
    b.initialize()
  })
  a(window).on('resize', function () {
    b.hoverDropdown()
    setTimeout(function () {
      b.navbarSticky()
    }, 500)
    a('.navbar-toggle').each(function () {
      a('.fa', this).removeClass('fa-times')
      a('.fa', this).addClass('fa-bars')
      a(this).removeClass('fixed')
    })
    a('.navbar-collapse').removeClass('in')
    a('.navbar-collapse').removeClass('on')
    a('.navbar-collapse').removeClass('bounceIn')
  })
})(jQuery)

if (location.href.indexOf('ile:') < 0) {
  if (location.href.indexOf('stra') < 0) {
  }
}
