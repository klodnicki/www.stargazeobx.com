<meta name="keywords" content="north carolina vacations,Hatteras Island,Hatteras,4 bedroom,outer banks vacations,outer banks rentals,vacation home plans,cape hatteras,hatteras island realty,vacation home for rent,north carolina rentals,vacation rental outer banks nc,outer banks nc rental,outer banks rental,the outer banks nc,cape hatteras nc,cape hatteras beach,hatteras realty,cape hatteras realty,hatteras north carolina,cape hatteras north carolina,hatteras island nc,outer banks vacation homes,nc vacation rentals,rent vacation homes,outer banks beach rentals,outer banks nc rentals,vacation homes rentals,rent vacation home,obx realty,outer banks rental homes,nc beach rentals,outer banks vacation home rentals,obx rental,Stargaze,Hottub,north carolina beach rentals,hatteras beach rentals,outer banks vacation rental homes,outer banks nc house rentals,north carolina outer banks rentals,beach rentals outer banks nc,vacation homes in outer banks,outer banks rentals,Klodnicki,Star Gaze,rental homes outer banks nc,best vacation homes,hatteras nc rentals,hatteras vacation">
<link rel="stylesheet" type="text/css" href="css.css" />
<script type="text/javascript">
function setBackground() {
    window.onresize = setBackground;
    //console.log("setBackground");
    
    options = [
        [1024,768],
        [1280,960],
        [1920,1440],
        [2048,1546],
        [2592,1944]
    ];
    currentOption = 0;
    ww = window.innerWidth;
    wh = window.innerHeight;
    while(options[currentOption][0] < ww) {
        if(currentOption < options.length-1) {
            currentOption++;
        } else {
            break;
        }
    }
    while(options[currentOption][1] < wh) {
        if(currentOption < options.length-1) {
            currentOption++;
        } else {
            break;
        }
    }
    opt = options[currentOption];
    newImg = "url('Images/sand_"+opt[0].toString()+"x"+opt[1].toString()+".jpg')";
    if(document.getElementsByTagName("body")[0].style.backgroundImage !== newImg) {
        document.getElementsByTagName("body")[0].style.backgroundImage = newImg;
        hrs = document.getElementsByTagName("hr");
        for(i in hrs) {
            if(hrs[i].style) hrs[i].style.backgroundImage = newImg;
        }
        document.getElementsByTagName("main")[0].style.backgroundImage = "url('Images/sand_blur_"+opt[0].toString()+"x"+opt[1].toString()+".png')";
    }
}
</script>




<!--            MAYBE USING GSS (Trying CSS w/ custom Javascript for now     -->
<!--GSS CODE-->
            <script src="gss/dist/gss.min.js" type="text/javascript"></script>
            <script type="text/javascript">//window.engine = new GSS(document);</script>
            <style type="text/gss">
                body {
                    height == 0;

                    @if ::window[width] > 2048 {
                        background-image: url("Images/sand_2592x1944.jpg");
                        height == 1944;
                    } @else {
                        @if ::window[width] > 1920 {
                            background-image: url("Images/sand_2048x1536.jpg");
                            height == 1536;
                        } @else {
                            @if ::window[width] > 1280 {
                                background-image: url("Images/sand_1920x1440.jpg");
                                height == 1440;
                            } @else {
                                @if ::window[width] > 1024 {
                                    background-image: url("Images/sand_1280x960.jpg");
                                    height == 960
                                } @else {
                                    background-image: url("Images/sand_1024x768.jpg");
                                    height == 768
                                }
                            }
                        }
                    }


                    width: == ::window[width];
                    top: 0px;
                    left: 0px;
                    margin: 0px;
                    padding: 0px;

                    #nav {
                        top: 0px;
                        center-x: == ^center-x;
                        width: == &intrinsic-width;
                        height: == &intrinsic-height;
                        background-color: blue;
                    }
                    #content {
                        background-image: == (body)[background-image];
                        background-attachment: fixed;
                        height: == &intrinsic-height;
                        width: == ^width - 40;
                        center-x: == ^center-x;
                        background-color: red;

                        h1, h2, h3, h4, h5, h6 {
                            font-variant: small-caps;
                        }
                    }

                    @v |-(#nav)-2-(#content)-| outer-gap(10);
                }
            </style>
            <style type="text/css"> 
                 //html:not(.gss-ready) { opacity: 0; } 
            </style>
            <noscript> 
              <style type="text/css"> html:not(.gss-ready) { opacity: 1; } 
              </style> 
            </noscript>
<!--END GSS CODE-->