<?php
$uri_string = uri_string();
$site_title = get_option('site_title');
$page_title = isset($page_title) ? $page_title : $site_title;
$og_image = $logo = get_option('logo');
$favicon = get_option('icon');


if (isset($seo_title) && !empty($seo_title)) {
    $title = $seo_title;
} else {
    $title = $page_title . (!empty($uri_string) ? ' | ' . $site_title : NULL);
}


if (isset($prod_row)) {
    $og_image = get_product_meta($prod_row->product_id, 'featured_image');
    $og_image = get_media_path($og_image);
}


$cart_items = 0;
foreach ($this->cart->contents() as $key => $val) {
    if (!is_array($val) OR !isset($val['price']) OR !isset($val['qty'])) {
        continue;
    }
    $cart_items += $val['qty'];
}
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title><?= $title ?></title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
    <meta charset="utf-8">

    <link rel="shortcut icon" href="<?= $favicon ?>">

    <meta name="description" content="<?= isset($seo_content) ? $seo_content : $page_title ?>"/>
    <meta name="keywords" content="<?= isset($seo_keywords) ? $seo_keywords : $page_title ?>"/>
    <meta name="robots" content="noodp"/>
    <link rel="canonical" href="<?= base_url() ?>"/>
    <meta property="og:locale" content="EN"/>
    <meta property="og:url" content="<?= current_url() ?>"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="<?= $page_title ?>"/>
    <meta property="og:description" content="<?= $page_title ?>"/>
    <meta property="og:image" content="<?= $og_image ?>"/>
    <meta property="og:site_name" content="<?= $site_title ?>"/>

    <link rel="image_src" href="<?= $og_image ?>"/>
    <script type='text/javascript' src='<?= base_url() ?>assets/fontend/js/home/jquery.js?ver=1.12.4'></script>
    <script type='text/javascript'
            src='<?= base_url() ?>assets/fontend/js/home/jquery-migrate.min.js?ver=1.4.1'></script>

    <script type='text/javascript' src='<?= base_url() ?>assets/fontend/js/home/homebundle.js'></script>
    <script type='text/javascript' src='<?= base_url() ?>assets/fontend/js/home/cart.js?v=3'></script>

    <link rel="stylesheet" href="<?= base_url() ?>assets/fontend/css/home/home.css" type="text/css">
    <link rel="stylesheet" href="<?= base_url() ?>assets/fontend/css/home/cart.css" type="text/css">
    <link rel="stylesheet" href="<?= base_url() ?>assets/fontend/css/custom.css" type="text/css">
    <link rel="stylesheet" href="<?= base_url() ?>assets/fontend/css/woocommerce.css" type="text/css">
    <link rel="stylesheet" href="<?= base_url() ?>assets/fontend/css/style.min.css?ver=1.2.5" type="text/css">
    <!--    <link rel="stylesheet" href="-->
    <? //= base_url() ?><!--assets/fontend/css/home/font-awesome.min.css" type="text/css">-->
    <link rel="stylesheet" type="text/css" href="<?= base_url() ?>assets/fontend/css/slick.css"/>
    <link rel="stylesheet" type="text/css" href="<?= base_url() ?>assets/fontend/css/mobile_menu.css"/>
    <link rel="stylesheet" type="text/css" href="<?= base_url() ?>assets/fontend/css/mobile_bottom_menu.css"/>
    <link rel="stylesheet" type="text/css" href="<?= base_url() ?>assets/fontend/css/dropdownmenu.css"/>




    <link rel="stylesheet" type="text/css"
          href="<?= base_url() ?>assets/fontend/css/bootstrap.min.css"/>
    <!--        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>-->
    <link rel="stylesheet" type="text/css" href="<?= base_url() ?>assets/fontend/css/lightslider.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	
	<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '2473529499630097');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=2473529499630097&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->

    <script>
        if (typeof visitorId == 'undefined') {
            var visitorId = 'ff';
        }
        var ShoppingCartAPI = "https://bdeshishop.com/cart/"
    </script>
    <! ------------------------- product carousel titlebar style --------------- !>

    <style>

        .section-heading {
            margin: 0 0 15px;
            font-size: 16px;
            line-height: 20px;
            position: relative;
        }

        .section-heading .h-text, .section-heading:after {
            display: inline-block;
            -webkit-transition: .35s cubic-bezier(.39, .58, .57, 1) 0s;
            -moz-transition: .35s cubic-bezier(.39, .58, .57, 1) 0s;
            -o-transition: .35s cubic-bezier(.39, .58, .57, 1) 0s;
            transition: .35s cubic-bezier(.39, .58, .57, 1) 0s;
        }

        .section-heading .other-link {
            float: right;
            outline: 0;
        }

        .section-heading .other-link .h-text {
            margin-left: 0;
            color: #484848;
            font-weight: 400;
            text-transform: capitalize;
            font-size: 82%;
            padding: 4px 0 4px 14px;
        }

        .section-heading.sh-t6:before {
            content: '';
            display: inline-block;
            height: 3px;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
        }

        .section-heading.sh-t6 > .main-link > .h-text {
            position: relative;
            padding: 0 11px;
            color: #fff;
        }

        .section-heading.sh-t6 .h-text {
            padding: 0;
            text-transform: uppercase;
            line-height: 32px;
        }

        .section-heading.sh-t6.sh-s3:before {
            top: inherit;
            bottom: 0;
            height: 3px;
            margin-top: 0;
        }

        .section-heading.sh-t6.sh-s3 > .main-link > .h-text:after, .section-heading.sh-t6.sh-s3 > .main-link > .h-text:before {
            content: '';
            display: inline-block;
            position: absolute;
            top: 0;
            width: 0;
            height: 0;
            border-bottom: 30px solid #000;
            border-right: 20px solid transparent;
            z-index: 1;
            right: -20px;
            background-color: transparent !important;
        }

        .mtab-main-term-2.mtab-main-term-2.section-heading.sh-t6:before, .main-term-2.section-heading.sh-t6:before, .mtab-main-term-2.mtab-main-term-2.section-heading.sh-t6 > .main-link > .main-term-2.h-text, .mtab-main-term-2.mtab-main-term-2.section-heading.sh-t6 > .main-link > .main-term-2.h-text:before {
            background-color: #24a3b5;
        }

        .mtab-main-term-2.mtab-main-term-2.section-heading.sh-t6.sh-s3 > .main-link > .main-term-2.h-text:before {
            border-bottom-color: #000000;
        }

        .swal-content__input, .swal-content__textarea {
            border: 1px solid rgba(0, 0, 0, .14) !important;
        }
    </style>

