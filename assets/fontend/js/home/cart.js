(function($){
    $("document").ready(function()
    {
        update_cart();

        $("body").on("click",".shopping-cart-tab .shopping-cart-parent", function(e){
            e.preventDefault();
            $(".shopping-cart-tab.right").toggleClass('open');
        });
        /*disabling ajax request to update tini cart because we don't need that*/
        // $('body').unbind( 'added_to_cart wd_added_to_cart_on_idevice');
        /*adding a loader class while adding to cart*/
        $('body').on('adding_to_cart',function()
        {
            $('.shopping-cart-tab').addClass('working');
        });
        $('body').on( 'added_to_cart', function() {
            $('.shopping-cart-tab').removeClass('working');
        });

        $(document).on("click", function(event){
            if( !$(event.target).closest(".shopping-cart-tab.light").length > 0 ){
                if($(".shopping-cart-tab.light").hasClass("open")){
                    $(".shopping-cart-tab.light").removeClass("open");
                }
            }
        })
    });
}(jQuery));

function update_cart()
{
    jQuery.get(ShoppingCartAPI+"product_list",function(data, status)
    {
        populate_list(data);
        console.log(data)
    });
}

function add_item_to_cart(product_id, product_name, product_price, product_qty, product_thumb_image, product_url, product_promotion_id)
{
    swal({
        title: "See, how easy it is?",
        text: "Item Have Been Added To Cart",
        icon: "success",
        buttons: {
            cancel: {
                text: "View Cart",
                value: null,
                visible: true,
                className: "dialog_view_cart",
                closeModal: true,
            },
            confirm: {
                text: "Ok",
                value: true,
                visible: true,
                closeModal: true
            }
        }
    });

    jQuery( ".dialog_view_cart" ).click(function()
    {
        window.location = ShoppingCartAPI;
    });

    /*fbq('track', 'AddToCart', {
        value: product_price,
        currency: 'BDT',
        content_name: product_name,
        content_type: 'product',
        content_ids: product_id
    });*/

    jQuery.post(ShoppingCartAPI+"add_item",{product_id:product_id, product_name:product_name, product_price:product_price, product_qty:jQuery(product_qty).val(), product_thumb_image:product_thumb_image, product_url:product_url, product_promotion_id:product_promotion_id},function(data, status)
    {
        populate_list(data);
        console.log(data)
    });
}

function remove_item_from_cart(product_id)
{
    jQuery("#cart_list_product_id_"+product_id).remove();
    jQuery.post(ShoppingCartAPI+"remove_cart_item",{product_id:product_id},function(data, status)
    {
        populate_list(data);
    });
}

function populate_list(data)
{
    var product_list_widget = "";
    var Total = 0;
    var NoOfItems = 0;
    //http://bdeshishop.com/assets/upload/large/3-1.jpg
    for (x in data) {
        //text += person[x];
        product_list_widget = product_list_widget + '<li id="cart_list_product_id_'+data[x].id+'" style="margin-bottom: 20px">\n' +
            '                    <div style="width: 30%; float: left;">\n' +
            '                        <img width="70" height="70" src="'+data[x].product_thumb_image+'">\n' +
            '                    </div>\n' +
            '                    <div style="width: 70%; float: left;">\n' +
            '                        <span style="text-align: right; display: block">'+data[x].name+'</span>\n' +
            '                        <span style="text-align: right; display: block;">'+data[x].qty+' Ã— '+data[x].price+' Tk.</span>\n' +
            '                        <span style="text-align: right; cursor: pointer; display: block;color: #24a3b5;" onclick="remove_item_from_cart('+"'"+data[x].id+"'"+')">Remove</span>\n' +
            '                    </div>\n' +
            '                    <div style="clear: left"></div>\n' +
            '                </li>';
        Total = Total + (data[x].qty * data[x].price);
        NoOfItems = NoOfItems + 1;
    }
    if(Total == 0){jQuery(".product_list_widget").html('<li class="empty">Cart is Empty</li>')}else{jQuery(".product_list_widget").html(product_list_widget)}
    jQuery(".total_cart_amount").html(Total+'&nbsp;<span class="woocommerce-Price-currencySymbol">Tk.</span>');

    jQuery(".product_count").html(""+NoOfItems);
    if(Total == 0){jQuery("#widget_shopping_cart_bottom").hide()}else{jQuery("#widget_shopping_cart_bottom").show()}
    jQuery(".product_total").html(""+Total+'&nbsp;<span class="woocommerce-Price-currencySymbol">Tk.');

    if(NoOfItems == 0)
    {
        jQuery(".handheld-header-cart-link .count").attr("style", "visibility: hidden;")
    }
    else
    {
        jQuery(".handheld-header-cart-link .count").html(NoOfItems);
        jQuery(".handheld-header-cart-link .count").attr("style", "visibility: visible; font-weight: 100;");
    }
}










