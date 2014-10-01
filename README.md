Landing.js
==========

Javascript library for create simple landing page with bing wallpaper's API.

Requirements
==========

PHP web server

Usage
==========

It's so simple! download this repository and for customize with you'r landing page
Edit bottom part of script in index.php :


    <script type="text/javascript">
      window.onload = function(){
        LandingJs.start({
          slide: false,
          countdown: true,
          countdownTime: '2014,12,1',
          brand: 'LandingJs',
          description: 'Simple and fast implementation for landing page',
          brief: 'LandingJs provided for you website a landing page with bing wallpaper and
                  your configs such a name,description, slideshow and countdown.
                  with landingjs you can lanch your coming soon page fast and easy !'
        });
      }
    </script>
      

<b>Slide:</b> this property catch a boolian true and false for enable and disable slide wallpaper's in background.<br />
<b>countdown:</b> this property catch a boolian true and false for enable and disable countdown.<br />
<b>countdownTime:</b> this property catch a date time with DMY format for countdown finish time.<br />
<b>brand:</b> this property catch you'r brand or website title.<br />
<b>description:</b> this property catch you'r slogan.<br />
<b>brief:</b> this property catch you'r brief description of you'r website or application.<br />



Demo
==============

With slider in background:<br />
http://vah7id.com/project/Landingjs/demo1<br />

Without slider:<br />
http://vah7id.com/project/Landingjs/demo2<br />

![alt tag](http://vah7id.com/project/Landingjs/demo-landing.jpg)

License
==============

Copyright (C) 2012 Vahid Taghizadeh (vah7id@gmail.com)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