</head>


<body class="<?php if(isset($class)) { echo $class;} ?>">

<!-- Google Tag Manager (noscript) -->

<!-- End Google Tag Manager (noscript) -->

<! ------------------------- Top Scroll ------------------------------------------------>


<! ------------------------- Header ------------------------------------------------>
<div class="sc_header">
    <div class="ffix_header removeAbc">
        <div class="wrapper">
            <div class="sc_logo" itemscope="" itemtype="http://schema.org/Organization">

                <a href="<?php echo base_url(); ?>" title="Shopner online shopping in Bangladesh" itemprop="url">
                    <img itemprop="logo" src="<?php echo get_option('logo') ?>" alt="Dhaka">
                </a>
            </div>


            <form id="home_page_search" method="get" action="<?php echo base_url() ?>search">
                <div class="sc_search">
            <span id="search">
                 <input type="text" id="autocomplete" value="" placeholder="What are you looking for?"
                        onkeyup="searchItemProduct(this.value)" autocorrect="off" autocapitalize="off"
                        autocomplete="off" spellcheck="false" name="q"/>

                    
                <button type="submit" class="srch_action btn info">Search</button>
            </form>


            <div class="search-area" style="display:block;">
                <ul class="dropdown-menu" style="display: block;">


                </ul>

            </div>
            </span>
        </div>

        <div style="position: relative;left: 60%;top: -45px;font-size: 26px;">
            <img  style="display: initial;" width="50" src="<?php echo base_url()?>images/call.gif">
            <?= get_option('phone') ?>&nbsp;<a style="text-align: center;text-decoration: none;color: black;padding-left: 14px;" href="<?php echo base_url()?>affiliate/login_signup">Login</a><a style="text-decoration: none;
