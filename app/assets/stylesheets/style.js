import React, {StyleSheet, Dimensions} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "background": "#f7f7f7",
        "color": "#888"
    },
    "a": {
        "color": "#5FB000",
        "outline": 0,
        "WebkitTransition": "all 0.25s ease-out 0s",
        "MozTransition": "all 0.25s ease-out 0s",
        "MsTransition": "all 0.25s ease-out 0s",
        "OTransition": "all 0.25s ease-out 0s",
        "transition": "all 0.25s ease-out 0s"
    },
    "a:hover": {
        "color": "#7DC328",
        "textDecoration": "none",
        "outline": 0
    },
    "h1": {
        "fontSize": 30,
        "fontWeight": 200,
        "lineHeight": 36,
        "textTransform": "uppercase",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "color": "#363636"
    },
    "h2": {
        "fontSize": 24,
        "fontWeight": 200,
        "lineHeight": 28,
        "textTransform": "uppercase",
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "color": "#363636"
    },
    "h3": {
        "fontSize": 18,
        "fontWeight": 200,
        "lineHeight": 22,
        "textTransform": "uppercase",
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "color": "#363636"
    },
    "h4": {
        "fontSize": 16,
        "fontWeight": 200,
        "lineHeight": 20,
        "textTransform": "uppercase",
        "color": "#363636",
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "h5": {
        "fontSize": 14,
        "fontWeight": 200,
        "lineHeight": 18,
        "textTransform": "uppercase",
        "color": "#363636",
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "h6": {
        "color": "#363636",
        "fontSize": 12,
        "lineHeight": 18,
        "textTransform": "uppercase",
        "fontWeight": 200,
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "iframe": {
        "border": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "green": {
        "color": "#5FB000"
    },
    "padding10": {
        "WebkitBoxSizing": "border-box",
        "KhtmlBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "MsBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "padding20": {
        "WebkitBoxSizing": "border-box",
        "KhtmlBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "MsBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "padding30": {
        "WebkitBoxSizing": "border-box",
        "KhtmlBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "MsBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30
    },
    "padding010": {
        "WebkitBoxSizing": "border-box",
        "KhtmlBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "MsBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "padding020": {
        "WebkitBoxSizing": "border-box",
        "KhtmlBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "MsBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20
    },
    "padding030": {
        "WebkitBoxSizing": "border-box",
        "KhtmlBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "MsBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 30,
        "paddingBottom": 0,
        "paddingLeft": 30
    },
    "padding100": {
        "WebkitBoxSizing": "border-box",
        "KhtmlBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "MsBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0
    },
    "padding200": {
        "WebkitBoxSizing": "border-box",
        "KhtmlBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "MsBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0
    },
    "padding300": {
        "WebkitBoxSizing": "border-box",
        "KhtmlBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "MsBoxSizing": "border-box",
        "boxSizing": "border-box",
        "paddingTop": 30,
        "paddingRight": 0,
        "paddingBottom": 30,
        "paddingLeft": 0
    },
    "margin0": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "margin10": {
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10
    },
    "margin20": {
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20
    },
    "margin30": {
        "marginTop": 30,
        "marginRight": 30,
        "marginBottom": 30,
        "marginLeft": 30
    },
    "margin100": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "margin200": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "margin300": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "page-title": {
        "fontSize": 18,
        "fontWeight": 200,
        "lineHeight": 22,
        "textTransform": "uppercase",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "color": "#363636"
    },
    "post-title": {
        "fontSize": 18,
        "fontWeight": 200,
        "lineHeight": 22,
        "textTransform": "uppercase",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "color": "#363636"
    },
    "secion-title": {
        "fontSize": 18,
        "fontWeight": 200,
        "lineHeight": 22,
        "textTransform": "uppercase",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "color": "#363636"
    },
    "info-head": {
        "fontSize": 18,
        "fontWeight": 200,
        "lineHeight": 22,
        "textTransform": "uppercase",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "color": "#363636"
    },
    "widget-title": {
        "fontSize": 18,
        "fontWeight": 200,
        "lineHeight": 22,
        "textTransform": "uppercase",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "color": "#363636"
    },
    "serif": {
        "fontFamily": "Georgia, serif"
    },
    "italic": {
        "fontStyle": "italic",
        "fontWeight": "normal"
    },
    "header": {
        "background": "#fff",
        "textTransform": "uppercase",
        "font": "bold 13/20 Arial, Helvetica, Geneva, sans-serif",
        "textShadow": "none"
    },
    "logo-container": {
        "paddingTop": 25,
        "paddingRight": 0,
        "paddingBottom": 22,
        "paddingLeft": 0
    },
    "abrand": {
        "fontFamily": "Arial",
        "fontSize": 24,
        "fontWeight": "bold",
        "color": "#363636"
    },
    "tag-line": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 20,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "borderLeft": "1 solid #333",
        "fontWeight": "normal",
        "position": "relative",
        "top": -4
    },
    "navbar-inverse navbar-inner": {
        "background": "#353535",
        "border": "none"
    },
    "navbar-fixed-top navbar-inner": {
        "boxShadow": "none"
    },
    "navbar-static-top navbar-inner": {
        "boxShadow": "none"
    },
    "navbar nav > li > a": {
        "borderRight": "1 solid #000",
        "textShadow": "none",
        "color": "#eee"
    },
    "navbar nav > li > a:hover": {
        "background": "#777"
    },
    "navbar nav > active > a": {
        "background": "#fff",
        "color": "#333",
        "boxShadow": "none"
    },
    "navbar-inverse nav > lidropdownactive > adropdown-toggle": {
        "background": "#fff",
        "color": "#333",
        "boxShadow": "none"
    },
    "navbar-inverse nav > lidropdownactiveopen > adropdown-toggle": {
        "background": "#fff",
        "color": "#333",
        "boxShadow": "none"
    },
    "navbar-inverse nav lidropdownopen > dropdown-toggle": {
        "background": "#fff",
        "color": "#333",
        "boxShadow": "none"
    },
    "navbar-inverse nav active > a:hover": {
        "background": "#fff",
        "color": "#333",
        "boxShadow": "none"
    },
    "navbar-inverse nav active > a:focus": {
        "background": "#fff",
        "color": "#333",
        "boxShadow": "none"
    },
    "dropdown-menu": {
        "border": "none",
        "borderRadius": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "WebkitBoxShadow": "0 2 4 rgba(0, 0, 0, 0.1)",
        "MsBoxShadow": "0 2 4 rgba(0, 0, 0, 0.1)",
        "boxShadow": "0 2 4 rgba(0, 0, 0, 0.1)",
        "MozAnimation": "fadein 0.5s",
        "WebkitAnimation": "fadein 0.5s",
        "OAnimation": "fadein 0.5s"
    },
    "dropdown-menu > li > a": {
        "borderBottom": "1 solid #EFEFEF",
        "paddingTop": 7,
        "paddingRight": 15,
        "paddingBottom": 7,
        "paddingLeft": 15,
        "fontWeight": "bold"
    },
    "dropdown-menu li > a:hover": {
        "background": "#f5f5f5 !important",
        "filter": "none",
        "color": "#333"
    },
    "dropdown-menu li > a:focus": {
        "background": "#f5f5f5 !important",
        "filter": "none",
        "color": "#333"
    },
    "dropdown-submenu:hover > a": {
        "background": "#f5f5f5 !important",
        "filter": "none",
        "color": "#333"
    },
    "navbar nav > li > dropdown-menu:after": {
        "display": "none"
    },
    "navbar nav > li > dropdown-menu:before": {
        "display": "none"
    },
    "phone-number": {
        "fontSize": 18,
        "fontWeight": "normal",
        "textTransform": "none"
    },
    "head-title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 10,
        "paddingRight": 60,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "position": "relative",
        "top": 90,
        "left": 30,
        "fontSize": 48,
        "lineHeight": 44,
        "fontWeight": "bold",
        "textTransform": "none",
        "MozAnimation": "fadein 3s",
        "WebkitAnimation": "fadein 3s",
        "OAnimation": "fadein 3s"
    },
    "head-message": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 10,
        "paddingRight": 60,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "position": "relative",
        "top": 90,
        "left": 30,
        "color": "#333",
        "fontSize": 18,
        "MozAnimation": "fadein 3s",
        "WebkitAnimation": "fadein 3s",
        "OAnimation": "fadein 3s"
    },
    "header-cta": {
        "position": "relative",
        "top": 90,
        "left": 10,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 30,
        "MozAnimation": "fadein 3s",
        "WebkitAnimation": "fadein 3s",
        "OAnimation": "fadein 3s"
    },
    "page-content": {
        "marginTop": 30
    },
    "box-container": {
        "background": "#fff",
        "position": "relative",
        "marginBottom": 30,
        "borderBottom": "2 solid #EAEAEA"
    },
    "prop-info prop-title": {
        "fontSize": 18,
        "fontWeight": 200,
        "lineHeight": 22,
        "textTransform": "uppercase",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "prop-info": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "MsBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "prop-infospan4": {
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 0
    },
    "prop-tag": {
        "background": "none repeat scroll 0 0 #252525",
        "color": "#FFFFFF",
        "left": 0,
        "paddingTop": 7,
        "paddingRight": 10,
        "paddingBottom": 7,
        "paddingLeft": 10,
        "position": "absolute",
        "top": 0
    },
    "more-info": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "listStyle": "none"
    },
    "more-info > li": {
        "borderBottom": "1 dashed #E9E9E9",
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0
    },
    "more-info info-label": {
        "fontWeight": "bold",
        "color": "#363636"
    },
    "more-info qty": {
        "fontWeight": "normal"
    },
    "aoverlay": {
        "position": "relative",
        "display": "block"
    },
    "more": {
        "WebkitOpacity": 0,
        "MozOpacity": 0,
        "opacity": 0,
        "filter": "alpha(opacity=0)",
        "WebkitTransition": "all 0.25s ease-out 0s",
        "MozTransition": "all 0.25s ease-out 0s",
        "MsTransition": "all 0.25s ease-out 0s",
        "OTransition": "all 0.25s ease-out 0s",
        "transition": "all 0.25s ease-out 0s",
        "display": "block",
        "width": "100%",
        "height": "100%",
        "position": "absolute",
        "background": "#fff url('../images/more-icon.png') no-repeat center center"
    },
    "aoverlay:hover more": {
        "WebkitOpacity": 0.5,
        "MozOpacity": 0.5,
        "opacity": 0.5,
        "filter": "alpha(opacity=50)"
    },
    "home-search-container": {
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0,
        "minHeight": 340,
        "background": "url('http://placehold.it/1920x600') no-repeat center center"
    },
    "​home-search-container row": {
        "position": "relative"
    },
    "home-search-container widget": {
        "marginBottom": 0
    },
    "head-container": {
        "background": "rgba(255,255,255,0.85)",
        "border": "1 solid #fff"
    },
    "head-container search-form": {
        "background": "none",
        "border": "none"
    },
    "search-form-wrapper": {
        "position": "absolute",
        "right": 0,
        "top": -620,
        "zIndex": 9999
    },
    "search-form": {
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 10,
        "paddingLeft": 30,
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "MsBoxSizing": "border-box",
        "boxSizing": "border-box",
        "background": "rgba(255,255,255,0.85)",
        "border": "1 solid #fff"
    },
    "search-form > p": {
        "fontSize": 18,
        "fontWeight": 200,
        "lineHeight": 22,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "textTransform": "uppercase",
        "color": "#363636"
    },
    "select": {
        "marginBottom": 15,
        "marginLeft": "0 !important",
        "minHeight": "auto !important"
    },
    "realto-carousel": {
        "position": "relative"
    },
    "latest-properties": {
        "marginTop": 30
    },
    "carousel-control": {
        "zIndex": 999,
        "background": "#363636",
        "borderRadius": 0,
        "fontSize": 20,
        "lineHeight": 20,
        "border": "none",
        "height": 23,
        "width": 23,
        "top": -20,
        "position": "relative",
        "color": "#fff !important",
        "cursor": "pointer"
    },
    "leftcarousel-control": {
        "left": "auto",
        "marginTop": -20,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 5
    },
    "rightcarousel-control": {
        "right": 0
    },
    "view-all-carousel": {
        "left": -10,
        "position": "relative",
        "top": -35
    },
    "info-box": {
        "marginBottom": 30
    },
    "info-box icons": {
        "fontSize": 40,
        "color": "#d2d2d2",
        "marginLeft": 30,
        "marginBottom": 30
    },
    "info-box icons i": {
        "textShadow": "0 -1 0 rgba(255,255,255,1)"
    },
    "adv-message": {
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30,
        "fontSize": 18,
        "lineHeight": 22
    },
    "adv-message p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "adv-message plower-line": {
        "fontSize": 14
    },
    "adv-message pupper-line": {
        "color": "#363636"
    },
    "adv-message btn-realto": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "home-agents": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0
    },
    "home-agents p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "home-agents img": {
        "marginBottom": 10
    },
    "agent-boxwidget h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 30
    },
    "agent-boxwidget ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 30
    },
    "agent-box ul": {
        "listStyle": "none"
    },
    "agent-content": {
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 0
    },
    "agent-content h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "agent-content ul": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "home-blog-articles ul": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "home-blog-articles ul li a": {
        "color": "#888"
    },
    "home-blog-articles ul li a:hover": {
        "color": "#7DC328",
        "textDecoration": "none"
    },
    "ulmedia-list limedia divcomment-holder": {
        "borderBottom": "1 dashed #CDCDCD",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": "!important",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0
    },
    "comment-date": {
        "color": "#959595"
    },
    "comments media pull-left": {
        "marginTop": 10
    },
    "comment-form": {
        "marginBottom": 30
    },
    "comment-avatar": {
        "width": 90,
        "height": 90
    },
    "widget ul li": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 20
    },
    "widget ul li iicon-caret-right": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": -20
    },
    "btn-realto": {
        "background": "#5FB000",
        "color": "#fff",
        "textShadow": "0 -1 0 rgba(0, 0, 0, 0.25)",
        "border": "1 solid #559B00",
        "borderRadius": 4,
        "marginBottom": 10
    },
    "btn-realto-form": {
        "background": "#5FB000",
        "color": "#fff",
        "textShadow": "0 -1 0 rgba(0, 0, 0, 0.25)",
        "border": "1 solid #559B00",
        "borderRadius": 4,
        "paddingTop": 8,
        "paddingRight": 0,
        "paddingBottom": 8,
        "paddingLeft": 0,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "btn-realto:hover": {
        "background": "#7DC328",
        "color": "#fff"
    },
    "btn-realto-form:hover": {
        "background": "#7DC328",
        "color": "#fff"
    },
    "widget": {
        "marginBottom": 30
    },
    "widget ul": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "listStyle": "none"
    },
    "nav-tabs > li": {
        "paddingTop": 0,
        "paddingRight": "!important",
        "paddingBottom": 0,
        "paddingLeft": "!important"
    },
    "tab-pane li": {
        "paddingTop": 0,
        "paddingRight": "!important",
        "paddingBottom": 0,
        "paddingLeft": "!important"
    },
    "nav-tabs > li > a": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "fontSize": 14,
        "fontWeight": 200,
        "textTransform": "uppercase",
        "color": "#363636",
        "border": "none"
    },
    "nav-tabs > active > a": {
        "border": "none",
        "borderRadius": 0
    },
    "nav-tabs > active > a:hover": {
        "border": "none",
        "borderRadius": 0
    },
    "nav-tabs": {
        "border": "none",
        "borderRadius": 0,
        "background": "#f3f3f3"
    },
    "tab-pane": {
        "paddingTop": 10,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30
    },
    "tab-pane comment": {
        "marginBottom": 20
    },
    "footer": {
        "background": "#3a3a3a",
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 30,
        "paddingLeft": 0,
        "color": "#aaa"
    },
    "footer a": {
        "color": "#aaa"
    },
    "footer-widget": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "footer-widget ul": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "footer-widget ul liclearfix i": {
        "marginTop": 5,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "footer-widget h2": {
        "fontSize": 28,
        "fontWeight": "bold",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "color": "#fff"
    },
    "footer-widget h3": {
        "color": "#fff",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0,
        "borderBottom": "1 solid #5a5a5a"
    },
    "footer-tag-line": {
        "fontSize": 12,
        "textTransform": "uppercase",
        "color": "#fff"
    },
    "flickr-widget li": {
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "adv-custom-pager": {
        "position": "relative",
        "marginTop": -21,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 30,
        "zIndex": 9999
    },
    "adv-custom-pager a": {
        "width": 40,
        "height": 40,
        "border": "2 solid #fff",
        "overflow": "hidden",
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "adv-custom-pager a img": {
        "height": 40,
        "width": "auto"
    },
    "prop-price": {
        "fontSize": 22
    },
    "prop-title": {
        "fontSize": 22
    },
    "map iframe": {
        "height": 312,
        "width": "100%"
    },
    "agent-avatar": {
        "width": 70,
        "height": "auto"
    },
    "h2post-title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0
    },
    "meta": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "author": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 25,
        "marginLeft": 0
    },
    "read-more": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "blog-2 post-content": {
        "paddingTop": 15,
        "paddingRight": 20,
        "paddingBottom": 15,
        "paddingLeft": 0
    },
    "blog-3 post-content": {
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 20
    },
    "accordion-toggle": {
        "fontSize": 14,
        "fontWeight": 200,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "textTransform": "uppercase"
    },
    "accordion-group": {
        "border": "none",
        "borderBottom": "1 solid #eee"
    }
});