function CheckOut(main_cat_url)
{
    jQuery(".shopping-cart-tab.light").removeClass("open");

    jQuery.get(ShoppingCartAPI+"product_list",function(product_list, status)
    {
        var VariationDatabase = {};
        var have_product_promotion = false;

        for (x in product_list)
        {
            if(0 !== product_list[x].product_promotion_id.length)
            {
                have_product_promotion = true;
                break;
            }
        }

        if(have_product_promotion)
        {
            var normal_product = 0;
            var promotional_product = 0;

            for (x in product_list)
            {
                if(0 !== product_list[x].product_promotion_id.length)
                {
                    promotional_product = promotional_product + 1;
                }
                else
                {
                    normal_product = normal_product + 1;
                }
            }

            if(promotional_product > normal_product)
            {
                swal({
                    title: "à¦à¦‡ à¦…à¦°à§à¦¡à¦¾à¦°à¦Ÿà¦¿ à¦•à¦¨à¦«à¦¾à¦°à§à¦® à¦•à¦°à¦¤à§‡ à¦¹à¦²à§‡ à¦†à¦ªà¦¨à¦¾à¦•à§‡ à¦†à¦°à¦“ à¦à¦•à¦Ÿà¦¿ à¦¨à¦¨-à¦ªà§à¦°à¦®à§‹à¦¶à¦¨à¦¾à¦² à¦ªà¦£à§à¦¯ à¦…à¦°à§à¦¡à¦¾à¦° à¦•à¦°à¦¤à§‡ à¦¹à¦¬à§‡à¥¤",
                    icon: "error",
                    buttons: {
                        confirm: {
                            text: "Ok",
                            value: true,
                            visible: true,
                            closeModal: true
                        },
                    }
                }).then(function(clicked_ok)
                {
                    if(clicked_ok && (main_cat_url != undefined))
                    {
                        location.href = main_cat_url;
                    }
                });
                return;
            }
        }

        swal({
            title: "Just give us your mobile number",
            icon: "info",
            buttons: {
                cancel: {
                    text: "Cancel",
                    value: null,
                    visible: true,
                    className: "",
                    closeModal: true,
                },
                confirm: {
                    text: "Place Order",
                    value: true,
                    visible: true,
                    className: "mobile_order_place",
                    closeModal: false
                }
            },
            content: {
                element: "input",
                attributes: {
                    placeholder: "Type your mobile number",
                    type: "text",
                },
            }
        })

        jQuery( ".mobile_order_place" ).click(function()
        {
            var mobileNumber = jQuery(".swal-content__input").val();
            swal.close();

            if(!mobileNumber.match(/(^(\+8801|8801|01|008801))[3-9]{1}(\d){8}$/))
            {
                swal({
                    title: "Invalid Mobile Number",
                    icon: "error"
                });
            }
            else
            {
                swal("Please wait, we are working on your order", {
                    buttons: false,
                });

                var d = new Date();
                var p_variation_id = 0;

                var IDs = [];
                for (x in product_list) {
                    IDs.push({"id":product_list[x].id, "qty":product_list[x].qty, "name":product_list[x].name});
                }

                jQuery.ajax({
                    type: "POST",
                    url: (websiteURL+"op/addPending?time="+(d.getTime())),
                    data: { mobile_number: mobileNumber, product_id:0, product_ids: JSON.stringify(IDs), product_type: 'simple', variation_id: 0},
                    dataType: 'json',
                    success: function(msg)
                    {
						swal.close();
						swal("à¦†à¦ªà¦¨à¦¾à¦° à¦…à¦°à§à¦¡à¦¾à¦°à¦Ÿà¦¿ à¦¨à¦¿à¦¶à§à¦šà¦¿à¦¤ à¦¹à§Ÿà§‡à¦›à§‡, à¦§à¦¨à§à¦¯à¦¬à¦¾à¦¦à¥¤", "à¦¬à¦¿à¦¸à§à¦¤à¦¾à¦°à¦¿à¦¤ à¦œà¦¾à¦¨à¦¤à§‡ à¦†à¦®à¦°à¦¾ à¦†à¦ªà¦¨à¦¾à¦•à§‡ à¦«à§‹à¦¨ à¦•à¦°à¦¬à§‹", "success");
                        //CheckOut_validate_mobile(product_list, mobileNumber);
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown)
                    {
                        swal.close()
                        swal(
                            'Oops...',
                            XMLHttpRequest.responseJSON.error_message,
                            'error'
                        )
                    }
                });
            }
        });
    });
}

