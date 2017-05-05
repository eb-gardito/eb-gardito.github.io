!function(){
  var a=window.location.href.match(/orderconfirmation\/(\d+)?\//),b=null;
  a&&a.length>1&&(b=a[1]);
  var c={
    MICHAEL_DAY:"32865180640",
    DALLAS_COWBOYS_DRAFT_DAY_5K:"27036666397",
    SEATTLE_BACON_AND_BEER_CLASSIC_APR_29_2017:"29594610276",
    DRUNK_IN_LOVE_BAR_CRAWL_BALTIMORE:"32596502015",
    BAR_CRAWL_90S_BATON_ROUGE:"32866017142",
    BAR_CRAWL_90S_CLEVELAND:"32867009109",
    LPR_PRESENTS_MEYHEM_LAUREN_UNIIQU3:"32966427472",
    INDIANAPOLIS_BACON_AND_BEER_CLASSIC_MAY_20_2017:"31542998959",
    BEE_FIT_POPUP_FITNESS_FESTIVAL:"31737195807",
    PHILADELPHIA_BACON_AND_BEER_CLASSIC_JUNE_10_2017:"31942597168",
    BAR_CRAWL_90S_PORTLAND:"32864080349",
    BAR_CRAWL_90S_BOSTON:"32866019148",
    BAR_CRAWL_80S_WASHINGTON_DC:"33246202286",
    BAR_CRAWL_90S_GRAND_RAPIDS:"33232238520",
    RUTH_B:"33262832026",
    GORGUTS:"32967205800",
    BRICK_FEST_LIVE_LEGO_FAN_EXPERIENCE_WEST_PALM_BEACH_FL:"31103272726",
    BRICK_FEST_LIVE_LEGO_FAN_EXPERIENCE_CHARLOTTE_NC:"31103483356",
    OC_BEER_FEST_2017:"32197790458",
    BAR_CRAWL_90S_BUFFALO:"33232074028",
    BAR_CRAWL_90S_PROVIDENCE:"33650101359",
    BAR_CRAWL_90S_ALBANY:"33649854621",
    UNCORKED_DERBY_DAYS:"32505051484",
    SAN_DIEGO_OYSTERFEST_2017:"33599225187",
    SAN_FRANCISCO_OYSTERFEST_MUSIC_FESTIVAL_18TH:"31307421340",
    UNCLE_SAM_5K:"31495455756",
    CROWN_CITY_CLASSIC:"31762834493",
    ASD:"32217224586"
  },
  d=[
    c.MICHAEL_DAY,c.DALLAS_COWBOYS_DRAFT_DAY_5K,
    c.SEATTLE_BACON_AND_BEER_CLASSIC_APR_29_2017,
    c.DRUNK_IN_LOVE_BAR_CRAWL_BALTIMORE,
    c.BAR_CRAWL_90S_BATON_ROUGE,
    c.BAR_CRAWL_90S_CLEVELAND,
    c.LPR_PRESENTS_MEYHEM_LAUREN_UNIIQU3,
    c.INDIANAPOLIS_BACON_AND_BEER_CLASSIC_MAY_20_2017,
    c.BEE_FIT_POPUP_FITNESS_FESTIVAL,
    c.PHILADELPHIA_BACON_AND_BEER_CLASSIC_JUNE_10_2017,
    c.BAR_CRAWL_90S_PORTLAND,
    c.BAR_CRAWL_90S_BOSTON,
    c.BAR_CRAWL_80S_WASHINGTON_DC,
    c.BAR_CRAWL_90S_GRAND_RAPIDS,
    c.RUTH_B,
    c.GORGUTS,
    c.BRICK_FEST_LIVE_LEGO_FAN_EXPERIENCE_WEST_PALM_BEACH_FL,
    c.BRICK_FEST_LIVE_LEGO_FAN_EXPERIENCE_CHARLOTTE_NC,
    c.OC_BEER_FEST_2017,
    c.BAR_CRAWL_90S_BUFFALO,
    c.BAR_CRAWL_90S_PROVIDENCE,
    c.BAR_CRAWL_90S_ALBANY,
    c.UNCORKED_DERBY_DAYS,
    c.SAN_DIEGO_OYSTERFEST_2017,
    c.SAN_FRANCISCO_OYSTERFEST_MUSIC_FESTIVAL_18TH,
    c.UNCLE_SAM_5K,
    c.CROWN_CITY_CLASSIC,c.ASD
  ],
  e=function(){
    var a=".mfp-wrap,.mfp-bg,.confirmation-description > .text-heading-secondary.l-mar-top-3,#social_icons {";a+="display: none !important;",a+="}";
    var b=document.getElementsByTagName("head")[0],c=document.createElement("style");
    c.setAttribute("type","text/css"),c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a)),b.appendChild(c)
  },
  f=function(){
    var a={USER_EMAIL:".confirmation-items .ico-checkmark+strong",NET_PURCHASE_AMOUNT:"span[data-automation='order-confirmation-ticket-quantity']"},
    b={},
    c=document.querySelectorAll(a.USER_EMAIL);
    c.length&&(b.user_email={property:"sl:user_email",content:c[0].innerHTML});
    d=document.querySelectorAll(a.NET_PURCHASE_AMOUNT);
    if(d.length){
      var e=d[0].innerHTML.match(/\$[\d\.,]+/),f="0";
      e&&(f=e[0].replace("$","").replace(".","").replace(",","")),
      b.transaction_net={property:"sl:transaction_net",content:f},
      b.transaction_gross={property:"sl:transaction_gross",content:f}
    }
    var g=window.location.href.match(/\/\d+\/(\d+)\//);
    return g&&g.length>1&&(
      b.order_id={property:"sl:transaction_orderid",content:g[1]}
    ),
      b.currency={property:"sl:currency",content:"USD"},b},
  g=function(a){
    var b=function(a){
      if(a.property&&a.content){
        var b=document.createElement("meta");
        b.setAttribute("property",a.property),
        b.setAttribute("content",a.content),
        document.getElementsByTagName("head")[0].appendChild(b)
      }
    };
    for(var c in a)b(a[c])
  },
  h=function(){
    var a=document.createElement("script");
    a.async=!0,a.src="https://static.sociablelabs.net/prod/sociable-tag.js",
    a.id="sociablejs",
    a.setAttribute("data-sl-token","10124312"),
    document.getElementsByTagName("head")[0].appendChild(a)
  };
  if(
    d.indexOf(b)>-1||
    document.cookie.indexOf("sl_hidden_mode=true")>-1||
    window.location.href.indexOf("enable_sl_hidden_mode=true")>-1||
    document.cookie.indexOf("sl_eb_enabled=1")>-1||
    window.location.href.indexOf("sl_eb_enabled=1")>-1
  ){
    e();
    g(f()),
    h()
  }
}();
