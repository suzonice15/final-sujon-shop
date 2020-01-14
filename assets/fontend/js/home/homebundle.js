/******/  (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/ 		if(installedModules[moduleId]) {
            /******/ 			return installedModules[moduleId].exports;
            /******/ 		}
        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = installedModules[moduleId] = {
            /******/ 			i: moduleId,
            /******/ 			l: false,
            /******/ 			exports: {}
            /******/ 		};
        /******/
        /******/ 		// Execute the module function
        /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Flag the module as loaded
        /******/ 		module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;
    /******/
    /******/ 	// identity function for calling harmony imports with the correct context
    /******/ 	__webpack_require__.i = function(value) { return value; };
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function(exports, name, getter) {
        /******/ 		if(!__webpack_require__.o(exports, name)) {
            /******/ 			Object.defineProperty(exports, name, {
                /******/ 				configurable: false,
                /******/ 				enumerable: true,
                /******/ 				get: getter
                /******/ 			});
            /******/ 		}
        /******/ 	};
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function(module) {
        /******/ 		var getter = module && module.__esModule ?
            /******/ 			function getDefault() { return module['default']; } :
            /******/ 			function getModuleExports() { return module; };
        /******/ 		__webpack_require__.d(getter, 'a', getter);
        /******/ 		return getter;
        /******/ 	};
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "";
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = 10);
    /******/ })
/************************************************************************/
/******/ ([
    /* 0 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var helper_functions = function () {
            "use strict";

            var helperFunctions = {};

            helperFunctions.ReadCookie = function (cookieName) {
                var theCookie = " " + document.cookie;
                var ind = theCookie.indexOf(" " + cookieName + "=");
                if (ind == -1) ind = theCookie.indexOf(";" + cookieName + "=");
                if (ind == -1 || cookieName === "") return "";
                var ind1 = theCookie.indexOf(";", ind + 1);
                if (ind1 == -1) ind1 = theCookie.length;
                return unescape(theCookie.substring(ind + cookieName.length + 2, ind1));
            };
            helperFunctions.SetCookie = function (cookieName, cookieValue, nDays, domain) {
                var today = new Date();
                var expire = new Date();
                if (nDays == null || nDays == 0) nDays = 1;
                expire.setTime(today.getTime() + 24 * 3600000 * nDays);
                //console.log(today.getTime() + 3600000*nDays);
                if (domain != '') {
                    document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString() + ";domain=" + domain + ";path=/";
                } else {
                    document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString();
                }
            };
            helperFunctions.getScrollXY = function () {
                var scrOfX = 0,
                    scrOfY = 0;
                if (typeof window.pageYOffset == "number") {
                    scrOfY = window.pageYOffset;
                    scrOfX = window.pageXOffset;
                } else {
                    if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
                        scrOfY = document.body.scrollTop;
                        scrOfX = document.body.scrollLeft;
                    } else {
                        if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                            scrOfY = document.documentElement.scrollTop;
                            scrOfX = document.documentElement.scrollLeft;
                        }
                    }
                }
                return [scrOfX, scrOfY];
            };
            helperFunctions.getDocHeight = function () {
                var D = document;
                return Math.max(D.body.scrollHeight, D.documentElement.scrollHeight, D.body.offsetHeight, D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight);
            };
            return helperFunctions;
        }();

        module.exports = helper_functions;

        /***/ }),
    /* 1 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        /*
         * jQuery throttle / debounce - v1.1 - 3/7/2010
         * http://benalman.com/projects/jquery-throttle-debounce-plugin/
         */
        var commonjs = function () {
            var helperFunctions = __webpack_require__(0);
            var localforage = __webpack_require__(2);
            var ajaxHitFired = {};
            var subcatHeadingData = {};
            var extraLeafData = '';
            var extraCount = 0;
            var new_atom_checkout = 1;
            var controller_flag = 1;
            new_atom_checkout = parseInt(new_atom_checkout);
            var atom_cart_data = '';
            var atom_cart_error = 0;
            var atom_cart_count = 0;
            var js_cart_show = false;
            var ssl_page = true;
            var omsignuploginpageload = 'signuploginpageload';
            var get_login_html_processing = false;

            if (visitorId != 'undefined' && visitorId != '') {
                if (!ReadCookie('ruserd')) {
                    document.cookie = "ruserd=slogn; expires=0; path=/";
                    var api_name = "v11/repeateduser?key=d42121c70dda5edfgd1df6633fdb36c0";
                    var date_ins = new Date();
                    var dateStr = date_ins.toGMTString();
                    var token_e = "45cadac46b1dc04186c1fd1d2b1ab008";
                    var auth = btoa(api_name + token_e + dateStr);
                    $.ajax({
                        url: "https://api.shopclues.com/api/" + api_name,
                        data: { platform: "D", user_id: visitorId },
                        headers: { "Authorization": auth, "X-Date": dateStr, "X-Source": "RN" },
                        success: function success(result) {
                            if (result.status != '0') {
                                if (ReadCookie('ruserd')) {
                                    localStorage.setItem('comruser', result.response[0].groups);
                                }
                            } else {
                                localStorage.setItem('comruser', 'No Record');
                            }
                            !function (f, b, e, v, n, t, s) {
                                if (f.fbq) return;n = f.fbq = function () {
                                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                                };if (!f._fbq) f._fbq = n;
                                n.push = n;n.loaded = !0;n.version = '2.0';n.queue = [];t = b.createElement(e);t.async = !0;
                                t.src = v;s = b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t, s);
                            }(window, document, 'script', '//connect.facebook.net/en_US/fbevents.js');

                            fbq('init', '243538709818120');
                            fbq('init', '291034024747680');
                            fbq('track', 'PageView');
                            fbq('trackCustom', 'UserGroups', {
                                'Groups': localStorage.comruser
                            });
                        },
                        error: function error(result) {
                            localStorage.setItem('comruser', 'ajax error');
                            console.log(result);
                        }
                    });
                }
            } else {
                localStorage.setItem('comruser', 'Visitor Not Found');
            }
            if (localStorage.getItem('comruser') == null) {
                localStorage.setItem('comruser', 'Default');
            }

            function delete_cookie(name, path, domain) {
                if (helperFunctions.ReadCookie(name)) {
                    document.cookie = name + "=" + (path ? ";path=" + path : "") + (domain ? ";domain=" + domain : "") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
                }
            }

            function pincodePopup() {
                $('#common_overlay').fadeIn(1000);
                $('.pincodeModel').show();
                $('.pincode_section').show();
            }

            //If not logged in then only fetch HTML
            /*var _login_name = helperFunctions.ReadCookie('scun');
             if (_login_name === undefined || _login_name == null || _login_name.length <= 0 || _login_name=='null') {
             if (window.coreJSLoaded)
             get_login_html();
             else
             document.addEventListener("coreJSLoaded", get_login_html);
             }*/

            //If showlogin_popup cookie set then get ogin html
            var showlogin_popup = helperFunctions.ReadCookie('showlogin_popup');
            if (showlogin_popup === undefined || showlogin_popup == null || showlogin_popup.length <= 0 || showlogin_popup == 'null') {
                //
            } else {
                get_login_html();
            }

            function get_login_html() {
                //if new login config is true - then only new_login_url is defined
                if (typeof new_login_url !== "undefined" && new_login_url !== null) {
                    var loginurl = new_login_url + 'popup';
                    if (get_login_html_processing == false) {
                        get_login_html_processing = true;
                    } else {
                        return;
                    }
                    if ($('#common_popupModel #login').length == 0) {
                        $.ajax({ type: 'GET',
                            url: loginurl,
                            cache: false,
                            xhrFields: {
                                withCredentials: true
                            },
                            success: function success(data) {

                                $("#loginModelBox").html(data);
                                get_login_html_processing = false;
                                var showlogin_popup = ReadCookievalue('showlogin_popup');
                                if (showlogin_popup === undefined || showlogin_popup == null || showlogin_popup.length <= 0 || showlogin_popup == 'null') {} else {
                                    loginPopup();
                                    delete_cookie('showlogin_popup', '/', '.shopclues.com');

                                    var omloginstring = "";
                                    omloginstring = decodeURIComponent(ReadCookievalue('s_lgnc'));
                                    if (omloginstring === undefined || omloginstring == null || omloginstring.length <= 0 || omloginstring == 'null') {} else {
                                        if (typeof _satellite !== 'undefined') {
                                            _satellite.track('signuplogintrigger');
                                            delete_cookie('s_lgnc', '/', '.shopclues.com');
                                        }
                                    }
                                }
                            }
                        });
                    }
                }
            }

            var loginPopup = function loginPopup(loginredirect_desktop) {
                $('#a_close_id').addClass('close_login').removeClass('close');
                if (get_login_html_processing == true) {
                    //
                } else {
                    //False
                    if ($('#common_popupModel #login').length > 0) {
                        //no ajax
                    } else {
                        //hit again
                        get_login_html();
                    }
                }
                if (typeof _satellite !== 'undefined') {
                    _satellite.track('signuploginpageload');
                }
                var expire = new Date();
                var today = new Date();
                expire.setTime(today.getTime() + 3600000);
                //document.cookie = 'signin_clicked' + "=" + true + ";expires=" + expire.toGMTString() + ";domain=" + 'shopclues.com' + ";path=/";

                var checkLogin = null; //helperFunctions.ReadCookievalue('scumd');
                if (checkLogin === undefined || checkLogin == null || checkLogin.length <= 0) {

                    if (loginredirect_desktop === undefined || loginredirect_desktop == null || loginredirect_desktop.length <= 0) {
                        var loginredirect_desktop_cookie = ReadCookievalue('loginredirect_desktop'); //if user enters direct url of myaccounts (cookie already set)
                        if (loginredirect_desktop_cookie === undefined || loginredirect_desktop_cookie == null || loginredirect_desktop_cookie.length <= 0) {
                            document.cookie = 'loginredirect_desktop' + "=" + escape(window.location.href) + ";expires=" + expire.toGMTString() + ";domain=" + 'shopclues.com' + ";path=/";
                        } else {
                            //same as existing value
                        }
                    } else {
                        document.cookie = 'loginredirect_desktop' + "=" + escape(loginredirect_desktop) + ";expires=" + expire.toGMTString() + ";domain=" + 'shopclues.com' + ";path=/";
                    }

                    $('#loginModelBox').show();
                    $('#common_overlay').fadeIn(1000);
                    $('#common_popupModel').show();
                } else {
                    if (loginredirect_desktop === undefined || loginredirect_desktop == null || loginredirect_desktop.length <= 0) {
                        window.location.reload();
                    } else {
                        window.location = loginredirect_desktop;
                    }
                }
            };

            function ReadCookievalue(name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1, c.length);
                    }if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            }

            function isNumberKey(evt) {
                var charCode = evt.which ? evt.which : event.keyCode;
                if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;return true;
            }
            if ($('.cLocation').length > 0) {
                try {
                    var message = '';
                    if (helperFunctions.ReadCookie('pincode') !== '') {
                        message = '<span id="cPin">' + helperFunctions.ReadCookie('pincode') + '</span><a onclick="pincodePopup()" href="javascript:void(0);">Change</a>';
                    } else {
                        message = '<span id="cPin">Share</span><a onclick="pincodePopup()" href="javascript:void(0);">Location</a>';
                    }
                    $(".cLocation").append(message);
                    $('.cLocation').show();
                } catch (e) {}
            }
            $('#autocomplete').on('focusout', function () {
                setTimeout(function () {
                    $('#common_overlay').hide();
                    $('#common_overlay').css('z-index', 1005);
                }, 1000);
            });

            if (!helperFunctions.ReadCookie('abexp') || helperFunctions.ReadCookie('abexp') === '') {
                //helperFunctions.SetCookie('abexp','expB',abDays,cookieDomain);
            }
            function getLoginStatus() {
                var name = helperFunctions.ReadCookie('scun');
                name = atob(decodeURIComponent(name)).replace(/"/g, '');
                if (name) {
                    if (name.length > 8) {
                        name = name.substr(0, 8);
                    }
                    var viphtml = '';
                    var vipurl = 'https://www.shopclues.com/vip-club.html';
                    if (ReadCookie('user_segment') == 'LC') {
                        $('#vip_on').addClass('vip_on');
                        viphtml = '<div class="vip_flag_sec" id="vip_icn"><div class="flag"></div></div>';
                    }
                    $('#sign-in').removeClass('hide');
                    $('#account').removeClass('hide');
                    $('#sc_uname').show();
                    $('#sign-in').hide();
                    $('#account').show();
                    $('#sc_uname a').first().html('Hi ' + name + '<i></i>');
                    $('#account li.heading a').html(name);
                    $('.actLink_heading a').html('<span class="user_icn"></span>' + viphtml + name);
                    $('#sc_uname').on('mouseover', function () {
                        //$('.sc_actLinks').show();
                    });
                    var call_html = $('#call_us_content').html();
                    $('#call_us').html(call_html);
                    var wish_html = $('#wishlist_d_content').html();
                    $('#wishlist_d').html(wish_html);
                } else {
                    $('#sign-in').removeClass('hide');
                    $('#account').removeClass('hide');
                    $('#sign-in').show();
                    $('#account').hide();
                }
            }
            getLoginStatus();
            if (document.getElementById('vip_icn') !== null) {
                document.getElementById('vip_icn').addEventListener("click", function () {
                    window.location.href = '//www.shopclues.com/vip-club.html';
                });
            }
            function loadNavData(allgid) {
                if (allgid.length > 0 && (typeof localStorage.getItem('allData') == 'undefined' || parseInt(localStorage.getItem('allData')) !== 1)) {
                    var gids = btoa(allgid); //allgid.join('&')
                    $.ajax({
                        type: "GET",
                        url: base_url + "ajaxCall/navigation?allGid=1&gid=" + gids,
                        cache: true,
                        success: function success(result) {
                            localStorage.setItem('allData', 1);
                            if (result != '' && result != 'null') {
                                var dataResult = JSON.parse(result);
                                if (typeof dataResult.gid != 'undefined') {
                                    var arrGid = Object.keys(dataResult.gid);
                                    for (var i = 0; i < arrGid.length; i++) {
                                        if (dataResult.gid[arrGid[i]].response != '') {
                                            var tmstmp = Math.round(new Date().getTime() / 1000);
                                            var gidObj = { 'timestamp': tmstmp, 'data': dataResult.gid[arrGid[i]].response };
                                            localforage.setItem('subcat_list_' + arrGid[i], gidObj);
                                            //localStorage.setItem('subcat_list_' + arrGid[i], JSON.stringify(dataResult.gid[arrGid[i]].response));
                                        }
                                    }
                                }
                            }
                        },
                        error: function error() {}
                    });
                }
            }
            if (ConfigLoadAll && typeof allGids !== 'undefined') {
                window.onload = function () {
                    loadNavData(allGids);
                };
            }
            var mouseoverNavigation = function mouseoverNavigation(obj, loadBeforeDom) {
                if (typeof loadBeforeDom != 'undefined') {
                    $('.left_menu_wrap > .overlay').hide();
                } else {
                    $('.left_menu_wrap > .overlay').show();
                }
                var navId = obj.id.split('_')[1];
                if (typeof localforage != 'undefined') {
                    localforage.getItem('subcat_list_' + navId, function (err, value) {
                        if (err) {
                            navigationAjax(navId);
                        } else {
                            if (value !== null && value !== '') {
                                var tmstmp = Math.round(new Date().getTime() / 1000);
                                var gidData = value;
                                var gidExpire = gidData.timestamp;
                                if (tmstmp - gidExpire < 43200) {
                                    if (gidData.data != 'undefined' && gidData.data !== '') {
                                        populateNavData(JSON.stringify(gidData.data), navId);
                                    } else {
                                        navigationAjax(navId);
                                    }
                                } else {
                                    navigationAjax(navId);
                                }
                            } else {
                                navigationAjax(navId);
                            }
                        }
                    });
                }
            };
            var trackCountLeaf = 0;
            var trackingExtraCount = 0;
            var trackHeading = 0;

            function navigationAjax(navId) {
                $.ajax({
                    type: "GET",
                    url: base_url + "ajaxCall/navigation?nav=" + navId,
                    cache: true,
                    success: function success(result) {
                        ajaxHitFired[navId] = 0;
                        if (result != '' && result != 'null') {
                            var dataResult = JSON.parse(result);
                            if (typeof dataResult.gid != 'undefined') {
                                if (typeof localforage != 'undefined') {
                                    var tmstmp = Math.round(new Date().getTime() / 1000);
                                    var gidObj = { 'timestamp': tmstmp, 'data': dataResult.gid[navId].response };
                                    localforage.setItem('subcat_list_' + navId, gidObj);
                                }
                                extraLeafData = '';
                                extraCount = 0;
                                populateNavData(JSON.stringify(dataResult.gid[navId].response), navId);
                            }
                        } else {
                            $('#nav_loader_' + navId).hide();
                            $('#rightpanel_' + navId).html('Data not found');
                        }
                    },
                    error: function error() {}
                });
            }
            function populateNavData(result, gid) {
                //Pagename-4|Position-6|Group-15|Meta-11|Sub-8|Leaf-8|NA|NA|CT@Category-31
                //$('#nav_loader_' + gid).remove();
                if ($('#rightpanel_' + gid).length === 0 && result !== '' && result != 'null') {
                    var dataResult = JSON.parse(result);
                    var columnCount = parseInt(dataResult.column.length) + 1;
                    var styleWidth = parseInt(dataResult.column.length) * ConfigColumnWidth; // for small screen scroll handling
                    var subcatDataHtml = '';
                    var htmlTopHeading = '';
                    extraLeafData = '';
                    extraCount = 0;
                    for (var i = 0; i < columnCount; i++) {
                        var mainDiv = '<div class="menu_wrap_sub" id="rightpanel_' + gid + '">';
                        if (typeof dataResult.column[i] == 'undefined' && extraLeafData != '') {
                            styleWidth = (i + 1) * ConfigColumnWidth;
                            if (styleWidth > ConfigColumnWidth * ConfigColumnCount) {
                                styleWidth = i * ConfigColumnWidth;
                                extraLeafData = '';
                            }
                        }
                        //htmlTopHeading = populateTopHeading(dataResult, gid, styleWidth);
                        var subCatMainDiv = '<div class="ul_menu_block">';
                        if ($('#top_header_' + gid).length > 0) {
                            htmlTopHeading = '';
                        } else {
                            mainDiv = mainDiv; //+ htmlTopHeading + '</div>';//uncomment this when you want to display top heading
                        }
                        if (typeof dataResult.column[i] != 'undefined' || extraLeafData != '' && styleWidth <= ConfigColumnWidth * ConfigColumnCount) {
                            var columnResult = dataResult.column[i];
                            var AllLeafCount = 0;
                            subcatDataHtml += '<div id="column_' + i + '" class="s_col">';
                            subcatDataHtml += '<ul class="list_blocks">';
                            if (extraLeafData != '') {
                                subcatDataHtml += extraLeafData;
                                AllLeafCount = extraCount;
                                extraCount = 0;
                            }
                            extraLeafData = '';

                            if (typeof dataResult.column[i] != 'undefined') {
                                for (var j = 0; j < columnResult.response.leaf_nav_list.length; j++) {
                                    if (typeof columnResult.response.leaf_nav_list[j] != 'undefined') {
                                        var currentHeading = columnResult.response.leaf_nav_list[j].leaf_heading_data;
                                        if (Object.keys(subcatHeadingData).length == 0 || currentHeading.top_heading_name != subcatHeadingData.top_heading_name) {
                                            subcatHeadingData = currentHeading;
                                            if (AllLeafCount <= ConfigRowCount) {
                                                trackCountLeaf = 0;
                                                if (i > 0 && trackingExtraCount > 0) {
                                                    trackHeading = trackingExtraCount;
                                                    trackingExtraCount = 0;
                                                }
                                                trackHeading++;
                                                subcatDataHtml += '<li class="g_heading" column="' + i + '" it="' + j + '">';
                                                if (subcatHeadingData.top_heading_url != '') {
                                                    if (subcatHeadingData.dynamic_url != null && subcatHeadingData.dynamic_url != '') {
                                                        if (subcatHeadingData.dynamic_url.indexOf('?') != -1) var html = '.html';else var html = '.html?';
                                                        subcatDataHtml += '<a target="_blank" href="' + base_url + subcatHeadingData.top_heading_url + html + subcatHeadingData.dynamic_url + '"alt="Home|CT3P' + trackHeading + '|' + dataResult.group_name.substring(-1, 10) + '|NA|' + subcatHeadingData.top_heading_name.substring(-1, 20) + '|NA|NA|NA|CT@' + subcatHeadingData.top_heading_name.substring(-1, 31) + '" onclick="trackingData(this)">';
                                                    } else {
                                                        subcatDataHtml += '<a target="_blank" href="' + base_url + subcatHeadingData.top_heading_url + '.html" alt="Home|CT3P' + trackHeading + '|' + dataResult.group_name.substring(-1, 10) + '|NA|' + subcatHeadingData.top_heading_name.substring(-1, 20) + '|NA|NA|NA|CT@' + subcatHeadingData.top_heading_name.substring(-1, 31) + '" onclick="trackingData(this)">';
                                                    }
                                                } else {
                                                    subcatDataHtml += '<span>';
                                                }
                                                if (subcatHeadingData.style_property.toUpperCase() == 'BOLD') {
                                                    subcatDataHtml += '<strong>' + subcatHeadingData.top_heading_name + '</strong>';
                                                } else {
                                                    subcatDataHtml += subcatHeadingData.top_heading_name;
                                                }
                                                if (subcatHeadingData.top_heading_url != '') {
                                                    subcatDataHtml += '</a>';
                                                } else {
                                                    subcatDataHtml += '</span>';
                                                }
                                                subcatDataHtml += '</li>';
                                            } else {
                                                trackingExtraCount++;
                                                trackHeading = 0;
                                                trackCountLeaf = 0;
                                                extraLeafData += '<li class="g_heading">';
                                                if (subcatHeadingData.top_heading_url != '') {
                                                    if (subcatHeadingData.dynamic_url != null && subcatHeadingData.dynamic_url != '') {
                                                        if (subcatHeadingData.dynamic_url.indexOf('?') != -1) var html = '.html';else var html = '.html?';
                                                        extraLeafData += '<a target="_blank" href="' + base_url + subcatHeadingData.top_heading_url + html + subcatHeadingData.dynamic_url + '"alt="Home|CT3P' + trackingExtraCount + '|' + dataResult.group_name.substring(-1, 10) + '|NA|' + subcatHeadingData.top_heading_name.substring(-1, 20) + '|NA|NA|NA|CT@' + subcatHeadingData.top_heading_name.substring(-1, 31) + '" onclick="trackingData(this)">';
                                                    } else {
                                                        extraLeafData += '<a target="_blank" href="' + base_url + subcatHeadingData.top_heading_url + '.html" alt="Home|CT3P' + trackingExtraCount + '|' + dataResult.group_name.substring(-1, 10) + '|NA|' + subcatHeadingData.top_heading_name.substring(-1, 20) + '|NA|NA|NA|CT@' + subcatHeadingData.top_heading_name.substring(-1, 31) + '" onclick="trackingData(this)">';
                                                    }
                                                } else {
                                                    extraLeafData += '<span>';
                                                }
                                                if (subcatHeadingData.style_property.toUpperCase() == 'BOLD') {
                                                    extraLeafData += '<strong>' + subcatHeadingData.top_heading_name + '</strong>';
                                                } else {
                                                    extraLeafData += subcatHeadingData.top_heading_name;
                                                }

                                                if (subcatHeadingData.top_heading_url != '') {
                                                    extraLeafData += '</a>';
                                                } else {
                                                    extraLeafData += '</span>';
                                                }
                                                extraLeafData += '</li>';
                                                extraCount++;
                                            }
                                            AllLeafCount++;
                                        }
                                        for (var k = 0; k < columnResult.response.leaf_nav_list[j].subcat_data.length; k++) {
                                            var leafData = columnResult.response.leaf_nav_list[j].subcat_data[k];
                                            if (leafData.sub_category_name != null) {
                                                if (AllLeafCount <= ConfigRowCount) {
                                                    if (leafData.style_property.toUpperCase() == 'EMPTY') {
                                                        subcatDataHtml += '<li>&nbsp;</li>';
                                                    } else {
                                                        subcatDataHtml += '<li><a ';
                                                        if (leafData.more_url != '' && leafData.more_url != null) {
                                                            subcatDataHtml += ' class="more" ';
                                                        }
                                                        if (leafData.dynamic_url != null && leafData.dynamic_url != '') {
                                                            if (leafData.dynamic_url.indexOf('?') != -1) var html = '.html';else var html = '.html?';
                                                            subcatDataHtml += 'target="_blank" href="' + base_url + leafData.sub_category_url + html + leafData.dynamic_url + '"alt="Home|CT4P' + (trackCountLeaf + 1) + '|' + dataResult.group_name.substring(-1, 10) + '|NA|' + currentHeading.top_heading_name.substring(-1, 20) + '|' + leafData.sub_category_name.substring(-1, 20) + '|NA|NA|' + 'CT@' + leafData.sub_category_name.substring(-1, 31) + '"';
                                                        } else {
                                                            subcatDataHtml += 'target="_blank" href="' + base_url + leafData.sub_category_url + '.html" alt="Home|CT4P' + (trackCountLeaf + 1) + '|' + dataResult.group_name.substring(-1, 10) + '|NA|' + currentHeading.top_heading_name.substring(-1, 20) + '|' + leafData.sub_category_name.substring(-1, 20) + '|NA|NA|' + 'CT@' + leafData.sub_category_name.substring(-1, 31) + '"';
                                                        }
                                                        subcatDataHtml += ' onclick="trackingData(this)">';

                                                        if (leafData.style_property.toUpperCase() == 'BOLD') {
                                                            subcatDataHtml += '<strong>' + leafData.sub_category_name + '</strong>';
                                                        } else {
                                                            subcatDataHtml += leafData.sub_category_name;
                                                        }
                                                        subcatDataHtml += '</a></li>';
                                                    }
                                                } else {

                                                    if (leafData.style_property.toUpperCase() == 'EMPTY') {
                                                        extraLeafData += '<li>&nbsp;</li>';
                                                    } else {
                                                        extraLeafData += '<li><a ';
                                                        if (leafData.more_url != '' && leafData.more_url != null) {
                                                            extraLeafData += ' class="more" ';
                                                        }
                                                        if (leafData.dynamic_url != null && leafData.dynamic_url != '') {
                                                            if (leafData.dynamic_url.indexOf('?') != -1) var html = '.html';else var html = '.html?';
                                                            extraLeafData += 'target="_blank" href="' + base_url + leafData.sub_category_url + html + leafData.dynamic_url + '"alt="Home|CT4P' + (trackCountLeaf + 1) + '|' + dataResult.group_name.substring(-1, 10) + '|NA|' + currentHeading.top_heading_name.substring(-1, 20) + '|' + leafData.sub_category_name.substring(-1, 20) + '|NA|NA|' + 'CT@' + leafData.sub_category_name.substring(-1, 31) + '"';
                                                        } else {
                                                            extraLeafData += 'target="_blank" href="' + base_url + leafData.sub_category_url + '.html" alt="Home|CT4P' + (trackCountLeaf + 1) + '|' + dataResult.group_name.substring(-1, 10) + '|NA|' + currentHeading.top_heading_name.substring(-1, 20) + '|' + leafData.sub_category_name.substring(-1, 20) + '|NA|NA|' + 'CT@' + leafData.sub_category_name.substring(-1, 31) + '"';
                                                        }
                                                        extraLeafData += '" onclick="trackingData(this)">';

                                                        if (leafData.style_property.toUpperCase() == 'BOLD') {
                                                            extraLeafData += '<strong>' + leafData.sub_category_name + '</strong>';
                                                        } else {
                                                            extraLeafData += leafData.sub_category_name;
                                                        }
                                                        extraLeafData += '</a></li>';
                                                    }
                                                    extraCount++;
                                                }
                                                AllLeafCount++;
                                                trackCountLeaf++;
                                            }
                                        }
                                    }
                                }
                            }
                            subcatDataHtml += '</ul></div>';
                        }
                    }
                    subCatMainDiv += subcatDataHtml;

                    mainDiv += subCatMainDiv;

                    $('#nav_' + gid).append(mainDiv + '</div></div>');
                }
            }
            function populateTopHeading(dataResult, gid, styleWidth) {
                var htmlTopHeading = '<div class="static_img_links" id="top_header_' + gid + '" style="width:' + styleWidth + 'px;">';
                for (var i = 0; i < dataResult.top_nav_list.length; i++) {
                    var topHeadingData = dataResult.top_nav_list[i];
                    if ($('#top_' + topHeadingData.menu_top_category_id).length == 0) htmlTopHeading += '<a id="top_' + topHeadingData.menu_top_category_id + '" target="_blank" href="' + base_url + topHeadingData.top_category_url + '.html" alt="Home|CT2P' + (i + 1) + '|' + dataResult.group_name.substring(-1, 15) + '|' + topHeadingData.heading_name.substring(-1, 11) + '|NA|NA|NA|NA|CT@' + topHeadingData.heading_name.substring(-1, 31) + '" onclick="trackingData(this)">';
                    if (topHeadingData.style_property.toUpperCase() == 'BOLD') {
                        htmlTopHeading += '<img src="http://cdn.shopclues.com/images/thumbnails/24678/320/320/ps414404191661441941846.jpg"><span><strong>' + topHeadingData.heading_name + '</strong></span></a>';
                    } else {
                        htmlTopHeading += '<img src="http://cdn.shopclues.com/images/thumbnails/24678/320/320/ps414404191661441941846.jpg"><span>' + topHeadingData.heading_name + '</span></a>';
                    }
                }

                return htmlTopHeading;
            }
            var trackingData = function trackingData(obj) {
                if ($(obj).attr('alt') !== undefined) {
                    var data = $(obj).attr('alt').split('|');
                    window.ctree = data[0] + "|" + data[1] + "|" + data[3] + "|" + data[2] + "|" + data[4] + "|" + data[5];
                } else {
                    window.ctree = "";
                }
                window.tracking = 'ctree';
                //console.log(ctree)
                if (typeof _satellite !== 'undefined') {
                    _satellite.track('NewHomePage_tracking');
                }
            };
            var zParam = search_source();
            var ab_testing = 0;
            var count_sc = 0;
            var autoComplete = function autoComplete() {
                var outp = document.getElementById("search-result");
                //var list = $('.srch_sugg_lst li').not('.heading');
                var oldins;
                var posi = -1;
                var words = new Array();
                var input;
                var key;
                outp.parentElement.style.display = 'block';
                microAjaxAutoComplete();
                function microAjaxAutoComplete() {
                    var qstr = document.getElementById("autocomplete").value;
                    //qstr = qstr.replace(/[^-_ a-zA-Z0-9"'&]/g, ' ');
                    //qstr = qstr.replace(new RegExp('-+', 'g'), '-');
                    //qstr = qstr.trim();
                    if (qstr.substring(qstr.length - 1) == " ") {
                        return false;
                    }
                    var autoCompleteItems = 10;
                    var acItems;
                    if (qstr.length >= 1 && qstr.trim() != "") {
                        $(".seaches_sugge li").removeClass('focus');
                        $('#search-result').show();
                        $('.recent_searches').hide();
                        $('.trending_srches').hide();
                        //qstr = qstr.replace(new RegExp('&', 'g'), '%26');
                        srch_sugg_panel();
                        if (typeof secure != 'undefined' && secure == 1) {
                            var url = secure_base_url + 'cart/autosuggest/' + qstr;
                        } else {
                            var url = base_url + 'ajaxCall/autosuggest';
                            url += '?qstr=' + qstr + '&z=' + zParam;
                        }
                        microAjax(url, function (data) {
                            data = JSON.parse(data);
                            var results = data;
                            acItems = results;
                            if (acItems.length !== 'undefined' && acItems.length > 1) {
                                count_sc = acItems.length;
                            }
                            init(acItems);
                            if (acItems.length == 0) {
                                clearOutput();
                            }
                        });
                    } else if (qstr.length < 1) {
                        var z = search_source();
                        // if (z==1) {
                        $('#search-result').hide();
                        if ($('.trending_srches li').length === 1) {
                            recentTrendSearch();
                        } else {
                            $('.trending_srches').show();
                            if ($('.recent_searches li').length > 1) {
                                $('.recent_searches').show();
                            }
                        }
                        /*} else {
                         clearOutput();
                         $('div.srch_sugg_lst').fadeOut('medium');
                         $('#common_overlay').fadeOut('medium');
                         setTimeout(function(){
                         //$('#common_overlay').css('z-index', 1005);
                         }, 1000);
                         }*/
                    }
                    document.onkeydown = keyHandler;
                }

                function setVisible(visi) {
                    var x = document.getElementsByClassName("srch_sugg_lst")[0];
                    var t = document.getElementById("autocomplete");
                }
                function init(suggestions) {
                    lookAt(suggestions);
                    setVisible("hidden");
                    //document.onkeydown = keygetter; //needed for Opera...
                    //document.onkeydown = keyHandler;
                }
                function lookAt(suggestions) {
                    var ins = document.getElementById("autocomplete").value;
                    if (posi > -1) ;else if (ins.length > 1) {
                        words = suggestions;
                        if (words.length > 0) {
                            clearOutput();
                            for (var i = 0; i < words.length; ++i) {
                                //if(words[i].label !== words[i].value){
                                addWord(words[i].value, words[i]);
                                //}
                            }

                            setVisible("visible");
                            input = document.getElementById("autocomplete").value;
                        } else {
                            setVisible("hidden");
                            posi = -1;
                        }
                    } else {
                        setVisible("hidden");
                        posi = -1;
                    }
                    oldins = ins;
                }
                /* This method is used to display the final result to the page in the form of dropdown.*/
                function addWord(word, urlFragment) {
                    var valu = document.getElementById("autocomplete").value;
                    var pincode = helperFunctions.ReadCookie('pincode');
                    var sp = document.createElement("li");
                    var anchor = document.createElement("a");
                    var urlFragmentlabel = urlFragment.label;
                    if (urlFragment.id) {
                        if (oldUiSearch == 1) {
                            var url = search_url + '?q=' + encodeURIComponent(urlFragment.value) + '&cid=' + encodeURIComponent(urlFragment.id) + '&auto_suggest=1&seq=' + urlFragment.suggestion_no + '&type=' + urlFragment.suggestion_type + '&count_sc=' + count;
                        } else {
                            var url = base_url + 'search?q=' + encodeURIComponent(urlFragment.value) + '&cid=' + encodeURIComponent(urlFragment.id) + '&auto_suggest=1&seq=' + urlFragment.suggestion_no + '&type=' + urlFragment.suggestion_type + '&token=' + valu + '&count=' + count_sc;
                        }
                        // if(pincode!="")
                        // {
                        //  url=url+'&pincode='+pincode;
                        // }
                        var z = search_source();
                        url += '&z=' + z;
                        anchor.setAttribute('href', url);
                        anchor.setAttribute('class', "anchorHighlight");
                        anchor.setAttribute('onclick', "setValue(" + urlFragment.label + ")");
                        //console.log(urlFragment.label.split("&nbsp;"));
                        var str = urlFragment.label.split("&nbsp;");
                        //console.log(str);
                        var str2 = "";
                        for (var i = 0; i < str.length; i++) {
                            if (str[i] != "") {
                                str2 = str2 + str[i] + "  ";
                            }
                        }
                        word = str2;
                    } else {
                        if (oldUiSearch == 1) {
                            var url = search_url + '?q=' + encodeURIComponent(urlFragment.value) + '&auto_suggest=1&seq=' + urlFragment.suggestion_no + '&type=' + urlFragment.suggestion_type + '&count=' + count_sc;
                        } else {
                            var url = base_url + 'search?q=' + encodeURIComponent(urlFragment.value) + '&auto_suggest=1&seq=' + urlFragment.suggestion_no + '&type=' + urlFragment.suggestion_type + '&token=' + valu + '&count=' + count_sc;
                        }
                        if (pincode != "") {
                            //url=url+'&pincode='+pincode;
                        }
                        var z = search_source();
                        url += '&z=' + z;
                        anchor.setAttribute('href', url);
                        anchor.setAttribute('class', "anchorHighlight");
                        anchor.setAttribute('onclick', "setValue(" + urlFragment.value + ")");
                    }
                    //var regEx = new RegExp(valu, "ig");
                    var tempValu = '<span class="highlight">' + valu + '</span>'; /* In order to highlight the enterd text by user */
                    word = word.replace(valu, tempValu);
                    anchor.innerHTML = word;
                    sp.appendChild(anchor);
                    //sp.onmouseover = mouseHandler;
                    //sp.onmouseout = mouseHandlerOut;
                    sp.onclick = mouseClick;
                    //$('#search-result ul').append(sp);
                    outp.appendChild(sp);
                }
                function clearOutput() {
                    while (outp.hasChildNodes()) {
                        var noten = outp.firstChild;
                        outp.removeChild(noten);
                    }
                    posi = -1;
                }

                function setColor(_posi, _color, _forg) {
                    $(outp.childNodes[_posi]).addClass('focus').siblings().removeClass('focus');
                    //outp.childNodes[_posi].style.background = _color;
                    //outp.childNodes[_posi].style.color = _forg;
                }
                function keygetter(event) {
                    if (!event && window.event) event = window.event;
                    if (event) key = event.keyCode;else key = event.which;
                }
                function keyHandler(event) {
                    if (document.getElementsByClassName("srch_sugg_lst")[0].style.display == "block") {
                        var textfield = document.getElementById("autocomplete");
                        //var start = textfield.selectionStart, end = textfield.selectionEnd;

                        if (event.keyCode == 40) //key down
                        {
                            if (words.length > 0 && posi < words.length - 1) {
                                if (posi >= 0) setColor(posi, "#fff", "black");else input = textfield.value;
                                setColor(++posi, "#f1f1f1", "white");
                                textfield.value = outp.childNodes[posi].firstChild.text;
                            } else {
                                if (posi < $(".seaches_sugge li").not('.heading').length - 1) {
                                    posi++;
                                    $(".seaches_sugge li").removeClass('focus');
                                    $(".seaches_sugge li").not('.heading').eq(posi).addClass('focus');
                                }
                            }
                        } else if (event.keyCode == 38) {
                            //Key up
                            if (words.length > 0 && posi >= 0) {
                                if (posi >= 1) {
                                    setColor(posi, "#fff", "black");
                                    setColor(--posi, "#f1f1f1", "white");
                                    textfield.value = outp.childNodes[posi].firstChild.text;
                                } else {
                                    setColor(posi, "#fff", "black");
                                    textfield.value = input;
                                    textfield.focus();
                                    posi--;
                                }
                                var start = textfield.value.length;
                                setTimeout(function () {
                                    textfield.setSelectionRange(start, start);
                                }, 0);
                            } else {
                                if (posi > 0) {
                                    posi--;
                                    $(".seaches_sugge li").removeClass('focus');
                                    $(".seaches_sugge li").not('.heading').eq(posi).addClass('focus');
                                }
                            }
                        } else if (event.keyCode == 27) {
                            // Esc
                            //textfield.value = input;
                            document.getElementsByClassName("srch_sugg_lst")[0].style.display = 'none';
                            setVisible("hidden");
                            clearOutput();
                            $('#common_overlay').fadeOut('medium');
                            posi = -1;
                            oldins = input;
                        } else if (event.keyCode == 8) {
                            // Backspace
                            posi = -1;
                            oldins = -1;
                            if (words.length === 0) {
                                clearOutput();
                            }
                        }
                    }
                }
                var mouseHandler = function mouseHandler() {
                    for (var i = 0; i < words.length; ++i) {
                        setColor(i, "white", "black");
                    }
                    //this.style.background = "blue";
                    this.style.color = "white";
                };
                var mouseHandlerOut = function mouseHandlerOut() {
                    this.style.background = "white";
                    this.style.color = "black";
                };
                var mouseClick = function mouseClick() {
                    document.getElementById("autocomplete").value = this.firstChild.nodeValue;
                    setVisible("hidden");
                    posi = -1;
                    oldins = this.firstChild.nodeValue;
                };
            };
            $('#autocomplete').bind('input', $.debounce(150, autoComplete));
            function search_source() {
                var z = '';
                var z_cookie;
                z_cookie = helperFunctions.ReadCookie('zettata_threshold');
                if (typeof z_cookie !== 'undefined' && z_cookie !== null && z_cookie != '') {
                    z = z_cookie;
                } else {
                    var d = new Date();
                    var cur_time = d.getTime();
                    var percentageZ;
                    if (percentage_z !== undefined) {
                        percentageZ = JSON.parse(percentage_z);
                        var remainder = cur_time % 100;
                        var floor = 0;
                        var ceil;
                        for (var i = 0; i < percentageZ.length; i++) {
                            ceil = floor + parseInt(percentageZ[i]);
                            if (remainder < ceil) {
                                z = i;
                                break;
                            }
                            floor = ceil;
                        }
                    }
                    // var val=cur_time%9;
                    // if(val < zettata_threshold){
                    //     z=1;
                    // }else{
                    //     z=0;
                    // }
                    helperFunctions.SetCookie('zettata_threshold', z, 12, cookieDomain);
                }
                return z;
            }
            function recentTrendSearch() {
                var render = '';
                var recentSearches = localStorage.getItem('recentSearches');
                var z = search_source();
                if (recentSearches !== null) {
                    recentSearches = JSON.parse(recentSearches).reverse();
                    for (var i = 0, l = recentSearches.length; i < l; i++) {
                        render += '<li><a href="' + base_url + 'search?q=' + encodeURIComponent(recentSearches[i]) + '&z=' + encodeURIComponent(z) + '&rc=1">' + recentSearches[i] + '</a></li>';
                    }
                    $('.recent_searches').append(render);
                    $('.recent_searches').show();
                    $('.clear_history').click(function (e) {
                        $(this).parent().siblings().remove();
                        $('.recent_searches').hide();
                        localStorage.removeItem('recentSearches');
                    });
                }
                if (typeof localforage !== 'undefined') {
                    localforage.getItem('trendingSearches', function (err, value) {
                        if (err) {
                            trendSearch();
                        } else {
                            if (value !== null) {
                                var tmstmp = Math.round(new Date().getTime() / 1000);
                                var value = JSON.parse(value);
                                var expire = value.timestamp;
                                if (tmstmp - expire < 432000) {
                                    respHandle(value.data);
                                } else {
                                    trendSearch();
                                }
                            } else {
                                trendSearch();
                            }
                        }
                    });
                } else {
                    trendSearch();
                }
                function trendSearch() {
                    var url = base_url + 'ajaxCall/searchTrending';
                    microAjax(url, function (data) {
                        if (typeof localforage !== 'undefined') {
                            var tmstmp = Math.round(new Date().getTime() / 1000);
                            localforage.setItem('trendingSearches', JSON.stringify({ 'timestamp': tmstmp, 'data': data }));
                        }
                        respHandle(data);
                    });
                }
                function respHandle(data) {
                    var response = JSON.parse(data);
                    render = '';
                    var z = search_source();
                    for (var i = 0, l = response.length; i < l; i++) {
                        render += "<li><a href='" + base_url + "search?q=" + encodeURIComponent(response[i].name) + "&z=" + encodeURIComponent(z) + "&trend=1'>" + response[i].name + "</a></li>";
                    }
                    $('.trending_srches').append(render);
                    $('.trending_srches').show();
                }
            }
            function searchTrigger() {
                if ($('.seaches_sugge .focus').length > 0) {
                    window.location = $('.seaches_sugge .focus a').attr('href');
                    return false;
                }
                var category = '';
                var pin = '';
                var cat = '';
                var cat = document.getElementById("catId");
                if (typeof cat !== 'undefined' && cat !== null) {
                    cat = document.getElementById('catId').value;
                    if (cat != '') {
                        category = '&cid=' + cat;
                    }
                } else {
                    category = '';
                }
                var val = document.getElementById('autocomplete').value;
                //val = val.replace(/[^-_ a-zA-Z0-9"'&]/g, ' ');
                //val = val.replace(new RegExp('-+', 'g'), '-');
                //val = val.trim();
                var pincode = helperFunctions.ReadCookie('pincode');
                if (pincode !== "") {
                    pin = '&pincode=' + pincode;
                }
                var zone = helperFunctions.ReadCookie('sc_loc');
                if (zone) {
                    zone = '&sc_z=' + zone;
                } else {
                    zone = '&sc_z=';
                }
                var z = search_source();
                if (val.length >= 1 && val.trim() != "") {
                    val = val.replace(new RegExp('&', 'g'), '%26');
                    if ($('#search-result .focus').length > 0) {
                        window.location = $('#search-result .focus a').attr('href');
                        return false;
                    }
                    if (oldUiSearch == 1) {
                        window.location = search_url + '?q=' + encodeURIComponent(val) + category + pin + zone + '&z=' + z + '&count=' + count_sc;
                    } else {
                        window.location = base_url + 'search?q=' + encodeURIComponent(val) + category + pin + zone + '&z=' + z + '&count=' + count_sc;
                    }
                    if (typeof ga !== 'undefined' && ga !== null) {
                        ga('send', 'event', 'Seacrh', 'Search', val);
                    }
                }
            }
            function atom_cart_load_data() {
                if (typeof cookieDelete !== 'undefined' && cookieDelete.length > 0) {
                    for (var key in cookieDelete) {
                        if (cookieDelete.hasOwnProperty(key)) {
                            delete_cookie(cookieDelete[key], '/', '');
                        }
                    }
                }
                if (new_atom_checkout && controller_flag) {
                    var base_url = "/" + 'atom/acart/getMicroCart';
                    $.ajax({
                        url: base_url,
                        type: 'POST',
                        data: { "return": 1 },
                        dataType: 'json',
                        success: function success(res) {
                            if (res.status === 200) {
                                console.log('res' + res);
                                atom_cart_count = res.response.atomcart_data.count;
                                atom_cart_data = res.response.atomcart_data;
                                atom_cart_count = parseInt(atom_cart_count);
                                sessionStorage.setItem('cart_update_time', res.cart_update_time);
                                if (atom_cart_count > 0) {
                                    $('.cart_icon_count').css('display', 'block');
                                    $('.cart_icon_count').show();
                                } else if (atom_cart_count == 0) {
                                    $('.cart_icon_count').css('display', 'none');
                                    $('.cart_icon_count').hide();
                                }
                                if (atom_cart_count > 0 && atom_cart_data.count > 0) {
                                    fn_get_atom_cart(atom_cart_data);
                                }
                            } else {
                                atom_cart_error = 0;
                            }
                        },
                        error: function error(res) {
                            atom_cart_error = 1;
                        }
                    });
                }

                var wishlist_url = "/atom/acart/getWishlist?source=counter";
                $.ajax({
                    url: wishlist_url,
                    type: 'POST',
                    data: { "return": 1 },
                    dataType: 'json',
                    cache: false,
                    success: function success(count) {
                        if (count != null && count != "" && count > 0) {
                            $('#wishlist_cccount').css('display', '');
                            $('#wishlist_cccount').html(count);
                        }
                    }
                });
            }

            if (window.coreJSLoaded) atom_cart_load_data();else document.addEventListener("coreJSLoaded", atom_cart_load_data);

            $('#promo_strip').click(function (e) {
                var tileNumber = $(e.target).attr('id').split('-')[1];
                var rev = $(e.target).attr('rev');
                window.Value = "Home|TN" + tileNumber + "|||||TopNavigatin@" + rev;
                hdrTrking();
            });

            $('#sell_with_us').click(function () {
                window.Value = "Homepage|HeaderLinks|Sell With Us";
                hdrTrking();
            });
            $('#call_us').click(function () {
                window.Value = "Homepage|HeaderLinks|Call Us";
                hdrTrking();
            });
            $('#sign-in').click(function () {
                window.Value = "Homepage|HeaderLinks| Sign In";
                hdrTrking();
            });
            $('.cLocation a').click(function (e) {
                window.Value = "Homepage|HeaderLinks|change location";
                hdrTrking();
            });
            $('.sc_android').click(function (e) {
                window.Value = "Homepage|HeaderLinks|Android";
                hdrTrking();
            });
            $('.sc_apple').click(function (e) {
                window.Value = "Homepage|HeaderLinks|Apple";
                hdrTrking();
            });
            $('.sc_windows').click(function (e) {
                window.Value = "Homepage|HeaderLinks|Windows";
                hdrTrking();
            });
            $('.whishlist_ic').click(function (e) {
                window.Value = "Homepage|HeaderLinks|Wishlist";
                hdrTrking();
            });
            function hdrTrking() {
                window.Campaign = "Others";
                window.PFM = "HomeHeaders";
                if (typeof _satellite !== 'undefined') {
                    _satellite.track('NewHomePage_tracking');
                }
            }
            // Hide Header on on scroll down
            var didScroll;
            var lastScrollTop = 0;
            var delta = 5;
            var navbarHeight = $('.main_navigation .ffix').outerHeight();

            $(window).scroll(function (event) {
                didScroll = true;
            });

            setInterval(function () {
                if (didScroll) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 250);

            function hasScrolled() {
                var st = $(this).scrollTop();

                // Make sure they scroll more than delta
                if (Math.abs(lastScrollTop - st) <= delta) return;

                // If they scrolled down and are past the navbar, add class .nav-up.
                // This is necessary so you never see what is "behind" the navbar.
                if (st > lastScrollTop && st > navbarHeight) {
                    // Scroll Down
                    $('.main_navigation .ffix').removeClass('nav-down').addClass('nav-up');
                    $('.ffix_header').removeClass("head_down").addClass("head_up");
                } else {
                    // Scroll Up
                    if (st + $(window).height() < $(document).height()) {
                        $('.main_navigation .ffix').removeClass('nav-up').addClass('nav-down');
                        $('.ffix_header').removeClass('head_up').addClass("head_down");
                    }
                }

                lastScrollTop = st;
            }
            //Click event to scroll to top
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('.scrollToTop').fadeIn();
                } else {
                    $('.scrollToTop').fadeOut();
                }
            });
            $('.scrollToTop').click(function () {
                $('html, body').animate({ scrollTop: 0 }, 800);
                return false;
            });

            var recentlyViewed = {
                keyname: "recently_viewed",
                getItems: function getItems(param) {
                    var oldValues = localStorage.getItem(this.keyname);
                    if (oldValues) {
                        try {
                            oldValues = JSON.parse(oldValues);
                        } catch (e) {
                            console.log(e);
                            return false;
                        }
                        return oldValues.reverse();
                    } else return [];
                },
                setItem: function setItem(param) {
                    if (!param) return false;
                    var oldValues = localStorage.getItem(this.keyname);
                    if (oldValues) {
                        try {
                            oldValues = JSON.parse(oldValues);
                        } catch (e) {
                            console.log(e);
                            return false;
                        }
                    } else oldValues = [];
                    var newId = param.id;
                    for (var i = 0; i < oldValues.length; i++) {
                        if (oldValues[i].id == newId) {
                            oldValues.splice(i, 1);
                            break;
                        }
                    };
                    if (oldValues.length >= 20) oldValues.splice(0, oldValues.length - 19);
                    oldValues.push(param);
                    localStorage.setItem(this.keyname, JSON.stringify(oldValues));
                    return true;
                }
            };

            function recentlyViewedAll(param, rva_length) {
                if (param && rva_length) {
                    var rva_key = "recently_viewed_all";
                    var oldValues = localStorage.getItem(rva_key);
                    if (oldValues) {
                        try {
                            oldValues = JSON.parse(oldValues);
                        } catch (e) {}
                    } else {
                        oldValues = { 'pid': [], "mid": [], "lid": [] };
                    }
                    // siteReferer is set on the basis of the type of page the user opened  before coming to a PDP.
                    var lastPage = localStorage.getItem('siteReferer') || "NA";
                    var requiredLen = rva_length - 1; // if value from config is n ,then  we will use n-1 as our length to meet our requirements.
                    for (var paramkey in param) {
                        if (paramkey == "pid") {
                            var key = param[paramkey];
                            var obj = {};
                            obj[key] = lastPage;

                            //Handling when previous stored value's length exceeds the required length.
                            if (oldValues.pid.length > requiredLen) {
                                oldValues.pid.splice(0, oldValues.pid.length - requiredLen);
                                oldValues.mid.splice(0, oldValues.mid.length - requiredLen);
                                oldValues.lid.splice(0, oldValues.lid.length - requiredLen);
                            }

                            // Handling of duplicate entry
                            var newPid = param.pid;
                            for (i = 0; i < oldValues.pid.length; i++) {
                                var oldPid = Object.keys(oldValues.pid[i]);
                                if (oldPid[0] == newPid) {
                                    oldValues.pid.splice(i, 1);
                                    oldValues.mid.splice(i, 1);
                                    oldValues.lid.splice(i, 1);
                                    break;
                                }
                            }
                            oldValues.pid.push(obj);
                            localStorage.setItem(rva_key, JSON.stringify(oldValues));
                        }

                        if (paramkey == "mid") {
                            var key = param[paramkey];
                            var obj = {};
                            obj[key] = lastPage;
                            oldValues.mid.push(obj);
                            localStorage.setItem(rva_key, JSON.stringify(oldValues));
                        }
                        if (paramkey == "lid") {
                            var key = param[paramkey];
                            var obj = {};
                            obj[key] = lastPage;
                            oldValues.lid.push(obj);
                            localStorage.setItem(rva_key, JSON.stringify(oldValues));
                        }
                    }
                    localStorage.setItem('siteReferer', 'PDP'); // as this function is called on PDP  therefore siteReferer is set as PDP.
                }
            }

            var recentMFCViewed = {
                keyname: "recent_mfc_viewed",
                getItem: function getItem(param) {
                    var oldValues = sessionStorage.getItem(this.keyname);
                    if (oldValues) {
                        try {
                            oldValues = JSON.parse(oldValues);
                        } catch (e) {
                            console.log(e);
                            return false;
                        }
                        return oldValues.reverse();
                    } else return [];
                },
                setItem: function setItem(param) {
                    if (!param) return false;
                    var oldValues = sessionStorage.getItem(this.keyname);
                    if (oldValues) {
                        try {
                            oldValues = JSON.parse(oldValues);
                        } catch (e) {
                            console.log(e);
                            return false;
                        }
                    } else oldValues = [];
                    var newId = param;
                    for (var i = 0; i < oldValues.length; i++) {
                        if (oldValues[i] == newId) {
                            oldValues.splice(i, 1);
                            break;
                        }
                    };
                    if (oldValues.length >= 10) oldValues.splice(0, oldValues.length - 9);
                    oldValues.push(JSON.stringify(param));
                    sessionStorage.setItem(this.keyname, JSON.stringify(oldValues));
                    return true;
                }
            };

            var bell_notification = function () {
                function init() {
                    $('.notify_list').append("<a href='javascript:void(0)'><p>You have no messages</p></a>");
                    if (sessionStorage.getItem('desktopNotifications') == null) {
                        ajaxCall();
                    } else {
                        render(JSON.parse(sessionStorage.getItem('desktopNotifications')));
                    }
                }

                function ajaxCall() {
                    var data = {};
                    var url = window.base_url + 'ajaxCall/saleBooster';
                    if (typeof visitorId !== 'undefined') {
                        data['visitor_id'] = visitorId;
                    }
                    if (ReadCookie("user_id") || ReadCookie("scumd")) {
                        var userId = ReadCookie("user_id") || ReadCookie("scumd");
                        data['userId'] = atob(userId);
                    }
                    $.ajax({
                        type: 'GET',
                        data: data,
                        url: url,
                        success: function success(resp) {
                            resp = resp.trim() !== '' ? JSON.parse(resp.trim()) : '';
                            if (resp.status == 200 && resp !== '' && resp.response.promotion_available > 0) {
                                sessionStorage.setItem('desktopNotifications', JSON.stringify(resp));
                                render(resp);
                            }
                        },
                        error: function error(jHXR, textStatus) {
                            console.log(textStatus);
                        }
                    });
                }

                function render(resp) {
                    var prods = resp.response.products.visitor;
                    var len = prods.length;
                    var render = "";
                    var list = "<ul>";
                    for (var i = 0; i < len; i++) {
                        try {
                            if (i === 0) {
                                render += "<li class='notification_tip'><a href='" + base_url + prods[i].seo_name + ".html?bell=1'>" + "<img src='" + prods[i].image.icon_image_path + "' alt=''>" + "<div class='discount_validity'>" + "<span class='seller_discount'><span>Ã¢â€šÂ¹" + prods[i].discount_value + " extra discount</span> applied for you.</span>" + "</div>" + "</a></li>";
                            }
                            list += "<li class='notif_list'>" + "<a href='" + window.base_url + prods[i].seo_name + ".html?bell=1'>" + "<img src='" + prods[i].image.icon_image_path + "' alt=''>" + "<i>New</i>" + "<p>" + prods[i].name + "</p>" + "<div class='discount_validity'>" + "<span class='seller_discount'><span>Ã¢â€šÂ¹" + prods[i].discount_value + " extra discount</span> applied for you.</span>" + "<span class='exp_date'>Discount valid till " + prods[i].valid_till + "</span>" + "</div>" + "<span class='btn orange btn_effect buyNow'>Buy Now for Ã¢â€šÂ¹" + prods[i].price_after_salesbooster_promotion + "</span>" + "</a>" + "</li>";
                        } catch (error) {
                            console.log(error);
                        }
                    }
                    list += "</ul>";
                    if (len > 1) {
                        render += "<li class='notification_tip' ><a><p>" + (len - 1) + " more products on discount</p></a></li>";
                    }
                    $('.notification_count').text(len);
                    $('.notification_count').show();
                    $('.notify_list a').remove();
                    $('.notify_list').append(list);
                    if (sessionStorage.getItem('bellNotificationTip') == null) {
                        $('.notify_list ul').prepend(render);
                        $('.notif_list').hide();
                        $('.notification_content').css({ 'visibility': 'visible', 'opacity': 1 });
                        setTimeout(function () {
                            $('.notification_content').removeAttr('style');
                            $('.notification_tip').remove();
                            $('.notif_list').show();
                        }, 3000);
                        sessionStorage.setItem('bellNotificationTip', 0);
                    }
                }
                init();
            }();
            /*   start    */
            $(document).ready(function () {
                $('.brnd_txt .view').click(function () {
                    $(this).parent('.brnd_txt').prev('.brand_desc').toggleClass('open');
                });
                $(document).on('click', '.brnd_txt .more', function () {
                    $(this).removeClass('more').addClass('less').text('View Less');
                });
                $(document).on('click', '.brnd_txt .less', function () {
                    $(this).removeClass('less').addClass('more').text('View More');
                });
                function toTimestamp(strDate) {
                    var datum = Date.parse(strDate);
                    return datum / 1000;
                }
                setInterval(function () {
                    var cart_update_time = toTimestamp(sessionStorage.getItem('cart_update_time'));
                    if (isNaN(cart_update_time) || cart_update_time == null) cart_update_time = 0;
                    var current_time = new Date().getTime();
                    if (Math.abs(parseInt(current_time / 1000) - cart_update_time) > 1800) {
                        var data = {};
                        var url = window.base_url + 'ajaxCall/saleBooster';
                        if (typeof visitorId !== 'undefined') {
                            data['visitor_id'] = visitorId;
                        }
                        if (ReadCookie("user_id") || ReadCookie("scumd")) {
                            var userId = ReadCookie("user_id") || ReadCookie("scumd");
                            data['userId'] = atob(userId);
                        }
                        if (ReadCookie("user_segment")) {
                            var userseg = ReadCookie("user_id");
                            data['user_segment'] = userseg;
                        }
                        data['source_type'] = 'MFC';
                        data['return_promotion'] = 1;
                        data['pid'] = recentMFCViewed.getItem();
                        $.ajax({
                            type: 'GET',
                            data: data,
                            url: url,
                            success: function success(resp) {
                                resp = resp.trim() !== '' ? JSON.parse(resp.trim()) : '';
                                if (resp.status == 200 && resp !== '' && resp.response.promotion_available > 0) {
                                    sessionStorage.setItem('desktopNotifications', JSON.stringify(resp));
                                    bell_notification.render(resp);
                                    sessionStorage.removeItem('recent_mfc_viewed');
                                }
                            },
                            error: function error(jHXR, textStatus) {
                                console.log(textStatus);
                            }
                        });
                    }
                }, mfc_time);
            });
            /*    end  */
            return {
                mouseoverNavigation: mouseoverNavigation,
                trackingData: trackingData,
                autoComplete: autoComplete,
                loginPopup: loginPopup,
                getLoginStatus: getLoginStatus,
                pincodePopup: pincodePopup,
                isNumberKey: isNumberKey,
                searchTrigger: searchTrigger,
                atom_cart_load_data: atom_cart_load_data,
                recentlyViewedAll: recentlyViewedAll,
                recentlyViewed: recentlyViewed,
                recentMFCViewed: recentMFCViewed
            };
        }();
        module.exports = commonjs;

        /***/ }),
    /* 2 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

            !function (a) {
                if ("object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = a();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
                    __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                        (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
                    var b;b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.localforage = a();
                }
            }(function () {
                return function a(b, c, d) {
                    function e(g, h) {
                        if (!c[g]) {
                            if (!b[g]) {
                                var i = "function" == typeof require && require;if (!h && i) return require(g, !0);if (f) return f(g, !0);var j = new Error("Cannot find module '" + g + "'");throw j.code = "MODULE_NOT_FOUND", j;
                            }var k = c[g] = { exports: {} };b[g][0].call(k.exports, function (a) {
                                var c = b[g][1][a];return e(c ? c : a);
                            }, k, k.exports, a, b, c, d);
                        }return c[g].exports;
                    }for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) {
                        e(d[g]);
                    }return e;
                }({ 1: [function (a, b, c) {
                    (function (a) {
                        "use strict";
                        function c() {
                            k = !0;for (var a, b, c = l.length; c;) {
                                for (b = l, l = [], a = -1; ++a < c;) {
                                    b[a]();
                                }c = l.length;
                            }k = !1;
                        }function d(a) {
                            1 !== l.push(a) || k || e();
                        }var e,
                            f = a.MutationObserver || a.WebKitMutationObserver;if (f) {
                            var g = 0,
                                h = new f(c),
                                i = a.document.createTextNode("");h.observe(i, { characterData: !0 }), e = function e() {
                                i.data = g = ++g % 2;
                            };
                        } else if (a.setImmediate || "undefined" == typeof a.MessageChannel) e = "document" in a && "onreadystatechange" in a.document.createElement("script") ? function () {
                            var b = a.document.createElement("script");b.onreadystatechange = function () {
                                c(), b.onreadystatechange = null, b.parentNode.removeChild(b), b = null;
                            }, a.document.documentElement.appendChild(b);
                        } : function () {
                            setTimeout(c, 0);
                        };else {
                            var j = new a.MessageChannel();j.port1.onmessage = c, e = function e() {
                                j.port2.postMessage(0);
                            };
                        }var k,
                            l = [];b.exports = d;
                    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
                }, {}], 2: [function (a, b, c) {
                    "use strict";
                    function d() {}function e(a) {
                        if ("function" != typeof a) throw new TypeError("resolver must be a function");this.state = s, this.queue = [], this.outcome = void 0, a !== d && i(this, a);
                    }function f(a, b, c) {
                        this.promise = a, "function" == typeof b && (this.onFulfilled = b, this.callFulfilled = this.otherCallFulfilled), "function" == typeof c && (this.onRejected = c, this.callRejected = this.otherCallRejected);
                    }function g(a, b, c) {
                        o(function () {
                            var d;try {
                                d = b(c);
                            } catch (e) {
                                return p.reject(a, e);
                            }d === a ? p.reject(a, new TypeError("Cannot resolve promise with itself")) : p.resolve(a, d);
                        });
                    }function h(a) {
                        var b = a && a.then;return a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && "function" == typeof b ? function () {
                            b.apply(a, arguments);
                        } : void 0;
                    }function i(a, b) {
                        function c(b) {
                            f || (f = !0, p.reject(a, b));
                        }function d(b) {
                            f || (f = !0, p.resolve(a, b));
                        }function e() {
                            b(d, c);
                        }var f = !1,
                            g = j(e);"error" === g.status && c(g.value);
                    }function j(a, b) {
                        var c = {};try {
                            c.value = a(b), c.status = "success";
                        } catch (d) {
                            c.status = "error", c.value = d;
                        }return c;
                    }function k(a) {
                        return a instanceof this ? a : p.resolve(new this(d), a);
                    }function l(a) {
                        var b = new this(d);return p.reject(b, a);
                    }function m(a) {
                        function b(a, b) {
                            function d(a) {
                                g[b] = a, ++h !== e || f || (f = !0, p.resolve(j, g));
                            }c.resolve(a).then(d, function (a) {
                                f || (f = !0, p.reject(j, a));
                            });
                        }var c = this;if ("[object Array]" !== Object.prototype.toString.call(a)) return this.reject(new TypeError("must be an array"));var e = a.length,
                            f = !1;if (!e) return this.resolve([]);for (var g = new Array(e), h = 0, i = -1, j = new this(d); ++i < e;) {
                            b(a[i], i);
                        }return j;
                    }function n(a) {
                        function b(a) {
                            c.resolve(a).then(function (a) {
                                f || (f = !0, p.resolve(h, a));
                            }, function (a) {
                                f || (f = !0, p.reject(h, a));
                            });
                        }var c = this;if ("[object Array]" !== Object.prototype.toString.call(a)) return this.reject(new TypeError("must be an array"));var e = a.length,
                            f = !1;if (!e) return this.resolve([]);for (var g = -1, h = new this(d); ++g < e;) {
                            b(a[g]);
                        }return h;
                    }var o = a(1),
                        p = {},
                        q = ["REJECTED"],
                        r = ["FULFILLED"],
                        s = ["PENDING"];b.exports = c = e, e.prototype["catch"] = function (a) {
                        return this.then(null, a);
                    }, e.prototype.then = function (a, b) {
                        if ("function" != typeof a && this.state === r || "function" != typeof b && this.state === q) return this;var c = new this.constructor(d);if (this.state !== s) {
                            var e = this.state === r ? a : b;g(c, e, this.outcome);
                        } else this.queue.push(new f(c, a, b));return c;
                    }, f.prototype.callFulfilled = function (a) {
                        p.resolve(this.promise, a);
                    }, f.prototype.otherCallFulfilled = function (a) {
                        g(this.promise, this.onFulfilled, a);
                    }, f.prototype.callRejected = function (a) {
                        p.reject(this.promise, a);
                    }, f.prototype.otherCallRejected = function (a) {
                        g(this.promise, this.onRejected, a);
                    }, p.resolve = function (a, b) {
                        var c = j(h, b);if ("error" === c.status) return p.reject(a, c.value);var d = c.value;if (d) i(a, d);else {
                            a.state = r, a.outcome = b;for (var e = -1, f = a.queue.length; ++e < f;) {
                                a.queue[e].callFulfilled(b);
                            }
                        }return a;
                    }, p.reject = function (a, b) {
                        a.state = q, a.outcome = b;for (var c = -1, d = a.queue.length; ++c < d;) {
                            a.queue[c].callRejected(b);
                        }return a;
                    }, c.resolve = k, c.reject = l, c.all = m, c.race = n;
                }, { 1: 1 }], 3: [function (a, b, c) {
                    (function (b) {
                        "use strict";
                        "function" != typeof b.Promise && (b.Promise = a(2));
                    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
                }, { 2: 2 }], 4: [function (a, b, c) {
                    "use strict";
                    function d(a, b) {
                        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
                    }function e() {
                        try {
                            if ("undefined" != typeof indexedDB) return indexedDB;if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB;if ("undefined" != typeof mozIndexedDB) return mozIndexedDB;if ("undefined" != typeof OIndexedDB) return OIndexedDB;if ("undefined" != typeof msIndexedDB) return msIndexedDB;
                        } catch (a) {}
                    }function f() {
                        try {
                            return fa ? "undefined" != typeof openDatabase && "undefined" != typeof navigator && navigator.userAgent && /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) ? !1 : fa && "function" == typeof fa.open && "undefined" != typeof IDBKeyRange : !1;
                        } catch (a) {
                            return !1;
                        }
                    }function g() {
                        return "function" == typeof openDatabase;
                    }function h() {
                        try {
                            return "undefined" != typeof localStorage && "setItem" in localStorage && localStorage.setItem;
                        } catch (a) {
                            return !1;
                        }
                    }function i(a, b) {
                        a = a || [], b = b || {};try {
                            return new Blob(a, b);
                        } catch (c) {
                            if ("TypeError" !== c.name) throw c;for (var d = "undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder, e = new d(), f = 0; f < a.length; f += 1) {
                                e.append(a[f]);
                            }return e.getBlob(b.type);
                        }
                    }function j(a, b) {
                        b && a.then(function (a) {
                            b(null, a);
                        }, function (a) {
                            b(a);
                        });
                    }function k(a, b, c) {
                        "function" == typeof b && a.then(b), "function" == typeof c && a["catch"](c);
                    }function l(a) {
                        for (var b = a.length, c = new ArrayBuffer(b), d = new Uint8Array(c), e = 0; b > e; e++) {
                            d[e] = a.charCodeAt(e);
                        }return c;
                    }function m(a) {
                        return new ia(function (b) {
                            var c = i([""]);a.objectStore(ja).put(c, "key"), a.onabort = function (a) {
                                a.preventDefault(), a.stopPropagation(), b(!1);
                            }, a.oncomplete = function () {
                                var a = navigator.userAgent.match(/Chrome\/(\d+)/),
                                    c = navigator.userAgent.match(/Edge\//);b(c || !a || parseInt(a[1], 10) >= 43);
                            };
                        })["catch"](function () {
                            return !1;
                        });
                    }function n(a) {
                        return "boolean" == typeof ga ? ia.resolve(ga) : m(a).then(function (a) {
                            return ga = a;
                        });
                    }function o(a) {
                        var b = ha[a.name],
                            c = {};c.promise = new ia(function (a) {
                            c.resolve = a;
                        }), b.deferredOperations.push(c), b.dbReady ? b.dbReady = b.dbReady.then(function () {
                            return c.promise;
                        }) : b.dbReady = c.promise;
                    }function p(a) {
                        var b = ha[a.name],
                            c = b.deferredOperations.pop();c && c.resolve();
                    }function q(a, b) {
                        return new ia(function (c, d) {
                            if (a.db) {
                                if (!b) return c(a.db);o(a), a.db.close();
                            }var e = [a.name];b && e.push(a.version);var f = fa.open.apply(fa, e);b && (f.onupgradeneeded = function (b) {
                                var c = f.result;try {
                                    c.createObjectStore(a.storeName), b.oldVersion <= 1 && c.createObjectStore(ja);
                                } catch (d) {
                                    if ("ConstraintError" !== d.name) throw d;console.warn('The database "' + a.name + '" has been upgraded from version ' + b.oldVersion + " to version " + b.newVersion + ', but the storage "' + a.storeName + '" already exists.');
                                }
                            }), f.onerror = function () {
                                d(f.error);
                            }, f.onsuccess = function () {
                                c(f.result), p(a);
                            };
                        });
                    }function r(a) {
                        return q(a, !1);
                    }function s(a) {
                        return q(a, !0);
                    }function t(a, b) {
                        if (!a.db) return !0;var c = !a.db.objectStoreNames.contains(a.storeName),
                            d = a.version < a.db.version,
                            e = a.version > a.db.version;if (d && (a.version !== b && console.warn('The database "' + a.name + "\" can't be downgraded from version " + a.db.version + " to version " + a.version + "."), a.version = a.db.version), e || c) {
                            if (c) {
                                var f = a.db.version + 1;f > a.version && (a.version = f);
                            }return !0;
                        }return !1;
                    }function u(a) {
                        return new ia(function (b, c) {
                            var d = new FileReader();d.onerror = c, d.onloadend = function (c) {
                                var d = btoa(c.target.result || "");b({ __local_forage_encoded_blob: !0, data: d, type: a.type });
                            }, d.readAsBinaryString(a);
                        });
                    }function v(a) {
                        var b = l(atob(a.data));return i([b], { type: a.type });
                    }function w(a) {
                        return a && a.__local_forage_encoded_blob;
                    }function x(a) {
                        var b = this,
                            c = b._initReady().then(function () {
                                var a = ha[b._dbInfo.name];return a && a.dbReady ? a.dbReady : void 0;
                            });return k(c, a, a), c;
                    }function y(a) {
                        function b() {
                            return ia.resolve();
                        }var c = this,
                            d = { db: null };if (a) for (var e in a) {
                            d[e] = a[e];
                        }ha || (ha = {});var f = ha[d.name];f || (f = { forages: [], db: null, dbReady: null, deferredOperations: [] }, ha[d.name] = f), f.forages.push(c), c._initReady || (c._initReady = c.ready, c.ready = x);for (var g = [], h = 0; h < f.forages.length; h++) {
                            var i = f.forages[h];i !== c && g.push(i._initReady()["catch"](b));
                        }var j = f.forages.slice(0);return ia.all(g).then(function () {
                            return d.db = f.db, r(d);
                        }).then(function (a) {
                            return d.db = a, t(d, c._defaultConfig.version) ? s(d) : a;
                        }).then(function (a) {
                            d.db = f.db = a, c._dbInfo = d;for (var b = 0; b < j.length; b++) {
                                var e = j[b];e !== c && (e._dbInfo.db = d.db, e._dbInfo.version = d.version);
                            }
                        });
                    }function z(a, b) {
                        var c = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var d = new ia(function (b, d) {
                            c.ready().then(function () {
                                var e = c._dbInfo,
                                    f = e.db.transaction(e.storeName, "readonly").objectStore(e.storeName),
                                    g = f.get(a);g.onsuccess = function () {
                                    var a = g.result;void 0 === a && (a = null), w(a) && (a = v(a)), b(a);
                                }, g.onerror = function () {
                                    d(g.error);
                                };
                            })["catch"](d);
                        });return j(d, b), d;
                    }function A(a, b) {
                        var c = this,
                            d = new ia(function (b, d) {
                                c.ready().then(function () {
                                    var e = c._dbInfo,
                                        f = e.db.transaction(e.storeName, "readonly").objectStore(e.storeName),
                                        g = f.openCursor(),
                                        h = 1;g.onsuccess = function () {
                                        var c = g.result;if (c) {
                                            var d = c.value;w(d) && (d = v(d));var e = a(d, c.key, h++);void 0 !== e ? b(e) : c["continue"]();
                                        } else b();
                                    }, g.onerror = function () {
                                        d(g.error);
                                    };
                                })["catch"](d);
                            });return j(d, b), d;
                    }function B(a, b, c) {
                        var d = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var e = new ia(function (c, e) {
                            var f;d.ready().then(function () {
                                return f = d._dbInfo, "[object Blob]" === ka.call(b) ? n(f.db).then(function (a) {
                                    return a ? b : u(b);
                                }) : b;
                            }).then(function (b) {
                                var d = f.db.transaction(f.storeName, "readwrite"),
                                    g = d.objectStore(f.storeName);null === b && (b = void 0), d.oncomplete = function () {
                                    void 0 === b && (b = null), c(b);
                                }, d.onabort = d.onerror = function () {
                                    var a = h.error ? h.error : h.transaction.error;e(a);
                                };var h = g.put(b, a);
                            })["catch"](e);
                        });return j(e, c), e;
                    }function C(a, b) {
                        var c = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var d = new ia(function (b, d) {
                            c.ready().then(function () {
                                var e = c._dbInfo,
                                    f = e.db.transaction(e.storeName, "readwrite"),
                                    g = f.objectStore(e.storeName),
                                    h = g["delete"](a);f.oncomplete = function () {
                                    b();
                                }, f.onerror = function () {
                                    d(h.error);
                                }, f.onabort = function () {
                                    var a = h.error ? h.error : h.transaction.error;d(a);
                                };
                            })["catch"](d);
                        });return j(d, b), d;
                    }function D(a) {
                        var b = this,
                            c = new ia(function (a, c) {
                                b.ready().then(function () {
                                    var d = b._dbInfo,
                                        e = d.db.transaction(d.storeName, "readwrite"),
                                        f = e.objectStore(d.storeName),
                                        g = f.clear();e.oncomplete = function () {
                                        a();
                                    }, e.onabort = e.onerror = function () {
                                        var a = g.error ? g.error : g.transaction.error;c(a);
                                    };
                                })["catch"](c);
                            });return j(c, a), c;
                    }function E(a) {
                        var b = this,
                            c = new ia(function (a, c) {
                                b.ready().then(function () {
                                    var d = b._dbInfo,
                                        e = d.db.transaction(d.storeName, "readonly").objectStore(d.storeName),
                                        f = e.count();f.onsuccess = function () {
                                        a(f.result);
                                    }, f.onerror = function () {
                                        c(f.error);
                                    };
                                })["catch"](c);
                            });return j(c, a), c;
                    }function F(a, b) {
                        var c = this,
                            d = new ia(function (b, d) {
                                return 0 > a ? void b(null) : void c.ready().then(function () {
                                    var e = c._dbInfo,
                                        f = e.db.transaction(e.storeName, "readonly").objectStore(e.storeName),
                                        g = !1,
                                        h = f.openCursor();h.onsuccess = function () {
                                        var c = h.result;return c ? void (0 === a ? b(c.key) : g ? b(c.key) : (g = !0, c.advance(a))) : void b(null);
                                    }, h.onerror = function () {
                                        d(h.error);
                                    };
                                })["catch"](d);
                            });return j(d, b), d;
                    }function G(a) {
                        var b = this,
                            c = new ia(function (a, c) {
                                b.ready().then(function () {
                                    var d = b._dbInfo,
                                        e = d.db.transaction(d.storeName, "readonly").objectStore(d.storeName),
                                        f = e.openCursor(),
                                        g = [];f.onsuccess = function () {
                                        var b = f.result;return b ? (g.push(b.key), void b["continue"]()) : void a(g);
                                    }, f.onerror = function () {
                                        c(f.error);
                                    };
                                })["catch"](c);
                            });return j(c, a), c;
                    }function H(a) {
                        var b,
                            c,
                            d,
                            e,
                            f,
                            g = .75 * a.length,
                            h = a.length,
                            i = 0;"=" === a[a.length - 1] && (g--, "=" === a[a.length - 2] && g--);var j = new ArrayBuffer(g),
                            k = new Uint8Array(j);for (b = 0; h > b; b += 4) {
                            c = ma.indexOf(a[b]), d = ma.indexOf(a[b + 1]), e = ma.indexOf(a[b + 2]), f = ma.indexOf(a[b + 3]), k[i++] = c << 2 | d >> 4, k[i++] = (15 & d) << 4 | e >> 2, k[i++] = (3 & e) << 6 | 63 & f;
                        }return j;
                    }function I(a) {
                        var b,
                            c = new Uint8Array(a),
                            d = "";for (b = 0; b < c.length; b += 3) {
                            d += ma[c[b] >> 2], d += ma[(3 & c[b]) << 4 | c[b + 1] >> 4], d += ma[(15 & c[b + 1]) << 2 | c[b + 2] >> 6], d += ma[63 & c[b + 2]];
                        }return c.length % 3 === 2 ? d = d.substring(0, d.length - 1) + "=" : c.length % 3 === 1 && (d = d.substring(0, d.length - 2) + "=="), d;
                    }function J(a, b) {
                        var c = "";if (a && (c = Da.call(a)), a && ("[object ArrayBuffer]" === c || a.buffer && "[object ArrayBuffer]" === Da.call(a.buffer))) {
                            var d,
                                e = pa;a instanceof ArrayBuffer ? (d = a, e += ra) : (d = a.buffer, "[object Int8Array]" === c ? e += ta : "[object Uint8Array]" === c ? e += ua : "[object Uint8ClampedArray]" === c ? e += va : "[object Int16Array]" === c ? e += wa : "[object Uint16Array]" === c ? e += ya : "[object Int32Array]" === c ? e += xa : "[object Uint32Array]" === c ? e += za : "[object Float32Array]" === c ? e += Aa : "[object Float64Array]" === c ? e += Ba : b(new Error("Failed to get type for BinaryArray"))), b(e + I(d));
                        } else if ("[object Blob]" === c) {
                            var f = new FileReader();f.onload = function () {
                                var c = na + a.type + "~" + I(this.result);b(pa + sa + c);
                            }, f.readAsArrayBuffer(a);
                        } else try {
                            b(JSON.stringify(a));
                        } catch (g) {
                            console.error("Couldn't convert value into a JSON string: ", a), b(null, g);
                        }
                    }function K(a) {
                        if (a.substring(0, qa) !== pa) return JSON.parse(a);var b,
                            c = a.substring(Ca),
                            d = a.substring(qa, Ca);if (d === sa && oa.test(c)) {
                            var e = c.match(oa);b = e[1], c = c.substring(e[0].length);
                        }var f = H(c);switch (d) {case ra:
                            return f;case sa:
                            return i([f], { type: b });case ta:
                            return new Int8Array(f);case ua:
                            return new Uint8Array(f);case va:
                            return new Uint8ClampedArray(f);case wa:
                            return new Int16Array(f);case ya:
                            return new Uint16Array(f);case xa:
                            return new Int32Array(f);case za:
                            return new Uint32Array(f);case Aa:
                            return new Float32Array(f);case Ba:
                            return new Float64Array(f);default:
                            throw new Error("Unkown type: " + d);}
                    }function L(a) {
                        var b = this,
                            c = { db: null };if (a) for (var d in a) {
                            c[d] = "string" != typeof a[d] ? a[d].toString() : a[d];
                        }var e = new ia(function (a, d) {
                            try {
                                c.db = openDatabase(c.name, String(c.version), c.description, c.size);
                            } catch (e) {
                                return d(e);
                            }c.db.transaction(function (e) {
                                e.executeSql("CREATE TABLE IF NOT EXISTS " + c.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], function () {
                                    b._dbInfo = c, a();
                                }, function (a, b) {
                                    d(b);
                                });
                            });
                        });return c.serializer = Ea, e;
                    }function M(a, b) {
                        var c = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var d = new ia(function (b, d) {
                            c.ready().then(function () {
                                var e = c._dbInfo;e.db.transaction(function (c) {
                                    c.executeSql("SELECT * FROM " + e.storeName + " WHERE key = ? LIMIT 1", [a], function (a, c) {
                                        var d = c.rows.length ? c.rows.item(0).value : null;d && (d = e.serializer.deserialize(d)), b(d);
                                    }, function (a, b) {
                                        d(b);
                                    });
                                });
                            })["catch"](d);
                        });return j(d, b), d;
                    }function N(a, b) {
                        var c = this,
                            d = new ia(function (b, d) {
                                c.ready().then(function () {
                                    var e = c._dbInfo;e.db.transaction(function (c) {
                                        c.executeSql("SELECT * FROM " + e.storeName, [], function (c, d) {
                                            for (var f = d.rows, g = f.length, h = 0; g > h; h++) {
                                                var i = f.item(h),
                                                    j = i.value;if (j && (j = e.serializer.deserialize(j)), j = a(j, i.key, h + 1), void 0 !== j) return void b(j);
                                            }b();
                                        }, function (a, b) {
                                            d(b);
                                        });
                                    });
                                })["catch"](d);
                            });return j(d, b), d;
                    }function O(a, b, c) {
                        var d = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var e = new ia(function (c, e) {
                            d.ready().then(function () {
                                void 0 === b && (b = null);var f = b,
                                    g = d._dbInfo;g.serializer.serialize(b, function (b, d) {
                                    d ? e(d) : g.db.transaction(function (d) {
                                        d.executeSql("INSERT OR REPLACE INTO " + g.storeName + " (key, value) VALUES (?, ?)", [a, b], function () {
                                            c(f);
                                        }, function (a, b) {
                                            e(b);
                                        });
                                    }, function (a) {
                                        a.code === a.QUOTA_ERR && e(a);
                                    });
                                });
                            })["catch"](e);
                        });return j(e, c), e;
                    }function P(a, b) {
                        var c = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var d = new ia(function (b, d) {
                            c.ready().then(function () {
                                var e = c._dbInfo;e.db.transaction(function (c) {
                                    c.executeSql("DELETE FROM " + e.storeName + " WHERE key = ?", [a], function () {
                                        b();
                                    }, function (a, b) {
                                        d(b);
                                    });
                                });
                            })["catch"](d);
                        });return j(d, b), d;
                    }function Q(a) {
                        var b = this,
                            c = new ia(function (a, c) {
                                b.ready().then(function () {
                                    var d = b._dbInfo;d.db.transaction(function (b) {
                                        b.executeSql("DELETE FROM " + d.storeName, [], function () {
                                            a();
                                        }, function (a, b) {
                                            c(b);
                                        });
                                    });
                                })["catch"](c);
                            });return j(c, a), c;
                    }function R(a) {
                        var b = this,
                            c = new ia(function (a, c) {
                                b.ready().then(function () {
                                    var d = b._dbInfo;d.db.transaction(function (b) {
                                        b.executeSql("SELECT COUNT(key) as c FROM " + d.storeName, [], function (b, c) {
                                            var d = c.rows.item(0).c;a(d);
                                        }, function (a, b) {
                                            c(b);
                                        });
                                    });
                                })["catch"](c);
                            });return j(c, a), c;
                    }function S(a, b) {
                        var c = this,
                            d = new ia(function (b, d) {
                                c.ready().then(function () {
                                    var e = c._dbInfo;e.db.transaction(function (c) {
                                        c.executeSql("SELECT key FROM " + e.storeName + " WHERE id = ? LIMIT 1", [a + 1], function (a, c) {
                                            var d = c.rows.length ? c.rows.item(0).key : null;b(d);
                                        }, function (a, b) {
                                            d(b);
                                        });
                                    });
                                })["catch"](d);
                            });return j(d, b), d;
                    }function T(a) {
                        var b = this,
                            c = new ia(function (a, c) {
                                b.ready().then(function () {
                                    var d = b._dbInfo;d.db.transaction(function (b) {
                                        b.executeSql("SELECT key FROM " + d.storeName, [], function (b, c) {
                                            for (var d = [], e = 0; e < c.rows.length; e++) {
                                                d.push(c.rows.item(e).key);
                                            }a(d);
                                        }, function (a, b) {
                                            c(b);
                                        });
                                    });
                                })["catch"](c);
                            });return j(c, a), c;
                    }function U(a) {
                        var b = this,
                            c = {};if (a) for (var d in a) {
                            c[d] = a[d];
                        }return c.keyPrefix = c.name + "/", c.storeName !== b._defaultConfig.storeName && (c.keyPrefix += c.storeName + "/"), b._dbInfo = c, c.serializer = Ea, ia.resolve();
                    }function V(a) {
                        var b = this,
                            c = b.ready().then(function () {
                                for (var a = b._dbInfo.keyPrefix, c = localStorage.length - 1; c >= 0; c--) {
                                    var d = localStorage.key(c);0 === d.indexOf(a) && localStorage.removeItem(d);
                                }
                            });return j(c, a), c;
                    }function W(a, b) {
                        var c = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var d = c.ready().then(function () {
                            var b = c._dbInfo,
                                d = localStorage.getItem(b.keyPrefix + a);return d && (d = b.serializer.deserialize(d)), d;
                        });return j(d, b), d;
                    }function X(a, b) {
                        var c = this,
                            d = c.ready().then(function () {
                                for (var b = c._dbInfo, d = b.keyPrefix, e = d.length, f = localStorage.length, g = 1, h = 0; f > h; h++) {
                                    var i = localStorage.key(h);if (0 === i.indexOf(d)) {
                                        var j = localStorage.getItem(i);if (j && (j = b.serializer.deserialize(j)), j = a(j, i.substring(e), g++), void 0 !== j) return j;
                                    }
                                }
                            });return j(d, b), d;
                    }function Y(a, b) {
                        var c = this,
                            d = c.ready().then(function () {
                                var b,
                                    d = c._dbInfo;try {
                                    b = localStorage.key(a);
                                } catch (e) {
                                    b = null;
                                }return b && (b = b.substring(d.keyPrefix.length)), b;
                            });return j(d, b), d;
                    }function Z(a) {
                        var b = this,
                            c = b.ready().then(function () {
                                for (var a = b._dbInfo, c = localStorage.length, d = [], e = 0; c > e; e++) {
                                    0 === localStorage.key(e).indexOf(a.keyPrefix) && d.push(localStorage.key(e).substring(a.keyPrefix.length));
                                }return d;
                            });return j(c, a), c;
                    }function $(a) {
                        var b = this,
                            c = b.keys().then(function (a) {
                                return a.length;
                            });return j(c, a), c;
                    }function _(a, b) {
                        var c = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var d = c.ready().then(function () {
                            var b = c._dbInfo;localStorage.removeItem(b.keyPrefix + a);
                        });return j(d, b), d;
                    }function aa(a, b, c) {
                        var d = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var e = d.ready().then(function () {
                            void 0 === b && (b = null);var c = b;return new ia(function (e, f) {
                                var g = d._dbInfo;g.serializer.serialize(b, function (b, d) {
                                    if (d) f(d);else try {
                                        localStorage.setItem(g.keyPrefix + a, b), e(c);
                                    } catch (h) {
                                        "QuotaExceededError" !== h.name && "NS_ERROR_DOM_QUOTA_REACHED" !== h.name || f(h), f(h);
                                    }
                                });
                            });
                        });return j(e, c), e;
                    }function ba(a, b) {
                        a[b] = function () {
                            var c = arguments;return a.ready().then(function () {
                                return a[b].apply(a, c);
                            });
                        };
                    }function ca() {
                        for (var a = 1; a < arguments.length; a++) {
                            var b = arguments[a];if (b) for (var c in b) {
                                b.hasOwnProperty(c) && (Na(b[c]) ? arguments[0][c] = b[c].slice() : arguments[0][c] = b[c]);
                            }
                        }return arguments[0];
                    }function da(a) {
                        for (var b in Ia) {
                            if (Ia.hasOwnProperty(b) && Ia[b] === a) return !0;
                        }return !1;
                    }var ea = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (a) {
                            return typeof a === "undefined" ? "undefined" : _typeof(a);
                        } : function (a) {
                            return a && "function" == typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a === "undefined" ? "undefined" : _typeof(a);
                        },
                        fa = e();"undefined" == typeof Promise && "undefined" != typeof a && a(3);var ga,
                        ha,
                        ia = Promise,
                        ja = "local-forage-detect-blob-support",
                        ka = Object.prototype.toString,
                        la = { _driver: "asyncStorage", _initStorage: y, iterate: A, getItem: z, setItem: B, removeItem: C, clear: D, length: E, key: F, keys: G },
                        ma = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        na = "~~local_forage_type~",
                        oa = /^~~local_forage_type~([^~]+)~/,
                        pa = "__lfsc__:",
                        qa = pa.length,
                        ra = "arbf",
                        sa = "blob",
                        ta = "si08",
                        ua = "ui08",
                        va = "uic8",
                        wa = "si16",
                        xa = "si32",
                        ya = "ur16",
                        za = "ui32",
                        Aa = "fl32",
                        Ba = "fl64",
                        Ca = qa + ra.length,
                        Da = Object.prototype.toString,
                        Ea = { serialize: J, deserialize: K, stringToBuffer: H, bufferToString: I },
                        Fa = { _driver: "webSQLStorage", _initStorage: L, iterate: N, getItem: M, setItem: O, removeItem: P, clear: Q, length: R, key: S, keys: T },
                        Ga = { _driver: "localStorageWrapper", _initStorage: U, iterate: X, getItem: W, setItem: aa, removeItem: _, clear: V, length: $, key: Y, keys: Z },
                        Ha = {},
                        Ia = { INDEXEDDB: "asyncStorage", LOCALSTORAGE: "localStorageWrapper", WEBSQL: "webSQLStorage" },
                        Ja = [Ia.INDEXEDDB, Ia.WEBSQL, Ia.LOCALSTORAGE],
                        Ka = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"],
                        La = { description: "", driver: Ja.slice(), name: "localforage", size: 4980736, storeName: "keyvaluepairs", version: 1 },
                        Ma = {};Ma[Ia.INDEXEDDB] = f(), Ma[Ia.WEBSQL] = g(), Ma[Ia.LOCALSTORAGE] = h();var Na = Array.isArray || function (a) {
                                return "[object Array]" === Object.prototype.toString.call(a);
                            },
                        Oa = function () {
                            function a(b) {
                                d(this, a), this.INDEXEDDB = Ia.INDEXEDDB, this.LOCALSTORAGE = Ia.LOCALSTORAGE, this.WEBSQL = Ia.WEBSQL, this._defaultConfig = ca({}, La), this._config = ca({}, this._defaultConfig, b), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver);
                            }return a.prototype.config = function (a) {
                                if ("object" === ("undefined" == typeof a ? "undefined" : ea(a))) {
                                    if (this._ready) return new Error("Can't call config() after localforage has been used.");for (var b in a) {
                                        "storeName" === b && (a[b] = a[b].replace(/\W/g, "_")), this._config[b] = a[b];
                                    }return "driver" in a && a.driver && this.setDriver(this._config.driver), !0;
                                }return "string" == typeof a ? this._config[a] : this._config;
                            }, a.prototype.defineDriver = function (a, b, c) {
                                var d = new ia(function (b, c) {
                                    try {
                                        var d = a._driver,
                                            e = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"),
                                            f = new Error("Custom driver name already in use: " + a._driver);if (!a._driver) return void c(e);if (da(a._driver)) return void c(f);for (var g = Ka.concat("_initStorage"), h = 0; h < g.length; h++) {
                                            var i = g[h];if (!i || !a[i] || "function" != typeof a[i]) return void c(e);
                                        }var j = ia.resolve(!0);"_support" in a && (j = a._support && "function" == typeof a._support ? a._support() : ia.resolve(!!a._support)), j.then(function (c) {
                                            Ma[d] = c, Ha[d] = a, b();
                                        }, c);
                                    } catch (k) {
                                        c(k);
                                    }
                                });return k(d, b, c), d;
                            }, a.prototype.driver = function () {
                                return this._driver || null;
                            }, a.prototype.getDriver = function (a, b, c) {
                                var d = this,
                                    e = ia.resolve().then(function () {
                                        if (!da(a)) {
                                            if (Ha[a]) return Ha[a];throw new Error("Driver not found.");
                                        }switch (a) {case d.INDEXEDDB:
                                            return la;case d.LOCALSTORAGE:
                                            return Ga;case d.WEBSQL:
                                            return Fa;}
                                    });return k(e, b, c), e;
                            }, a.prototype.getSerializer = function (a) {
                                var b = ia.resolve(Ea);return k(b, a), b;
                            }, a.prototype.ready = function (a) {
                                var b = this,
                                    c = b._driverSet.then(function () {
                                        return null === b._ready && (b._ready = b._initDriver()), b._ready;
                                    });return k(c, a, a), c;
                            }, a.prototype.setDriver = function (a, b, c) {
                                function d() {
                                    f._config.driver = f.driver();
                                }function e(a) {
                                    return function () {
                                        function b() {
                                            for (; c < a.length;) {
                                                var e = a[c];return c++, f._dbInfo = null, f._ready = null, f.getDriver(e).then(function (a) {
                                                    return f._extend(a), d(), f._ready = f._initStorage(f._config), f._ready;
                                                })["catch"](b);
                                            }d();var g = new Error("No available storage method found.");return f._driverSet = ia.reject(g), f._driverSet;
                                        }var c = 0;return b();
                                    };
                                }var f = this;Na(a) || (a = [a]);var g = this._getSupportedDrivers(a),
                                    h = null !== this._driverSet ? this._driverSet["catch"](function () {
                                        return ia.resolve();
                                    }) : ia.resolve();return this._driverSet = h.then(function () {
                                    var a = g[0];return f._dbInfo = null, f._ready = null, f.getDriver(a).then(function (a) {
                                        f._driver = a._driver, d(), f._wrapLibraryMethodsWithReady(), f._initDriver = e(g);
                                    });
                                })["catch"](function () {
                                    d();var a = new Error("No available storage method found.");return f._driverSet = ia.reject(a), f._driverSet;
                                }), k(this._driverSet, b, c), this._driverSet;
                            }, a.prototype.supports = function (a) {
                                return !!Ma[a];
                            }, a.prototype._extend = function (a) {
                                ca(this, a);
                            }, a.prototype._getSupportedDrivers = function (a) {
                                for (var b = [], c = 0, d = a.length; d > c; c++) {
                                    var e = a[c];this.supports(e) && b.push(e);
                                }return b;
                            }, a.prototype._wrapLibraryMethodsWithReady = function () {
                                for (var a = 0; a < Ka.length; a++) {
                                    ba(this, Ka[a]);
                                }
                            }, a.prototype.createInstance = function (b) {
                                return new a(b);
                            }, a;
                        }(),
                        Pa = new Oa();b.exports = Pa;
                }, { 3: 3 }] }, {}, [4])(4);
            });
            /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

        /***/ }),
    /* 3 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

        (function (factory) {
            'use strict';
            factory(jQuery);
        })(function ($) {
            'use strict';
            var Slick = window.Slick || {};Slick = function () {
                var instanceUid = 0;function Slick(element, settings) {
                    var _ = this,
                        dataSettings;_.defaults = { accessibility: true, adaptiveHeight: false, appendArrows: $(element), appendDots: $(element), arrows: true, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: false, autoplaySpeed: 3000, centerMode: false, centerPadding: '50px', cssEase: 'ease', customPaging: function customPaging(slider, i) {
                        return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                    }, dots: false, dotsClass: 'slick-dots', draggable: true, easing: 'linear', edgeFriction: 0.35, fade: false, focusOnSelect: false, infinite: true, initialSlide: 0, lazyLoad: 'ondemand', mobileFirst: false, pauseOnHover: true, pauseOnFocus: true, pauseOnDotsHover: false, respondTo: 'window', responsive: null, rows: 1, rtl: false, slide: '', slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: true, swipeToSlide: false, touchMove: true, touchThreshold: 5, useCSS: true, useTransform: true, variableWidth: false, vertical: false, verticalSwiping: false, waitForAnimate: true, zIndex: 1000 };_.initials = { animating: false, dragging: false, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: false, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: false, unslicked: false };$.extend(_, _.initials);_.activeBreakpoint = null;_.animType = null;_.animProp = null;_.breakpoints = [];_.breakpointSettings = [];_.cssTransitions = false;_.focussed = false;_.interrupted = false;_.hidden = 'hidden';_.paused = true;_.positionProp = null;_.respondTo = null;_.rowCount = 1;_.shouldClick = true;_.$slider = $(element);_.$slidesCache = null;_.transformType = null;_.transitionType = null;_.visibilityChange = 'visibilitychange';_.windowWidth = 0;_.windowTimer = null;dataSettings = $(element).data('slick') || {};_.options = $.extend({}, _.defaults, settings, dataSettings);_.currentSlide = _.options.initialSlide;_.originalSettings = _.options;if (typeof document.mozHidden !== 'undefined') {
                        _.hidden = 'mozHidden';_.visibilityChange = 'mozvisibilitychange';
                    } else if (typeof document.webkitHidden !== 'undefined') {
                        _.hidden = 'webkitHidden';_.visibilityChange = 'webkitvisibilitychange';
                    }_.autoPlay = $.proxy(_.autoPlay, _);_.autoPlayClear = $.proxy(_.autoPlayClear, _);_.autoPlayIterator = $.proxy(_.autoPlayIterator, _);_.changeSlide = $.proxy(_.changeSlide, _);_.clickHandler = $.proxy(_.clickHandler, _);_.selectHandler = $.proxy(_.selectHandler, _);_.setPosition = $.proxy(_.setPosition, _);_.swipeHandler = $.proxy(_.swipeHandler, _);_.dragHandler = $.proxy(_.dragHandler, _);_.keyHandler = $.proxy(_.keyHandler, _);_.instanceUid = instanceUid++;_.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;_.registerBreakpoints();_.init(true);
                }return Slick;
            }();Slick.prototype.activateADA = function () {
                var _ = this;_.$slideTrack.find('.slick-active').attr({ 'aria-hidden': 'false' }).find('a, input, button, select').attr({ 'tabindex': '0' });
            };Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
                var _ = this;if (typeof index === 'boolean') {
                    addBefore = index;index = null;
                } else if (index < 0 || index >= _.slideCount) {
                    return false;
                }_.unload();if (typeof index === 'number') {
                    if (index === 0 && _.$slides.length === 0) {
                        $(markup).appendTo(_.$slideTrack);
                    } else if (addBefore) {
                        $(markup).insertBefore(_.$slides.eq(index));
                    } else {
                        $(markup).insertAfter(_.$slides.eq(index));
                    }
                } else {
                    if (addBefore === true) {
                        $(markup).prependTo(_.$slideTrack);
                    } else {
                        $(markup).appendTo(_.$slideTrack);
                    }
                }_.$slides = _.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slides.each(function (index, element) {
                    $(element).attr('data-slick-index', index);
                });_.$slidesCache = _.$slides;_.reinit();
            };Slick.prototype.animateHeight = function () {
                var _ = this;if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
                    var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);_.$list.animate({ height: targetHeight }, _.options.speed);
                }
            };Slick.prototype.animateSlide = function (targetLeft, callback) {
                var animProps = {},
                    _ = this;_.animateHeight();if (_.options.rtl === true && _.options.vertical === false) {
                    targetLeft = -targetLeft;
                }if (_.transformsEnabled === false) {
                    if (_.options.vertical === false) {
                        _.$slideTrack.animate({ left: targetLeft }, _.options.speed, _.options.easing, callback);
                    } else {
                        _.$slideTrack.animate({ top: targetLeft }, _.options.speed, _.options.easing, callback);
                    }
                } else {
                    if (_.cssTransitions === false) {
                        if (_.options.rtl === true) {
                            _.currentLeft = -_.currentLeft;
                        }$({ animStart: _.currentLeft }).animate({ animStart: targetLeft }, { duration: _.options.speed, easing: _.options.easing, step: function step(now) {
                            now = Math.ceil(now);if (_.options.vertical === false) {
                                animProps[_.animType] = 'translate(' + now + 'px, 0px)';_.$slideTrack.css(animProps);
                            } else {
                                animProps[_.animType] = 'translate(0px,' + now + 'px)';_.$slideTrack.css(animProps);
                            }
                        }, complete: function complete() {
                            if (callback) {
                                callback.call();
                            }
                        } });
                    } else {
                        _.applyTransition();targetLeft = Math.ceil(targetLeft);if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                        } else {
                            animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                        }_.$slideTrack.css(animProps);if (callback) {
                            setTimeout(function () {
                                _.disableTransition();callback.call();
                            }, _.options.speed);
                        }
                    }
                }
            };Slick.prototype.getNavTarget = function () {
                var _ = this,
                    asNavFor = _.options.asNavFor;if (asNavFor && asNavFor !== null) {
                    asNavFor = $(asNavFor).not(_.$slider);
                }return asNavFor;
            };Slick.prototype.asNavFor = function (index) {
                var _ = this,
                    asNavFor = _.getNavTarget();if (asNavFor !== null && (typeof asNavFor === 'undefined' ? 'undefined' : _typeof(asNavFor)) === 'object') {
                    asNavFor.each(function () {
                        var target = $(this).slick('getSlick');if (!target.unslicked) {
                            target.slideHandler(index, true);
                        }
                    });
                }
            };Slick.prototype.applyTransition = function (slide) {
                var _ = this,
                    transition = {};if (_.options.fade === false) {
                    transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
                } else {
                    transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
                }if (_.options.fade === false) {
                    _.$slideTrack.css(transition);
                } else {
                    _.$slides.eq(slide).css(transition);
                }
            };Slick.prototype.autoPlay = function () {
                var _ = this;_.autoPlayClear();if (_.slideCount > _.options.slidesToShow) {
                    _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
                }
            };Slick.prototype.autoPlayClear = function () {
                var _ = this;if (_.autoPlayTimer) {
                    clearInterval(_.autoPlayTimer);
                }
            };Slick.prototype.autoPlayIterator = function () {
                var _ = this,
                    slideTo = _.currentSlide + _.options.slidesToScroll;if (!_.paused && !_.interrupted && !_.focussed) {
                    if (_.options.infinite === false) {
                        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
                            _.direction = 0;
                        } else if (_.direction === 0) {
                            slideTo = _.currentSlide - _.options.slidesToScroll;if (_.currentSlide - 1 === 0) {
                                _.direction = 1;
                            }
                        }
                    }_.slideHandler(slideTo);
                }
            };Slick.prototype.buildArrows = function () {
                var _ = this;if (_.options.arrows === true) {
                    _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');_.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');if (_.slideCount > _.options.slidesToShow) {
                        _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');_.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');if (_.htmlExpr.test(_.options.prevArrow)) {
                            _.$prevArrow.prependTo(_.options.appendArrows);
                        }if (_.htmlExpr.test(_.options.nextArrow)) {
                            _.$nextArrow.appendTo(_.options.appendArrows);
                        }if (_.options.infinite !== true) {
                            _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                        }
                    } else {
                        _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({ 'aria-disabled': 'true', 'tabindex': '-1' });
                    }
                }
            };Slick.prototype.buildDots = function () {
                var _ = this,
                    i,
                    dot;if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
                    _.$slider.addClass('slick-dotted');dot = $('<ul />').addClass(_.options.dotsClass);for (i = 0; i <= _.getDotCount(); i += 1) {
                        dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
                    }_.$dots = dot.appendTo(_.options.appendDots);_.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
                }
            };Slick.prototype.buildOut = function () {
                var _ = this;_.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');_.slideCount = _.$slides.length;_.$slides.each(function (index, element) {
                    $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
                });_.$slider.addClass('slick-slider');_.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();_.$list = _.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();_.$slideTrack.css('opacity', 0);if (_.options.centerMode === true || _.options.swipeToSlide === true) {
                    _.options.slidesToScroll = 1;
                }$('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');_.setupInfinite();_.buildArrows();_.buildDots();_.updateDots();_.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);if (_.options.draggable === true) {
                    _.$list.addClass('draggable');
                }
            };Slick.prototype.buildRows = function () {
                var _ = this,
                    a,
                    b,
                    c,
                    newSlides,
                    numOfSlides,
                    originalSlides,
                    slidesPerSection;newSlides = document.createDocumentFragment();originalSlides = _.$slider.children();if (_.options.rows > 1) {
                    slidesPerSection = _.options.slidesPerRow * _.options.rows;numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);for (a = 0; a < numOfSlides; a++) {
                        var slide = document.createElement('div');for (b = 0; b < _.options.rows; b++) {
                            var row = document.createElement('div');for (c = 0; c < _.options.slidesPerRow; c++) {
                                var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);if (originalSlides.get(target)) {
                                    row.appendChild(originalSlides.get(target));
                                }
                            }slide.appendChild(row);
                        }newSlides.appendChild(slide);
                    }_.$slider.empty().append(newSlides);_.$slider.children().children().children().css({ 'width': 100 / _.options.slidesPerRow + '%', 'display': 'inline-block' });
                }
            };Slick.prototype.checkResponsive = function (initial, forceUpdate) {
                var _ = this,
                    breakpoint,
                    targetBreakpoint,
                    respondToWidth,
                    triggerBreakpoint = false;var sliderWidth = _.$slider.width();var windowWidth = window.innerWidth || $(window).width();if (_.respondTo === 'window') {
                    respondToWidth = windowWidth;
                } else if (_.respondTo === 'slider') {
                    respondToWidth = sliderWidth;
                } else if (_.respondTo === 'min') {
                    respondToWidth = Math.min(windowWidth, sliderWidth);
                }if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
                    targetBreakpoint = null;for (breakpoint in _.breakpoints) {
                        if (_.breakpoints.hasOwnProperty(breakpoint)) {
                            if (_.originalSettings.mobileFirst === false) {
                                if (respondToWidth < _.breakpoints[breakpoint]) {
                                    targetBreakpoint = _.breakpoints[breakpoint];
                                }
                            } else {
                                if (respondToWidth > _.breakpoints[breakpoint]) {
                                    targetBreakpoint = _.breakpoints[breakpoint];
                                }
                            }
                        }
                    }if (targetBreakpoint !== null) {
                        if (_.activeBreakpoint !== null) {
                            if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                                _.activeBreakpoint = targetBreakpoint;if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                                    _.unslick(targetBreakpoint);
                                } else {
                                    _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);if (initial === true) {
                                        _.currentSlide = _.options.initialSlide;
                                    }_.refresh(initial);
                                }triggerBreakpoint = targetBreakpoint;
                            }
                        } else {
                            _.activeBreakpoint = targetBreakpoint;if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                                _.unslick(targetBreakpoint);
                            } else {
                                _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);if (initial === true) {
                                    _.currentSlide = _.options.initialSlide;
                                }_.refresh(initial);
                            }triggerBreakpoint = targetBreakpoint;
                        }
                    } else {
                        if (_.activeBreakpoint !== null) {
                            _.activeBreakpoint = null;_.options = _.originalSettings;if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }_.refresh(initial);triggerBreakpoint = targetBreakpoint;
                        }
                    }if (!initial && triggerBreakpoint !== false) {
                        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
                    }
                }
            };Slick.prototype.changeSlide = function (event, dontAnimate) {
                var _ = this,
                    $target = $(event.currentTarget),
                    indexOffset,
                    slideOffset,
                    unevenOffset;if ($target.is('a')) {
                    event.preventDefault();
                }if (!$target.is('li')) {
                    $target = $target.closest('li');
                }unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;switch (event.data.message) {case 'previous':
                    slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;if (_.slideCount > _.options.slidesToShow) {
                        _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                    }break;case 'next':
                    slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;if (_.slideCount > _.options.slidesToShow) {
                        _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                    }break;case 'index':
                    var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;_.slideHandler(_.checkNavigable(index), false, dontAnimate);$target.children().trigger('focus');break;default:
                    return;}
            };Slick.prototype.checkNavigable = function (index) {
                var _ = this,
                    navigables,
                    prevNavigable;navigables = _.getNavigableIndexes();prevNavigable = 0;if (index > navigables[navigables.length - 1]) {
                    index = navigables[navigables.length - 1];
                } else {
                    for (var n in navigables) {
                        if (index < navigables[n]) {
                            index = prevNavigable;break;
                        }prevNavigable = navigables[n];
                    }
                }return index;
            };Slick.prototype.cleanUpEvents = function () {
                var _ = this;if (_.options.dots && _.$dots !== null) {
                    $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));
                }_.$slider.off('focus.slick blur.slick');if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
                    _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);_.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
                }_.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);_.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);_.$list.off('touchend.slick mouseup.slick', _.swipeHandler);_.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);_.$list.off('click.slick', _.clickHandler);$(document).off(_.visibilityChange, _.visibility);_.cleanUpSlideEvents();if (_.options.accessibility === true) {
                    _.$list.off('keydown.slick', _.keyHandler);
                }if (_.options.focusOnSelect === true) {
                    $(_.$slideTrack).children().off('click.slick', _.selectHandler);
                }$(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);$(window).off('resize.slick.slick-' + _.instanceUid, _.resize);$('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);$(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);$(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
            };Slick.prototype.cleanUpSlideEvents = function () {
                var _ = this;_.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));_.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
            };Slick.prototype.cleanUpRows = function () {
                var _ = this,
                    originalSlides;if (_.options.rows > 1) {
                    originalSlides = _.$slides.children().children();originalSlides.removeAttr('style');_.$slider.empty().append(originalSlides);
                }
            };Slick.prototype.clickHandler = function (event) {
                var _ = this;if (_.shouldClick === false) {
                    event.stopImmediatePropagation();event.stopPropagation();event.preventDefault();
                }
            };Slick.prototype.destroy = function (refresh) {
                var _ = this;_.autoPlayClear();_.touchObject = {};_.cleanUpEvents();$('.slick-cloned', _.$slider).detach();if (_.$dots) {
                    _.$dots.remove();
                }if (_.$prevArrow && _.$prevArrow.length) {
                    _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');if (_.htmlExpr.test(_.options.prevArrow)) {
                        _.$prevArrow.remove();
                    }
                }if (_.$nextArrow && _.$nextArrow.length) {
                    _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');if (_.htmlExpr.test(_.options.nextArrow)) {
                        _.$nextArrow.remove();
                    }
                }if (_.$slides) {
                    _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
                        $(this).attr('style', $(this).data('originalStyling'));
                    });_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.detach();_.$list.detach();_.$slider.append(_.$slides);
                }_.cleanUpRows();_.$slider.removeClass('slick-slider');_.$slider.removeClass('slick-initialized');_.$slider.removeClass('slick-dotted');_.unslicked = true;if (!refresh) {
                    _.$slider.trigger('destroy', [_]);
                }
            };Slick.prototype.disableTransition = function (slide) {
                var _ = this,
                    transition = {};transition[_.transitionType] = '';if (_.options.fade === false) {
                    _.$slideTrack.css(transition);
                } else {
                    _.$slides.eq(slide).css(transition);
                }
            };Slick.prototype.fadeSlide = function (slideIndex, callback) {
                var _ = this;if (_.cssTransitions === false) {
                    _.$slides.eq(slideIndex).css({ zIndex: _.options.zIndex });_.$slides.eq(slideIndex).animate({ opacity: 1 }, _.options.speed, _.options.easing, callback);
                } else {
                    _.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({ opacity: 1, zIndex: _.options.zIndex });if (callback) {
                        setTimeout(function () {
                            _.disableTransition(slideIndex);callback.call();
                        }, _.options.speed);
                    }
                }
            };Slick.prototype.fadeSlideOut = function (slideIndex) {
                var _ = this;if (_.cssTransitions === false) {
                    _.$slides.eq(slideIndex).animate({ opacity: 0, zIndex: _.options.zIndex - 2 }, _.options.speed, _.options.easing);
                } else {
                    _.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({ opacity: 0, zIndex: _.options.zIndex - 2 });
                }
            };Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
                var _ = this;if (filter !== null) {
                    _.$slidesCache = _.$slides;_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.filter(filter).appendTo(_.$slideTrack);_.reinit();
                }
            };Slick.prototype.focusHandler = function () {
                var _ = this;_.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*:not(.slick-arrow)', function (event) {
                    event.stopImmediatePropagation();var $sf = $(this);setTimeout(function () {
                        if (_.options.pauseOnFocus) {
                            _.focussed = $sf.is(':focus');_.autoPlay();
                        }
                    }, 0);
                });
            };Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
                var _ = this;return _.currentSlide;
            };Slick.prototype.getDotCount = function () {
                var _ = this;var breakPoint = 0;var counter = 0;var pagerQty = 0;if (_.options.infinite === true) {
                    while (breakPoint < _.slideCount) {
                        ++pagerQty;breakPoint = counter + _.options.slidesToScroll;counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                    }
                } else if (_.options.centerMode === true) {
                    pagerQty = _.slideCount;
                } else if (!_.options.asNavFor) {
                    pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
                } else {
                    while (breakPoint < _.slideCount) {
                        ++pagerQty;breakPoint = counter + _.options.slidesToScroll;counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                    }
                }return pagerQty - 1;
            };Slick.prototype.getLeft = function (slideIndex) {
                var _ = this,
                    targetLeft,
                    verticalHeight,
                    verticalOffset = 0,
                    targetSlide;_.slideOffset = 0;verticalHeight = _.$slides.first().outerHeight(true);if (_.options.infinite === true) {
                    if (_.slideCount > _.options.slidesToShow) {
                        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;verticalOffset = verticalHeight * _.options.slidesToShow * -1;
                    }if (_.slideCount % _.options.slidesToScroll !== 0) {
                        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                            if (slideIndex > _.slideCount) {
                                _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
                            } else {
                                _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
                            }
                        }
                    }
                } else {
                    if (slideIndex + _.options.slidesToShow > _.slideCount) {
                        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
                    }
                }if (_.slideCount <= _.options.slidesToShow) {
                    _.slideOffset = 0;verticalOffset = 0;
                }if (_.options.centerMode === true && _.options.infinite === true) {
                    _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
                } else if (_.options.centerMode === true) {
                    _.slideOffset = 0;_.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
                }if (_.options.vertical === false) {
                    targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
                } else {
                    targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
                }if (_.options.variableWidth === true) {
                    if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                    } else {
                        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
                    }if (_.options.rtl === true) {
                        if (targetSlide[0]) {
                            targetLeft = _.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width();
                        } else {
                            targetLeft = 0;
                        }
                    } else {
                        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                    }if (_.options.centerMode === true) {
                        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                            targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                        } else {
                            targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                        }if (_.options.rtl === true) {
                            if (targetSlide[0]) {
                                targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                            } else {
                                targetLeft = 0;
                            }
                        } else {
                            targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                        }targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
                    }
                }return targetLeft;
            };Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
                var _ = this;return _.options[option];
            };Slick.prototype.getNavigableIndexes = function () {
                var _ = this,
                    breakPoint = 0,
                    counter = 0,
                    indexes = [],
                    max;if (_.options.infinite === false) {
                    max = _.slideCount;
                } else {
                    breakPoint = _.options.slidesToScroll * -1;counter = _.options.slidesToScroll * -1;max = _.slideCount * 2;
                }while (breakPoint < max) {
                    indexes.push(breakPoint);breakPoint = counter + _.options.slidesToScroll;counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }return indexes;
            };Slick.prototype.getSlick = function () {
                return this;
            };Slick.prototype.getSlideCount = function () {
                var _ = this,
                    slidesTraversed,
                    swipedSlide,
                    centerOffset;centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;if (_.options.swipeToSlide === true) {
                    _.$slideTrack.find('.slick-slide').each(function (index, slide) {
                        if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
                            swipedSlide = slide;return false;
                        }
                    });slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;return slidesTraversed;
                } else {
                    return _.options.slidesToScroll;
                }
            };Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
                var _ = this;_.changeSlide({ data: { message: 'index', index: parseInt(slide) } }, dontAnimate);
            };Slick.prototype.init = function (creation) {
                var _ = this;if (!$(_.$slider).hasClass('slick-initialized')) {
                    $(_.$slider).addClass('slick-initialized');_.buildRows();_.buildOut();_.setProps();_.startLoad();_.loadSlider();_.initializeEvents();_.updateArrows();_.updateDots();_.checkResponsive(true);_.focusHandler();
                }if (creation) {
                    _.$slider.trigger('init', [_]);
                }if (_.options.accessibility === true) {
                    _.initADA();
                }if (_.options.autoplay) {
                    _.paused = false;_.autoPlay();
                }
            };Slick.prototype.initADA = function () {
                var _ = this;_.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({ 'aria-hidden': 'true', 'tabindex': '-1' }).find('a, input, button, select').attr({ 'tabindex': '-1' });_.$slideTrack.attr('role', 'listbox');_.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
                    $(this).attr({ 'role': 'option', 'aria-describedby': 'slick-slide' + _.instanceUid + i + '' });
                });if (_.$dots !== null) {
                    _.$dots.attr('role', 'tablist').find('li').each(function (i) {
                        $(this).attr({ 'role': 'presentation', 'aria-selected': 'false', 'aria-controls': 'navigation' + _.instanceUid + i + '', 'id': 'slick-slide' + _.instanceUid + i + '' });
                    }).first().attr('aria-selected', 'true').end().find('button').attr('role', 'button').end().closest('div').attr('role', 'toolbar');
                }_.activateADA();
            };Slick.prototype.initArrowEvents = function () {
                var _ = this;if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
                    _.$prevArrow.off('click.slick').on('click.slick', { message: 'previous' }, _.changeSlide);_.$nextArrow.off('click.slick').on('click.slick', { message: 'next' }, _.changeSlide);
                }
            };Slick.prototype.initDotEvents = function () {
                var _ = this;if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
                    $('li', _.$dots).on('click.slick', { message: 'index' }, _.changeSlide);
                }if (_.options.dots === true && _.options.pauseOnDotsHover === true) {
                    $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
                }
            };Slick.prototype.initSlideEvents = function () {
                var _ = this;if (_.options.pauseOnHover) {
                    _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));_.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
                }
            };Slick.prototype.initializeEvents = function () {
                var _ = this;_.initArrowEvents();_.initDotEvents();_.initSlideEvents();_.$list.on('touchstart.slick mousedown.slick', { action: 'start' }, _.swipeHandler);_.$list.on('touchmove.slick mousemove.slick', { action: 'move' }, _.swipeHandler);_.$list.on('touchend.slick mouseup.slick', { action: 'end' }, _.swipeHandler);_.$list.on('touchcancel.slick mouseleave.slick', { action: 'end' }, _.swipeHandler);_.$list.on('click.slick', _.clickHandler);$(document).on(_.visibilityChange, $.proxy(_.visibility, _));if (_.options.accessibility === true) {
                    _.$list.on('keydown.slick', _.keyHandler);
                }if (_.options.focusOnSelect === true) {
                    $(_.$slideTrack).children().on('click.slick', _.selectHandler);
                }$(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));$(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));$('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);$(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);$(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);
            };Slick.prototype.initUI = function () {
                var _ = this;if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
                    _.$prevArrow.show();_.$nextArrow.show();
                }if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
                    _.$dots.show();
                }
            };Slick.prototype.keyHandler = function (event) {
                var _ = this;if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
                    if (event.keyCode === 37 && _.options.accessibility === true) {
                        _.changeSlide({ data: { message: _.options.rtl === true ? 'next' : 'previous' } });
                    } else if (event.keyCode === 39 && _.options.accessibility === true) {
                        _.changeSlide({ data: { message: _.options.rtl === true ? 'previous' : 'next' } });
                    }
                }
            };Slick.prototype.lazyLoad = function () {
                var _ = this,
                    loadRange,
                    cloneRange,
                    rangeStart,
                    rangeEnd;function loadImages(imagesScope) {
                    $('img[data-lazy]', imagesScope).each(function () {
                        var image = $(this),
                            imageSource = $(this).attr('data-lazy'),
                            imageToLoad = document.createElement('img');imageToLoad.onload = function () {
                            image.animate({ opacity: 0 }, 100, function () {
                                image.attr('src', imageSource).animate({ opacity: 1 }, 200, function () {
                                    image.removeAttr('data-lazy').removeClass('slick-loading');
                                });_.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                            });
                        };imageToLoad.onerror = function () {
                            image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError', [_, image, imageSource]);
                        };imageToLoad.src = imageSource;
                    });
                }if (_.options.centerMode === true) {
                    if (_.options.infinite === true) {
                        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);rangeEnd = rangeStart + _.options.slidesToShow + 2;
                    } else {
                        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
                    }
                } else {
                    rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);if (_.options.fade === true) {
                        if (rangeStart > 0) rangeStart--;if (rangeEnd <= _.slideCount) rangeEnd++;
                    }
                }loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);loadImages(loadRange);if (_.slideCount <= _.options.slidesToShow) {
                    cloneRange = _.$slider.find('.slick-slide');loadImages(cloneRange);
                } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
                    cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);loadImages(cloneRange);
                } else if (_.currentSlide === 0) {
                    cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);loadImages(cloneRange);
                }
            };Slick.prototype.loadSlider = function () {
                var _ = this;_.setPosition();_.$slideTrack.css({ opacity: 1 });_.$slider.removeClass('slick-loading');_.initUI();if (_.options.lazyLoad === 'progressive') {
                    _.progressiveLazyLoad();
                }
            };Slick.prototype.next = Slick.prototype.slickNext = function () {
                var _ = this;_.changeSlide({ data: { message: 'next' } });
            };Slick.prototype.orientationChange = function () {
                var _ = this;_.checkResponsive();_.setPosition();
            };Slick.prototype.pause = Slick.prototype.slickPause = function () {
                var _ = this;_.autoPlayClear();_.paused = true;
            };Slick.prototype.play = Slick.prototype.slickPlay = function () {
                var _ = this;_.autoPlay();_.options.autoplay = true;_.paused = false;_.focussed = false;_.interrupted = false;
            };Slick.prototype.postSlide = function (index) {
                var _ = this;if (!_.unslicked) {
                    _.$slider.trigger('afterChange', [_, index]);_.animating = false;_.setPosition();_.swipeLeft = null;if (_.options.autoplay) {
                        _.autoPlay();
                    }if (_.options.accessibility === true) {
                        _.initADA();
                    }
                }
            };Slick.prototype.prev = Slick.prototype.slickPrev = function () {
                var _ = this;_.changeSlide({ data: { message: 'previous' } });
            };Slick.prototype.preventDefault = function (event) {
                event.preventDefault();
            };Slick.prototype.progressiveLazyLoad = function (tryCount) {
                tryCount = tryCount || 1;var _ = this,
                    $imgsToLoad = $('img[data-lazy]', _.$slider),
                    image,
                    imageSource,
                    imageToLoad;if ($imgsToLoad.length) {
                    image = $imgsToLoad.first();imageSource = image.attr('data-lazy');imageToLoad = document.createElement('img');imageToLoad.onload = function () {
                        image.attr('src', imageSource).removeAttr('data-lazy').removeClass('slick-loading');if (_.options.adaptiveHeight === true) {
                            _.setPosition();
                        }_.$slider.trigger('lazyLoaded', [_, image, imageSource]);_.progressiveLazyLoad();
                    };imageToLoad.onerror = function () {
                        if (tryCount < 3) {
                            setTimeout(function () {
                                _.progressiveLazyLoad(tryCount + 1);
                            }, 500);
                        } else {
                            image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError', [_, image, imageSource]);_.progressiveLazyLoad();
                        }
                    };imageToLoad.src = imageSource;
                } else {
                    _.$slider.trigger('allImagesLoaded', [_]);
                }
            };Slick.prototype.refresh = function (initializing) {
                var _ = this,
                    currentSlide,
                    lastVisibleIndex;lastVisibleIndex = _.slideCount - _.options.slidesToShow;if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
                    _.currentSlide = lastVisibleIndex;
                }if (_.slideCount <= _.options.slidesToShow) {
                    _.currentSlide = 0;
                }currentSlide = _.currentSlide;_.destroy(true);$.extend(_, _.initials, { currentSlide: currentSlide });_.init();if (!initializing) {
                    _.changeSlide({ data: { message: 'index', index: currentSlide } }, false);
                }
            };Slick.prototype.registerBreakpoints = function () {
                var _ = this,
                    breakpoint,
                    currentBreakpoint,
                    l,
                    responsiveSettings = _.options.responsive || null;if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
                    _.respondTo = _.options.respondTo || 'window';for (breakpoint in responsiveSettings) {
                        l = _.breakpoints.length - 1;currentBreakpoint = responsiveSettings[breakpoint].breakpoint;if (responsiveSettings.hasOwnProperty(breakpoint)) {
                            while (l >= 0) {
                                if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                                    _.breakpoints.splice(l, 1);
                                }l--;
                            }_.breakpoints.push(currentBreakpoint);_.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                        }
                    }_.breakpoints.sort(function (a, b) {
                        return _.options.mobileFirst ? a - b : b - a;
                    });
                }
            };Slick.prototype.reinit = function () {
                var _ = this;_.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');_.slideCount = _.$slides.length;if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
                    _.currentSlide = _.currentSlide - _.options.slidesToScroll;
                }if (_.slideCount <= _.options.slidesToShow) {
                    _.currentSlide = 0;
                }_.registerBreakpoints();_.setProps();_.setupInfinite();_.buildArrows();_.updateArrows();_.initArrowEvents();_.buildDots();_.updateDots();_.initDotEvents();_.cleanUpSlideEvents();_.initSlideEvents();_.checkResponsive(false, true);if (_.options.focusOnSelect === true) {
                    $(_.$slideTrack).children().on('click.slick', _.selectHandler);
                }_.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);_.setPosition();_.focusHandler();_.paused = !_.options.autoplay;_.autoPlay();_.$slider.trigger('reInit', [_]);
            };Slick.prototype.resize = function () {
                var _ = this;if ($(window).width() !== _.windowWidth) {
                    clearTimeout(_.windowDelay);_.windowDelay = window.setTimeout(function () {
                        _.windowWidth = $(window).width();_.checkResponsive();if (!_.unslicked) {
                            _.setPosition();
                        }
                    }, 50);
                }
            };Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
                var _ = this;if (typeof index === 'boolean') {
                    removeBefore = index;index = removeBefore === true ? 0 : _.slideCount - 1;
                } else {
                    index = removeBefore === true ? --index : index;
                }if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
                    return false;
                }_.unload();if (removeAll === true) {
                    _.$slideTrack.children().remove();
                } else {
                    _.$slideTrack.children(this.options.slide).eq(index).remove();
                }_.$slides = _.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slidesCache = _.$slides;_.reinit();
            };Slick.prototype.setCSS = function (position) {
                var _ = this,
                    positionProps = {},
                    x,
                    y;if (_.options.rtl === true) {
                    position = -position;
                }x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';positionProps[_.positionProp] = position;if (_.transformsEnabled === false) {
                    _.$slideTrack.css(positionProps);
                } else {
                    positionProps = {};if (_.cssTransitions === false) {
                        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';_.$slideTrack.css(positionProps);
                    } else {
                        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';_.$slideTrack.css(positionProps);
                    }
                }
            };Slick.prototype.setDimensions = function () {
                var _ = this;if (_.options.vertical === false) {
                    if (_.options.centerMode === true) {
                        _.$list.css({ padding: '0px ' + _.options.centerPadding });
                    }
                } else {
                    _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);if (_.options.centerMode === true) {
                        _.$list.css({ padding: _.options.centerPadding + ' 0px' });
                    }
                }_.listWidth = _.$list.width();_.listHeight = _.$list.height();if (_.options.vertical === false && _.options.variableWidth === false) {
                    _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);_.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
                } else if (_.options.variableWidth === true) {
                    _.$slideTrack.width(5000 * _.slideCount);
                } else {
                    _.slideWidth = Math.ceil(_.listWidth);_.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
                }var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
            };Slick.prototype.setFade = function () {
                var _ = this,
                    targetLeft;_.$slides.each(function (index, element) {
                    targetLeft = _.slideWidth * index * -1;if (_.options.rtl === true) {
                        $(element).css({ position: 'relative', right: targetLeft, top: 0, zIndex: _.options.zIndex - 2, opacity: 0 });
                    } else {
                        $(element).css({ position: 'relative', left: targetLeft, top: 0, zIndex: _.options.zIndex - 2, opacity: 0 });
                    }
                });_.$slides.eq(_.currentSlide).css({ zIndex: _.options.zIndex - 1, opacity: 1 });
            };Slick.prototype.setHeight = function () {
                var _ = this;if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
                    var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);_.$list.css('height', targetHeight);
                }
            };Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
                var _ = this,
                    l,
                    item,
                    option,
                    value,
                    refresh = false,
                    type;if ($.type(arguments[0]) === 'object') {
                    option = arguments[0];refresh = arguments[1];type = 'multiple';
                } else if ($.type(arguments[0]) === 'string') {
                    option = arguments[0];value = arguments[1];refresh = arguments[2];if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
                        type = 'responsive';
                    } else if (typeof arguments[1] !== 'undefined') {
                        type = 'single';
                    }
                }if (type === 'single') {
                    _.options[option] = value;
                } else if (type === 'multiple') {
                    $.each(option, function (opt, val) {
                        _.options[opt] = val;
                    });
                } else if (type === 'responsive') {
                    for (item in value) {
                        if ($.type(_.options.responsive) !== 'array') {
                            _.options.responsive = [value[item]];
                        } else {
                            l = _.options.responsive.length - 1;while (l >= 0) {
                                if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
                                    _.options.responsive.splice(l, 1);
                                }l--;
                            }_.options.responsive.push(value[item]);
                        }
                    }
                }if (refresh) {
                    _.unload();_.reinit();
                }
            };Slick.prototype.setPosition = function () {
                var _ = this;_.setDimensions();_.setHeight();if (_.options.fade === false) {
                    _.setCSS(_.getLeft(_.currentSlide));
                } else {
                    _.setFade();
                }_.$slider.trigger('setPosition', [_]);
            };Slick.prototype.setProps = function () {
                var _ = this,
                    bodyStyle = document.body.style;_.positionProp = _.options.vertical === true ? 'top' : 'left';if (_.positionProp === 'top') {
                    _.$slider.addClass('slick-vertical');
                } else {
                    _.$slider.removeClass('slick-vertical');
                }if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
                    if (_.options.useCSS === true) {
                        _.cssTransitions = true;
                    }
                }if (_.options.fade) {
                    if (typeof _.options.zIndex === 'number') {
                        if (_.options.zIndex < 3) {
                            _.options.zIndex = 3;
                        }
                    } else {
                        _.options.zIndex = _.defaults.zIndex;
                    }
                }if (bodyStyle.OTransform !== undefined) {
                    _.animType = 'OTransform';_.transformType = '-o-transform';_.transitionType = 'OTransition';if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
                }if (bodyStyle.MozTransform !== undefined) {
                    _.animType = 'MozTransform';_.transformType = '-moz-transform';_.transitionType = 'MozTransition';if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
                }if (bodyStyle.webkitTransform !== undefined) {
                    _.animType = 'webkitTransform';_.transformType = '-webkit-transform';_.transitionType = 'webkitTransition';if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
                }if (bodyStyle.msTransform !== undefined) {
                    _.animType = 'msTransform';_.transformType = '-ms-transform';_.transitionType = 'msTransition';if (bodyStyle.msTransform === undefined) _.animType = false;
                }if (bodyStyle.transform !== undefined && _.animType !== false) {
                    _.animType = 'transform';_.transformType = 'transform';_.transitionType = 'transition';
                }_.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
            };Slick.prototype.setSlideClasses = function (index) {
                var _ = this,
                    centerOffset,
                    allSlides,
                    indexOffset,
                    remainder;allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');_.$slides.eq(index).addClass('slick-current');if (_.options.centerMode === true) {
                    centerOffset = Math.floor(_.options.slidesToShow / 2);if (_.options.infinite === true) {
                        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
                            _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
                        } else {
                            indexOffset = _.options.slidesToShow + index;allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
                        }if (index === 0) {
                            allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                        } else if (index === _.slideCount - 1) {
                            allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                        }
                    }_.$slides.eq(index).addClass('slick-center');
                } else {
                    if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
                        _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
                    } else if (allSlides.length <= _.options.slidesToShow) {
                        allSlides.addClass('slick-active').attr('aria-hidden', 'false');
                    } else {
                        remainder = _.slideCount % _.options.slidesToShow;indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
                            allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
                        } else {
                            allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
                        }
                    }
                }if (_.options.lazyLoad === 'ondemand') {
                    _.lazyLoad();
                }
            };Slick.prototype.setupInfinite = function () {
                var _ = this,
                    i,
                    slideIndex,
                    infiniteCount;if (_.options.fade === true) {
                    _.options.centerMode = false;
                }if (_.options.infinite === true && _.options.fade === false) {
                    slideIndex = null;if (_.slideCount > _.options.slidesToShow) {
                        if (_.options.centerMode === true) {
                            infiniteCount = _.options.slidesToShow + 1;
                        } else {
                            infiniteCount = _.options.slidesToShow;
                        }for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
                            slideIndex = i - 1;$(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
                        }for (i = 0; i < infiniteCount; i += 1) {
                            slideIndex = i;$(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
                        }_.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
                            $(this).attr('id', '');
                        });
                    }
                }
            };Slick.prototype.interrupt = function (toggle) {
                var _ = this;if (!toggle) {
                    _.autoPlay();
                }_.interrupted = toggle;
            };Slick.prototype.selectHandler = function (event) {
                var _ = this;var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');var index = parseInt(targetElement.attr('data-slick-index'));if (!index) index = 0;if (_.slideCount <= _.options.slidesToShow) {
                    _.setSlideClasses(index);_.asNavFor(index);return;
                }_.slideHandler(index);
            };Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
                var targetSlide,
                    animSlide,
                    oldSlide,
                    slideLeft,
                    targetLeft = null,
                    _ = this,
                    navTarget;sync = sync || false;if (_.animating === true && _.options.waitForAnimate === true) {
                    return;
                }if (_.options.fade === true && _.currentSlide === index) {
                    return;
                }if (_.slideCount <= _.options.slidesToShow) {
                    return;
                }if (sync === false) {
                    _.asNavFor(index);
                }targetSlide = index;targetLeft = _.getLeft(targetSlide);slideLeft = _.getLeft(_.currentSlide);_.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
                    if (_.options.fade === false) {
                        targetSlide = _.currentSlide;if (dontAnimate !== true) {
                            _.animateSlide(slideLeft, function () {
                                _.postSlide(targetSlide);
                            });
                        } else {
                            _.postSlide(targetSlide);
                        }
                    }return;
                } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
                    if (_.options.fade === false) {
                        targetSlide = _.currentSlide;if (dontAnimate !== true) {
                            _.animateSlide(slideLeft, function () {
                                _.postSlide(targetSlide);
                            });
                        } else {
                            _.postSlide(targetSlide);
                        }
                    }return;
                }if (_.options.autoplay) {
                    clearInterval(_.autoPlayTimer);
                }if (targetSlide < 0) {
                    if (_.slideCount % _.options.slidesToScroll !== 0) {
                        animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
                    } else {
                        animSlide = _.slideCount + targetSlide;
                    }
                } else if (targetSlide >= _.slideCount) {
                    if (_.slideCount % _.options.slidesToScroll !== 0) {
                        animSlide = 0;
                    } else {
                        animSlide = targetSlide - _.slideCount;
                    }
                } else {
                    animSlide = targetSlide;
                }_.animating = true;_.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);oldSlide = _.currentSlide;_.currentSlide = animSlide;_.setSlideClasses(_.currentSlide);if (_.options.asNavFor) {
                    navTarget = _.getNavTarget();navTarget = navTarget.slick('getSlick');if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                        navTarget.setSlideClasses(_.currentSlide);
                    }
                }_.updateDots();_.updateArrows();if (_.options.fade === true) {
                    if (dontAnimate !== true) {
                        _.fadeSlideOut(oldSlide);_.fadeSlide(animSlide, function () {
                            _.postSlide(animSlide);
                        });
                    } else {
                        _.postSlide(animSlide);
                    }_.animateHeight();return;
                }if (dontAnimate !== true) {
                    _.animateSlide(targetLeft, function () {
                        _.postSlide(animSlide);
                    });
                } else {
                    _.postSlide(animSlide);
                }
            };Slick.prototype.startLoad = function () {
                var _ = this;if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
                    _.$prevArrow.hide();_.$nextArrow.hide();
                }if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
                    _.$dots.hide();
                }_.$slider.addClass('slick-loading');
            };Slick.prototype.swipeDirection = function () {
                var xDist,
                    yDist,
                    r,
                    swipeAngle,
                    _ = this;xDist = _.touchObject.startX - _.touchObject.curX;yDist = _.touchObject.startY - _.touchObject.curY;r = Math.atan2(yDist, xDist);swipeAngle = Math.round(r * 180 / Math.PI);if (swipeAngle < 0) {
                    swipeAngle = 360 - Math.abs(swipeAngle);
                }if (swipeAngle <= 45 && swipeAngle >= 0) {
                    return _.options.rtl === false ? 'left' : 'right';
                }if (swipeAngle <= 360 && swipeAngle >= 315) {
                    return _.options.rtl === false ? 'left' : 'right';
                }if (swipeAngle >= 135 && swipeAngle <= 225) {
                    return _.options.rtl === false ? 'right' : 'left';
                }if (_.options.verticalSwiping === true) {
                    if (swipeAngle >= 35 && swipeAngle <= 135) {
                        return 'down';
                    } else {
                        return 'up';
                    }
                }return 'vertical';
            };Slick.prototype.swipeEnd = function (event) {
                var _ = this,
                    slideCount,
                    direction;_.dragging = false;_.interrupted = false;_.shouldClick = _.touchObject.swipeLength > 10 ? false : true;if (_.touchObject.curX === undefined) {
                    return false;
                }if (_.touchObject.edgeHit === true) {
                    _.$slider.trigger('edge', [_, _.swipeDirection()]);
                }if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
                    direction = _.swipeDirection();switch (direction) {case 'left':case 'down':
                        slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();_.currentDirection = 0;break;case 'right':case 'up':
                        slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();_.currentDirection = 1;break;default:}if (direction != 'vertical') {
                        _.slideHandler(slideCount);_.touchObject = {};_.$slider.trigger('swipe', [_, direction]);
                    }
                } else {
                    if (_.touchObject.startX !== _.touchObject.curX) {
                        _.slideHandler(_.currentSlide);_.touchObject = {};
                    }
                }
            };Slick.prototype.swipeHandler = function (event) {
                var _ = this;if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
                    return;
                } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
                    return;
                }_.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;_.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;if (_.options.verticalSwiping === true) {
                    _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
                }switch (event.data.action) {case 'start':
                    _.swipeStart(event);break;case 'move':
                    _.swipeMove(event);break;case 'end':
                    _.swipeEnd(event);break;}
            };Slick.prototype.swipeMove = function (event) {
                var _ = this,
                    edgeWasHit = false,
                    curLeft,
                    swipeDirection,
                    swipeLength,
                    positionOffset,
                    touches;touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;if (!_.dragging || touches && touches.length !== 1) {
                    return false;
                }curLeft = _.getLeft(_.currentSlide);_.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;_.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;_.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));if (_.options.verticalSwiping === true) {
                    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
                }swipeDirection = _.swipeDirection();if (swipeDirection === 'vertical') {
                    return;
                }if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
                    event.preventDefault();
                }positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);if (_.options.verticalSwiping === true) {
                    positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
                }swipeLength = _.touchObject.swipeLength;_.touchObject.edgeHit = false;if (_.options.infinite === false) {
                    if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
                        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;_.touchObject.edgeHit = true;
                    }
                }if (_.options.vertical === false) {
                    _.swipeLeft = curLeft + swipeLength * positionOffset;
                } else {
                    _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
                }if (_.options.verticalSwiping === true) {
                    _.swipeLeft = curLeft + swipeLength * positionOffset;
                }if (_.options.fade === true || _.options.touchMove === false) {
                    return false;
                }if (_.animating === true) {
                    _.swipeLeft = null;return false;
                }_.setCSS(_.swipeLeft);
            };Slick.prototype.swipeStart = function (event) {
                var _ = this,
                    touches;_.interrupted = true;if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
                    _.touchObject = {};return false;
                }if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
                    touches = event.originalEvent.touches[0];
                }_.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;_.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;_.dragging = true;
            };Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
                var _ = this;if (_.$slidesCache !== null) {
                    _.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.appendTo(_.$slideTrack);_.reinit();
                }
            };Slick.prototype.unload = function () {
                var _ = this;$('.slick-cloned', _.$slider).remove();if (_.$dots) {
                    _.$dots.remove();
                }if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.remove();
                }if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.remove();
                }_.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
            };Slick.prototype.unslick = function (fromBreakpoint) {
                var _ = this;_.$slider.trigger('unslick', [_, fromBreakpoint]);_.destroy();
            };Slick.prototype.updateArrows = function () {
                var _ = this,
                    centerOffset;centerOffset = Math.floor(_.options.slidesToShow / 2);if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
                    _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');if (_.currentSlide === 0) {
                        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
                    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
                        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
                    } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
                        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
                    }
                }
            };Slick.prototype.updateDots = function () {
                var _ = this;if (_.$dots !== null) {
                    _.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true');_.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden', 'false');
                }
            };Slick.prototype.visibility = function () {
                var _ = this;if (_.options.autoplay) {
                    if (document[_.hidden]) {
                        _.interrupted = true;
                    } else {
                        _.interrupted = false;
                    }
                }
            };$.fn.slick = function () {
                var _ = this,
                    opt = arguments[0],
                    args = Array.prototype.slice.call(arguments, 1),
                    l = _.length,
                    i,
                    ret;for (i = 0; i < l; i++) {
                    if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);if (typeof ret != 'undefined') return ret;
                }return _;
            };
        });

        /***/ }),
    /* 4 */
    /***/ (function(module, exports) {

        var g;

// This works in non-strict mode
        g = (function() {
            return this;
        })();

        try {
            // This works if eval is allowed (see CSP)
            g = g || Function("return this")() || (1,eval)("this");
        } catch(e) {
            // This works if the window reference is available
            if(typeof window === "object")
                g = window;
        }

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

        module.exports = g;


        /***/ }),
    /* 5 */,
    /* 6 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var helperFunctions = __webpack_require__(0);
        __webpack_require__(3);
        if (typeof keyFeatureCnt !== 'undefined' && keyFeatureCnt == 1) {
            $('.des_info').hide();
        }
        var avflag = '';
        window.sibling = '';
        var offr_list = '';var offertext = '';
        var spanId = '';
        var siblingId = '';
        var feature_block_test = '';
        var vid = '';
        window.pdp_videos = 1;
        var digi_fbb = 0;
        var thumb_timer;
        var counter = 0;
        var current_index = 1;
        var prev = { variantID: '', optionID: '' };
        var token = '';
        window.price_cut = 0;
        var applicablecb = 0;
        var applicablecbpercent = 0;
        window.ques_ans_block = '';
        $(document).ready(function () {
            if (window.location.href.indexOf('ref_sib') > 0) {
                var siblingVariant = window.location.href.split('ref_sib=')[1];
                var id = siblingVariant.split('&')[0];
                $('#' + id).trigger('click');
            }
        });
        (function () {
            var url = base_url + 'ajaxCall/gettoken';
            $.ajax({
                url: url,
                type: 'GET',
                success: function success(res) {
                    if (res !== 0) token = res;
                }
            });
        })();

        var pdp = function (SC, window) {
            var soldProducts = '';
            var pdp_setup = {
                hideReview: 0,
                fireShippping: true,
                prevSel: '',
                prevEMI: '',
                init: function init() {
                    //this.initialSteup();
                    this.bindReviewClick();
                    this.bindEmiInfo();
                    this.bindSeller();
                    //this.bindScroll();
                    this.bindSizeChrt();
                    this.bindSellerBuy();
                    this.bindBuyNow();
                    this.bindAddTocart();
                    this.bindAddToWishlist();
                    this.checkShipping();
                    this.updateOption();
                    this.bindBlur();
                    this.bindLeftArrow();
                    this.bindRightArrow();
                    //this.bindPrdDesc();
                    this.bindDataTab();
                    this.bindTabOne();
                    this.bindTabTwo();
                    this.bindSpecs();
                    this.bindBulk();
                    this.bindUnbx();
                    this.bindReview();
                    this.bindBadge();
                    this.bindSpecification();
                    this.getVideos();
                },
                /*    bindScroll : function(){
                 document.getElementById("moreReview").addEventListener("click", function(event) {
                 if(typeof pdp_setup.showRev !== 'undefined' && pdp_setup.showRev == 1 && pdp_setup.hideReview == 0){
                 window.pId = 96988385;
                 var url = base_url+'home/reviewDetail/'+window.pId;
                 microAjax(url,function(res){
                 if(res !== ''){
                 window.showRev = 0;
                 if(document.getElementById('pdp_rnr') === null && pdp_setup.hideReview == 0){
                 $(".pdp_info").after(res);
                 var pstars =  Math.round(window.stars);
                 var ostars = window.avg_rat / 5 * 284;
                 $(".c_fill").css( "stroke-dasharray",   ostars + "," + "284"  );
                 }
                 }
                 });
                 }
                 });
                 }, */
                bindSpecification: function bindSpecification() {
                    $('#specification h3').click(function () {
                        $(this).parent().parent().nextUntil('.grpDesc').slideToggle('fast');
                        $(this).toggleClass('active');
                    });
                },
                getVideos: function getVideos() {
                    $('.vid_videos').click(function (e) {
                        var vid = e.target.getAttribute('vid');
                        var height = e.target.getAttribute('height');
                        var type = e.target.getAttribute('type');
                        var width;
                        if (parseInt(type) == 1) {
                            pdp_videos = "featured videos";
                            width = e.target.getAttribute('width');
                        } else if (parseInt(type) == 2) {
                            pdp_videos = "review videos";
                            width = e.target.parentElement.style.width; //e.target.getAttribute('width');
                        }
                        if (vid.indexOf('?') > -1) {
                            vid = vid + "&autoplay=1";
                        } else {
                            vid = vid + "?autoplay=1";
                        }
                        if (typeof _satellite !== 'undefined') {
                            _satellite.track('pdp_videos');
                        }
                        e.target.parentElement.classList.add('remove');
                        var cls = e.target.className;
                        var iframe = document.createElement("iframe");
                        iframe.setAttribute("src", vid);
                        iframe.setAttribute('id', 'player');
                        iframe.setAttribute('width', width);
                        iframe.setAttribute('height', height);
                        iframe.style.display = "block";
                        iframe.setAttribute("frameborder", "0");
                        iframe.setAttribute("allowfullscreen", "1");
                        e.target.parentNode.replaceChild(iframe, e.target.previousElementSibling);
                    });
                },
                bindBadge: function bindBadge() {
                    $('.badge').on('click', function () {
                        $('.bStatus').show();
                        $('.bStatus').parents('#common_overlay').fadeIn(300);
                        $('.popupModel').show();
                    });

                    $('#common_popupModel .close').on('click', function () {
                        $('#common_popupModel > div').hide();
                        $(this).parents('#common_overlay').fadeOut(100);
                        $('body').css('position', 'relative');
                    });
                },
                bindBulk: function bindBulk() {
                    $('#sh_bulk').on('click', function () {
                        $('#bulk_tb').toggle();
                        //$('.sc_offer').parents('#common_overlay').fadeIn(300);
                    });
                },
                bindReview: function bindReview() {
                    $('#scrolltoreview').on('click', function () {
                        var offset = $('.selected_product_tabbing').offset();
                        var height = $('.selected_product_tabbing')[0].scrollHeight + offset.top;
                        $('html, body').animate({
                            scrollTop: height
                        });
                    });
                },
                bindSpecs: function bindSpecs() {
                    $('#scrolltospecs').on('click', function () {
                        var offset = $('.selected_product_tabbing').offset();
                        $('html, body').animate({
                            scrollTop: offset.top
                        });
                    });
                },
                bindUnbx: function bindUnbx() {
                    $('#scrolltounbx').on('click', function () {
                        var offset = $('.refurbhished').offset();
                        $('html, body').animate({
                            scrollTop: offset.top - 100
                        });
                    });
                },
                bindTabOne: function bindTabOne() {
                    $('[data-tab="1"]').on('click', function () {
                        $(this).parents(".tabbing_nav").animate({ scrollLeft: '-=460' }, 1000);
                    });
                },
                bindTabTwo: function bindTabTwo() {
                    $(this).parents(".tabbing_nav").animate({ scrollLeft: '+=460' }, 1000);
                },
                bindDataTab: function bindDataTab() {
                    $('[data-tab]').on('click', function (e) {
                        $(this).addClass('active').siblings('[data-tab]').removeClass('active');
                        $(this).parents(".tabbing_nav").siblings(".tabbing_info").children('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active');
                        //e.preventDefault();
                    });
                },
                //    bindPrdDesc : function(){
                //        $('.pd-descr').click(function() {
                //            if(typeof window.subFeatures !== 'undefined' && window.subFeatures == 0){
                //                pdp_setup.firePdDescAjax = false;
                //            }
                //            if(pdp_setup.firePdDescAjax === true){
                //                $('#responseLoading').show();
                //                var id = pId;
                //                if (typeof mspData !== 'undefined' && mspData == 1) {
                //                    id = masterPid;
                //                }
                //                var url= base_url+'ajaxCall/getProductDesc/' + id;
                //                    microAjax(url, function(res){
                //                       if(res.trim()!== '')
                //                       {
                //                           $('#product_description').html(res);
                //                            firePdDescAjax = false;
                //                       }
                //                       $('#responseLoading').hide();
                //                    });
                //                //$('#specification').hide();
                //                //$('.pd-spec').removeClass('active');
                //                //$('.pd-descr').addClass('active');
                //                //$('#product_description').show();
                //            }
                //        });
                //    },


                bindBlur: function bindBlur() {
                    $(document).ready(function () {
                        $('#wholesale_qty').bind('blur keyup', function (e) {
                            if (e.type == 'blur' || e.keyCode == '13') {
                                if (parseInt($(this).val()) < parseInt($('#wholesale_min_qty').val())) {
                                    window.toastMessage('Quantity should be greater than minimum order quantity');
                                    $(this).val($('#wholesale_min_qty').val());
                                } else {
                                    $(this).val($('#wholesale_qty').val());
                                    var wh_qty = $(this).val();
                                    if (bulk_product == 1) {
                                        for (var i = 0; i < bd_count; i++) {
                                            if (parseInt(wh_qty) >= parseInt(bd_info[i].min_qty) && parseInt(wh_qty) <= parseInt(bd_info[i].max_qty) || parseInt(wh_qty) >= parseInt(bd_info[i].min_qty) && bd_info[i].max_qty == '') {
                                                wprice = bd_info[i].price;
                                                if (sch != 0) {
                                                    sch = bd_info[i].shipping_charge;
                                                }
                                            }
                                        }
                                    }
                                    var wh_price = (wprice * wh_qty).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                    var wh_sc = (sch * wh_qty).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                    var tvhtml = "<li id='total_value'>Total Order Value : <span>" + wh_price + "</span></li>";
                                    var schtml = "<li id='total_sc'>Total Shipping Charge : <span>" + wh_sc + "</span></li>";
                                    $("#total_value").html(tvhtml);
                                    $("#total_sc").html(schtml);
                                }
                                $("#quantityId").val(parseInt($(this).val()));
                            }
                        });
                    });
                },
                bindLeftArrow: function bindLeftArrow() {
                    $(".left_arrow").on('click', function () {
                        var whole_qty = $('#wholesale_qty').val();
                        var wh_qty;
                        if (parseInt($('#wholesale_min_qty').val(), 10)) {
                            wh_qty = parseInt(whole_qty, 10) - parseInt($('#wholesale_min_qty').val(), 10);
                            if (wh_qty <= 0) {
                                window.toastMessage('Quantity should be greater than minimum order quantity');
                            }
                            if (wh_qty < parseInt($('#wholesale_min_qty').val(), 10)) {
                                wh_qty = parseInt($('#wholesale_min_qty').val(), 10);
                            }
                        } else {
                            wh_qty = parseInt(whole_qty, 10) - parseInt($('#qty_step').val(), 10);
                        }
                        if (bulk_product == 1) {
                            var wh_qty2 = bd_info[0].min_qty;
                        } else {
                            var wh_qty2 = parseInt($("#wholesale_min_qty").val());
                        }
                        updateProductPrice(wh_qty);
                        if (wh_qty2 <= wh_qty) {
                            if (bulk_product == 1) {
                                for (var i = 0; i < bd_count; i++) {
                                    if (wh_qty >= bd_info[i].min_qty && wh_qty <= bd_info[i].max_qty || wh_qty >= bd_info[i].min_qty && bd_info[i].max_qty == '') {
                                        wprice = bd_info[i].price;
                                        sch = bd_info[i].shipping_charge;
                                    }
                                }
                            }
                            $("#wholesale_qty").val(wh_qty);
                            $("#quantityId").val(wh_qty);
                            var wh_price = (wprice * wh_qty).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            var wh_sc = (sch * wh_qty).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            var tvhtml = "<li id='total_value'>Total Order Value : <span>" + wh_price + "</span></li>";
                            var schtml = "<li id='total_sc'>Total Shipping Charge : <span>" + wh_sc + "</span></li>";
                            $("#total_value").html(tvhtml);
                            $("#total_sc").html(schtml);
                        } else {
                            window.toastMessage('Quantity should be greater than minimum order quantity');
                        }
                    });
                },
                bindRightArrow: function bindRightArrow() {
                    $(".right_arrow").on('click', function () {
                        var whole_qty = $('#wholesale_qty').val();
                        var wh_qty;
                        if (parseInt($('#wholesale_min_qty').val(), 10)) {
                            wh_qty = parseInt(whole_qty, 10) + parseInt($('#wholesale_min_qty').val(), 10);
                        } else {
                            wh_qty = parseInt(whole_qty, 10) + parseInt($('#qty_step').val(), 10);
                        }
                        if (document.getElementById('stk_left_wholesale')) {
                            var max_allowed_items = document.getElementById('stk_left_wholesale').getAttribute('label');
                            if (max_allowed_items) {
                                max_allowed_items = parseInt(max_allowed_items);
                                if (max_allowed_items) {
                                    if (wh_qty > max_allowed_items) {
                                        wh_qty = wh_qty - parseInt($('#wholesale_min_qty').val(), 10);
                                        window.toastMessage('This is the maximum allowed quantity for this product');
                                    }
                                }
                            }
                        }
                        $("#wholesale_qty").val(wh_qty);
                        $("#quantityId").val(wh_qty);
                        if (bulk_product == 1) {
                            for (var i = 0; i < bd_count; i++) {
                                if (wh_qty >= bd_info[i].min_qty && wh_qty <= bd_info[i].max_qty || wh_qty >= bd_info[i].min_qty && bd_info[i].max_qty == '') {
                                    wprice = bd_info[i].price;
                                    if (sch != 0) {
                                        sch = bd_info[i].shipping_charge;
                                    }
                                }
                            }
                        }
                        updateProductPrice(wh_qty);
                        var wh_price = (wprice * wh_qty).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        var wh_sc = (sch * wh_qty).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        var tvhtml = "<li id='total_value'>Total Order Value : <span>" + wh_price + "</span></li>";
                        var schtml = "<li id='total_sc'>Total Shipping Charge : <span>" + wh_sc + "</span></li>";
                        $("#total_value").html(tvhtml);
                        $("#total_sc").html(schtml);
                    });
                },
                bindBuyNow: function bindBuyNow() {
                    $('#buy').on('click', function (e) {
                        if (_validateBuy()) {
                            if (helperFunctions.ReadCookie("user_id") || helperFunctions.ReadCookie('scumd')) {
                                var userid = atob(helperFunctions.ReadCookie("user_id")) || atob(helperFunctions.ReadCookie('scumd'));
                                $('#form_user_id').val(userid);
                            }
                            //var visitorId = helperFunctions.ReadCookie('AMCV_20CC138653C6496B0A490D45%40AdobeOrg');
                            if (visitorId !== '' && visitorId !== null) {
                                //visitorId = visitorId.split('|')[4];
                                $('#form_visitor_id').val(visitorId);
                            }
                            var buttonid = $(this).attr('data-formid');
                            var form_id = '#buy_form_' + buttonid;
                            var formVars = $(form_id).serialize();
                            var url = base_url + 'atom/acart/expressCheckout';
                            $('#responseLoading').show();
                            $.ajax({
                                url: url,
                                type: 'POST',
                                data: formVars,
                                dataType: 'json',
                                success: function success(res) {
                                    if (res.status === 200) {
                                        try {
                                            if (typeof _satellite !== 'undefined') {
                                                //omString[5] = evar48+"|"+evar36;
                                                //window.digitalData.product = omString.join(';');
                                                _satellite.track('Add-cart-Buy-now');
                                            }
                                            var moe_Quantity = null;
                                            if (typeof res.response.products[0].quantity !== 'undefined') {
                                                var moe_Quantity = res.response.products[0].quantity;
                                            }
                                            moe_add_to_cart(moe_Quantity);
                                        } catch (e) {}
                                        window.location.href = secure_base_url + 'atom/acart/summary';
                                    } else {
                                        if (typeof _satellite !== 'undefined') {
                                            buynow = res.content;
                                            _satellite.track('Add-cart-Buy-now-fail');
                                        }
                                        $('.add_to_cart_error').html(res.content);
                                        $('.add_to_cart_error').show();
                                        $('.add_to_cart_error').css('display', 'block');
                                    }
                                },
                                error: function error(res) {
                                    $('.add_to_cart_error').html("Error try again !!");
                                    $('.add_to_cart_error').show();
                                    $('.add_to_cart_error').css('display', 'block');
                                },
                                complete: function complete() {
                                    $('#responseLoading').hide();
                                }
                            });
                            return false;
                        }
                    });
                },
                bindAddTocart: function bindAddTocart() {
                    $('#add_cart').on('click', function (e) {
                        if (_validateBuy()) {
                            //console.log('validated');
                            if (helperFunctions.ReadCookie("scumd") || helperFunctions.ReadCookie("user_id")) {
                                var userid = atob(helperFunctions.ReadCookie("user_id")) || atob(helperFunctions.ReadCookie('scumd'));
                                $('#form_user_id').val(userid);
                            }
                            //var visitorId = helperFunctions.ReadCookie('AMCV_20CC138653C6496B0A490D45%40AdobeOrg');
                            if (visitorId !== '' && visitorId !== null) {
                                //visitorId = visitorId.split('|')[4];
                                $('#form_visitor_id').val(visitorId);
                            }
                            $('#responseLoading').show();
                            var buttonid = $(this).attr('data-formid');
                            var form_id = '#buy_form_' + buttonid;
                            var formVars = $(form_id).serialize();
                            var url = base_url + 'atom/acart/getcart';
                            $.ajax({
                                url: url,
                                type: 'POST',
                                data: formVars,
                                dataType: 'json',
                                success: function success(res) {
                                    if (res.status === 200) {
                                        try {
                                            if (typeof _satellite !== 'undefined') {
                                                //addtocart = 'addtocart';
                                                //omString[5] = evar48+"|"+evar54;
                                                //window.digitalData.product = omString.join(';');
                                                //window.digitalData.omtrProduct = omString.join(';');
                                                _satellite.track('Add-cart-Buy-now');
                                            }
                                            var moe_Quantity = null;
                                            if (typeof res.prodStr[0].quantity !== 'undefined') {
                                                var moe_Quantity = res.prodStr[0].quantity;
                                            }
                                            moe_add_to_cart(moe_Quantity);
                                        } catch (e) {}
                                        atom_cart_load_data();
                                        window.toastMessage('Product added to cart');
                                    } else {
                                        window.toastMessage(res.content);
                                        if (typeof _satellite !== 'undefined') {
                                            addtocart = res.content;
                                            _satellite.track('Add-cart-Buy-now-fail');
                                        }
                                    }
                                },
                                error: function error(res) {
                                    window.toastMessage('Error try again !!');
                                },
                                complete: function complete() {
                                    $('#responseLoading').hide();
                                }
                            });
                            return false;
                        }
                    });
                },
                bindAddToWishlist: function bindAddToWishlist() {
                    $('#pdp_wishlist').on('click', function (e) {
                        if (typeof window.pId !== 'undefined' && (helperFunctions.ReadCookie("user_id") !== "" && helperFunctions.ReadCookie("user_id") !== undefined || helperFunctions.ReadCookie("scumd") !== "" && helperFunctions.ReadCookie("scumd") !== undefined)) {
                            if ($('.whishlist_ic').hasClass('added')) {
                                var amount = 0;
                            } else {
                                var amount = 1;
                            }
                            var elem = this;
                            var userid = atob(helperFunctions.ReadCookie("user_id")) || atob(helperFunctions.ReadCookie("scumd"));
                            //var visitorId = helperFunctions.ReadCookie('AMCV_20CC138653C6496B0A490D45%40AdobeOrg');
                            url = base_url + "ajaxCall/addToWishlist/" + window.pId + "/" + userid + "/" + amount;
                            if (visitorId !== '' && visitorId !== null) {
                                //visitorId = visitorId.split('|')[4];
                                url = base_url + "ajaxCall/addToWishlist/" + window.pId + "/" + userid + "/" + amount + "/" + visitorId;
                            }
                            microAjax(url, function (res) {
                                if (res == 200) {
                                    if (typeof _satellite !== 'undefined') {
                                        try {
                                            //omString[5]=evar48+"|"+evar36;
                                            //window.digitalData.product = omString.join(';');
                                            window.digitalData.omtrProduct = omString.join(';');
                                        } catch (e) {}
                                    }
                                    $(elem).toggleClass('added animated bounceIn');
                                    toastMessage('Product added to wishlist');
                                }
                            });
                            //window.location.href =""; //loginPage
                        } else {
                            if (typeof window.pId !== 'undefined') {
                                var current_url = encodeURIComponent("index.php?dispatch=products.view&product_id=" + window.pId);
                                window.location.href = secure_base_url + "?dispatch=auth.login_form&return_url=" + current_url;
                                if (typeof localforage !== 'undefined') {
                                    localforage.setItem('wishlist_' + window.pId, 1);
                                }
                            }
                        }
                    });
                },
                // bindScroll : function(){
                //     $('#moreReview').unbind('click').click(function(event) {
                //         if(typeof window.showRev !== 'undefined' && window.showRev == 1 && pdp_setup.hideReview == 0 && typeof window.pId !== 'undefined'){
                //             //window.pId = 96988385;
                //             var url = base_url+'home/reviewDetail/'+window.pId+'/'+window.page;
                //             microAjax(url,function(res){
                //                 if(res !== ''){
                //                     window.page +=1;
                //                     if(document.getElementById('pdp_rnr') === null && pdp_setup.hideReview == 0){
                //                         $(".rnr_lists ul").append(res);
                //                         var pstars =  Math.round(window.stars);
                //                         var ostars = window.avg_rat / 5 * 284;
                //                         $(".c_fill").css( "stroke-dasharray",   ostars + "," + "284"  );
                //                     }
                //                     if (window.page>=window.tp) {
                //                         window.showRev=0;
                //                         $("#moreReview").css("display", "none");
                //                     }
                //                 }
                //             });
                //         }
                //     });
                // },
                bindReviewClick: function bindReviewClick() {
                    $('.container').on('click', 'a.usefull', function (e) {
                        try {
                            var id = e.currentTarget.getAttribute('data-id');
                            var call_type = e.currentTarget.getAttribute('data-usefull');

                            $.ajax({
                                type: 'GET',
                                data: { 'id': id, 'call_type': call_type },
                                url: base_url + 'ajaxCall/usefulReviews',
                                success: function success(res) {
                                    if (res == 'success') {
                                        e.currentTarget.classList.add('active');
                                        toastMessage('Thanks for your feedback');
                                        e.currentTarget.parentElement.style.display = 'none';
                                    } else {
                                        toastMessage('Error,Please Try Again');
                                    }
                                },
                                error: function error(res) {
                                    toastMessage('Error,Please Try Again');
                                }
                            });
                        } catch (e) {}
                    });
                },
                bindEmiInfo: function bindEmiInfo() {
                    try {
                        $('.sc_tc').on('click', function () {
                            $('.sc_offer').show();
                            $('.sc_offer').parents('#common_overlay').fadeIn(300);
                        });

                        $('#common_popupModel .close').on('click', function () {
                            //$('.sc_offer').show();
                            //$('.sc_offer').hide();
                            $('#common_popupModel > div').hide();
                            $(this).parents('#common_overlay').fadeOut(100);
                            $('body').css('position', 'relative');
                        });

                        $('.prd_mid_info').on('click', 'i.info', function () {
                            //$('.sc_emi').parent().fadeIn(1000);
                            $('#common_overlay').fadeIn(500);
                            $('#common_popupModel').show();
                            $('.sc_emi').show();
                            $('body').css('position', 'fixed');
                        });
                        // $('#common_overlay').on('click',function(){
                        //     $('#common_overlay, .popupInner').fadeOut(1000);
                        //     $('body').css('position', 'relative');
                        // });
                        $('.sc_emi').on('click', 'a.close', function () {
                            $('#common_overlay, .popupInner').fadeOut(1000);
                            $('body').css('position', 'relative');
                            $('.sc_emi').hide();
                        });
                        $('.sc_offer').on('click', 'a.close', function () {
                            $('#common_overlay, .popupInner').fadeOut(1000);
                            $('body').css('position', 'relative');
                        });
                        $('.sc_emi').on('click', 'ul li span', function () {
                            $(this).next('table').slideToggle();
                            $(this).toggleClass('active');
                            if (pdp_setup.prevEMI !== $(this)) {
                                $(pdp_setup.prevEMI).next('table').slideToggle();
                                $(pdp_setup.prevEMI).toggleClass('active');
                                pdp_setup.prevEMI = $(this);
                            }
                        });
                        $('.v_offer').on('click', function () {
                            $(this).parent().parent().fadeOut(50);
                            if (offr_list != '') {
                                $('#promo_offr').prepend("<li>" + offr_list + "</li>");
                                $('#promo_offr').show();
                            }
                            $(this).parent().parent().next().fadeIn(1000);
                        });
                        $('.sc_tc').click(function () {
                            $('.sc_offer').parent().fadeIn(1000);
                            $('#common_overlay').fadeIn(500);
                            $('.sc_offer p').html(tnc[$(this)[0].id]);
                            var divHeight = $('.sc_offer').height();
                            var addValue = 40;
                            var sum = divHeight + addValue;
                            //alert(sum);
                            $('.sc_offer').parent('.popupInner').css('height', sum + 'px');
                            $('body').css('position', 'fixed');
                        });
                    } catch (e) {}
                },
                bindSeller: function bindSeller() {
                    try {
                        $('.sllr_info').on('click', 'a.other_sellers', function () {
                            //$('#main_data').hide();
                            $('.container .wrapper').first().hide();
                            $('#msp_data').show();
                            pdp_setup.hideReview = 1;
                        });
                        $('#msp_data').on('click', 'a.close', function () {
                            //$('#main_data').hide();
                            $('#msp_data').hide();
                            $('.container .wrapper').first().show();
                            pdp_setup.hideReview = 0;
                        });
                    } catch (e) {}
                },
                bindSizeChrt: function bindSizeChrt() {
                    try {
                        $('.f_variation').on('click', 'a.sc_chart', function () {
                            $('#common_overlay').fadeIn(500);
                            $('.sc_sizeChart').parent().show();
                            $('.sc_sizeChart').fadeIn(1000);
                            $('body').css('position', 'fixed');
                        });
                    } catch (e) {}
                },
                bindSellerBuy: function bindSellerBuy() {
                    try {
                        $('body').on('click', 'a.sc_addToCart', function (e) {
                            //digitalData.cart_data.push(new_product_id);
                            var form_id = '#buy_form_' + e.currentTarget.getAttribute('data-id');
                            var formVars = $(form_id).serialize();
                            var url = base_url + 'atom/acart/getcart';
                            console.log(formVars);
                            $.ajax({
                                url: url,
                                type: 'POST',
                                data: formVars,
                                dataType: 'json',
                                success: function success(res) {
                                    if (res.status === 200) {
                                        window.toastMessage('Product added to cart');
                                        atom_cart_load_data();
                                        if (setOmniture) {
                                            omni_child = omniture_child_value;
                                            _satellite.track('Add-cart-Buy-now');
                                        }
                                    } else {
                                        window.toastMessage(res.message);
                                    }
                                },
                                error: function error(res) {
                                    window.toastMessage('Error try again !!');
                                }
                            });
                        });
                    } catch (e) {}
                },

                checkShipping: function checkShipping() {
                    $('#check_shipping').on("click", function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var itemId = e.currentTarget.getAttribute('data-itemId');
                        $('#check_shipping').attr('disabled', true);
                        var pincode = '';
                        var user_id = '';
                        var user_email = '';
                        var user_segment = '';
                        var final_price_value = '';
                        var user_mobile = '';

                        if (helperFunctions.ReadCookie('phone') != "") {
                            user_mobile = helperFunctions.ReadCookie('phone');
                        }
                        if (helperFunctions.ReadCookie('scumd') != "") {
                            user_id = helperFunctions.ReadCookie('scumd');
                        }
                        if (helperFunctions.ReadCookie('scun') != "") {
                            user_email = helperFunctions.ReadCookie('scun');
                        }
                        if (helperFunctions.ReadCookie('user_segment') != "") {
                            user_segment = helperFunctions.ReadCookie('user_segment');
                        }
                        if ($('#zip').length > 0 && $('#zip').val() != '') {
                            pincode = $('#zip').val();
                        } else if (typeof helperFunctions.ReadCookie('pincode') != 'undefined' && helperFunctions.ReadCookie('pincode') != '' && pincode == '') {
                            pincode = helperFunctions.ReadCookie('pincode');
                        }

                        if (typeof thirdPrice !== 'undefined' && thirdPrice !== 0) {
                            final_price_value = thirdPrice;
                        } else if (typeof price !== 'undefined' && price !== 0) {
                            final_price_value = price;
                        } else if (typeof listPrice !== 'undefined' && listPrice !== 0) {
                            final_price_value = listPrice;
                        }

                        if (/^\d+$/.test(pincode) && pincode.length == 6) {
                            $('#responseLoading').show();
                            var url = base_url + 'ajaxCall/getDeliveryDetails?itemId=' + itemId + '&pincode=' + pincode + '&user_segment=' + user_segment + '&user_id=' + user_id + '&user_email=' + user_email + '&price_tbp=' + final_price_value + '&user_mobile=' + user_mobile;
                            microAjax(url, function (res) {
                                if (res.trim() != '') {
                                    if (pincode != $('#cPin').html()) {
                                        $('#cPin').html(pincode);
                                    }
                                    if (typeof _satellite !== 'undefined') {
                                        //omString[5]=evar48+"|"+evar36;
                                        //window.digitalData.product = omString.join(';');
                                        //window.digitalData.omtrProduct = omString.join(';');
                                    }
                                    var data = JSON.parse(res);
                                    if (typeof data.pin_result != 'undefined') {
                                        var deliveryDate;
                                        if (typeof data.fdate !== 'undefined' && typeof data.sdate !== 'undefined') {
                                            deliveryDate = "Delivery: " + data.fdate + " - " + data.sdate;
                                        } else {
                                            deliveryDate = "Delivery in 7-9 Business days";
                                        }
                                        document.getElementById("toggleMe").style.display = "block";
                                        document.getElementById('pd_pin').style.display = "none";
                                        $('#delDetails').hide();
                                        //SetCookie('pincode', pincode, 730, cookieDomain);
                                        if (!helperFunctions.ReadCookie('sc_loc_pincode') || helperFunctions.ReadCookie('sc_loc_pincode') != pincode) {
                                            var url = base_url + 'setUserzone';
                                            var postdata = { 'pincode': pincode, 'target': 'pincode_form', 'local': 'pincode' };
                                            ajax_request(url, 'post', save_loc_cookie, 'MANUAL', postdata);
                                        }
                                        if (parseInt(data.pin_result) == 0) {
                                            document.getElementById('toggleMe').style.display == "block";
                                            document.getElementById('toggleMe').className = 'check_delivery unavailable';
                                            document.getElementById("toggleMe").innerHTML = "<p class='check_pincode'><span>Item is unavailable at " + pincode + "<a onclick='pdDetail_public.toggle();'> change </a></span></p>";
                                            var newdel = "<ul id='newdelDetails'><li id='notcod'>COD Not Available.</li>" + "<li id='notcod'> Delivery Not Available </li>";
                                            $("#newdelDetails").remove();
                                            $('.status_i').append(newdel);
                                        } else if (parseInt(data.pin_result) == 1) {
                                            document.getElementById('toggleMe').style.display == "block";
                                            document.getElementById('toggleMe').className = 'check_delivery available';
                                            document.getElementById("toggleMe").innerHTML = "<p class='form'>Shipment not required for this item " + pincode + "<a onclick='pdDetail_publc.togge();'> Change </a></p>";
                                        } else if (parseInt(data.pin_result) == 2) {
                                            document.getElementById('toggleMe').style.display == "block";
                                            document.getElementById('toggleMe').className = 'check_delivery unavailable';
                                            document.getElementById("toggleMe").innerHTML = "<p class='form'>The PIN code " + pincode + " is invalid" + "<a onclick='pdDetail_publc.togge();'> Change </a></p>";
                                        } else if (parseInt(data.pin_result) == 3) {
                                            document.getElementById('toggleMe').style.display == "block";
                                            document.getElementById('toggleMe').className = 'check_delivery available';
                                            document.getElementById("toggleMe").innerHTML = "<p class='form'>Item is available at <span>" + pincode + "</span><a onclick='pdDetail_public.toggle();'>Change</a></p>";
                                            if (typeof data.is_cod !== 'undefined' && parseInt(data.is_cod) == 1) {
                                                var newdel = "<ul id='newdelDetails'><li id='chkCharge'>" + document.getElementById('shippingcharge').innerHTML + "</li><li>COD Available</li>" + "<li id='servicable'>" + deliveryDate + "</li></ul>";
                                            } else {
                                                var newdel = "<ul id='newdelDetails'><li id='chkCharge'>" + document.getElementById('shippingcharge').innerHTML + "</li><li id='notcod'>COD Not Available</li>" + "<li id='servicable'>" + deliveryDate + "</li></ul>";
                                            }

                                            $("#newdelDetails").remove();
                                            $('.status_i').append(newdel);
                                        } else if (parseInt(data.pin_result) == 4) {
                                            document.getElementById('toggleMe').style.display == "block";
                                            document.getElementById('toggleMe').className = 'check_delivery available';
                                            document.getElementById("toggleMe").innerHTML = "<p class='form'>Item is available at <span>" + pincode + "</span><a onclick='pdDetail_public.toggle();'>Change</a></p>";
                                            var newdel = "<ul id='newdelDetails'><li id='chkCharge'>" + document.getElementById('shippingcharge').innerHTML + "</li><li>Only Prepaid available on this PIN code. </li>" + "<li id='servicable'>" + deliveryDate + "</li></ul>";
                                            $("#newdelDetails").remove();
                                            $('.status_i').append(newdel);
                                        } else {
                                            document.getElementById('toggleMe').style.display == "block";
                                            document.getElementById("toggleMe").innerHTML = "The PIN code " + pincode + " is invalid" + "<div onclick='pdDetail_public.toggle();'>change </div>";
                                        }
                                    }
                                }
                                $('#check_shipping').attr('disabled', false);
                                pdDetail_public.checkShippingCharges();
                            });
                        } else {
                            $('#check_shipping').attr('disabled', false);
                            zip_value = $('#zip').val();
                            var bRed = document.getElementById('zip');
                            //bRed.style.borderBottom = "red solid 1px";
                            bRed.style.color = "red";
                            if (zip_value == "") {
                                bRed.value = "Please enter pincode";
                            } else {
                                bRed.value = "Invalid pincode";
                            }
                            setTimeout(function () {
                                bRed.style.border = "";
                                bRed.style.color = "";
                                bRed.value = "";
                            }, 2000);
                            return false;
                        }
                        $('#responseLoading').hide();
                    });
                },
                updateOption: function updateOption() {
                    window.fprice = parseInt($('.f_price').attr('data-attr'));
                    $('.f_variation span.variant').on('click', function (e) {
                        if ($(pdp_setup.prevSel).attr('id') === $(e.currentTarget).attr('id')) {
                            return false;
                        }
                        $('#buy').attr('disabled', true);
                        $('#add_cart').attr('disabled', true);
                        $('#responseLoading').show();
                        var quantity;
                        var current = '';
                        var options = '';
                        var options_display = '';
                        var clarr = {};
                        var szarr = {};
                        var variantId = $(e.currentTarget).attr('id');
                        var optionId = $(e.currentTarget).parents().attr('id');
                        if (typeof window.is_wholesale !== 'undefined' && window.is_wholesale == 1) {
                            quantity = $('#quantityId').val();
                        } else {
                            quantity = 1;
                        }
                        if (typeof sName != 'undefined') {
                            var length = sName.length;
                            current = e.currentTarget;
                            var selectedOption = '';
                            var fireCheckInventory = true;
                            for (i = 0; i < length; i++) {
                                var scSzSel = '';
                                var name = sName[i].name;
                                var formId = name + 'Id';
                                var formDisplay = name + 'Name';
                                var nameId = $(current).attr('id');
                                var nameDisplay = $(current).attr('value');
                                if (nameId != 0) {
                                    if (i > 0 && i < length) {
                                        options += ',';
                                        options_display += '';
                                    }
                                    if (name == $(current).parents().attr('scName')) {
                                        //$('#'+formId).val(nameId);
                                        document.getElementById(formId).value = nameId;
                                        selectedOption = $(current).attr('value');
                                        sName[i].option_sel = $(current).attr('id');
                                        var updatedhtml = name + ': ' + "<span>" + selectedOption + "</span>";
                                        $('#' + optionId).children().children('p').html(updatedhtml);
                                        siblingId = sName[i].option_sel;
                                        if ($("#" + siblingId).siblings('.variant').hasClass("disabled")) {
                                            $("#" + siblingId).siblings('.variant').removeClass("disabled");
                                        }
                                        $(current).addClass('selected').siblings().removeClass('selected');
                                        pdp_setup.prevSel = $(current);
                                    } else {
                                        spanId = sName[i].id;
                                        if ($("#" + spanId).children('.variant').hasClass("disabled")) {
                                            $("#" + spanId).children('.variant').removeClass("disabled");
                                        }
                                        if ($("#" + spanId).siblings('.variant').hasClass("selected")) {
                                            $("#" + spanId).siblings('.variant').removeClass("selected");
                                        }
                                    }
                                    if (typeof sName[i].option_sel !== 'undefined' && sName[i].option_sel != '') {
                                        scSzSel = sName[i].option_sel;
                                    } else {
                                        scSzSel = '';
                                        fireCheckInventory = false;
                                    }
                                    options += sName[i].id + ':' + scSzSel;
                                    if (scSzSel.trim() != '') {
                                        options_display += sName[i].name + ':' + $(current).attr('value');
                                    }
                                    //$('#'+formDisplay).val(options_display);
                                    document.getElementById(formDisplay).value = options_display;
                                } else if (nameId == 0) {
                                    $('#buy').attr('disabled', false);
                                    return false;
                                }
                            }
                        }
                        if (typeof variantId !== 'undefined' && typeof optionId !== 'undefined' && variantId !== '' && optionId !== '') {
                            var variantcheck = 0;
                            if (sessionStorage.getItem(optionId + '_' + variantId) == null) {
                                $.ajax({
                                    type: 'GET',
                                    data: { 'pid': masterPid, 'optid': optionId, 'varid': variantId },
                                    url: base_url + 'ajaxCall/variant',
                                    success: function success(res) {
                                        response = JSON.parse(res);
                                        if (response.status === 1) {
                                            if (typeof response.data.linked_option_variant_data != 'undefined' && response.data.linked_option_variant_data != null) {
                                                variantcheck = 1;
                                            }
                                            if (variantcheck == 1) {
                                                if (sessionStorage.getItem(spanId + '&' + siblingId) == null) {
                                                    sessionStorage.setItem(spanId + '&' + siblingId, JSON.stringify(response));
                                                    variantcombo(response);
                                                } else variantcombo(JSON.parse(sessionStorage.getItem(spanId + '&' + siblingId)));
                                            }
                                            sessionStorage.setItem(optionId + '_' + variantId, JSON.stringify(response));
                                            colorVariant(response);
                                        } else {
                                            return false;
                                        }
                                    },
                                    error: function error(jqXHR, textStatus) {
                                        if (textStatus === 'timeout' || textStatus === 'error') {}
                                    }
                                });
                            } else {
                                if (spanId != '' && siblingId != '') {
                                    if (sessionStorage.getItem(spanId + '&' + siblingId) == null) {
                                        var response = JSON.parse(sessionStorage.getItem(optionId + '_' + variantId));
                                        sessionStorage.setItem(spanId + '&' + siblingId, JSON.stringify(response));
                                        variantcombo(response);
                                    } else {
                                        variantcombo(JSON.parse(sessionStorage.getItem(spanId + '&' + siblingId)));
                                    }
                                }
                                colorVariant(JSON.parse(sessionStorage.getItem(optionId + '_' + variantId)));
                            }
                            $('#responseLoading').hide();
                            $('#buy').attr('disabled', false);
                            $('#add_cart').attr('disabled', false);
                        }
                        // if (fireCheckInventory) {
                        //     if (options != '') {
                        //         var data = {'id':masterPid,'quantity':quantity,'options':encodeURIComponent(options),'var':null};
                        //     } else {
                        //         var data = {'id':masterPid,'quantity':quantity,'options':null,'var':null};
                        //     }
                        //     $.ajax({
                        //         type : 'GET',
                        //         data : data,
                        //         url : base_url + 'ajaxCall/checkInventory/',
                        //         success : function(res) {
                        //             if (res !== '') {
                        //                 var data = JSON.parse(res);
                        //                 if (data.msg !== undefined && data.msg !== 'Y') {
                        //                     var message = data.msg;
                        //                     //document.getElementById('error').innerHTML = message;
                        //                 } else if (data.msg !== undefined && data.msg == 'Y') {
                        //                     $('#buy').attr('disabled',false);
                        //                     $('#add_cart').attr('disabled',false);
                        //                     if($(pdp_setup.prevSel).parents().attr('scName') == $(current).parents().attr('scName')){
                        //                         $(pdp_setup.prevSel).removeClass('selected');
                        //                     }
                        //                     $(current).addClass('selected').siblings().removeClass('selected');
                        //                     pdp_setup.prevSel = $(current);
                        //                 }
                        //             }
                        //             $('#responseLoading').hide();
                        //         },
                        //         error : function(jqXHR, textStatus) {

                        //         }
                        //     });
                        // }else{
                        //     if(!fireCheckInventory){
                        //         $('#responseLoading').hide();
                        //         $('#buy').attr('disabled',false);
                        //         $('#add_cart').attr('disabled',false);
                        //         $(pdp_setup.prevSel).removeClass('selected');
                        //         $(current).addClass('selected');
                        //         pdp_setup.prevSel = $(current);
                        //     }
                        // }
                    });
                }
            };
            function updateProductPrice(quantity) {
                if (typeof wholesale_price_array !== 'undefined' && wholesale_price_array !== null) {
                    var array_keys = Object.keys(wholesale_price_array);
                    var price = parseInt($('.f_price').attr('data-attr'));
                    for (var i = 0; i < array_keys.length; i++) {
                        price = parseInt(wholesale_price_array[array_keys[i]]);
                        if (parseInt(quantity) >= array_keys[i]) {
                            price = parseInt(wholesale_price_array[parseInt(array_keys[i])]);
                            if (document.getElementsByClassName('f_price')[0]) {
                                document.getElementsByClassName('f_price')[0].setAttribute('data-attr', price);
                                document.getElementsByClassName('f_price')[0].setAttribute('content', price);
                                document.getElementsByClassName('f_price')[0].innerHTML = 'Rs.' + price + '/Pc';
                            }
                        }
                    }
                }
            }

            function _validateBuy() {
                var fireSubmit = true;
                if (typeof window.sName != 'undefined') {
                    var sName = window.sName;
                    var length = sName.length;
                    var txt = 'Please select the ';
                    for (i = 0; i < length; i++) {
                        var name = sName[i].name;
                        var formId = name + 'Id';
                        if (document.getElementById(formId).value == '') {
                            $('[scszname="' + sName[i].name + '"]').find('a').addClass('error');
                            txt += sName[i].name + ',';
                            fireSubmit = false;
                        } else {
                            $('[scszname="' + sName[i].name + '"]').find('a').removeClass('error');
                        }
                    }
                    if (!fireSubmit) {
                        toastMessage(txt.substring(0, txt.length - 1));
                    }
                }
                return fireSubmit;
            }
            function handleErrors(response) {
                if (response.status !== 200) {
                    throw Error('Sorry the request could not be completed!');
                }
                return response;
            }

            function getMSPData() {
                if (typeof window.mspData !== 'undefined' && window.mspData == 1) {
                    try {
                        var temp_sc_loc = '';
                        temp_sc_loc = helperFunctions.ReadCookie('sc_loc');
                        if (temp_sc_loc !== '') {
                            temp_sc_loc = '/' + helperFunctions.ReadCookie('sc_loc');
                        } else {
                            temp_sc_loc = '/0000';
                        }
                        var data = '';
                        fetch(base_url + 'home/msp/' + window.masterPid + temp_sc_loc, {
                            method: 'get'
                            // credentials: 'include'
                        }).then(handleErrors).then(function (response) {
                            return response.text();
                        }).then(function (text) {
                            if (text !== '') {
                                $('#msp_data').html(text);
                                if (window.sellerCnt - 1 > 1) {
                                    data = 'Available with ' + (window.sellerCnt - 1) + " other Sellers";
                                } else if (window.sellerCnt - 1 == 1) {
                                    data = 'Available with ' + (window.sellerCnt - 1) + " other Seller";
                                }
                                if (window.sellerCnt - 1 >= 1) {
                                    $('.other_sellers').html(data);
                                    $("#sc_slImg").attr("src", $('#slrImg').attr('data-src'));
                                    $('.other_sellers').show();
                                }
                            }
                        }).catch(function (error) {
                            console.log(error);
                        });
                    } catch (e) {}
                }
            }
            function getEmiData() {
                if (typeof window.pId !== 'undefined' && typeof window.cartTotal !== 'undefined' && window.cartTotal > 0) {
                    try {
                        var url = base_url + 'home/emiData/' + window.pId + '/' + cartTotal;
                        microAjax(url, function (res) {
                            if (res !== '') {
                                $('.sc_emi').html(res);
                                var emiText = 'Emi starts at ' + minEmi + $('#min_emi').html();
                                $('#min_emi').html(emiText);
                                $('#min_emi').parent().show();
                            }
                        });
                    } catch (e) {}
                }
            }
            /*  function getAlsoViewed(){
             if(typeof window.pId !== 'undefined' && typeof window.also_viewed !== 'undefined' && window.also_viewed == 1){
             try{
             var lc = parseInt(visitorId.charAt(visitorId.length - 1));
             if(isNaN(lc))
             var expNum = 10;
             else {
             var expNum = ((lc%3)+1);
             }
             if(typeof expNum !== 'undefined' && typeof avflag !== 'undefined' && _satellite !== 'undefined'){
             avflag = expNum;
             _satellite.track('avflag');
             }
             var url = base_url+'home/alsoViewedProduct/'+window.pId+'/'+expNum;
             microAjax(url,function(res){
             if(res !== ''){
             $("#main_data").after(res);
             echo(window,document);
             $("#us_").slick({
             dots: false,
             infinite: false,
             slidesToShow: 5,
             slidesToScroll: 1
             });
             }
             });
             }catch(e){}
             }
             }   */
            function bestsellers() {
                var url = base_url + 'ajaxCall/bestsellers';
                var lp = 0;
                var up = 1000000;
                if (typeof thirdPrice !== 'undefined' && thirdPrice !== 0) {
                    lp = thirdPrice / 2;
                    up = thirdPrice * 2;
                } else if (typeof listPrice !== 'undefined' && listPrice !== 0) {
                    lp = listPrice / 2;
                    up = listPrice * 2;
                } else if (typeof price !== 'undefined' && price !== 0) {
                    lp = price / 2;
                    up = price * 2;
                }
                fetch(base_url + 'ajaxCall/bestsellers/' + l_id + '/' + lp + '/' + up, {
                    method: 'get'
                }).then(handleErrors).then(function (response) {
                    return response.text();
                }).then(function (text) {
                    if (text !== '') {
                        $("#main_data").after(text);
                        echo(window, document);
                        $("#oos_").slick({
                            dots: false,
                            infinite: false,
                            slidesToShow: 5,
                            slidesToScroll: 1
                        });
                    }
                }).catch(function (error) {
                    console.log(error);
                });
                // var data = {'pid': l_id, 'lp': lp, 'up': up, 'ur': 0, 'cat_type': 1};
                // $.ajax({
                //     url: url,
                //     type: 'GET',
                //     data: data,
                //     success: function(res){
                //         if(res !== ''){
                //                     $("#main_data").after(res);
                //                     echo(window,document);
                //                     $("#oos_").slick({
                //                         dots: false,
                //                         infinite: false,
                //                         slidesToShow: 5,
                //                         slidesToScroll: 1
                //                     });
                //                 }
                //     }
                // });
            }
            function getSizeChart() {
                if (typeof window.pId !== 'undefined') {
                    var url = base_url + 'ajaxCall/getSizeChart/' + window.pId;
                    $.ajax({
                        type: 'GET',
                        url: url,
                        success: function success(resp) {
                            resp = JSON.parse(resp);
                            if (resp.data && resp.status == 1) {
                                $('#sc_img').attr('src', resp.data.image_path);
                                var table = '';
                                var style = '';
                                $.each(resp.data.table_data, function (key, val) {
                                    table += '<tr>';
                                    if (key == 0) {
                                        var width = 100 / val.length;
                                        style = 'style="width: ' + width + '%"';
                                        $.each(val, function (k, v) {
                                            table += '<th ' + style + ' >' + v + '</th>';
                                        });
                                    } else {
                                        $.each(val, function (k, v) {
                                            table += '<td>' + v + '</td>';
                                        });
                                    }
                                    table += '</tr>';
                                });
                                $('#table_data').html(table);
                            }
                        }
                    });
                }
            }
            function fireviewed() {
                if (window.localStorage && typeof window.enable_buy_now !== 'undefined' && window.enable_buy_now == 1) {
                    var pdPrice = 0;
                    var list_price = 0;
                    var third_price = 0;
                    var Id = 0;
                    var show_badge = 'N';
                    if (typeof masterPid != 'undefined') {
                        Id = masterPid;
                    } else if (typeof window.pId !== 'undefined') {
                        Id = pId;
                    } else {
                        return false;
                    }
                    if (typeof window.show_surety_badge !== 'undefined' && window.show_surety_badge == 1) {
                        show_badge = 'Y';
                    }
                    if (typeof price != 'undefined') {
                        pdPrice = price;
                    }
                    if (typeof listPrice != 'undefined') {
                        list_price = listPrice;
                    }
                    if (typeof thirdPrice != 'undefined') {
                        third_price = thirdPrice;
                    }
                    if (third_price != 0) {
                        var f_price = third_price;
                    } else if (third_price == 0) {
                        var f_price = pdPrice;
                    } else if (price == 0) {
                        var f_price = list_price;
                    }
                    try {
                        window.recentlyViewed.setItem({ 'id': Id, 'url': document.URL.split('?')[0], 'name': $('.prd_mid_info h1').text().trim(), 'imageSrc': $('#slrImg').attr('data-src'), 'mrp': list_price, 'sellingPrice': f_price, 'Surety_Badge': show_badge });
                        if (is_mfc == 1) {
                            window.recentMFCViewed.setItem(window.pId);
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
            window.pdDetail_public = function () {
                return {
                    togglecbcheckbox: function togglecbcheckbox(event) {
                        event.classList.toggle('cb_check');
                        if (event.classList.contains('cb_check')) {
                            price_cut = 1;
                            var newprice = window.fprice - applicablecb;
                            var usedcb = window.fprice < applicablecb ? window.fPrice : applicablecb;
                            if (newprice < 0) newprice = 0;
                            var pricehtml = 'Rs.' + newprice;
                            document.getElementsByClassName('f_price')[0].innerHTML = pricehtml;
                            var newdisc = parseInt(document.getElementsByClassName('discount')[0].getAttribute('data-attr')) + applicablecbpercent;
                            if (newdisc > 100) newdisc = 100;
                            document.getElementsByClassName('discount')[0].innerHTML = newdisc + '% off';
                            document.getElementById('used_cb').innerHTML = usedcb + ' Used';
                            $('#snackbar').addClass('cb_toastmsg');
                            window.toastMessage('This is only indicative price.The final discounted price will be visible during checkout based on total order amount and available CB/CB+.');
                        } else {
                            price_cut = 2;
                            var newprice = window.fprice;
                            var pricehtml = 'Rs.' + newprice;
                            document.getElementsByClassName('f_price')[0].innerHTML = pricehtml;
                            var newdisc = parseInt(document.getElementsByClassName('discount')[0].getAttribute('data-attr'));
                            document.getElementsByClassName('discount')[0].innerHTML = newdisc + '% off';
                            document.getElementById('used_cb').innerHTML = 'Use ' + applicablecb;
                        }
                    },
                    gaDetail: function gaDetail() {
                        // code
                        if (typeof ga != 'undefined' && ga != null) {
                            if (typeof seo_name != 'undefined' && typeof type != 'undefined') {
                                ga('send', 'event', type, 'click', seo_name);
                            }
                        }
                    },
                    checkShippingCharges: function checkShippingCharges() {
                        if (typeof window.pId !== 'undefined') {
                            var pid = window.pId;
                            var loc = helperFunctions.ReadCookie('sc_loc');
                            var user_id = '';
                            var user_email = '';
                            var user_segment = '';
                            var pincode = '';
                            if (helperFunctions.ReadCookie('user_segment') != "") {
                                user_segment = helperFunctions.ReadCookie('user_segment');
                            }
                            if (helperFunctions.ReadCookie('scumd') != "") {
                                user_id = helperFunctions.ReadCookie('scumd');
                            }
                            if (helperFunctions.ReadCookie('scun') != "") {
                                user_email = helperFunctions.ReadCookie('scun');
                            }
                            if (loc === '') {
                                loc = '0000';
                            }
                            var qty = $('#quantityId').val();
                            if ($('#zip').length > 0 && $('#zip').val() != '') {
                                pincode = $('#zip').val();
                            } else if (typeof helperFunctions.ReadCookie('pincode') != 'undefined' && helperFunctions.ReadCookie('pincode') != '' && pincode == '') {
                                pincode = helperFunctions.ReadCookie('pincode');
                            }
                            if (qty < 1) {
                                qty = 1;
                            }
                            var url = base_url + 'ajaxCall/getShippingCharges?pid=' + pid + '&loc=' + loc + '&qty=' + qty + '&pincode=' + pincode + '&user_segment=' + user_segment + '&user_id=' + user_id + '&user_email=' + user_email;
                            microAjax(url, function (res) {
                                try {
                                    if (res && res != '') {
                                        var data = JSON.parse(res);
                                        if (data.per_product_shipping_amt < 1) {
                                            sch = 0;
                                            if (wholesale_product == 1) {
                                                var wh_sc = (sch * qty).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                                var schtml = "<li id='total_sc'>Total Shipping Charge : <span>" + wh_sc + "</span></li>";
                                                $("#total_sc").html(schtml);
                                            }
                                            document.getElementById('shippingcharge').innerHTML = 'Free Shipping';
                                        } else {
                                            sch = data.per_product_shipping_amt;
                                            var wh_sc = (sch * qty).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                            var schtml = "<li id='total_sc'>Total Shipping Charge : <span>" + wh_sc + "</span></li>";
                                            if (document.getElementById('shippingcharge').innerHTML == 'Free Shipping') {
                                                if (wholesale_product == 1) {
                                                    document.getElementById('shippingcharge').innerHTML = 'Shipping Charges: Rs. <span id="shipcharge">' + data.per_product_shipping_amt + '/Pc</span>';
                                                    $("#total_sc").html(schtml);
                                                } else {
                                                    document.getElementById('shippingcharge').innerHTML = 'Shipping Charges: Rs. <span id="shipcharge">' + data.per_product_shipping_amt + '</span>';
                                                }
                                            } else {
                                                if (wholesale_product == 1) {
                                                    document.getElementById('shipcharge').innerHTML = 'Rs ' + data.per_product_shipping_amt + '/Pc';
                                                    $("#total_sc").html(schtml);
                                                } else {
                                                    document.getElementById('shipcharge').innerHTML = 'Rs ' + data.per_product_shipping_amt;
                                                }
                                            }
                                        }
                                        try {
                                            evar54 = 'eVar54=';
                                            evar54 += data.shipping_delta_type + '::';
                                            if (data.change_in_shipping == -1) {
                                                evar54 += 'Decrease at PDP::';
                                            } else if (data.change_in_shipping == 0) {
                                                evar54 += 'No Change at PDP::';
                                            } else if (data.change_in_shipping == 1) {
                                                evar54 += 'Increase at PDP::';
                                            }
                                            evar54 += data.shipping_delta_amount;
                                            //evar54 = omString[5];
                                            //omString[5] = mspString + '|' + omString[5];
                                            //digitalData.omtrProduct = omString.join(';');
                                            //digitalData.product = omString.join(';');
                                        } catch (e) {}
                                    }
                                    $('#chkCharge').html($('#shippingcharge').html());
                                } catch (e) {}
                            });
                        }
                    },
                    chkCod: function chkCod() {
                        if (document.getElementById("iscod")) {
                            document.getElementById("iscod").style.visibility = "visible";
                        } else if (document.getElementById("notcod")) {
                            document.getElementById("notcod").style.visibility = "visible";
                        }
                    },
                    toggle: function toggle() {
                        var ele = document.getElementById("pd_pin");
                        if (ele.style.display == "none") {
                            ele.style.display = "block";
                            $('#delDetails').show();
                            //text.innerHTML = "show";
                            if (document.getElementById('toggleMe')) {
                                document.getElementById("toggleMe").style.display = "none";
                                document.getElementById('newdelDetails').style.display = 'none';
                            }
                            //                if (document.getElementById('del_time')) {
                            //                    document.getElementById('del_time').style.display = "";
                            //                }
                        } else {
                            //                ele.style.display = "none";
                            //                if (document.getElementById('del_time')) {
                            //                    document.getElementById('del_time').style.display = "block";
                            //                }
                            //typeofext.innerHTML = "hide";
                        }
                    }
                };
            }();
            function colorVariant(response) {
                if (response.data.images !== undefined && response.data.images !== null) {
                    var l = $('#thumblist li').length;
                    $("#thumblist2").css("display", "block");
                    var thumb = response.data.images[0].main_image.replace('/320/320', '/50/50');
                    try {
                        $('#thumblist').slick('slickRemove', 0);
                        $('#thumblist').slick('slickAdd', "<li><a class='' href='#' data-image='" + response.data.images[0].main_image + "' data-zoom-image='" + response.data.images[0].detailed_image + "'><img id='' src='" + thumb + "' data-img='" + thumb + "'/></a></li>", 0, true);
                    } catch (error) {}
                    thumbImg();
                    setTimeout(function () {
                        $('#thumblist li a').first().trigger("click");
                    }, 300);
                }
                if (response.data.modifier_type == 'A' && response.data.modifier !== 0) {
                    var price = Math.round(fprice + parseInt(response.data.modifier)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    $('.f_price').html('Rs.' + price);
                } else if (response.data.modifier_type == 'P' && response.data.modifier !== 0) {
                    var price = Math.round(fprice * (1 + parseInt(response.data.modifier) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    $('.f_price').html('Rs.' + price);
                }
            }
            function variantcombo(response) {
                var output = response.data.linked_option_variant_data;
                var array = [];
                var variantId = response.data.variant_id;
                var optionId = response.data.option_id;
                if (prev.variantID != variantId) {
                    prev.variantID = variantId;
                    prev.optionID = optionId;
                    $.each(output, function (index, value) {
                        $.each(output[index].variants, function (ind, val) {
                            array.push(ind);
                        });
                        $.each($("#" + spanId).children(".variant"), function (k, v) {
                            var a = $(v);
                            if (array.indexOf(a.attr('id')) == -1) {
                                $(v).addClass("disabled");
                                if ($(v).hasClass("selected")) {
                                    $(v).removeClass("selected");
                                }
                                //sessionStorage.setItem(spanId+'&'+siblingId, JSON.stringify(response));
                            }
                        });
                    });
                }
                // $('#responseLoading').hide();
                // $('#buy').attr('disabled',false);
                // $('#add_cart').attr('disabled',false);
            }
            function thumbImg() {
                try {
                    $("#zoom_picture_gall").elevateZoom({ gallery: 'thumblist', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: false, loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif', zoomWindowFadeIn: 500, zoomWindowFadeOut: 500, lensFadeIn: 500, lensFadeOut: 500, /*scrollZoom : true*/zoomWindowWidth: 700, zoomWindowHeight: 450, easing: true, borderSize: 0, zoomWindowPosition: "deta_container" });

                    $("#zoom_picture_gall").bind("click", function (e) {
                        var ez = $('#zoom_picture_gall').data('elevateZoom');
                        $.fancybox(ez.getGalleryList());
                        return false;
                    });

                    $('#thumblist').slick({ lazyLoad: 'ondemand', slidesToShow: 4, slidesToScroll: 1, infinite: false });
                } catch (error) {}
            }

            function loadMoreReviews() {
                if (typeof window.showRev !== 'undefined' && window.showRev == 1 && pdp_setup.hideReview == 0 && typeof window.pId !== 'undefined') {
                    //window.pId = 96627546;
                    window.reviewPage += 1;
                    var url = base_url + 'home/reviewDetail/' + window.pId + '/' + window.reviewPage;
                    microAjax(url, function (res) {
                        if (res !== '') {
                            // if(document.getElementById('pdp_rnr') === null && pdp_setup.hideReview == 0 && window.reviewPage===1){
                            //         if($(".refurbhished").length > 0){
                            //             $(".refurbhished").after(res);
                            //         }else{
                            //             $(".selected_product_tabbing").after(res);
                            //         }
                            //         try {
                            //             $('#review-btn').click(function() {
                            //                 //omString[5]=evar48+"|"+evar36;
                            //                 //window.digitalData.product = omString.join(';');
                            //                 //window.digitalData.omtrProduct = omString.join(';');
                            //             });
                            //         } catch (e) {
                            //         }
                            //         var pstars =  Math.round(window.stars);
                            //         var ostars = window.avg_rat / 5 * 284;
                            //         $(".c_fill").css( "stroke-dasharray",   ostars + "," + "284"  );
                            //         //$('#moreReview').unbind('click').click(loadReviews);
                            // } else {
                            $(".rnr_lists ul").append(res);
                            //}
                            if (window.reviewPage >= window.totalPage) {
                                window.showRev = 0;
                                $("#moreReview").css("display", "none");
                            }
                        }
                    });
                }
            }
            $(document).ready(function () {
                $('#bb_').slick({
                    dots: false,
                    infinite: false,
                    slidesToShow: 5,
                    slidesToScroll: 1
                });
                $('#vv_').slick({
                    dots: false,
                    infinite: false,
                    slidesToShow: 5,
                    slidesToScroll: 1
                });
                $('.rnr_video_rating .regular').slick({
                    dots: false,
                    infinite: false,
                    slidesToShow: 5,
                    slidesToScroll: 1
                });
            });
            $('.t_overlay').click(function (e) {
                $('.t_overlay').hide();
            });
            $('#moreReview').unbind('click').click(loadMoreReviews);

            function thumb_image_change() {
                if ($('.zoomLens')[0].style.display == "none") {
                    if (current_index < total_thumbs) {
                        $('#thumb_click_' + current_index + " a").triggerHandler("click");
                        current_index++;
                    } else {
                        current_index = 0;
                        counter++;
                        if (counter == 3) {
                            window.clearInterval(thumb_timer);
                        }
                        $('#thumb_click_' + current_index + " a").triggerHandler("click");
                    }
                }
            }

            function thumb_click() {
                thumb_timer = setInterval(thumb_image_change, 5000);
                $('.thumb_click a').mousedown(function () {
                    current_index = 0;
                    window.clearInterval(thumb_timer);
                    if (counter < 3) {
                        thumb_timer = setInterval(thumb_image_change, 5000);
                    }
                });
            }

            function fireOnLoad() {
                var vi_d = parseInt(visitorId[visitorId.length - 1]);
                var thumb_image_timer = '';
                if (!isNaN(vi_d) && vi_d % 2 != 0 && typeof total_thumbs !== 'undefined' && total_thumbs !== null && typeof thumb_image_timer !== 'undefined' && thumb_image_timer !== null && parseInt(total_thumbs) > 1) {
                    if (typeof _satellite !== 'undefined') {
                        thumb_image_timer = 'auto_scroll_yes';
                        _satellite.track('thumb_image_timer');
                    }
                    thumb_click();
                } else {
                    if (typeof _satellite !== 'undefined') {
                        thumb_image_timer = 'auto_scroll_no';
                        _satellite.track('thumb_image_timer');
                    }
                }
                if (document.getElementById('rfbcondition_details')) {
                    if (document.getElementById('pho_cond_text')) {
                        document.getElementById('p_condition').innerHTML = p_condition;
                        document.getElementById('pho_cond_text').style.display = 'block';
                    }
                    document.getElementById('rfbcondition_details').addEventListener('click', function () {
                        if (document.getElementsByClassName('tabbing_nav')[0]) {
                            var final_pos = document.getElementsByClassName('tabbing_nav')[0].offsetTop;
                            window.scrollTo(0, final_pos);
                            if (document.getElementById('Cond_details')) {
                                document.getElementById('Cond_details').click();
                            }
                        }
                    });
                }
                if (typeof wholesale_prd !== 'undefined' && typeof min_wholesale_set_qty_price !== 'undefined' && change_price && change_price != 0) {
                    if (wholesale_prd == 1 && min_wholesale_set_qty_price) {
                        if (document.getElementsByClassName('f_price')[0]) {
                            document.getElementsByClassName('f_price')[0].setAttribute('data-attr', min_wholesale_set_qty_price);
                            document.getElementsByClassName('f_price')[0].setAttribute('content', min_wholesale_set_qty_price);
                            document.getElementsByClassName('f_price')[0].innerHTML = 'Rs.' + min_wholesale_set_qty_price + '/Pc';
                        }
                    }
                }
                window.fprice = parseInt($('.f_price').attr('data-attr'));
                if (typeof digitalData !== 'undefined') {
                    window.omString = digitalData.omtrProduct.split(';');
                    window.evar36 = omString[5];
                    if (typeof window.pId !== 'undefined') {
                        window.evar48 = "evar48=" + window.pId;
                    }
                    window.evar54 = "";
                }
                if (show_bestseller == 1) {
                    bestsellers();
                }
                //getAlsoViewed();
                //$(window).one('scroll',loadMoreReviews);
                getMSPData();
                getEmiData();
                if (typeof localforage !== 'undefined' && typeof window.pId !== 'undefined') {
                    localforage.getItem('wishlist_' + window.pId, function (err, value) {
                        if (value !== null) {
                            if (helperFunctions.ReadCookie("user_id") && helperFunctions.ReadCookie("user_id") !== '' || helperFunctions.ReadCookie("scumd") && helperFunctions.ReadCookie("scumd") !== '') {
                                $("#pdp_wishlist").trigger("click");
                            }
                            localforage.removeItem('wishlist_' + window.pId);
                        }
                    });
                }
                if (document.getElementById('getSC') && document.getElementById('getSC').style.display == 'none' && show_size_chart == 'Y') {
                    $('#getSC').show();
                    getSizeChart();
                }
                //checkShipping();
                $("#thumblist").css("display", "block");
                $("#thumblist2").css("display", "none");
                thumbImg();
                if (pdp_setup.fireShippping == true && helperFunctions.ReadCookie('pincode') !== '' && helperFunctions.ReadCookie('pincode') !== null && typeof window.pId != 'undefined') {
                    if (document.getElementById('check_shipping')) {
                        document.getElementById('check_shipping').click();
                    }
                } else {
                    $('#check_shipping').attr('disabled', true);
                }
                // if ($('.Quantity').length >0){
                //pdDetail_public.checkShippingCharges();
                //}

                if (window.localStorage) {
                    try {
                        //The paramaters passed are the 3 IDs for the product  and the storage length is set from the config file.
                        recentlyViewedAll({ 'pid': pId, 'mid': m_id, 'lid': l_id }, rva_length);
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
            pdp_setup.init();
            fireviewed();
            if (window.coreJSLoaded) fireOnLoad();else document.addEventListener("coreJSLoaded", fireOnLoad);
            //initiateLoad();


            //FUNCTIONS FOR WALMART

            function walmartPdp() {

                if (typeof enableWalmart !== 'undefined' && walmartProduct == 'Y') {

                    $("#buy").attr('disabled', true);
                    //        $("#buy").addClass("display_inline_block");
                    //        $("#buy").addClass("disable");

                    var clues_id = helperFunctions.ReadCookie("scumd");
                    var walmart_userdata = helperFunctions.ReadCookie('walmart_user_data');
                    var walmart_user = helperFunctions.ReadCookie("walmart_user");

                    if (walmart_userdata) {
                        var wal_userdata = window.atob(walmart_userdata);
                        var wal_ud = JSON.parse(wal_userdata);
                    }

                    if (clues_id && walmart_userdata && clues_id == wal_ud.scl_user) {
                        var walmart_user = helperFunctions.ReadCookie("walmart_user");
                        if (walmart_user && walmart_user == clues_id) {
                            $('#add_cart').show();
                            $('#walmart_button').hide();
                            $("#buy").attr('disabled', false);
                            //                $("#buy").removeClass("display_inline_block");
                            //                $("#buy").removeClass("disable");
                        } else {
                            //ajax hit to check valid user/pswd of walmart
                            $.ajax({
                                type: "POST",
                                url: 'ajaxCall/executeWalmartPdp',
                                async: true,
                                data: { clues_id: clues_id, username: wal_ud.user, password: wal_ud.pswd },
                                success: function success(data) {
                                    if (data == "Success") {
                                        $('#add_cart').show();
                                        $('#walmart_button').hide();

                                        $("#buy").attr('disabled', false);
                                        //                            $("#buy").removeClass("display_inline_block");
                                        //                            $("#buy").removeClass("disable");
                                    } else {

                                        $('#add_cart').hide();
                                        $('#walmart_button').show();
                                    }
                                },

                                error: function error() {

                                    $('#add_cart').hide();
                                    $('#walmart_button').show();
                                }
                            });
                        }
                    } else {
                        $('#walmart_button').show();
                        $('#add_cart').hide();
                    }

                    $('#walmart_button').click(function () {
                        if (clues_id) {
                            // $('#walmart_login').addClass('light-box pin_locate');
                            $('#walmart_login').fadeIn();
                        } else {
                            window.location.href = login_url + window.location.pathname + window.location.search;
                        }
                    });
                    $('.close').click(function () {
                        $("#walmart_login").fadeOut();
                    });
                }
            }

            walmartPdp();

            return {

                WalmartLogin: function WalmartLogin() {
                    var clues_id = helperFunctions.ReadCookie("scumd");

                    var user = $('#walmart_username').val().trim();
                    var pass = $('#walmart_password').val().trim();
                    var wal_user_Pattern = /^\d+$/;

                    if (user && pass && wal_user_Pattern.test(user)) {

                        $.ajax({
                            type: "POST",
                            url: 'ajaxCall/executeWalmartPdp',
                            async: true,
                            data: { username: user, password: pass, clues_id: clues_id },
                            success: function success(data) {

                                if (data == "Success") {
                                    $('#walmart_login').hide();
                                    $('#add_cart').show();
                                    $('#walmart_button').hide();
                                    $("#buy").attr('disabled', false);
                                    //                                                        $("#buy").removeClass("display_inline_block");
                                    //                                                        $("#buy").removeClass("disable");
                                } else {
                                    if (data == "Register") {
                                        $('#walmart_error').html("This account does not exist. Please register.");
                                    } else {
                                        $('#walmart_error').html("Please provide correct credentials.");
                                        $('#add_cart').hide();
                                        $('#walmart_button').show();
                                    }
                                }
                            },
                            error: function error() {

                                $('#walmart_error').html("Please try again!!");
                                $('#add_cart').hide();
                                $('#walmart_button').show();
                            }
                        });
                    } else {
                        $('#walmart_error').html("Please provide correct credentials");
                        $('#add_cart').hide();
                        $('#walmart_button').show();
                    }
                }

            };
        }(SC, window);

        window.echo = function (window, document) {
            'use strict';

            var Echo = function Echo(elem) {
                this.elem = elem;
                this.render();
                this.listen();
            };
            var echoStore = [];
            var scrolledIntoView = function scrolledIntoView(element) {
                var coords = element.getBoundingClientRect();
                return (coords.top >= 0 && coords.left >= 0 && coords.top) <= (window.innerHeight || document.documentElement.clientHeight);
            };

            var echoSrc = function echoSrc(img, callback) {
                img.src = img.getAttribute('data-img');
                if (callback) {
                    callback();
                }
            };
            var removeEcho = function removeEcho(element, index) {
                if (echoStore.indexOf(element) !== -1) {
                    echoStore.splice(index, 1);
                }
            };
            var echoImages = function echoImages() {
                for (var i = 0; i < echoStore.length; i++) {
                    var self = echoStore[i];
                    if (scrolledIntoView(self)) {
                        echoSrc(self, removeEcho(self, i));
                    }
                }
            };
            Echo.prototype = {
                init: function init() {
                    echoStore.push(this.elem);
                },
                render: function render() {
                    if (document.addEventListener) {
                        document.addEventListener('DOMContentLoaded', echoImages, false);
                    } else {
                        window.onload = echoImages;
                    }
                },
                listen: function listen() {
                    window.onscroll = echoImages;
                    var elems = document.getElementsByClassName("lazyLoadImage"),
                        i;
                    if (elems.length > 0) {
                        for (i = 0; i < elems.length; i++) {
                            elems[i].addEventListener("touchstart", echoImages);
                        }
                    }
                }
            };
            var lazyImgs = document.querySelectorAll('img[data-img]');
            for (var i = 0; i < lazyImgs.length; i++) {
                new Echo(lazyImgs[i]).init();
            }
        };
        echo(window, document);
        window.chat = function (window, document) {
            var Chat = function Chat() {
                this.chatOnOff = parseInt($(".seller_chat").attr("status"));
                //this.chatHost = ".shopclues.com";
                //this.myChatUrl = "myChat.html";
                this.chatTime = $(".seller_chat").attr("time");
                this.chatScripts = ["https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js", "chat_new/js/reconnecting-websocket.js", "chat_new/js/jquery.form.js"];
                this.init();
            };
            Chat.prototype = {
                init: function init() {
                    if (this.chatOnOff === 1 && typeof window.hbId !== 'undefined') {
                        var i = 0;
                        var j = this.chatScripts.length;
                        var link = document.createElement("LINK");
                        link.setAttribute("rel", "stylesheet");
                        link.setAttribute("type", "text/css");
                        link.setAttribute("href", "chat_new/chat.css");
                        document.getElementsByTagName('body')[0].appendChild(link);

                        for (i; i < j; i++) {
                            var script_element = document.createElement('script');
                            script_element.src = this.chatScripts[i];
                            script_element.type = "text/javascript";
                            script_element.setAttribute("async", true);
                            document.getElementsByTagName('head')[0].appendChild(script_element);
                        }
                        $('.seller_chat').click(function () {
                            chatGetUserInfo();
                        });
                        $('#ckey').click(function () {
                            chatUserInfo();
                        });
                        $('#button-chat').css({ 'display': 'block' });
                        //$('.ask_m').css({'display':'none'});
                        //$('#button-chat + .pdp_merchant_links, #chat_container + .pdp_merchant_links').css({'display':'none'});
                    }
                }
            };
            function chatUserInfo() {
                f_name = document.forms["myForm"]["firstname"].value;
                l_name = document.forms["myForm"]["lastname"].value;
                email_id = document.forms["myForm"]["emailid"].value;
                shop_id = 0;
                atpos = email_id.indexOf("@");
                dotpos = email_id.lastIndexOf(".");
                chatValidation(chatCreateFrame);
            }
            function chatGetUserInfo() {
                if (typeof window.pId !== 'undefined') {
                    companyId = window.CompId;
                    productId = window.pId;
                    heybizId = window.hbId;
                    sellPrice = window.sP || '';
                    dealPrice = window.dP || '';
                    if (helperFunctions.ReadCookie('guestEmail') !== "" && helperFunctions.ReadCookie('guestScun') !== "" && helperFunctions.ReadCookie('guestLname') !== "") {
                        email_id = helperFunctions.ReadCookie('guestEmail');
                        f_name = helperFunctions.ReadCookie('guestScun');
                        l_name = helperFunctions.ReadCookie('guestLname');
                        shop_id = 0;
                        chatCreateFrame();
                    } else if (helperFunctions.ReadCookie('email') !== "" && helperFunctions.ReadCookie('scun') !== "" && helperFunctions.ReadCookie('lname') !== "") {
                        email_id = atob(helperFunctions.ReadCookie('email')).replace(/"/g, "");
                        f_name = atob(helperFunctions.ReadCookie('scun')).replace(/"/g, "");
                        l_name = atob(helperFunctions.ReadCookie('lname')).replace(/"/g, "");
                        shop_id = 1;
                        chatCreateFrame();
                    } else {
                        $('#button-chat form').slideToggle();
                        $('#button-chat > button').toggleClass('seller_chat');
                    }
                }
            }
            function chatValidation(callback) {
                if (f_name === "" || !/^[a-zA-Z]*$/g.test(f_name)) {
                    alert("Please provide valid name!");
                    document.forms["myForm"]["firstname"].focus();
                    return false;
                } else if (l_name == "" || !/^[a-zA-Z]*$/g.test(l_name)) {
                    alert("Please provide your last name!");
                    document.forms["myForm"]["lastname"].focus();
                    return false;
                } else if (email_id == "") {
                    alert("Please provide your email id!");
                    document.forms["myForm"]["emailid"].focus();
                    return false;
                } else if (atpos < 1 || dotpos - atpos < 2 || !/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(email_id)) {
                    alert("Please enter correct email ID");
                    document.forms["myForm"]["emailid"].focus();
                    return false;
                } else {
                    SetCookie('guestEmail', email_id, chat1.chatTime, window.cookieDomain);
                    SetCookie('guestScun', f_name, chat1.chatTime, window.cookieDomain);
                    SetCookie('guestLname', l_name, chat1.chatTime, window.cookieDomain);
                    callback();
                }
            }
            function chatCreateFrame() {
                $('#button-chat').remove();
                $("#chat_container").load("chat_new/frame.php");
                chatInitApi();
            }
            function chatInitApi() {

                $.ajax({
                    type: "GET",
                    url: base_url + "home/chatRegister",
                    cache: false,
                    data: { fName: f_name, lName: l_name, email: email_id, shopId: shop_id, company_id: companyId, product_id: productId, hb_id: heybizId },
                    traditional: true,
                    success: function success(result) {
                        var response = jQuery.parseJSON(result);
                        wsUri = response.data.WebSocket_URL;
                        bizAdminId = response.data.User.uId;
                        websocket_post_msg = response.data.TextMsg_URL;
                        postMedia = response.data.MediaMsg_URL;
                        mediaUrl = response.data.Media_Base_URL;
                        adminurl = "/clues-chat/";
                        cId = response.data.User.cId;
                        bId = response.data.User.bId;
                        recId = response.data.User.aId;
                        businessName = response.data.User.bName;
                        senderName = response.data.User.uName;
                        adminName = response.data.User.aName;
                        chatJsLoad(chatRedisCall);
                    }
                });
            }
            function chatJsLoad(callback) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = "chat_new/js/chat.js";
                if (script.readyState) {
                    script.onreadystatechange = function () {
                        if (script.readyState === "loaded" || script.readyState === "complete") {
                            script.onreadystatechange = null;
                            callback();
                        }
                    };
                } else {
                    //Others
                    script.onload = function () {
                        callback();
                    };
                }
                //document.head.appendChild(script);
                document.getElementsByTagName("head")[0].appendChild(script);
            }
            function chatRedisCall() {
                $.ajax({
                    type: "GET",
                    url: base_url + "home/chatRedis",
                    cache: false,
                    data: { user: bizAdminId },
                    traditional: true,
                    success: function success(result) {
                        var response = jQuery.parseJSON(result);
                        lm = response.lm;
                        arr = response.arr1;
                        chatCreateBox();
                        if (lm !== '') {
                            authMessage = { 'type': 'auth', 'userId': bizAdminId, 'isReauth': 1, 'lmid': lm };
                            for (var key in arr) {
                                if (arr.hasOwnProperty(key)) {
                                    createChatList(jQuery.parseJSON(arr[key]), 0);
                                }
                            }
                            createWebSocket(1);
                        } else {
                            authMessage = { 'type': 'auth', 'userId': bizAdminId, 'isReauth': 0, 'lmid': '' };
                            createWebSocket(0);
                        }
                    }
                });
            }
            function chatCreateBox() {
                var time = getLocalTime();
                var sel = 1;
                var listHtml = "<a href='#' bKey='" + businessName + "' biz='" + businessName.replace(/[\'\"]/g, '') + "' user='" + senderName + "' senderId='" + bizAdminId + "' class='list-group-item' id='userName_" + cId + "'>" + senderName + "<br><small> " + businessName + "<br><span id='last_" + cId + "'>" + time + "</span></small></a>";
                $('#chatUserList').prepend(listHtml);
                $('#chat').append("<div class='chat-tab-content active' id='box_" + cId + "'  self='" + sel + "'><div class='action'><span class='un'></span><a href='" + base_url + "mychat" + "'target='_blank' class='new_window'></a><span class='chat_close' id='rem_" + bId + "_" + bizAdminId + "'></span></div><div class='bubble-list row' id='cb_" + cId + "'></div><div class='message-form row'><form name='chat-form' id='form-" + recId + "_" + bId + "_" + cId + "_" + recId + "' method='post' onSubmit='return false;' action='" + base_url + "home/chatImageSend'" + "enctype='multipart/form-data'><input class='cmi' type='hidden' name='cmi' value=''><input type='hidden' name='srdata' value='" + bizAdminId + "_" + bId + "_" + cId + "_" + recId + "'><div class='input-group'><span class='input-group-btn'><span class='btn btn-attach btn-sm btn-file'><span class=''></span><input cid='" + cId + "' type='file' name='myfile' id='file-" + recId + "_" + bId + "_" + cId + "_" + recId + "' onChange='ifFile(this)' accept='image/*'></span></span><textarea placeholder='Write message' class='form-control input-sm chat-input input' name='caption' id='" + recId + "_" + bId + "_" + cId + "' cid='" + cId + "' ></textarea><span class='input-group-btn'> <button class='btn btn-custom btn-sm' id='btn_" + recId + "_" + bId + "_" + cId + "' cid='" + cId + "'></button> </span></form></div></div></div>");
                var stxt = '<a href="">' + businessName + '</a>';
                var txt = stxt + '<br><small style="display:none;">' + adminName + ' on Chat</small>';
                $("#box_" + cId + " .action .un").html(txt);
                $(document).data('chat' + cId, "true");
                $('.chat_close').click(function () {
                    $('.chat-tab-content').toggleClass('position_top');
                    $(this).toggleClass('maximize');
                });
                $('.chat-input').keyup(function () {
                    if ($('.chat-input').val().length > 0) {
                        $('.btn.btn-custom.btn-sm').addClass('blue_active');
                    } else {
                        $('.btn.btn-custom.btn-sm').removeClass('blue_active');
                    }
                });
            }
            var chat1 = new Chat();
            if (window.coreJSLoaded) chat1();else document.addEventListener("coreJSLoaded", chat1);
        }(window, document);

        /*TOOLTIP SECTION*/
        /*var iInfo = $('.icon_info');
         var iInfo_target = $('.tooltipPopup');
         var mouse_is_inside = false;

         $(document).ready(function()
         {
         $(iInfo).hover(function(){
         mouse_is_inside=true;
         $(this).parent().find(iInfo_target).show();
         }, function(){
         mouse_is_inside=false;
         });

         $("body").mouseup(function(){
         if(! mouse_is_inside) $(iInfo_target).hide();
         });
         });*/
        var user_segment;
        function usersegment() {
            var url = base_url + 'ajaxCall/getUserSegment/';
            var random = Math.floor(Math.random() * 100 + 1);
            var data = { 'user': helperFunctions.ReadCookie('scumd') };
            url = url + random;
            try {
                $.ajax({
                    url: url,
                    type: 'GET',
                    data: data,
                    success: function success(res) {
                        var offr_data = JSON.parse(res);
                        offertext = offr_data.offer;
                        SetCookie('cb', offr_data.cluesbuck, 1 / 12, cookieDomain);
                        if (typeof offertext !== 'undefined' && typeof offr_data.segment !== 'undefined' && _satellite !== 'undefined') {
                            user_segment = offr_data.segment + "_" + offertext;
                            _satellite.track('user_segment');
                        }
                        if (typeof offr_data.segment !== 'undefined') {
                            SetCookie('user_segment', offr_data.segment, 1 / 12, cookieDomain);
                        }
                        if (typeof offertext !== 'undefined' && offertext !== 'NO_OFFER') {
                            SetCookie('user_segment_offer', offertext, 1 / 12, cookieDomain);
                            if (pdp_user_segment.hasOwnProperty(offertext) == true) {
                                offr_cnt++; //alert(offr_cnt);
                                if (pdp_user_segment[offertext] !== 'undefined') {
                                    offr_list = pdp_user_segment[offertext];
                                }
                                if (offr_cnt > 1) {
                                    var offr_html = offr_cnt + ' OFFERS';
                                } else var offr_html = offr_cnt + ' OFFER';
                                if (offr_cnt == 1) {
                                    $('#buy_now').before("<div class='offers'><p><span class='n_off'>1 OFFER</span><span>" + offr_list + "</span></p></div>");
                                    $('#buy_now').show();
                                } else if (offr_cnt == 2) {
                                    $('.n_off').html('');
                                    $('.n_off').html(offr_html);
                                    $('.n_off').show();
                                    $('#promo_txt').html('');
                                    $('#promo_txt').html(offr_list);
                                    $('#promo_txt').show();
                                    $('.links').show();
                                    $('.n_off').nextAll("span:first").html(offr_list);
                                    //$('#promo_txt').after("<span class='links'><a class='v_offer' href='javascript:void(0);''>View offers</a></span><ul id='promo_offr' style='display: none;''></ul>");
                                    //$('.offers').wrapInner('</p>');
                                    // $('.n_off').next("span:first").before("<span>" + offr_list + "</span><span class='links'><a class='v_offer' href='javascript:void(0);'>View offers</a></span>");
                                    // $('.promo_txt').html('');
                                } else {
                                    $('.n_off').html('');
                                    $('.n_off').html(offr_html);
                                    $('.n_off').show();
                                    $('.n_off').nextAll("span:first").html(offr_list);
                                }
                            }
                        }
                    }
                });
            } catch (e) {
                console.log(e);
            }
        }
        if (helperFunctions.ReadCookie('scumd') != "" && rbprod == 1) {
            usersegment();
        }
        function pdp_loyalty() {
            var url = base_url + 'ajaxCall/getloyalty';
            var seg = ReadCookie('user_segment');
            var data = { 'user_id': atob(ReadCookie('scumd')), 'visitor_id': visitorId, 'product_id': window.pId, 'user_segment': seg };
            $.ajax({
                type: 'GET',
                url: url,
                data: data,
                success: function success(resp) {
                    if (typeof resp !== 'undefined' && resp !== null) {
                        var res = JSON.parse(resp);
                        var promo = res[0].promotions;
                        $.each(promo, function (key, value) {
                            if (key == 'CB_OFFER') {
                                if (value.discount_difference_value == 0) var cbtext = "";else var cbtext = " Each CluesBucks is equal to Rs 1.";
                                var cbucks = value.discount;
                                var extracbtxt = '';
                                if (value.cod_discount_value == 0) {
                                    var html = '';
                                } else {
                                    cbucks = value.cod_discount_value < value.prepaid_discount_value ? value.cod_discount_value : value.prepaid_discount_value;
                                    var html = '<div><span class="cb_amt">' + cbucks + ' CluesBucks<i class="plus">+</i></span><span>for VIP Club Members </span><i class="icon_info"><span></span><div class="pt"><div class="tooltipPopup"><p>' + value.extraCBCashbackMessage + cbtext + '</p></div></div></i><a href="https://cdn.shopclues.com/images/banners/Work/FashionCloset/july/tnc/Loyalty_Program_tnc.html"> T&C</a></div>';
                                }
                                $('.cbucks_balance').html(html);
                            }
                        });
                    }
                }
            });
        }
//if(ReadCookie('user_segment') == 'LC'){
        pdp_loyalty();
//}
        function getTotalCB() {
            if ((helperFunctions.ReadCookie("user_id") || helperFunctions.ReadCookie('scumd')) && prod_data.metaCategoryId !== 5099 && typeof is_wholesale == 'undefined') {
                var userid = atob(helperFunctions.ReadCookie("user_id")) || atob(helperFunctions.ReadCookie('scumd'));
                var seg = ReadCookie('user_segment');
                var fPrice = parseInt($('.f_price').attr('data-attr'));
                if (typeof listPrice === 'undefined') var listprice = fPrice;else var listprice = listPrice;
                var url = 'ajaxCall/total_cb?user_id=' + userID + '&user_segment=' + seg + '&price=' + fPrice + '&list_price=' + listprice;
                $.ajax({
                    url: url,
                    type: 'GET',
                    success: function success(res) {
                        res = JSON.parse(res);
                        if (typeof res.response.cb_balance_details.user_cb_applicable_data.user_total_cb_applicable !== 'undefined') {
                            price_cut = 1;
                            applicablecb = res.response.cb_balance_details.user_cb_applicable_data.user_total_cb_applicable;
                            applicablecbpercent = res.response.cb_balance_details.user_cb_applicable_data.cb_percent;
                            document.getElementsByClassName('cb_av')[0].style.display = 'inline-block';
                            document.getElementById('used_cb').innerHTML = res.response.cb_balance_details.user_cb_applicable_data.user_total_cb_applicable + ' Used';
                            var newprice = fPrice - applicablecb;
                            if (newprice < 0) newprice = 0;
                            var pricehtml = 'Rs.' + newprice;
                            document.getElementsByClassName('f_price')[0].innerHTML = pricehtml;
                            var newdisc = parseInt(document.getElementsByClassName('discount')[0].getAttribute('data-attr')) + applicablecbpercent;
                            if (newdisc > 100) newdisc = 100;
                            document.getElementsByClassName('discount')[0].innerHTML = newdisc + '% off';
                            $('#snackbar').addClass('cb_toastmsg');
                            window.toastMessage('This is only indicative price.The final discounted price will be visible during checkout based on total order amount and available CB/CB+.');
                        }
                    }
                });
            }
        };
        function submit_ques_ans(event) {
            if (event.currentTarget.id == 'submit_answer') {
                var ques_id = event.currentTarget.getAttribute('qid');
                if (document.getElementById('ask_question')) {
                    document.getElementById('ask_question').click();
                    document.getElementById('customer_ques').value = '';
                    document.getElementById('customer_ques').placeholder = 'Type your answer here';
                    document.getElementById('submit_button').setAttribute('label', 'answer');
                    document.getElementById('submit_button').setAttribute('questionid', ques_id);
                    document.getElementById('qa_heading').innerHTML = 'Submit your answer';
                }
                return;
            }
            var usr_id = helperFunctions.ReadCookie("scumd");
            if (usr_id != '') {
                usr_id = atob(getCOOKIE('scumd'));
            }
            if (document.getElementById('customer_ques') && document.getElementById('customer_ques').value != '') {
                var text_content = document.getElementById('customer_ques').value;
                var url;
                if (usr_id == '') {
                    helperFunctions.SetCookie('loginredirect_desktop', document.URL, 1, '.shopclues.com');
                    helperFunctions.SetCookie('quans_desktop', text_content, 1, '.shopclues.com');
                    if (document.getElementById('show_loginpop')) {
                        document.getElementById('ask_ques_box').style.display = 'none';
                        document.getElementById('common_popupModel').style.display = 'none';
                        document.getElementById('common_overlay').style.display = 'none';
                        document.getElementById('show_loginpop').click();
                    }
                    return;
                }
                if (document.getElementById('submit_button').getAttribute('label') == 'question') {
                    url = 'ajaxCall/submit_ques_ans?product_id=' + window.pId + '&type=question' + '&user_id=' + usr_id + '&user_type=U' + '&question=' + text_content;
                } else {
                    url = 'ajaxCall/submit_ques_ans?type=answer' + '&question_id=' + document.getElementById('submit_button').getAttribute('questionid') + '&user_id=' + usr_id + '&user_type=U' + '&answer=' + text_content;
                }
                fetch(url).then(function (response) {
                    return response.json();
                }).then(function (response) {
                    document.getElementById('common_popupModel').style.display = 'none';
                    document.getElementById('ask_ques_box').style.display = 'none';
                    document.getElementById('common_overlay').style.display = 'none';
                    if (response && response.status == 1) {
                        window.toastMessage('Question has been submitted successfully');
                    } else {
                        window.toastMessage('Error in submitting question');
                    }
                }).catch(function (error) {
                    console.log(error);
                    document.getElementById('common_popupModel').style.display = 'none';
                    document.getElementById('ask_ques_box').style.display = 'none';
                    document.getElementById('common_overlay').style.display = 'none';
                    window.toastMessage('Error in submitting question');
                });
            }
        }
        function Question_Answer() {

            var stored_question = helperFunctions.ReadCookie('quans_desktop');
            if (stored_question != '' && helperFunctions.ReadCookie("scumd") != '') {
                stored_question = getCOOKIE('quans_desktop');
                var usr_id = helperFunctions.ReadCookie("scumd");
                if (usr_id != '') {
                    usr_id = atob(getCOOKIE('scumd'));
                }
                var url = 'ajaxCall/submit_ques_ans?product_id=' + window.pId + '&type=question' + '&user_id=' + usr_id + '&user_type=U' + '&question=' + stored_question;
                fetch(url).then(function (response) {
                    return response.json();
                }).then(function (response) {
                    if (response && response.status == 1) {
                        window.toastMessage('Question has been submitted successfully');
                    } else {
                        window.toastMessage('Error in submitting question');
                    }
                    helperFunctions.SetCookie('quans_desktop', '', 1, '.shopclues.com');
                }).catch(function (error) {
                    console.log(error);
                    window.toastMessage('Error in submitting question');
                    helperFunctions.SetCookie('quans_desktop', '', 1, '.shopclues.com');
                });
            }

            if (document.getElementById('ask_question')) {
                document.getElementById('ask_question').addEventListener('click', function () {
                    if (!document.getElementById('ask_ques_box')) {
                        var ques_block = '<div id="ask_ques_box" class="qa_popup" style="display: block;"><h4 id="qa_heading" class="heading">Ask your Question</h4><textarea id="customer_ques" placeholder="Type your question here"></textarea><div class="action_btn"><a href="javascript:void(0);" id="cancel_ques" class="btn orange-white">Cancel</a><a href="javascript:void(0);" id="submit_button" label="question" questionid="" class="btn orange">Submit</a></div></div>';
                        document.getElementById('common_popupModel').insertAdjacentHTML('beforeend', ques_block);
                        if (document.getElementById('cancel_ques')) {
                            document.getElementById('cancel_ques').addEventListener('click', function () {
                                document.getElementById('common_popupModel').style.display = 'none';
                                document.getElementById('ask_ques_box').style.display = 'none';
                                document.getElementById('common_overlay').style.display = 'none';
                            });
                        }
                        if (document.getElementById('submit_button')) {
                            document.getElementById('submit_button').addEventListener('click', function (event) {
                                submit_ques_ans(event);
                            });
                        }
                        document.getElementById('common_popupModel').style.display = 'block';
                        document.getElementById('ask_ques_box').style.display = 'block';
                        document.getElementById('common_overlay').style.display = 'block';
                    } else {
                        document.getElementById('common_popupModel').style.display = 'block';
                        document.getElementById('ask_ques_box').style.display = 'block';
                        document.getElementById('common_overlay').style.display = 'block';
                    }
                });
            }
            try {
                $.ajax({
                    type: 'GET',
                    url: base_url + "ajaxCall/get_question_answer",
                    data: { 'product_id': window.pId },
                    success: function success(result) {
                        var result = JSON.parse(result);
                        if (result.data) {
                            var to_show_ques_ans = 5;
                            var li_string = '';
                            var index = 0;
                            var total_ques_ans = 0;
                            for (var i = 0; i < result.data.length; i++) {
                                var is_answer = 0;
                                var ques_str = "";
                                if (index < to_show_ques_ans) {
                                    ques_str = "<li style='display:block'><p class='qa_ques'><span><b>Ques :</b></span> <span><b>" + result.data[i].question + "</b></span></p>";
                                } else {
                                    ques_str = "<li style='display:none'><p class='qa_ques'><span><b>Ques :</b></span> <span><b>" + result.data[i].question + "</b></span></p>";
                                }
                                var ans_str = "";
                                if (result.data[i].answer && result.data[i].answer.length > 0) {
                                    is_answer = 1;
                                    total_ques_ans++;
                                    for (var j = 0; j < result.data[i].answer.length; j++) {
                                        ans_str += "<p class='qa_ans'><span><b>Ans :</b></span>" + "<span>" + result.data[i].answer[j].answer + "</span>" + "</p>";
                                    }
                                }
                                if (is_answer == 1) {
                                    index++;
                                    li_string += ques_str + ans_str + "</li>";
                                }
                            }
                            if (document.getElementById('ques_ans_list')) {
                                document.getElementById('ques_ans_list').innerHTML = li_string;
                                if (index > 0) {
                                    document.getElementById('customer_faques').style.display = 'block';
                                    ques_ans_block = 'visible';
                                } else {
                                    ques_ans_block = 'not visible';
                                }
                                if (typeof _satellite !== 'undefined') {
                                    _satellite.track('ques_ans_block');
                                }
                            }
                            if (total_ques_ans > to_show_ques_ans) {
                                document.getElementById('load_more_qa').style.display = 'block';
                                document.getElementById('load_more_qa').addEventListener('click', function () {
                                    var child = document.getElementById('ques_ans_list').childNodes;
                                    for (var strt = to_show_ques_ans; strt < total_ques_ans; strt++) {
                                        if (child[strt]) {
                                            child[strt].style.display = 'block';
                                        }
                                    }
                                    document.getElementById('load_more_qa').style.display = 'none';
                                });
                            }
                        } else {
                            ques_ans_block = 'not visible';
                            if (typeof _satellite !== 'undefined') {
                                _satellite.track('ques_ans_block');
                            }
                        }
                    }
                });
            } catch (e) {
                console.log(e);
            }
        }
        Question_Answer();
        function sibling_variant() {
            $('.sib').click(function (event) {
                var e = event.currentTarget;
                var var_id = '';
                var sib_id = $(this).attr('id');
                var var_value = '';
                var value2 = event.currentTarget.getAttribute('value');
                var value1 = '';
                var id = '';
                var selid1 = '';
                var selval1 = '';
                var siburl = '';
                $('.sib').each(function (p, q) {
                    if ($(q).hasClass('sib_selected')) {
                        if ($(q).attr('id') !== event.currentTarget.getAttribute('id') && $(q).parents('li').attr('id') !== $(e).parents('li').attr('id')) {
                            value1 = $(q).attr('value');
                            id = $(q).attr('id');
                            selid1 = $(q).parents('li').attr('id');
                            selval1 = $(q).parents('li').attr('scName');
                            siburl += '|' + selid1 + ':' + id;
                        }
                    }
                });
                $('.var').each(function (p, q) {
                    if ($(q).hasClass('selected')) {
                        var_id = $(q).attr('id');
                        var_value = $(q).attr('value');
                    }
                });
                if ($(this).hasClass('sib_disable')) {
                    window.toastMessage(value2 + ' is not available in ' + value1);
                }
                $(this).addClass('sib_selected').siblings().removeClass('sib_selected');
                $('#' + selid1).children().children('p').html(selval1 + ': ' + '<span>' + value1 + '</span>');
                var selval2 = $(this).parents('li').attr('scName');
                var selid2 = $(this).parents('li').attr('id');
                $('#' + selid2).children().children('p').html(selval2 + ': ' + '<span>' + value2 + '</span>');
                var api = "v11/sibling_features";
                var date_ins = new Date();
                var dateStr = date_ins.toGMTString();
                var auth = btoa(api + token + dateStr);
                var url = curl_base_url + 'sibling_features?product_id=' + window.pId + '&getSiblingProduct=1&selectedSfString=' + selid2 + ':' + $(this).attr('id') + siburl;
                $.ajax({
                    type: 'GET',
                    data: { platform: 'D' },
                    headers: { "Authorization": auth, "X-Date": dateStr, "X-Source": "D" },
                    url: url,
                    beforeSend: function beforeSend() {
                        $('#responseLoading').show();
                    },
                    success: function success(resp) {
                        if (resp.data) {
                            if (resp.data.seo_name) {
                                sibling = 'visible';
                                window.location.href = base_url + resp.data.seo_name + '.html?' + 'ref_sib=' + var_id;
                            }
                        }
                        $('#responseLoading').hide();
                    }
                });
            });
        }
        sibling_variant();
        _satellite.track('sibling');
        _satellite.track('price_cut');
        window.pdpBigsale = function (window, document) {

            var PdpBigsale = function PdpBigsale(pid) {
                this.pid = pid;
                this.bigSaleApi();
            };
            PdpBigsale.prototype.bigSaleApi = function () {
                var self = this;
                var id = visitorId.charAt(visitorId.length - 1);
                vid = id % 4;
                $.ajax({
                    type: 'GET',
                    data: { 'pid': this.pid },
                    url: window.base_url + 'ajaxCall/pdpBigsale',
                    success: function success(resp) {
                        resp = resp.trim() !== '' ? JSON.parse(resp.trim()) : '';
                        if (resp.status == 1 && resp !== '') {
                            self.seoPath = resp.main_category_seo_path;
                            self.leafId = resp.main_category_id;
                            var tab = "<div class='tab_panel'><ul>";
                            var obj = resp.filters;
                            var leaf_ids = JSON.parse(fbb_combo_offers);
                            var digimatefbb = JSON.parse(digimate_fbb);
                            for (var key in obj) {
                                if (obj.hasOwnProperty(key)) {
                                    var filterParam = '';
                                    try {
                                        if (key == 3) {
                                            if (leaf_ids.indexOf(self.leafId) != -1) {
                                                tab += "<li id='t_" + key + "' filt='facet_combo[]=Combo&fsrc=facet_combo'><span>Combo Products</span></li>";
                                            } else if (digimatefbb.indexOf(resp.main_category_id) != -1) {
                                                digi_fbb = 1;
                                                tab += "<li id='t_" + key + "' filt=''><span>Digimate Accessories</span></li>";
                                            } else {
                                                tab += "<li id='t_" + key + "' filt='" + obj[key].filter_string + "'><span>" + obj[key].title + "</span></li>";
                                            }
                                        } else {
                                            tab += "<li id='t_" + key + "' filt='" + obj[key].filter_string + "'><span>" + obj[key].title + "</span></li>";
                                        }
                                        //tab+="<li id='t_"+key+"' filt='"+obj[key].filter_string+"'><span>"+obj[key].title+"</span></li>";
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }
                            }
                            tab += "</ul></div>";
                            $('#bigsalebnr').append(tab);
                            $('.tab_panel li').click(function (e) {
                                if ($(e.currentTarget).hasClass('active')) {
                                    return false;
                                    // $(e.currentTarget).removeClass('active');
                                    // $('.hack').hide();
                                } else {
                                    setTimeout(function () {
                                        $('.big_sale_section').removeClass('default_box');
                                    }, 1000);
                                    $('#responseLoading').show();
                                    self.categoryApi(e.currentTarget);
                                }
                            });
                            $('.tab_panel li:eq(' + vid + ')').trigger('click');
                            feature_block_test = vid;
                            _satellite.track('feature_block_test');
                        }
                    },
                    error: function error(jqXHR, textStatus) {
                        if (textStatus === 'timeout' || textStatus === 'error') {
                            $('#responseLoading').hide();
                        }
                    },
                    timeout: 3000
                });
            };

            PdpBigsale.prototype.categoryApi = function (e) {
                var self = this;
                var filter = $(e).attr('filt');
                var id = $(e).attr('id');
                var catid = self.leafId;
                var page_n = 2;
                var p_limit = 11;
                $(e).addClass('active');
                $(e).siblings().removeClass('active');
                if ($("[data-attr='" + id + "']").length > 0) {
                    $('.hack').hide();
                    $('#responseLoading').hide();
                    $("[data-attr='" + id + "']").show();
                } else {
                    if (digi_fbb == 1 && id == "t_3") {
                        catid = '32644';
                        filter = 'facet_brand[]=Digimate&facet_shopclues_surety[]=1&fsrc=facet_brand,facet_shopclues_surety';
                        page_n = 1;
                        p_limit = 30;
                    }
                    $.ajax({
                        type: 'GET',
                        data: { 'catId': catid, 'filters': filter, 'start': 0, 'limit': p_limit, 'fl_cal': 1, 'page_type': 'PDP', 'page': page_n },
                        url: base_url + 'ajaxCall/moreProducts',
                        success: function success(resp) {
                            if (resp.trim() !== '' && resp !== 'null') {
                                try {
                                    resp = JSON.parse(resp.trim());
                                    var product = resp.response.products;
                                    var l = product.length;
                                    var price, discount;
                                    var block = "<div class='row cat_promotion_box hack' data-attr='" + id + "'><div class='tabbing'><div class='tabbing_products'><ul class='regular slider' id='l" + id + "'>";
                                    for (var i = 0; i < l; i++) {
                                        var badgeHTML = '';
                                        var obHTML = '';
                                        var badge = 0;
                                        if (typeof product[i].badges_info !== 'undefined' && product[i].badges_info != null) {
                                            badge = 1;
                                            $.each(product[i].badges_info, function (ind, val) {
                                                if (product[i].badges_info[ind].position == 1) {
                                                    if (product[i].badges_info[ind].image_identifier == "STY") {
                                                        badgeHTML += "<div class='badge surety' badgeId='surety'><i></i></div>";
                                                    } else if (product[i].badges_info[ind].image_identifier == "S_RN") {
                                                        badgeHTML += "<div class='badge surety-renew' badgeId='surety'><i></i></div>";
                                                    }
                                                }
                                                if (product[i].badges_info[ind].position != 1) {
                                                    obHTML += "<div class='multi_tags_pl'>";
                                                    if (product[i].badges_info[ind].image_identifier == "UBX") {
                                                        obHTML += "<div class='unboxed_i'>Unboxed</div>";
                                                    } else if (product[i].badges_info[ind].image_identifier == "RFB") {
                                                        obHTML += "<div class='refurbished_i'>Refurbished</div>";
                                                    }
                                                    if (product[i].badges_info[ind].image_identifier == "E_Y") {
                                                        obHTML += "<div class='exclusive_i'>Exclusive</div>";
                                                    }
                                                    obHTML += "</div>";
                                                }
                                            });
                                        }
                                        if (product[i].third_price !== '' && product[i].third_price > 0) {
                                            price = product[i].third_price;
                                        } else if (product[i].price !== '' && product[i].price > 0) {
                                            price = product[i].price;
                                        } else if (product[i].list_price !== '' && product[i].list_price > 0) {
                                            price = product[i].list_price;
                                        }
                                        if (product[i].list_price !== '' && product[i].list_price > 0 && price !== product[i].list_price) {
                                            discount = Math.round((product[i].list_price - price) / product[i].list_price * 100);
                                        } else {
                                            discount = 0;
                                        }
                                        block += "<li><a target='_blank' href='" + window.base_url + product[i].master_seo_name + ".html?ref=" + id + "'><img src=\"" + product[i].image_url320 + "\" alt=''>";
                                        block += badgeHTML + "<h4>" + product[i].product + "</h4><p>Rs. " + price + "</p>";
                                        if (typeof discount !== 'undefined' && discount > 0) {
                                            block += "<span class='discount_off'>" + discount + "% off</span>";
                                        }
                                        block += obHTML + "</a></li>";
                                    }
                                    if (digi_fbb == 1 && id == "t_3") block += "<li class='view_all'><a href='" + current_base_url + "electronic-accessories.html" + "?" + filter + "&ref=va" + id + "'><img src='//cdn.shopclues.net/images/ui/view_all.png' alt=''></a></li></ul>";else block += "<li class='view_all'><a href='" + window.base_url + self.seoPath + "?" + filter + "&ref=va" + id + "'><img src='//cdn.shopclues.net/images/ui/view_all.png' alt=''></a></li></ul>";
                                    //block+="<li class='vall'><a target='_blank' href='"+window.base_url+self.seoPath+"?"+filter+"&ref=va"+id+"'><img src='http://cdn.shopclues.net/images/ui/view_all.png' alt=''></a></li></ul></div></div></div>";
                                    $('.hack').hide();
                                    $('#responseLoading').hide();
                                    $('.tab_panel').after(block);
                                    $("#l" + id).slick({
                                        dots: false,
                                        infinite: false,
                                        slidesToShow: 5,
                                        slidesToScroll: 3
                                    });
                                } catch (error) {
                                    $('#responseLoading').hide();
                                    console.log(error);
                                }
                                echo(window, document);
                            } else {
                                $('#responseLoading').hide();
                            }
                        },
                        error: function error(jqXHR, textStatus) {
                            if (textStatus === 'timeout' || textStatus === 'error') {
                                $('#responseLoading').hide();
                            }
                        },
                        timeout: 3000
                    });
                }
            };
            if (typeof pId !== 'undefined' && typeof window.enable_buy_now !== 'undefined' && window.enable_buy_now == 1) {
                new PdpBigsale(pId);
            }
        }(window, document);
        window.homesalebooster = function (window, document) {
            function salebooster(visitorId, pid, userId, sourceType) {
                var url = window.base_url + 'ajaxCall/saleBooster';
                var data = { 'visitor_id': visitorId, 'pid': pid };
                if (userId) {
                    data['userId'] = atob(userId);
                }
                if (sourceType) {
                    data['return_promotion'] = 1;
                    data['source_type'] = sourceType;
                }
                if (userSegment) {
                    data['user_segment'] = userSegment;
                }
                $.ajax({
                    type: 'GET',
                    data: data,
                    url: url,
                    success: function success(resp) {
                        resp = resp.trim() !== '' ? JSON.parse(resp.trim()) : '';
                        if (resp.status == 200 && resp !== '') {
                            $.when(saleboosterRespHandle(resp, sourceType)).then(getTotalCB());
                        }
                    },
                    error: function error(jqXHR, textStatus) {}
                });
            }
            function saleboosterRespHandle(resp, sourceType) {
                try {
                    var products = resp.response.products;
                    var render = '';
                    var count = 0;
                    if (products['visitor'].length > 0 && typeof products['visitor'][0]['discount_value'] !== 'undefined' && typeof products['visitor'][0]['percentage_discount_by_value'] !== 'undefined') {
                        if (localStorage.getItem('discount_instruction') === null) {
                            $('.t_overlay').show();
                            localStorage.setItem('discount_instruction', 1);
                        }
                        if (typeof _satellite !== 'undefined') {
                            window.SBoffer = products['visitor'][0]['discount_type'];
                            _satellite.track('SBoffer');
                        }
                        var price = parseInt($('.f_price').attr('data-attr'));
                        price = Math.round(price - parseInt(products['visitor'][0]['discount_value'])).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        var discount_percent = isNaN(parseInt($('.discount').attr('data-attr'))) ? 0 : parseInt($('.discount').attr('data-attr'));
                        discount_percent = Math.round(100 - (100 - discount_percent) * (100 - parseInt(products['visitor'][0]['percentage_discount_by_value'])) / 100);
                        $('.f_price').html('Rs.' + price);
                        $('.f_price').attr('data-attr', price);
                        if ($('.discount').length > 0) {
                            $('.discount').text(discount_percent + '% off');
                        } else {
                            var render_discount = "<span class='discount'>" + discount_percent + "% off</span>";
                            $('.price').append(render_discount);
                        }
                        $('.discount').attr('data-attr', discount_percent);
                        render += "<span class='seller_discount'><span>Ã¢â€šÂ¹" + products['visitor'][0]['discount_value'] + " extra discount applied for you.</span></span><span class='exp_date'> (Till " + products['visitor'][0]['valid_till'] + " )</span>";
                        $('.ext_discount').append(render);
                    } else if ((window.location.href.indexOf('utm_source=Criteo') !== -1 || helperFunctions.ReadCookie('source_1d') === 'Criteo' || window.location.href.indexOf('utm_source=facebook') !== -1 || helperFunctions.ReadCookie('source_1d') === 'facebook' || SC.getParameterByName('SB_tracking') !== '') && typeof sourceType === 'undefined') {
                        var sourceType = SC.getParameterByName('utm_source') || '';
                        salebooster(visitorId, window.pId, userId, sourceType);
                    }
                } catch (error) {
                    console.log(error);
                }
            };
            var userId = helperFunctions.ReadCookie("user_id") || helperFunctions.ReadCookie("scumd");
            var userSegment = helperFunctions.ReadCookie("user_segment");
            if (sessionStorage.getItem('promotion_available') !== null) {
                var promotion_available = sessionStorage.getItem('promotion_available');
            } else {
                var promotion_available = 1;
            }
            if (sessionStorage.getItem('userLogIn') == 0 && userId !== '') {
                promotion_available = 1;
            }
            if (userSegment !== '') {
                promotion_available = 1;
            }
            if (visitorId !== '' && visitorId !== null && (window.salesboosterPDP == 1 || userSegment !== '' && userId !== '') && typeof window.pId !== 'undefined' && saleboosterOnoff == 1) {
                if (promotion_available == 1) {
                    salebooster(visitorId, window.pId, userId);
                } else if (window.location.href.indexOf('utm_source=Criteo') !== -1 || helperFunctions.ReadCookie('source_1d') === 'Criteo' || window.location.href.indexOf('utm_source=facebook') !== -1 || helperFunctions.ReadCookie('source_1d') === 'facebook' || SC.getParameterByName('SB_tracking') !== '') {
                    var sourceType = SC.getParameterByName('utm_source') || '';
                    salebooster(visitorId, window.pId, userId, sourceType);
                }
            } else {
                getTotalCB();
            }
        }(window, document);

        /***/ }),
    /* 7 */,
    /* 8 */,
    /* 9 */,
    /* 10 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var commonjs = __webpack_require__(1);
        window.recentlyViewedAll = commonjs.recentlyViewedAll;
        window.recentlyViewed = commonjs.recentlyViewed;
        window.recentMFCViewed = commonjs.recentMFCViewed;
        var product_detailjs = __webpack_require__(6);
        window.mouseoverNavigation = commonjs.mouseoverNavigation;
        window.trackingData = commonjs.trackingData;
        window.autoComplete = commonjs.autoComplete;
        window.loginPopup = commonjs.loginPopup;
        window.getLoginStatus = commonjs.getLoginStatus;
        window.pincodePopup = commonjs.pincodePopup;
        window.isNumberKey = commonjs.isNumberKey;
        window.searchTrigger = commonjs.searchTrigger;
        window.atom_cart_load_data = commonjs.atom_cart_load_data;

        /***/ })
    /******/ ]); /******/  (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/ 		if(installedModules[moduleId]) {
            /******/ 			return installedModules[moduleId].exports;
            /******/ 		}
        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = installedModules[moduleId] = {
            /******/ 			i: moduleId,
            /******/ 			l: false,
            /******/ 			exports: {}
            /******/ 		};
        /******/
        /******/ 		// Execute the module function
        /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Flag the module as loaded
        /******/ 		module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;
    /******/
    /******/ 	// identity function for calling harmony imports with the correct context
    /******/ 	__webpack_require__.i = function(value) { return value; };
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function(exports, name, getter) {
        /******/ 		if(!__webpack_require__.o(exports, name)) {
            /******/ 			Object.defineProperty(exports, name, {
                /******/ 				configurable: false,
                /******/ 				enumerable: true,
                /******/ 				get: getter
                /******/ 			});
            /******/ 		}
        /******/ 	};
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function(module) {
        /******/ 		var getter = module && module.__esModule ?
            /******/ 			function getDefault() { return module['default']; } :
            /******/ 			function getModuleExports() { return module; };
        /******/ 		__webpack_require__.d(getter, 'a', getter);
        /******/ 		return getter;
        /******/ 	};
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "";
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = 10);
    /******/ })
/************************************************************************/
/******/ ([
    /* 0 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var helper_functions = function () {
            "use strict";

            var helperFunctions = {};

            helperFunctions.ReadCookie = function (cookieName) {
                var theCookie = " " + document.cookie;
                var ind = theCookie.indexOf(" " + cookieName + "=");
                if (ind == -1) ind = theCookie.indexOf(";" + cookieName + "=");
                if (ind == -1 || cookieName === "") return "";
                var ind1 = theCookie.indexOf(";", ind + 1);
                if (ind1 == -1) ind1 = theCookie.length;
                return unescape(theCookie.substring(ind + cookieName.length + 2, ind1));
            };
            helperFunctions.SetCookie = function (cookieName, cookieValue, nDays, domain) {
                var today = new Date();
                var expire = new Date();
                if (nDays == null || nDays == 0) nDays = 1;
                expire.setTime(today.getTime() + 24 * 3600000 * nDays);
                //console.log(today.getTime() + 3600000*nDays);
                if (domain != '') {
                    document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString() + ";domain=" + domain + ";path=/";
                } else {
                    document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString();
                }
            };
            helperFunctions.getScrollXY = function () {
                var scrOfX = 0,
                    scrOfY = 0;
                if (typeof window.pageYOffset == "number") {
                    scrOfY = window.pageYOffset;
                    scrOfX = window.pageXOffset;
                } else {
                    if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
                        scrOfY = document.body.scrollTop;
                        scrOfX = document.body.scrollLeft;
                    } else {
                        if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                            scrOfY = document.documentElement.scrollTop;
                            scrOfX = document.documentElement.scrollLeft;
                        }
                    }
                }
                return [scrOfX, scrOfY];
            };
            helperFunctions.getDocHeight = function () {
                var D = document;
                return Math.max(D.body.scrollHeight, D.documentElement.scrollHeight, D.body.offsetHeight, D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight);
            };
            return helperFunctions;
        }();

        module.exports = helper_functions;

        /***/ }),
    /* 1 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        /*
         * jQuery throttle / debounce - v1.1 - 3/7/2010
         * http://benalman.com/projects/jquery-throttle-debounce-plugin/
         */
        var commonjs = function () {
            var helperFunctions = __webpack_require__(0);
            var localforage = __webpack_require__(2);
            var ajaxHitFired = {};
            var subcatHeadingData = {};
            var extraLeafData = '';
            var extraCount = 0;
            var new_atom_checkout = 1;
            var controller_flag = 1;
            new_atom_checkout = parseInt(new_atom_checkout);
            var atom_cart_data = '';
            var atom_cart_error = 0;
            var atom_cart_count = 0;
            var js_cart_show = false;
            var ssl_page = true;
            var omsignuploginpageload = 'signuploginpageload';
            var get_login_html_processing = false;

            if (visitorId != 'undefined' && visitorId != '') {
                if (!ReadCookie('ruserd')) {
                    document.cookie = "ruserd=slogn; expires=0; path=/";
                    var api_name = "v11/repeateduser?key=d42121c70dda5edfgd1df6633fdb36c0";
                    var date_ins = new Date();
                    var dateStr = date_ins.toGMTString();
                    var token_e = "45cadac46b1dc04186c1fd1d2b1ab008";
                    var auth = btoa(api_name + token_e + dateStr);
                    $.ajax({
                        url: "https://api.shopclues.com/api/" + api_name,
                        data: { platform: "D", user_id: visitorId },
                        headers: { "Authorization": auth, "X-Date": dateStr, "X-Source": "RN" },
                        success: function success(result) {
                            if (result.status != '0') {
                                if (ReadCookie('ruserd')) {
                                    localStorage.setItem('comruser', result.response[0].groups);
                                }
                            } else {
                                localStorage.setItem('comruser', 'No Record');
                            }
                            !function (f, b, e, v, n, t, s) {
                                if (f.fbq) return;n = f.fbq = function () {
                                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                                };if (!f._fbq) f._fbq = n;
                                n.push = n;n.loaded = !0;n.version = '2.0';n.queue = [];t = b.createElement(e);t.async = !0;
                                t.src = v;s = b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t, s);
                            }(window, document, 'script', '//connect.facebook.net/en_US/fbevents.js');

                            fbq('init', '243538709818120');
                            fbq('init', '291034024747680');
                            fbq('track', 'PageView');
                            fbq('trackCustom', 'UserGroups', {
                                'Groups': localStorage.comruser
                            });
                        },
                        error: function error(result) {
                            localStorage.setItem('comruser', 'ajax error');
                            console.log(result);
                        }
                    });
                }
            } else {
                localStorage.setItem('comruser', 'Visitor Not Found');
            }
            if (localStorage.getItem('comruser') == null) {
                localStorage.setItem('comruser', 'Default');
            }

            function delete_cookie(name, path, domain) {
                if (helperFunctions.ReadCookie(name)) {
                    document.cookie = name + "=" + (path ? ";path=" + path : "") + (domain ? ";domain=" + domain : "") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
                }
            }

            function pincodePopup() {
                $('#common_overlay').fadeIn(1000);
                $('.pincodeModel').show();
                $('.pincode_section').show();
            }

            //If not logged in then only fetch HTML
            /*var _login_name = helperFunctions.ReadCookie('scun');
             if (_login_name === undefined || _login_name == null || _login_name.length <= 0 || _login_name=='null') {
             if (window.coreJSLoaded)
             get_login_html();
             else
             document.addEventListener("coreJSLoaded", get_login_html);
             }*/

            //If showlogin_popup cookie set then get ogin html
            var showlogin_popup = helperFunctions.ReadCookie('showlogin_popup');
            if (showlogin_popup === undefined || showlogin_popup == null || showlogin_popup.length <= 0 || showlogin_popup == 'null') {
                //
            } else {
                get_login_html();
            }

            function get_login_html() {
                //if new login config is true - then only new_login_url is defined
                if (typeof new_login_url !== "undefined" && new_login_url !== null) {
                    var loginurl = new_login_url + 'popup';
                    if (get_login_html_processing == false) {
                        get_login_html_processing = true;
                    } else {
                        return;
                    }
                    if ($('#common_popupModel #login').length == 0) {
                        $.ajax({ type: 'GET',
                            url: loginurl,
                            cache: false,
                            xhrFields: {
                                withCredentials: true
                            },
                            success: function success(data) {

                                $("#loginModelBox").html(data);
                                get_login_html_processing = false;
                                var showlogin_popup = ReadCookievalue('showlogin_popup');
                                if (showlogin_popup === undefined || showlogin_popup == null || showlogin_popup.length <= 0 || showlogin_popup == 'null') {} else {
                                    loginPopup();
                                    delete_cookie('showlogin_popup', '/', '.shopclues.com');

                                    var omloginstring = "";
                                    omloginstring = decodeURIComponent(ReadCookievalue('s_lgnc'));
                                    if (omloginstring === undefined || omloginstring == null || omloginstring.length <= 0 || omloginstring == 'null') {} else {
                                        if (typeof _satellite !== 'undefined') {
                                            _satellite.track('signuplogintrigger');
                                            delete_cookie('s_lgnc', '/', '.shopclues.com');
                                        }
                                    }
                                }
                            }
                        });
                    }
                }
            }

            var loginPopup = function loginPopup(loginredirect_desktop) {
                $('#a_close_id').addClass('close_login').removeClass('close');
                if (get_login_html_processing == true) {
                    //
                } else {
                    //False
                    if ($('#common_popupModel #login').length > 0) {
                        //no ajax
                    } else {
                        //hit again
                        get_login_html();
                    }
                }
                if (typeof _satellite !== 'undefined') {
                    _satellite.track('signuploginpageload');
                }
                var expire = new Date();
                var today = new Date();
                expire.setTime(today.getTime() + 3600000);
                //document.cookie = 'signin_clicked' + "=" + true + ";expires=" + expire.toGMTString() + ";domain=" + 'shopclues.com' + ";path=/";

                var checkLogin = null; //helperFunctions.ReadCookievalue('scumd');
                if (checkLogin === undefined || checkLogin == null || checkLogin.length <= 0) {

                    if (loginredirect_desktop === undefined || loginredirect_desktop == null || loginredirect_desktop.length <= 0) {
                        var loginredirect_desktop_cookie = ReadCookievalue('loginredirect_desktop'); //if user enters direct url of myaccounts (cookie already set)
                        if (loginredirect_desktop_cookie === undefined || loginredirect_desktop_cookie == null || loginredirect_desktop_cookie.length <= 0) {
                            document.cookie = 'loginredirect_desktop' + "=" + escape(window.location.href) + ";expires=" + expire.toGMTString() + ";domain=" + 'shopclues.com' + ";path=/";
                        } else {
                            //same as existing value
                        }
                    } else {
                        document.cookie = 'loginredirect_desktop' + "=" + escape(loginredirect_desktop) + ";expires=" + expire.toGMTString() + ";domain=" + 'shopclues.com' + ";path=/";
                    }

                    $('#loginModelBox').show();
                    $('#common_overlay').fadeIn(1000);
                    $('#common_popupModel').show();
                } else {
                    if (loginredirect_desktop === undefined || loginredirect_desktop == null || loginredirect_desktop.length <= 0) {
                        window.location.reload();
                    } else {
                        window.location = loginredirect_desktop;
                    }
                }
            };

            function ReadCookievalue(name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1, c.length);
                    }if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            }

            function isNumberKey(evt) {
                var charCode = evt.which ? evt.which : event.keyCode;
                if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;return true;
            }
            if ($('.cLocation').length > 0) {
                try {
                    var message = '';
                    if (helperFunctions.ReadCookie('pincode') !== '') {
                        message = '<span id="cPin">' + helperFunctions.ReadCookie('pincode') + '</span><a onclick="pincodePopup()" href="javascript:void(0);">Change</a>';
                    } else {
                        message = '<span id="cPin">Share</span><a onclick="pincodePopup()" href="javascript:void(0);">Location</a>';
                    }
                    $(".cLocation").append(message);
                    $('.cLocation').show();
                } catch (e) {}
            }
            $('#autocomplete').on('focusout', function () {
                setTimeout(function () {
                    $('#common_overlay').hide();
                    $('#common_overlay').css('z-index', 1005);
                }, 1000);
            });

            if (!helperFunctions.ReadCookie('abexp') || helperFunctions.ReadCookie('abexp') === '') {
                //helperFunctions.SetCookie('abexp','expB',abDays,cookieDomain);
            }
            function getLoginStatus() {
                var name = helperFunctions.ReadCookie('scun');
                name = atob(decodeURIComponent(name)).replace(/"/g, '');
                if (name) {
                    if (name.length > 8) {
                        name = name.substr(0, 8);
                    }
                    var viphtml = '';
                    var vipurl = 'https://www.shopclues.com/vip-club.html';
                    if (ReadCookie('user_segment') == 'LC') {
                        $('#vip_on').addClass('vip_on');
                        viphtml = '<div class="vip_flag_sec" id="vip_icn"><div class="flag"></div></div>';
                    }
                    $('#sign-in').removeClass('hide');
                    $('#account').removeClass('hide');
                    $('#sc_uname').show();
                    $('#sign-in').hide();
                    $('#account').show();
                    $('#sc_uname a').first().html('Hi ' + name + '<i></i>');
                    $('#account li.heading a').html(name);
                    $('.actLink_heading a').html('<span class="user_icn"></span>' + viphtml + name);
                    $('#sc_uname').on('mouseover', function () {
                        //$('.sc_actLinks').show();
                    });
                    var call_html = $('#call_us_content').html();
                    $('#call_us').html(call_html);
                    var wish_html = $('#wishlist_d_content').html();
                    $('#wishlist_d').html(wish_html);
                } else {
                    $('#sign-in').removeClass('hide');
                    $('#account').removeClass('hide');
                    $('#sign-in').show();
                    $('#account').hide();
                }
            }
            getLoginStatus();
            if (document.getElementById('vip_icn') !== null) {
                document.getElementById('vip_icn').addEventListener("click", function () {
                    window.location.href = '//www.shopclues.com/vip-club.html';
                });
            }
            function loadNavData(allgid) {
                if (allgid.length > 0 && (typeof localStorage.getItem('allData') == 'undefined' || parseInt(localStorage.getItem('allData')) !== 1)) {
                    var gids = btoa(allgid); //allgid.join('&')
                    $.ajax({
                        type: "GET",
                        url: base_url + "ajaxCall/navigation?allGid=1&gid=" + gids,
                        cache: true,
                        success: function success(result) {
                            localStorage.setItem('allData', 1);
                            if (result != '' && result != 'null') {
                                var dataResult = JSON.parse(result);
                                if (typeof dataResult.gid != 'undefined') {
                                    var arrGid = Object.keys(dataResult.gid);
                                    for (var i = 0; i < arrGid.length; i++) {
                                        if (dataResult.gid[arrGid[i]].response != '') {
                                            var tmstmp = Math.round(new Date().getTime() / 1000);
                                            var gidObj = { 'timestamp': tmstmp, 'data': dataResult.gid[arrGid[i]].response };
                                            localforage.setItem('subcat_list_' + arrGid[i], gidObj);
                                            //localStorage.setItem('subcat_list_' + arrGid[i], JSON.stringify(dataResult.gid[arrGid[i]].response));
                                        }
                                    }
                                }
                            }
                        },
                        error: function error() {}
                    });
                }
            }
            if (ConfigLoadAll && typeof allGids !== 'undefined') {
                window.onload = function () {
                    loadNavData(allGids);
                };
            }
            var mouseoverNavigation = function mouseoverNavigation(obj, loadBeforeDom) {
                if (typeof loadBeforeDom != 'undefined') {
                    $('.left_menu_wrap > .overlay').hide();
                } else {
                    $('.left_menu_wrap > .overlay').show();
                }
                var navId = obj.id.split('_')[1];
                if (typeof localforage != 'undefined') {
                    localforage.getItem('subcat_list_' + navId, function (err, value) {
                        if (err) {
                            navigationAjax(navId);
                        } else {
                            if (value !== null && value !== '') {
                                var tmstmp = Math.round(new Date().getTime() / 1000);
                                var gidData = value;
                                var gidExpire = gidData.timestamp;
                                if (tmstmp - gidExpire < 43200) {
                                    if (gidData.data != 'undefined' && gidData.data !== '') {
                                        populateNavData(JSON.stringify(gidData.data), navId);
                                    } else {
                                        navigationAjax(navId);
                                    }
                                } else {
                                    navigationAjax(navId);
                                }
                            } else {
                                navigationAjax(navId);
                            }
                        }
                    });
                }
            };
            var trackCountLeaf = 0;
            var trackingExtraCount = 0;
            var trackHeading = 0;

            function navigationAjax(navId) {
                $.ajax({
                    type: "GET",
                    url: base_url + "ajaxCall/navigation?nav=" + navId,
                    cache: true,
                    success: function success(result) {
                        ajaxHitFired[navId] = 0;
                        if (result != '' && result != 'null') {
                            var dataResult = JSON.parse(result);
                            if (typeof dataResult.gid != 'undefined') {
                                if (typeof localforage != 'undefined') {
                                    var tmstmp = Math.round(new Date().getTime() / 1000);
                                    var gidObj = { 'timestamp': tmstmp, 'data': dataResult.gid[navId].response };
                                    localforage.setItem('subcat_list_' + navId, gidObj);
                                }
                                extraLeafData = '';
                                extraCount = 0;
                                populateNavData(JSON.stringify(dataResult.gid[navId].response), navId);
                            }
                        } else {
                            $('#nav_loader_' + navId).hide();
                            $('#rightpanel_' + navId).html('Data not found');
                        }
                    },
                    error: function error() {}
                });
            }
            function populateNavData(result, gid) {
                //Pagename-4|Position-6|Group-15|Meta-11|Sub-8|Leaf-8|NA|NA|CT@Category-31
                //$('#nav_loader_' + gid).remove();
                if ($('#rightpanel_' + gid).length === 0 && result !== '' && result != 'null') {
                    var dataResult = JSON.parse(result);
                    var columnCount = parseInt(dataResult.column.length) + 1;
                    var styleWidth = parseInt(dataResult.column.length) * ConfigColumnWidth; // for small screen scroll handling
                    var subcatDataHtml = '';
                    var htmlTopHeading = '';
                    extraLeafData = '';
                    extraCount = 0;
                    for (var i = 0; i < columnCount; i++) {
                        var mainDiv = '<div class="menu_wrap_sub" id="rightpanel_' + gid + '">';
                        if (typeof dataResult.column[i] == 'undefined' && extraLeafData != '') {
                            styleWidth = (i + 1) * ConfigColumnWidth;
                            if (styleWidth > ConfigColumnWidth * ConfigColumnCount) {
                                styleWidth = i * ConfigColumnWidth;
                                extraLeafData = '';
                            }
                        }
                        //htmlTopHeading = populateTopHeading(dataResult, gid, styleWidth);
                        var subCatMainDiv = '<div class="ul_menu_block">';
                        if ($('#top_header_' + gid).length > 0) {
                            htmlTopHeading = '';
                        } else {
                            mainDiv = mainDiv; //+ htmlTopHeading + '</div>';//uncomment this when you want to display top heading
                        }
                        if (typeof dataResult.column[i] != 'undefined' || extraLeafData != '' && styleWidth <= ConfigColumnWidth * ConfigColumnCount) {
                            var columnResult = dataResult.column[i];
                            var AllLeafCount = 0;
                            subcatDataHtml += '<div id="column_' + i + '" class="s_col">';
                            subcatDataHtml += '<ul class="list_blocks">';
                            if (extraLeafData != '') {
                                subcatDataHtml += extraLeafData;
                                AllLeafCount = extraCount;
                                extraCount = 0;
                            }
                            extraLeafData = '';

                            if (typeof dataResult.column[i] != 'undefined') {
                                for (var j = 0; j < columnResult.response.leaf_nav_list.length; j++) {
                                    if (typeof columnResult.response.leaf_nav_list[j] != 'undefined') {
                                        var currentHeading = columnResult.response.leaf_nav_list[j].leaf_heading_data;
                                        if (Object.keys(subcatHeadingData).length == 0 || currentHeading.top_heading_name != subcatHeadingData.top_heading_name) {
                                            subcatHeadingData = currentHeading;
                                            if (AllLeafCount <= ConfigRowCount) {
                                                trackCountLeaf = 0;
                                                if (i > 0 && trackingExtraCount > 0) {
                                                    trackHeading = trackingExtraCount;
                                                    trackingExtraCount = 0;
                                                }
                                                trackHeading++;
                                                subcatDataHtml += '<li class="g_heading" column="' + i + '" it="' + j + '">';
                                                if (subcatHeadingData.top_heading_url != '') {
                                                    if (subcatHeadingData.dynamic_url != null && subcatHeadingData.dynamic_url != '') {
                                                        if (subcatHeadingData.dynamic_url.indexOf('?') != -1) var html = '.html';else var html = '.html?';
                                                        subcatDataHtml += '<a target="_blank" href="' + base_url + subcatHeadingData.top_heading_url + html + subcatHeadingData.dynamic_url + '"alt="Home|CT3P' + trackHeading + '|' + dataResult.group_name.substring(-1, 10) + '|NA|' + subcatHeadingData.top_heading_name.substring(-1, 20) + '|NA|NA|NA|CT@' + subcatHeadingData.top_heading_name.substring(-1, 31) + '" onclick="trackingData(this)">';
                                                    } else {
                                                        subcatDataHtml += '<a target="_blank" href="' + base_url + subcatHeadingData.top_heading_url + '.html" alt="Home|CT3P' + trackHeading + '|' + dataResult.group_name.substring(-1, 10) + '|NA|' + subcatHeadingData.top_heading_name.substring(-1, 20) + '|NA|NA|NA|CT@' + subcatHeadingData.top_heading_name.substring(-1, 31) + '" onclick="trackingData(this)">';
                                                    }
                                                } else {
                                                    subcatDataHtml += '<span>';
                                                }
                                                if (subcatHeadingData.style_property.toUpperCase() == 'BOLD') {
                                                    subcatDataHtml += '<strong>' + subcatHeadingData.top_heading_name + '</strong>';
                                                } else {
                                                    subcatDataHtml += subcatHeadingData.top_heading_name;
                                                }
                                                if (subcatHeadingData.top_heading_url != '') {
                                                    subcatDataHtml += '</a>';
                                                } else {
                                                    subcatDataHtml += '</span>';
                                                }
                                                subcatDataHtml += '</li>';
                                            } else {
                                                trackingExtraCount++;
                                                trackHeading = 0;
                                                trackCountLeaf = 0;
                                                extraLeafData += '<li class="g_heading">';
                                                if (subcatHeadingData.top_heading_url != '') {
                                                    if (subcatHeadingData.dynamic_url != null && subcatHeadingData.dynamic_url != '') {
                                                        if (subcatHeadingData.dynamic_url.indexOf('?') != -1) var html = '.html';else var html = '.html?';
                                                        extraLeafData += '<a target="_blank" href="' + base_url + subcatHeadingData.top_heading_url + html + subcatHeadingData.dynamic_url + '"alt="Home|CT3P' + trackingExtraCount + '|' + dataResult.group_name.substring(-1, 10) + '|NA|' + subcatHeadingData.top_heading_name.substring(-1, 20) + '|NA|NA|NA|CT@' + subcatHeadingData.top_heading_name.substring(-1, 31) + '" onclick="trackingData(this)">';
                                                    } else {
                                                        extraLeafData += '<a target="_blank" href="' + base_url + subcatHeadingData.top_heading_url + '.html" alt="Home|CT3P' + trackingExtraCount + '|' + dataResult.group_name.substring(-1, 10) + '|NA|' + subcatHeadingData.top_heading_name.substring(-1, 20) + '|NA|NA|NA|CT@' + subcatHeadingData.top_heading_name.substring(-1, 31) + '" onclick="trackingData(this)">';
                                                    }
                                                } else {
                                                    extraLeafData += '<span>';
                                                }
                                                if (subcatHeadingData.style_property.toUpperCase() == 'BOLD') {
                                                    extraLeafData += '<strong>' + subcatHeadingData.top_heading_name + '</strong>';
                                                } else {
                                                    extraLeafData += subcatHeadingData.top_heading_name;
                                                }

                                                if (subcatHeadingData.top_heading_url != '') {
                                                    extraLeafData += '</a>';
                                                } else {
                                                    extraLeafData += '</span>';
                                                }
                                                extraLeafData += '</li>';
                                                extraCount++;
                                            }
                                            AllLeafCount++;
                                        }
                                        for (var k = 0; k < columnResult.response.leaf_nav_list[j].subcat_data.length; k++) {
                                            var leafData = columnResult.response.leaf_nav_list[j].subcat_data[k];
                                            if (leafData.sub_category_name != null) {
                                                if (AllLeafCount <= ConfigRowCount) {
                                                    if (leafData.style_property.toUpperCase() == 'EMPTY') {
                                                        subcatDataHtml += '<li>&nbsp;</li>';
                                                    } else {
                                                        subcatDataHtml += '<li><a ';
                                                        if (leafData.more_url != '' && leafData.more_url != null) {
                                                            subcatDataHtml += ' class="more" ';
                                                        }
                                                        if (leafData.dynamic_url != null && leafData.dynamic_url != '') {
                                                            if (leafData.dynamic_url.indexOf('?') != -1) var html = '.html';else var html = '.html?';
                                                            subcatDataHtml += 'target="_blank" href="' + base_url + leafData.sub_category_url + html + leafData.dynamic_url + '"alt="Home|CT4P' + (trackCountLeaf + 1) + '|' + dataResult.group_name.substring(-1, 10) + '|NA|' + currentHeading.top_heading_name.substring(-1, 20) + '|' + leafData.sub_category_name.substring(-1, 20) + '|NA|NA|' + 'CT@' + leafData.sub_category_name.substring(-1, 31) + '"';
                                                        } else {
                                                            subcatDataHtml += 'target="_blank" href="' + base_url + leafData.sub_category_url + '.html" alt="Home|CT4P' + (trackCountLeaf + 1) + '|' + dataResult.group_name.substring(-1, 10) + '|NA|' + currentHeading.top_heading_name.substring(-1, 20) + '|' + leafData.sub_category_name.substring(-1, 20) + '|NA|NA|' + 'CT@' + leafData.sub_category_name.substring(-1, 31) + '"';
                                                        }
                                                        subcatDataHtml += ' onclick="trackingData(this)">';

                                                        if (leafData.style_property.toUpperCase() == 'BOLD') {
                                                            subcatDataHtml += '<strong>' + leafData.sub_category_name + '</strong>';
                                                        } else {
                                                            subcatDataHtml += leafData.sub_category_name;
                                                        }
                                                        subcatDataHtml += '</a></li>';
                                                    }
                                                } else {

                                                    if (leafData.style_property.toUpperCase() == 'EMPTY') {
                                                        extraLeafData += '<li>&nbsp;</li>';
                                                    } else {
                                                        extraLeafData += '<li><a ';
                                                        if (leafData.more_url != '' && leafData.more_url != null) {
                                                            extraLeafData += ' class="more" ';
                                                        }
                                                        if (leafData.dynamic_url != null && leafData.dynamic_url != '') {
                                                            if (leafData.dynamic_url.indexOf('?') != -1) var html = '.html';else var html = '.html?';
                                                            extraLeafData += 'target="_blank" href="' + base_url + leafData.sub_category_url + html + leafData.dynamic_url + '"alt="Home|CT4P' + (trackCountLeaf + 1) + '|' + dataResult.group_name.substring(-1, 10) + '|NA|' + currentHeading.top_heading_name.substring(-1, 20) + '|' + leafData.sub_category_name.substring(-1, 20) + '|NA|NA|' + 'CT@' + leafData.sub_category_name.substring(-1, 31) + '"';
                                                        } else {
                                                            extraLeafData += 'target="_blank" href="' + base_url + leafData.sub_category_url + '.html" alt="Home|CT4P' + (trackCountLeaf + 1) + '|' + dataResult.group_name.substring(-1, 10) + '|NA|' + currentHeading.top_heading_name.substring(-1, 20) + '|' + leafData.sub_category_name.substring(-1, 20) + '|NA|NA|' + 'CT@' + leafData.sub_category_name.substring(-1, 31) + '"';
                                                        }
                                                        extraLeafData += '" onclick="trackingData(this)">';

                                                        if (leafData.style_property.toUpperCase() == 'BOLD') {
                                                            extraLeafData += '<strong>' + leafData.sub_category_name + '</strong>';
                                                        } else {
                                                            extraLeafData += leafData.sub_category_name;
                                                        }
                                                        extraLeafData += '</a></li>';
                                                    }
                                                    extraCount++;
                                                }
                                                AllLeafCount++;
                                                trackCountLeaf++;
                                            }
                                        }
                                    }
                                }
                            }
                            subcatDataHtml += '</ul></div>';
                        }
                    }
                    subCatMainDiv += subcatDataHtml;

                    mainDiv += subCatMainDiv;

                    $('#nav_' + gid).append(mainDiv + '</div></div>');
                }
            }
            function populateTopHeading(dataResult, gid, styleWidth) {
                var htmlTopHeading = '<div class="static_img_links" id="top_header_' + gid + '" style="width:' + styleWidth + 'px;">';
                for (var i = 0; i < dataResult.top_nav_list.length; i++) {
                    var topHeadingData = dataResult.top_nav_list[i];
                    if ($('#top_' + topHeadingData.menu_top_category_id).length == 0) htmlTopHeading += '<a id="top_' + topHeadingData.menu_top_category_id + '" target="_blank" href="' + base_url + topHeadingData.top_category_url + '.html" alt="Home|CT2P' + (i + 1) + '|' + dataResult.group_name.substring(-1, 15) + '|' + topHeadingData.heading_name.substring(-1, 11) + '|NA|NA|NA|NA|CT@' + topHeadingData.heading_name.substring(-1, 31) + '" onclick="trackingData(this)">';
                    if (topHeadingData.style_property.toUpperCase() == 'BOLD') {
                        htmlTopHeading += '<img src="http://cdn.shopclues.com/images/thumbnails/24678/320/320/ps414404191661441941846.jpg"><span><strong>' + topHeadingData.heading_name + '</strong></span></a>';
                    } else {
                        htmlTopHeading += '<img src="http://cdn.shopclues.com/images/thumbnails/24678/320/320/ps414404191661441941846.jpg"><span>' + topHeadingData.heading_name + '</span></a>';
                    }
                }

                return htmlTopHeading;
            }
            var trackingData = function trackingData(obj) {
                if ($(obj).attr('alt') !== undefined) {
                    var data = $(obj).attr('alt').split('|');
                    window.ctree = data[0] + "|" + data[1] + "|" + data[3] + "|" + data[2] + "|" + data[4] + "|" + data[5];
                } else {
                    window.ctree = "";
                }
                window.tracking = 'ctree';
                //console.log(ctree)
                if (typeof _satellite !== 'undefined') {
                    _satellite.track('NewHomePage_tracking');
                }
            };
            var zParam = search_source();
            var ab_testing = 0;
            var count_sc = 0;
            var autoComplete = function autoComplete() {
                var outp = document.getElementById("search-result");
                //var list = $('.srch_sugg_lst li').not('.heading');
                var oldins;
                var posi = -1;
                var words = new Array();
                var input;
                var key;
                outp.parentElement.style.display = 'block';
                microAjaxAutoComplete();
                function microAjaxAutoComplete() {
                    var qstr = document.getElementById("autocomplete").value;
                    //qstr = qstr.replace(/[^-_ a-zA-Z0-9"'&]/g, ' ');
                    //qstr = qstr.replace(new RegExp('-+', 'g'), '-');
                    //qstr = qstr.trim();
                    if (qstr.substring(qstr.length - 1) == " ") {
                        return false;
                    }
                    var autoCompleteItems = 10;
                    var acItems;
                    if (qstr.length >= 1 && qstr.trim() != "") {
                        $(".seaches_sugge li").removeClass('focus');
                        $('#search-result').show();
                        $('.recent_searches').hide();
                        $('.trending_srches').hide();
                        //qstr = qstr.replace(new RegExp('&', 'g'), '%26');
                        srch_sugg_panel();
                        if (typeof secure != 'undefined' && secure == 1) {
                            var url = secure_base_url + 'cart/autosuggest/' + qstr;
                        } else {
                            var url = base_url + 'ajaxCall/autosuggest';
                            url += '?qstr=' + qstr + '&z=' + zParam;
                        }
                        microAjax(url, function (data) {
                            data = JSON.parse(data);
                            var results = data;
                            acItems = results;
                            if (acItems.length !== 'undefined' && acItems.length > 1) {
                                count_sc = acItems.length;
                            }
                            init(acItems);
                            if (acItems.length == 0) {
                                clearOutput();
                            }
                        });
                    } else if (qstr.length < 1) {
                        var z = search_source();
                        // if (z==1) {
                        $('#search-result').hide();
                        if ($('.trending_srches li').length === 1) {
                            recentTrendSearch();
                        } else {
                            $('.trending_srches').show();
                            if ($('.recent_searches li').length > 1) {
                                $('.recent_searches').show();
                            }
                        }
                        /*} else {
                         clearOutput();
                         $('div.srch_sugg_lst').fadeOut('medium');
                         $('#common_overlay').fadeOut('medium');
                         setTimeout(function(){
                         //$('#common_overlay').css('z-index', 1005);
                         }, 1000);
                         }*/
                    }
                    document.onkeydown = keyHandler;
                }

                function setVisible(visi) {
                    var x = document.getElementsByClassName("srch_sugg_lst")[0];
                    var t = document.getElementById("autocomplete");
                }
                function init(suggestions) {
                    lookAt(suggestions);
                    setVisible("hidden");
                    //document.onkeydown = keygetter; //needed for Opera...
                    //document.onkeydown = keyHandler;
                }
                function lookAt(suggestions) {
                    var ins = document.getElementById("autocomplete").value;
                    if (posi > -1) ;else if (ins.length > 1) {
                        words = suggestions;
                        if (words.length > 0) {
                            clearOutput();
                            for (var i = 0; i < words.length; ++i) {
                                //if(words[i].label !== words[i].value){
                                addWord(words[i].value, words[i]);
                                //}
                            }

                            setVisible("visible");
                            input = document.getElementById("autocomplete").value;
                        } else {
                            setVisible("hidden");
                            posi = -1;
                        }
                    } else {
                        setVisible("hidden");
                        posi = -1;
                    }
                    oldins = ins;
                }
                /* This method is used to display the final result to the page in the form of dropdown.*/
                function addWord(word, urlFragment) {
                    var valu = document.getElementById("autocomplete").value;
                    var pincode = helperFunctions.ReadCookie('pincode');
                    var sp = document.createElement("li");
                    var anchor = document.createElement("a");
                    var urlFragmentlabel = urlFragment.label;
                    if (urlFragment.id) {
                        if (oldUiSearch == 1) {
                            var url = search_url + '?q=' + encodeURIComponent(urlFragment.value) + '&cid=' + encodeURIComponent(urlFragment.id) + '&auto_suggest=1&seq=' + urlFragment.suggestion_no + '&type=' + urlFragment.suggestion_type + '&count_sc=' + count;
                        } else {
                            var url = base_url + 'search?q=' + encodeURIComponent(urlFragment.value) + '&cid=' + encodeURIComponent(urlFragment.id) + '&auto_suggest=1&seq=' + urlFragment.suggestion_no + '&type=' + urlFragment.suggestion_type + '&token=' + valu + '&count=' + count_sc;
                        }
                        // if(pincode!="")
                        // {
                        //  url=url+'&pincode='+pincode;
                        // }
                        var z = search_source();
                        url += '&z=' + z;
                        anchor.setAttribute('href', url);
                        anchor.setAttribute('class', "anchorHighlight");
                        anchor.setAttribute('onclick', "setValue(" + urlFragment.label + ")");
                        //console.log(urlFragment.label.split("&nbsp;"));
                        var str = urlFragment.label.split("&nbsp;");
                        //console.log(str);
                        var str2 = "";
                        for (var i = 0; i < str.length; i++) {
                            if (str[i] != "") {
                                str2 = str2 + str[i] + "  ";
                            }
                        }
                        word = str2;
                    } else {
                        if (oldUiSearch == 1) {
                            var url = search_url + '?q=' + encodeURIComponent(urlFragment.value) + '&auto_suggest=1&seq=' + urlFragment.suggestion_no + '&type=' + urlFragment.suggestion_type + '&count=' + count_sc;
                        } else {
                            var url = base_url + 'search?q=' + encodeURIComponent(urlFragment.value) + '&auto_suggest=1&seq=' + urlFragment.suggestion_no + '&type=' + urlFragment.suggestion_type + '&token=' + valu + '&count=' + count_sc;
                        }
                        if (pincode != "") {
                            //url=url+'&pincode='+pincode;
                        }
                        var z = search_source();
                        url += '&z=' + z;
                        anchor.setAttribute('href', url);
                        anchor.setAttribute('class', "anchorHighlight");
                        anchor.setAttribute('onclick', "setValue(" + urlFragment.value + ")");
                    }
                    //var regEx = new RegExp(valu, "ig");
                    var tempValu = '<span class="highlight">' + valu + '</span>'; /* In order to highlight the enterd text by user */
                    word = word.replace(valu, tempValu);
                    anchor.innerHTML = word;
                    sp.appendChild(anchor);
                    //sp.onmouseover = mouseHandler;
                    //sp.onmouseout = mouseHandlerOut;
                    sp.onclick = mouseClick;
                    //$('#search-result ul').append(sp);
                    outp.appendChild(sp);
                }
                function clearOutput() {
                    while (outp.hasChildNodes()) {
                        var noten = outp.firstChild;
                        outp.removeChild(noten);
                    }
                    posi = -1;
                }

                function setColor(_posi, _color, _forg) {
                    $(outp.childNodes[_posi]).addClass('focus').siblings().removeClass('focus');
                    //outp.childNodes[_posi].style.background = _color;
                    //outp.childNodes[_posi].style.color = _forg;
                }
                function keygetter(event) {
                    if (!event && window.event) event = window.event;
                    if (event) key = event.keyCode;else key = event.which;
                }
                function keyHandler(event) {
                    if (document.getElementsByClassName("srch_sugg_lst")[0].style.display == "block") {
                        var textfield = document.getElementById("autocomplete");
                        //var start = textfield.selectionStart, end = textfield.selectionEnd;

                        if (event.keyCode == 40) //key down
                        {
                            if (words.length > 0 && posi < words.length - 1) {
                                if (posi >= 0) setColor(posi, "#fff", "black");else input = textfield.value;
                                setColor(++posi, "#f1f1f1", "white");
                                textfield.value = outp.childNodes[posi].firstChild.text;
                            } else {
                                if (posi < $(".seaches_sugge li").not('.heading').length - 1) {
                                    posi++;
                                    $(".seaches_sugge li").removeClass('focus');
                                    $(".seaches_sugge li").not('.heading').eq(posi).addClass('focus');
                                }
                            }
                        } else if (event.keyCode == 38) {
                            //Key up
                            if (words.length > 0 && posi >= 0) {
                                if (posi >= 1) {
                                    setColor(posi, "#fff", "black");
                                    setColor(--posi, "#f1f1f1", "white");
                                    textfield.value = outp.childNodes[posi].firstChild.text;
                                } else {
                                    setColor(posi, "#fff", "black");
                                    textfield.value = input;
                                    textfield.focus();
                                    posi--;
                                }
                                var start = textfield.value.length;
                                setTimeout(function () {
                                    textfield.setSelectionRange(start, start);
                                }, 0);
                            } else {
                                if (posi > 0) {
                                    posi--;
                                    $(".seaches_sugge li").removeClass('focus');
                                    $(".seaches_sugge li").not('.heading').eq(posi).addClass('focus');
                                }
                            }
                        } else if (event.keyCode == 27) {
                            // Esc
                            //textfield.value = input;
                            document.getElementsByClassName("srch_sugg_lst")[0].style.display = 'none';
                            setVisible("hidden");
                            clearOutput();
                            $('#common_overlay').fadeOut('medium');
                            posi = -1;
                            oldins = input;
                        } else if (event.keyCode == 8) {
                            // Backspace
                            posi = -1;
                            oldins = -1;
                            if (words.length === 0) {
                                clearOutput();
                            }
                        }
                    }
                }
                var mouseHandler = function mouseHandler() {
                    for (var i = 0; i < words.length; ++i) {
                        setColor(i, "white", "black");
                    }
                    //this.style.background = "blue";
                    this.style.color = "white";
                };
                var mouseHandlerOut = function mouseHandlerOut() {
                    this.style.background = "white";
                    this.style.color = "black";
                };
                var mouseClick = function mouseClick() {
                    document.getElementById("autocomplete").value = this.firstChild.nodeValue;
                    setVisible("hidden");
                    posi = -1;
                    oldins = this.firstChild.nodeValue;
                };
            };
            $('#autocomplete').bind('input', $.debounce(150, autoComplete));
            function search_source() {
                var z = '';
                var z_cookie;
                z_cookie = helperFunctions.ReadCookie('zettata_threshold');
                if (typeof z_cookie !== 'undefined' && z_cookie !== null && z_cookie != '') {
                    z = z_cookie;
                } else {
                    var d = new Date();
                    var cur_time = d.getTime();
                    var percentageZ;
                    if (percentage_z !== undefined) {
                        percentageZ = JSON.parse(percentage_z);
                        var remainder = cur_time % 100;
                        var floor = 0;
                        var ceil;
                        for (var i = 0; i < percentageZ.length; i++) {
                            ceil = floor + parseInt(percentageZ[i]);
                            if (remainder < ceil) {
                                z = i;
                                break;
                            }
                            floor = ceil;
                        }
                    }
                    // var val=cur_time%9;
                    // if(val < zettata_threshold){
                    //     z=1;
                    // }else{
                    //     z=0;
                    // }
                    helperFunctions.SetCookie('zettata_threshold', z, 12, cookieDomain);
                }
                return z;
            }
            function recentTrendSearch() {
                var render = '';
                var recentSearches = localStorage.getItem('recentSearches');
                var z = search_source();
                if (recentSearches !== null) {
                    recentSearches = JSON.parse(recentSearches).reverse();
                    for (var i = 0, l = recentSearches.length; i < l; i++) {
                        render += '<li><a href="' + base_url + 'search?q=' + encodeURIComponent(recentSearches[i]) + '&z=' + encodeURIComponent(z) + '&rc=1">' + recentSearches[i] + '</a></li>';
                    }
                    $('.recent_searches').append(render);
                    $('.recent_searches').show();
                    $('.clear_history').click(function (e) {
                        $(this).parent().siblings().remove();
                        $('.recent_searches').hide();
                        localStorage.removeItem('recentSearches');
                    });
                }
                if (typeof localforage !== 'undefined') {
                    localforage.getItem('trendingSearches', function (err, value) {
                        if (err) {
                            trendSearch();
                        } else {
                            if (value !== null) {
                                var tmstmp = Math.round(new Date().getTime() / 1000);
                                var value = JSON.parse(value);
                                var expire = value.timestamp;
                                if (tmstmp - expire < 432000) {
                                    respHandle(value.data);
                                } else {
                                    trendSearch();
                                }
                            } else {
                                trendSearch();
                            }
                        }
                    });
                } else {
                    trendSearch();
                }
                function trendSearch() {
                    var url = base_url + 'ajaxCall/searchTrending';
                    microAjax(url, function (data) {
                        if (typeof localforage !== 'undefined') {
                            var tmstmp = Math.round(new Date().getTime() / 1000);
                            localforage.setItem('trendingSearches', JSON.stringify({ 'timestamp': tmstmp, 'data': data }));
                        }
                        respHandle(data);
                    });
                }
                function respHandle(data) {
                    var response = JSON.parse(data);
                    render = '';
                    var z = search_source();
                    for (var i = 0, l = response.length; i < l; i++) {
                        render += "<li><a href='" + base_url + "search?q=" + encodeURIComponent(response[i].name) + "&z=" + encodeURIComponent(z) + "&trend=1'>" + response[i].name + "</a></li>";
                    }
                    $('.trending_srches').append(render);
                    $('.trending_srches').show();
                }
            }
            function searchTrigger() {
                if ($('.seaches_sugge .focus').length > 0) {
                    window.location = $('.seaches_sugge .focus a').attr('href');
                    return false;
                }
                var category = '';
                var pin = '';
                var cat = '';
                var cat = document.getElementById("catId");
                if (typeof cat !== 'undefined' && cat !== null) {
                    cat = document.getElementById('catId').value;
                    if (cat != '') {
                        category = '&cid=' + cat;
                    }
                } else {
                    category = '';
                }
                var val = document.getElementById('autocomplete').value;
                //val = val.replace(/[^-_ a-zA-Z0-9"'&]/g, ' ');
                //val = val.replace(new RegExp('-+', 'g'), '-');
                //val = val.trim();
                var pincode = helperFunctions.ReadCookie('pincode');
                if (pincode !== "") {
                    pin = '&pincode=' + pincode;
                }
                var zone = helperFunctions.ReadCookie('sc_loc');
                if (zone) {
                    zone = '&sc_z=' + zone;
                } else {
                    zone = '&sc_z=';
                }
                var z = search_source();
                if (val.length >= 1 && val.trim() != "") {
                    val = val.replace(new RegExp('&', 'g'), '%26');
                    if ($('#search-result .focus').length > 0) {
                        window.location = $('#search-result .focus a').attr('href');
                        return false;
                    }
                    if (oldUiSearch == 1) {
                        window.location = search_url + '?q=' + encodeURIComponent(val) + category + pin + zone + '&z=' + z + '&count=' + count_sc;
                    } else {
                        window.location = base_url + 'search?q=' + encodeURIComponent(val) + category + pin + zone + '&z=' + z + '&count=' + count_sc;
                    }
                    if (typeof ga !== 'undefined' && ga !== null) {
                        ga('send', 'event', 'Seacrh', 'Search', val);
                    }
                }
            }
            function atom_cart_load_data() {
                if (typeof cookieDelete !== 'undefined' && cookieDelete.length > 0) {
                    for (var key in cookieDelete) {
                        if (cookieDelete.hasOwnProperty(key)) {
                            delete_cookie(cookieDelete[key], '/', '');
                        }
                    }
                }
                if (new_atom_checkout && controller_flag) {
                    var base_url = "/" + 'atom/acart/getMicroCart';
                    $.ajax({
                        url: base_url,
                        type: 'POST',
                        data: { "return": 1 },
                        dataType: 'json',
                        success: function success(res) {
                            if (res.status === 200) {
                                console.log('res' + res);
                                atom_cart_count = res.response.atomcart_data.count;
                                atom_cart_data = res.response.atomcart_data;
                                atom_cart_count = parseInt(atom_cart_count);
                                sessionStorage.setItem('cart_update_time', res.cart_update_time);
                                if (atom_cart_count > 0) {
                                    $('.cart_icon_count').css('display', 'block');
                                    $('.cart_icon_count').show();
                                } else if (atom_cart_count == 0) {
                                    $('.cart_icon_count').css('display', 'none');
                                    $('.cart_icon_count').hide();
                                }
                                if (atom_cart_count > 0 && atom_cart_data.count > 0) {
                                    fn_get_atom_cart(atom_cart_data);
                                }
                            } else {
                                atom_cart_error = 0;
                            }
                        },
                        error: function error(res) {
                            atom_cart_error = 1;
                        }
                    });
                }

                var wishlist_url = "/atom/acart/getWishlist?source=counter";
                $.ajax({
                    url: wishlist_url,
                    type: 'POST',
                    data: { "return": 1 },
                    dataType: 'json',
                    cache: false,
                    success: function success(count) {
                        if (count != null && count != "" && count > 0) {
                            $('#wishlist_cccount').css('display', '');
                            $('#wishlist_cccount').html(count);
                        }
                    }
                });
            }

            if (window.coreJSLoaded) atom_cart_load_data();else document.addEventListener("coreJSLoaded", atom_cart_load_data);

            $('#promo_strip').click(function (e) {
                var tileNumber = $(e.target).attr('id').split('-')[1];
                var rev = $(e.target).attr('rev');
                window.Value = "Home|TN" + tileNumber + "|||||TopNavigatin@" + rev;
                hdrTrking();
            });

            $('#sell_with_us').click(function () {
                window.Value = "Homepage|HeaderLinks|Sell With Us";
                hdrTrking();
            });
            $('#call_us').click(function () {
                window.Value = "Homepage|HeaderLinks|Call Us";
                hdrTrking();
            });
            $('#sign-in').click(function () {
                window.Value = "Homepage|HeaderLinks| Sign In";
                hdrTrking();
            });
            $('.cLocation a').click(function (e) {
                window.Value = "Homepage|HeaderLinks|change location";
                hdrTrking();
            });
            $('.sc_android').click(function (e) {
                window.Value = "Homepage|HeaderLinks|Android";
                hdrTrking();
            });
            $('.sc_apple').click(function (e) {
                window.Value = "Homepage|HeaderLinks|Apple";
                hdrTrking();
            });
            $('.sc_windows').click(function (e) {
                window.Value = "Homepage|HeaderLinks|Windows";
                hdrTrking();
            });
            $('.whishlist_ic').click(function (e) {
                window.Value = "Homepage|HeaderLinks|Wishlist";
                hdrTrking();
            });
            function hdrTrking() {
                window.Campaign = "Others";
                window.PFM = "HomeHeaders";
                if (typeof _satellite !== 'undefined') {
                    _satellite.track('NewHomePage_tracking');
                }
            }
            // Hide Header on on scroll down
            var didScroll;
            var lastScrollTop = 0;
            var delta = 5;
            var navbarHeight = $('.main_navigation .ffix').outerHeight();

            $(window).scroll(function (event) {
                didScroll = true;
            });

            setInterval(function () {
                if (didScroll) {
                    hasScrolled();
                    didScroll = false;
                }
            }, 250);

            function hasScrolled() {
                var st = $(this).scrollTop();

                // Make sure they scroll more than delta
                if (Math.abs(lastScrollTop - st) <= delta) return;

                // If they scrolled down and are past the navbar, add class .nav-up.
                // This is necessary so you never see what is "behind" the navbar.
                if (st > lastScrollTop && st > navbarHeight) {
                    // Scroll Down
                    $('.main_navigation .ffix').removeClass('nav-down').addClass('nav-up');
                    $('.ffix_header').removeClass("head_down").addClass("head_up");
                } else {
                    // Scroll Up
                    if (st + $(window).height() < $(document).height()) {
                        $('.main_navigation .ffix').removeClass('nav-up').addClass('nav-down');
                        $('.ffix_header').removeClass('head_up').addClass("head_down");
                    }
                }

                lastScrollTop = st;
            }
            //Click event to scroll to top
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('.scrollToTop').fadeIn();
                } else {
                    $('.scrollToTop').fadeOut();
                }
            });
            $('.scrollToTop').click(function () {
                $('html, body').animate({ scrollTop: 0 }, 800);
                return false;
            });

            var recentlyViewed = {
                keyname: "recently_viewed",
                getItems: function getItems(param) {
                    var oldValues = localStorage.getItem(this.keyname);
                    if (oldValues) {
                        try {
                            oldValues = JSON.parse(oldValues);
                        } catch (e) {
                            console.log(e);
                            return false;
                        }
                        return oldValues.reverse();
                    } else return [];
                },
                setItem: function setItem(param) {
                    if (!param) return false;
                    var oldValues = localStorage.getItem(this.keyname);
                    if (oldValues) {
                        try {
                            oldValues = JSON.parse(oldValues);
                        } catch (e) {
                            console.log(e);
                            return false;
                        }
                    } else oldValues = [];
                    var newId = param.id;
                    for (var i = 0; i < oldValues.length; i++) {
                        if (oldValues[i].id == newId) {
                            oldValues.splice(i, 1);
                            break;
                        }
                    };
                    if (oldValues.length >= 20) oldValues.splice(0, oldValues.length - 19);
                    oldValues.push(param);
                    localStorage.setItem(this.keyname, JSON.stringify(oldValues));
                    return true;
                }
            };

            function recentlyViewedAll(param, rva_length) {
                if (param && rva_length) {
                    var rva_key = "recently_viewed_all";
                    var oldValues = localStorage.getItem(rva_key);
                    if (oldValues) {
                        try {
                            oldValues = JSON.parse(oldValues);
                        } catch (e) {}
                    } else {
                        oldValues = { 'pid': [], "mid": [], "lid": [] };
                    }
                    // siteReferer is set on the basis of the type of page the user opened  before coming to a PDP.
                    var lastPage = localStorage.getItem('siteReferer') || "NA";
                    var requiredLen = rva_length - 1; // if value from config is n ,then  we will use n-1 as our length to meet our requirements.
                    for (var paramkey in param) {
                        if (paramkey == "pid") {
                            var key = param[paramkey];
                            var obj = {};
                            obj[key] = lastPage;

                            //Handling when previous stored value's length exceeds the required length.
                            if (oldValues.pid.length > requiredLen) {
                                oldValues.pid.splice(0, oldValues.pid.length - requiredLen);
                                oldValues.mid.splice(0, oldValues.mid.length - requiredLen);
                                oldValues.lid.splice(0, oldValues.lid.length - requiredLen);
                            }

                            // Handling of duplicate entry
                            var newPid = param.pid;
                            for (i = 0; i < oldValues.pid.length; i++) {
                                var oldPid = Object.keys(oldValues.pid[i]);
                                if (oldPid[0] == newPid) {
                                    oldValues.pid.splice(i, 1);
                                    oldValues.mid.splice(i, 1);
                                    oldValues.lid.splice(i, 1);
                                    break;
                                }
                            }
                            oldValues.pid.push(obj);
                            localStorage.setItem(rva_key, JSON.stringify(oldValues));
                        }

                        if (paramkey == "mid") {
                            var key = param[paramkey];
                            var obj = {};
                            obj[key] = lastPage;
                            oldValues.mid.push(obj);
                            localStorage.setItem(rva_key, JSON.stringify(oldValues));
                        }
                        if (paramkey == "lid") {
                            var key = param[paramkey];
                            var obj = {};
                            obj[key] = lastPage;
                            oldValues.lid.push(obj);
                            localStorage.setItem(rva_key, JSON.stringify(oldValues));
                        }
                    }
                    localStorage.setItem('siteReferer', 'PDP'); // as this function is called on PDP  therefore siteReferer is set as PDP.
                }
            }

            var recentMFCViewed = {
                keyname: "recent_mfc_viewed",
                getItem: function getItem(param) {
                    var oldValues = sessionStorage.getItem(this.keyname);
                    if (oldValues) {
                        try {
                            oldValues = JSON.parse(oldValues);
                        } catch (e) {
                            console.log(e);
                            return false;
                        }
                        return oldValues.reverse();
                    } else return [];
                },
                setItem: function setItem(param) {
                    if (!param) return false;
                    var oldValues = sessionStorage.getItem(this.keyname);
                    if (oldValues) {
                        try {
                            oldValues = JSON.parse(oldValues);
                        } catch (e) {
                            console.log(e);
                            return false;
                        }
                    } else oldValues = [];
                    var newId = param;
                    for (var i = 0; i < oldValues.length; i++) {
                        if (oldValues[i] == newId) {
                            oldValues.splice(i, 1);
                            break;
                        }
                    };
                    if (oldValues.length >= 10) oldValues.splice(0, oldValues.length - 9);
                    oldValues.push(JSON.stringify(param));
                    sessionStorage.setItem(this.keyname, JSON.stringify(oldValues));
                    return true;
                }
            };

            var bell_notification = function () {
                function init() {
                    $('.notify_list').append("<a href='javascript:void(0)'><p>You have no messages</p></a>");
                    if (sessionStorage.getItem('desktopNotifications') == null) {
                        ajaxCall();
                    } else {
                        render(JSON.parse(sessionStorage.getItem('desktopNotifications')));
                    }
                }

                function ajaxCall() {
                    var data = {};
                    var url = window.base_url + 'ajaxCall/saleBooster';
                    if (typeof visitorId !== 'undefined') {
                        data['visitor_id'] = visitorId;
                    }
                    if (ReadCookie("user_id") || ReadCookie("scumd")) {
                        var userId = ReadCookie("user_id") || ReadCookie("scumd");
                        data['userId'] = atob(userId);
                    }
                    $.ajax({
                        type: 'GET',
                        data: data,
                        url: url,
                        success: function success(resp) {
                            resp = resp.trim() !== '' ? JSON.parse(resp.trim()) : '';
                            if (resp.status == 200 && resp !== '' && resp.response.promotion_available > 0) {
                                sessionStorage.setItem('desktopNotifications', JSON.stringify(resp));
                                render(resp);
                            }
                        },
                        error: function error(jHXR, textStatus) {
                            console.log(textStatus);
                        }
                    });
                }

                function render(resp) {
                    var prods = resp.response.products.visitor;
                    var len = prods.length;
                    var render = "";
                    var list = "<ul>";
                    for (var i = 0; i < len; i++) {
                        try {
                            if (i === 0) {
                                render += "<li class='notification_tip'><a href='" + base_url + prods[i].seo_name + ".html?bell=1'>" + "<img src='" + prods[i].image.icon_image_path + "' alt=''>" + "<div class='discount_validity'>" + "<span class='seller_discount'><span>Ã¢â€šÂ¹" + prods[i].discount_value + " extra discount</span> applied for you.</span>" + "</div>" + "</a></li>";
                            }
                            list += "<li class='notif_list'>" + "<a href='" + window.base_url + prods[i].seo_name + ".html?bell=1'>" + "<img src='" + prods[i].image.icon_image_path + "' alt=''>" + "<i>New</i>" + "<p>" + prods[i].name + "</p>" + "<div class='discount_validity'>" + "<span class='seller_discount'><span>Ã¢â€šÂ¹" + prods[i].discount_value + " extra discount</span> applied for you.</span>" + "<span class='exp_date'>Discount valid till " + prods[i].valid_till + "</span>" + "</div>" + "<span class='btn orange btn_effect buyNow'>Buy Now for Ã¢â€šÂ¹" + prods[i].price_after_salesbooster_promotion + "</span>" + "</a>" + "</li>";
                        } catch (error) {
                            console.log(error);
                        }
                    }
                    list += "</ul>";
                    if (len > 1) {
                        render += "<li class='notification_tip' ><a><p>" + (len - 1) + " more products on discount</p></a></li>";
                    }
                    $('.notification_count').text(len);
                    $('.notification_count').show();
                    $('.notify_list a').remove();
                    $('.notify_list').append(list);
                    if (sessionStorage.getItem('bellNotificationTip') == null) {
                        $('.notify_list ul').prepend(render);
                        $('.notif_list').hide();
                        $('.notification_content').css({ 'visibility': 'visible', 'opacity': 1 });
                        setTimeout(function () {
                            $('.notification_content').removeAttr('style');
                            $('.notification_tip').remove();
                            $('.notif_list').show();
                        }, 3000);
                        sessionStorage.setItem('bellNotificationTip', 0);
                    }
                }
                init();
            }();
            /*   start    */
            $(document).ready(function () {
                $('.brnd_txt .view').click(function () {
                    $(this).parent('.brnd_txt').prev('.brand_desc').toggleClass('open');
                });
                $(document).on('click', '.brnd_txt .more', function () {
                    $(this).removeClass('more').addClass('less').text('View Less');
                });
                $(document).on('click', '.brnd_txt .less', function () {
                    $(this).removeClass('less').addClass('more').text('View More');
                });
                function toTimestamp(strDate) {
                    var datum = Date.parse(strDate);
                    return datum / 1000;
                }
                setInterval(function () {
                    var cart_update_time = toTimestamp(sessionStorage.getItem('cart_update_time'));
                    if (isNaN(cart_update_time) || cart_update_time == null) cart_update_time = 0;
                    var current_time = new Date().getTime();
                    if (Math.abs(parseInt(current_time / 1000) - cart_update_time) > 1800) {
                        var data = {};
                        var url = window.base_url + 'ajaxCall/saleBooster';
                        if (typeof visitorId !== 'undefined') {
                            data['visitor_id'] = visitorId;
                        }
                        if (ReadCookie("user_id") || ReadCookie("scumd")) {
                            var userId = ReadCookie("user_id") || ReadCookie("scumd");
                            data['userId'] = atob(userId);
                        }
                        if (ReadCookie("user_segment")) {
                            var userseg = ReadCookie("user_id");
                            data['user_segment'] = userseg;
                        }
                        data['source_type'] = 'MFC';
                        data['return_promotion'] = 1;
                        data['pid'] = recentMFCViewed.getItem();
                        $.ajax({
                            type: 'GET',
                            data: data,
                            url: url,
                            success: function success(resp) {
                                resp = resp.trim() !== '' ? JSON.parse(resp.trim()) : '';
                                if (resp.status == 200 && resp !== '' && resp.response.promotion_available > 0) {
                                    sessionStorage.setItem('desktopNotifications', JSON.stringify(resp));
                                    bell_notification.render(resp);
                                    sessionStorage.removeItem('recent_mfc_viewed');
                                }
                            },
                            error: function error(jHXR, textStatus) {
                                console.log(textStatus);
                            }
                        });
                    }
                }, mfc_time);
            });
            /*    end  */
            return {
                mouseoverNavigation: mouseoverNavigation,
                trackingData: trackingData,
                autoComplete: autoComplete,
                loginPopup: loginPopup,
                getLoginStatus: getLoginStatus,
                pincodePopup: pincodePopup,
                isNumberKey: isNumberKey,
                searchTrigger: searchTrigger,
                atom_cart_load_data: atom_cart_load_data,
                recentlyViewedAll: recentlyViewedAll,
                recentlyViewed: recentlyViewed,
                recentMFCViewed: recentMFCViewed
            };
        }();
        module.exports = commonjs;

        /***/ }),
    /* 2 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

            !function (a) {
                if ("object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = a();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
                    __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                        (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
                    var b;b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.localforage = a();
                }
            }(function () {
                return function a(b, c, d) {
                    function e(g, h) {
                        if (!c[g]) {
                            if (!b[g]) {
                                var i = "function" == typeof require && require;if (!h && i) return require(g, !0);if (f) return f(g, !0);var j = new Error("Cannot find module '" + g + "'");throw j.code = "MODULE_NOT_FOUND", j;
                            }var k = c[g] = { exports: {} };b[g][0].call(k.exports, function (a) {
                                var c = b[g][1][a];return e(c ? c : a);
                            }, k, k.exports, a, b, c, d);
                        }return c[g].exports;
                    }for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) {
                        e(d[g]);
                    }return e;
                }({ 1: [function (a, b, c) {
                    (function (a) {
                        "use strict";
                        function c() {
                            k = !0;for (var a, b, c = l.length; c;) {
                                for (b = l, l = [], a = -1; ++a < c;) {
                                    b[a]();
                                }c = l.length;
                            }k = !1;
                        }function d(a) {
                            1 !== l.push(a) || k || e();
                        }var e,
                            f = a.MutationObserver || a.WebKitMutationObserver;if (f) {
                            var g = 0,
                                h = new f(c),
                                i = a.document.createTextNode("");h.observe(i, { characterData: !0 }), e = function e() {
                                i.data = g = ++g % 2;
                            };
                        } else if (a.setImmediate || "undefined" == typeof a.MessageChannel) e = "document" in a && "onreadystatechange" in a.document.createElement("script") ? function () {
                            var b = a.document.createElement("script");b.onreadystatechange = function () {
                                c(), b.onreadystatechange = null, b.parentNode.removeChild(b), b = null;
                            }, a.document.documentElement.appendChild(b);
                        } : function () {
                            setTimeout(c, 0);
                        };else {
                            var j = new a.MessageChannel();j.port1.onmessage = c, e = function e() {
                                j.port2.postMessage(0);
                            };
                        }var k,
                            l = [];b.exports = d;
                    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
                }, {}], 2: [function (a, b, c) {
                    "use strict";
                    function d() {}function e(a) {
                        if ("function" != typeof a) throw new TypeError("resolver must be a function");this.state = s, this.queue = [], this.outcome = void 0, a !== d && i(this, a);
                    }function f(a, b, c) {
                        this.promise = a, "function" == typeof b && (this.onFulfilled = b, this.callFulfilled = this.otherCallFulfilled), "function" == typeof c && (this.onRejected = c, this.callRejected = this.otherCallRejected);
                    }function g(a, b, c) {
                        o(function () {
                            var d;try {
                                d = b(c);
                            } catch (e) {
                                return p.reject(a, e);
                            }d === a ? p.reject(a, new TypeError("Cannot resolve promise with itself")) : p.resolve(a, d);
                        });
                    }function h(a) {
                        var b = a && a.then;return a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && "function" == typeof b ? function () {
                            b.apply(a, arguments);
                        } : void 0;
                    }function i(a, b) {
                        function c(b) {
                            f || (f = !0, p.reject(a, b));
                        }function d(b) {
                            f || (f = !0, p.resolve(a, b));
                        }function e() {
                            b(d, c);
                        }var f = !1,
                            g = j(e);"error" === g.status && c(g.value);
                    }function j(a, b) {
                        var c = {};try {
                            c.value = a(b), c.status = "success";
                        } catch (d) {
                            c.status = "error", c.value = d;
                        }return c;
                    }function k(a) {
                        return a instanceof this ? a : p.resolve(new this(d), a);
                    }function l(a) {
                        var b = new this(d);return p.reject(b, a);
                    }function m(a) {
                        function b(a, b) {
                            function d(a) {
                                g[b] = a, ++h !== e || f || (f = !0, p.resolve(j, g));
                            }c.resolve(a).then(d, function (a) {
                                f || (f = !0, p.reject(j, a));
                            });
                        }var c = this;if ("[object Array]" !== Object.prototype.toString.call(a)) return this.reject(new TypeError("must be an array"));var e = a.length,
                            f = !1;if (!e) return this.resolve([]);for (var g = new Array(e), h = 0, i = -1, j = new this(d); ++i < e;) {
                            b(a[i], i);
                        }return j;
                    }function n(a) {
                        function b(a) {
                            c.resolve(a).then(function (a) {
                                f || (f = !0, p.resolve(h, a));
                            }, function (a) {
                                f || (f = !0, p.reject(h, a));
                            });
                        }var c = this;if ("[object Array]" !== Object.prototype.toString.call(a)) return this.reject(new TypeError("must be an array"));var e = a.length,
                            f = !1;if (!e) return this.resolve([]);for (var g = -1, h = new this(d); ++g < e;) {
                            b(a[g]);
                        }return h;
                    }var o = a(1),
                        p = {},
                        q = ["REJECTED"],
                        r = ["FULFILLED"],
                        s = ["PENDING"];b.exports = c = e, e.prototype["catch"] = function (a) {
                        return this.then(null, a);
                    }, e.prototype.then = function (a, b) {
                        if ("function" != typeof a && this.state === r || "function" != typeof b && this.state === q) return this;var c = new this.constructor(d);if (this.state !== s) {
                            var e = this.state === r ? a : b;g(c, e, this.outcome);
                        } else this.queue.push(new f(c, a, b));return c;
                    }, f.prototype.callFulfilled = function (a) {
                        p.resolve(this.promise, a);
                    }, f.prototype.otherCallFulfilled = function (a) {
                        g(this.promise, this.onFulfilled, a);
                    }, f.prototype.callRejected = function (a) {
                        p.reject(this.promise, a);
                    }, f.prototype.otherCallRejected = function (a) {
                        g(this.promise, this.onRejected, a);
                    }, p.resolve = function (a, b) {
                        var c = j(h, b);if ("error" === c.status) return p.reject(a, c.value);var d = c.value;if (d) i(a, d);else {
                            a.state = r, a.outcome = b;for (var e = -1, f = a.queue.length; ++e < f;) {
                                a.queue[e].callFulfilled(b);
                            }
                        }return a;
                    }, p.reject = function (a, b) {
                        a.state = q, a.outcome = b;for (var c = -1, d = a.queue.length; ++c < d;) {
                            a.queue[c].callRejected(b);
                        }return a;
                    }, c.resolve = k, c.reject = l, c.all = m, c.race = n;
                }, { 1: 1 }], 3: [function (a, b, c) {
                    (function (b) {
                        "use strict";
                        "function" != typeof b.Promise && (b.Promise = a(2));
                    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
                }, { 2: 2 }], 4: [function (a, b, c) {
                    "use strict";
                    function d(a, b) {
                        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
                    }function e() {
                        try {
                            if ("undefined" != typeof indexedDB) return indexedDB;if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB;if ("undefined" != typeof mozIndexedDB) return mozIndexedDB;if ("undefined" != typeof OIndexedDB) return OIndexedDB;if ("undefined" != typeof msIndexedDB) return msIndexedDB;
                        } catch (a) {}
                    }function f() {
                        try {
                            return fa ? "undefined" != typeof openDatabase && "undefined" != typeof navigator && navigator.userAgent && /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) ? !1 : fa && "function" == typeof fa.open && "undefined" != typeof IDBKeyRange : !1;
                        } catch (a) {
                            return !1;
                        }
                    }function g() {
                        return "function" == typeof openDatabase;
                    }function h() {
                        try {
                            return "undefined" != typeof localStorage && "setItem" in localStorage && localStorage.setItem;
                        } catch (a) {
                            return !1;
                        }
                    }function i(a, b) {
                        a = a || [], b = b || {};try {
                            return new Blob(a, b);
                        } catch (c) {
                            if ("TypeError" !== c.name) throw c;for (var d = "undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder, e = new d(), f = 0; f < a.length; f += 1) {
                                e.append(a[f]);
                            }return e.getBlob(b.type);
                        }
                    }function j(a, b) {
                        b && a.then(function (a) {
                            b(null, a);
                        }, function (a) {
                            b(a);
                        });
                    }function k(a, b, c) {
                        "function" == typeof b && a.then(b), "function" == typeof c && a["catch"](c);
                    }function l(a) {
                        for (var b = a.length, c = new ArrayBuffer(b), d = new Uint8Array(c), e = 0; b > e; e++) {
                            d[e] = a.charCodeAt(e);
                        }return c;
                    }function m(a) {
                        return new ia(function (b) {
                            var c = i([""]);a.objectStore(ja).put(c, "key"), a.onabort = function (a) {
                                a.preventDefault(), a.stopPropagation(), b(!1);
                            }, a.oncomplete = function () {
                                var a = navigator.userAgent.match(/Chrome\/(\d+)/),
                                    c = navigator.userAgent.match(/Edge\//);b(c || !a || parseInt(a[1], 10) >= 43);
                            };
                        })["catch"](function () {
                            return !1;
                        });
                    }function n(a) {
                        return "boolean" == typeof ga ? ia.resolve(ga) : m(a).then(function (a) {
                            return ga = a;
                        });
                    }function o(a) {
                        var b = ha[a.name],
                            c = {};c.promise = new ia(function (a) {
                            c.resolve = a;
                        }), b.deferredOperations.push(c), b.dbReady ? b.dbReady = b.dbReady.then(function () {
                            return c.promise;
                        }) : b.dbReady = c.promise;
                    }function p(a) {
                        var b = ha[a.name],
                            c = b.deferredOperations.pop();c && c.resolve();
                    }function q(a, b) {
                        return new ia(function (c, d) {
                            if (a.db) {
                                if (!b) return c(a.db);o(a), a.db.close();
                            }var e = [a.name];b && e.push(a.version);var f = fa.open.apply(fa, e);b && (f.onupgradeneeded = function (b) {
                                var c = f.result;try {
                                    c.createObjectStore(a.storeName), b.oldVersion <= 1 && c.createObjectStore(ja);
                                } catch (d) {
                                    if ("ConstraintError" !== d.name) throw d;console.warn('The database "' + a.name + '" has been upgraded from version ' + b.oldVersion + " to version " + b.newVersion + ', but the storage "' + a.storeName + '" already exists.');
                                }
                            }), f.onerror = function () {
                                d(f.error);
                            }, f.onsuccess = function () {
                                c(f.result), p(a);
                            };
                        });
                    }function r(a) {
                        return q(a, !1);
                    }function s(a) {
                        return q(a, !0);
                    }function t(a, b) {
                        if (!a.db) return !0;var c = !a.db.objectStoreNames.contains(a.storeName),
                            d = a.version < a.db.version,
                            e = a.version > a.db.version;if (d && (a.version !== b && console.warn('The database "' + a.name + "\" can't be downgraded from version " + a.db.version + " to version " + a.version + "."), a.version = a.db.version), e || c) {
                            if (c) {
                                var f = a.db.version + 1;f > a.version && (a.version = f);
                            }return !0;
                        }return !1;
                    }function u(a) {
                        return new ia(function (b, c) {
                            var d = new FileReader();d.onerror = c, d.onloadend = function (c) {
                                var d = btoa(c.target.result || "");b({ __local_forage_encoded_blob: !0, data: d, type: a.type });
                            }, d.readAsBinaryString(a);
                        });
                    }function v(a) {
                        var b = l(atob(a.data));return i([b], { type: a.type });
                    }function w(a) {
                        return a && a.__local_forage_encoded_blob;
                    }function x(a) {
                        var b = this,
                            c = b._initReady().then(function () {
                                var a = ha[b._dbInfo.name];return a && a.dbReady ? a.dbReady : void 0;
                            });return k(c, a, a), c;
                    }function y(a) {
                        function b() {
                            return ia.resolve();
                        }var c = this,
                            d = { db: null };if (a) for (var e in a) {
                            d[e] = a[e];
                        }ha || (ha = {});var f = ha[d.name];f || (f = { forages: [], db: null, dbReady: null, deferredOperations: [] }, ha[d.name] = f), f.forages.push(c), c._initReady || (c._initReady = c.ready, c.ready = x);for (var g = [], h = 0; h < f.forages.length; h++) {
                            var i = f.forages[h];i !== c && g.push(i._initReady()["catch"](b));
                        }var j = f.forages.slice(0);return ia.all(g).then(function () {
                            return d.db = f.db, r(d);
                        }).then(function (a) {
                            return d.db = a, t(d, c._defaultConfig.version) ? s(d) : a;
                        }).then(function (a) {
                            d.db = f.db = a, c._dbInfo = d;for (var b = 0; b < j.length; b++) {
                                var e = j[b];e !== c && (e._dbInfo.db = d.db, e._dbInfo.version = d.version);
                            }
                        });
                    }function z(a, b) {
                        var c = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var d = new ia(function (b, d) {
                            c.ready().then(function () {
                                var e = c._dbInfo,
                                    f = e.db.transaction(e.storeName, "readonly").objectStore(e.storeName),
                                    g = f.get(a);g.onsuccess = function () {
                                    var a = g.result;void 0 === a && (a = null), w(a) && (a = v(a)), b(a);
                                }, g.onerror = function () {
                                    d(g.error);
                                };
                            })["catch"](d);
                        });return j(d, b), d;
                    }function A(a, b) {
                        var c = this,
                            d = new ia(function (b, d) {
                                c.ready().then(function () {
                                    var e = c._dbInfo,
                                        f = e.db.transaction(e.storeName, "readonly").objectStore(e.storeName),
                                        g = f.openCursor(),
                                        h = 1;g.onsuccess = function () {
                                        var c = g.result;if (c) {
                                            var d = c.value;w(d) && (d = v(d));var e = a(d, c.key, h++);void 0 !== e ? b(e) : c["continue"]();
                                        } else b();
                                    }, g.onerror = function () {
                                        d(g.error);
                                    };
                                })["catch"](d);
                            });return j(d, b), d;
                    }function B(a, b, c) {
                        var d = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var e = new ia(function (c, e) {
                            var f;d.ready().then(function () {
                                return f = d._dbInfo, "[object Blob]" === ka.call(b) ? n(f.db).then(function (a) {
                                    return a ? b : u(b);
                                }) : b;
                            }).then(function (b) {
                                var d = f.db.transaction(f.storeName, "readwrite"),
                                    g = d.objectStore(f.storeName);null === b && (b = void 0), d.oncomplete = function () {
                                    void 0 === b && (b = null), c(b);
                                }, d.onabort = d.onerror = function () {
                                    var a = h.error ? h.error : h.transaction.error;e(a);
                                };var h = g.put(b, a);
                            })["catch"](e);
                        });return j(e, c), e;
                    }function C(a, b) {
                        var c = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var d = new ia(function (b, d) {
                            c.ready().then(function () {
                                var e = c._dbInfo,
                                    f = e.db.transaction(e.storeName, "readwrite"),
                                    g = f.objectStore(e.storeName),
                                    h = g["delete"](a);f.oncomplete = function () {
                                    b();
                                }, f.onerror = function () {
                                    d(h.error);
                                }, f.onabort = function () {
                                    var a = h.error ? h.error : h.transaction.error;d(a);
                                };
                            })["catch"](d);
                        });return j(d, b), d;
                    }function D(a) {
                        var b = this,
                            c = new ia(function (a, c) {
                                b.ready().then(function () {
                                    var d = b._dbInfo,
                                        e = d.db.transaction(d.storeName, "readwrite"),
                                        f = e.objectStore(d.storeName),
                                        g = f.clear();e.oncomplete = function () {
                                        a();
                                    }, e.onabort = e.onerror = function () {
                                        var a = g.error ? g.error : g.transaction.error;c(a);
                                    };
                                })["catch"](c);
                            });return j(c, a), c;
                    }function E(a) {
                        var b = this,
                            c = new ia(function (a, c) {
                                b.ready().then(function () {
                                    var d = b._dbInfo,
                                        e = d.db.transaction(d.storeName, "readonly").objectStore(d.storeName),
                                        f = e.count();f.onsuccess = function () {
                                        a(f.result);
                                    }, f.onerror = function () {
                                        c(f.error);
                                    };
                                })["catch"](c);
                            });return j(c, a), c;
                    }function F(a, b) {
                        var c = this,
                            d = new ia(function (b, d) {
                                return 0 > a ? void b(null) : void c.ready().then(function () {
                                    var e = c._dbInfo,
                                        f = e.db.transaction(e.storeName, "readonly").objectStore(e.storeName),
                                        g = !1,
                                        h = f.openCursor();h.onsuccess = function () {
                                        var c = h.result;return c ? void (0 === a ? b(c.key) : g ? b(c.key) : (g = !0, c.advance(a))) : void b(null);
                                    }, h.onerror = function () {
                                        d(h.error);
                                    };
                                })["catch"](d);
                            });return j(d, b), d;
                    }function G(a) {
                        var b = this,
                            c = new ia(function (a, c) {
                                b.ready().then(function () {
                                    var d = b._dbInfo,
                                        e = d.db.transaction(d.storeName, "readonly").objectStore(d.storeName),
                                        f = e.openCursor(),
                                        g = [];f.onsuccess = function () {
                                        var b = f.result;return b ? (g.push(b.key), void b["continue"]()) : void a(g);
                                    }, f.onerror = function () {
                                        c(f.error);
                                    };
                                })["catch"](c);
                            });return j(c, a), c;
                    }function H(a) {
                        var b,
                            c,
                            d,
                            e,
                            f,
                            g = .75 * a.length,
                            h = a.length,
                            i = 0;"=" === a[a.length - 1] && (g--, "=" === a[a.length - 2] && g--);var j = new ArrayBuffer(g),
                            k = new Uint8Array(j);for (b = 0; h > b; b += 4) {
                            c = ma.indexOf(a[b]), d = ma.indexOf(a[b + 1]), e = ma.indexOf(a[b + 2]), f = ma.indexOf(a[b + 3]), k[i++] = c << 2 | d >> 4, k[i++] = (15 & d) << 4 | e >> 2, k[i++] = (3 & e) << 6 | 63 & f;
                        }return j;
                    }function I(a) {
                        var b,
                            c = new Uint8Array(a),
                            d = "";for (b = 0; b < c.length; b += 3) {
                            d += ma[c[b] >> 2], d += ma[(3 & c[b]) << 4 | c[b + 1] >> 4], d += ma[(15 & c[b + 1]) << 2 | c[b + 2] >> 6], d += ma[63 & c[b + 2]];
                        }return c.length % 3 === 2 ? d = d.substring(0, d.length - 1) + "=" : c.length % 3 === 1 && (d = d.substring(0, d.length - 2) + "=="), d;
                    }function J(a, b) {
                        var c = "";if (a && (c = Da.call(a)), a && ("[object ArrayBuffer]" === c || a.buffer && "[object ArrayBuffer]" === Da.call(a.buffer))) {
                            var d,
                                e = pa;a instanceof ArrayBuffer ? (d = a, e += ra) : (d = a.buffer, "[object Int8Array]" === c ? e += ta : "[object Uint8Array]" === c ? e += ua : "[object Uint8ClampedArray]" === c ? e += va : "[object Int16Array]" === c ? e += wa : "[object Uint16Array]" === c ? e += ya : "[object Int32Array]" === c ? e += xa : "[object Uint32Array]" === c ? e += za : "[object Float32Array]" === c ? e += Aa : "[object Float64Array]" === c ? e += Ba : b(new Error("Failed to get type for BinaryArray"))), b(e + I(d));
                        } else if ("[object Blob]" === c) {
                            var f = new FileReader();f.onload = function () {
                                var c = na + a.type + "~" + I(this.result);b(pa + sa + c);
                            }, f.readAsArrayBuffer(a);
                        } else try {
                            b(JSON.stringify(a));
                        } catch (g) {
                            console.error("Couldn't convert value into a JSON string: ", a), b(null, g);
                        }
                    }function K(a) {
                        if (a.substring(0, qa) !== pa) return JSON.parse(a);var b,
                            c = a.substring(Ca),
                            d = a.substring(qa, Ca);if (d === sa && oa.test(c)) {
                            var e = c.match(oa);b = e[1], c = c.substring(e[0].length);
                        }var f = H(c);switch (d) {case ra:
                            return f;case sa:
                            return i([f], { type: b });case ta:
                            return new Int8Array(f);case ua:
                            return new Uint8Array(f);case va:
                            return new Uint8ClampedArray(f);case wa:
                            return new Int16Array(f);case ya:
                            return new Uint16Array(f);case xa:
                            return new Int32Array(f);case za:
                            return new Uint32Array(f);case Aa:
                            return new Float32Array(f);case Ba:
                            return new Float64Array(f);default:
                            throw new Error("Unkown type: " + d);}
                    }function L(a) {
                        var b = this,
                            c = { db: null };if (a) for (var d in a) {
                            c[d] = "string" != typeof a[d] ? a[d].toString() : a[d];
                        }var e = new ia(function (a, d) {
                            try {
                                c.db = openDatabase(c.name, String(c.version), c.description, c.size);
                            } catch (e) {
                                return d(e);
                            }c.db.transaction(function (e) {
                                e.executeSql("CREATE TABLE IF NOT EXISTS " + c.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], function () {
                                    b._dbInfo = c, a();
                                }, function (a, b) {
                                    d(b);
                                });
                            });
                        });return c.serializer = Ea, e;
                    }function M(a, b) {
                        var c = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var d = new ia(function (b, d) {
                            c.ready().then(function () {
                                var e = c._dbInfo;e.db.transaction(function (c) {
                                    c.executeSql("SELECT * FROM " + e.storeName + " WHERE key = ? LIMIT 1", [a], function (a, c) {
                                        var d = c.rows.length ? c.rows.item(0).value : null;d && (d = e.serializer.deserialize(d)), b(d);
                                    }, function (a, b) {
                                        d(b);
                                    });
                                });
                            })["catch"](d);
                        });return j(d, b), d;
                    }function N(a, b) {
                        var c = this,
                            d = new ia(function (b, d) {
                                c.ready().then(function () {
                                    var e = c._dbInfo;e.db.transaction(function (c) {
                                        c.executeSql("SELECT * FROM " + e.storeName, [], function (c, d) {
                                            for (var f = d.rows, g = f.length, h = 0; g > h; h++) {
                                                var i = f.item(h),
                                                    j = i.value;if (j && (j = e.serializer.deserialize(j)), j = a(j, i.key, h + 1), void 0 !== j) return void b(j);
                                            }b();
                                        }, function (a, b) {
                                            d(b);
                                        });
                                    });
                                })["catch"](d);
                            });return j(d, b), d;
                    }function O(a, b, c) {
                        var d = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var e = new ia(function (c, e) {
                            d.ready().then(function () {
                                void 0 === b && (b = null);var f = b,
                                    g = d._dbInfo;g.serializer.serialize(b, function (b, d) {
                                    d ? e(d) : g.db.transaction(function (d) {
                                        d.executeSql("INSERT OR REPLACE INTO " + g.storeName + " (key, value) VALUES (?, ?)", [a, b], function () {
                                            c(f);
                                        }, function (a, b) {
                                            e(b);
                                        });
                                    }, function (a) {
                                        a.code === a.QUOTA_ERR && e(a);
                                    });
                                });
                            })["catch"](e);
                        });return j(e, c), e;
                    }function P(a, b) {
                        var c = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var d = new ia(function (b, d) {
                            c.ready().then(function () {
                                var e = c._dbInfo;e.db.transaction(function (c) {
                                    c.executeSql("DELETE FROM " + e.storeName + " WHERE key = ?", [a], function () {
                                        b();
                                    }, function (a, b) {
                                        d(b);
                                    });
                                });
                            })["catch"](d);
                        });return j(d, b), d;
                    }function Q(a) {
                        var b = this,
                            c = new ia(function (a, c) {
                                b.ready().then(function () {
                                    var d = b._dbInfo;d.db.transaction(function (b) {
                                        b.executeSql("DELETE FROM " + d.storeName, [], function () {
                                            a();
                                        }, function (a, b) {
                                            c(b);
                                        });
                                    });
                                })["catch"](c);
                            });return j(c, a), c;
                    }function R(a) {
                        var b = this,
                            c = new ia(function (a, c) {
                                b.ready().then(function () {
                                    var d = b._dbInfo;d.db.transaction(function (b) {
                                        b.executeSql("SELECT COUNT(key) as c FROM " + d.storeName, [], function (b, c) {
                                            var d = c.rows.item(0).c;a(d);
                                        }, function (a, b) {
                                            c(b);
                                        });
                                    });
                                })["catch"](c);
                            });return j(c, a), c;
                    }function S(a, b) {
                        var c = this,
                            d = new ia(function (b, d) {
                                c.ready().then(function () {
                                    var e = c._dbInfo;e.db.transaction(function (c) {
                                        c.executeSql("SELECT key FROM " + e.storeName + " WHERE id = ? LIMIT 1", [a + 1], function (a, c) {
                                            var d = c.rows.length ? c.rows.item(0).key : null;b(d);
                                        }, function (a, b) {
                                            d(b);
                                        });
                                    });
                                })["catch"](d);
                            });return j(d, b), d;
                    }function T(a) {
                        var b = this,
                            c = new ia(function (a, c) {
                                b.ready().then(function () {
                                    var d = b._dbInfo;d.db.transaction(function (b) {
                                        b.executeSql("SELECT key FROM " + d.storeName, [], function (b, c) {
                                            for (var d = [], e = 0; e < c.rows.length; e++) {
                                                d.push(c.rows.item(e).key);
                                            }a(d);
                                        }, function (a, b) {
                                            c(b);
                                        });
                                    });
                                })["catch"](c);
                            });return j(c, a), c;
                    }function U(a) {
                        var b = this,
                            c = {};if (a) for (var d in a) {
                            c[d] = a[d];
                        }return c.keyPrefix = c.name + "/", c.storeName !== b._defaultConfig.storeName && (c.keyPrefix += c.storeName + "/"), b._dbInfo = c, c.serializer = Ea, ia.resolve();
                    }function V(a) {
                        var b = this,
                            c = b.ready().then(function () {
                                for (var a = b._dbInfo.keyPrefix, c = localStorage.length - 1; c >= 0; c--) {
                                    var d = localStorage.key(c);0 === d.indexOf(a) && localStorage.removeItem(d);
                                }
                            });return j(c, a), c;
                    }function W(a, b) {
                        var c = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var d = c.ready().then(function () {
                            var b = c._dbInfo,
                                d = localStorage.getItem(b.keyPrefix + a);return d && (d = b.serializer.deserialize(d)), d;
                        });return j(d, b), d;
                    }function X(a, b) {
                        var c = this,
                            d = c.ready().then(function () {
                                for (var b = c._dbInfo, d = b.keyPrefix, e = d.length, f = localStorage.length, g = 1, h = 0; f > h; h++) {
                                    var i = localStorage.key(h);if (0 === i.indexOf(d)) {
                                        var j = localStorage.getItem(i);if (j && (j = b.serializer.deserialize(j)), j = a(j, i.substring(e), g++), void 0 !== j) return j;
                                    }
                                }
                            });return j(d, b), d;
                    }function Y(a, b) {
                        var c = this,
                            d = c.ready().then(function () {
                                var b,
                                    d = c._dbInfo;try {
                                    b = localStorage.key(a);
                                } catch (e) {
                                    b = null;
                                }return b && (b = b.substring(d.keyPrefix.length)), b;
                            });return j(d, b), d;
                    }function Z(a) {
                        var b = this,
                            c = b.ready().then(function () {
                                for (var a = b._dbInfo, c = localStorage.length, d = [], e = 0; c > e; e++) {
                                    0 === localStorage.key(e).indexOf(a.keyPrefix) && d.push(localStorage.key(e).substring(a.keyPrefix.length));
                                }return d;
                            });return j(c, a), c;
                    }function $(a) {
                        var b = this,
                            c = b.keys().then(function (a) {
                                return a.length;
                            });return j(c, a), c;
                    }function _(a, b) {
                        var c = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var d = c.ready().then(function () {
                            var b = c._dbInfo;localStorage.removeItem(b.keyPrefix + a);
                        });return j(d, b), d;
                    }function aa(a, b, c) {
                        var d = this;"string" != typeof a && (console.warn(a + " used as a key, but it is not a string."), a = String(a));var e = d.ready().then(function () {
                            void 0 === b && (b = null);var c = b;return new ia(function (e, f) {
                                var g = d._dbInfo;g.serializer.serialize(b, function (b, d) {
                                    if (d) f(d);else try {
                                        localStorage.setItem(g.keyPrefix + a, b), e(c);
                                    } catch (h) {
                                        "QuotaExceededError" !== h.name && "NS_ERROR_DOM_QUOTA_REACHED" !== h.name || f(h), f(h);
                                    }
                                });
                            });
                        });return j(e, c), e;
                    }function ba(a, b) {
                        a[b] = function () {
                            var c = arguments;return a.ready().then(function () {
                                return a[b].apply(a, c);
                            });
                        };
                    }function ca() {
                        for (var a = 1; a < arguments.length; a++) {
                            var b = arguments[a];if (b) for (var c in b) {
                                b.hasOwnProperty(c) && (Na(b[c]) ? arguments[0][c] = b[c].slice() : arguments[0][c] = b[c]);
                            }
                        }return arguments[0];
                    }function da(a) {
                        for (var b in Ia) {
                            if (Ia.hasOwnProperty(b) && Ia[b] === a) return !0;
                        }return !1;
                    }var ea = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (a) {
                            return typeof a === "undefined" ? "undefined" : _typeof(a);
                        } : function (a) {
                            return a && "function" == typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a === "undefined" ? "undefined" : _typeof(a);
                        },
                        fa = e();"undefined" == typeof Promise && "undefined" != typeof a && a(3);var ga,
                        ha,
                        ia = Promise,
                        ja = "local-forage-detect-blob-support",
                        ka = Object.prototype.toString,
                        la = { _driver: "asyncStorage", _initStorage: y, iterate: A, getItem: z, setItem: B, removeItem: C, clear: D, length: E, key: F, keys: G },
                        ma = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        na = "~~local_forage_type~",
                        oa = /^~~local_forage_type~([^~]+)~/,
                        pa = "__lfsc__:",
                        qa = pa.length,
                        ra = "arbf",
                        sa = "blob",
                        ta = "si08",
                        ua = "ui08",
                        va = "uic8",
                        wa = "si16",
                        xa = "si32",
                        ya = "ur16",
                        za = "ui32",
                        Aa = "fl32",
                        Ba = "fl64",
                        Ca = qa + ra.length,
                        Da = Object.prototype.toString,
                        Ea = { serialize: J, deserialize: K, stringToBuffer: H, bufferToString: I },
                        Fa = { _driver: "webSQLStorage", _initStorage: L, iterate: N, getItem: M, setItem: O, removeItem: P, clear: Q, length: R, key: S, keys: T },
                        Ga = { _driver: "localStorageWrapper", _initStorage: U, iterate: X, getItem: W, setItem: aa, removeItem: _, clear: V, length: $, key: Y, keys: Z },
                        Ha = {},
                        Ia = { INDEXEDDB: "asyncStorage", LOCALSTORAGE: "localStorageWrapper", WEBSQL: "webSQLStorage" },
                        Ja = [Ia.INDEXEDDB, Ia.WEBSQL, Ia.LOCALSTORAGE],
                        Ka = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"],
                        La = { description: "", driver: Ja.slice(), name: "localforage", size: 4980736, storeName: "keyvaluepairs", version: 1 },
                        Ma = {};Ma[Ia.INDEXEDDB] = f(), Ma[Ia.WEBSQL] = g(), Ma[Ia.LOCALSTORAGE] = h();var Na = Array.isArray || function (a) {
                                return "[object Array]" === Object.prototype.toString.call(a);
                            },
                        Oa = function () {
                            function a(b) {
                                d(this, a), this.INDEXEDDB = Ia.INDEXEDDB, this.LOCALSTORAGE = Ia.LOCALSTORAGE, this.WEBSQL = Ia.WEBSQL, this._defaultConfig = ca({}, La), this._config = ca({}, this._defaultConfig, b), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver);
                            }return a.prototype.config = function (a) {
                                if ("object" === ("undefined" == typeof a ? "undefined" : ea(a))) {
                                    if (this._ready) return new Error("Can't call config() after localforage has been used.");for (var b in a) {
                                        "storeName" === b && (a[b] = a[b].replace(/\W/g, "_")), this._config[b] = a[b];
                                    }return "driver" in a && a.driver && this.setDriver(this._config.driver), !0;
                                }return "string" == typeof a ? this._config[a] : this._config;
                            }, a.prototype.defineDriver = function (a, b, c) {
                                var d = new ia(function (b, c) {
                                    try {
                                        var d = a._driver,
                                            e = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"),
                                            f = new Error("Custom driver name already in use: " + a._driver);if (!a._driver) return void c(e);if (da(a._driver)) return void c(f);for (var g = Ka.concat("_initStorage"), h = 0; h < g.length; h++) {
                                            var i = g[h];if (!i || !a[i] || "function" != typeof a[i]) return void c(e);
                                        }var j = ia.resolve(!0);"_support" in a && (j = a._support && "function" == typeof a._support ? a._support() : ia.resolve(!!a._support)), j.then(function (c) {
                                            Ma[d] = c, Ha[d] = a, b();
                                        }, c);
                                    } catch (k) {
                                        c(k);
                                    }
                                });return k(d, b, c), d;
                            }, a.prototype.driver = function () {
                                return this._driver || null;
                            }, a.prototype.getDriver = function (a, b, c) {
                                var d = this,
                                    e = ia.resolve().then(function () {
                                        if (!da(a)) {
                                            if (Ha[a]) return Ha[a];throw new Error("Driver not found.");
                                        }switch (a) {case d.INDEXEDDB:
                                            return la;case d.LOCALSTORAGE:
                                            return Ga;case d.WEBSQL:
                                            return Fa;}
                                    });return k(e, b, c), e;
                            }, a.prototype.getSerializer = function (a) {
                                var b = ia.resolve(Ea);return k(b, a), b;
                            }, a.prototype.ready = function (a) {
                                var b = this,
                                    c = b._driverSet.then(function () {
                                        return null === b._ready && (b._ready = b._initDriver()), b._ready;
                                    });return k(c, a, a), c;
                            }, a.prototype.setDriver = function (a, b, c) {
                                function d() {
                                    f._config.driver = f.driver();
                                }function e(a) {
                                    return function () {
                                        function b() {
                                            for (; c < a.length;) {
                                                var e = a[c];return c++, f._dbInfo = null, f._ready = null, f.getDriver(e).then(function (a) {
                                                    return f._extend(a), d(), f._ready = f._initStorage(f._config), f._ready;
                                                })["catch"](b);
                                            }d();var g = new Error("No available storage method found.");return f._driverSet = ia.reject(g), f._driverSet;
                                        }var c = 0;return b();
                                    };
                                }var f = this;Na(a) || (a = [a]);var g = this._getSupportedDrivers(a),
                                    h = null !== this._driverSet ? this._driverSet["catch"](function () {
                                        return ia.resolve();
                                    }) : ia.resolve();return this._driverSet = h.then(function () {
                                    var a = g[0];return f._dbInfo = null, f._ready = null, f.getDriver(a).then(function (a) {
                                        f._driver = a._driver, d(), f._wrapLibraryMethodsWithReady(), f._initDriver = e(g);
                                    });
                                })["catch"](function () {
                                    d();var a = new Error("No available storage method found.");return f._driverSet = ia.reject(a), f._driverSet;
                                }), k(this._driverSet, b, c), this._driverSet;
                            }, a.prototype.supports = function (a) {
                                return !!Ma[a];
                            }, a.prototype._extend = function (a) {
                                ca(this, a);
                            }, a.prototype._getSupportedDrivers = function (a) {
                                for (var b = [], c = 0, d = a.length; d > c; c++) {
                                    var e = a[c];this.supports(e) && b.push(e);
                                }return b;
                            }, a.prototype._wrapLibraryMethodsWithReady = function () {
                                for (var a = 0; a < Ka.length; a++) {
                                    ba(this, Ka[a]);
                                }
                            }, a.prototype.createInstance = function (b) {
                                return new a(b);
                            }, a;
                        }(),
                        Pa = new Oa();b.exports = Pa;
                }, { 3: 3 }] }, {}, [4])(4);
            });
            /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

        /***/ }),
    /* 3 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

        (function (factory) {
            'use strict';
            factory(jQuery);
        })(function ($) {
            'use strict';
            var Slick = window.Slick || {};Slick = function () {
                var instanceUid = 0;function Slick(element, settings) {
                    var _ = this,
                        dataSettings;_.defaults = { accessibility: true, adaptiveHeight: false, appendArrows: $(element), appendDots: $(element), arrows: true, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: false, autoplaySpeed: 3000, centerMode: false, centerPadding: '50px', cssEase: 'ease', customPaging: function customPaging(slider, i) {
                        return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                    }, dots: false, dotsClass: 'slick-dots', draggable: true, easing: 'linear', edgeFriction: 0.35, fade: false, focusOnSelect: false, infinite: true, initialSlide: 0, lazyLoad: 'ondemand', mobileFirst: false, pauseOnHover: true, pauseOnFocus: true, pauseOnDotsHover: false, respondTo: 'window', responsive: null, rows: 1, rtl: false, slide: '', slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: true, swipeToSlide: false, touchMove: true, touchThreshold: 5, useCSS: true, useTransform: true, variableWidth: false, vertical: false, verticalSwiping: false, waitForAnimate: true, zIndex: 1000 };_.initials = { animating: false, dragging: false, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: false, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: false, unslicked: false };$.extend(_, _.initials);_.activeBreakpoint = null;_.animType = null;_.animProp = null;_.breakpoints = [];_.breakpointSettings = [];_.cssTransitions = false;_.focussed = false;_.interrupted = false;_.hidden = 'hidden';_.paused = true;_.positionProp = null;_.respondTo = null;_.rowCount = 1;_.shouldClick = true;_.$slider = $(element);_.$slidesCache = null;_.transformType = null;_.transitionType = null;_.visibilityChange = 'visibilitychange';_.windowWidth = 0;_.windowTimer = null;dataSettings = $(element).data('slick') || {};_.options = $.extend({}, _.defaults, settings, dataSettings);_.currentSlide = _.options.initialSlide;_.originalSettings = _.options;if (typeof document.mozHidden !== 'undefined') {
                        _.hidden = 'mozHidden';_.visibilityChange = 'mozvisibilitychange';
                    } else if (typeof document.webkitHidden !== 'undefined') {
                        _.hidden = 'webkitHidden';_.visibilityChange = 'webkitvisibilitychange';
                    }_.autoPlay = $.proxy(_.autoPlay, _);_.autoPlayClear = $.proxy(_.autoPlayClear, _);_.autoPlayIterator = $.proxy(_.autoPlayIterator, _);_.changeSlide = $.proxy(_.changeSlide, _);_.clickHandler = $.proxy(_.clickHandler, _);_.selectHandler = $.proxy(_.selectHandler, _);_.setPosition = $.proxy(_.setPosition, _);_.swipeHandler = $.proxy(_.swipeHandler, _);_.dragHandler = $.proxy(_.dragHandler, _);_.keyHandler = $.proxy(_.keyHandler, _);_.instanceUid = instanceUid++;_.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;_.registerBreakpoints();_.init(true);
                }return Slick;
            }();Slick.prototype.activateADA = function () {
                var _ = this;_.$slideTrack.find('.slick-active').attr({ 'aria-hidden': 'false' }).find('a, input, button, select').attr({ 'tabindex': '0' });
            };Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
                var _ = this;if (typeof index === 'boolean') {
                    addBefore = index;index = null;
                } else if (index < 0 || index >= _.slideCount) {
                    return false;
                }_.unload();if (typeof index === 'number') {
                    if (index === 0 && _.$slides.length === 0) {
                        $(markup).appendTo(_.$slideTrack);
                    } else if (addBefore) {
                        $(markup).insertBefore(_.$slides.eq(index));
                    } else {
                        $(markup).insertAfter(_.$slides.eq(index));
                    }
                } else {
                    if (addBefore === true) {
                        $(markup).prependTo(_.$slideTrack);
                    } else {
                        $(markup).appendTo(_.$slideTrack);
                    }
                }_.$slides = _.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slides.each(function (index, element) {
                    $(element).attr('data-slick-index', index);
                });_.$slidesCache = _.$slides;_.reinit();
            };Slick.prototype.animateHeight = function () {
                var _ = this;if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
                    var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);_.$list.animate({ height: targetHeight }, _.options.speed);
                }
            };Slick.prototype.animateSlide = function (targetLeft, callback) {
                var animProps = {},
                    _ = this;_.animateHeight();if (_.options.rtl === true && _.options.vertical === false) {
                    targetLeft = -targetLeft;
                }if (_.transformsEnabled === false) {
                    if (_.options.vertical === false) {
                        _.$slideTrack.animate({ left: targetLeft }, _.options.speed, _.options.easing, callback);
                    } else {
                        _.$slideTrack.animate({ top: targetLeft }, _.options.speed, _.options.easing, callback);
                    }
                } else {
                    if (_.cssTransitions === false) {
                        if (_.options.rtl === true) {
                            _.currentLeft = -_.currentLeft;
                        }$({ animStart: _.currentLeft }).animate({ animStart: targetLeft }, { duration: _.options.speed, easing: _.options.easing, step: function step(now) {
                            now = Math.ceil(now);if (_.options.vertical === false) {
                                animProps[_.animType] = 'translate(' + now + 'px, 0px)';_.$slideTrack.css(animProps);
                            } else {
                                animProps[_.animType] = 'translate(0px,' + now + 'px)';_.$slideTrack.css(animProps);
                            }
                        }, complete: function complete() {
                            if (callback) {
                                callback.call();
                            }
                        } });
                    } else {
                        _.applyTransition();targetLeft = Math.ceil(targetLeft);if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                        } else {
                            animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                        }_.$slideTrack.css(animProps);if (callback) {
                            setTimeout(function () {
                                _.disableTransition();callback.call();
                            }, _.options.speed);
                        }
                    }
                }
            };Slick.prototype.getNavTarget = function () {
                var _ = this,
                    asNavFor = _.options.asNavFor;if (asNavFor && asNavFor !== null) {
                    asNavFor = $(asNavFor).not(_.$slider);
                }return asNavFor;
            };Slick.prototype.asNavFor = function (index) {
                var _ = this,
                    asNavFor = _.getNavTarget();if (asNavFor !== null && (typeof asNavFor === 'undefined' ? 'undefined' : _typeof(asNavFor)) === 'object') {
                    asNavFor.each(function () {
                        var target = $(this).slick('getSlick');if (!target.unslicked) {
                            target.slideHandler(index, true);
                        }
                    });
                }
            };Slick.prototype.applyTransition = function (slide) {
                var _ = this,
                    transition = {};if (_.options.fade === false) {
                    transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
                } else {
                    transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
                }if (_.options.fade === false) {
                    _.$slideTrack.css(transition);
                } else {
                    _.$slides.eq(slide).css(transition);
                }
            };Slick.prototype.autoPlay = function () {
                var _ = this;_.autoPlayClear();if (_.slideCount > _.options.slidesToShow) {
                    _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
                }
            };Slick.prototype.autoPlayClear = function () {
                var _ = this;if (_.autoPlayTimer) {
                    clearInterval(_.autoPlayTimer);
                }
            };Slick.prototype.autoPlayIterator = function () {
                var _ = this,
                    slideTo = _.currentSlide + _.options.slidesToScroll;if (!_.paused && !_.interrupted && !_.focussed) {
                    if (_.options.infinite === false) {
                        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
                            _.direction = 0;
                        } else if (_.direction === 0) {
                            slideTo = _.currentSlide - _.options.slidesToScroll;if (_.currentSlide - 1 === 0) {
                                _.direction = 1;
                            }
                        }
                    }_.slideHandler(slideTo);
                }
            };Slick.prototype.buildArrows = function () {
                var _ = this;if (_.options.arrows === true) {
                    _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');_.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');if (_.slideCount > _.options.slidesToShow) {
                        _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');_.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');if (_.htmlExpr.test(_.options.prevArrow)) {
                            _.$prevArrow.prependTo(_.options.appendArrows);
                        }if (_.htmlExpr.test(_.options.nextArrow)) {
                            _.$nextArrow.appendTo(_.options.appendArrows);
                        }if (_.options.infinite !== true) {
                            _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                        }
                    } else {
                        _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({ 'aria-disabled': 'true', 'tabindex': '-1' });
                    }
                }
            };Slick.prototype.buildDots = function () {
                var _ = this,
                    i,
                    dot;if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
                    _.$slider.addClass('slick-dotted');dot = $('<ul />').addClass(_.options.dotsClass);for (i = 0; i <= _.getDotCount(); i += 1) {
                        dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
                    }_.$dots = dot.appendTo(_.options.appendDots);_.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
                }
            };Slick.prototype.buildOut = function () {
                var _ = this;_.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');_.slideCount = _.$slides.length;_.$slides.each(function (index, element) {
                    $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
                });_.$slider.addClass('slick-slider');_.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();_.$list = _.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();_.$slideTrack.css('opacity', 0);if (_.options.centerMode === true || _.options.swipeToSlide === true) {
                    _.options.slidesToScroll = 1;
                }$('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');_.setupInfinite();_.buildArrows();_.buildDots();_.updateDots();_.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);if (_.options.draggable === true) {
                    _.$list.addClass('draggable');
                }
            };Slick.prototype.buildRows = function () {
                var _ = this,
                    a,
                    b,
                    c,
                    newSlides,
                    numOfSlides,
                    originalSlides,
                    slidesPerSection;newSlides = document.createDocumentFragment();originalSlides = _.$slider.children();if (_.options.rows > 1) {
                    slidesPerSection = _.options.slidesPerRow * _.options.rows;numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);for (a = 0; a < numOfSlides; a++) {
                        var slide = document.createElement('div');for (b = 0; b < _.options.rows; b++) {
                            var row = document.createElement('div');for (c = 0; c < _.options.slidesPerRow; c++) {
                                var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);if (originalSlides.get(target)) {
                                    row.appendChild(originalSlides.get(target));
                                }
                            }slide.appendChild(row);
                        }newSlides.appendChild(slide);
                    }_.$slider.empty().append(newSlides);_.$slider.children().children().children().css({ 'width': 100 / _.options.slidesPerRow + '%', 'display': 'inline-block' });
                }
            };Slick.prototype.checkResponsive = function (initial, forceUpdate) {
                var _ = this,
                    breakpoint,
                    targetBreakpoint,
                    respondToWidth,
                    triggerBreakpoint = false;var sliderWidth = _.$slider.width();var windowWidth = window.innerWidth || $(window).width();if (_.respondTo === 'window') {
                    respondToWidth = windowWidth;
                } else if (_.respondTo === 'slider') {
                    respondToWidth = sliderWidth;
                } else if (_.respondTo === 'min') {
                    respondToWidth = Math.min(windowWidth, sliderWidth);
                }if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
                    targetBreakpoint = null;for (breakpoint in _.breakpoints) {
                        if (_.breakpoints.hasOwnProperty(breakpoint)) {
                            if (_.originalSettings.mobileFirst === false) {
                                if (respondToWidth < _.breakpoints[breakpoint]) {
                                    targetBreakpoint = _.breakpoints[breakpoint];
                                }
                            } else {
                                if (respondToWidth > _.breakpoints[breakpoint]) {
                                    targetBreakpoint = _.breakpoints[breakpoint];
                                }
                            }
                        }
                    }if (targetBreakpoint !== null) {
                        if (_.activeBreakpoint !== null) {
                            if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                                _.activeBreakpoint = targetBreakpoint;if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                                    _.unslick(targetBreakpoint);
                                } else {
                                    _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);if (initial === true) {
                                        _.currentSlide = _.options.initialSlide;
                                    }_.refresh(initial);
                                }triggerBreakpoint = targetBreakpoint;
                            }
                        } else {
                            _.activeBreakpoint = targetBreakpoint;if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                                _.unslick(targetBreakpoint);
                            } else {
                                _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);if (initial === true) {
                                    _.currentSlide = _.options.initialSlide;
                                }_.refresh(initial);
                            }triggerBreakpoint = targetBreakpoint;
                        }
                    } else {
                        if (_.activeBreakpoint !== null) {
                            _.activeBreakpoint = null;_.options = _.originalSettings;if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }_.refresh(initial);triggerBreakpoint = targetBreakpoint;
                        }
                    }if (!initial && triggerBreakpoint !== false) {
                        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
                    }
                }
            };Slick.prototype.changeSlide = function (event, dontAnimate) {
                var _ = this,
                    $target = $(event.currentTarget),
                    indexOffset,
                    slideOffset,
                    unevenOffset;if ($target.is('a')) {
                    event.preventDefault();
                }if (!$target.is('li')) {
                    $target = $target.closest('li');
                }unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;switch (event.data.message) {case 'previous':
                    slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;if (_.slideCount > _.options.slidesToShow) {
                        _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                    }break;case 'next':
                    slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;if (_.slideCount > _.options.slidesToShow) {
                        _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                    }break;case 'index':
                    var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;_.slideHandler(_.checkNavigable(index), false, dontAnimate);$target.children().trigger('focus');break;default:
                    return;}
            };Slick.prototype.checkNavigable = function (index) {
                var _ = this,
                    navigables,
                    prevNavigable;navigables = _.getNavigableIndexes();prevNavigable = 0;if (index > navigables[navigables.length - 1]) {
                    index = navigables[navigables.length - 1];
                } else {
                    for (var n in navigables) {
                        if (index < navigables[n]) {
                            index = prevNavigable;break;
                        }prevNavigable = navigables[n];
                    }
                }return index;
            };Slick.prototype.cleanUpEvents = function () {
                var _ = this;if (_.options.dots && _.$dots !== null) {
                    $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));
                }_.$slider.off('focus.slick blur.slick');if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
                    _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);_.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
                }_.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);_.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);_.$list.off('touchend.slick mouseup.slick', _.swipeHandler);_.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);_.$list.off('click.slick', _.clickHandler);$(document).off(_.visibilityChange, _.visibility);_.cleanUpSlideEvents();if (_.options.accessibility === true) {
                    _.$list.off('keydown.slick', _.keyHandler);
                }if (_.options.focusOnSelect === true) {
                    $(_.$slideTrack).children().off('click.slick', _.selectHandler);
                }$(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);$(window).off('resize.slick.slick-' + _.instanceUid, _.resize);$('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);$(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);$(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
            };Slick.prototype.cleanUpSlideEvents = function () {
                var _ = this;_.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));_.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
            };Slick.prototype.cleanUpRows = function () {
                var _ = this,
                    originalSlides;if (_.options.rows > 1) {
                    originalSlides = _.$slides.children().children();originalSlides.removeAttr('style');_.$slider.empty().append(originalSlides);
                }
            };Slick.prototype.clickHandler = function (event) {
                var _ = this;if (_.shouldClick === false) {
                    event.stopImmediatePropagation();event.stopPropagation();event.preventDefault();
                }
            };Slick.prototype.destroy = function (refresh) {
                var _ = this;_.autoPlayClear();_.touchObject = {};_.cleanUpEvents();$('.slick-cloned', _.$slider).detach();if (_.$dots) {
                    _.$dots.remove();
                }if (_.$prevArrow && _.$prevArrow.length) {
                    _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');if (_.htmlExpr.test(_.options.prevArrow)) {
                        _.$prevArrow.remove();
                    }
                }if (_.$nextArrow && _.$nextArrow.length) {
                    _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');if (_.htmlExpr.test(_.options.nextArrow)) {
                        _.$nextArrow.remove();
                    }
                }if (_.$slides) {
                    _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
                        $(this).attr('style', $(this).data('originalStyling'));
                    });_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.detach();_.$list.detach();_.$slider.append(_.$slides);
                }_.cleanUpRows();_.$slider.removeClass('slick-slider');_.$slider.removeClass('slick-initialized');_.$slider.removeClass('slick-dotted');_.unslicked = true;if (!refresh) {
                    _.$slider.trigger('destroy', [_]);
                }
            };Slick.prototype.disableTransition = function (slide) {
                var _ = this,
                    transition = {};transition[_.transitionType] = '';if (_.options.fade === false) {
                    _.$slideTrack.css(transition);
                } else {
                    _.$slides.eq(slide).css(transition);
                }
            };Slick.prototype.fadeSlide = function (slideIndex, callback) {
                var _ = this;if (_.cssTransitions === false) {
                    _.$slides.eq(slideIndex).css({ zIndex: _.options.zIndex });_.$slides.eq(slideIndex).animate({ opacity: 1 }, _.options.speed, _.options.easing, callback);
                } else {
                    _.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({ opacity: 1, zIndex: _.options.zIndex });if (callback) {
                        setTimeout(function () {
                            _.disableTransition(slideIndex);callback.call();
                        }, _.options.speed);
                    }
                }
            };Slick.prototype.fadeSlideOut = function (slideIndex) {
                var _ = this;if (_.cssTransitions === false) {
                    _.$slides.eq(slideIndex).animate({ opacity: 0, zIndex: _.options.zIndex - 2 }, _.options.speed, _.options.easing);
                } else {
                    _.applyTransition(slideIndex);_.$slides.eq(slideIndex).css({ opacity: 0, zIndex: _.options.zIndex - 2 });
                }
            };Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
                var _ = this;if (filter !== null) {
                    _.$slidesCache = _.$slides;_.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.filter(filter).appendTo(_.$slideTrack);_.reinit();
                }
            };Slick.prototype.focusHandler = function () {
                var _ = this;_.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*:not(.slick-arrow)', function (event) {
                    event.stopImmediatePropagation();var $sf = $(this);setTimeout(function () {
                        if (_.options.pauseOnFocus) {
                            _.focussed = $sf.is(':focus');_.autoPlay();
                        }
                    }, 0);
                });
            };Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
                var _ = this;return _.currentSlide;
            };Slick.prototype.getDotCount = function () {
                var _ = this;var breakPoint = 0;var counter = 0;var pagerQty = 0;if (_.options.infinite === true) {
                    while (breakPoint < _.slideCount) {
                        ++pagerQty;breakPoint = counter + _.options.slidesToScroll;counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                    }
                } else if (_.options.centerMode === true) {
                    pagerQty = _.slideCount;
                } else if (!_.options.asNavFor) {
                    pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
                } else {
                    while (breakPoint < _.slideCount) {
                        ++pagerQty;breakPoint = counter + _.options.slidesToScroll;counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                    }
                }return pagerQty - 1;
            };Slick.prototype.getLeft = function (slideIndex) {
                var _ = this,
                    targetLeft,
                    verticalHeight,
                    verticalOffset = 0,
                    targetSlide;_.slideOffset = 0;verticalHeight = _.$slides.first().outerHeight(true);if (_.options.infinite === true) {
                    if (_.slideCount > _.options.slidesToShow) {
                        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;verticalOffset = verticalHeight * _.options.slidesToShow * -1;
                    }if (_.slideCount % _.options.slidesToScroll !== 0) {
                        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                            if (slideIndex > _.slideCount) {
                                _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
                            } else {
                                _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
                            }
                        }
                    }
                } else {
                    if (slideIndex + _.options.slidesToShow > _.slideCount) {
                        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
                    }
                }if (_.slideCount <= _.options.slidesToShow) {
                    _.slideOffset = 0;verticalOffset = 0;
                }if (_.options.centerMode === true && _.options.infinite === true) {
                    _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
                } else if (_.options.centerMode === true) {
                    _.slideOffset = 0;_.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
                }if (_.options.vertical === false) {
                    targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
                } else {
                    targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
                }if (_.options.variableWidth === true) {
                    if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                    } else {
                        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
                    }if (_.options.rtl === true) {
                        if (targetSlide[0]) {
                            targetLeft = _.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width();
                        } else {
                            targetLeft = 0;
                        }
                    } else {
                        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                    }if (_.options.centerMode === true) {
                        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                            targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                        } else {
                            targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                        }if (_.options.rtl === true) {
                            if (targetSlide[0]) {
                                targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                            } else {
                                targetLeft = 0;
                            }
                        } else {
                            targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                        }targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
                    }
                }return targetLeft;
            };Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
                var _ = this;return _.options[option];
            };Slick.prototype.getNavigableIndexes = function () {
                var _ = this,
                    breakPoint = 0,
                    counter = 0,
                    indexes = [],
                    max;if (_.options.infinite === false) {
                    max = _.slideCount;
                } else {
                    breakPoint = _.options.slidesToScroll * -1;counter = _.options.slidesToScroll * -1;max = _.slideCount * 2;
                }while (breakPoint < max) {
                    indexes.push(breakPoint);breakPoint = counter + _.options.slidesToScroll;counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }return indexes;
            };Slick.prototype.getSlick = function () {
                return this;
            };Slick.prototype.getSlideCount = function () {
                var _ = this,
                    slidesTraversed,
                    swipedSlide,
                    centerOffset;centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;if (_.options.swipeToSlide === true) {
                    _.$slideTrack.find('.slick-slide').each(function (index, slide) {
                        if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
                            swipedSlide = slide;return false;
                        }
                    });slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;return slidesTraversed;
                } else {
                    return _.options.slidesToScroll;
                }
            };Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
                var _ = this;_.changeSlide({ data: { message: 'index', index: parseInt(slide) } }, dontAnimate);
            };Slick.prototype.init = function (creation) {
                var _ = this;if (!$(_.$slider).hasClass('slick-initialized')) {
                    $(_.$slider).addClass('slick-initialized');_.buildRows();_.buildOut();_.setProps();_.startLoad();_.loadSlider();_.initializeEvents();_.updateArrows();_.updateDots();_.checkResponsive(true);_.focusHandler();
                }if (creation) {
                    _.$slider.trigger('init', [_]);
                }if (_.options.accessibility === true) {
                    _.initADA();
                }if (_.options.autoplay) {
                    _.paused = false;_.autoPlay();
                }
            };Slick.prototype.initADA = function () {
                var _ = this;_.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({ 'aria-hidden': 'true', 'tabindex': '-1' }).find('a, input, button, select').attr({ 'tabindex': '-1' });_.$slideTrack.attr('role', 'listbox');_.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
                    $(this).attr({ 'role': 'option', 'aria-describedby': 'slick-slide' + _.instanceUid + i + '' });
                });if (_.$dots !== null) {
                    _.$dots.attr('role', 'tablist').find('li').each(function (i) {
                        $(this).attr({ 'role': 'presentation', 'aria-selected': 'false', 'aria-controls': 'navigation' + _.instanceUid + i + '', 'id': 'slick-slide' + _.instanceUid + i + '' });
                    }).first().attr('aria-selected', 'true').end().find('button').attr('role', 'button').end().closest('div').attr('role', 'toolbar');
                }_.activateADA();
            };Slick.prototype.initArrowEvents = function () {
                var _ = this;if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
                    _.$prevArrow.off('click.slick').on('click.slick', { message: 'previous' }, _.changeSlide);_.$nextArrow.off('click.slick').on('click.slick', { message: 'next' }, _.changeSlide);
                }
            };Slick.prototype.initDotEvents = function () {
                var _ = this;if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
                    $('li', _.$dots).on('click.slick', { message: 'index' }, _.changeSlide);
                }if (_.options.dots === true && _.options.pauseOnDotsHover === true) {
                    $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
                }
            };Slick.prototype.initSlideEvents = function () {
                var _ = this;if (_.options.pauseOnHover) {
                    _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));_.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
                }
            };Slick.prototype.initializeEvents = function () {
                var _ = this;_.initArrowEvents();_.initDotEvents();_.initSlideEvents();_.$list.on('touchstart.slick mousedown.slick', { action: 'start' }, _.swipeHandler);_.$list.on('touchmove.slick mousemove.slick', { action: 'move' }, _.swipeHandler);_.$list.on('touchend.slick mouseup.slick', { action: 'end' }, _.swipeHandler);_.$list.on('touchcancel.slick mouseleave.slick', { action: 'end' }, _.swipeHandler);_.$list.on('click.slick', _.clickHandler);$(document).on(_.visibilityChange, $.proxy(_.visibility, _));if (_.options.accessibility === true) {
                    _.$list.on('keydown.slick', _.keyHandler);
                }if (_.options.focusOnSelect === true) {
                    $(_.$slideTrack).children().on('click.slick', _.selectHandler);
                }$(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));$(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));$('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);$(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);$(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);
            };Slick.prototype.initUI = function () {
                var _ = this;if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
                    _.$prevArrow.show();_.$nextArrow.show();
                }if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
                    _.$dots.show();
                }
            };Slick.prototype.keyHandler = function (event) {
                var _ = this;if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
                    if (event.keyCode === 37 && _.options.accessibility === true) {
                        _.changeSlide({ data: { message: _.options.rtl === true ? 'next' : 'previous' } });
                    } else if (event.keyCode === 39 && _.options.accessibility === true) {
                        _.changeSlide({ data: { message: _.options.rtl === true ? 'previous' : 'next' } });
                    }
                }
            };Slick.prototype.lazyLoad = function () {
                var _ = this,
                    loadRange,
                    cloneRange,
                    rangeStart,
                    rangeEnd;function loadImages(imagesScope) {
                    $('img[data-lazy]', imagesScope).each(function () {
                        var image = $(this),
                            imageSource = $(this).attr('data-lazy'),
                            imageToLoad = document.createElement('img');imageToLoad.onload = function () {
                            image.animate({ opacity: 0 }, 100, function () {
                                image.attr('src', imageSource).animate({ opacity: 1 }, 200, function () {
                                    image.removeAttr('data-lazy').removeClass('slick-loading');
                                });_.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                            });
                        };imageToLoad.onerror = function () {
                            image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError', [_, image, imageSource]);
                        };imageToLoad.src = imageSource;
                    });
                }if (_.options.centerMode === true) {
                    if (_.options.infinite === true) {
                        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);rangeEnd = rangeStart + _.options.slidesToShow + 2;
                    } else {
                        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
                    }
                } else {
                    rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);if (_.options.fade === true) {
                        if (rangeStart > 0) rangeStart--;if (rangeEnd <= _.slideCount) rangeEnd++;
                    }
                }loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);loadImages(loadRange);if (_.slideCount <= _.options.slidesToShow) {
                    cloneRange = _.$slider.find('.slick-slide');loadImages(cloneRange);
                } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
                    cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);loadImages(cloneRange);
                } else if (_.currentSlide === 0) {
                    cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);loadImages(cloneRange);
                }
            };Slick.prototype.loadSlider = function () {
                var _ = this;_.setPosition();_.$slideTrack.css({ opacity: 1 });_.$slider.removeClass('slick-loading');_.initUI();if (_.options.lazyLoad === 'progressive') {
                    _.progressiveLazyLoad();
                }
            };Slick.prototype.next = Slick.prototype.slickNext = function () {
                var _ = this;_.changeSlide({ data: { message: 'next' } });
            };Slick.prototype.orientationChange = function () {
                var _ = this;_.checkResponsive();_.setPosition();
            };Slick.prototype.pause = Slick.prototype.slickPause = function () {
                var _ = this;_.autoPlayClear();_.paused = true;
            };Slick.prototype.play = Slick.prototype.slickPlay = function () {
                var _ = this;_.autoPlay();_.options.autoplay = true;_.paused = false;_.focussed = false;_.interrupted = false;
            };Slick.prototype.postSlide = function (index) {
                var _ = this;if (!_.unslicked) {
                    _.$slider.trigger('afterChange', [_, index]);_.animating = false;_.setPosition();_.swipeLeft = null;if (_.options.autoplay) {
                        _.autoPlay();
                    }if (_.options.accessibility === true) {
                        _.initADA();
                    }
                }
            };Slick.prototype.prev = Slick.prototype.slickPrev = function () {
                var _ = this;_.changeSlide({ data: { message: 'previous' } });
            };Slick.prototype.preventDefault = function (event) {
                event.preventDefault();
            };Slick.prototype.progressiveLazyLoad = function (tryCount) {
                tryCount = tryCount || 1;var _ = this,
                    $imgsToLoad = $('img[data-lazy]', _.$slider),
                    image,
                    imageSource,
                    imageToLoad;if ($imgsToLoad.length) {
                    image = $imgsToLoad.first();imageSource = image.attr('data-lazy');imageToLoad = document.createElement('img');imageToLoad.onload = function () {
                        image.attr('src', imageSource).removeAttr('data-lazy').removeClass('slick-loading');if (_.options.adaptiveHeight === true) {
                            _.setPosition();
                        }_.$slider.trigger('lazyLoaded', [_, image, imageSource]);_.progressiveLazyLoad();
                    };imageToLoad.onerror = function () {
                        if (tryCount < 3) {
                            setTimeout(function () {
                                _.progressiveLazyLoad(tryCount + 1);
                            }, 500);
                        } else {
                            image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');_.$slider.trigger('lazyLoadError', [_, image, imageSource]);_.progressiveLazyLoad();
                        }
                    };imageToLoad.src = imageSource;
                } else {
                    _.$slider.trigger('allImagesLoaded', [_]);
                }
            };Slick.prototype.refresh = function (initializing) {
                var _ = this,
                    currentSlide,
                    lastVisibleIndex;lastVisibleIndex = _.slideCount - _.options.slidesToShow;if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
                    _.currentSlide = lastVisibleIndex;
                }if (_.slideCount <= _.options.slidesToShow) {
                    _.currentSlide = 0;
                }currentSlide = _.currentSlide;_.destroy(true);$.extend(_, _.initials, { currentSlide: currentSlide });_.init();if (!initializing) {
                    _.changeSlide({ data: { message: 'index', index: currentSlide } }, false);
                }
            };Slick.prototype.registerBreakpoints = function () {
                var _ = this,
                    breakpoint,
                    currentBreakpoint,
                    l,
                    responsiveSettings = _.options.responsive || null;if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
                    _.respondTo = _.options.respondTo || 'window';for (breakpoint in responsiveSettings) {
                        l = _.breakpoints.length - 1;currentBreakpoint = responsiveSettings[breakpoint].breakpoint;if (responsiveSettings.hasOwnProperty(breakpoint)) {
                            while (l >= 0) {
                                if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                                    _.breakpoints.splice(l, 1);
                                }l--;
                            }_.breakpoints.push(currentBreakpoint);_.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                        }
                    }_.breakpoints.sort(function (a, b) {
                        return _.options.mobileFirst ? a - b : b - a;
                    });
                }
            };Slick.prototype.reinit = function () {
                var _ = this;_.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');_.slideCount = _.$slides.length;if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
                    _.currentSlide = _.currentSlide - _.options.slidesToScroll;
                }if (_.slideCount <= _.options.slidesToShow) {
                    _.currentSlide = 0;
                }_.registerBreakpoints();_.setProps();_.setupInfinite();_.buildArrows();_.updateArrows();_.initArrowEvents();_.buildDots();_.updateDots();_.initDotEvents();_.cleanUpSlideEvents();_.initSlideEvents();_.checkResponsive(false, true);if (_.options.focusOnSelect === true) {
                    $(_.$slideTrack).children().on('click.slick', _.selectHandler);
                }_.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);_.setPosition();_.focusHandler();_.paused = !_.options.autoplay;_.autoPlay();_.$slider.trigger('reInit', [_]);
            };Slick.prototype.resize = function () {
                var _ = this;if ($(window).width() !== _.windowWidth) {
                    clearTimeout(_.windowDelay);_.windowDelay = window.setTimeout(function () {
                        _.windowWidth = $(window).width();_.checkResponsive();if (!_.unslicked) {
                            _.setPosition();
                        }
                    }, 50);
                }
            };Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
                var _ = this;if (typeof index === 'boolean') {
                    removeBefore = index;index = removeBefore === true ? 0 : _.slideCount - 1;
                } else {
                    index = removeBefore === true ? --index : index;
                }if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
                    return false;
                }_.unload();if (removeAll === true) {
                    _.$slideTrack.children().remove();
                } else {
                    _.$slideTrack.children(this.options.slide).eq(index).remove();
                }_.$slides = _.$slideTrack.children(this.options.slide);_.$slideTrack.children(this.options.slide).detach();_.$slideTrack.append(_.$slides);_.$slidesCache = _.$slides;_.reinit();
            };Slick.prototype.setCSS = function (position) {
                var _ = this,
                    positionProps = {},
                    x,
                    y;if (_.options.rtl === true) {
                    position = -position;
                }x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';positionProps[_.positionProp] = position;if (_.transformsEnabled === false) {
                    _.$slideTrack.css(positionProps);
                } else {
                    positionProps = {};if (_.cssTransitions === false) {
                        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';_.$slideTrack.css(positionProps);
                    } else {
                        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';_.$slideTrack.css(positionProps);
                    }
                }
            };Slick.prototype.setDimensions = function () {
                var _ = this;if (_.options.vertical === false) {
                    if (_.options.centerMode === true) {
                        _.$list.css({ padding: '0px ' + _.options.centerPadding });
                    }
                } else {
                    _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);if (_.options.centerMode === true) {
                        _.$list.css({ padding: _.options.centerPadding + ' 0px' });
                    }
                }_.listWidth = _.$list.width();_.listHeight = _.$list.height();if (_.options.vertical === false && _.options.variableWidth === false) {
                    _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);_.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
                } else if (_.options.variableWidth === true) {
                    _.$slideTrack.width(5000 * _.slideCount);
                } else {
                    _.slideWidth = Math.ceil(_.listWidth);_.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
                }var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
            };Slick.prototype.setFade = function () {
                var _ = this,
                    targetLeft;_.$slides.each(function (index, element) {
                    targetLeft = _.slideWidth * index * -1;if (_.options.rtl === true) {
                        $(element).css({ position: 'relative', right: targetLeft, top: 0, zIndex: _.options.zIndex - 2, opacity: 0 });
                    } else {
                        $(element).css({ position: 'relative', left: targetLeft, top: 0, zIndex: _.options.zIndex - 2, opacity: 0 });
                    }
                });_.$slides.eq(_.currentSlide).css({ zIndex: _.options.zIndex - 1, opacity: 1 });
            };Slick.prototype.setHeight = function () {
                var _ = this;if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
                    var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);_.$list.css('height', targetHeight);
                }
            };Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
                var _ = this,
                    l,
                    item,
                    option,
                    value,
                    refresh = false,
                    type;if ($.type(arguments[0]) === 'object') {
                    option = arguments[0];refresh = arguments[1];type = 'multiple';
                } else if ($.type(arguments[0]) === 'string') {
                    option = arguments[0];value = arguments[1];refresh = arguments[2];if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
                        type = 'responsive';
                    } else if (typeof arguments[1] !== 'undefined') {
                        type = 'single';
                    }
                }if (type === 'single') {
                    _.options[option] = value;
                } else if (type === 'multiple') {
                    $.each(option, function (opt, val) {
                        _.options[opt] = val;
                    });
                } else if (type === 'responsive') {
                    for (item in value) {
                        if ($.type(_.options.responsive) !== 'array') {
                            _.options.responsive = [value[item]];
                        } else {
                            l = _.options.responsive.length - 1;while (l >= 0) {
                                if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
                                    _.options.responsive.splice(l, 1);
                                }l--;
                            }_.options.responsive.push(value[item]);
                        }
                    }
                }if (refresh) {
                    _.unload();_.reinit();
                }
            };Slick.prototype.setPosition = function () {
                var _ = this;_.setDimensions();_.setHeight();if (_.options.fade === false) {
                    _.setCSS(_.getLeft(_.currentSlide));
                } else {
                    _.setFade();
                }_.$slider.trigger('setPosition', [_]);
            };Slick.prototype.setProps = function () {
                var _ = this,
                    bodyStyle = document.body.style;_.positionProp = _.options.vertical === true ? 'top' : 'left';if (_.positionProp === 'top') {
                    _.$slider.addClass('slick-vertical');
                } else {
                    _.$slider.removeClass('slick-vertical');
                }if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
                    if (_.options.useCSS === true) {
                        _.cssTransitions = true;
                    }
                }if (_.options.fade) {
                    if (typeof _.options.zIndex === 'number') {
                        if (_.options.zIndex < 3) {
                            _.options.zIndex = 3;
                        }
                    } else {
                        _.options.zIndex = _.defaults.zIndex;
                    }
                }if (bodyStyle.OTransform !== undefined) {
                    _.animType = 'OTransform';_.transformType = '-o-transform';_.transitionType = 'OTransition';if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
                }if (bodyStyle.MozTransform !== undefined) {
                    _.animType = 'MozTransform';_.transformType = '-moz-transform';_.transitionType = 'MozTransition';if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
                }if (bodyStyle.webkitTransform !== undefined) {
                    _.animType = 'webkitTransform';_.transformType = '-webkit-transform';_.transitionType = 'webkitTransition';if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
                }if (bodyStyle.msTransform !== undefined) {
                    _.animType = 'msTransform';_.transformType = '-ms-transform';_.transitionType = 'msTransition';if (bodyStyle.msTransform === undefined) _.animType = false;
                }if (bodyStyle.transform !== undefined && _.animType !== false) {
                    _.animType = 'transform';_.transformType = 'transform';_.transitionType = 'transition';
                }_.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
            };Slick.prototype.setSlideClasses = function (index) {
                var _ = this,
                    centerOffset,
                    allSlides,
                    indexOffset,
                    remainder;allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');_.$slides.eq(index).addClass('slick-current');if (_.options.centerMode === true) {
                    centerOffset = Math.floor(_.options.slidesToShow / 2);if (_.options.infinite === true) {
                        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
                            _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
                        } else {
                            indexOffset = _.options.slidesToShow + index;allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
                        }if (index === 0) {
                            allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                        } else if (index === _.slideCount - 1) {
                            allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                        }
                    }_.$slides.eq(index).addClass('slick-center');
                } else {
                    if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
                        _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
                    } else if (allSlides.length <= _.options.slidesToShow) {
                        allSlides.addClass('slick-active').attr('aria-hidden', 'false');
                    } else {
                        remainder = _.slideCount % _.options.slidesToShow;indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
                            allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
                        } else {
                            allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
                        }
                    }
                }if (_.options.lazyLoad === 'ondemand') {
                    _.lazyLoad();
                }
            };Slick.prototype.setupInfinite = function () {
                var _ = this,
                    i,
                    slideIndex,
                    infiniteCount;if (_.options.fade === true) {
                    _.options.centerMode = false;
                }if (_.options.infinite === true && _.options.fade === false) {
                    slideIndex = null;if (_.slideCount > _.options.slidesToShow) {
                        if (_.options.centerMode === true) {
                            infiniteCount = _.options.slidesToShow + 1;
                        } else {
                            infiniteCount = _.options.slidesToShow;
                        }for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
                            slideIndex = i - 1;$(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
                        }for (i = 0; i < infiniteCount; i += 1) {
                            slideIndex = i;$(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
                        }_.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
                            $(this).attr('id', '');
                        });
                    }
                }
            };Slick.prototype.interrupt = function (toggle) {
                var _ = this;if (!toggle) {
                    _.autoPlay();
                }_.interrupted = toggle;
            };Slick.prototype.selectHandler = function (event) {
                var _ = this;var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');var index = parseInt(targetElement.attr('data-slick-index'));if (!index) index = 0;if (_.slideCount <= _.options.slidesToShow) {
                    _.setSlideClasses(index);_.asNavFor(index);return;
                }_.slideHandler(index);
            };Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
                var targetSlide,
                    animSlide,
                    oldSlide,
                    slideLeft,
                    targetLeft = null,
                    _ = this,
                    navTarget;sync = sync || false;if (_.animating === true && _.options.waitForAnimate === true) {
                    return;
                }if (_.options.fade === true && _.currentSlide === index) {
                    return;
                }if (_.slideCount <= _.options.slidesToShow) {
                    return;
                }if (sync === false) {
                    _.asNavFor(index);
                }targetSlide = index;targetLeft = _.getLeft(targetSlide);slideLeft = _.getLeft(_.currentSlide);_.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
                    if (_.options.fade === false) {
                        targetSlide = _.currentSlide;if (dontAnimate !== true) {
                            _.animateSlide(slideLeft, function () {
                                _.postSlide(targetSlide);
                            });
                        } else {
                            _.postSlide(targetSlide);
                        }
                    }return;
                } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
                    if (_.options.fade === false) {
                        targetSlide = _.currentSlide;if (dontAnimate !== true) {
                            _.animateSlide(slideLeft, function () {
                                _.postSlide(targetSlide);
                            });
                        } else {
                            _.postSlide(targetSlide);
                        }
                    }return;
                }if (_.options.autoplay) {
                    clearInterval(_.autoPlayTimer);
                }if (targetSlide < 0) {
                    if (_.slideCount % _.options.slidesToScroll !== 0) {
                        animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
                    } else {
                        animSlide = _.slideCount + targetSlide;
                    }
                } else if (targetSlide >= _.slideCount) {
                    if (_.slideCount % _.options.slidesToScroll !== 0) {
                        animSlide = 0;
                    } else {
                        animSlide = targetSlide - _.slideCount;
                    }
                } else {
                    animSlide = targetSlide;
                }_.animating = true;_.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);oldSlide = _.currentSlide;_.currentSlide = animSlide;_.setSlideClasses(_.currentSlide);if (_.options.asNavFor) {
                    navTarget = _.getNavTarget();navTarget = navTarget.slick('getSlick');if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                        navTarget.setSlideClasses(_.currentSlide);
                    }
                }_.updateDots();_.updateArrows();if (_.options.fade === true) {
                    if (dontAnimate !== true) {
                        _.fadeSlideOut(oldSlide);_.fadeSlide(animSlide, function () {
                            _.postSlide(animSlide);
                        });
                    } else {
                        _.postSlide(animSlide);
                    }_.animateHeight();return;
                }if (dontAnimate !== true) {
                    _.animateSlide(targetLeft, function () {
                        _.postSlide(animSlide);
                    });
                } else {
                    _.postSlide(animSlide);
                }
            };Slick.prototype.startLoad = function () {
                var _ = this;if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
                    _.$prevArrow.hide();_.$nextArrow.hide();
                }if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
                    _.$dots.hide();
                }_.$slider.addClass('slick-loading');
            };Slick.prototype.swipeDirection = function () {
                var xDist,
                    yDist,
                    r,
                    swipeAngle,
                    _ = this;xDist = _.touchObject.startX - _.touchObject.curX;yDist = _.touchObject.startY - _.touchObject.curY;r = Math.atan2(yDist, xDist);swipeAngle = Math.round(r * 180 / Math.PI);if (swipeAngle < 0) {
                    swipeAngle = 360 - Math.abs(swipeAngle);
                }if (swipeAngle <= 45 && swipeAngle >= 0) {
                    return _.options.rtl === false ? 'left' : 'right';
                }if (swipeAngle <= 360 && swipeAngle >= 315) {
                    return _.options.rtl === false ? 'left' : 'right';
                }if (swipeAngle >= 135 && swipeAngle <= 225) {
                    return _.options.rtl === false ? 'right' : 'left';
                }if (_.options.verticalSwiping === true) {
                    if (swipeAngle >= 35 && swipeAngle <= 135) {
                        return 'down';
                    } else {
                        return 'up';
                    }
                }return 'vertical';
            };Slick.prototype.swipeEnd = function (event) {
                var _ = this,
                    slideCount,
                    direction;_.dragging = false;_.interrupted = false;_.shouldClick = _.touchObject.swipeLength > 10 ? false : true;if (_.touchObject.curX === undefined) {
                    return false;
                }if (_.touchObject.edgeHit === true) {
                    _.$slider.trigger('edge', [_, _.swipeDirection()]);
                }if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
                    direction = _.swipeDirection();switch (direction) {case 'left':case 'down':
                        slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();_.currentDirection = 0;break;case 'right':case 'up':
                        slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();_.currentDirection = 1;break;default:}if (direction != 'vertical') {
                        _.slideHandler(slideCount);_.touchObject = {};_.$slider.trigger('swipe', [_, direction]);
                    }
                } else {
                    if (_.touchObject.startX !== _.touchObject.curX) {
                        _.slideHandler(_.currentSlide);_.touchObject = {};
                    }
                }
            };Slick.prototype.swipeHandler = function (event) {
                var _ = this;if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
                    return;
                } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
                    return;
                }_.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;_.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;if (_.options.verticalSwiping === true) {
                    _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
                }switch (event.data.action) {case 'start':
                    _.swipeStart(event);break;case 'move':
                    _.swipeMove(event);break;case 'end':
                    _.swipeEnd(event);break;}
            };Slick.prototype.swipeMove = function (event) {
                var _ = this,
                    edgeWasHit = false,
                    curLeft,
                    swipeDirection,
                    swipeLength,
                    positionOffset,
                    touches;touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;if (!_.dragging || touches && touches.length !== 1) {
                    return false;
                }curLeft = _.getLeft(_.currentSlide);_.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;_.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;_.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));if (_.options.verticalSwiping === true) {
                    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
                }swipeDirection = _.swipeDirection();if (swipeDirection === 'vertical') {
                    return;
                }if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
                    event.preventDefault();
                }positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);if (_.options.verticalSwiping === true) {
                    positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
                }swipeLength = _.touchObject.swipeLength;_.touchObject.edgeHit = false;if (_.options.infinite === false) {
                    if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
                        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;_.touchObject.edgeHit = true;
                    }
                }if (_.options.vertical === false) {
                    _.swipeLeft = curLeft + swipeLength * positionOffset;
                } else {
                    _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
                }if (_.options.verticalSwiping === true) {
                    _.swipeLeft = curLeft + swipeLength * positionOffset;
                }if (_.options.fade === true || _.options.touchMove === false) {
                    return false;
                }if (_.animating === true) {
                    _.swipeLeft = null;return false;
                }_.setCSS(_.swipeLeft);
            };Slick.prototype.swipeStart = function (event) {
                var _ = this,
                    touches;_.interrupted = true;if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
                    _.touchObject = {};return false;
                }if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
                    touches = event.originalEvent.touches[0];
                }_.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;_.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;_.dragging = true;
            };Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
                var _ = this;if (_.$slidesCache !== null) {
                    _.unload();_.$slideTrack.children(this.options.slide).detach();_.$slidesCache.appendTo(_.$slideTrack);_.reinit();
                }
            };Slick.prototype.unload = function () {
                var _ = this;$('.slick-cloned', _.$slider).remove();if (_.$dots) {
                    _.$dots.remove();
                }if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.remove();
                }if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.remove();
                }_.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
            };Slick.prototype.unslick = function (fromBreakpoint) {
                var _ = this;_.$slider.trigger('unslick', [_, fromBreakpoint]);_.destroy();
            };Slick.prototype.updateArrows = function () {
                var _ = this,
                    centerOffset;centerOffset = Math.floor(_.options.slidesToShow / 2);if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
                    _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');if (_.currentSlide === 0) {
                        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');_.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
                    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
                        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
                    } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
                        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');_.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
                    }
                }
            };Slick.prototype.updateDots = function () {
                var _ = this;if (_.$dots !== null) {
                    _.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true');_.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden', 'false');
                }
            };Slick.prototype.visibility = function () {
                var _ = this;if (_.options.autoplay) {
                    if (document[_.hidden]) {
                        _.interrupted = true;
                    } else {
                        _.interrupted = false;
                    }
                }
            };$.fn.slick = function () {
                var _ = this,
                    opt = arguments[0],
                    args = Array.prototype.slice.call(arguments, 1),
                    l = _.length,
                    i,
                    ret;for (i = 0; i < l; i++) {
                    if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);if (typeof ret != 'undefined') return ret;
                }return _;
            };
        });

        /***/ }),
    /* 4 */
    /***/ (function(module, exports) {

        var g;

// This works in non-strict mode
        g = (function() {
            return this;
        })();

        try {
            // This works if eval is allowed (see CSP)
            g = g || Function("return this")() || (1,eval)("this");
        } catch(e) {
            // This works if the window reference is available
            if(typeof window === "object")
                g = window;
        }

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

        module.exports = g;


        /***/ }),
    /* 5 */,
    /* 6 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var helperFunctions = __webpack_require__(0);
        __webpack_require__(3);
        if (typeof keyFeatureCnt !== 'undefined' && keyFeatureCnt == 1) {
            $('.des_info').hide();
        }
        var avflag = '';
        window.sibling = '';
        var offr_list = '';var offertext = '';
        var spanId = '';
        var siblingId = '';
        var feature_block_test = '';
        var vid = '';
        window.pdp_videos = 1;
        var digi_fbb = 0;
        var thumb_timer;
        var counter = 0;
        var current_index = 1;
        var prev = { variantID: '', optionID: '' };
        var token = '';
        window.price_cut = 0;
        var applicablecb = 0;
        var applicablecbpercent = 0;
        window.ques_ans_block = '';
        $(document).ready(function () {
            if (window.location.href.indexOf('ref_sib') > 0) {
                var siblingVariant = window.location.href.split('ref_sib=')[1];
                var id = siblingVariant.split('&')[0];
                $('#' + id).trigger('click');
            }
        });
        (function () {
            var url = base_url + 'ajaxCall/gettoken';
            $.ajax({
                url: url,
                type: 'GET',
                success: function success(res) {
                    if (res !== 0) token = res;
                }
            });
        })();

        var pdp = function (SC, window) {
            var soldProducts = '';
            var pdp_setup = {
                hideReview: 0,
                fireShippping: true,
                prevSel: '',
                prevEMI: '',
                init: function init() {
                    //this.initialSteup();
                    this.bindReviewClick();
                    this.bindEmiInfo();
                    this.bindSeller();
                    //this.bindScroll();
                    this.bindSizeChrt();
                    this.bindSellerBuy();
                    this.bindBuyNow();
                    this.bindAddTocart();
                    this.bindAddToWishlist();
                    this.checkShipping();
                    this.updateOption();
                    this.bindBlur();
                    this.bindLeftArrow();
                    this.bindRightArrow();
                    //this.bindPrdDesc();
                    this.bindDataTab();
                    this.bindTabOne();
                    this.bindTabTwo();
                    this.bindSpecs();
                    this.bindBulk();
                    this.bindUnbx();
                    this.bindReview();
                    this.bindBadge();
                    this.bindSpecification();
                    this.getVideos();
                },
                /*    bindScroll : function(){
                 document.getElementById("moreReview").addEventListener("click", function(event) {
                 if(typeof pdp_setup.showRev !== 'undefined' && pdp_setup.showRev == 1 && pdp_setup.hideReview == 0){
                 window.pId = 96988385;
                 var url = base_url+'home/reviewDetail/'+window.pId;
                 microAjax(url,function(res){
                 if(res !== ''){
                 window.showRev = 0;
                 if(document.getElementById('pdp_rnr') === null && pdp_setup.hideReview == 0){
                 $(".pdp_info").after(res);
                 var pstars =  Math.round(window.stars);
                 var ostars = window.avg_rat / 5 * 284;
                 $(".c_fill").css( "stroke-dasharray",   ostars + "," + "284"  );
                 }
                 }
                 });
                 }
                 });
                 }, */
                bindSpecification: function bindSpecification() {
                    $('#specification h3').click(function () {
                        $(this).parent().parent().nextUntil('.grpDesc').slideToggle('fast');
                        $(this).toggleClass('active');
                    });
                },
                getVideos: function getVideos() {
                    $('.vid_videos').click(function (e) {
                        var vid = e.target.getAttribute('vid');
                        var height = e.target.getAttribute('height');
                        var type = e.target.getAttribute('type');
                        var width;
                        if (parseInt(type) == 1) {
                            pdp_videos = "featured videos";
                            width = e.target.getAttribute('width');
                        } else if (parseInt(type) == 2) {
                            pdp_videos = "review videos";
                            width = e.target.parentElement.style.width; //e.target.getAttribute('width');
                        }
                        if (vid.indexOf('?') > -1) {
                            vid = vid + "&autoplay=1";
                        } else {
                            vid = vid + "?autoplay=1";
                        }
                        if (typeof _satellite !== 'undefined') {
                            _satellite.track('pdp_videos');
                        }
                        e.target.parentElement.classList.add('remove');
                        var cls = e.target.className;
                        var iframe = document.createElement("iframe");
                        iframe.setAttribute("src", vid);
                        iframe.setAttribute('id', 'player');
                        iframe.setAttribute('width', width);
                        iframe.setAttribute('height', height);
                        iframe.style.display = "block";
                        iframe.setAttribute("frameborder", "0");
                        iframe.setAttribute("allowfullscreen", "1");
                        e.target.parentNode.replaceChild(iframe, e.target.previousElementSibling);
                    });
                },
                bindBadge: function bindBadge() {
                    $('.badge').on('click', function () {
                        $('.bStatus').show();
                        $('.bStatus').parents('#common_overlay').fadeIn(300);
                        $('.popupModel').show();
                    });

                    $('#common_popupModel .close').on('click', function () {
                        $('#common_popupModel > div').hide();
                        $(this).parents('#common_overlay').fadeOut(100);
                        $('body').css('position', 'relative');
                    });
                },
                bindBulk: function bindBulk() {
                    $('#sh_bulk').on('click', function () {
                        $('#bulk_tb').toggle();
                        //$('.sc_offer').parents('#common_overlay').fadeIn(300);
                    });
                },
                bindReview: function bindReview() {
                    $('#scrolltoreview').on('click', function () {
                        var offset = $('.selected_product_tabbing').offset();
                        var height = $('.selected_product_tabbing')[0].scrollHeight + offset.top;
                        $('html, body').animate({
                            scrollTop: height
                        });
                    });
                },
                bindSpecs: function bindSpecs() {
                    $('#scrolltospecs').on('click', function () {
                        var offset = $('.selected_product_tabbing').offset();
                        $('html, body').animate({
                            scrollTop: offset.top
                        });
                    });
                },
                bindUnbx: function bindUnbx() {
                    $('#scrolltounbx').on('click', function () {
                        var offset = $('.refurbhished').offset();
                        $('html, body').animate({
                            scrollTop: offset.top - 100
                        });
                    });
                },
                bindTabOne: function bindTabOne() {
                    $('[data-tab="1"]').on('click', function () {
                        $(this).parents(".tabbing_nav").animate({ scrollLeft: '-=460' }, 1000);
                    });
                },
                bindTabTwo: function bindTabTwo() {
                    $(this).parents(".tabbing_nav").animate({ scrollLeft: '+=460' }, 1000);
                },
                bindDataTab: function bindDataTab() {
                    $('[data-tab]').on('click', function (e) {
                        $(this).addClass('active').siblings('[data-tab]').removeClass('active');
                        $(this).parents(".tabbing_nav").siblings(".tabbing_info").children('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active');
                        //e.preventDefault();
                    });
                },
                //    bindPrdDesc : function(){
                //        $('.pd-descr').click(function() {
                //            if(typeof window.subFeatures !== 'undefined' && window.subFeatures == 0){
                //                pdp_setup.firePdDescAjax = false;
                //            }
                //            if(pdp_setup.firePdDescAjax === true){
                //                $('#responseLoading').show();
                //                var id = pId;
                //                if (typeof mspData !== 'undefined' && mspData == 1) {
                //                    id = masterPid;
                //                }
                //                var url= base_url+'ajaxCall/getProductDesc/' + id;
                //                    microAjax(url, function(res){
                //                       if(res.trim()!== '')
                //                       {
                //                           $('#product_description').html(res);
                //                            firePdDescAjax = false;
                //                       }
                //                       $('#responseLoading').hide();
                //                    });
                //                //$('#specification').hide();
                //                //$('.pd-spec').removeClass('active');
                //                //$('.pd-descr').addClass('active');
                //                //$('#product_description').show();
                //            }
                //        });
                //    },


                bindBlur: function bindBlur() {
                    $(document).ready(function () {
                        $('#wholesale_qty').bind('blur keyup', function (e) {
                            if (e.type == 'blur' || e.keyCode == '13') {
                                if (parseInt($(this).val()) < parseInt($('#wholesale_min_qty').val())) {
                                    window.toastMessage('Quantity should be greater than minimum order quantity');
                                    $(this).val($('#wholesale_min_qty').val());
                                } else {
                                    $(this).val($('#wholesale_qty').val());
                                    var wh_qty = $(this).val();
                                    if (bulk_product == 1) {
                                        for (var i = 0; i < bd_count; i++) {
                                            if (parseInt(wh_qty) >= parseInt(bd_info[i].min_qty) && parseInt(wh_qty) <= parseInt(bd_info[i].max_qty) || parseInt(wh_qty) >= parseInt(bd_info[i].min_qty) && bd_info[i].max_qty == '') {
                                                wprice = bd_info[i].price;
                                                if (sch != 0) {
                                                    sch = bd_info[i].shipping_charge;
                                                }
                                            }
                                        }
                                    }
                                    var wh_price = (wprice * wh_qty).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                    var wh_sc = (sch * wh_qty).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                    var tvhtml = "<li id='total_value'>Total Order Value : <span>" + wh_price + "</span></li>";
                                    var schtml = "<li id='total_sc'>Total Shipping Charge : <span>" + wh_sc + "</span></li>";
                                    $("#total_value").html(tvhtml);
                                    $("#total_sc").html(schtml);
                                }
                                $("#quantityId").val(parseInt($(this).val()));
                            }
                        });
                    });
                },
                bindLeftArrow: function bindLeftArrow() {
                    $(".left_arrow").on('click', function () {
                        var whole_qty = $('#wholesale_qty').val();
                        var wh_qty;
                        if (parseInt($('#wholesale_min_qty').val(), 10)) {
                            wh_qty = parseInt(whole_qty, 10) - parseInt($('#wholesale_min_qty').val(), 10);
                            if (wh_qty <= 0) {
                                window.toastMessage('Quantity should be greater than minimum order quantity');
                            }
                            if (wh_qty < parseInt($('#wholesale_min_qty').val(), 10)) {
                                wh_qty = parseInt($('#wholesale_min_qty').val(), 10);
                            }
                        } else {
                            wh_qty = parseInt(whole_qty, 10) - parseInt($('#qty_step').val(), 10);
                        }
                        if (bulk_product == 1) {
                            var wh_qty2 = bd_info[0].min_qty;
                        } else {
                            var wh_qty2 = parseInt($("#wholesale_min_qty").val());
                        }
                        updateProductPrice(wh_qty);
                        if (wh_qty2 <= wh_qty) {
                            if (bulk_product == 1) {
                                for (var i = 0; i < bd_count; i++) {
                                    if (wh_qty >= bd_info[i].min_qty && wh_qty <= bd_info[i].max_qty || wh_qty >= bd_info[i].min_qty && bd_info[i].max_qty == '') {
                                        wprice = bd_info[i].price;
                                        sch = bd_info[i].shipping_charge;
                                    }
                                }
                            }
                            $("#wholesale_qty").val(wh_qty);
                            $("#quantityId").val(wh_qty);
                            var wh_price = (wprice * wh_qty).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            var wh_sc = (sch * wh_qty).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            var tvhtml = "<li id='total_value'>Total Order Value : <span>" + wh_price + "</span></li>";
                            var schtml = "<li id='total_sc'>Total Shipping Charge : <span>" + wh_sc + "</span></li>";
                            $("#total_value").html(tvhtml);
                            $("#total_sc").html(schtml);
                        } else {
                            window.toastMessage('Quantity should be greater than minimum order quantity');
                        }
                    });
                },
                bindRightArrow: function bindRightArrow() {
                    $(".right_arrow").on('click', function () {
                        var whole_qty = $('#wholesale_qty').val();
                        var wh_qty;
                        if (parseInt($('#wholesale_min_qty').val(), 10)) {
                            wh_qty = parseInt(whole_qty, 10) + parseInt($('#wholesale_min_qty').val(), 10);
                        } else {
                            wh_qty = parseInt(whole_qty, 10) + parseInt($('#qty_step').val(), 10);
                        }
                        if (document.getElementById('stk_left_wholesale')) {
                            var max_allowed_items = document.getElementById('stk_left_wholesale').getAttribute('label');
                            if (max_allowed_items) {
                                max_allowed_items = parseInt(max_allowed_items);
                                if (max_allowed_items) {
                                    if (wh_qty > max_allowed_items) {
                                        wh_qty = wh_qty - parseInt($('#wholesale_min_qty').val(), 10);
                                        window.toastMessage('This is the maximum allowed quantity for this product');
                                    }
                                }
                            }
                        }
                        $("#wholesale_qty").val(wh_qty);
                        $("#quantityId").val(wh_qty);
                        if (bulk_product == 1) {
                            for (var i = 0; i < bd_count; i++) {
                                if (wh_qty >= bd_info[i].min_qty && wh_qty <= bd_info[i].max_qty || wh_qty >= bd_info[i].min_qty && bd_info[i].max_qty == '') {
                                    wprice = bd_info[i].price;
                                    if (sch != 0) {
                                        sch = bd_info[i].shipping_charge;
                                    }
                                }
                            }
                        }
                        updateProductPrice(wh_qty);
                        var wh_price = (wprice * wh_qty).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        var wh_sc = (sch * wh_qty).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        var tvhtml = "<li id='total_value'>Total Order Value : <span>" + wh_price + "</span></li>";
                        var schtml = "<li id='total_sc'>Total Shipping Charge : <span>" + wh_sc + "</span></li>";
                        $("#total_value").html(tvhtml);
                        $("#total_sc").html(schtml);
                    });
                },
                bindBuyNow: function bindBuyNow() {
                    $('#buy').on('click', function (e) {
                        if (_validateBuy()) {
                            if (helperFunctions.ReadCookie("user_id") || helperFunctions.ReadCookie('scumd')) {
                                var userid = atob(helperFunctions.ReadCookie("user_id")) || atob(helperFunctions.ReadCookie('scumd'));
                                $('#form_user_id').val(userid);
                            }
                            //var visitorId = helperFunctions.ReadCookie('AMCV_20CC138653C6496B0A490D45%40AdobeOrg');
                            if (visitorId !== '' && visitorId !== null) {
                                //visitorId = visitorId.split('|')[4];
                                $('#form_visitor_id').val(visitorId);
                            }
                            var buttonid = $(this).attr('data-formid');
                            var form_id = '#buy_form_' + buttonid;
                            var formVars = $(form_id).serialize();
                            var url = base_url + 'atom/acart/expressCheckout';
                            $('#responseLoading').show();
                            $.ajax({
                                url: url,
                                type: 'POST',
                                data: formVars,
                                dataType: 'json',
                                success: function success(res) {
                                    if (res.status === 200) {
                                        try {
                                            if (typeof _satellite !== 'undefined') {
                                                //omString[5] = evar48+"|"+evar36;
                                                //window.digitalData.product = omString.join(';');
                                                _satellite.track('Add-cart-Buy-now');
                                            }
                                            var moe_Quantity = null;
                                            if (typeof res.response.products[0].quantity !== 'undefined') {
                                                var moe_Quantity = res.response.products[0].quantity;
                                            }
                                            moe_add_to_cart(moe_Quantity);
                                        } catch (e) {}
                                        window.location.href = secure_base_url + 'atom/acart/summary';
                                    } else {
                                        if (typeof _satellite !== 'undefined') {
                                            buynow = res.content;
                                            _satellite.track('Add-cart-Buy-now-fail');
                                        }
                                        $('.add_to_cart_error').html(res.content);
                                        $('.add_to_cart_error').show();
                                        $('.add_to_cart_error').css('display', 'block');
                                    }
                                },
                                error: function error(res) {
                                    $('.add_to_cart_error').html("Error try again !!");
                                    $('.add_to_cart_error').show();
                                    $('.add_to_cart_error').css('display', 'block');
                                },
                                complete: function complete() {
                                    $('#responseLoading').hide();
                                }
                            });
                            return false;
                        }
                    });
                },
                bindAddTocart: function bindAddTocart() {
                    $('#add_cart').on('click', function (e) {
                        if (_validateBuy()) {
                            //console.log('validated');
                            if (helperFunctions.ReadCookie("scumd") || helperFunctions.ReadCookie("user_id")) {
                                var userid = atob(helperFunctions.ReadCookie("user_id")) || atob(helperFunctions.ReadCookie('scumd'));
                                $('#form_user_id').val(userid);
                            }
                            //var visitorId = helperFunctions.ReadCookie('AMCV_20CC138653C6496B0A490D45%40AdobeOrg');
                            if (visitorId !== '' && visitorId !== null) {
                                //visitorId = visitorId.split('|')[4];
                                $('#form_visitor_id').val(visitorId);
                            }
                            $('#responseLoading').show();
                            var buttonid = $(this).attr('data-formid');
                            var form_id = '#buy_form_' + buttonid;
                            var formVars = $(form_id).serialize();
                            var url = base_url + 'atom/acart/getcart';
                            $.ajax({
                                url: url,
                                type: 'POST',
                                data: formVars,
                                dataType: 'json',
                                success: function success(res) {
                                    if (res.status === 200) {
                                        try {
                                            if (typeof _satellite !== 'undefined') {
                                                //addtocart = 'addtocart';
                                                //omString[5] = evar48+"|"+evar54;
                                                //window.digitalData.product = omString.join(';');
                                                //window.digitalData.omtrProduct = omString.join(';');
                                                _satellite.track('Add-cart-Buy-now');
                                            }
                                            var moe_Quantity = null;
                                            if (typeof res.prodStr[0].quantity !== 'undefined') {
                                                var moe_Quantity = res.prodStr[0].quantity;
                                            }
                                            moe_add_to_cart(moe_Quantity);
                                        } catch (e) {}
                                        atom_cart_load_data();
                                        window.toastMessage('Product added to cart');
                                    } else {
                                        window.toastMessage(res.content);
                                        if (typeof _satellite !== 'undefined') {
                                            addtocart = res.content;
                                            _satellite.track('Add-cart-Buy-now-fail');
                                        }
                                    }
                                },
                                error: function error(res) {
                                    window.toastMessage('Error try again !!');
                                },
                                complete: function complete() {
                                    $('#responseLoading').hide();
                                }
                            });
                            return false;
                        }
                    });
                },
                bindAddToWishlist: function bindAddToWishlist() {
                    $('#pdp_wishlist').on('click', function (e) {
                        if (typeof window.pId !== 'undefined' && (helperFunctions.ReadCookie("user_id") !== "" && helperFunctions.ReadCookie("user_id") !== undefined || helperFunctions.ReadCookie("scumd") !== "" && helperFunctions.ReadCookie("scumd") !== undefined)) {
                            if ($('.whishlist_ic').hasClass('added')) {
                                var amount = 0;
                            } else {
                                var amount = 1;
                            }
                            var elem = this;
                            var userid = atob(helperFunctions.ReadCookie("user_id")) || atob(helperFunctions.ReadCookie("scumd"));
                            //var visitorId = helperFunctions.ReadCookie('AMCV_20CC138653C6496B0A490D45%40AdobeOrg');
                            url = base_url + "ajaxCall/addToWishlist/" + window.pId + "/" + userid + "/" + amount;
                            if (visitorId !== '' && visitorId !== null) {
                                //visitorId = visitorId.split('|')[4];
                                url = base_url + "ajaxCall/addToWishlist/" + window.pId + "/" + userid + "/" + amount + "/" + visitorId;
                            }
                            microAjax(url, function (res) {
                                if (res == 200) {
                                    if (typeof _satellite !== 'undefined') {
                                        try {
                                            //omString[5]=evar48+"|"+evar36;
                                            //window.digitalData.product = omString.join(';');
                                            window.digitalData.omtrProduct = omString.join(';');
                                        } catch (e) {}
                                    }
                                    $(elem).toggleClass('added animated bounceIn');
                                    toastMessage('Product added to wishlist');
                                }
                            });
                            //window.location.href =""; //loginPage
                        } else {
                            if (typeof window.pId !== 'undefined') {
                                var current_url = encodeURIComponent("index.php?dispatch=products.view&product_id=" + window.pId);
                                window.location.href = secure_base_url + "?dispatch=auth.login_form&return_url=" + current_url;
                                if (typeof localforage !== 'undefined') {
                                    localforage.setItem('wishlist_' + window.pId, 1);
                                }
                            }
                        }
                    });
                },
                // bindScroll : function(){
                //     $('#moreReview').unbind('click').click(function(event) {
                //         if(typeof window.showRev !== 'undefined' && window.showRev == 1 && pdp_setup.hideReview == 0 && typeof window.pId !== 'undefined'){
                //             //window.pId = 96988385;
                //             var url = base_url+'home/reviewDetail/'+window.pId+'/'+window.page;
                //             microAjax(url,function(res){
                //                 if(res !== ''){
                //                     window.page +=1;
                //                     if(document.getElementById('pdp_rnr') === null && pdp_setup.hideReview == 0){
                //                         $(".rnr_lists ul").append(res);
                //                         var pstars =  Math.round(window.stars);
                //                         var ostars = window.avg_rat / 5 * 284;
                //                         $(".c_fill").css( "stroke-dasharray",   ostars + "," + "284"  );
                //                     }
                //                     if (window.page>=window.tp) {
                //                         window.showRev=0;
                //                         $("#moreReview").css("display", "none");
                //                     }
                //                 }
                //             });
                //         }
                //     });
                // },
                bindReviewClick: function bindReviewClick() {
                    $('.container').on('click', 'a.usefull', function (e) {
                        try {
                            var id = e.currentTarget.getAttribute('data-id');
                            var call_type = e.currentTarget.getAttribute('data-usefull');

                            $.ajax({
                                type: 'GET',
                                data: { 'id': id, 'call_type': call_type },
                                url: base_url + 'ajaxCall/usefulReviews',
                                success: function success(res) {
                                    if (res == 'success') {
                                        e.currentTarget.classList.add('active');
                                        toastMessage('Thanks for your feedback');
                                        e.currentTarget.parentElement.style.display = 'none';
                                    } else {
                                        toastMessage('Error,Please Try Again');
                                    }
                                },
                                error: function error(res) {
                                    toastMessage('Error,Please Try Again');
                                }
                            });
                        } catch (e) {}
                    });
                },
                bindEmiInfo: function bindEmiInfo() {
                    try {
                        $('.sc_tc').on('click', function () {
                            $('.sc_offer').show();
                            $('.sc_offer').parents('#common_overlay').fadeIn(300);
                        });

                        $('#common_popupModel .close').on('click', function () {
                            //$('.sc_offer').show();
                            //$('.sc_offer').hide();
                            $('#common_popupModel > div').hide();
                            $(this).parents('#common_overlay').fadeOut(100);
                            $('body').css('position', 'relative');
                        });

                        $('.prd_mid_info').on('click', 'i.info', function () {
                            //$('.sc_emi').parent().fadeIn(1000);
                            $('#common_overlay').fadeIn(500);
                            $('#common_popupModel').show();
                            $('.sc_emi').show();
                            $('body').css('position', 'fixed');
                        });
                        // $('#common_overlay').on('click',function(){
                        //     $('#common_overlay, .popupInner').fadeOut(1000);
                        //     $('body').css('position', 'relative');
                        // });
                        $('.sc_emi').on('click', 'a.close', function () {
                            $('#common_overlay, .popupInner').fadeOut(1000);
                            $('body').css('position', 'relative');
                            $('.sc_emi').hide();
                        });
                        $('.sc_offer').on('click', 'a.close', function () {
                            $('#common_overlay, .popupInner').fadeOut(1000);
                            $('body').css('position', 'relative');
                        });
                        $('.sc_emi').on('click', 'ul li span', function () {
                            $(this).next('table').slideToggle();
                            $(this).toggleClass('active');
                            if (pdp_setup.prevEMI !== $(this)) {
                                $(pdp_setup.prevEMI).next('table').slideToggle();
                                $(pdp_setup.prevEMI).toggleClass('active');
                                pdp_setup.prevEMI = $(this);
                            }
                        });
                        $('.v_offer').on('click', function () {
                            $(this).parent().parent().fadeOut(50);
                            if (offr_list != '') {
                                $('#promo_offr').prepend("<li>" + offr_list + "</li>");
                                $('#promo_offr').show();
                            }
                            $(this).parent().parent().next().fadeIn(1000);
                        });
                        $('.sc_tc').click(function () {
                            $('.sc_offer').parent().fadeIn(1000);
                            $('#common_overlay').fadeIn(500);
                            $('.sc_offer p').html(tnc[$(this)[0].id]);
                            var divHeight = $('.sc_offer').height();
                            var addValue = 40;
                            var sum = divHeight + addValue;
                            //alert(sum);
                            $('.sc_offer').parent('.popupInner').css('height', sum + 'px');
                            $('body').css('position', 'fixed');
                        });
                    } catch (e) {}
                },
                bindSeller: function bindSeller() {
                    try {
                        $('.sllr_info').on('click', 'a.other_sellers', function () {
                            //$('#main_data').hide();
                            $('.container .wrapper').first().hide();
                            $('#msp_data').show();
                            pdp_setup.hideReview = 1;
                        });
                        $('#msp_data').on('click', 'a.close', function () {
                            //$('#main_data').hide();
                            $('#msp_data').hide();
                            $('.container .wrapper').first().show();
                            pdp_setup.hideReview = 0;
                        });
                    } catch (e) {}
                },
                bindSizeChrt: function bindSizeChrt() {
                    try {
                        $('.f_variation').on('click', 'a.sc_chart', function () {
                            $('#common_overlay').fadeIn(500);
                            $('.sc_sizeChart').parent().show();
                            $('.sc_sizeChart').fadeIn(1000);
                            $('body').css('position', 'fixed');
                        });
                    } catch (e) {}
                },
                bindSellerBuy: function bindSellerBuy() {
                    try {
                        $('body').on('click', 'a.sc_addToCart', function (e) {
                            //digitalData.cart_data.push(new_product_id);
                            var form_id = '#buy_form_' + e.currentTarget.getAttribute('data-id');
                            var formVars = $(form_id).serialize();
                            var url = base_url + 'atom/acart/getcart';
                            console.log(formVars);
                            $.ajax({
                                url: url,
                                type: 'POST',
                                data: formVars,
                                dataType: 'json',
                                success: function success(res) {
                                    if (res.status === 200) {
                                        window.toastMessage('Product added to cart');
                                        atom_cart_load_data();
                                        if (setOmniture) {
                                            omni_child = omniture_child_value;
                                            _satellite.track('Add-cart-Buy-now');
                                        }
                                    } else {
                                        window.toastMessage(res.message);
                                    }
                                },
                                error: function error(res) {
                                    window.toastMessage('Error try again !!');
                                }
                            });
                        });
                    } catch (e) {}
                },

                checkShipping: function checkShipping() {
                    $('#check_shipping').on("click", function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var itemId = e.currentTarget.getAttribute('data-itemId');
                        $('#check_shipping').attr('disabled', true);
                        var pincode = '';
                        var user_id = '';
                        var user_email = '';
                        var user_segment = '';
                        var final_price_value = '';
                        var user_mobile = '';

                        if (helperFunctions.ReadCookie('phone') != "") {
                            user_mobile = helperFunctions.ReadCookie('phone');
                        }
                        if (helperFunctions.ReadCookie('scumd') != "") {
                            user_id = helperFunctions.ReadCookie('scumd');
                        }
                        if (helperFunctions.ReadCookie('scun') != "") {
                            user_email = helperFunctions.ReadCookie('scun');
                        }
                        if (helperFunctions.ReadCookie('user_segment') != "") {
                            user_segment = helperFunctions.ReadCookie('user_segment');
                        }
                        if ($('#zip').length > 0 && $('#zip').val() != '') {
                            pincode = $('#zip').val();
                        } else if (typeof helperFunctions.ReadCookie('pincode') != 'undefined' && helperFunctions.ReadCookie('pincode') != '' && pincode == '') {
                            pincode = helperFunctions.ReadCookie('pincode');
                        }

                        if (typeof thirdPrice !== 'undefined' && thirdPrice !== 0) {
                            final_price_value = thirdPrice;
                        } else if (typeof price !== 'undefined' && price !== 0) {
                            final_price_value = price;
                        } else if (typeof listPrice !== 'undefined' && listPrice !== 0) {
                            final_price_value = listPrice;
                        }

                        if (/^\d+$/.test(pincode) && pincode.length == 6) {
                            $('#responseLoading').show();
                            var url = base_url + 'ajaxCall/getDeliveryDetails?itemId=' + itemId + '&pincode=' + pincode + '&user_segment=' + user_segment + '&user_id=' + user_id + '&user_email=' + user_email + '&price_tbp=' + final_price_value + '&user_mobile=' + user_mobile;
                            microAjax(url, function (res) {
                                if (res.trim() != '') {
                                    if (pincode != $('#cPin').html()) {
                                        $('#cPin').html(pincode);
                                    }
                                    if (typeof _satellite !== 'undefined') {
                                        //omString[5]=evar48+"|"+evar36;
                                        //window.digitalData.product = omString.join(';');
                                        //window.digitalData.omtrProduct = omString.join(';');
                                    }
                                    var data = JSON.parse(res);
                                    if (typeof data.pin_result != 'undefined') {
                                        var deliveryDate;
                                        if (typeof data.fdate !== 'undefined' && typeof data.sdate !== 'undefined') {
                                            deliveryDate = "Delivery: " + data.fdate + " - " + data.sdate;
                                        } else {
                                            deliveryDate = "Delivery in 7-9 Business days";
                                        }
                                        document.getElementById("toggleMe").style.display = "block";
                                        document.getElementById('pd_pin').style.display = "none";
                                        $('#delDetails').hide();
                                        //SetCookie('pincode', pincode, 730, cookieDomain);
                                        if (!helperFunctions.ReadCookie('sc_loc_pincode') || helperFunctions.ReadCookie('sc_loc_pincode') != pincode) {
                                            var url = base_url + 'setUserzone';
                                            var postdata = { 'pincode': pincode, 'target': 'pincode_form', 'local': 'pincode' };
                                            ajax_request(url, 'post', save_loc_cookie, 'MANUAL', postdata);
                                        }
                                        if (parseInt(data.pin_result) == 0) {
                                            document.getElementById('toggleMe').style.display == "block";
                                            document.getElementById('toggleMe').className = 'check_delivery unavailable';
                                            document.getElementById("toggleMe").innerHTML = "<p class='check_pincode'><span>Item is unavailable at " + pincode + "<a onclick='pdDetail_public.toggle();'> change </a></span></p>";
                                            var newdel = "<ul id='newdelDetails'><li id='notcod'>COD Not Available.</li>" + "<li id='notcod'> Delivery Not Available </li>";
                                            $("#newdelDetails").remove();
                                            $('.status_i').append(newdel);
                                        } else if (parseInt(data.pin_result) == 1) {
                                            document.getElementById('toggleMe').style.display == "block";
                                            document.getElementById('toggleMe').className = 'check_delivery available';
                                            document.getElementById("toggleMe").innerHTML = "<p class='form'>Shipment not required for this item " + pincode + "<a onclick='pdDetail_publc.togge();'> Change </a></p>";
                                        } else if (parseInt(data.pin_result) == 2) {
                                            document.getElementById('toggleMe').style.display == "block";
                                            document.getElementById('toggleMe').className = 'check_delivery unavailable';
                                            document.getElementById("toggleMe").innerHTML = "<p class='form'>The PIN code " + pincode + " is invalid" + "<a onclick='pdDetail_publc.togge();'> Change </a></p>";
                                        } else if (parseInt(data.pin_result) == 3) {
                                            document.getElementById('toggleMe').style.display == "block";
                                            document.getElementById('toggleMe').className = 'check_delivery available';
                                            document.getElementById("toggleMe").innerHTML = "<p class='form'>Item is available at <span>" + pincode + "</span><a onclick='pdDetail_public.toggle();'>Change</a></p>";
                                            if (typeof data.is_cod !== 'undefined' && parseInt(data.is_cod) == 1) {
                                                var newdel = "<ul id='newdelDetails'><li id='chkCharge'>" + document.getElementById('shippingcharge').innerHTML + "</li><li>COD Available</li>" + "<li id='servicable'>" + deliveryDate + "</li></ul>";
                                            } else {
                                                var newdel = "<ul id='newdelDetails'><li id='chkCharge'>" + document.getElementById('shippingcharge').innerHTML + "</li><li id='notcod'>COD Not Available</li>" + "<li id='servicable'>" + deliveryDate + "</li></ul>";
                                            }

                                            $("#newdelDetails").remove();
                                            $('.status_i').append(newdel);
                                        } else if (parseInt(data.pin_result) == 4) {
                                            document.getElementById('toggleMe').style.display == "block";
                                            document.getElementById('toggleMe').className = 'check_delivery available';
                                            document.getElementById("toggleMe").innerHTML = "<p class='form'>Item is available at <span>" + pincode + "</span><a onclick='pdDetail_public.toggle();'>Change</a></p>";
                                            var newdel = "<ul id='newdelDetails'><li id='chkCharge'>" + document.getElementById('shippingcharge').innerHTML + "</li><li>Only Prepaid available on this PIN code. </li>" + "<li id='servicable'>" + deliveryDate + "</li></ul>";
                                            $("#newdelDetails").remove();
                                            $('.status_i').append(newdel);
                                        } else {
                                            document.getElementById('toggleMe').style.display == "block";
                                            document.getElementById("toggleMe").innerHTML = "The PIN code " + pincode + " is invalid" + "<div onclick='pdDetail_public.toggle();'>change </div>";
                                        }
                                    }
                                }
                                $('#check_shipping').attr('disabled', false);
                                pdDetail_public.checkShippingCharges();
                            });
                        } else {
                            $('#check_shipping').attr('disabled', false);
                            zip_value = $('#zip').val();
                            var bRed = document.getElementById('zip');
                            //bRed.style.borderBottom = "red solid 1px";
                            bRed.style.color = "red";
                            if (zip_value == "") {
                                bRed.value = "Please enter pincode";
                            } else {
                                bRed.value = "Invalid pincode";
                            }
                            setTimeout(function () {
                                bRed.style.border = "";
                                bRed.style.color = "";
                                bRed.value = "";
                            }, 2000);
                            return false;
                        }
                        $('#responseLoading').hide();
                    });
                },
                updateOption: function updateOption() {
                    window.fprice = parseInt($('.f_price').attr('data-attr'));
                    $('.f_variation span.variant').on('click', function (e) {
                        if ($(pdp_setup.prevSel).attr('id') === $(e.currentTarget).attr('id')) {
                            return false;
                        }
                        $('#buy').attr('disabled', true);
                        $('#add_cart').attr('disabled', true);
                        $('#responseLoading').show();
                        var quantity;
                        var current = '';
                        var options = '';
                        var options_display = '';
                        var clarr = {};
                        var szarr = {};
                        var variantId = $(e.currentTarget).attr('id');
                        var optionId = $(e.currentTarget).parents().attr('id');
                        if (typeof window.is_wholesale !== 'undefined' && window.is_wholesale == 1) {
                            quantity = $('#quantityId').val();
                        } else {
                            quantity = 1;
                        }
                        if (typeof sName != 'undefined') {
                            var length = sName.length;
                            current = e.currentTarget;
                            var selectedOption = '';
                            var fireCheckInventory = true;
                            for (i = 0; i < length; i++) {
                                var scSzSel = '';
                                var name = sName[i].name;
                                var formId = name + 'Id';
                                var formDisplay = name + 'Name';
                                var nameId = $(current).attr('id');
                                var nameDisplay = $(current).attr('value');
                                if (nameId != 0) {
                                    if (i > 0 && i < length) {
                                        options += ',';
                                        options_display += '';
                                    }
                                    if (name == $(current).parents().attr('scName')) {
                                        //$('#'+formId).val(nameId);
                                        document.getElementById(formId).value = nameId;
                                        selectedOption = $(current).attr('value');
                                        sName[i].option_sel = $(current).attr('id');
                                        var updatedhtml = name + ': ' + "<span>" + selectedOption + "</span>";
                                        $('#' + optionId).children().children('p').html(updatedhtml);
                                        siblingId = sName[i].option_sel;
                                        if ($("#" + siblingId).siblings('.variant').hasClass("disabled")) {
                                            $("#" + siblingId).siblings('.variant').removeClass("disabled");
                                        }
                                        $(current).addClass('selected').siblings().removeClass('selected');
                                        pdp_setup.prevSel = $(current);
                                    } else {
                                        spanId = sName[i].id;
                                        if ($("#" + spanId).children('.variant').hasClass("disabled")) {
                                            $("#" + spanId).children('.variant').removeClass("disabled");
                                        }
                                        if ($("#" + spanId).siblings('.variant').hasClass("selected")) {
                                            $("#" + spanId).siblings('.variant').removeClass("selected");
                                        }
                                    }
                                    if (typeof sName[i].option_sel !== 'undefined' && sName[i].option_sel != '') {
                                        scSzSel = sName[i].option_sel;
                                    } else {
                                        scSzSel = '';
                                        fireCheckInventory = false;
                                    }
                                    options += sName[i].id + ':' + scSzSel;
                                    if (scSzSel.trim() != '') {
                                        options_display += sName[i].name + ':' + $(current).attr('value');
                                    }
                                    //$('#'+formDisplay).val(options_display);
                                    document.getElementById(formDisplay).value = options_display;
                                } else if (nameId == 0) {
                                    $('#buy').attr('disabled', false);
                                    return false;
                                }
                            }
                        }
                        if (typeof variantId !== 'undefined' && typeof optionId !== 'undefined' && variantId !== '' && optionId !== '') {
                            var variantcheck = 0;
                            if (sessionStorage.getItem(optionId + '_' + variantId) == null) {
                                $.ajax({
                                    type: 'GET',
                                    data: { 'pid': masterPid, 'optid': optionId, 'varid': variantId },
                                    url: base_url + 'ajaxCall/variant',
                                    success: function success(res) {
                                        response = JSON.parse(res);
                                        if (response.status === 1) {
                                            if (typeof response.data.linked_option_variant_data != 'undefined' && response.data.linked_option_variant_data != null) {
                                                variantcheck = 1;
                                            }
                                            if (variantcheck == 1) {
                                                if (sessionStorage.getItem(spanId + '&' + siblingId) == null) {
                                                    sessionStorage.setItem(spanId + '&' + siblingId, JSON.stringify(response));
                                                    variantcombo(response);
                                                } else variantcombo(JSON.parse(sessionStorage.getItem(spanId + '&' + siblingId)));
                                            }
                                            sessionStorage.setItem(optionId + '_' + variantId, JSON.stringify(response));
                                            colorVariant(response);
                                        } else {
                                            return false;
                                        }
                                    },
                                    error: function error(jqXHR, textStatus) {
                                        if (textStatus === 'timeout' || textStatus === 'error') {}
                                    }
                                });
                            } else {
                                if (spanId != '' && siblingId != '') {
                                    if (sessionStorage.getItem(spanId + '&' + siblingId) == null) {
                                        var response = JSON.parse(sessionStorage.getItem(optionId + '_' + variantId));
                                        sessionStorage.setItem(spanId + '&' + siblingId, JSON.stringify(response));
                                        variantcombo(response);
                                    } else {
                                        variantcombo(JSON.parse(sessionStorage.getItem(spanId + '&' + siblingId)));
                                    }
                                }
                                colorVariant(JSON.parse(sessionStorage.getItem(optionId + '_' + variantId)));
                            }
                            $('#responseLoading').hide();
                            $('#buy').attr('disabled', false);
                            $('#add_cart').attr('disabled', false);
                        }
                        // if (fireCheckInventory) {
                        //     if (options != '') {
                        //         var data = {'id':masterPid,'quantity':quantity,'options':encodeURIComponent(options),'var':null};
                        //     } else {
                        //         var data = {'id':masterPid,'quantity':quantity,'options':null,'var':null};
                        //     }
                        //     $.ajax({
                        //         type : 'GET',
                        //         data : data,
                        //         url : base_url + 'ajaxCall/checkInventory/',
                        //         success : function(res) {
                        //             if (res !== '') {
                        //                 var data = JSON.parse(res);
                        //                 if (data.msg !== undefined && data.msg !== 'Y') {
                        //                     var message = data.msg;
                        //                     //document.getElementById('error').innerHTML = message;
                        //                 } else if (data.msg !== undefined && data.msg == 'Y') {
                        //                     $('#buy').attr('disabled',false);
                        //                     $('#add_cart').attr('disabled',false);
                        //                     if($(pdp_setup.prevSel).parents().attr('scName') == $(current).parents().attr('scName')){
                        //                         $(pdp_setup.prevSel).removeClass('selected');
                        //                     }
                        //                     $(current).addClass('selected').siblings().removeClass('selected');
                        //                     pdp_setup.prevSel = $(current);
                        //                 }
                        //             }
                        //             $('#responseLoading').hide();
                        //         },
                        //         error : function(jqXHR, textStatus) {

                        //         }
                        //     });
                        // }else{
                        //     if(!fireCheckInventory){
                        //         $('#responseLoading').hide();
                        //         $('#buy').attr('disabled',false);
                        //         $('#add_cart').attr('disabled',false);
                        //         $(pdp_setup.prevSel).removeClass('selected');
                        //         $(current).addClass('selected');
                        //         pdp_setup.prevSel = $(current);
                        //     }
                        // }
                    });
                }
            };
            function updateProductPrice(quantity) {
                if (typeof wholesale_price_array !== 'undefined' && wholesale_price_array !== null) {
                    var array_keys = Object.keys(wholesale_price_array);
                    var price = parseInt($('.f_price').attr('data-attr'));
                    for (var i = 0; i < array_keys.length; i++) {
                        price = parseInt(wholesale_price_array[array_keys[i]]);
                        if (parseInt(quantity) >= array_keys[i]) {
                            price = parseInt(wholesale_price_array[parseInt(array_keys[i])]);
                            if (document.getElementsByClassName('f_price')[0]) {
                                document.getElementsByClassName('f_price')[0].setAttribute('data-attr', price);
                                document.getElementsByClassName('f_price')[0].setAttribute('content', price);
                                document.getElementsByClassName('f_price')[0].innerHTML = 'Rs.' + price + '/Pc';
                            }
                        }
                    }
                }
            }

            function _validateBuy() {
                var fireSubmit = true;
                if (typeof window.sName != 'undefined') {
                    var sName = window.sName;
                    var length = sName.length;
                    var txt = 'Please select the ';
                    for (i = 0; i < length; i++) {
                        var name = sName[i].name;
                        var formId = name + 'Id';
                        if (document.getElementById(formId).value == '') {
                            $('[scszname="' + sName[i].name + '"]').find('a').addClass('error');
                            txt += sName[i].name + ',';
                            fireSubmit = false;
                        } else {
                            $('[scszname="' + sName[i].name + '"]').find('a').removeClass('error');
                        }
                    }
                    if (!fireSubmit) {
                        toastMessage(txt.substring(0, txt.length - 1));
                    }
                }
                return fireSubmit;
            }
            function handleErrors(response) {
                if (response.status !== 200) {
                    throw Error('Sorry the request could not be completed!');
                }
                return response;
            }

            function getMSPData() {
                if (typeof window.mspData !== 'undefined' && window.mspData == 1) {
                    try {
                        var temp_sc_loc = '';
                        temp_sc_loc = helperFunctions.ReadCookie('sc_loc');
                        if (temp_sc_loc !== '') {
                            temp_sc_loc = '/' + helperFunctions.ReadCookie('sc_loc');
                        } else {
                            temp_sc_loc = '/0000';
                        }
                        var data = '';
                        fetch(base_url + 'home/msp/' + window.masterPid + temp_sc_loc, {
                            method: 'get'
                            // credentials: 'include'
                        }).then(handleErrors).then(function (response) {
                            return response.text();
                        }).then(function (text) {
                            if (text !== '') {
                                $('#msp_data').html(text);
                                if (window.sellerCnt - 1 > 1) {
                                    data = 'Available with ' + (window.sellerCnt - 1) + " other Sellers";
                                } else if (window.sellerCnt - 1 == 1) {
                                    data = 'Available with ' + (window.sellerCnt - 1) + " other Seller";
                                }
                                if (window.sellerCnt - 1 >= 1) {
                                    $('.other_sellers').html(data);
                                    $("#sc_slImg").attr("src", $('#slrImg').attr('data-src'));
                                    $('.other_sellers').show();
                                }
                            }
                        }).catch(function (error) {
                            console.log(error);
                        });
                    } catch (e) {}
                }
            }
            function getEmiData() {
                if (typeof window.pId !== 'undefined' && typeof window.cartTotal !== 'undefined' && window.cartTotal > 0) {
                    try {
                        var url = base_url + 'home/emiData/' + window.pId + '/' + cartTotal;
                        microAjax(url, function (res) {
                            if (res !== '') {
                                $('.sc_emi').html(res);
                                var emiText = 'Emi starts at ' + minEmi + $('#min_emi').html();
                                $('#min_emi').html(emiText);
                                $('#min_emi').parent().show();
                            }
                        });
                    } catch (e) {}
                }
            }
            /*  function getAlsoViewed(){
             if(typeof window.pId !== 'undefined' && typeof window.also_viewed !== 'undefined' && window.also_viewed == 1){
             try{
             var lc = parseInt(visitorId.charAt(visitorId.length - 1));
             if(isNaN(lc))
             var expNum = 10;
             else {
             var expNum = ((lc%3)+1);
             }
             if(typeof expNum !== 'undefined' && typeof avflag !== 'undefined' && _satellite !== 'undefined'){
             avflag = expNum;
             _satellite.track('avflag');
             }
             var url = base_url+'home/alsoViewedProduct/'+window.pId+'/'+expNum;
             microAjax(url,function(res){
             if(res !== ''){
             $("#main_data").after(res);
             echo(window,document);
             $("#us_").slick({
             dots: false,
             infinite: false,
             slidesToShow: 5,
             slidesToScroll: 1
             });
             }
             });
             }catch(e){}
             }
             }   */
            function bestsellers() {
                var url = base_url + 'ajaxCall/bestsellers';
                var lp = 0;
                var up = 1000000;
                if (typeof thirdPrice !== 'undefined' && thirdPrice !== 0) {
                    lp = thirdPrice / 2;
                    up = thirdPrice * 2;
                } else if (typeof listPrice !== 'undefined' && listPrice !== 0) {
                    lp = listPrice / 2;
                    up = listPrice * 2;
                } else if (typeof price !== 'undefined' && price !== 0) {
                    lp = price / 2;
                    up = price * 2;
                }
                fetch(base_url + 'ajaxCall/bestsellers/' + l_id + '/' + lp + '/' + up, {
                    method: 'get'
                }).then(handleErrors).then(function (response) {
                    return response.text();
                }).then(function (text) {
                    if (text !== '') {
                        $("#main_data").after(text);
                        echo(window, document);
                        $("#oos_").slick({
                            dots: false,
                            infinite: false,
                            slidesToShow: 5,
                            slidesToScroll: 1
                        });
                    }
                }).catch(function (error) {
                    console.log(error);
                });
                // var data = {'pid': l_id, 'lp': lp, 'up': up, 'ur': 0, 'cat_type': 1};
                // $.ajax({
                //     url: url,
                //     type: 'GET',
                //     data: data,
                //     success: function(res){
                //         if(res !== ''){
                //                     $("#main_data").after(res);
                //                     echo(window,document);
                //                     $("#oos_").slick({
                //                         dots: false,
                //                         infinite: false,
                //                         slidesToShow: 5,
                //                         slidesToScroll: 1
                //                     });
                //                 }
                //     }
                // });
            }
            function getSizeChart() {
                if (typeof window.pId !== 'undefined') {
                    var url = base_url + 'ajaxCall/getSizeChart/' + window.pId;
                    $.ajax({
                        type: 'GET',
                        url: url,
                        success: function success(resp) {
                            resp = JSON.parse(resp);
                            if (resp.data && resp.status == 1) {
                                $('#sc_img').attr('src', resp.data.image_path);
                                var table = '';
                                var style = '';
                                $.each(resp.data.table_data, function (key, val) {
                                    table += '<tr>';
                                    if (key == 0) {
                                        var width = 100 / val.length;
                                        style = 'style="width: ' + width + '%"';
                                        $.each(val, function (k, v) {
                                            table += '<th ' + style + ' >' + v + '</th>';
                                        });
                                    } else {
                                        $.each(val, function (k, v) {
                                            table += '<td>' + v + '</td>';
                                        });
                                    }
                                    table += '</tr>';
                                });
                                $('#table_data').html(table);
                            }
                        }
                    });
                }
            }
            function fireviewed() {
                if (window.localStorage && typeof window.enable_buy_now !== 'undefined' && window.enable_buy_now == 1) {
                    var pdPrice = 0;
                    var list_price = 0;
                    var third_price = 0;
                    var Id = 0;
                    var show_badge = 'N';
                    if (typeof masterPid != 'undefined') {
                        Id = masterPid;
                    } else if (typeof window.pId !== 'undefined') {
                        Id = pId;
                    } else {
                        return false;
                    }
                    if (typeof window.show_surety_badge !== 'undefined' && window.show_surety_badge == 1) {
                        show_badge = 'Y';
                    }
                    if (typeof price != 'undefined') {
                        pdPrice = price;
                    }
                    if (typeof listPrice != 'undefined') {
                        list_price = listPrice;
                    }
                    if (typeof thirdPrice != 'undefined') {
                        third_price = thirdPrice;
                    }
                    if (third_price != 0) {
                        var f_price = third_price;
                    } else if (third_price == 0) {
                        var f_price = pdPrice;
                    } else if (price == 0) {
                        var f_price = list_price;
                    }
                    try {
                        window.recentlyViewed.setItem({ 'id': Id, 'url': document.URL.split('?')[0], 'name': $('.prd_mid_info h1').text().trim(), 'imageSrc': $('#slrImg').attr('data-src'), 'mrp': list_price, 'sellingPrice': f_price, 'Surety_Badge': show_badge });
                        if (is_mfc == 1) {
                            window.recentMFCViewed.setItem(window.pId);
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
            window.pdDetail_public = function () {
                return {
                    togglecbcheckbox: function togglecbcheckbox(event) {
                        event.classList.toggle('cb_check');
                        if (event.classList.contains('cb_check')) {
                            price_cut = 1;
                            var newprice = window.fprice - applicablecb;
                            var usedcb = window.fprice < applicablecb ? window.fPrice : applicablecb;
                            if (newprice < 0) newprice = 0;
                            var pricehtml = 'Rs.' + newprice;
                            document.getElementsByClassName('f_price')[0].innerHTML = pricehtml;
                            var newdisc = parseInt(document.getElementsByClassName('discount')[0].getAttribute('data-attr')) + applicablecbpercent;
                            if (newdisc > 100) newdisc = 100;
                            document.getElementsByClassName('discount')[0].innerHTML = newdisc + '% off';
                            document.getElementById('used_cb').innerHTML = usedcb + ' Used';
                            $('#snackbar').addClass('cb_toastmsg');
                            window.toastMessage('This is only indicative price.The final discounted price will be visible during checkout based on total order amount and available CB/CB+.');
                        } else {
                            price_cut = 2;
                            var newprice = window.fprice;
                            var pricehtml = 'Rs.' + newprice;
                            document.getElementsByClassName('f_price')[0].innerHTML = pricehtml;
                            var newdisc = parseInt(document.getElementsByClassName('discount')[0].getAttribute('data-attr'));
                            document.getElementsByClassName('discount')[0].innerHTML = newdisc + '% off';
                            document.getElementById('used_cb').innerHTML = 'Use ' + applicablecb;
                        }
                    },
                    gaDetail: function gaDetail() {
                        // code
                        if (typeof ga != 'undefined' && ga != null) {
                            if (typeof seo_name != 'undefined' && typeof type != 'undefined') {
                                ga('send', 'event', type, 'click', seo_name);
                            }
                        }
                    },
                    checkShippingCharges: function checkShippingCharges() {
                        if (typeof window.pId !== 'undefined') {
                            var pid = window.pId;
                            var loc = helperFunctions.ReadCookie('sc_loc');
                            var user_id = '';
                            var user_email = '';
                            var user_segment = '';
                            var pincode = '';
                            if (helperFunctions.ReadCookie('user_segment') != "") {
                                user_segment = helperFunctions.ReadCookie('user_segment');
                            }
                            if (helperFunctions.ReadCookie('scumd') != "") {
                                user_id = helperFunctions.ReadCookie('scumd');
                            }
                            if (helperFunctions.ReadCookie('scun') != "") {
                                user_email = helperFunctions.ReadCookie('scun');
                            }
                            if (loc === '') {
                                loc = '0000';
                            }
                            var qty = $('#quantityId').val();
                            if ($('#zip').length > 0 && $('#zip').val() != '') {
                                pincode = $('#zip').val();
                            } else if (typeof helperFunctions.ReadCookie('pincode') != 'undefined' && helperFunctions.ReadCookie('pincode') != '' && pincode == '') {
                                pincode = helperFunctions.ReadCookie('pincode');
                            }
                            if (qty < 1) {
                                qty = 1;
                            }
                            var url = base_url + 'ajaxCall/getShippingCharges?pid=' + pid + '&loc=' + loc + '&qty=' + qty + '&pincode=' + pincode + '&user_segment=' + user_segment + '&user_id=' + user_id + '&user_email=' + user_email;
                            microAjax(url, function (res) {
                                try {
                                    if (res && res != '') {
                                        var data = JSON.parse(res);
                                        if (data.per_product_shipping_amt < 1) {
                                            sch = 0;
                                            if (wholesale_product == 1) {
                                                var wh_sc = (sch * qty).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                                var schtml = "<li id='total_sc'>Total Shipping Charge : <span>" + wh_sc + "</span></li>";
                                                $("#total_sc").html(schtml);
                                            }
                                            document.getElementById('shippingcharge').innerHTML = 'Free Shipping';
                                        } else {
                                            sch = data.per_product_shipping_amt;
                                            var wh_sc = (sch * qty).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                            var schtml = "<li id='total_sc'>Total Shipping Charge : <span>" + wh_sc + "</span></li>";
                                            if (document.getElementById('shippingcharge').innerHTML == 'Free Shipping') {
                                                if (wholesale_product == 1) {
                                                    document.getElementById('shippingcharge').innerHTML = 'Shipping Charges: Rs. <span id="shipcharge">' + data.per_product_shipping_amt + '/Pc</span>';
                                                    $("#total_sc").html(schtml);
                                                } else {
                                                    document.getElementById('shippingcharge').innerHTML = 'Shipping Charges: Rs. <span id="shipcharge">' + data.per_product_shipping_amt + '</span>';
                                                }
                                            } else {
                                                if (wholesale_product == 1) {
                                                    document.getElementById('shipcharge').innerHTML = 'Rs ' + data.per_product_shipping_amt + '/Pc';
                                                    $("#total_sc").html(schtml);
                                                } else {
                                                    document.getElementById('shipcharge').innerHTML = 'Rs ' + data.per_product_shipping_amt;
                                                }
                                            }
                                        }
                                        try {
                                            evar54 = 'eVar54=';
                                            evar54 += data.shipping_delta_type + '::';
                                            if (data.change_in_shipping == -1) {
                                                evar54 += 'Decrease at PDP::';
                                            } else if (data.change_in_shipping == 0) {
                                                evar54 += 'No Change at PDP::';
                                            } else if (data.change_in_shipping == 1) {
                                                evar54 += 'Increase at PDP::';
                                            }
                                            evar54 += data.shipping_delta_amount;
                                            //evar54 = omString[5];
                                            //omString[5] = mspString + '|' + omString[5];
                                            //digitalData.omtrProduct = omString.join(';');
                                            //digitalData.product = omString.join(';');
                                        } catch (e) {}
                                    }
                                    $('#chkCharge').html($('#shippingcharge').html());
                                } catch (e) {}
                            });
                        }
                    },
                    chkCod: function chkCod() {
                        if (document.getElementById("iscod")) {
                            document.getElementById("iscod").style.visibility = "visible";
                        } else if (document.getElementById("notcod")) {
                            document.getElementById("notcod").style.visibility = "visible";
                        }
                    },
                    toggle: function toggle() {
                        var ele = document.getElementById("pd_pin");
                        if (ele.style.display == "none") {
                            ele.style.display = "block";
                            $('#delDetails').show();
                            //text.innerHTML = "show";
                            if (document.getElementById('toggleMe')) {
                                document.getElementById("toggleMe").style.display = "none";
                                document.getElementById('newdelDetails').style.display = 'none';
                            }
                            //                if (document.getElementById('del_time')) {
                            //                    document.getElementById('del_time').style.display = "";
                            //                }
                        } else {
                            //                ele.style.display = "none";
                            //                if (document.getElementById('del_time')) {
                            //                    document.getElementById('del_time').style.display = "block";
                            //                }
                            //typeofext.innerHTML = "hide";
                        }
                    }
                };
            }();
            function colorVariant(response) {
                if (response.data.images !== undefined && response.data.images !== null) {
                    var l = $('#thumblist li').length;
                    $("#thumblist2").css("display", "block");
                    var thumb = response.data.images[0].main_image.replace('/320/320', '/50/50');
                    try {
                        $('#thumblist').slick('slickRemove', 0);
                        $('#thumblist').slick('slickAdd', "<li><a class='' href='#' data-image='" + response.data.images[0].main_image + "' data-zoom-image='" + response.data.images[0].detailed_image + "'><img id='' src='" + thumb + "' data-img='" + thumb + "'/></a></li>", 0, true);
                    } catch (error) {}
                    thumbImg();
                    setTimeout(function () {
                        $('#thumblist li a').first().trigger("click");
                    }, 300);
                }
                if (response.data.modifier_type == 'A' && response.data.modifier !== 0) {
                    var price = Math.round(fprice + parseInt(response.data.modifier)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    $('.f_price').html('Rs.' + price);
                } else if (response.data.modifier_type == 'P' && response.data.modifier !== 0) {
                    var price = Math.round(fprice * (1 + parseInt(response.data.modifier) / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    $('.f_price').html('Rs.' + price);
                }
            }
            function variantcombo(response) {
                var output = response.data.linked_option_variant_data;
                var array = [];
                var variantId = response.data.variant_id;
                var optionId = response.data.option_id;
                if (prev.variantID != variantId) {
                    prev.variantID = variantId;
                    prev.optionID = optionId;
                    $.each(output, function (index, value) {
                        $.each(output[index].variants, function (ind, val) {
                            array.push(ind);
                        });
                        $.each($("#" + spanId).children(".variant"), function (k, v) {
                            var a = $(v);
                            if (array.indexOf(a.attr('id')) == -1) {
                                $(v).addClass("disabled");
                                if ($(v).hasClass("selected")) {
                                    $(v).removeClass("selected");
                                }
                                //sessionStorage.setItem(spanId+'&'+siblingId, JSON.stringify(response));
                            }
                        });
                    });
                }
                // $('#responseLoading').hide();
                // $('#buy').attr('disabled',false);
                // $('#add_cart').attr('disabled',false);
            }
            function thumbImg() {
                try {
                    $("#zoom_picture_gall").elevateZoom({ gallery: 'thumblist', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: false, loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif', zoomWindowFadeIn: 500, zoomWindowFadeOut: 500, lensFadeIn: 500, lensFadeOut: 500, /*scrollZoom : true*/zoomWindowWidth: 700, zoomWindowHeight: 450, easing: true, borderSize: 0, zoomWindowPosition: "deta_container" });

                    $("#zoom_picture_gall").bind("click", function (e) {
                        var ez = $('#zoom_picture_gall').data('elevateZoom');
                        $.fancybox(ez.getGalleryList());
                        return false;
                    });

                    $('#thumblist').slick({ lazyLoad: 'ondemand', slidesToShow: 4, slidesToScroll: 1, infinite: false });
                } catch (error) {}
            }

            function loadMoreReviews() {
                if (typeof window.showRev !== 'undefined' && window.showRev == 1 && pdp_setup.hideReview == 0 && typeof window.pId !== 'undefined') {
                    //window.pId = 96627546;
                    window.reviewPage += 1;
                    var url = base_url + 'home/reviewDetail/' + window.pId + '/' + window.reviewPage;
                    microAjax(url, function (res) {
                        if (res !== '') {
                            // if(document.getElementById('pdp_rnr') === null && pdp_setup.hideReview == 0 && window.reviewPage===1){
                            //         if($(".refurbhished").length > 0){
                            //             $(".refurbhished").after(res);
                            //         }else{
                            //             $(".selected_product_tabbing").after(res);
                            //         }
                            //         try {
                            //             $('#review-btn').click(function() {
                            //                 //omString[5]=evar48+"|"+evar36;
                            //                 //window.digitalData.product = omString.join(';');
                            //                 //window.digitalData.omtrProduct = omString.join(';');
                            //             });
                            //         } catch (e) {
                            //         }
                            //         var pstars =  Math.round(window.stars);
                            //         var ostars = window.avg_rat / 5 * 284;
                            //         $(".c_fill").css( "stroke-dasharray",   ostars + "," + "284"  );
                            //         //$('#moreReview').unbind('click').click(loadReviews);
                            // } else {
                            $(".rnr_lists ul").append(res);
                            //}
                            if (window.reviewPage >= window.totalPage) {
                                window.showRev = 0;
                                $("#moreReview").css("display", "none");
                            }
                        }
                    });
                }
            }
            $(document).ready(function () {
                $('#bb_').slick({
                    dots: false,
                    infinite: false,
                    slidesToShow: 5,
                    slidesToScroll: 1
                });
                $('#vv_').slick({
                    dots: false,
                    infinite: false,
                    slidesToShow: 5,
                    slidesToScroll: 1
                });
                $('.rnr_video_rating .regular').slick({
                    dots: false,
                    infinite: false,
                    slidesToShow: 5,
                    slidesToScroll: 1
                });
            });
            $('.t_overlay').click(function (e) {
                $('.t_overlay').hide();
            });
            $('#moreReview').unbind('click').click(loadMoreReviews);

            function thumb_image_change() {
                if ($('.zoomLens')[0].style.display == "none") {
                    if (current_index < total_thumbs) {
                        $('#thumb_click_' + current_index + " a").triggerHandler("click");
                        current_index++;
                    } else {
                        current_index = 0;
                        counter++;
                        if (counter == 3) {
                            window.clearInterval(thumb_timer);
                        }
                        $('#thumb_click_' + current_index + " a").triggerHandler("click");
                    }
                }
            }

            function thumb_click() {
                thumb_timer = setInterval(thumb_image_change, 5000);
                $('.thumb_click a').mousedown(function () {
                    current_index = 0;
                    window.clearInterval(thumb_timer);
                    if (counter < 3) {
                        thumb_timer = setInterval(thumb_image_change, 5000);
                    }
                });
            }

            function fireOnLoad() {
                var vi_d = parseInt(visitorId[visitorId.length - 1]);
                var thumb_image_timer = '';
                if (!isNaN(vi_d) && vi_d % 2 != 0 && typeof total_thumbs !== 'undefined' && total_thumbs !== null && typeof thumb_image_timer !== 'undefined' && thumb_image_timer !== null && parseInt(total_thumbs) > 1) {
                    if (typeof _satellite !== 'undefined') {
                        thumb_image_timer = 'auto_scroll_yes';
                        _satellite.track('thumb_image_timer');
                    }
                    thumb_click();
                } else {
                    if (typeof _satellite !== 'undefined') {
                        thumb_image_timer = 'auto_scroll_no';
                        _satellite.track('thumb_image_timer');
                    }
                }
                if (document.getElementById('rfbcondition_details')) {
                    if (document.getElementById('pho_cond_text')) {
                        document.getElementById('p_condition').innerHTML = p_condition;
                        document.getElementById('pho_cond_text').style.display = 'block';
                    }
                    document.getElementById('rfbcondition_details').addEventListener('click', function () {
                        if (document.getElementsByClassName('tabbing_nav')[0]) {
                            var final_pos = document.getElementsByClassName('tabbing_nav')[0].offsetTop;
                            window.scrollTo(0, final_pos);
                            if (document.getElementById('Cond_details')) {
                                document.getElementById('Cond_details').click();
                            }
                        }
                    });
                }
                if (typeof wholesale_prd !== 'undefined' && typeof min_wholesale_set_qty_price !== 'undefined' && change_price && change_price != 0) {
                    if (wholesale_prd == 1 && min_wholesale_set_qty_price) {
                        if (document.getElementsByClassName('f_price')[0]) {
                            document.getElementsByClassName('f_price')[0].setAttribute('data-attr', min_wholesale_set_qty_price);
                            document.getElementsByClassName('f_price')[0].setAttribute('content', min_wholesale_set_qty_price);
                            document.getElementsByClassName('f_price')[0].innerHTML = 'Rs.' + min_wholesale_set_qty_price + '/Pc';
                        }
                    }
                }
                window.fprice = parseInt($('.f_price').attr('data-attr'));
                if (typeof digitalData !== 'undefined') {
                    window.omString = digitalData.omtrProduct.split(';');
                    window.evar36 = omString[5];
                    if (typeof window.pId !== 'undefined') {
                        window.evar48 = "evar48=" + window.pId;
                    }
                    window.evar54 = "";
                }
                if (show_bestseller == 1) {
                    bestsellers();
                }
                //getAlsoViewed();
                //$(window).one('scroll',loadMoreReviews);
                getMSPData();
                getEmiData();
                if (typeof localforage !== 'undefined' && typeof window.pId !== 'undefined') {
                    localforage.getItem('wishlist_' + window.pId, function (err, value) {
                        if (value !== null) {
                            if (helperFunctions.ReadCookie("user_id") && helperFunctions.ReadCookie("user_id") !== '' || helperFunctions.ReadCookie("scumd") && helperFunctions.ReadCookie("scumd") !== '') {
                                $("#pdp_wishlist").trigger("click");
                            }
                            localforage.removeItem('wishlist_' + window.pId);
                        }
                    });
                }
                if (document.getElementById('getSC') && document.getElementById('getSC').style.display == 'none' && show_size_chart == 'Y') {
                    $('#getSC').show();
                    getSizeChart();
                }
                //checkShipping();
                $("#thumblist").css("display", "block");
                $("#thumblist2").css("display", "none");
                thumbImg();
                if (pdp_setup.fireShippping == true && helperFunctions.ReadCookie('pincode') !== '' && helperFunctions.ReadCookie('pincode') !== null && typeof window.pId != 'undefined') {
                    if (document.getElementById('check_shipping')) {
                        document.getElementById('check_shipping').click();
                    }
                } else {
                    $('#check_shipping').attr('disabled', true);
                }
                // if ($('.Quantity').length >0){
                //pdDetail_public.checkShippingCharges();
                //}

                if (window.localStorage) {
                    try {
                        //The paramaters passed are the 3 IDs for the product  and the storage length is set from the config file.
                        recentlyViewedAll({ 'pid': pId, 'mid': m_id, 'lid': l_id }, rva_length);
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
            pdp_setup.init();
            fireviewed();
            if (window.coreJSLoaded) fireOnLoad();else document.addEventListener("coreJSLoaded", fireOnLoad);
            //initiateLoad();


            //FUNCTIONS FOR WALMART

            function walmartPdp() {

                if (typeof enableWalmart !== 'undefined' && walmartProduct == 'Y') {

                    $("#buy").attr('disabled', true);
                    //        $("#buy").addClass("display_inline_block");
                    //        $("#buy").addClass("disable");

                    var clues_id = helperFunctions.ReadCookie("scumd");
                    var walmart_userdata = helperFunctions.ReadCookie('walmart_user_data');
                    var walmart_user = helperFunctions.ReadCookie("walmart_user");

                    if (walmart_userdata) {
                        var wal_userdata = window.atob(walmart_userdata);
                        var wal_ud = JSON.parse(wal_userdata);
                    }

                    if (clues_id && walmart_userdata && clues_id == wal_ud.scl_user) {
                        var walmart_user = helperFunctions.ReadCookie("walmart_user");
                        if (walmart_user && walmart_user == clues_id) {
                            $('#add_cart').show();
                            $('#walmart_button').hide();
                            $("#buy").attr('disabled', false);
                            //                $("#buy").removeClass("display_inline_block");
                            //                $("#buy").removeClass("disable");
                        } else {
                            //ajax hit to check valid user/pswd of walmart
                            $.ajax({
                                type: "POST",
                                url: 'ajaxCall/executeWalmartPdp',
                                async: true,
                                data: { clues_id: clues_id, username: wal_ud.user, password: wal_ud.pswd },
                                success: function success(data) {
                                    if (data == "Success") {
                                        $('#add_cart').show();
                                        $('#walmart_button').hide();

                                        $("#buy").attr('disabled', false);
                                        //                            $("#buy").removeClass("display_inline_block");
                                        //                            $("#buy").removeClass("disable");
                                    } else {

                                        $('#add_cart').hide();
                                        $('#walmart_button').show();
                                    }
                                },

                                error: function error() {

                                    $('#add_cart').hide();
                                    $('#walmart_button').show();
                                }
                            });
                        }
                    } else {
                        $('#walmart_button').show();
                        $('#add_cart').hide();
                    }

                    $('#walmart_button').click(function () {
                        if (clues_id) {
                            // $('#walmart_login').addClass('light-box pin_locate');
                            $('#walmart_login').fadeIn();
                        } else {
                            window.location.href = login_url + window.location.pathname + window.location.search;
                        }
                    });
                    $('.close').click(function () {
                        $("#walmart_login").fadeOut();
                    });
                }
            }

            walmartPdp();

            return {

                WalmartLogin: function WalmartLogin() {
                    var clues_id = helperFunctions.ReadCookie("scumd");

                    var user = $('#walmart_username').val().trim();
                    var pass = $('#walmart_password').val().trim();
                    var wal_user_Pattern = /^\d+$/;

                    if (user && pass && wal_user_Pattern.test(user)) {

                        $.ajax({
                            type: "POST",
                            url: 'ajaxCall/executeWalmartPdp',
                            async: true,
                            data: { username: user, password: pass, clues_id: clues_id },
                            success: function success(data) {

                                if (data == "Success") {
                                    $('#walmart_login').hide();
                                    $('#add_cart').show();
                                    $('#walmart_button').hide();
                                    $("#buy").attr('disabled', false);
                                    //                                                        $("#buy").removeClass("display_inline_block");
                                    //                                                        $("#buy").removeClass("disable");
                                } else {
                                    if (data == "Register") {
                                        $('#walmart_error').html("This account does not exist. Please register.");
                                    } else {
                                        $('#walmart_error').html("Please provide correct credentials.");
                                        $('#add_cart').hide();
                                        $('#walmart_button').show();
                                    }
                                }
                            },
                            error: function error() {

                                $('#walmart_error').html("Please try again!!");
                                $('#add_cart').hide();
                                $('#walmart_button').show();
                            }
                        });
                    } else {
                        $('#walmart_error').html("Please provide correct credentials");
                        $('#add_cart').hide();
                        $('#walmart_button').show();
                    }
                }

            };
        }(SC, window);

        window.echo = function (window, document) {
            'use strict';

            var Echo = function Echo(elem) {
                this.elem = elem;
                this.render();
                this.listen();
            };
            var echoStore = [];
            var scrolledIntoView = function scrolledIntoView(element) {
                var coords = element.getBoundingClientRect();
                return (coords.top >= 0 && coords.left >= 0 && coords.top) <= (window.innerHeight || document.documentElement.clientHeight);
            };

            var echoSrc = function echoSrc(img, callback) {
                img.src = img.getAttribute('data-img');
                if (callback) {
                    callback();
                }
            };
            var removeEcho = function removeEcho(element, index) {
                if (echoStore.indexOf(element) !== -1) {
                    echoStore.splice(index, 1);
                }
            };
            var echoImages = function echoImages() {
                for (var i = 0; i < echoStore.length; i++) {
                    var self = echoStore[i];
                    if (scrolledIntoView(self)) {
                        echoSrc(self, removeEcho(self, i));
                    }
                }
            };
            Echo.prototype = {
                init: function init() {
                    echoStore.push(this.elem);
                },
                render: function render() {
                    if (document.addEventListener) {
                        document.addEventListener('DOMContentLoaded', echoImages, false);
                    } else {
                        window.onload = echoImages;
                    }
                },
                listen: function listen() {
                    window.onscroll = echoImages;
                    var elems = document.getElementsByClassName("lazyLoadImage"),
                        i;
                    if (elems.length > 0) {
                        for (i = 0; i < elems.length; i++) {
                            elems[i].addEventListener("touchstart", echoImages);
                        }
                    }
                }
            };
            var lazyImgs = document.querySelectorAll('img[data-img]');
            for (var i = 0; i < lazyImgs.length; i++) {
                new Echo(lazyImgs[i]).init();
            }
        };
        echo(window, document);
        window.chat = function (window, document) {
            var Chat = function Chat() {
                this.chatOnOff = parseInt($(".seller_chat").attr("status"));
                //this.chatHost = ".shopclues.com";
                //this.myChatUrl = "myChat.html";
                this.chatTime = $(".seller_chat").attr("time");
                this.chatScripts = ["https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js", "chat_new/js/reconnecting-websocket.js", "chat_new/js/jquery.form.js"];
                this.init();
            };
            Chat.prototype = {
                init: function init() {
                    if (this.chatOnOff === 1 && typeof window.hbId !== 'undefined') {
                        var i = 0;
                        var j = this.chatScripts.length;
                        var link = document.createElement("LINK");
                        link.setAttribute("rel", "stylesheet");
                        link.setAttribute("type", "text/css");
                        link.setAttribute("href", "chat_new/chat.css");
                        document.getElementsByTagName('body')[0].appendChild(link);

                        for (i; i < j; i++) {
                            var script_element = document.createElement('script');
                            script_element.src = this.chatScripts[i];
                            script_element.type = "text/javascript";
                            script_element.setAttribute("async", true);
                            document.getElementsByTagName('head')[0].appendChild(script_element);
                        }
                        $('.seller_chat').click(function () {
                            chatGetUserInfo();
                        });
                        $('#ckey').click(function () {
                            chatUserInfo();
                        });
                        $('#button-chat').css({ 'display': 'block' });
                        //$('.ask_m').css({'display':'none'});
                        //$('#button-chat + .pdp_merchant_links, #chat_container + .pdp_merchant_links').css({'display':'none'});
                    }
                }
            };
            function chatUserInfo() {
                f_name = document.forms["myForm"]["firstname"].value;
                l_name = document.forms["myForm"]["lastname"].value;
                email_id = document.forms["myForm"]["emailid"].value;
                shop_id = 0;
                atpos = email_id.indexOf("@");
                dotpos = email_id.lastIndexOf(".");
                chatValidation(chatCreateFrame);
            }
            function chatGetUserInfo() {
                if (typeof window.pId !== 'undefined') {
                    companyId = window.CompId;
                    productId = window.pId;
                    heybizId = window.hbId;
                    sellPrice = window.sP || '';
                    dealPrice = window.dP || '';
                    if (helperFunctions.ReadCookie('guestEmail') !== "" && helperFunctions.ReadCookie('guestScun') !== "" && helperFunctions.ReadCookie('guestLname') !== "") {
                        email_id = helperFunctions.ReadCookie('guestEmail');
                        f_name = helperFunctions.ReadCookie('guestScun');
                        l_name = helperFunctions.ReadCookie('guestLname');
                        shop_id = 0;
                        chatCreateFrame();
                    } else if (helperFunctions.ReadCookie('email') !== "" && helperFunctions.ReadCookie('scun') !== "" && helperFunctions.ReadCookie('lname') !== "") {
                        email_id = atob(helperFunctions.ReadCookie('email')).replace(/"/g, "");
                        f_name = atob(helperFunctions.ReadCookie('scun')).replace(/"/g, "");
                        l_name = atob(helperFunctions.ReadCookie('lname')).replace(/"/g, "");
                        shop_id = 1;
                        chatCreateFrame();
                    } else {
                        $('#button-chat form').slideToggle();
                        $('#button-chat > button').toggleClass('seller_chat');
                    }
                }
            }
            function chatValidation(callback) {
                if (f_name === "" || !/^[a-zA-Z]*$/g.test(f_name)) {
                    alert("Please provide valid name!");
                    document.forms["myForm"]["firstname"].focus();
                    return false;
                } else if (l_name == "" || !/^[a-zA-Z]*$/g.test(l_name)) {
                    alert("Please provide your last name!");
                    document.forms["myForm"]["lastname"].focus();
                    return false;
                } else if (email_id == "") {
                    alert("Please provide your email id!");
                    document.forms["myForm"]["emailid"].focus();
                    return false;
                } else if (atpos < 1 || dotpos - atpos < 2 || !/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(email_id)) {
                    alert("Please enter correct email ID");
                    document.forms["myForm"]["emailid"].focus();
                    return false;
                } else {
                    SetCookie('guestEmail', email_id, chat1.chatTime, window.cookieDomain);
                    SetCookie('guestScun', f_name, chat1.chatTime, window.cookieDomain);
                    SetCookie('guestLname', l_name, chat1.chatTime, window.cookieDomain);
                    callback();
                }
            }
            function chatCreateFrame() {
                $('#button-chat').remove();
                $("#chat_container").load("chat_new/frame.php");
                chatInitApi();
            }
            function chatInitApi() {

                $.ajax({
                    type: "GET",
                    url: base_url + "home/chatRegister",
                    cache: false,
                    data: { fName: f_name, lName: l_name, email: email_id, shopId: shop_id, company_id: companyId, product_id: productId, hb_id: heybizId },
                    traditional: true,
                    success: function success(result) {
                        var response = jQuery.parseJSON(result);
                        wsUri = response.data.WebSocket_URL;
                        bizAdminId = response.data.User.uId;
                        websocket_post_msg = response.data.TextMsg_URL;
                        postMedia = response.data.MediaMsg_URL;
                        mediaUrl = response.data.Media_Base_URL;
                        adminurl = "/clues-chat/";
                        cId = response.data.User.cId;
                        bId = response.data.User.bId;
                        recId = response.data.User.aId;
                        businessName = response.data.User.bName;
                        senderName = response.data.User.uName;
                        adminName = response.data.User.aName;
                        chatJsLoad(chatRedisCall);
                    }
                });
            }
            function chatJsLoad(callback) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = "chat_new/js/chat.js";
                if (script.readyState) {
                    script.onreadystatechange = function () {
                        if (script.readyState === "loaded" || script.readyState === "complete") {
                            script.onreadystatechange = null;
                            callback();
                        }
                    };
                } else {
                    //Others
                    script.onload = function () {
                        callback();
                    };
                }
                //document.head.appendChild(script);
                document.getElementsByTagName("head")[0].appendChild(script);
            }
            function chatRedisCall() {
                $.ajax({
                    type: "GET",
                    url: base_url + "home/chatRedis",
                    cache: false,
                    data: { user: bizAdminId },
                    traditional: true,
                    success: function success(result) {
                        var response = jQuery.parseJSON(result);
                        lm = response.lm;
                        arr = response.arr1;
                        chatCreateBox();
                        if (lm !== '') {
                            authMessage = { 'type': 'auth', 'userId': bizAdminId, 'isReauth': 1, 'lmid': lm };
                            for (var key in arr) {
                                if (arr.hasOwnProperty(key)) {
                                    createChatList(jQuery.parseJSON(arr[key]), 0);
                                }
                            }
                            createWebSocket(1);
                        } else {
                            authMessage = { 'type': 'auth', 'userId': bizAdminId, 'isReauth': 0, 'lmid': '' };
                            createWebSocket(0);
                        }
                    }
                });
            }
            function chatCreateBox() {
                var time = getLocalTime();
                var sel = 1;
                var listHtml = "<a href='#' bKey='" + businessName + "' biz='" + businessName.replace(/[\'\"]/g, '') + "' user='" + senderName + "' senderId='" + bizAdminId + "' class='list-group-item' id='userName_" + cId + "'>" + senderName + "<br><small> " + businessName + "<br><span id='last_" + cId + "'>" + time + "</span></small></a>";
                $('#chatUserList').prepend(listHtml);
                $('#chat').append("<div class='chat-tab-content active' id='box_" + cId + "'  self='" + sel + "'><div class='action'><span class='un'></span><a href='" + base_url + "mychat" + "'target='_blank' class='new_window'></a><span class='chat_close' id='rem_" + bId + "_" + bizAdminId + "'></span></div><div class='bubble-list row' id='cb_" + cId + "'></div><div class='message-form row'><form name='chat-form' id='form-" + recId + "_" + bId + "_" + cId + "_" + recId + "' method='post' onSubmit='return false;' action='" + base_url + "home/chatImageSend'" + "enctype='multipart/form-data'><input class='cmi' type='hidden' name='cmi' value=''><input type='hidden' name='srdata' value='" + bizAdminId + "_" + bId + "_" + cId + "_" + recId + "'><div class='input-group'><span class='input-group-btn'><span class='btn btn-attach btn-sm btn-file'><span class=''></span><input cid='" + cId + "' type='file' name='myfile' id='file-" + recId + "_" + bId + "_" + cId + "_" + recId + "' onChange='ifFile(this)' accept='image/*'></span></span><textarea placeholder='Write message' class='form-control input-sm chat-input input' name='caption' id='" + recId + "_" + bId + "_" + cId + "' cid='" + cId + "' ></textarea><span class='input-group-btn'> <button class='btn btn-custom btn-sm' id='btn_" + recId + "_" + bId + "_" + cId + "' cid='" + cId + "'></button> </span></form></div></div></div>");
                var stxt = '<a href="">' + businessName + '</a>';
                var txt = stxt + '<br><small style="display:none;">' + adminName + ' on Chat</small>';
                $("#box_" + cId + " .action .un").html(txt);
                $(document).data('chat' + cId, "true");
                $('.chat_close').click(function () {
                    $('.chat-tab-content').toggleClass('position_top');
                    $(this).toggleClass('maximize');
                });
                $('.chat-input').keyup(function () {
                    if ($('.chat-input').val().length > 0) {
                        $('.btn.btn-custom.btn-sm').addClass('blue_active');
                    } else {
                        $('.btn.btn-custom.btn-sm').removeClass('blue_active');
                    }
                });
            }
            var chat1 = new Chat();
            if (window.coreJSLoaded) chat1();else document.addEventListener("coreJSLoaded", chat1);
        }(window, document);

        /*TOOLTIP SECTION*/
        /*var iInfo = $('.icon_info');
         var iInfo_target = $('.tooltipPopup');
         var mouse_is_inside = false;

         $(document).ready(function()
         {
         $(iInfo).hover(function(){
         mouse_is_inside=true;
         $(this).parent().find(iInfo_target).show();
         }, function(){
         mouse_is_inside=false;
         });

         $("body").mouseup(function(){
         if(! mouse_is_inside) $(iInfo_target).hide();
         });
         });*/
        var user_segment;
        function usersegment() {
            var url = base_url + 'ajaxCall/getUserSegment/';
            var random = Math.floor(Math.random() * 100 + 1);
            var data = { 'user': helperFunctions.ReadCookie('scumd') };
            url = url + random;
            try {
                $.ajax({
                    url: url,
                    type: 'GET',
                    data: data,
                    success: function success(res) {
                        var offr_data = JSON.parse(res);
                        offertext = offr_data.offer;
                        SetCookie('cb', offr_data.cluesbuck, 1 / 12, cookieDomain);
                        if (typeof offertext !== 'undefined' && typeof offr_data.segment !== 'undefined' && _satellite !== 'undefined') {
                            user_segment = offr_data.segment + "_" + offertext;
                            _satellite.track('user_segment');
                        }
                        if (typeof offr_data.segment !== 'undefined') {
                            SetCookie('user_segment', offr_data.segment, 1 / 12, cookieDomain);
                        }
                        if (typeof offertext !== 'undefined' && offertext !== 'NO_OFFER') {
                            SetCookie('user_segment_offer', offertext, 1 / 12, cookieDomain);
                            if (pdp_user_segment.hasOwnProperty(offertext) == true) {
                                offr_cnt++; //alert(offr_cnt);
                                if (pdp_user_segment[offertext] !== 'undefined') {
                                    offr_list = pdp_user_segment[offertext];
                                }
                                if (offr_cnt > 1) {
                                    var offr_html = offr_cnt + ' OFFERS';
                                } else var offr_html = offr_cnt + ' OFFER';
                                if (offr_cnt == 1) {
                                    $('#buy_now').before("<div class='offers'><p><span class='n_off'>1 OFFER</span><span>" + offr_list + "</span></p></div>");
                                    $('#buy_now').show();
                                } else if (offr_cnt == 2) {
                                    $('.n_off').html('');
                                    $('.n_off').html(offr_html);
                                    $('.n_off').show();
                                    $('#promo_txt').html('');
                                    $('#promo_txt').html(offr_list);
                                    $('#promo_txt').show();
                                    $('.links').show();
                                    $('.n_off').nextAll("span:first").html(offr_list);
                                    //$('#promo_txt').after("<span class='links'><a class='v_offer' href='javascript:void(0);''>View offers</a></span><ul id='promo_offr' style='display: none;''></ul>");
                                    //$('.offers').wrapInner('</p>');
                                    // $('.n_off').next("span:first").before("<span>" + offr_list + "</span><span class='links'><a class='v_offer' href='javascript:void(0);'>View offers</a></span>");
                                    // $('.promo_txt').html('');
                                } else {
                                    $('.n_off').html('');
                                    $('.n_off').html(offr_html);
                                    $('.n_off').show();
                                    $('.n_off').nextAll("span:first").html(offr_list);
                                }
                            }
                        }
                    }
                });
            } catch (e) {
                console.log(e);
            }
        }
        if (helperFunctions.ReadCookie('scumd') != "" && rbprod == 1) {
            usersegment();
        }
        function pdp_loyalty() {
            var url = base_url + 'ajaxCall/getloyalty';
            var seg = ReadCookie('user_segment');
            var data = { 'user_id': atob(ReadCookie('scumd')), 'visitor_id': visitorId, 'product_id': window.pId, 'user_segment': seg };
            $.ajax({
                type: 'GET',
                url: url,
                data: data,
                success: function success(resp) {
                    if (typeof resp !== 'undefined' && resp !== null) {
                        var res = JSON.parse(resp);
                        var promo = res[0].promotions;
                        $.each(promo, function (key, value) {
                            if (key == 'CB_OFFER') {
                                if (value.discount_difference_value == 0) var cbtext = "";else var cbtext = " Each CluesBucks is equal to Rs 1.";
                                var cbucks = value.discount;
                                var extracbtxt = '';
                                if (value.cod_discount_value == 0) {
                                    var html = '';
                                } else {
                                    cbucks = value.cod_discount_value < value.prepaid_discount_value ? value.cod_discount_value : value.prepaid_discount_value;
                                    var html = '<div><span class="cb_amt">' + cbucks + ' CluesBucks<i class="plus">+</i></span><span>for VIP Club Members </span><i class="icon_info"><span></span><div class="pt"><div class="tooltipPopup"><p>' + value.extraCBCashbackMessage + cbtext + '</p></div></div></i><a href="https://cdn.shopclues.com/images/banners/Work/FashionCloset/july/tnc/Loyalty_Program_tnc.html"> T&C</a></div>';
                                }
                                $('.cbucks_balance').html(html);
                            }
                        });
                    }
                }
            });
        }
//if(ReadCookie('user_segment') == 'LC'){
        pdp_loyalty();
//}
        function getTotalCB() {
            if ((helperFunctions.ReadCookie("user_id") || helperFunctions.ReadCookie('scumd')) && prod_data.metaCategoryId !== 5099 && typeof is_wholesale == 'undefined') {
                var userid = atob(helperFunctions.ReadCookie("user_id")) || atob(helperFunctions.ReadCookie('scumd'));
                var seg = ReadCookie('user_segment');
                var fPrice = parseInt($('.f_price').attr('data-attr'));
                if (typeof listPrice === 'undefined') var listprice = fPrice;else var listprice = listPrice;
                var url = 'ajaxCall/total_cb?user_id=' + userID + '&user_segment=' + seg + '&price=' + fPrice + '&list_price=' + listprice;
                $.ajax({
                    url: url,
                    type: 'GET',
                    success: function success(res) {
                        res = JSON.parse(res);
                        if (typeof res.response.cb_balance_details.user_cb_applicable_data.user_total_cb_applicable !== 'undefined') {
                            price_cut = 1;
                            applicablecb = res.response.cb_balance_details.user_cb_applicable_data.user_total_cb_applicable;
                            applicablecbpercent = res.response.cb_balance_details.user_cb_applicable_data.cb_percent;
                            document.getElementsByClassName('cb_av')[0].style.display = 'inline-block';
                            document.getElementById('used_cb').innerHTML = res.response.cb_balance_details.user_cb_applicable_data.user_total_cb_applicable + ' Used';
                            var newprice = fPrice - applicablecb;
                            if (newprice < 0) newprice = 0;
                            var pricehtml = 'Rs.' + newprice;
                            document.getElementsByClassName('f_price')[0].innerHTML = pricehtml;
                            var newdisc = parseInt(document.getElementsByClassName('discount')[0].getAttribute('data-attr')) + applicablecbpercent;
                            if (newdisc > 100) newdisc = 100;
                            document.getElementsByClassName('discount')[0].innerHTML = newdisc + '% off';
                            $('#snackbar').addClass('cb_toastmsg');
                            window.toastMessage('This is only indicative price.The final discounted price will be visible during checkout based on total order amount and available CB/CB+.');
                        }
                    }
                });
            }
        };
        function submit_ques_ans(event) {
            if (event.currentTarget.id == 'submit_answer') {
                var ques_id = event.currentTarget.getAttribute('qid');
                if (document.getElementById('ask_question')) {
                    document.getElementById('ask_question').click();
                    document.getElementById('customer_ques').value = '';
                    document.getElementById('customer_ques').placeholder = 'Type your answer here';
                    document.getElementById('submit_button').setAttribute('label', 'answer');
                    document.getElementById('submit_button').setAttribute('questionid', ques_id);
                    document.getElementById('qa_heading').innerHTML = 'Submit your answer';
                }
                return;
            }
            var usr_id = helperFunctions.ReadCookie("scumd");
            if (usr_id != '') {
                usr_id = atob(getCOOKIE('scumd'));
            }
            if (document.getElementById('customer_ques') && document.getElementById('customer_ques').value != '') {
                var text_content = document.getElementById('customer_ques').value;
                var url;
                if (usr_id == '') {
                    helperFunctions.SetCookie('loginredirect_desktop', document.URL, 1, '.shopclues.com');
                    helperFunctions.SetCookie('quans_desktop', text_content, 1, '.shopclues.com');
                    if (document.getElementById('show_loginpop')) {
                        document.getElementById('ask_ques_box').style.display = 'none';
                        document.getElementById('common_popupModel').style.display = 'none';
                        document.getElementById('common_overlay').style.display = 'none';
                        document.getElementById('show_loginpop').click();
                    }
                    return;
                }
                if (document.getElementById('submit_button').getAttribute('label') == 'question') {
                    url = 'ajaxCall/submit_ques_ans?product_id=' + window.pId + '&type=question' + '&user_id=' + usr_id + '&user_type=U' + '&question=' + text_content;
                } else {
                    url = 'ajaxCall/submit_ques_ans?type=answer' + '&question_id=' + document.getElementById('submit_button').getAttribute('questionid') + '&user_id=' + usr_id + '&user_type=U' + '&answer=' + text_content;
                }
                fetch(url).then(function (response) {
                    return response.json();
                }).then(function (response) {
                    document.getElementById('common_popupModel').style.display = 'none';
                    document.getElementById('ask_ques_box').style.display = 'none';
                    document.getElementById('common_overlay').style.display = 'none';
                    if (response && response.status == 1) {
                        window.toastMessage('Question has been submitted successfully');
                    } else {
                        window.toastMessage('Error in submitting question');
                    }
                }).catch(function (error) {
                    console.log(error);
                    document.getElementById('common_popupModel').style.display = 'none';
                    document.getElementById('ask_ques_box').style.display = 'none';
                    document.getElementById('common_overlay').style.display = 'none';
                    window.toastMessage('Error in submitting question');
                });
            }
        }
        function Question_Answer() {

            var stored_question = helperFunctions.ReadCookie('quans_desktop');
            if (stored_question != '' && helperFunctions.ReadCookie("scumd") != '') {
                stored_question = getCOOKIE('quans_desktop');
                var usr_id = helperFunctions.ReadCookie("scumd");
                if (usr_id != '') {
                    usr_id = atob(getCOOKIE('scumd'));
                }
                var url = 'ajaxCall/submit_ques_ans?product_id=' + window.pId + '&type=question' + '&user_id=' + usr_id + '&user_type=U' + '&question=' + stored_question;
                fetch(url).then(function (response) {
                    return response.json();
                }).then(function (response) {
                    if (response && response.status == 1) {
                        window.toastMessage('Question has been submitted successfully');
                    } else {
                        window.toastMessage('Error in submitting question');
                    }
                    helperFunctions.SetCookie('quans_desktop', '', 1, '.shopclues.com');
                }).catch(function (error) {
                    console.log(error);
                    window.toastMessage('Error in submitting question');
                    helperFunctions.SetCookie('quans_desktop', '', 1, '.shopclues.com');
                });
            }

            if (document.getElementById('ask_question')) {
                document.getElementById('ask_question').addEventListener('click', function () {
                    if (!document.getElementById('ask_ques_box')) {
                        var ques_block = '<div id="ask_ques_box" class="qa_popup" style="display: block;"><h4 id="qa_heading" class="heading">Ask your Question</h4><textarea id="customer_ques" placeholder="Type your question here"></textarea><div class="action_btn"><a href="javascript:void(0);" id="cancel_ques" class="btn orange-white">Cancel</a><a href="javascript:void(0);" id="submit_button" label="question" questionid="" class="btn orange">Submit</a></div></div>';
                        document.getElementById('common_popupModel').insertAdjacentHTML('beforeend', ques_block);
                        if (document.getElementById('cancel_ques')) {
                            document.getElementById('cancel_ques').addEventListener('click', function () {
                                document.getElementById('common_popupModel').style.display = 'none';
                                document.getElementById('ask_ques_box').style.display = 'none';
                                document.getElementById('common_overlay').style.display = 'none';
                            });
                        }
                        if (document.getElementById('submit_button')) {
                            document.getElementById('submit_button').addEventListener('click', function (event) {
                                submit_ques_ans(event);
                            });
                        }
                        document.getElementById('common_popupModel').style.display = 'block';
                        document.getElementById('ask_ques_box').style.display = 'block';
                        document.getElementById('common_overlay').style.display = 'block';
                    } else {
                        document.getElementById('common_popupModel').style.display = 'block';
                        document.getElementById('ask_ques_box').style.display = 'block';
                        document.getElementById('common_overlay').style.display = 'block';
                    }
                });
            }
            try {
                $.ajax({
                    type: 'GET',
                    url: base_url + "ajaxCall/get_question_answer",
                    data: { 'product_id': window.pId },
                    success: function success(result) {
                        var result = JSON.parse(result);
                        if (result.data) {
                            var to_show_ques_ans = 5;
                            var li_string = '';
                            var index = 0;
                            var total_ques_ans = 0;
                            for (var i = 0; i < result.data.length; i++) {
                                var is_answer = 0;
                                var ques_str = "";
                                if (index < to_show_ques_ans) {
                                    ques_str = "<li style='display:block'><p class='qa_ques'><span><b>Ques :</b></span> <span><b>" + result.data[i].question + "</b></span></p>";
                                } else {
                                    ques_str = "<li style='display:none'><p class='qa_ques'><span><b>Ques :</b></span> <span><b>" + result.data[i].question + "</b></span></p>";
                                }
                                var ans_str = "";
                                if (result.data[i].answer && result.data[i].answer.length > 0) {
                                    is_answer = 1;
                                    total_ques_ans++;
                                    for (var j = 0; j < result.data[i].answer.length; j++) {
                                        ans_str += "<p class='qa_ans'><span><b>Ans :</b></span>" + "<span>" + result.data[i].answer[j].answer + "</span>" + "</p>";
                                    }
                                }
                                if (is_answer == 1) {
                                    index++;
                                    li_string += ques_str + ans_str + "</li>";
                                }
                            }
                            if (document.getElementById('ques_ans_list')) {
                                document.getElementById('ques_ans_list').innerHTML = li_string;
                                if (index > 0) {
                                    document.getElementById('customer_faques').style.display = 'block';
                                    ques_ans_block = 'visible';
                                } else {
                                    ques_ans_block = 'not visible';
                                }
                                if (typeof _satellite !== 'undefined') {
                                    _satellite.track('ques_ans_block');
                                }
                            }
                            if (total_ques_ans > to_show_ques_ans) {
                                document.getElementById('load_more_qa').style.display = 'block';
                                document.getElementById('load_more_qa').addEventListener('click', function () {
                                    var child = document.getElementById('ques_ans_list').childNodes;
                                    for (var strt = to_show_ques_ans; strt < total_ques_ans; strt++) {
                                        if (child[strt]) {
                                            child[strt].style.display = 'block';
                                        }
                                    }
                                    document.getElementById('load_more_qa').style.display = 'none';
                                });
                            }
                        } else {
                            ques_ans_block = 'not visible';
                            if (typeof _satellite !== 'undefined') {
                                _satellite.track('ques_ans_block');
                            }
                        }
                    }
                });
            } catch (e) {
                console.log(e);
            }
        }
        Question_Answer();
        function sibling_variant() {
            $('.sib').click(function (event) {
                var e = event.currentTarget;
                var var_id = '';
                var sib_id = $(this).attr('id');
                var var_value = '';
                var value2 = event.currentTarget.getAttribute('value');
                var value1 = '';
                var id = '';
                var selid1 = '';
                var selval1 = '';
                var siburl = '';
                $('.sib').each(function (p, q) {
                    if ($(q).hasClass('sib_selected')) {
                        if ($(q).attr('id') !== event.currentTarget.getAttribute('id') && $(q).parents('li').attr('id') !== $(e).parents('li').attr('id')) {
                            value1 = $(q).attr('value');
                            id = $(q).attr('id');
                            selid1 = $(q).parents('li').attr('id');
                            selval1 = $(q).parents('li').attr('scName');
                            siburl += '|' + selid1 + ':' + id;
                        }
                    }
                });
                $('.var').each(function (p, q) {
                    if ($(q).hasClass('selected')) {
                        var_id = $(q).attr('id');
                        var_value = $(q).attr('value');
                    }
                });
                if ($(this).hasClass('sib_disable')) {
                    window.toastMessage(value2 + ' is not available in ' + value1);
                }
                $(this).addClass('sib_selected').siblings().removeClass('sib_selected');
                $('#' + selid1).children().children('p').html(selval1 + ': ' + '<span>' + value1 + '</span>');
                var selval2 = $(this).parents('li').attr('scName');
                var selid2 = $(this).parents('li').attr('id');
                $('#' + selid2).children().children('p').html(selval2 + ': ' + '<span>' + value2 + '</span>');
                var api = "v11/sibling_features";
                var date_ins = new Date();
                var dateStr = date_ins.toGMTString();
                var auth = btoa(api + token + dateStr);
                var url = curl_base_url + 'sibling_features?product_id=' + window.pId + '&getSiblingProduct=1&selectedSfString=' + selid2 + ':' + $(this).attr('id') + siburl;
                $.ajax({
                    type: 'GET',
                    data: { platform: 'D' },
                    headers: { "Authorization": auth, "X-Date": dateStr, "X-Source": "D" },
                    url: url,
                    beforeSend: function beforeSend() {
                        $('#responseLoading').show();
                    },
                    success: function success(resp) {
                        if (resp.data) {
                            if (resp.data.seo_name) {
                                sibling = 'visible';
                                window.location.href = base_url + resp.data.seo_name + '.html?' + 'ref_sib=' + var_id;
                            }
                        }
                        $('#responseLoading').hide();
                    }
                });
            });
        }
        sibling_variant();
        _satellite.track('sibling');
        _satellite.track('price_cut');
        window.pdpBigsale = function (window, document) {

            var PdpBigsale = function PdpBigsale(pid) {
                this.pid = pid;
                this.bigSaleApi();
            };
            PdpBigsale.prototype.bigSaleApi = function () {
                var self = this;
                var id = visitorId.charAt(visitorId.length - 1);
                vid = id % 4;
                $.ajax({
                    type: 'GET',
                    data: { 'pid': this.pid },
                    url: window.base_url + 'ajaxCall/pdpBigsale',
                    success: function success(resp) {
                        resp = resp.trim() !== '' ? JSON.parse(resp.trim()) : '';
                        if (resp.status == 1 && resp !== '') {
                            self.seoPath = resp.main_category_seo_path;
                            self.leafId = resp.main_category_id;
                            var tab = "<div class='tab_panel'><ul>";
                            var obj = resp.filters;
                            var leaf_ids = JSON.parse(fbb_combo_offers);
                            var digimatefbb = JSON.parse(digimate_fbb);
                            for (var key in obj) {
                                if (obj.hasOwnProperty(key)) {
                                    var filterParam = '';
                                    try {
                                        if (key == 3) {
                                            if (leaf_ids.indexOf(self.leafId) != -1) {
                                                tab += "<li id='t_" + key + "' filt='facet_combo[]=Combo&fsrc=facet_combo'><span>Combo Products</span></li>";
                                            } else if (digimatefbb.indexOf(resp.main_category_id) != -1) {
                                                digi_fbb = 1;
                                                tab += "<li id='t_" + key + "' filt=''><span>Digimate Accessories</span></li>";
                                            } else {
                                                tab += "<li id='t_" + key + "' filt='" + obj[key].filter_string + "'><span>" + obj[key].title + "</span></li>";
                                            }
                                        } else {
                                            tab += "<li id='t_" + key + "' filt='" + obj[key].filter_string + "'><span>" + obj[key].title + "</span></li>";
                                        }
                                        //tab+="<li id='t_"+key+"' filt='"+obj[key].filter_string+"'><span>"+obj[key].title+"</span></li>";
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }
                            }
                            tab += "</ul></div>";
                            $('#bigsalebnr').append(tab);
                            $('.tab_panel li').click(function (e) {
                                if ($(e.currentTarget).hasClass('active')) {
                                    return false;
                                    // $(e.currentTarget).removeClass('active');
                                    // $('.hack').hide();
                                } else {
                                    setTimeout(function () {
                                        $('.big_sale_section').removeClass('default_box');
                                    }, 1000);
                                    $('#responseLoading').show();
                                    self.categoryApi(e.currentTarget);
                                }
                            });
                            $('.tab_panel li:eq(' + vid + ')').trigger('click');
                            feature_block_test = vid;
                            _satellite.track('feature_block_test');
                        }
                    },
                    error: function error(jqXHR, textStatus) {
                        if (textStatus === 'timeout' || textStatus === 'error') {
                            $('#responseLoading').hide();
                        }
                    },
                    timeout: 3000
                });
            };

            PdpBigsale.prototype.categoryApi = function (e) {
                var self = this;
                var filter = $(e).attr('filt');
                var id = $(e).attr('id');
                var catid = self.leafId;
                var page_n = 2;
                var p_limit = 11;
                $(e).addClass('active');
                $(e).siblings().removeClass('active');
                if ($("[data-attr='" + id + "']").length > 0) {
                    $('.hack').hide();
                    $('#responseLoading').hide();
                    $("[data-attr='" + id + "']").show();
                } else {
                    if (digi_fbb == 1 && id == "t_3") {
                        catid = '32644';
                        filter = 'facet_brand[]=Digimate&facet_shopclues_surety[]=1&fsrc=facet_brand,facet_shopclues_surety';
                        page_n = 1;
                        p_limit = 30;
                    }
                    $.ajax({
                        type: 'GET',
                        data: { 'catId': catid, 'filters': filter, 'start': 0, 'limit': p_limit, 'fl_cal': 1, 'page_type': 'PDP', 'page': page_n },
                        url: base_url + 'ajaxCall/moreProducts',
                        success: function success(resp) {
                            if (resp.trim() !== '' && resp !== 'null') {
                                try {
                                    resp = JSON.parse(resp.trim());
                                    var product = resp.response.products;
                                    var l = product.length;
                                    var price, discount;
                                    var block = "<div class='row cat_promotion_box hack' data-attr='" + id + "'><div class='tabbing'><div class='tabbing_products'><ul class='regular slider' id='l" + id + "'>";
                                    for (var i = 0; i < l; i++) {
                                        var badgeHTML = '';
                                        var obHTML = '';
                                        var badge = 0;
                                        if (typeof product[i].badges_info !== 'undefined' && product[i].badges_info != null) {
                                            badge = 1;
                                            $.each(product[i].badges_info, function (ind, val) {
                                                if (product[i].badges_info[ind].position == 1) {
                                                    if (product[i].badges_info[ind].image_identifier == "STY") {
                                                        badgeHTML += "<div class='badge surety' badgeId='surety'><i></i></div>";
                                                    } else if (product[i].badges_info[ind].image_identifier == "S_RN") {
                                                        badgeHTML += "<div class='badge surety-renew' badgeId='surety'><i></i></div>";
                                                    }
                                                }
                                                if (product[i].badges_info[ind].position != 1) {
                                                    obHTML += "<div class='multi_tags_pl'>";
                                                    if (product[i].badges_info[ind].image_identifier == "UBX") {
                                                        obHTML += "<div class='unboxed_i'>Unboxed</div>";
                                                    } else if (product[i].badges_info[ind].image_identifier == "RFB") {
                                                        obHTML += "<div class='refurbished_i'>Refurbished</div>";
                                                    }
                                                    if (product[i].badges_info[ind].image_identifier == "E_Y") {
                                                        obHTML += "<div class='exclusive_i'>Exclusive</div>";
                                                    }
                                                    obHTML += "</div>";
                                                }
                                            });
                                        }
                                        if (product[i].third_price !== '' && product[i].third_price > 0) {
                                            price = product[i].third_price;
                                        } else if (product[i].price !== '' && product[i].price > 0) {
                                            price = product[i].price;
                                        } else if (product[i].list_price !== '' && product[i].list_price > 0) {
                                            price = product[i].list_price;
                                        }
                                        if (product[i].list_price !== '' && product[i].list_price > 0 && price !== product[i].list_price) {
                                            discount = Math.round((product[i].list_price - price) / product[i].list_price * 100);
                                        } else {
                                            discount = 0;
                                        }
                                        block += "<li><a target='_blank' href='" + window.base_url + product[i].master_seo_name + ".html?ref=" + id + "'><img src=\"" + product[i].image_url320 + "\" alt=''>";
                                        block += badgeHTML + "<h4>" + product[i].product + "</h4><p>Rs. " + price + "</p>";
                                        if (typeof discount !== 'undefined' && discount > 0) {
                                            block += "<span class='discount_off'>" + discount + "% off</span>";
                                        }
                                        block += obHTML + "</a></li>";
                                    }
                                    if (digi_fbb == 1 && id == "t_3") block += "<li class='view_all'><a href='" + current_base_url + "electronic-accessories.html" + "?" + filter + "&ref=va" + id + "'><img src='//cdn.shopclues.net/images/ui/view_all.png' alt=''></a></li></ul>";else block += "<li class='view_all'><a href='" + window.base_url + self.seoPath + "?" + filter + "&ref=va" + id + "'><img src='//cdn.shopclues.net/images/ui/view_all.png' alt=''></a></li></ul>";
                                    //block+="<li class='vall'><a target='_blank' href='"+window.base_url+self.seoPath+"?"+filter+"&ref=va"+id+"'><img src='http://cdn.shopclues.net/images/ui/view_all.png' alt=''></a></li></ul></div></div></div>";
                                    $('.hack').hide();
                                    $('#responseLoading').hide();
                                    $('.tab_panel').after(block);
                                    $("#l" + id).slick({
                                        dots: false,
                                        infinite: false,
                                        slidesToShow: 5,
                                        slidesToScroll: 3
                                    });
                                } catch (error) {
                                    $('#responseLoading').hide();
                                    console.log(error);
                                }
                                echo(window, document);
                            } else {
                                $('#responseLoading').hide();
                            }
                        },
                        error: function error(jqXHR, textStatus) {
                            if (textStatus === 'timeout' || textStatus === 'error') {
                                $('#responseLoading').hide();
                            }
                        },
                        timeout: 3000
                    });
                }
            };
            if (typeof pId !== 'undefined' && typeof window.enable_buy_now !== 'undefined' && window.enable_buy_now == 1) {
                new PdpBigsale(pId);
            }
        }(window, document);
        window.homesalebooster = function (window, document) {
            function salebooster(visitorId, pid, userId, sourceType) {
                var url = window.base_url + 'ajaxCall/saleBooster';
                var data = { 'visitor_id': visitorId, 'pid': pid };
                if (userId) {
                    data['userId'] = atob(userId);
                }
                if (sourceType) {
                    data['return_promotion'] = 1;
                    data['source_type'] = sourceType;
                }
                if (userSegment) {
                    data['user_segment'] = userSegment;
                }
                $.ajax({
                    type: 'GET',
                    data: data,
                    url: url,
                    success: function success(resp) {
                        resp = resp.trim() !== '' ? JSON.parse(resp.trim()) : '';
                        if (resp.status == 200 && resp !== '') {
                            $.when(saleboosterRespHandle(resp, sourceType)).then(getTotalCB());
                        }
                    },
                    error: function error(jqXHR, textStatus) {}
                });
            }
            function saleboosterRespHandle(resp, sourceType) {
                try {
                    var products = resp.response.products;
                    var render = '';
                    var count = 0;
                    if (products['visitor'].length > 0 && typeof products['visitor'][0]['discount_value'] !== 'undefined' && typeof products['visitor'][0]['percentage_discount_by_value'] !== 'undefined') {
                        if (localStorage.getItem('discount_instruction') === null) {
                            $('.t_overlay').show();
                            localStorage.setItem('discount_instruction', 1);
                        }
                        if (typeof _satellite !== 'undefined') {
                            window.SBoffer = products['visitor'][0]['discount_type'];
                            _satellite.track('SBoffer');
                        }
                        var price = parseInt($('.f_price').attr('data-attr'));
                        price = Math.round(price - parseInt(products['visitor'][0]['discount_value'])).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        var discount_percent = isNaN(parseInt($('.discount').attr('data-attr'))) ? 0 : parseInt($('.discount').attr('data-attr'));
                        discount_percent = Math.round(100 - (100 - discount_percent) * (100 - parseInt(products['visitor'][0]['percentage_discount_by_value'])) / 100);
                        $('.f_price').html('Rs.' + price);
                        $('.f_price').attr('data-attr', price);
                        if ($('.discount').length > 0) {
                            $('.discount').text(discount_percent + '% off');
                        } else {
                            var render_discount = "<span class='discount'>" + discount_percent + "% off</span>";
                            $('.price').append(render_discount);
                        }
                        $('.discount').attr('data-attr', discount_percent);
                        render += "<span class='seller_discount'><span>Ã¢â€šÂ¹" + products['visitor'][0]['discount_value'] + " extra discount applied for you.</span></span><span class='exp_date'> (Till " + products['visitor'][0]['valid_till'] + " )</span>";
                        $('.ext_discount').append(render);
                    } else if ((window.location.href.indexOf('utm_source=Criteo') !== -1 || helperFunctions.ReadCookie('source_1d') === 'Criteo' || window.location.href.indexOf('utm_source=facebook') !== -1 || helperFunctions.ReadCookie('source_1d') === 'facebook' || SC.getParameterByName('SB_tracking') !== '') && typeof sourceType === 'undefined') {
                        var sourceType = SC.getParameterByName('utm_source') || '';
                        salebooster(visitorId, window.pId, userId, sourceType);
                    }
                } catch (error) {
                    console.log(error);
                }
            };
            var userId = helperFunctions.ReadCookie("user_id") || helperFunctions.ReadCookie("scumd");
            var userSegment = helperFunctions.ReadCookie("user_segment");
            if (sessionStorage.getItem('promotion_available') !== null) {
                var promotion_available = sessionStorage.getItem('promotion_available');
            } else {
                var promotion_available = 1;
            }
            if (sessionStorage.getItem('userLogIn') == 0 && userId !== '') {
                promotion_available = 1;
            }
            if (userSegment !== '') {
                promotion_available = 1;
            }
            if (visitorId !== '' && visitorId !== null && (window.salesboosterPDP == 1 || userSegment !== '' && userId !== '') && typeof window.pId !== 'undefined' && saleboosterOnoff == 1) {
                if (promotion_available == 1) {
                    salebooster(visitorId, window.pId, userId);
                } else if (window.location.href.indexOf('utm_source=Criteo') !== -1 || helperFunctions.ReadCookie('source_1d') === 'Criteo' || window.location.href.indexOf('utm_source=facebook') !== -1 || helperFunctions.ReadCookie('source_1d') === 'facebook' || SC.getParameterByName('SB_tracking') !== '') {
                    var sourceType = SC.getParameterByName('utm_source') || '';
                    salebooster(visitorId, window.pId, userId, sourceType);
                }
            } else {
                getTotalCB();
            }
        }(window, document);

        /***/ }),
    /* 7 */,
    /* 8 */,
    /* 9 */,
    /* 10 */
    /***/ (function(module, exports, __webpack_require__) {

        "use strict";


        var commonjs = __webpack_require__(1);
        window.recentlyViewedAll = commonjs.recentlyViewedAll;
        window.recentlyViewed = commonjs.recentlyViewed;
        window.recentMFCViewed = commonjs.recentMFCViewed;
        var product_detailjs = __webpack_require__(6);
        window.mouseoverNavigation = commonjs.mouseoverNavigation;
        window.trackingData = commonjs.trackingData;
        window.autoComplete = commonjs.autoComplete;
        window.loginPopup = commonjs.loginPopup;
        window.getLoginStatus = commonjs.getLoginStatus;
        window.pincodePopup = commonjs.pincodePopup;
        window.isNumberKey = commonjs.isNumberKey;
        window.searchTrigger = commonjs.searchTrigger;
        window.atom_cart_load_data = commonjs.atom_cart_load_data;

        /***/ })
    /******/ ]); 