function CheckOut_validate_mobile(product_list, mobileNumber)
{
    swal({
        title: "Just one step more",
        text: "We send a verification code to your mobile, please enter the code here.",
        icon: "info",
        buttons: {
            confirm: {
                text: "Submit",
                value: true,
                visible: true,
                className: "verification_code_place",
                closeModal: false
            }
        },
        content: {
            element: "input",
            attributes: {
                placeholder: "Verification Code",
                type: "text"
            },
        }
    })


    jQuery( ".verification_code_place" ).click(function()
    {
        var validation_code = jQuery(".swal-content__input").val();
        //swal.close();

        if(validation_code.length<4)
        {
            swal({
                title: "Invalid Verification Code",
                icon: "error",
                buttons: {
                    confirm: {
                        text: "Try Again",
                        value: true,
                        visible: true,
                        className: "validate_mobile_again",
                        closeModal: false
                    }
                }
            });

            jQuery( ".validate_mobile_again" ).click(function()
            {
                CheckOut_validate_mobile(product_list, mobileNumber);
            })
        }
        else
        {
            swal("Please wait, for a while", {
                buttons: false,
            });

            var IDs = [];
            var TodalAMount = 0;
            for (x in product_list) {
                IDs.push(product_list[x].id);
                TodalAMount = TodalAMount + (product_list[x].qty * product_list[x].price);
            }

            /*fbq('track', 'InitiateCheckout', {
                value: TodalAMount,
                currency: 'BDT',
                content_name: 'Checkout',
                content_type: 'product',
                content_ids: IDs,
                num_ids: IDs.length
            });*/

            var d = new Date();

            jQuery.ajax({
                type: "POST",
                url: (websiteURL+"op/Confirm?validation=true&time="+(d.getTime())),
                data: {mobile_number: mobileNumber, validation_code: validation_code},
                dataType: 'json',
                success: function(msg)
                {
                    update_cart();
                    swal.close();
                    swal("See, how easy it is?", "Order have been placed", "success");
                },
                error: function(XMLHttpRequest, textStatus, errorThrown)
                {
                    swal({
                        title: XMLHttpRequest.responseJSON.error_message,
                        icon: "error",
                        buttons: {
                            confirm: {
                                text: "Try Again",
                                value: true,
                                visible: true,
                                className: "validate_mobile_again",
                                closeModal: false
                            }
                        }
                    });

                    jQuery( ".validate_mobile_again" ).click(function()
                    {
                        CheckOut_validate_mobile(product_list, mobileNumber);
                    })
                }
            });
        }
    });
}