background-color:
#28A745;
font-size: 16px;
padding: 8px 5px;
color:
white;
margin-left: 59px;" href="<?php echo base_url()?>pages/page_track">
                &nbsp;&nbsp;&nbsp;অর্ডার ট্র্যাক করুন</a>
            </div>





    </div>

    <! ---------- !>

</div>
</div>
</div>
<div class="wrapper">

    <div class="<?php if(isset($mobile_single_page_menu_solve)) { echo 'mobile_single_page_menu_solve';} else { echo 'mobile_header_menu';} ?>">


        <a href="javascript:void(0);" class="off-canvas-toggle" style="margin-top: 15px;
position: relative;
top: 7px;
left: 6px;
z-index: 9999999;">
            <i class="fa fa-bars" style="font-size:23px"></i>
        </a>


        <a href="<?php echo base_url(); ?>" title="Shopner online shopping in Bangladesh" itemprop="url">
            <img style="margin-top: -24px;
margin-left: 83px;
width: 152px;
height: 38px;" src="<?php echo get_option('logo') ?>" alt="Dhaka">
        </a>


        <a hidden class="mobile_phone_class"
           href="tel: <?php echo get_option('phone') ?>"> <?php echo get_option('phone') ?></a>


        <div class="col-2" style="text-align: center;position: relative;top: -50px;left: 255px;">


            <?php
            $cart_items = $cart_total = 0;
            /*echo '<pre>'; print_r($this->cart->contents()); echo '</pre>';*/

            foreach ($this->cart->contents() as $key => $val) {
                if (!is_array($val) OR !isset($val['price']) OR !isset($val['qty'])) {
                    continue;
                }

                $cart_items += $val['qty'];
                $cart_total += $val['subtotal'];

            }
            ?>
            <a href="<?php echo base_url() ?>cart">

                <i class="fa fa-fw fa-shopping-cart mobile_shoping_icon"></i>


                <span class="total_item_bag mobile_cart_icon"><?php echo $cart_items; ?></span>


            </a>

        </div>


        <form action="<?php echo base_url() ?>search">

            <div class="input-group mb-4 mobile_search_input">
                <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon6"
                       autocorrect="off" autocapitalize="off"
                       autocomplete="off" spellcheck="false" name="q" oninput="searchItemProduct(this.value)"
                       class="form-control">
                <div class="input-group-append">
                    <button id="button-addon6" type="submit" class="btn btn-info">Search</button>
                </div>
                <div class="search-area" style="display:block;">
                    <ul class="dropdown-menu" style="display: block;">


                    </ul>

                </div>
            </div>


        </form>


    </div>
</div>



<nav class="mobile-nav" id="mobile-nav" style="z-index: 9999991">
    <ul class="nav__item-container" style="margin-left: 72px;">
        <li class="nav__item off-canvas__container" data-off-canvas-direction="right">

            <a style="position: relative;

left: -59px;

font-size: 15px;

color:
black;

top: 0px;

