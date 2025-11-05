$(document).ready(function(){

  // MODAL
  var modalText = {
    roambi: {
      title: 'iice.co.id',
      tag: 'E-commerce and Mini ERP.',
      detail: 'iice adalah E-commerce yang berbasis Lokasi, jadi pelanggan bisa membeli barang berdasarkan lokasi terdekat dari pelanggan, fiture tracking lengkap dengan laporan penjualan',
      link: 'https://dev.iice.co.id'
    },
    walker: {
      title: 'Time Capture (TICAP)',
      tag: 'Absensi Berbasis QR Code. (PT.Canggih Multiguna Salim)',
      detail: 'Time Capture (TICAP) adalah aplikasi management absensi untuk karyawan, khusus nya bagi anda yang memiliki tempat usaha yang dimana membutuhkan monitoring realtime absesi untuk karyawan anda secara realtime.',
      link: 'https://play.google.com/store/apps/details?id=id.ticap.app'
    },
    powur: {
      title: 'Travel management',
      tag: 'PT.Bukit asam.',
      detail: 'Aplikasi travel management ini layaknya seperti GRAB / GO-jek pribadai perusahaan PT.Bukit asam, dimana seluruh karyawan nya menggunakan fiture ini untuk antar jemput.',
      
    },
    mystand: {
      title: 'My Pulsa',
      tag: 'Aplikasi layanan Pulsa Menggunakan Service XMPP. (PT.Canggih Multiguna Salim)',
      detail: 'My Pulsa adalah aplikasi hibryd pertama yang menggunakan service XMPP dan socket.io untuk chat systemnya',
    },
    never: {
      title: 'ERP',
      tag: 'Enterprice Resource Plannig (CV.Amor Group).',
      detail: 'ERP ini digunakan di salahsatu perusaahan makanan dan kue di kota sukabumi, dengan fiture Inventory, Produksi, hingga penjualan.',
      link: 'https://boluamor.co.id/'
    },
    // themall: {
    //   title: 'LEAP',
    //   tag: 'Learning Journey Erajaya App. (PT.Erajaya Swasembada.tbk)',
    //   detail: 'Aplikasi HR untuk peningkatan kualitas Karyawan di PT.Erajaya swasembada.tbk berbasis android dan IOS .',
    //   link: 'https://play.google.com/store/apps/details?id=hrtech.erajaya.superapps'
    // },
    omy: {
      title: 'OMY',
      tag: 'Homyped Ladies (PT.Inti Prima Indonesia)',
      detail: 'Aplikasi order barang khusus untu mitra distibutor PT.Inti Prima Indonesia (Homyped Ladies), aplikasi ini membantu memudahkan para mitra distibutor untuk memesan Sepatu / Sandal secara langsung dan dapat memantau nya secara realtime',
      link: 'https://play.google.com/store/apps/details?id=com.hdma.iice'
    },
    learnathon: {
      title: 'Learnathon',
      tag: 'DIGITAL LUXURY BRANDING (INDIA)',
      detail: 'Aplikasi e-learning untuk perusahaan Digital Luxury Branding di India, menggunakan IONIC 5, backend CMS e-learning web  : https://www.learnathonworld.com/',
      link: 'https://play.google.com/store/apps/details?id=com.learnathon.ionic'
    },

    tt: {
      title: 'Thunderteacher',
      tag: 'PT.GURU TERBAIK BANGSA',
      detail: 'Aplikasi les bimbel berbagai mata kuliah, belajar bahasa asing melalui video call langsung dari hp, dengan video call , menggunakan IONIC 5 Angular 8, dan backeend Laravel, Socket.io, dan PeerJS (untuk vdeocall) web  : https://thunderteacher.com',
      link: 'https://play.google.com/store/apps/details?id=com.thunderteacher.mobile'
    },
    msl: {
      title: 'MSL Squad APp',
      tag: 'PT MITRAUTAMA SEJAHTERA LOGISTIK',
      detail: 'Aplikasi tracking dan deliveryman PT MITRAUTAMA SEJAHTERA LOGISTIK, memudahkan kurir dalam pengiriman barang ke customer ',
      link: 'https://play.google.com/store/apps/details?id=mslsquad.erizky.asia'
    },
    tokmir: {
      title: 'Aplikasi Tokomiring',
      tag: 'Mobile E-commerce & Retail (PT.Tokomiring)',
      detail: 'Aplikasi E-commerce berbasis mobile untuk PT.Tokomiring, dengan fiture lengkap seperti katalog produk, pemesanan, tracking order, hingga pembayaran secara mobile.',
      link: 'https://play.google.com/store/apps/details?id=com.tokomiring'
    },
    tokmir_web: {
      title: 'Web & POS Tokomiring',
      tag: 'Web E-commerce & POS Retail (PT.Tokomiring)',
      detail: 'Backend web pengelolaan produk dan point of sales (POS) untuk retail PT.Tokomiring, dengan fiture lengkap seperti pengelolaan produk, kategori, stok, hingga laporan penjualan secara real-time.',
      link: 'https://tokomiring.id'
    },
    gancang: {
      title: 'Aplikasi Gancang.net',
      tag: 'Management Pengelolaan internet',
      detail: 'Aplikasi pengelolaan pelanggan dan monitoring jaringan internet untuk ISP Gancang.net, memudahkan admin dalam mengelola pelanggan, tagihan, hingga monitoring jaringan secara real-time.',
      link: 'https://play.google.com/store/apps/details?id=com.gancangnet_v2'
    }
  };

  $('#gallery .button').on('click', function(){
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
      slideWidth = 700,
      threshold = slideWidth/3,
      dragStart, 
      dragEnd;

  setDimensions();

  $('#next').click(function(){ shiftSlide(-1) })
  $('#prev').click(function(){ shiftSlide(1) })

  carousel.on('mousedown', function(){
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function(){
      dragEnd = event.pageX;
      $(this).css('transform','translateX('+ dragPos() +'px)');
    });
    $(document).on('mouseup', function(){
      if (dragPos() > threshold) { return shiftSlide(1) }
      if (dragPos() < -threshold) { return shiftSlide(-1) }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1)
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup')
    carousel.off('mousemove')
            .addClass('transition')
            .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
    setTimeout(function(){
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition')
      carousel.css('transform','translateX(0px)'); 
    },700)
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link) $('#modal .button').addClass('visible')
                                               .parent()
                                               .attr('href', modalText[id].link)

    $.each($('#modal li'), function(index, value ) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background: "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
              
    });
  }
})
