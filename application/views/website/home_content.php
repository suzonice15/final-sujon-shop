


<div class="ecod_strip">
    <div class="wrapper">
        <div class="eCOD_notification">
            <ul class="regular eCOD_slider" id="eCOD_block">
            </ul>
        </div>
    </div>
</div>

<div class="ecod_strip">
    <div class="wrapper">
        <div class="eCOD_notification">
            <ul class="regular eCOD_slider" id="eCOD_block">
            </ul>
        </div>
    </div>
</div>
<! -------------------------------------- Main Slider -------------------------------------- !>
<div class="bnnr_container">
    <div class="wrapper">


        <div class="sliding_banner">
            <div class="slider-for slick-initialized slick-slider ">
                <div class="boka">
                    <?php

                    $sliders = get_homeslider();
                    if ($sliders):
                    foreach ($sliders as $slider):
                    ?>

                    <div href="<?php echo $slider->target_url; ?>" tabindex="0">
                      <a  href="<?php echo $slider->target_url; ?>" >
                        <img alt="<?php echo $slider->homeslider_text; ?>"
                             src="<?php echo base_url();
                             echo $slider->homeslider_banner; ?>">
                          </a>
                    </div>

                    <?php endforeach;endif;?>


                </div>
            </div>
        </div>
        <! --------------------------- Slider right Content ------------------------------------ !>
        <! --------------------------- Slider below Content ------------------------------------ !>

        <! ------------------ !>
    </div>
</div>

<div class="container-fluid add_class">
    <div class="row">
        <?php
       // $adds = get_adds();
        $adds = get_result("SELECT adds_link,media_path FROM `adds`
WHERE adds_type='home' limit 3");

        if(isset($adds))
        {

        foreach ($adds as $add){
        ?>
        <div class="col-md-4 col-12 col-lg-4">
            <a target="_blank" href="<?php echo $add->adds_link;?>">
                <img class="img-fluid" src="<?php echo $add->media_path;?>" alt="">
            </a>
         </div>
        <?php } }?>

        </div>

    </div>

<! --------------------------- Main Content Area ------------------------------------ !>

<div class="container-fluid  mobile_category_show"   style="background-color: white;margin-left: 0px;">

    <div class="row mobile_add_responsive_portion" >


        <?php

        $result = get_result("SELECT * FROM `category` where parent_id=0 ORDER BY rank_order ASC");
        if(isset($result))
        {

            $i=1;
            foreach($result as $row)
            {
                $category[$row->parent_id][]=$row;
            }

            foreach($result as $row)
            {

                if($row->parent_id==0)
                {

                    if($i<=12){
                        $media =get_media_path($row->medium_banner);
                        if($row->category_name=='popular-product' or $row->category_name=='tend-product' or $row->category_name=='buy-one' or $row->category_name=='big-discount' or $row->category_name=='menbership' or $row->category_name=='footwear'){
                            continue;
                        }


                        ?>
                        <div class="middle_mobile_category">
                            <a  href="<?php echo base_url();?>category/<?php echo  $row->category_name;?>">
                                <?php if($media) { ?>
                                <img class="img-responsive" src="<?php echo $media;?>">
                            <?php } else { ?>
                                    <img class="img-responsive" src="<?php echo base_url();?>uploads/footware.jpg">

                                <?php }?>
                           
                            <h4 style="font-size: 12px;
padding: 3px 4px;
text-align: center;" ><?php echo $row->category_title;?></h4>
 </a>
                        </div>
                        <?php
                    }
                    $i++;
                }


            }


        }
        ?>



    </div>
</div>

<! ------------------------------ Small Gap Before next carousel ----------------------------- !>

<div class="ecod_strip">
    <div class="wrapper">
        <div class="eCOD_notification">
            <ul class="regular eCOD_slider" id="eCOD_block">
            </ul>
        </div>
    </div>
</div>

<! ------------------------------ Small Gap Before next carousel ----------------------------- !>





<span class="home_cat_content"></span>

<script type="text/javascript">
    var xhr = new XMLHttpRequest();
    xhr.open("GET", '<?php echo site_url('ajax/home_cat_content'); ?>');
    xhr.send();
    xhr.onreadystatechange = function()
    {
        jQuery('.home_cat_content').html(xhr.responseText);
        jQuery(".boka1").slick({
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 6,
            autoplay: true,
            autoplaySpeed: 2000,

            pauseOnHover: true,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }

            ]


        });
    }
</script>






<script>
    jQuery('.main_carosel_category_link').click(function () {
       var href= this.href;
        window.location=href;

    });

    </script>