padding: 8px 1px;" href="JavaScript:Void(0);"
               id="mobile_menu_close_cross_icon">All Categories &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✕</a>


            <ul class="nav__item__content off-canvas__content">

                <?php
                $parentCategories = get_result("SELECT category_title,category_id,category_name FROM `category` where parent_id=0   ORDER BY rank_order ASC");
                foreach ($parentCategories as $parentCategory) {
                    if ($parentCategory->category_name == 'popular-product' or $parentCategory->category_name == 'tend-product') {
                        continue;
                    }

                    $parent_id = $parentCategory->category_id;
                    $link_parent = base_url() . 'category/' . $parentCategory->category_name;
                    $subCategories = get_result("SELECT * FROM `category` where  parent_id=$parent_id   ORDER BY rank_order ASC");

                    if ($subCategories) {
                        ?>

                        <li class="nav__item">
                        <span class="nav-click"><i class="fa fa-fw fa-angle-down"></i></span>
                        <a href="<?php echo $link_parent; ?>"
                           class="nav__item__title"><?php echo $parentCategory->category_title; ?></a>
                        <?php
                        $subCategories = get_result("SELECT category_title,category_id,category_name FROM `category` where  parent_id=$parent_id   ORDER BY rank_order ASC");
                        if (isset($subCategories)) {
                            foreach ($subCategories as $subCategory) {

                                $sub_parent = $subCategory->category_id;
                                $link_sub_parent = base_url() . 'category/' . $subCategory->category_name;


                                ?>
                                <ul class="nav__item__content">
                                    <?php $childenCategories = get_result("SELECT category_title,category_id,category_name FROM `category` where  parent_id=$sub_parent   ORDER BY rank_order ASC");
                                    if (isset($childenCategories)) {

                                        ?>

                                        <li class="nav__item">
                                            <span class="nav-click"><i class="fa fa-fw fa-angle-down"></i></span>
                                            <a href="#"
                                               class="nav__item__title"><?php echo $subCategory->category_title; ?></a>
                                            <ul class="nav__item__content">
                                                <?php foreach ($childenCategories as $childen) {

                                                    $sub_parent = $subCategory->category_id;
                                                    $link_sub_sub_parent = base_url() . 'category/' . $childen->category_name;

                                                    ?>

                                                    <li class="nav__item"><a
                                                            href="<?php echo $link_sub_sub_parent; ?>"
                                                            class="nav__item__title"><?php echo $childen->category_title; ?></a>
                                                    </li>

                                                <?php } ?>

                                            </ul>
                                        </li>
                                    <?php } else { ?>
                                        <li class="nav__item"><a href="<?php echo $link_sub_parent; ?>"
                                                                 class="nav__item__title"><?php echo $subCategory->category_title; ?></a>
                                        </li>

                                        </li>
                                    <?php } ?>


                                </ul>


                            <?php }
                        }
                    } else { ?>


                        <li class="nav__item"><a href="<?= $link_parent ?>"
                                                 class="nav__item__title"><?php echo $parentCategory->category_title; ?></a>
                        </li>

                    <?php }
                } ?>
                <input type="hidden" name="mobile-nav"   >
            </ul>

        </li>

    </ul>

</nav>


<nav id="hide-desktop-menu" style="position: fixed;width: 100%;z-index: 1;height: 40px;z-index: 999999;color:white" class="navbar navbar-expand-lg navbar-light bg-success py-3 shadow-sm">
    <div class="container">



        <div id="navbarContent" class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <!-- Level one dropdown -->

                <?php
                $parentCategories = get_result("SELECT * FROM `category` where parent_id=0  ORDER BY rank_order ASC");
                foreach ($parentCategories as $parentCategory) {

                $parent_id = $parentCategory->category_id;
                $link_parent = base_url() . 'category/' . $parentCategory->category_name;
                $subCategories = get_result("SELECT * FROM `category` where  parent_id=$parent_id ORDER BY rank_order ASC");

                if ($subCategories) {
                ?>
                <li class="nav-item dropdown">
                    <a  style="color: white;" id="dropdownMenu1" href="<?php echo $link_parent;?>" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle"><?php echo $parentCategory->category_title; ?></a>
                    <ul aria-labelledby="dropdownMenu1" class="dropdown-menu border-0 shadow">
                    <?php foreach ($subCategories as $subCategory) {
                     //   $sub_parent = $subCategory->category_id;
                        $link_sub_parent = base_url() . 'category/' . $subCategory->category_name;


                        ?>
                        <li><a href="<?php echo $link_sub_parent;?>" class="dropdown-item"><?php echo $subCategory->category_title; ?></a></li>

<?php } ?>
                    </ul>
                </li>

                <?php }  else { ?>
                <!-- End Level one -->

                <li   class="nav-item"><a style="color: white;" href="<?php echo $link_parent;?>" id="dropdownMenu1" class="nav-link  "><?php echo $parentCategory->category_title; ?></a></li>
                <?php }  } ?>

            </ul>
        </div>
    </div>
</nav>

<!-- End -->





<! ----------------------- Main Navigation -------------------------------->



