/**
 * Landing.js v0.1.0
 * https://github.com/vah7id/landing.js
 * MIT licensed
 *
 * Copyright (C) 2014 Vahid Taghizadeh (@vah7id)
 */

var LandingJs = {
    
    option: {
      _slide: false,
      _slideCount: null,
      _CountDown: false,
      _CountDownDate: null,
      _brand: 'Untitled',
      _description: 'No Description entered as config',
      _breif: null,
      _images: [],
    },

    currentSlider: 0,
    maxSliderCount: 5,
    
    start: function(config){
		  LandingJs._bingRequest(LandingJs.option._slideCount);
      LandingJs._setOptions(config);
      LandingJs._setContents();
    },

    _setOptions: function(config){
      console.log(config.slideCount)
      LandingJs.option[0] = config.slide;
      LandingJs.option[1] = config.slideCount;
      LandingJs.option[2] = config.countdown;
      LandingJs.option[3] = config.countdownTime;
      LandingJs.option[4] = config.brand;
      LandingJs.option[5] = config.description;
      LandingJs.option[6] = config.brief;
    },

    _setContents: function(){
      var container = document.getElementById('container');

      container.getElementsByTagName('h1')[0].innerHTML = LandingJs.option[4];
      container.getElementsByTagName('h4')[0].innerHTML = LandingJs.option[5];

      document.getElementById('brief').innerHTML = LandingJs.option[6];

      var year = LandingJs.option[3].split(',')[0];
      var month = LandingJs.option[3].split(',')[1];
      var day = LandingJs.option[3].split(',')[2];

      if(LandingJs.option[2]){
        var cdtimer = setInterval(function(){
          var cdtext = countdown(new Date(year,month,day)).toString();
          var cdel = document.getElementById('countdown');
          var splits = cdtext.split(',');
          var result = '';

          for(var i = 0 ; i < splits.length ; i++){
            var number = splits[i].split(' ')[0];
            var content = splits[i].split(' ')[1];
            if(content != 'hours')
              result = result + '<p><b>'+number+'</b><br /><span> '+content+'</span></p>';
          }
          cdel.innerHTML = result ;
        },1000);
      }


      if(LandingJs.option[0]){
        var slidertimer = setInterval(function(){
          var url = 'bing.com/'+LandingJs.option._images[LandingJs.currentSlider].getElementsByTagName('url')[0].innerHTML;
          var copyright = LandingJs.option._images[LandingJs.currentSlider].getElementsByTagName('copyright')[0].innerHTML;
          var body = document.getElementById('blur');
          body.style.backgroundImage = 'url("http://'+url+'")';
          document.getElementById('copyright').innerHTML = copyright;
          LandingJs.currentSlider++;

          if(LandingJs.currentSlider>=LandingJs.option[1])
            LandingJs.currentSlider = 0;

        },8000);
      }

    },

    _bingRequest: function(n){
    	var _url = LandingJs._urlGenerator();
    	LandingJs._loadXMLDoc(_url);
    },

    _urlGenerator: function(){
    	return 'data/bing.xml';
    },

    _loadXMLDoc: function(url){
  		var xmlhttp;
  		if (window.XMLHttpRequest)
  		  xmlhttp=new XMLHttpRequest();
  		else
  		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  		  xmlhttp.onreadystatechange=function() {
    		  if (xmlhttp.readyState==4 && xmlhttp.status==200) {

            var images = xmlhttp.responseXML.getElementsByTagName('images');

            for(var i = 0 ; i<images[0].childNodes.length ; i++)
              LandingJs.option._images[i] = images[0].childNodes[i];

            var url = 'bing.com/'+images[0].getElementsByTagName('url')[0].innerHTML;
            var copyright = images[0].getElementsByTagName('copyright')[0].innerHTML;
            var body = document.getElementById('blur');
            document.getElementById('container').style.minHeight = window.innerHeight-70+'px';
            body.style.backgroundImage = 'url("http://'+url+'")';
            document.getElementById('copyright').innerHTML = copyright;
    	    }
  	  	}
  		xmlhttp.open("GET",url,true);
  		xmlhttp.send();
  	}
};
