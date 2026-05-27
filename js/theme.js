window.performance && window.performance.mark && window.performance.mark('shopify.content_for_header.start');

var Shopify = Shopify || {};
Shopify.shop = "ia2je0-1q.myshopify.com";
Shopify.locale = "en";
Shopify.currency = {"active":"USD","rate":"1.0"};
Shopify.country = "US";
Shopify.theme = {"name":"Yuri\/main","id":194666659921,"schema_name":"Elixir","schema_version":"1.3.0","theme_store_id":null,"role":"main"};
Shopify.theme.handle = "null";
Shopify.theme.style = {"id":null,"handle":null};
Shopify.cdnHost = "officialyuri.com/cdn";
Shopify.routes = Shopify.routes || {};
Shopify.routes.root = "/";
Shopify.shopJsCdnBaseUrl = "https://cdn.shopify.com/shopifycloud/shop-js";
Shopify.SignInWithShop = Shopify.SignInWithShop || {};
Shopify.SignInWithShop.User = Shopify.SignInWithShop.User || {};
Shopify.SignInWithShop.User.recognized = false;

!function(o){function n(){var o=[];function n(){o.push(Array.prototype.slice.apply(arguments))}return n.q=o,n}var t=o.Shopify=o.Shopify||{};t.loadFeatures=n(),t.autoloadFeatures=n()}(window);

window.ShopifyPay = window.ShopifyPay || {};
  window.ShopifyPay.apiHost = "shop.app\/pay";
  window.ShopifyPay.redirectState = null;

window.Shopify = window.Shopify || {};
  window.Shopify.SignInWithShop = window.Shopify.SignInWithShop || {};
  window.Shopify.SignInWithShop.eligible = true;

window.Shopify = window.Shopify || {};
  if (!window.Shopify.featureAssets) window.Shopify.featureAssets = {};
  window.Shopify.featureAssets['shop-js'] = {"shop-toast-manager":["modules/v2/loader.shop-toast-manager.en.esm.js"],"listener":["modules/v2/loader.listener.en.esm.js"],"shop-button":["modules/v2/loader.shop-button.en.esm.js"],"init-shop-user-recognition":["modules/v2/loader.init-shop-user-recognition.en.esm.js"],"init-shop-email-lookup-coordinator":["modules/v2/loader.init-shop-email-lookup-coordinator.en.esm.js"],"init-fed-cm":["modules/v2/loader.init-fed-cm.en.esm.js"],"checkout-modal":["modules/v2/loader.checkout-modal.en.esm.js"],"avatar":["modules/v2/loader.avatar.en.esm.js"],"init-shop-cart-sync":["modules/v2/loader.init-shop-cart-sync.en.esm.js"],"init-windoid":["modules/v2/loader.init-windoid.en.esm.js"],"shop-cash-offers":["modules/v2/loader.shop-cash-offers.en.esm.js"],"init-customer-accounts-sign-up":["modules/v2/loader.init-customer-accounts-sign-up.en.esm.js"],"init-shop-for-new-customer-accounts":["modules/v2/loader.init-shop-for-new-customer-accounts.en.esm.js"],"shop-user-recognition":["modules/v2/loader.shop-user-recognition.en.esm.js"],"shop-login":["modules/v2/loader.shop-login.en.esm.js"],"shop-login-button":["modules/v2/loader.shop-login-button.en.esm.js"],"shop-cart-sync":["modules/v2/loader.shop-cart-sync.en.esm.js"],"init-customer-accounts":["modules/v2/loader.init-customer-accounts.en.esm.js"],"pay-button":["modules/v2/loader.pay-button.en.esm.js"],"shop-follow-button":["modules/v2/loader.shop-follow-button.en.esm.js"],"lead-capture":["modules/v2/loader.lead-capture.en.esm.js"],"payment-terms":["modules/v2/loader.payment-terms.en.esm.js"]};

(function() {
  var isLoaded = false;
  function asyncLoad() {
    if (isLoaded) return;
    isLoaded = true;
    var urls = ["https:\/\/cdn-app.sealsubscriptions.com\/shopify\/public\/js\/sealsubscriptions.js?shop=ia2je0-1q.myshopify.com","\/\/cdn.shopify.com\/proxy\/fffc45f6e0f19e2c5d4d39c357bffbe65a11db2a4d57f11c09a261adc060040a\/pixel.wetracked.io\/ia2je0-1q.myshopify.com\/events.js?shop=ia2je0-1q.myshopify.com\u0026sp-cache-control=cHVibGljLCBtYXgtYWdlPTkwMA"];
    for (var i = 0; i < urls.length; i++) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = urls[i];
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
  };
  if(window.attachEvent) {
    window.attachEvent('onload', asyncLoad);
  } else {
    window.addEventListener('load', asyncLoad, false);
  }
})();

var __st={"a":97525497937,"offset":-14400,"reqid":"8b7dd214-1773-4779-9628-ad28c93828e3-1779801899","pageurl":"officialyuri.com\/products\/collagen-night-wrapping-mask","u":"c6cae3a1c2f1","p":"product","rtyp":"product","rid":15590201819217};

window.ShopifyPaypalV4VisibilityTracking = true;

!function(){'use strict';const t='contact',e='account',n='new_comment',o=[[t,t],['blogs',n],['comments',n],[t,'customer']],c=[[e,'customer_login'],[e,'guest_login'],[e,'recover_customer_password'],[e,'create_customer']],r=t=>t.map((([t,e])=>`form[action*='/${t}']:not([data-nocaptcha='true']) input[name='form_type'][value='${e}']`)).join(','),a=t=>()=>t?[...document.querySelectorAll(t)].map((t=>t.form)):[];function s(){const t=[...o],e=r(t);return a(e)}const i='password',u='form_key',d=['recaptcha-v3-token','g-recaptcha-response','h-captcha-response',i],f=()=>{try{return window.sessionStorage}catch{return}},m='__shopify_v',_=t=>t.elements[u];function p(t,e,n=!1){try{const o=window.sessionStorage,c=JSON.parse(o.getItem(e)),{data:r}=function(t){const{data:e,action:n}=t;return t[m]||n?{data:e,action:n}:{data:t,action:n}}(c);for(const[e,n]of Object.entries(r))t.elements[e]&&(t.elements[e].value=n);n&&o.removeItem(e)}catch(o){console.error('form repopulation failed',{error:o})}}const l='form_type',E='cptcha';function T(t){t.dataset[E]=!0}const w=window,h=w.document,L='Shopify',v='ce_forms',y='captcha';let A=!1;((t,e)=>{const n=(g='f06e6c50-85a8-45c8-87d0-21a2b65856fe',I='https://cdn.shopify.com/shopifycloud/storefront-forms-hcaptcha/ce_storefront_forms_captcha_hcaptcha.v1.5.2.iife.js',D={infoText:'Protected by hCaptcha',privacyText:'Privacy',termsText:'Terms'},(t,e,n)=>{const o=w[L][v],c=o.bindForm;if(c)return c(t,g,e,D).then(n);var r;o.q.push([[t,g,e,D],n]),r=I,A||(h.body.append(Object.assign(h.createElement('script'),{id:'captcha-provider',async:!0,src:r})),A=!0)});var g,I,D;w[L]=w[L]||{},w[L][v]=w[L][v]||{},w[L][v].q=[],w[L][y]=w[L][y]||{},w[L][y].protect=function(t,e){n(t,void 0,e),T(t)},Object.freeze(w[L][y]),function(t,e,n,w,h,L){const[v,y,A,g]=function(t,e,n){const i=e?o:[],u=t?c:[],d=[...i,...u],f=r(d),m=r(i),_=r(d.filter((([t,e])=>n.includes(e))));return[a(f),a(m),a(_),s()]}(w,h,L),I=t=>{const e=t.target;return e instanceof HTMLFormElement?e:e&&e.form},D=t=>v().includes(t);t.addEventListener('submit',(t=>{const e=I(t);if(!e)return;const n=D(e)&&!e.dataset.hcaptchaBound&&!e.dataset.recaptchaBound,o=_(e),c=g().includes(e)&&(!o||!o.value);(n||c)&&t.preventDefault(),c&&!n&&(function(t){try{if(!f())return;!function(t){const e=f();if(!e)return;const n=_(t);if(!n)return;const o=n.value;o&&e.removeItem(o)}(t);const e=Array.from(Array(32),(()=>Math.random().toString(36)[2])).join('');!function(t,e){_(t)||t.append(Object.assign(document.createElement('input'),{type:'hidden',name:u})),t.elements[u].value=e}(t,e),function(t,e){const n=f();if(!n)return;const o=[...t.querySelectorAll(`input[type='${i}']`)].map((({name:t})=>t)),c=[...d,...o],r={};for(const[a,s]of new FormData(t).entries())c.includes(a)||(r[a]=s);n.setItem(e,JSON.stringify({[m]:1,action:t.action,data:r}))}(t,e)}catch(e){console.error('failed to persist form',e)}}(e),e.submit())}));const S=(t,e)=>{t&&!t.dataset[E]&&(n(t,e.some((e=>e===t))),T(t))};for(const o of['focusin','change'])t.addEventListener(o,(t=>{const e=I(t);D(e)&&S(e,y())}));const B=e.get('form_key'),M=e.get(l),P=B&&M;t.addEventListener('DOMContentLoaded',(()=>{const t=y();if(P)for(const e of t)e.elements[l].value===M&&p(e,B);[...new Set([...A(),...v().filter((t=>'true'===t.dataset.shopifyCaptcha))])].forEach((e=>S(e,t)))}))}(h,new URLSearchParams(w.location.search),n,t,e,['guest_login'])})(!0,!0)}();

var Shopify=Shopify||{};Shopify.PaymentButton=Shopify.PaymentButton||{isStorefrontPortableWallets:!0,init:function(){window.Shopify.PaymentButton.init=function(){};var t=document.createElement("script");t.src="https://officialyuri.com/cdn/shopifycloud/portable-wallets/latest/portable-wallets.en.js",t.type="module",document.head.appendChild(t)}};

function portableWalletsHideBuyerConsent(e){var t=document.getElementById("shopify-buyer-consent"),n=document.getElementById("shopify-subscription-policy-button");t&&n&&(t.classList.add("hidden"),t.setAttribute("aria-hidden","true"),n.removeEventListener("click",e))}function portableWalletsShowBuyerConsent(e){var t=document.getElementById("shopify-buyer-consent"),n=document.getElementById("shopify-subscription-policy-button");t&&n&&(t.classList.remove("hidden"),t.removeAttribute("aria-hidden"),n.addEventListener("click",e))}window.Shopify?.PaymentButton&&(window.Shopify.PaymentButton.hideBuyerConsent=portableWalletsHideBuyerConsent,window.Shopify.PaymentButton.showBuyerConsent=portableWalletsShowBuyerConsent);

function portableWalletsCleanup(e){e&&e.src&&console.error("Failed to load portable wallets script "+e.src);var t=document.querySelectorAll("shopify-accelerated-checkout .shopify-payment-button__skeleton, shopify-accelerated-checkout-cart .wallet-cart-button__skeleton"),e=document.getElementById("shopify-buyer-consent");for(let e=0;e<t.length;e++)t[e].remove();e&&e.remove()}function portableWalletsNotLoadedAsModule(e){e instanceof ErrorEvent&&"string"==typeof e.message&&e.message.includes("import.meta")&&"string"==typeof e.filename&&e.filename.includes("portable-wallets")&&(window.removeEventListener("error",portableWalletsNotLoadedAsModule),window.Shopify.PaymentButton.failedToLoad=e,"loading"===document.readyState?document.addEventListener("DOMContentLoaded",window.Shopify.PaymentButton.init):window.Shopify.PaymentButton.init())}window.addEventListener("error",portableWalletsNotLoadedAsModule);

document.addEventListener("DOMContentLoaded", portableWalletsCleanup);

window.performance && window.performance.mark && window.performance.mark('shopify.content_for_header.end');

// Set theme settings data attributes on the root element
  document.documentElement.setAttribute('data-heading-scale', '100');
  document.documentElement.setAttribute('data-body-scale', '100');
  document.documentElement.setAttribute('data-heading-letter-spacing', '0');
  document.documentElement.setAttribute('data-body-letter-spacing', '0');
  document.documentElement.setAttribute('data-button-text-case', '');
  document.documentElement.setAttribute('data-button-radius', '40');
  document.documentElement.setAttribute('data-apply-button-radius-to-all', 'true');

Shopify.license_key = 'LIC-1758119674049-znemasxf2';

if (Shopify.designMode) {
        document.documentElement.classList.add('shopify-design-mode');
      }
      var amount_free_product = 5000;
      var free_التوصيل_price = 9000;
      var التوصيل_product = 0;
      var free_product_id = 0
      var show_progress_bar = false

      // free gift variables
      var relyOnProductId = ""
      var freeGift1 = "0"
      var freeGift2 = "0"
      var freeGift3 = "0"
      var freeGift4 = "0"
      var freeGift5 = "0"
      var freeGift6 = "0"
      var freeGift7 = "0"
      var freeGift8 = "0"
      var freeGift9 = "0"
      var freeGift10 = "0"

      var freeGiftProductIds = [freeGift1, freeGift2, freeGift3, freeGift4, freeGift5, freeGift6, freeGift7, freeGift8, freeGift9, freeGift10].filter((gift) => gift != '0')

!function(){if(!window.klaviyo){window._klOnsite=window._klOnsite||[];try{window.klaviyo=new Proxy({},{get:function(n,i){return"push"===i?function(){var n;(n=window._klOnsite).push.apply(n,arguments)}:function(){for(var n=arguments.length,o=new Array(n),w=0;w<n;w++)o[w]=arguments[w];var t="function"==typeof o[o.length-1]?o.pop():void 0,e=new Promise((function(n){window._klOnsite.push([i].concat(o,[function(i){t&&t(i),n(i)}]))}));return e}}})}catch(n){window.klaviyo=window.klaviyo||[],window.klaviyo.push=function(){var n;(n=window._klOnsite).push.apply(n,arguments)}}}}();

if (item == null) {
        var _learnq = _learnq || [];

        var MetafieldReviews = null
        var MetafieldYotpoRating = null
        var MetafieldYotpoCount = null
        var MetafieldLooxRating = null
        var MetafieldLooxCount = null
        var okendoProduct = null
        var okendoProductReviewCount = null
        var okendoProductReviewAverageValue = null
        try {
          // The following fields are used for Customer Hub recently viewed in order to add reviews.
          // This information is not part of __kla_viewed. Instead, it is part of __kla_viewed_reviewed_items
          MetafieldReviews = {};
          MetafieldYotpoRating = null
          MetafieldYotpoCount = null
          MetafieldLooxRating = null
          MetafieldLooxCount = null

          okendoProduct = null
          // If the okendo metafield is not legacy, it will error, which then requires the new json formatted data
          if (okendoProduct && 'error' in okendoProduct) {
            okendoProduct = null
          }
          okendoProductReviewCount = okendoProduct ? okendoProduct.reviewCount : null
          okendoProductReviewAverageValue = okendoProduct ? okendoProduct.reviewAverageValue : null
        } catch (error) {
          console.error('Error in Klaviyo onsite reviews tracking:', error);
        }

        var item = {
          Name: "مضخة الحليب اللاسلكية Tighli",
          ProductID: 15590201819217,
          Categories: ["2024 Beauty Resolution Skincare Picks","2024 Buying Guide: Choosing Your First Korean Night Mask","2024 guide to overnight wrapping masks","2024 Holiday Skincare Deals \u0026 Bundles","2024 Holiday Skincare Gift Guide","2024 New Year Skincare Glow-Up Guide","2024 Staff Favorites Skincare List","2024 Trending Korean Collagen Products","2025 Skincare Reset: Anti-Aging Collection","3-Step Night Routine for Beginners","Achieve Glass Skin: K-Beauty Routine for Radiant \u0026 Smooth Complexion","Achieving a Balanced Skin Barrier","Advanced Collagen Skincare Solutions","Advanced Collagen Support for Women Over 50","Advanced Collagen Wrapping Therapy","Advanced film-forming wrapping masks","Advanced Korean Night Wrapping Mask Collection","Advanced Overnight Wrapping Masks","Advanced PDRN Treatment Guide","Advanced Skin Care for Post-Menopausal Women","Affordable Collagen Skincare Under $40","Aftercare for dermaplaning at home","Age-Defying Collagen Products for Elasticity","Age-Defying K-Beauty for Women Over 50","Air-Conditioned Office Routine","All Night Wrapping Masks","All-Nighter Skin Recovery for Students","Alpine Peak Skincare Protection","Alpine Ski Lodge Overnight Recovery Skincare","Alpine Skin Care Guide","Amazon Prime Day Skincare Highlights","Anti-Aging \u0026 Wrinkle Care","Anti-Aging K-Beauty Night Solutions","Anti-Fatigue Skincare Essentials for Corporate Executives","Anti-Wrinkle Night Skincare Masks","Anti-Wrinkle Sleeping Masks","Arctic Proof Skincare for Extreme Cold","Arid Climate Skincare for Desert Heat","Arizona Dry Heat Skincare","At-home care for sagging jawline","Australian Summer Brightening \u0026 Repair","Autumn Skincare Routine \u0026 Hydration Tips","Back to Campus Skincare Essentials","Back to School Pore Clearing Essentials","Backpacking and Camping Skincare Guide","Barrier Repairing Night Masks","Beach Day Recovery and Rehydration","Bedtime Masks for Plump Skin","Beginner Guide: Collagen Jelly vs Night Mask","Beginner's Guide to a K-Beauty Overnight Routine","Best Airplane Skincare Routine for Long-Haul Flights","Best Alternatives to High-End Pore Pads","Best collagen night mask for wrinkles","Best Collagen Skin Products","Best Collagen Skincare for Mature Skin","Best Daily vs Weekly Treatments Comparison","Best for Fine Lines: Our Top Recommendations","Best for the Money: Cheap K-Beauty Pore Care","Best K-beauty for stage performers and actors","Best K-Beauty for Tired Skin","Best K-Beauty Night Masks Under $50","Best K-Beauty Products with Niacinamide","Best K-Beauty Stocking Stuffers for the Holidays","Best Korean Face Masks of 2024","Best Korean Night Treatments for Sensitive Skin","Best Korean Overnight Mask 2024 Showdown","Best Luxury K-Beauty Masks for Anti-Aging","Best masks for melasma and dark spots","Best Masks for Side Sleepers with Sensitive Skin","Best Menopausal Skincare for Collagen Loss","Best Overnight Face Masks for Busy Moms","Best overnight face masks for glowing الآن","Best Overnight Face Masks for Morning Glow","Best Overnight Masks for Large Pores","Best Overnight Skincare Routine for Glowing Skin","Best Overnight Treatments for a Sagging Jawline","Best Selling K-Beauty Night Masks","Best Skincare Alternatives to Professional Botox Treatments","Best Skincare for Hard Water Areas","Best الآنcare for humid weather","Best Skincare for Post-Night-Out Recovery","Best Skincare for Sagging Cheeks and Jawline","Best Skincare for Skiing and Cold Wind","Best Skincare for Swimmers: Chlorine Protection Guide","Best Skincare Routine for Swimmers","Best Tightening Masks for Sagging Skin","Best Value Collagen Skincare: Highest Rated for the Money","Best Value: Top Overnight Masks for the Money","Best-Selling $45 Skincare Essentials","Birthday Gift Ideas for Skincare Obsessives","Birthday Gifts for Skincare Lovers","Black Friday Beauty Deals: Collagen Sets","Black Friday Korean Beauty Sales","Boating \u0026 Yachting Skin Recovery","Boosting Collagen Production Naturally","Boosting Natural Collagen Production","Boosting Skin Elasticity \u0026 Firmness","Bounce-Back Collagen Treatments","Bridal Glow-Up Skincare ديالك","Bridal Skincare ديالك","Bridal الآنcare routine for a wedding glow","Brightening Care for Melanin-Rich Skin","Brightening Essentials for a Luminous Complexion","Brightening Guide for Sun Damaged Skin","Buying Guide: Best Korean Overnight Masks","Camping \u0026 Outdoors Recovery Skincare","Chlorine Recovery Skincare Routine for Swimmers","City Commuter K-Beauty Defense","City Skin Protection for Commuters","Clarifying الآنcare for congested الآن","Clean Beauty Inspired Turmeric Treatments","Clearing clogged pores and blackheads","Coastal Living K-Beauty Essentials","Cold Weather Barrier Repair \u0026 Hydration","Cold Weather Face Protection Guide","حرية حركة كاملةers for Thirties Skincare","حرية حركة كاملةing Jelly Creams","حرية حركة كاملةing Routines","حرية حركة كاملةing: Jelly Cream vs. Overnight Masks","Collagen Jelly Cream and Gel Moisturizers","Collagen Jelly Cream and Mask Duo","Collagen Jelly Cream vs Night Mask Comparison","Collagen Jelly Cream vs Night Mask Guide","Collagen Jelly Cream vs Standard Night Masks","Collagen Jelly Cream vs Wrapping Mask: Buying Decision Helper","Collagen Jelly Cream vs Wrapping Masks: Which is Better?","Collagen Mask vs Jelly Cream: Texture Comparison Guide","Collagen Mask vs Kojic Acid Mask: Which Is Better?","Collagen Masks for Loss of Skin Elasticity","Collagen Masks under $45","Collagen Masks with Added Skin Benefits","Collagen Night Mask vs Jelly Cream: Which is better?","Collagen Night Masks under $50","Collagen Skincare Products Under $50","Collagen vs Kojic Acid for Skin: Head-to-Head","Collagen vs Kojic Acid: Which Night Mask is Right for You?","Collagen vs. Kojic Acid: Which Night Mask Wins?","Collagen wrapping masks for slugging","Collagen-Based Elasticity Treatments","Collagen-Focused Routine for the Purist Aesthetic","Collagen-Infused Face Masks and Creams","Collagen-Infused Face Products for Elasticity","Collagen-Infused K-Beauty Masks","Collagen-Infused Korean Face Masks","Collagen-Infused Korean Skincare","Collagen-Infused Overnight Face Masks","Collagen-Infused Skincare Essentials","Collagen-Rich Facial Treatments","Combating Morning Skin Dehydration \u0026 Tightness","Commuter Skincare: Anti-Pollution Shield","Compact K-Beauty for Your Next Adventure","Comparison: Best Collagen Night Masks under $50","Comparison: Peel-off vs Leave-on Night Masks","Comparison: Turmeric Masks vs Classic Collagen","Convenient K-Beauty for Stay-at-Home Parents","Cooling After-Sun Skincare Recovery","Cruise Ship Skincare Essentials","Cult-Favorite Korean Night Masks","Cyber Monday K-Beauty Steals","Cyclist Windburn Protection Masks","Daily K-Beauty Routine for Glowing Skin","Daily Pore and Hydration Routine","Dark Spot Correcting Night Masks","Decision Helper: Pore Pads or Wrapping Masks?","Deep Hydrating Collagen Overnight Masks","Deep Hydration for Skiers and Snowboarders","Deep hydration masks for dry winter الآن","Deep Hydration Night Mask Collection","Deep Hydration Night Packs","Deep Hydration Night Repair","Deep Hydration Picks for Cold Weather","Deep Hydration Wrapping Masks","Deep Moisture for Frequent Travelers","Deep Moisturizing Wrapping Masks","Deeply hydrating nighttime الآنcare routine","Deeply hydrating overnight masks","Desert Environment Deep Hydration","Desert الآن care essentials","Desk-Side K-Beauty Refresh for Office Workers","DIY At-Home Facial Night Collection","Dorm Room K-Beauty for Students","Dorm Room Skincare Essentials for Students","Dry European Winter Skin Support","Dullness vs Pores: Finding Your Best Mask","Dust and Pollen Defense Skincare","Early Anti-Aging K-Beauty for Your 20s","Eco-Friendly Refillable Beauty Staples","Editor Picks: Top Korean Collagen Treatments","Editor's Choice: Collagen Skincare Picks","Editor's Choice: Top K-Beauty Masks","Editor's Picks: Best of Tighli 2024","Editorial Picks: Brightening Masks","Editors Picks: Most Effective Night Masks","Editor’s Picks: Best Korean Masks for a Natural Glow","Effective Korean Skin Care Under $50","Effective Nighttime Repair Treatments","Elasticity Boosters for Women in their 60s","Elasticity Boosting Guide for Menopausal Skin","Elasticity Jelly Masks for Face","Emergency الآنcare for tired brides","Essential Brightening Guide: Turmeric vs Traditional Masks","Essential care for men's shaving irritation","Essential Cold Weather Masks for Dry Skin","Essential Cold Weather Skincare Guide","Essential Collagen Night Mask Collection","Essential In-Flight Skincare for Long Travel","Essential K-Beauty for Dry Environments","Essential K-beauty for in-flight الآنcare","Essential Niacinamide K-Beauty Products","Essential Night Skincare Products","Essential Nighttime Skincare Routine for Glowing Skin","Essential Overnight Face Masks","Essential Overnight Skincare Routine for Glowing Skin","Essential Peel-Off Night Masks","Essential Skincare for Beginners","Essential Skincare for Heavy Stage Makeup Removal","Essential Skincare for Long Distance Flights","Essential Skincare for Outdoor Runners","Essential Skincare for Performers and Actors","Essential Skincare for Skiing and Snowboarding","Essential Winter Face Masks for Hydration","Exam Season Stress Relief Skincare","Exfoliating large pores with daily pads","Exfoliating Pore Pads for Daily Use","Explore Korean Mask Formats","Extreme Cold Skincare for Sub-Zero Temperatures","Extreme Cold Winter Skincare Guide","Face Care for Skiing and Snowboarding","Face Masks for Skin Elasticity and Firmness","Face Protection and Recovery for Skiing","Face Protection for Skiing and Snowboarding","Face Tightening \u0026 Contour Masks","Facial Masks Under $50","Fall Skincare Routine for Transitioning Weather","Fashion Week Survival Kit","Fast Skincare for Busy Lifestyles","Film-Forming Night Masks","Finals Week Skincare for Tired Students","Firming \u0026 Lifting Collection for Your 50s","Firming and Lifting Korean Masks","Firming Mask for Fine Lines and Wrinkles","Firming masks for women over 50 and mature الآن","Firming Sagging Skin Around the Jawline","Firming Salmon PDRN Masks","Firming Treatments for Sagging Facial Skin","First Date Glow: Pre-Date Skincare Essentials","Fixing crepey الآن on face and neck","Flawless Canvas Makeup Prep Guide","Fragrance-Free and Gentle Night Masks","Full Tighli اللاسلكية Catalog","Gel \u0026 Jelly Texture K-Beauty Products","Gel-Cream Moisturizers for Daily Hydration","Gentle care after professional peels","Gentle K-Beauty Routine for Teenagers","Gentle Recovery After Chemical Peels","Gift Ideas for Skincare Lovers","Glass Skin Kit for Content Creators","Global Traveler K-Beauty Kit","Glowing Skin Routine for Bridesmaids","Graduation Day Skincare for Camera-Ready Skin","Gym \u0026 Workout Skincare Refresh","Gym Bag Essentials for Post-Studio Glow","Gym-Bag K-Beauty Essentials","Halloween Makeup Recovery \u0026 Soothing","Hassle-Free K-Beauty for Homebodies","High Altitude Skin Rescue for Mountain Climates","High Altitude Skin Rescue for Mountains","High Concentration Collagen Face Masks","High-Concentration Collagen Night Masks","High-Concentration Niacinamide Face Cream","High-Efficiency Skincare for Female Executives","High-Efficiency Sleep Masks with Salmon PDRN","High-Impact Routine for Skincare Minimalists","High-Performance Night Care Skincare","High-Potency Collagen Mask Set","High-Potency Nighttime Skin Repair","High-Potency Salmon PDRN Skincare","High-Rise Apartment Hydration Solutions","High-Spec Collagen Treatments for Face","High-tech beauty innovations from Korea","High-Value K-Beauty for Savvy Shoppers","Highest Rated Collagen Night Masks","Highest Rated Collagen Night Masks Compared","Highest Rated Collagen Treatments for Aging Skin","Highest Rated Products for Pore Refinement","Highly-Rated Nightly Glow Routines","Holiday Party Prep: Get Your Glow On","Holiday Skin Revival Sets","Holistic K-Beauty for Wellness Enthusiasts","Holistic Turmeric \u0026 Kojic Acid Skin Ritual","Holistic Wellness Turmeric Skincare Collection","Home Office Skincare for Indoor Comfort","Home Spa Day Essentials","Home Spa Day Essentials for Busy Weekends","How to prevent sleep lines on face","How to Treat Sleep Lines on Face","Hydrating Collagen Treatments for Night","Hydrating Jelly Creams with Collagen","Hydrating Sleeping Masks under $50","Hydrating Treatments for Dry Skin","Hydration Heroes for Frequent Flyers","Hydration Support for Air-Conditioned Offices","Hydrogel and Jelly Texture Skincare","Hydrolyzed Collagen Face Treatments","In-Flight Hydration \u0026 Travel Recovery","In-Flight Hydration for International Travel","In-Flight Skincare for Long Haul Travel","Indoor Heating Skin Repair Collection","Indoor Lifestyle Skincare for Remote Workers","Industrial Area Barrier Protection","Innovative Face Wrapping Masks","Instant Glow Up for Special Occasions","Intense Hydration for Overnight Use","Intense Hydration for Parched Skin","Intensive Care for Sagging Jowls","Intensive Collagen Care for Women in Their 50s","Intensive مضخة الحليب اللاسلكية Tighlis","Intensive Night Wrapping Treatments","Intensive Night-Time Repair Formulas","Intensive Nighttime Facial Masks","Intensive Overnight Facial Mask Treatments","Intensive overnight mask for dry الآن","Intensive Overnight Masks","Intensive Results Driven Skincare for Texture and Tone","Intensive Skin Firming Masks","Intensive Skin Hydration Masks","Intensive Skin Repair Treatment","Intensive Skincare for Cold Windy Climates","Intensive sleep care for tired الآن","Japanese Hot Spring (Onsen) Rejuvenation","Jawline \u0026 Cheek Sculpting Masks","Jelly and Gel Texture Korean Skincare","Jelly Cream vs Night Mask for Maximum Hydration","Jelly Cream vs Sleeping Mask: Texture \u0026 Results Guide","Jelly Texture Night Skincare","Jelly-Based Face Creams and Wrapping Masks","Job Interview Skincare: Look Rested and Radiant","K-Beauty Birthday Gift Ideas for Her","K-Beauty Collagen Treatments for Home","K-Beauty Discovery Collection for the Curious","K-Beauty Essentials at the $45 Price Point","K-Beauty Essentials for College Students","K-Beauty for Achieving K-Pop Idol Skin","K-Beauty for Adapting to Seasonal Skin Needs","K-Beauty for Aspiring Glass Skin","K-Beauty for Night Shift Skin Recovery","K-Beauty for Smoker's Lines Around the Mouth","K-Beauty for the 'Always On' Person","K-Beauty for the Skincare-First Philosophy","K-beauty guide for rainy seasons","K-Beauty Jelly and Wrapping Masks","K-Beauty Jelly Creams for Radiance","K-Beauty Mask Treatments for حرية حركة لاسلكية","K-Beauty Masks for Glass Skin","K-Beauty Masks for Winter Air","K-Beauty Must-Haves for Skin Elasticity","K-Beauty Night Wrapping Masks","K-Beauty Overnight Treatments","K-Beauty Prep for Bridesmaids \u0026 Bridal Party","K-Beauty Products $45 and Above","K-Beauty Products from $40 to $50","K-Beauty with Skin-Strengthening Actives","Kojic Acid and Turmeric Overnight Treatments","Kojic acid face masks for overnight brightening","Kojic Acid Turmeric vs Classic Collagen: Decision Guide","Kojic Acid vs Collagen Night Mask Comparison","Korean Beauty for Skin Revitalization","Korean Beauty for Youthful Glow","Korean Beauty Gifts under $50","Korean Beauty Mask Collection","Korean Collagen Mask Collection","Korean Home Spa Routine","Korean Night Care for All Skin Types","Korean Night Skincare for Advanced Users","Korean Night Wrapping Mask Collection","Korean Overnight Sleeping Masks","Korean Skincare for Men","Korean Skincare Gift Ideas for the Holidays","Korean Slugging Routine for Dehydrated Skin","Korean Spa Night Mask Essentials","Korean Treatments for Fine Lines","Late Night Gaming Skin Recovery","Leave-on Overnight Wrapping Masks","Lightweight Night Skincare Treatments","Low maintenance الآنcare for busy moms","Low Maintenance Skincare Routine","Low-Maintenance Skincare for Camping","Luxury Collagen Gifts for Mother's Day","Luxury Facial Treatments Under $50","Luxury K-beauty for your home spa environment","Luxury K-Beauty Gift Ideas for Her","Luxury K-Beauty Masks $45 and Over","Luxury Korean Skincare Guide","Luxury Skincare Gift Sets for Corporate Clients","Luxury Sleep Mask Collection","Luxury Wrapping Mask Collection","Maintaining Youthful Skin","Max-Hydration K-Beauty Sleep Masks","Maximum Hydration for Extremely Dry Sleepers","Mediterranean Sun Exposure Recovery","Mess-Free Face Masks for In-Flight Use","Mess-Free Night Masks for Busy People","Mess-Free Night Masks for Side Sleepers","Millennial Skin Maintenance Staples","Mindful Meditative Beauty Rituals","Mindful Skincare Rituals for a Calm Night","Minimalist K-Beauty Routine for Simplicity","Minimalist Skincare for Camping Trips","Minimizing Pores \u0026 Refining Skin Texture","Minimizing Texture \u0026 Roughness","Moisture-Locking Collagen Masks","Moisture-Locking Nighttime Masks","Morning Revival for Night Shift Workers","Most Effective Night Masks for Sleep-Deprived Skin","Most Popular Collagen Wrapping Masks Compared","Most Popular Korean Beauty Under $45","Most Popular Korean Skincare of 2024","Most Popular Korean Sleeping Masks","Most popular Korean sleeping masks for nighttime hydration","Most Popular Trending Korean Beauty Products","Most Popular Yuri Masks for Glass Skin","Most Viral Collagen Wrapping Masks of the Year","Mother’s Day Skincare Gift Ideas","Mountain Air Recovery Masks","Mountain Retreat Skincare for High Altitudes","Multi-Ingredient Focus: Collagen, PDRN \u0026 Niacinamide","Multi-maالآنg guide for work from home days","Multi-Maالآنg Routine for Combination Skin Problems","New Arrivals: The Latest in K-Beauty Tech","New in K-Beauty: Advanced Turmeric and Collagen","New In: The 2024 Collagen Collection","New Mom Beauty Sleep Essentials","New Year, New Skin: Overnight Treatments","Niacinamide and Collagen Blend Skincare","Niacinamide and Collagen Collection","Niacinamide and Collagen Infused Skincare","Niacinamide Cream vs Night Masks: Which Is Better?","Niacinamide Jelly Treatments for Glow","Niacinamide K-Beauty Products","Night Cream vs. Overnight Mask: Which is Better for You?","Night Mask vs Jelly Cream: How to Choose?","Night Mask vs Jelly Cream: Which is Best?","Night Mask vs Moisturizer: Which is Better for Your Skin?","Night Masks for Dry AC Environments","Night Masks for Intense Skin Hydration","Night masks that won't rub off on your pillow","Night Wrapping Mask: Collagen vs Kojic Acid Head-to-Head","Night Wrapping Peel Masks","Nighttime routine for under $150","Nighttime Skincare Buying Guide","Nighttime Zen: Bedtime Skincare Rituals","No-Mess Overnight Masks for Clean Sheets","No-Rinse Overnight Wrapping Masks","No-Smudge Mess-Free Night Masks","Non-Invasive Collagen Care for Deep Wrinkles","Non-Sticky Moisturizers for Side Sleepers","Non-Sticky Sleeping Masks Collection","NYC urban الآن rescue","Occlusive Skincare to Prevent Moisture Loss","Office \u0026 Workspace Skincare Essentials","Office Air Conditioning Survival Kit","One-Step Sleep Masks for Busy Nights","Outdoor Festival Skin Repair","Overnight Beauty for the Bedroom","Overnight Care for Long Distance Drivers","Overnight collagen for deep wrinkles and fine lines","Overnight Face Mask Collection","Overnight Glow Skincare Essentials","Overnight hydration for air conditioned rooms","راحة بدون ألم Masks","Overnight K-Beauty for Intense Skin Renewal","Overnight Lifting Face Masks","Overnight Mask Collection for a Morning Glow","Overnight Masks for Busy High Achievers","Overnight masks for sleep-deprived parents","Overnight masks that won't rub off on pillow","Overnight Moisturizers for Extremely Dry Skin","Overnight Recovery Facial Wraps","Overnight Rejuvenation \u0026 Repair Routine","Overnight Remedies for Pillow Lines and Sleep Creases","Overnight repair face masks","Overnight Repair Skincare for Tired Parents","Overnight Restoration for Busy Parents","Overnight Skin Transformation Routine","Overnight Skincare for Busy Professionals","Overnight Skincare for Long Flights","Overnight Tightening Masks for Sagging Skin","Pacific Northwest Skincare for Mist and Cool Dampness","Packing Guide: Skincare for Weekend Trips","PDRN vs Collagen: Which Mask Should You Choose?","Peel-Off Night Masks for Pillow Protection","Peel-Off Night Wrapping Mask Collection","Peel-Off Night Wrapping Masks","Peel-Off Sleeping Mask Collection","Peptide and Collagen Care for Deep Wrinkles","Performance الآنcare collection","Photo-Ready Skin for Graduation","Photoshoot الآنcare prep collection","Pillow Proof Sleep Mask Collection","Pillow-safe overnight face masks","Plumping Collagen Solutions for Volume Loss","Plumping jelly الآن favorites","Polluted City Skincare Routine","Pore Pads vs Night Masks: Which Do You Need?","Pore Pads vs Sheet Masks: Decision Guide","Pore Pads vs. Masks for Smooth Skin Texture","Pore Tightening for Oily T-Zones","Pore-Refining Pads and Treatments","Post-Baby Skincare Routine for New Moms","Post-Dermaplaning \u0026 At-Home Facial Care","Post-Flight Recovery Skincare","Post-Gym Beauty: The Essential Gym Bag Kit","Post-Halloween Skin Detox","Post-Party Skin Recovery for Tired Morning Faces","Post-Pregnancy Skin Recovery K-Beauty","Post-Sailing Wind and Salt Recovery","Post-Sun Repair \u0026 Hydration","Post-Travel Skin Recovery","Post-Travel Skin Recovery Essentials","Pre-Date Night Glow Routine","Pre-Date Night Skincare Essentials","Pre-engagement photoshoot الآنcare prep","Pre-Wedding Skincare Prep for Bridesmaids","Premium Collagen Masks for Luxury Skin Care","Premium Jelly Mask Collection","Premium K-beauty masks for overnight use","Premium K-Beauty over $45","Premium Korean Beauty Over $40","Premium Korean Beauty Under $50","Premium Korean Skincare Collection Under $50","Premium Korean Skincare for Exactly $45","Premium Korean Skincare Over $40","Premium night-time self care rituals","Premium Salmon PDRN and Collagen Collection","Preventing Pillow Marks and Sleep Creases","Preventing Razor Bumps and Irritation","Pro-Grade Skincare for Professional Makeup Artists","Proactive Anti-Aging for Early Skin Care","Professional At-Home Korean Facial","Professional Grade At-Home Facial Collection","Professional Grade K-Beauty Supplies for Estheticians","Professional Grade Night Wrapping Masks","Professional K-Beauty Picks for Estheticians","Professional Korean Pore Care Routine","Professional Photoshoot Glow Routine","Professional Strength Intensive Treatments","Professional Strength Wrapping Masks","Professional-Grade DIY Home Spa Facial Products","Protective Skincare for Windy Weather","Quick K-Beauty for Busy Pet Parents","Radiance-Boosting K-Beauty for Dull Skin","Red Carpet Ready Face Masks","Reducing appearance of crow's feet","Reducing Fine Lines and Wrinkles","Refining orange peel الآن texture","Relaxing Bedtime Beauty Rituals","Relaxing Evening Ritual Skincare","Repair Routine for Sun Damaged Skin","Restorative Skincare for Menopausal Skin Changes","Restorative Skincare for Night Shift Workers","Restorative Skincare for Teachers","Restoring الآن health with Salmon PDRN","Retail Worker's 5-Minute Skin Refresh","Revitalizing Face Masks for Nurses on 12-Hour Shifts","Revitalizing Nighttime Essentials","Reviving Tired and Fatigued Skin","Road Trip Hydration \u0026 Refresh Kit","Rural Escape Restorative Skincare","Rural Farm Life Skincare: Heavy Duty Repair","Safe Skincare After Microneedling Treatments","Salmon PDRN and Marine Collagen Masks","Salmon PDRN Collagen Mask Selection","Salmon PDRN Face Masks for Skin Repair","Salmon PDRN Skincare Selection","Salmon PDRN vs Collagen Mask Comparison","Salmon PDRN vs Collagen Masks: The Ultimate Firming Guide","Salmon PDRN vs Collagen Masks: Which Should You Choose?","Salmon PDRN vs Standard Collagen: The High-End Mask Showdown","Salmon PDRN vs. Traditional Collagen Masks","Salt \u0026 Chlorine Recovery for Swimmers","Scandinavian Winter Skincare Resilience","Self Care Ritual Products for a Relaxing Night In","Self-Care Christmas Gifts for Your Bestie","Self-Care K-Beauty Gift Set Ideas","Self-Care Saturday Shopping Guide","Self-Care Sunday Skincare Rituals","Simple K-Beauty Solutions for Men's Skin","Simple Skincare Routine for Dads","Simple Steps for a Professional At Home Facial","Ski and Snowboard Skin Recovery Collection","Ski Resort Skincare Essentials","Ski Trip Skincare for Winter Sports","Skiing Skincare: Best Products for Cold Weather","Skin Barrier Defense for Fitness Enthusiasts","Skin barrier repair treatment","Skin Barrier Repair Treatments","Skin Brightening for Heavy Coffee Drinkers","Skin Detox for Active Lifestyles","Skin elasticity boosting masks","Skin Elasticity Boosting Products","Skin Firming Collagen Ritual","Skin firming face mask collection","Skin Hydration for AC Environments","Skin Plumping Collagen Treatments","Skin Prep Guide for Professional Photography","Skin Protection for Frequent Flyers","Skin repair for competitive swimmers","Skin-smoothing night wrapping masks","Skincare Essentials for Late-Night Gamers","Skincare Essentials for Late-Night Study Sessions","Skincare for a Dewy Complexion","Skincare for a Healthy Skin Barrier","Skincare for a Smooth Skin Texture","Skincare for Addressing Skin Sagging in Your 50s","Skincare for All-Nighter Recovery","Skincare for Arid High-Plains Environments","Skincare for beach weather","Skincare for Busy People: 1-Step Night Masks","Skincare for Dry \u0026 Dehydrated Skin","Skincare for dry indoor heat","Skincare for Enhanced Firmness","Skincare for Female Executives and Busy Leaders","Skincare for Flight Attendants and Frequent Flyers","Skincare for freezing temperatures","Skincare for Gardeners: Protect \u0026 Repair","Skincare for Graveyard Shift Workers","Skincare for Hard Water Areas","Skincare for harsh winter weather","Skincare for Heated Indoor Environments","Skincare for Heavy Makeup Wearers","Skincare for Mature Skin","Skincare for Neck \u0026 Décolletage","Skincare for New Grads: Post-College Glow Up","Skincare for Polluted Cities","Skincare for Pulling an All-Nighter","Skincare for sagging jawline","Skincare for Sensitive Skin","Skincare for Skiers: Alpine Slope Recovery","Skincare for skiing and winter sports","Skincare for smokers and pollution exposure","Skincare for staying up late studying","Skincare for Supple Skin","Skincare for Tech Neck and Neck Lines","Skincare for the Active Lifestyle","Skincare for the Aspiring K-Beauty Guru","Skincare for the DIY-at-Heart (for treatments at home)","Skincare for tired looking الآن","Skincare for Windy Coastal Regions","Skincare for Women in Business and Corporate Professionals","Skincare Guide for Hot and Humid Weather","Skincare Infused with PDRN and Collagen","Skincare products with collagen and turmeric","Skincare Routine After Late Night Parties","Skincare Solutions for Elasticity","Skincare to Restore Skin's Bounce","Skinimalist Routine Essentials","Sleep Mask for Side Sleepers","Sleep Skincare Essentials for Cold, Dry Air","Slow-Beauty Rituals for Mindful Skin Care","Smart Skincare for the Efficiency-Focused High Achiever","Smoothing products for rough الآن surface","Solutions for Forehead Wrinkles and Texture","Solutions for Sagging Skin and Loss of Elasticity","Soothing Care for Menopausal Skin","Soothing dry flaky patches","Soothing الآن after sun exposure","Soothing Skincare for Reactive \u0026 Delicate Skin","Specialized Kojic Acid Skincare Products","Spring Cleanse: Refreshing Skincare Routine","Spring Skin Detox Collection","Staff Favorites for Achieving a Glass Skin Glow","Staff Picks: Our Favorite Night Masks","Stage Makeup Removal and Recovery for Actors","Standard vs Advanced Collagen Mask Comparison","Step-by-Step Guide: Pore Pads vs Overnight Face Masks","Stress-Relief K-Beauty for Educators","Suburban Outdoor Lifestyle Guide","Summer Pore Control Essentials","Targeting deep forehead creases","Targeting Forehead Lines \u0026 Wrinkles","Targeting Hyperpigmentation from Sun Damage","Texture-refining products for blurred الآن","The 10-Minute Night Routine for Busy People","The Airplane Cabin Skincare Routine","The Best Collagen Mask for Plumping Skin","The best masks for 'Tech Neck' lines","The Best Nighttime Skincare Routine of 2024","The Best Skincare for Camping and Backpacking","The Best Skincare for Cortisol-Stressed Skin","The مضخة الحليب اللاسلكية Tighli Collection","The Frequent Flyer Skin Survival Kit","The Path to Authentic Glass Skin","The Perfect Birthday Pamper Routine","The Perfect K-Beauty Gift for Her","The Premium Korean Spa Experience","The Tired Parent's Overnight Glow Guide","The Ultimate Bridal Glow Kit for Brides-to-Be","The Ultimate Bridal Skincare Routine for Glowing Skin","The Ultimate DIY Spa Night","The Ultimate Glass Skin Routine for Beauty Junkies","The Ultimate Guide to Sleeping in a Collagen Mask","The Ultimate K-Beauty Glass Skin Achieve Kit","The Ultimate K-Beauty Routine Builder: Mix \u0026 Match Your Essentials","The Ultimate Music Festival Skin Recovery Guide","The Ultimate Night Wrapping Mask Buying Guide","The Ultimate Weekend Skin Reset Routine","Thoughtful K-Beauty Gifts for Long-Distance Love","Tightening masks for sagging jawlines","TikTok Viral K-Beauty: 2024 Trending Picks","Top 10 Best Selling YURI Beauty Products","Top 10 Bestsellers for Overnight Glow","Top 10 Bestselling YURI Skincare Products","Top 10 Collagen Masks for 2024","Top 10 K-Beauty Essentials for Glow","Top 10 Korean Beauty Gifts for Her","Top 10 Picks for Deep Hydration","Top 3 Night Masks for Deep Hydration","Top 5 Bestselling Korean Masks to Try Now","Top 5 K-Beauty Trends to Watch in 2024","Top 5 Korean Face Masks for Glowing Skin","Top 5 Korean Night Wrapping Masks for 2024","Top 5 Must-Have Sleeping Masks","Top 5 Night Masks for Hydration and Glow","Top Korean Masks for Dark Spots and Texture","Top Korean Products for Slugging","Top Korean Skincare for Teenagers","Top Night Mask Routine for Night Owls","Top products for dry climates","Top Rated Korean Night Masks Comparison","Top Rated Korean Sleep Masks: The 2024 Buying Guide","Top-Rated Alternatives to Luxury Collagen Wraps","Top-Rated حرية حركة كاملةers for Youthful Skin","Top-Rated Collagen Skincare for 2024","Top-Rated Collagen Skincare Products","Top-Rated Korean Overnight Wrapping Masks","Top-Rated Niacinamide Formulas for Glow","Top-Rated Pore Minimizing Solutions","Top-Rated Skin Recovery for Night Shift Workers","Transfer-Proof Overnight Face Masks","Travel-Friendly K-Beauty for Jet-Setters","Travel-Friendly K-Beauty for Jet-Setters","Trending K-Beauty Must-Haves: What's Hot Now","Tropical Vacation Skincare Essentials","Turmeric and Kojic Acid Mask Selection","Turmeric Skincare Benefits for Even Tone","Turmeric vs Collagen Mask: Targeting Dark Spots","Turmeric vs Collagen: Night Mask Showdown","Turmeric vs. Collagen Night Masks Showdown","Ultimate At-Home Korean Spa Ritual","Ultimate مضخة الحليب اللاسلكية Tighli Collection","Ultimate Collagen Skincare Buyer's Guide","Under $50 K-Beauty Essentials","Urban Pollution Defense Skincare Routine","Urban Smog \u0026 Pollution Protection","Valentine's Day Date Night Glow","Value Priced K-Beauty Masks","Viral TikTok Face Masks for Glass Skin","Viral TikTok Korean Collagen Masks","Viral TikTok Korean Skincare: The Mask Collection","Viral TikTok Korean Wrapping Masks","Wedding Day Makeup Prep Collection","Weekend Reset: Relaxing K-Beauty Rituals","Weekend Skin Resurfacing Project","Wellness-Focused Nightly Skin Repair","Which Night Wrapping Mask Should You Buy?","Which Yuri Mask is Right for You? (Comparison Guide)","Windburn Protection for Skiers and Snowboarders","Winter Deep Hydration \u0026 Repair","Winter Hydration Guide","Winter Hydration Showdown: Which Mask for Dry Skin?","Winter Moisture Locking Solutions","Winter Skin Hydration Heroes","Winter Skincare Guide for Extreme Dryness","Winter Sports Face Protection","Winter Vacation Skincare Essentials","Work-From-Home K-Beauty Comfort Collection","Working from Home? Low-Maintenance Skincare Routines","Wrap Masks for Maximum Product Absorption","Wrapping Mask vs Traditional Peel-Off Masks","Year-End Best of K-Beauty Awards","Your First K-Beauty Dive: Starter Collection","Youth-Restoring K-Beauty Gifts for Grandmothers","Tighli collagen mask best sellers","Yuri Night Wrapping Mask Collection"],
          ImageURL: "tighli-assets/product-main.jpg",
          URL: "https://officialyuri.com/products/collagen-night-wrapping-mask",
          Brand: "Tighli",
          Price: "450 درهم",
          Value: "45.00",
          CompareAtPrice: "900 درهم"
        };
        _learnq.push(['track', 'Viewed Product', item]);
        _learnq.push(['trackViewedItem', {
          Title: item.Name,
          ItemId: item.ProductID,
          Categories: item.Categories,
          ImageUrl: item.ImageURL,
          Url: item.URL,
          Metadata: {
            Brand: item.Brand,
            Price: item.Price,
            Value: item.Value,
            CompareAtPrice: item.CompareAtPrice
          },
          metafields:{
            reviews: MetafieldReviews,
            yotpo:{
              rating: MetafieldYotpoRating,
              count: MetafieldYotpoCount,
            },
            loox:{
              rating: MetafieldLooxRating,
              count: MetafieldLooxCount,
            },
            okendo: {
              rating: okendoProductReviewAverageValue,
              count: okendoProductReviewCount,
            }
          }
        }]);
      }

window.klaviyoReviewsProductDesignMode = false

window.jdgmSettings={"pagination":5,"disable_web_reviews":false,"badge_no_review_text":"لا توجد تقييمات","badge_n_reviews_text":"{{ n }} تقييم/تقييمات","hide_badge_preview_if_no_reviews":true,"badge_hide_text":false,"enforce_center_preview_badge":false,"widget_title":"تقييمات العملاء","widget_open_form_text":"اكتبي تقييماً","widget_close_form_text":"إلغاء التقييم","widget_refresh_page_text":"تحديث الصفحة","widget_summary_text":"بناءً على {{ number_of_reviews }} تقييم/تقييمات","widget_no_review_text":"كوني أول من يكتب تقييماً","widget_name_field_text":"الاسم","widget_verified_name_field_text":"الاسم المؤكد (علني)","widget_name_placeholder_text":"الاسم","widget_required_field_error_text":"هذا الحقل مطلوب.","widget_email_field_text":"البريد الإلكتروني","widget_verified_email_field_text":"البريد الإلكتروني المؤكد (سري، لا يمكن تعديله)","widget_email_placeholder_text":"بريدك الإلكتروني","widget_email_field_error_text":"يرجى إدخال بريد إلكتروني صحيح.","widget_rating_field_text":"التقييم","widget_review_title_field_text":"عنوان التقييم","widget_review_title_placeholder_text":"اكتبي عنواناً لتقييمك","widget_review_body_field_text":"محتوى التقييم","widget_review_body_placeholder_text":"ابدئي الكتابة هنا...","widget_pictures_field_text":"صورة/فيديو (اختياري)","widget_submit_review_text":"إرسال التقييم","widget_submit_verified_review_text":"إرسال التقييم المؤكد","widget_submit_success_msg_with_auto_publish":"Thank you! Please refresh the page in a few moments to see your review. You can remove or edit your review by logging into \u003ca href='https://judge.me/login' target='_blank' rel='nofollow noopener'\u003eJudge.me\u003c/a\u003e","widget_submit_success_msg_no_auto_publish":"Thank you! Your review will be published as soon as it is approved by the shop admin. You can remove or edit your review by logging into \u003ca href='https://judge.me/login' target='_blank' rel='nofollow noopener'\u003eJudge.me\u003c/a\u003e","widget_show_default_reviews_out_of_total_text":"Showing {{ n_reviews_shown }} out of {{ n_reviews }} reviews.","widget_show_all_link_text":"Show all","widget_show_less_link_text":"Show less","widget_author_said_text":"{{ reviewer_name }} said:","widget_days_text":"{{ n }} days ago","widget_weeks_text":"{{ n }} week/weeks ago","widget_months_text":"{{ n }} month/months ago","widget_years_text":"{{ n }} year/years ago","widget_yesterday_text":"Yesterday","widget_today_text":"Today","widget_replied_text":"\u003e\u003e {{ shop_name }} replied:","widget_read_more_text":"Read more","widget_reviewer_name_as_initial":"","widget_rating_filter_color":"#fbcd0a","widget_rating_filter_see_all_text":"عرض جميع التقييمات","widget_sorting_most_recent_text":"الأحدث","widget_sorting_highest_rating_text":"الأعلى تقييماً","widget_sorting_lowest_rating_text":"الأقل تقييماً","widget_sorting_with_pictures_text":"الصور فقط","widget_sorting_most_helpful_text":"الأكثر إفادة","widget_open_question_form_text":"Ask a question","widget_reviews_subtab_text":"Reviews","widget_questions_subtab_text":"Questions","widget_question_label_text":"Question","widget_answer_label_text":"Answer","widget_question_placeholder_text":"Write your question here","widget_submit_question_text":"Submit Question","widget_question_submit_success_text":"Thank you for your question! We will notify you once it gets answered.","verified_badge_text":"Verified","verified_badge_bg_color":"","verified_badge_text_color":"","verified_badge_placement":"left-of-reviewer-name","widget_review_max_height":"","widget_hide_border":false,"widget_social_share":false,"widget_thumb":false,"widget_review_location_show":false,"widget_location_format":"","all_reviews_include_out_of_store_products":true,"all_reviews_out_of_store_text":"(out of store)","all_reviews_pagination":100,"all_reviews_product_name_prefix_text":"about","enable_review_pictures":true,"enable_question_anwser":false,"widget_theme":"leex","review_date_format":"mm/dd/yyyy","default_sort_method":"pictures-first","widget_product_reviews_subtab_text":"Product Reviews","widget_shop_reviews_subtab_text":"Shop Reviews","widget_other_products_reviews_text":"Reviews for other products","widget_store_reviews_subtab_text":"Store reviews","widget_product_variant_reference_text":"Review for","widget_no_store_reviews_text":"This store hasn't received any reviews yet","widget_web_restriction_product_reviews_text":"This product hasn't received any reviews yet","widget_no_items_text":"No items found","widget_show_more_text":"Show more","widget_write_a_store_review_text":"Write a Store Review","widget_product_and_store_reviews_text":"Product and store reviews","widget_reviews_in_collection_text":"Reviews in this collection","widget_other_languages_heading":"Reviews in Other Languages","widget_translate_review_text":"Translate review to {{ language }}","widget_translating_review_text":"Translating...","widget_show_original_translation_text":"Show original ({{ language }})","widget_translate_review_failed_text":"Review couldn't be translated.","widget_translate_review_retry_text":"Retry","widget_translate_review_try_again_later_text":"Try again later","show_product_url_for_grouped_product":false,"widget_sorting_pictures_first_text":"الصور أولاً","show_pictures_on_all_rev_page_mobile":false,"show_pictures_on_all_rev_page_desktop":false,"floating_tab_hide_mobile_install_preference":false,"floating_tab_button_name":"★ Reviews","floating_tab_title":"Let customers speak for us","floating_tab_button_color":"","floating_tab_button_background_color":"","floating_tab_url":"","floating_tab_url_enabled":false,"floating_tab_tab_style":"text","all_reviews_text_badge_text":"Customers rate us {{ shop.metafields.judgeme.all_reviews_rating | round: 1 }}/5 based on {{ shop.metafields.judgeme.all_reviews_count }} reviews.","all_reviews_text_badge_text_branded_style":"{{ shop.metafields.judgeme.all_reviews_rating | round: 1 }} out of 5 stars based on {{ shop.metafields.judgeme.all_reviews_count }} reviews","is_all_reviews_text_badge_a_link":false,"show_stars_for_all_reviews_text_badge":false,"all_reviews_text_badge_url":"","all_reviews_text_style":"branded","all_reviews_text_color_style":"judgeme_brand_color","all_reviews_text_color":"#108474","all_reviews_text_show_jm_brand":false,"featured_carousel_show_header":true,"featured_carousel_title":"Let customers speak for us","testimonials_carousel_title":"Customers are saying","videos_carousel_title":"Real customer stories","cards_carousel_title":"Customers are saying","featured_carousel_count_text":"from {{ n }} reviews","featured_carousel_add_link_to_all_reviews_page":false,"featured_carousel_url":"","featured_carousel_show_images":true,"featured_carousel_autoslide_interval":5,"featured_carousel_arrows_on_the_sides":false,"featured_carousel_height":250,"featured_carousel_width":80,"featured_carousel_image_size":0,"featured_carousel_image_height":250,"featured_carousel_arrow_color":"#eeeeee","verified_count_badge_style":"branded","verified_count_badge_orientation":"horizontal","verified_count_badge_color_style":"judgeme_brand_color","verified_count_badge_color":"#108474","is_verified_count_badge_a_link":false,"verified_count_badge_url":"","verified_count_badge_show_jm_brand":true,"widget_rating_preset_default":5,"widget_first_sub_tab":"product-reviews","widget_show_histogram":true,"widget_histogram_use_custom_color":false,"widget_pagination_use_custom_color":false,"widget_star_use_custom_color":false,"widget_verified_badge_use_custom_color":false,"widget_write_review_use_custom_color":false,"picture_reminder_submit_button":"Upload Pictures","enable_review_videos":true,"mute_video_by_default":false,"widget_sorting_videos_first_text":"الفيديوهات أولاً","widget_review_pending_text":"Pending","featured_carousel_items_for_large_screen":3,"social_share_options_order":"Facebook,Twitter","remove_microdata_snippet":true,"disable_json_ld":false,"enable_json_ld_products":false,"preview_badge_show_question_text":false,"preview_badge_no_question_text":"No questions","preview_badge_n_question_text":"{{ number_of_questions }} question/questions","qa_badge_show_icon":false,"qa_badge_position":"same-row","remove_judgeme_branding":false,"widget_add_search_bar":false,"widget_search_bar_placeholder":"Search","widget_sorting_verified_only_text":"Verified only","featured_carousel_theme":"default","featured_carousel_show_rating":true,"featured_carousel_show_title":true,"featured_carousel_show_body":true,"featured_carousel_show_date":false,"featured_carousel_show_reviewer":true,"featured_carousel_show_product":false,"featured_carousel_header_background_color":"#108474","featured_carousel_header_text_color":"#ffffff","featured_carousel_name_product_separator":"reviewed","featured_carousel_full_star_background":"#108474","featured_carousel_empty_star_background":"#dadada","featured_carousel_vertical_theme_background":"#f9fafb","featured_carousel_verified_badge_enable":true,"featured_carousel_verified_badge_color":"#108474","featured_carousel_border_style":"round","featured_carousel_review_line_length_limit":3,"featured_carousel_more_reviews_button_text":"Read more reviews","featured_carousel_view_product_button_text":"View product","all_reviews_page_load_reviews_on":"scroll","all_reviews_page_load_more_text":"Load More Reviews","disable_fb_tab_reviews":false,"enable_ajax_cdn_cache":false,"widget_advanced_speed_features":5,"widget_public_name_text":"displayed publicly like","default_reviewer_name":"John Smith","default_reviewer_name_has_non_latin":true,"widget_reviewer_anonymous":"Anonymous","medals_widget_title":"Judge.me Review Medals","medals_widget_background_color":"#f9fafb","medals_widget_position":"footer_all_pages","medals_widget_border_color":"#f9fafb","medals_widget_verified_text_position":"left","medals_widget_use_monochromatic_version":false,"medals_widget_elements_color":"#108474","show_reviewer_avatar":true,"widget_invalid_yt_video_url_error_text":"Not a YouTube video URL","widget_max_length_field_error_text":"Please enter no more than {0} characters.","widget_show_country_flag":false,"widget_show_collected_via_shop_app":true,"widget_verified_by_shop_badge_style":"light","widget_verified_by_shop_text":"Verified by Shop","widget_show_photo_gallery":true,"widget_load_with_code_splitting":true,"widget_ugc_install_preference":false,"widget_ugc_title":"Made by us, Shared by you","widget_ugc_subtitle":"Tag us to see your picture featured in our page","widget_ugc_arrows_color":"#ffffff","widget_ugc_primary_button_text":"Buy Now","widget_ugc_primary_button_background_color":"#108474","widget_ugc_primary_button_text_color":"#ffffff","widget_ugc_primary_button_border_width":"0","widget_ugc_primary_button_border_style":"none","widget_ugc_primary_button_border_color":"#108474","widget_ugc_primary_button_border_radius":"25","widget_ugc_secondary_button_text":"Load More","widget_ugc_secondary_button_background_color":"#ffffff","widget_ugc_secondary_button_text_color":"#108474","widget_ugc_secondary_button_border_width":"2","widget_ugc_secondary_button_border_style":"solid","widget_ugc_secondary_button_border_color":"#108474","widget_ugc_secondary_button_border_radius":"25","widget_ugc_reviews_button_text":"View Reviews","widget_ugc_reviews_button_background_color":"#ffffff","widget_ugc_reviews_button_text_color":"#108474","widget_ugc_reviews_button_border_width":"2","widget_ugc_reviews_button_border_style":"solid","widget_ugc_reviews_button_border_color":"#108474","widget_ugc_reviews_button_border_radius":"25","widget_ugc_reviews_button_link_to":"judgeme-reviews-page","widget_ugc_show_post_date":true,"widget_ugc_max_width":"800","widget_rating_metafield_value_type":true,"widget_primary_color":"#CB6387","widget_enable_secondary_color":false,"widget_secondary_color":"#edf5f5","widget_summary_average_rating_text":"{{ average_rating }} out of 5","widget_media_grid_title":"Customer photos \u0026 videos","widget_media_grid_see_more_text":"See more","widget_round_style":false,"widget_show_product_medals":false,"widget_verified_by_judgeme_text":"Verified by Judge.me","widget_show_store_medals":true,"widget_verified_by_judgeme_text_in_store_medals":"Verified by Judge.me","widget_media_field_exceed_quantity_message":"Sorry, we can only accept {{ max_media }} for one review.","widget_media_field_exceed_limit_message":"{{ file_name }} is too large, please select a {{ media_type }} less than {{ size_limit }}MB.","widget_review_submitted_text":"Review Submitted!","widget_question_submitted_text":"Question Submitted!","widget_close_form_text_question":"Cancel","widget_write_your_answer_here_text":"Write your answer here","widget_enabled_branded_link":true,"widget_show_collected_by_judgeme":false,"widget_reviewer_name_color":"","widget_write_review_text_color":"","widget_write_review_bg_color":"","widget_collected_by_judgeme_text":"collected by Judge.me","widget_pagination_type":"standard","widget_load_more_text":"Load More","widget_load_more_color":"#108474","widget_full_review_text":"Full Review","widget_read_more_reviews_text":"Read More Reviews","widget_read_questions_text":"Read Questions","widget_questions_and_answers_text":"Questions \u0026 Answers","widget_verified_by_text":"Verified by","widget_verified_text":"Verified","widget_number_of_reviews_text":"{{ number_of_reviews }} reviews","widget_back_button_text":"Back","widget_next_button_text":"Next","widget_custom_forms_filter_button":"Filters","custom_forms_style":"horizontal","widget_show_review_information":false,"how_reviews_are_collected":"How reviews are collected?","widget_show_review_keywords":false,"widget_gdpr_statement":"How we use your data: We'll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me's \u003ca href='https://judge.me/terms' target='_blank' rel='nofollow noopener'\u003eterms\u003c/a\u003e, \u003ca href='https://judge.me/privacy' target='_blank' rel='nofollow noopener'\u003eprivacy\u003c/a\u003e and \u003ca href='https://judge.me/content-policy' target='_blank' rel='nofollow noopener'\u003econtent\u003c/a\u003e policies.","widget_multilingual_sorting_enabled":false,"widget_translate_review_content_enabled":false,"widget_translate_review_content_method":"manual","popup_widget_review_selection":"automatically_with_pictures","popup_widget_round_border_style":true,"popup_widget_show_title":true,"popup_widget_show_body":true,"popup_widget_show_reviewer":false,"popup_widget_show_product":true,"popup_widget_show_pictures":true,"popup_widget_use_review_picture":true,"popup_widget_show_on_home_page":true,"popup_widget_show_on_product_page":true,"popup_widget_show_on_collection_page":true,"popup_widget_show_on_cart_page":true,"popup_widget_position":"bottom_left","popup_widget_first_review_delay":5,"popup_widget_duration":5,"popup_widget_interval":5,"popup_widget_review_count":5,"popup_widget_hide_on_mobile":true,"review_snippet_widget_round_border_style":true,"review_snippet_widget_card_color":"#FFFFFF","review_snippet_widget_slider_arrows_background_color":"#FFFFFF","review_snippet_widget_slider_arrows_color":"#000000","review_snippet_widget_star_color":"#108474","show_product_variant":false,"all_reviews_product_variant_label_text":"Variant: ","widget_show_verified_branding":true,"widget_ai_summary_title":"Customers say","widget_ai_summary_disclaimer":"AI-powered review summary based on recent customer reviews","widget_show_ai_summary":false,"widget_show_ai_summary_bg":false,"write_review_button_visibility":"everyone","store_summary_widget_heading":"Customers rate this store","store_summary_widget_button_text":"View customer reviews","store_summary_widget_button_theme_text":"See AI reviews summary","widget_show_review_title_input":false,"redirect_reviewers_invited_via_email":"external_form","request_store_review_after_product_review":true,"request_review_other_products_in_order":true,"review_form_color_scheme":"default","review_form_corner_style":"square","review_form_star_color":{},"review_form_text_color":"#333333","review_form_background_color":"#ffffff","review_form_field_background_color":"#fafafa","review_form_button_color":{},"review_form_button_text_color":"#ffffff","review_form_modal_overlay_color":"#000000","review_content_screen_title_text":"How would you rate this product?","review_content_introduction_text":"We would love it if you would share a bit about your experience.","store_review_form_title_text":"How would you rate this store?","store_review_form_introduction_text":"We would love it if you would share a bit about your experience.","show_review_guidance_text":true,"one_star_review_guidance_text":"Poor","five_star_review_guidance_text":"Great","customer_information_screen_title_text":"About you","customer_information_introduction_text":"Please tell us more about you.","custom_questions_screen_title_text":"Your experience in more detail","custom_questions_introduction_text":"Here are a few questions to help us understand more about your experience.","review_submitted_screen_title_text":"Thanks for your review!","review_submitted_screen_thank_you_text":"We are processing it and it will appear on the store soon.","review_submitted_screen_email_verification_text":"Please confirm your email by clicking the link we just sent you. This helps us keep reviews authentic.","confirm_email_screen_title_text":"Confirm your email","confirm_email_screen_message_text":"To help keep reviews authentic, we'll send you a secure link to continue writing your review. It only takes a moment.","check_email_screen_title_text":"Check your email","check_email_screen_message_text":"We sent you an email to {{ email }}. Click the button on the email to continue.","check_email_screen_resend_message_text":"Email resent!","check_email_resend_hint_text":"Didn't get the email? Check your spam folder or [resend the email].","verification_email_rate_limit_error_text":"You've reached the limit for review attempts on this product. Please check your inbox or try again later.","review_submitted_request_store_review_text":"Would you like to share your experience of shopping with us?","review_submitted_review_other_products_text":"Would you like to review these products?","store_review_screen_title_text":"Would you like to share your experience of shopping with us?","store_review_introduction_text":"We value your feedback and use it to improve. Please share any thoughts or suggestions you have.","reviewer_media_screen_title_picture_text":"Share a picture","reviewer_media_introduction_picture_text":"Upload a photo to support your review.","reviewer_media_screen_title_video_text":"Share a video","reviewer_media_introduction_video_text":"Upload a video to support your review.","reviewer_media_screen_title_picture_or_video_text":"Share a picture or video","reviewer_media_introduction_picture_or_video_text":"Upload a photo or video to support your review.","reviewer_media_youtube_url_text":"Paste your Youtube URL here","advanced_settings_next_step_button_text":"Next","advanced_settings_close_review_button_text":"Close","modal_write_review_flow":true,"write_review_flow_required_text":"Required","write_review_flow_privacy_message_text":"We respect your privacy.","write_review_flow_anonymous_text":"Post review as anonymous","write_review_flow_visibility_text":"This won't be visible to other customers.","write_review_flow_multiple_selection_help_text":"Select as many as you like","write_review_flow_single_selection_help_text":"Select one option","write_review_flow_required_field_error_text":"This field is required","write_review_flow_invalid_email_error_text":"Please enter a valid email address","write_review_flow_max_length_error_text":"Max. {{ max_length }} characters.","write_review_flow_media_upload_text":"\u003cb\u003eClick to upload\u003c/b\u003e or drag and drop","write_review_flow_gdpr_statement":"We'll only contact you about your review if necessary. By submitting your review, you agree to our \u003ca href='https://judge.me/terms' target='_blank' rel='nofollow noopener'\u003eterms and conditions\u003c/a\u003e and \u003ca href='https://judge.me/privacy' target='_blank' rel='nofollow noopener'\u003eprivacy policy\u003c/a\u003e.","rating_only_reviews_enabled":false,"show_negative_reviews_help_screen":false,"new_review_flow_help_screen_rating_threshold":3,"negative_review_resolution_screen_title_text":"Tell us more","negative_review_resolution_text":"Your experience matters to us. If there were issues with your purchase, we're here to help. Feel free to reach out to us, we'd love the opportunity to make things right.","negative_review_resolution_button_text":"Contact us","negative_review_resolution_proceed_with_review_text":"Leave a review","negative_review_resolution_subject":"Issue with purchase from {{ shop_name }}.{{ order_name }}","preview_badge_collection_page_install_status":false,"widget_review_custom_css":".jdgm-rev-widg[data-number-of-reviews='0'] {\n  display: none;\n}","preview_badge_custom_css":"","preview_badge_stars_count":"5-stars","featured_carousel_custom_css":"","floating_tab_custom_css":"","all_reviews_widget_custom_css":"","medals_widget_custom_css":"","verified_badge_custom_css":"","all_reviews_text_custom_css":"","transparency_badges_collected_via_store_invite":false,"transparency_badges_from_another_provider":false,"transparency_badges_collected_from_store_visitor":false,"transparency_badges_collected_by_verified_review_provider":false,"transparency_badges_earned_reward":false,"transparency_badges_collected_via_store_invite_text":"Review collected via store invitation","transparency_badges_from_another_provider_text":"Review collected from another provider","transparency_badges_collected_from_store_visitor_text":"Review collected from a store visitor","transparency_badges_written_in_google_text":"Review written in Google","transparency_badges_written_in_etsy_text":"Review written in Etsy","transparency_badges_written_in_shop_app_text":"Review written in Shop App","transparency_badges_earned_reward_text":"Review earned a reward for future purchase","product_review_widget_per_page":10,"widget_store_review_label_text":"Review about the store","checkout_comment_extension_title_on_product_page":"Customer Comments","checkout_comment_extension_num_latest_comment_show":5,"checkout_comment_extension_format":"name_and_timestamp","checkout_comment_customer_name":"last_initial","checkout_comment_comment_notification":true,"preview_badge_collection_page_install_preference":false,"preview_badge_home_page_install_preference":false,"preview_badge_product_page_install_preference":false,"review_widget_install_preference":"","review_carousel_install_preference":false,"floating_reviews_tab_install_preference":"none","verified_reviews_count_badge_install_preference":false,"all_reviews_text_install_preference":false,"review_widget_best_location":false,"judgeme_medals_install_preference":false,"review_widget_revamp_enabled":false,"review_widget_qna_enabled":false,"review_widget_revamp_dual_publish_end_date":"2026-02-26T16:16:49.000+00:00","review_widget_header_theme":"minimal","review_widget_widget_title_enabled":true,"review_widget_header_text_size":"medium","review_widget_header_text_weight":"regular","review_widget_average_rating_style":"compact","review_widget_bar_chart_enabled":true,"review_widget_bar_chart_type":"numbers","review_widget_bar_chart_style":"standard","review_widget_expanded_media_gallery_enabled":false,"review_widget_show_review_highlights":false,"review_widget_show_review_keywords_in_gray":false,"review_widget_reviews_section_theme":"standard","review_widget_image_style":"thumbnails","review_widget_review_image_ratio":"square","review_widget_stars_size":"medium","review_widget_verified_badge":"standard_text","review_widget_review_title_text_size":"medium","review_widget_review_text_size":"medium","review_widget_review_text_length":"medium","review_widget_number_of_columns_desktop":3,"review_widget_carousel_transition_speed":5,"review_widget_custom_questions_answers_display":"always","review_widget_card_section_size":"small","review_widget_button_text_color":"#FFFFFF","review_widget_text_color":"#000000","review_widget_lighter_text_color":"#7B7B7B","review_widget_corner_styling":"soft","review_widget_review_word_singular":"review","review_widget_review_word_plural":"reviews","review_widget_voting_label":"Helpful?","review_widget_shop_reply_label":"Reply from {{ shop_name }}:","review_widget_filters_title":"Filters","review_widget_filter_rating_title":"Rating","review_widget_filter_keyword_title":"Keyword","review_widget_clear_filters_text":"Clear filters","review_widget_expand_more_text":"More","review_widget_review_highlights_title":"Review highlights","qna_widget_question_word_singular":"Question","qna_widget_question_word_plural":"Questions","qna_widget_answer_reply_label":"Answer from {{ answerer_name }}:","qna_content_screen_title_text":"Ask a question about this product","qna_widget_question_required_field_error_text":"Please enter your question.","qna_widget_flow_gdpr_statement":"We'll only contact you about your question if necessary. By submitting your question, you agree to our \u003ca href='https://judge.me/terms' target='_blank' rel='nofollow noopener'\u003eterms and conditions\u003c/a\u003e and \u003ca href='https://judge.me/privacy' target='_blank' rel='nofollow noopener'\u003eprivacy policy\u003c/a\u003e.","qna_widget_question_submitted_text":"Thanks for your question!","qna_widget_close_form_text_question":"Close","qna_widget_question_submit_success_text":"We’ll notify you by email when your question is answered.","all_reviews_widget_v2025_enabled":true,"all_reviews_widget_v2025_header_theme":"default","all_reviews_widget_v2025_widget_title_enabled":true,"all_reviews_widget_v2025_header_text_size":"medium","all_reviews_widget_v2025_header_text_weight":"regular","all_reviews_widget_v2025_average_rating_style":"compact","all_reviews_widget_v2025_bar_chart_enabled":true,"all_reviews_widget_v2025_bar_chart_type":"numbers","all_reviews_widget_v2025_bar_chart_style":"standard","all_reviews_widget_v2025_expanded_media_gallery_enabled":false,"all_reviews_widget_v2025_show_store_medals":true,"all_reviews_widget_v2025_show_photo_gallery":true,"all_reviews_widget_v2025_show_review_keywords":false,"all_reviews_widget_v2025_show_ai_summary":false,"all_reviews_widget_v2025_show_ai_summary_bg":false,"all_reviews_widget_v2025_show_review_highlights":false,"all_reviews_widget_v2025_show_review_keywords_in_gray":false,"all_reviews_widget_v2025_add_search_bar":false,"all_reviews_widget_v2025_default_sort_method":"most-recent","all_reviews_widget_v2025_reviews_per_page":10,"all_reviews_widget_v2025_reviews_section_theme":"default","all_reviews_widget_v2025_image_style":"thumbnails","all_reviews_widget_v2025_review_image_ratio":"square","all_reviews_widget_v2025_stars_size":"medium","all_reviews_widget_v2025_verified_badge":"standard_text","all_reviews_widget_v2025_review_title_text_size":"medium","all_reviews_widget_v2025_review_text_size":"medium","all_reviews_widget_v2025_review_text_length":"medium","all_reviews_widget_v2025_number_of_columns_desktop":3,"all_reviews_widget_v2025_carousel_transition_speed":5,"all_reviews_widget_v2025_custom_questions_answers_display":"always","all_reviews_widget_v2025_review_dates":false,"all_reviews_widget_v2025_card_section_size":"small","all_reviews_widget_v2025_show_product_variant":false,"all_reviews_widget_v2025_show_reviewer_avatar":true,"all_reviews_widget_v2025_reviewer_name_as_initial":"","all_reviews_widget_v2025_review_location_show":false,"all_reviews_widget_v2025_location_format":"","all_reviews_widget_v2025_show_country_flag":false,"all_reviews_widget_v2025_widget_thumb":false,"all_reviews_widget_v2025_verified_by_shop_badge_style":"light","all_reviews_widget_v2025_social_share":false,"all_reviews_widget_v2025_social_share_options_order":"Facebook,Twitter,LinkedIn,Pinterest","all_reviews_widget_v2025_pagination_type":"standard","all_reviews_widget_v2025_button_text_color":"#FFFFFF","all_reviews_widget_v2025_text_color":"#000000","all_reviews_widget_v2025_lighter_text_color":"#7B7B7B","all_reviews_widget_v2025_corner_styling":"soft","all_reviews_widget_v2025_title":"Customer reviews","all_reviews_widget_v2025_ai_summary_title":"Customers say about this store","all_reviews_widget_v2025_no_review_text":"كوني أول من يكتب تقييماً","all_reviews_widget_v2025_review_highlights_title":"Review highlights","reviews_grid_widget_show_sample_reviews":false,"reviews_grid_widget_review_selection":"all","reviews_grid_widget_select_products":[],"reviews_grid_widget_show_media_only":false,"reviews_grid_widget_display_order":"media_first","reviews_grid_widget_columns_desktop":3,"reviews_grid_widget_rows_desktop":3,"reviews_grid_widget_columns_mobile":2,"reviews_grid_widget_rows_mobile":6,"reviews_grid_widget_show_stars":true,"reviews_grid_widget_show_reviewer_name":true,"reviews_grid_widget_show_review_title_on_hover_desktop":true,"reviews_grid_widget_corner_styling":"soft","reviews_grid_widget_card_spacing":"medium","reviews_grid_widget_header_text_color":"#000000","reviews_grid_widget_star_and_reviewer_name_color":"#F9F9F9","reviews_grid_widget_overlay_and_background_color":"#000000","reviews_grid_widget_content_color":"#F9F9F9","reviews_grid_widget_header_text":"From our customers","reviews_grid_widget_show_average_rating":true,"platform":"shopify","branding_url":"https://app.judge.me/reviews","branding_text":"Powered by Judge.me","locale":"en","reply_name":"Tighli اللاسلكية","widget_version":"3.0","footer":true,"autopublish":false,"review_dates":false,"enable_custom_form":false,"shop_locale":"en","enable_multi_locales_translations":false,"show_review_title_input":false,"review_verification_email_status":"always","require_verification_before_submit":false,"customer_account_validation_enabled":true,"can_be_branded":false,"reply_name_text":"Tighli اللاسلكية"};

!function(e){window.jdgm=window.jdgm||{},jdgm.CDN_HOST="https://cdnwidget.judge.me/",jdgm.CDN_HOST_ALT="https://cdn2.judge.me/cdn/widget_frontend/",jdgm.API_HOST="https://api.judge.me/",jdgm.CDN_BASE_URL="https://cdn.shopify.com/extensions/019e5099-1de6-7336-964a-9101e667bb29/judgeme-535/assets/",jdgm.CDN_API_HOST="https://cdn.judge.me/",
jdgm.docReady=function(d){(e.attachEvent?"complete"===e.readyState:"loading"!==e.readyState)?
setTimeout(d,0):e.addEventListener("DOMContentLoaded",d)},jdgm.loadCSS=function(d,t,o,a){
!o&&jdgm.loadCSS.requestedUrls.indexOf(d)>=0||(jdgm.loadCSS.requestedUrls.push(d),
(a=e.createElement("link")).rel="stylesheet",a.class="jdgm-stylesheet",a.media="nope!",
a.href=d,a.onload=function(){this.media="all",t&&setTimeout(t)},e.body.appendChild(a))},
jdgm.loadCSS.requestedUrls=[],jdgm.loadJS=function(e,d){var t=new XMLHttpRequest;
t.onreadystatechange=function(){4===t.readyState&&(Function(t.response)(),d&&d(t.response))},
t.open("GET",e),t.onerror=function(){if(e.indexOf(jdgm.CDN_HOST)===0&&jdgm.CDN_HOST_ALT!==jdgm.CDN_HOST){var f=e.replace(jdgm.CDN_HOST,jdgm.CDN_HOST_ALT);jdgm.loadJS(f,d)}},t.send()},jdgm.docReady((function(){(window.jdgmLoadCSS||e.querySelectorAll(
".jdgm-widget, .jdgm-all-reviews-page").length>0)&&(jdgmSettings.widget_load_with_code_splitting?
parseFloat(jdgmSettings.widget_version)>=3?jdgm.loadCSS(jdgm.CDN_BASE_URL+"widget_v3_base.css"):
jdgm.loadCSS(jdgm.CDN_BASE_URL+"widget_base.css"):jdgm.loadCSS(jdgm.CDN_BASE_URL+"shopify_v2.css")
)}))}(document);

(function() {
    var jdgmThemeFixes = {"190186455121":{"html":"","css":".jm-star-rating__font-icon.jm-star-rating__font-icon {\n  font-family: JudgemeStar,monospace !important;\n}\n.jdgm-paginate__first-page.jdgm-paginate__first-page,\n.jdgm-paginate__prev-page.jdgm-paginate__prev-page,\n.jdgm-paginate__next-page.jdgm-paginate__next-page,\n.jdgm-paginate__last-page.jdgm-paginate__last-page {\n  font-family: \"JudgemeIcons\" !important;\n}","js":""}};
    if (!jdgmThemeFixes) return;
    var thisThemeFix = jdgmThemeFixes[Shopify.theme.id];
    if (!thisThemeFix) return;

    if (thisThemeFix.html) {
      document.addEventListener("DOMContentLoaded", function() {
        var htmlDiv = document.createElement('div');
        htmlDiv.classList.add('jdgm-theme-fix-html');
        htmlDiv.innerHTML = thisThemeFix.html;
        document.body.append(htmlDiv);
      });
    };

    if (thisThemeFix.css) {
      var styleTag = document.createElement('style');
      styleTag.classList.add('jdgm-theme-fix-style');
      styleTag.innerHTML = thisThemeFix.css;
      document.head.append(styleTag);
    };

    if (thisThemeFix.js) {
      var scriptTag = document.createElement('script');
      scriptTag.classList.add('jdgm-theme-fix-script');
      scriptTag.innerHTML = thisThemeFix.js;
      document.head.append(scriptTag);
    };
  })();

/**	SealSubs loader,version number: 2.0 */
	(function(){
		var loadScript=function(a,b){var c=document.createElement("script");c.setAttribute("defer", "defer");c.type="text/javascript",c.readyState?c.onreadystatechange=function(){("loaded"==c.readyState||"complete"==c.readyState)&&(c.onreadystatechange=null,b())}:c.onload=function(){b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)};
		// Set variable to prevent the other loader from requesting the same resources
		window.seal_subs_app_block_loader = true;
		appendScriptUrl('ia2je0-1q.myshopify.com');

		// get script url and append timestamp of last change
		function appendScriptUrl(shop) {
			var timeStamp = Math.floor(Date.now() / (1000*1*1));
			var timestampUrl = 'https://app.sealsubscriptions.com/shopify/public/status/shop/'+shop+'.js?'+timeStamp;
			loadScript(timestampUrl, function() {
				// append app script
				if (typeof sealsubscriptions_settings_updated == 'undefined') {
					sealsubscriptions_settings_updated = 'default-by-script';
				}
				
				var locale = '';
				if (typeof window !== 'undefined' && 
					typeof window.Shopify !== 'undefined' && 
					typeof window.Shopify.locale !== 'undefined'
				) {
					locale = window.Shopify.locale;
				}

				var scriptUrl = "https://cdn-app.sealsubscriptions.com/shopify/public/js/sealsubscriptions-main.js?shop="+shop+"&"+sealsubscriptions_settings_updated+`&locale=${locale}`;
				loadScript(scriptUrl, function(){});
			});
		}
	})();

	var SealSubsScriptAppended = true;

// Prevent duplicate initialization if both app embeds are enabled
  if (window.kachingBundlesAppEmbedLoaded) {
    console.warn('[Kaching Bundles] Multiple app embed blocks detected. Please disable one of them. Skipping duplicate initialization.');
  } else {
    window.kachingBundlesAppEmbedLoaded = true;
    window.kachingBundlesEnabled = true;
    window.kachingBundlesInitialized = false;

    // Allow calling kachingBundlesInitialize before the script is loaded
    (() => {
      let shouldInitialize = false;
      let realInitialize = null;

      window.kachingBundlesInitialize = () => {
        if (realInitialize) {
          realInitialize();
        } else {
          shouldInitialize = true;
        }
      };

      Object.defineProperty(window, '__kachingBundlesInitializeInternal', {
        set(fn) {
          realInitialize = fn;
          if (shouldInitialize) {
            shouldInitialize = false;
            fn();
          }
        },
        get() {
          return realInitialize;
        }
      });
    })();
  }

(function(){if ("sendBeacon" in navigator && "performance" in window) {try {var session_token_from_headers = performance.getEntriesByType('navigation')[0].serverTiming.find(x => x.name == '_s').description;} catch {var session_token_from_headers = undefined;}var session_cookie_matches = document.cookie.match(/_shopify_s=([^;]*)/);var session_token_from_cookie = session_cookie_matches && session_cookie_matches.length === 2 ? session_cookie_matches[1] : "";var session_token = session_token_from_headers || session_token_from_cookie || "";function handle_abandonment_event(e) {var entries = performance.getEntries().filter(function(entry) {return /monorail-edge.shopifysvc.com/.test(entry.name);});if (!window.abandonment_tracked && entries.length === 0) {window.abandonment_tracked = true;var currentMs = Date.now();var navigation_start = performance.timing.navigationStart;var payload = {shop_id: 97525497937,url: window.location.href,navigation_start,duration: currentMs - navigation_start,session_token,page_type: "product"};window.navigator.sendBeacon("https://monorail-edge.shopifysvc.com/v1/produce", JSON.stringify({schema_id: "online_store_buyer_site_abandonment/1.1",payload: payload,metadata: {event_created_at_ms: currentMs,event_sent_at_ms: currentMs}}));}}window.addEventListener('pagehide', handle_abandonment_event);}}());

window.__TREKKIE_SHIM_QUEUE = window.__TREKKIE_SHIM_QUEUE || [];

(function(){var wpmLoader=function(){"use strict";return function(e,d,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};if(!Boolean(null==(i=null==(a=window.Shopify)?void 0:a.analytics)?void 0:i.replayQueue)){var a,i;window.Shopify=window.Shopify||{};var t=window.Shopify;t.analytics=t.analytics||{};var s=t.analytics;s.replayQueue=[],s.publish=function(e,d,r){return s.replayQueue.push([e,d,r]),!0};try{self.performance.mark("wpm:start")}catch(e){}var l,u,c,m,p,f,h,g,y,w,v,b,S,P=(u=(l={modern:/Edge?\/(1{2}[4-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(1{2}[4-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(9{2}|\d{3,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(15\.\d+|(1[6-9]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(9{2}|\d{3,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]\d+|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[3-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Android.+Firefox\/(13[5-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[3-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|SamsungBrowser\/([2-9]\d|\d{3,})\.\d+/,legacy:/Edge?\/(1[6-9]|[2-9]\d|\d{3,})\.\d+(\.\d+|)|Firefox\/(5[4-9]|[6-9]\d|\d{3,})\.\d+(\.\d+|)|Chrom(ium|e)\/(5[1-9]|[6-9]\d|\d{3,})\.\d+(\.\d+|)([\d.]+$|.*Safari\/(?![\d.]+ Edge\/[\d.]+$))|(Maci|X1{2}).+ Version\/(10\.\d+|(1[1-9]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(3[89]|[4-9]\d|\d{3,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(10[._]\d+|(1[1-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](13[3-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[5-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[3-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(5\.\d+|([6-9]|\d{2,})\.\d+)|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(3\.\d+|([4-9]|\d{2,})\.\d+)(\.\d+|)/}).modern,c=l.legacy,(m=navigator.userAgent).match(u)?"modern":m.match(c)?"legacy":"unknown"),C="modern"===P?"modern":"legacy",_=(null!=n?n:{modern:"",legacy:""})[C],O=[(p={baseUrl:d,hashVersion:r,buildTarget:C}).baseUrl,"/wpm","/b",p.hashVersion,"modern"===p.buildTarget?"m":"l",".js"].join(""),U=(f={version:r,bundleTarget:P,surface:e.surface,pageUrl:self.location.href,monorailEndpoint:e.monorailEndpoint},h=f.version,g=f.bundleTarget,y=f.surface,w=f.pageUrl,v=f.monorailEndpoint,{emit:function(e){var d=e.status,r=e.errorMsg,n=(new Date).getTime(),o=JSON.stringify({metadata:{event_sent_at_ms:n},events:[{schema_id:"web_pixels_manager_load/3.1",payload:{version:h,bundle_target:g,page_url:w,status:d,surface:y,error_msg:r},metadata:{event_created_at_ms:n}}]});if(!v)return console&&console.warn&&console.warn("[Web Pixels Manager] No Monorail endpoint provided, skipping logging."),!1;try{return self.navigator.sendBeacon.bind(self.navigator)(v,o)}catch(e){}var a=new XMLHttpRequest;try{return a.open("POST",v,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(o),!0}catch(e){return console&&console.warn&&console.warn("[Web Pixels Manager] Got an unhandled error while logging to Monorail."),!1}}});try{o.browserTarget=P,function(e){var d=e.src,r=e.async,n=void 0===r||r,o=e.onload,a=e.onerror,i=e.sri,t=e.scriptDataAttributes,s=void 0===t?{}:t,l=document.createElement("script"),u=document.querySelector("head"),c=document.querySelector("body");if(l.async=n,l.src=d,i&&(l.integrity=i,l.crossOrigin="anonymous"),s)for(var m in s)if(Object.prototype.hasOwnProperty.call(s,m))try{l.dataset[m]=s[m]}catch(e){}if(o&&l.addEventListener("load",o),a&&l.addEventListener("error",a),u)u.appendChild(l);else{if(!c)throw new Error("Did not find a head or body element to append the script");c.appendChild(l)}}({src:O,async:!0,onload:function(){if(!function(){var e,d;return Boolean(null==(d=null==(e=window.Shopify)?void 0:e.analytics)?void 0:d.initialized)}()){var d=window.webPixelsManager.init(e)||void 0;if(d){var r=window.Shopify.analytics;r.replayQueue.forEach(function(e){var r=e[0],n=e[1],o=e[2];d.publishCustomEvent(r,n,o)}),r.replayQueue=[],r.publish=d.publishCustomEvent,r.visitor=d.visitor,r.initialized=!0}}},onerror:function(){return U.emit({status:"failed",errorMsg:"".concat(O," has failed to load")})},sri:(b=_,S=/^sha384-[A-Za-z0-9+/=]+$/,"string"==typeof b&&S.test(b)?_:""),scriptDataAttributes:o}),U.emit({status:"loading"})}catch(e){U.emit({status:"failed",errorMsg:(null==e?void 0:e.message)||"Unknown error"})}}}}();wpmLoader({shopId: 97525497937,storefrontBaseUrl: "https://officialyuri.com",extensionsBaseUrl: "https://extensions.shopifycdn.com/cdn/shopifycloud/web-pixels-manager",monorailEndpoint: "https://monorail-edge.shopifysvc.com/unstable/produce_batch",surface: "storefront-renderer",enabledBetaFlags: ["2dca8a86","d5bdd5d0","5acaffe6","6faea013"],webPixelsConfigList: [{"id":"4322394193","configuration":"{\"shopId\":\"ia2je0-1q.myshopify.com\"}","eventPayloadVersion":"v1","runtimeContext":"STRICT","scriptVersion":"31536d5a2ef62c1887054e49fd58dba0","type":"APP","apiClientId":4845829,"privacyPurposes":["ANALYTICS"],"dataSharingAdjustments":{"protectedCustomerApprovalScopes":["read_customer_address","read_customer_email","read_customer_name","read_customer_personal_data","read_customer_phone"],"dataSharingControls":["share_all_events"]},"dataSharingState":"unrestricted"},{"id":"4246929489","configuration":"{\"accountID\":\"1220658\",\"workspaceId\":\"fcd8505a-42d6-47c5-9105-32604f0ec4ac\",\"projectId\":\"15332193-ac4e-4f7c-898f-e7be76ac533c\"}","eventPayloadVersion":"v1","runtimeContext":"STRICT","scriptVersion":"7f1561d8e89b361a3193f1f545354ae9","type":"APP","apiClientId":5461967,"privacyPurposes":["ANALYTICS"],"dataSharingAdjustments":{"protectedCustomerApprovalScopes":[],"dataSharingControls":["share_all_events"]},"dataSharingState":"unrestricted"},{"id":"3908665425","configuration":"{\"webPixelName\":\"Judge.me\"}","eventPayloadVersion":"v1","runtimeContext":"STRICT","scriptVersion":"34ad157958823915625854214640f0bf","type":"APP","apiClientId":683015,"privacyPurposes":["ANALYTICS"],"dataSharingAdjustments":{"protectedCustomerApprovalScopes":["read_customer_email","read_customer_name","read_customer_personal_data","read_customer_phone"],"dataSharingControls":["share_all_events"]},"dataSharingState":"unrestricted"},{"id":"3853811793","configuration":"{\"config\":\"{\\\"google_tag_ids\\\":[\\\"AW-17928777715\\\",\\\"GT-5NPXN6GK\\\"],\\\"target_country\\\":\\\"ZZ\\\",\\\"gtag_events\\\":[{\\\"type\\\":\\\"begin_checkout\\\",\\\"action_label\\\":\\\"AW-17928777715\\\/lL2ZCP_x__EbEPPfjeVC\\\"},{\\\"type\\\":\\\"search\\\",\\\"action_label\\\":\\\"AW-17928777715\\\/8Ps7CKny__EbEPPfjeVC\\\"},{\\\"type\\\":\\\"view_item\\\",\\\"action_label\\\":[\\\"AW-17928777715\\\/yM-aCKby__EbEPPfjeVC\\\",\\\"MC-DNNC1D3KQM\\\"]},{\\\"type\\\":\\\"purchase\\\",\\\"action_label\\\":[\\\"AW-17928777715\\\/wVAUCPzx__EbEPPfjeVC\\\",\\\"MC-DNNC1D3KQM\\\"]},{\\\"type\\\":\\\"page_view\\\",\\\"action_label\\\":[\\\"AW-17928777715\\\/HpaCCIXy__EbEPPfjeVC\\\",\\\"MC-DNNC1D3KQM\\\"]},{\\\"type\\\":\\\"add_payment_info\\\",\\\"action_label\\\":\\\"AW-17928777715\\\/P-BFCKzy__EbEPPfjeVC\\\"},{\\\"type\\\":\\\"add_to_cart\\\",\\\"action_label\\\":\\\"AW-17928777715\\\/RFTWCILy__EbEPPfjeVC\\\"}],\\\"enable_monitoring_mode\\\":false}\"}","eventPayloadVersion":"v1","runtimeContext":"OPEN","scriptVersion":"f15305aac1e98c5c26a7c80e7bc37bde","type":"APP","apiClientId":1780363,"privacyPurposes":[],"dataSharingAdjustments":{"protectedCustomerApprovalScopes":["read_customer_address","read_customer_email","read_customer_name","read_customer_personal_data","read_customer_phone"],"dataSharingControls":["share_all_events"]},"dataSharingState":"optimized","enabledFlags":["9a3ed68a"]},{"id":"3818684497","configuration":"{\"accountID\":\"603932815196776602\"}","eventPayloadVersion":"v1","runtimeContext":"STRICT","scriptVersion":"d14339b7d591bc9d3dddd1ccc5f3f49f","type":"APP","apiClientId":160740048897,"privacyPurposes":["ANALYTICS","MARKETING","SALE_OF_DATA"],"dataSharingAdjustments":{"protectedCustomerApprovalScopes":[],"dataSharingControls":["share_all_events"]},"dataSharingState":"optimized"},{"id":"3325788241","configuration":"{\"accountID\":\"XXgffd\",\"webPixelConfig\":\"eyJlbmFibGVBZGRlZFRvQ2FydEV2ZW50cyI6IHRydWV9\"}","eventPayloadVersion":"v1","runtimeContext":"STRICT","scriptVersion":"524f6c1ee37bacdca7657a665bdca589","type":"APP","apiClientId":123074,"privacyPurposes":["ANALYTICS","MARKETING"],"dataSharingAdjustments":{"protectedCustomerApprovalScopes":["read_customer_address","read_customer_email","read_customer_name","read_customer_personal_data","read_customer_phone"],"dataSharingControls":["share_all_events"]},"dataSharingState":"unrestricted","enabledFlags":["9a3ed68a"]},{"id":"2948005969","configuration":"{\"shopifyDomain\":\"ia2je0-1q.myshopify.com\"}","eventPayloadVersion":"v1","runtimeContext":"STRICT","scriptVersion":"37a769b5b668b60cb0291a05db7e9499","type":"APP","apiClientId":2935586817,"privacyPurposes":[],"dataSharingAdjustments":{"protectedCustomerApprovalScopes":["read_customer_email","read_customer_personal_data"],"dataSharingControls":["share_all_events"]},"dataSharingState":"unrestricted"},{"id":"2947317841","configuration":"{\"pixel_id\":\"794943593121569\",\"pixel_type\":\"facebook_pixel\"}","eventPayloadVersion":"v1","runtimeContext":"OPEN","scriptVersion":"d72ab942028ee4f6bccc581083be605e","type":"APP","apiClientId":2329312,"privacyPurposes":["ANALYTICS","MARKETING","SALE_OF_DATA"],"dataSharingAdjustments":{"protectedCustomerApprovalScopes":["read_customer_address","read_customer_email","read_customer_name","read_customer_personal_data","read_customer_phone"],"dataSharingControls":["share_all_events"]},"dataSharingState":"unrestricted","enabledFlags":["9a3ed68a"]},{"id":"263487569","eventPayloadVersion":"1","runtimeContext":"LAX","scriptVersion":"1","type":"CUSTOM","privacyPurposes":["ANALYTICS","MARKETING","SALE_OF_DATA"],"name":"[V]Google Puchase - Secondary "},{"id":"278069329","eventPayloadVersion":"1","runtimeContext":"LAX","scriptVersion":"1","type":"CUSTOM","privacyPurposes":["ANALYTICS","MARKETING","SALE_OF_DATA"],"name":"[V] Wetracked"},{"id":"shopify-app-pixel","configuration":"{}","eventPayloadVersion":"v1","runtimeContext":"STRICT","scriptVersion":"0460","apiClientId":"shopify-pixel","type":"APP","privacyPurposes":["ANALYTICS","MARKETING"]},{"id":"shopify-custom-pixel","eventPayloadVersion":"v1","runtimeContext":"LAX","scriptVersion":"0460","apiClientId":"shopify-pixel","type":"CUSTOM","privacyPurposes":["ANALYTICS","MARKETING"]}],isMerchantRequest: false,initData: {"shop":{"name":"Tighli اللاسلكية","paymentSettings":{"currencyCode":"USD"},"myshopifyDomain":"ia2je0-1q.myshopify.com","countryCode":"US","storefrontUrl":"https:\/\/officialyuri.com"},"customer":null,"cart":null,"checkout":null,"productVariants":[{"price":{"amount":45.0,"currencyCode":"USD"},"product":{"title":"مضخة الحليب اللاسلكية Tighli","vendor":"YURI Beauty","id":"15590201819217","untranslatedTitle":"مضخة الحليب اللاسلكية Tighli","url":"\/products\/collagen-night-wrapping-mask","type":""},"id":"58337689632849","image":{"src":"tighli-assets/product-main.jpg"},"sku":"J20300-Customized","title":"Default Title","untranslatedTitle":"Default Title"}],"products":null,"purchasingCompany":null,"page":null},},"https://officialyuri.com/cdn","6aad4977wba422492pcfc93db9m5341e0bd",{"modern":"","legacy":""},{"trekkieShim":true,"pageType":"product","resourceId":"15590201819217","shopId":"97525497937","storefrontBaseUrl":"https:\/\/officialyuri.com","extensionBaseUrl":"https:\/\/extensions.shopifycdn.com\/cdn\/shopifycloud\/web-pixels-manager","surface":"storefront-renderer","enabledBetaFlags":"[\"2dca8a86\", \"d5bdd5d0\", \"5acaffe6\", \"6faea013\"]","isMerchantRequest":"false","hashVersion":"6aad4977wba422492pcfc93db9m5341e0bd","publish":"custom","events":"[[\"page_viewed\",{}],[\"product_viewed\",{\"productVariant\":{\"price\":{\"amount\":45.0,\"currencyCode\":\"USD\"},\"product\":{\"title\":\"مضخة الحليب اللاسلكية Tighli\",\"vendor\":\"YURI Beauty\",\"id\":\"15590201819217\",\"untranslatedTitle\":\"مضخة الحليب اللاسلكية Tighli\",\"url\":\"\/products\/collagen-night-wrapping-mask\",\"type\":\"\"},\"id\":\"58337689632849\",\"image\":{\"src\":\"tighli-assets/product-main.jpg"},\"sku\":\"J20300-Customized\",\"title\":\"Default Title\",\"untranslatedTitle\":\"Default Title\"}}]]"});})();

window.ShopifyAnalytics = window.ShopifyAnalytics || {};
  window.ShopifyAnalytics.meta = window.ShopifyAnalytics.meta || {};
  window.ShopifyAnalytics.meta.currency = 'USD';
  var meta = {"product":{"id":15590201819217,"gid":"gid:\/\/shopify\/Product\/15590201819217","vendor":"YURI Beauty","type":"","handle":"collagen-night-wrapping-mask","variants":[{"id":58337689632849,"price":4500,"name":"مضخة الحليب اللاسلكية Tighli","public_title":null,"sku":"J20300-Customized"}],"remote":false},"page":{"pageType":"product","resourceType":"product","resourceId":15590201819217,"requestId":"8b7dd214-1773-4779-9628-ad28c93828e3-1779801899"}};
  for (var attr in meta) {
    window.ShopifyAnalytics.meta[attr] = meta[attr];
  }

(function () {
    var customDocumentWrite = function(content) {
      var jquery = null;

      if (window.jQuery) {
        jquery = window.jQuery;
      } else if (window.Checkout && window.Checkout.$) {
        jquery = window.Checkout.$;
      }

      if (jquery) {
        jquery('body').append(content);
      }
    };

    var hasLoggedConversion = function(token) {
      if (token) {
        return document.cookie.indexOf('loggedConversion=' + token) !== -1;
      }
      return false;
    }

    var setCookieIfConversion = function(token) {
      if (token) {
        var twoMonthsFromNow = new Date(Date.now());
        twoMonthsFromNow.setMonth(twoMonthsFromNow.getMonth() + 2);

        document.cookie = 'loggedConversion=' + token + '; expires=' + twoMonthsFromNow;
      }
    }

    var trekkie = window.ShopifyAnalytics.lib = window.trekkie = window.trekkie || [];
    window.ShopifyAnalytics.lib.trekkie = window.trekkie;
    if (trekkie.integrations) {
      return;
    }
    trekkie.methods = [
      'identify',
      'page',
      'ready',
      'track',
      'trackForm',
      'trackLink'
    ];
    trekkie.factory = function(method) {
      return function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(method);
        trekkie.push(args);
        if (window.__TREKKIE_SHIM_QUEUE && (method == 'track' || method == 'page')) {
          try {
            window.__TREKKIE_SHIM_QUEUE.push({
              from: 'trekkie-stub',
              method: method,
              args: args.slice(1)
            });
          } catch (e) {
            // no-op
          }
        }
        return trekkie;
      };
    };
    for (var i = 0; i < trekkie.methods.length; i++) {
      var key = trekkie.methods[i];
      trekkie[key] = trekkie.factory(key);
    }
    trekkie.load = function(config) {
      trekkie.config = config || {};
      trekkie.config.initialDocumentCookie = document.cookie;
      var first = document.getElementsByTagName('script')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.onerror = function(e) {
  var scriptFallback = document.createElement('script');
  scriptFallback.type = 'text/javascript';
  scriptFallback.onerror = function(error) {
          var Monorail = {
      produce: function produce(monorailDomain, schemaId, payload) {
        var currentMs = new Date().getTime();
        var event = {
          schema_id: schemaId,
          payload: payload,
          metadata: {
            event_created_at_ms: currentMs,
            event_sent_at_ms: currentMs
          }
        };
        return Monorail.sendRequest("https://" + monorailDomain + "/v1/produce", JSON.stringify(event));
      },
      sendRequest: function sendRequest(endpointUrl, payload) {
        // Try the sendBeacon API
        if (window && window.navigator && typeof window.navigator.sendBeacon === 'function' && typeof window.Blob === 'function' && !Monorail.isIos12()) {
          var blobData = new window.Blob([payload], {
            type: 'text/plain'
          });

          if (window.navigator.sendBeacon(endpointUrl, blobData)) {
            return true;
          } // sendBeacon was not successful

        } // XHR beacon

        var xhr = new XMLHttpRequest();

        try {
          xhr.open('POST', endpointUrl);
          xhr.setRequestHeader('Content-Type', 'text/plain');
          xhr.send(payload);
        } catch (e) {
          console.log(e);
        }

        return false;
      },
      isIos12: function isIos12() {
        return window.navigator.userAgent.lastIndexOf('iPhone; CPU iPhone OS 12_') !== -1 || window.navigator.userAgent.lastIndexOf('iPad; CPU OS 12_') !== -1;
      }
    };
    Monorail.produce('monorail-edge.shopifysvc.com',
      'trekkie_storefront_load_errors/1.1',
      {shop_id: 97525497937,
      theme_id: 194666659921,
      app_name: "storefront",
      context_url: window.location.href,
      source_url: "//officialyuri.com/cdn/s/trekkie.storefront.f7140b8b25ae1195cf346a36a85e3e4bcf46adb3.min.js"});

  };
  scriptFallback.async = true;
  scriptFallback.src = '//officialyuri.com/cdn/s/trekkie.storefront.f7140b8b25ae1195cf346a36a85e3e4bcf46adb3.min.js';
  first.parentNode.insertBefore(scriptFallback, first);
};
script.async = true;
script.src = '//officialyuri.com/cdn/s/trekkie.storefront.f7140b8b25ae1195cf346a36a85e3e4bcf46adb3.min.js';
first.parentNode.insertBefore(script, first);

    };
    trekkie.load(
      {"Trekkie":{"appName":"storefront","development":false,"defaultAttributes":{"shopId":97525497937,"isMerchantRequest":null,"themeId":194666659921,"themeCityHash":"254423990824621167","contentLanguage":"en","currency":"USD","eventMetadataId":"0960b541-4bb0-4209-ac29-25a5208b72de"},"isServerSideCookieWritingEnabled":true,"monorailRegion":"shop_domain","enabledBetaFlags":["b5387b81","d5bdd5d0"]},"Session Attribution":{},"S2S":{"facebookCapiEnabled":true,"source":"trekkie-storefront-renderer","apiClientId":580111}}
    );

    var loaded = false;
    trekkie.ready(function() {
      if (loaded) return;
      loaded = true;

      window.ShopifyAnalytics.lib = window.trekkie;

      var originalDocumentWrite = document.write;
      document.write = customDocumentWrite;
      try { window.ShopifyAnalytics.merchantGoogleAnalytics.call(this); } catch(error) {};
      document.write = originalDocumentWrite;

      window.ShopifyAnalytics.lib.page(null,{"pageType":"product","resourceType":"product","resourceId":15590201819217,"requestId":"8b7dd214-1773-4779-9628-ad28c93828e3-1779801899","shopifyEmitted":true});

      var match = window.location.pathname.match(/checkouts\/(.+)\/(thank_you|post_purchase)/)
      var token = match? match[1]: undefined;
      if (!hasLoggedConversion(token)) {
        setCookieIfConversion(token);
        window.ShopifyAnalytics.lib.track("Viewed Product",{"currency":"USD","variantId":58337689632849,"productId":15590201819217,"productGid":"gid:\/\/shopify\/Product\/15590201819217","name":"مضخة الحليب اللاسلكية Tighli","price":"45.00","sku":"J20300-Customized","brand":"YURI Beauty","variant":null,"category":"","nonInteraction":true,"remote":false},undefined,undefined,{"shopifyEmitted":true});
      window.ShopifyAnalytics.lib.track("monorail:\/\/trekkie_storefront_viewed_product\/1.1",{"currency":"USD","variantId":58337689632849,"productId":15590201819217,"productGid":"gid:\/\/shopify\/Product\/15590201819217","name":"مضخة الحليب اللاسلكية Tighli","price":"45.00","sku":"J20300-Customized","brand":"YURI Beauty","variant":null,"category":"","nonInteraction":true,"remote":false,"referer":"https:\/\/officialyuri.com\/products\/collagen-night-wrapping-mask"});
      }
    });

    var eventsListenerScript = document.createElement('script');
    eventsListenerScript.async = true;
    eventsListenerScript.src = "//officialyuri.com/cdn/shopifycloud/storefront/assets/shop_events_listener-4e26a9ce.js";
    document.getElementsByTagName('head')[0].appendChild(eventsListenerScript);
})();

window.ShopifyAnalytics = window.ShopifyAnalytics || {};window.ShopifyAnalytics.performance = window.ShopifyAnalytics.performance || {};(function () {const LONG_FRAME_THRESHOLD = 50;const longAnimationFrames = [];let activeRafId = null;function collectLongFrames() {let previousTime = null;function rafMonitor(now) {if (activeRafId === null) {return;}const delta = now - previousTime;if (delta > LONG_FRAME_THRESHOLD) {longAnimationFrames.push({startTime: previousTime,endTime: now,});}previousTime = now;activeRafId = requestAnimationFrame(rafMonitor);}previousTime = performance.now();activeRafId = requestAnimationFrame(rafMonitor);}if (!PerformanceObserver.supportedEntryTypes.includes('long-animation-frame')) {collectLongFrames();const timeoutId = setTimeout(() => {cancelAnimationFrame(activeRafId);}, 10_000);window.ShopifyAnalytics.performance.getLongAnimationFrames = function(stopCollection = false) {if (stopCollection) {clearTimeout(timeoutId);cancelAnimationFrame(activeRafId);}return longAnimationFrames;};}})();

{}

function initUpsellOnCart() {
        const parser = new DOMParser();

        const formIdList = [
          "cart-upsell-form-1",
          "cart-upsell-form-2",
          "cart-upsell-form-3",
          "cart-upsell-form-4",
          "cart-upsell-form-5",
        ];

        formIdList.forEach((_formId) => {
          const form = document.getElementById(_formId);
          if (form) {
              // Setup variant selection
              const selects = form.querySelectorAll('select[name^="options["]');
              const hiddenIdInput = form.querySelector('input[name="id"]');
              const productJson = JSON.parse(form.querySelector("#upsell-product-json").text);

              const updateVariantId = () => {
                  let selectedOptions = [];
                  selects.forEach(select => {
                    selectedOptions.push(select.value);
                  });
                  
                  if (productJson.variants) {
                  const selectedVariant = productJson.variants.find(variant => {
                      return selectedOptions.every((option, index) => {
                      return variant.options[index] === option;
                      });
                  });

                  if (selectedVariant) {
                      hiddenIdInput.value = selectedVariant.id;
                      // Update button text with new variant price
                      const buttonTextElement = form.querySelector('.upsell-button-text');
                      if (buttonTextElement && selectedVariant.price) {
                      // Use Shopify's money format for the current market/currency
                      const currentCurrency = '';
                      
                      // Convert price from cents to currency units
                      const price = selectedVariant.price / 100;
                      
                      // Format based on current currency
                      let formattedPrice;
                      if (currentCurrency === 'USD') {
                          // US format: $9.95
                          formattedPrice = '$' + price.toFixed(2);
                      } else if (currentCurrency === 'EUR') {
                          // European format: €9,95
                          formattedPrice = '€' + price.toFixed(2).replace('.', ',');
                      } else if (currentCurrency === 'GBP') {
                          // British format: £9.95
                          formattedPrice = '£' + price.toFixed(2);
                      } else if (currentCurrency === 'CAD') {
                          // Canadian format: $9.95 CAD
                          formattedPrice = '$' + price.toFixed(2) + ' CAD';
                      } else {
                          // Generic fallback: CURRENCY 9.95
                          formattedPrice = currentCurrency + ' ' + price.toFixed(2);
                      }
                      
                      // Wrap price in span with price color
                      buttonTextElement.innerHTML = '+<span class="upsell-price" style="color: #FFFFFF">' + formattedPrice + '</span>';
                      }
                  }
                  }
              };

              selects.forEach(select => {
                  select.addEventListener('change', updateVariantId);
              });
              
              // Initialize
              if (selects.length > 0) {
                  updateVariantId();
              }
          }
        });

        const cartDrawerContainer = document.querySelector("cart-drawer");
        const submitButtonList = document.querySelectorAll(
          '.upsell-product-container button[name="upsell-add"]'
        );

        submitButtonList.forEach((submitButton) => {
          submitButton.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            const form = submitButton.closest(".upsell-form");

            const addButton = form.querySelector(`.upsell-add-button`);
            const originalButtonText = addButton.querySelector(
              ".upsell-button-text"
            ).textContent;

            // Show loading state - replace text with spinner
            addButton.innerHTML = '<span class="button-spinner"></span>';
            addButton.classList.add("is-loading");
            addButton.disabled = true;

            // Get the variant ID
            const hiddenIdInput = form.querySelector('input[name="id"]');
            const variantId = hiddenIdInput.value;

            try {
              // طلب الآن (التوصيل فابور) using fetch API
              fetch(`${window.routes.cart_add_url}.js`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({
                  items: [
                    {
                      id: variantId,
                      quantity: 1,
                    },
                  ],
                }),
              })
                .then((response) => {
                  if (!response.ok) {
                    return response.json().then((errorData) => {
                      throw new Error(
                        `Error ${response.status}: ${
                          errorData.description || response.statusText
                        }`
                      );
                    });
                  }
                  return response.json();
                })
                .then((data) => {
                  // Success - restore button content properly
                  const successText = null;

                  addButton.innerHTML =
                    '<span class="upsell-button-text">' +
                    (successText ?? originalButtonText) +
                    "</span>";
                  addButton.classList.remove("is-loading");
                  addButton.classList.add("upsell-add-success");

                  setTimeout(() => {
                    addButton.innerHTML = '<span class="upsell-button-text">' +
                    originalButtonText +
                    "</span>";
                  }, 2000);

                  // Update cart count and drawer (existing logic here)
                  if (typeof window.updateCartCount === "function") {
                    window.updateCartCount();
                  }
                  if (typeof window.refreshCart === "function") {
                    window.refreshCart();
                  }
                  document.dispatchEvent(new CustomEvent("cart:refresh"));
                  document.dispatchEvent(new CustomEvent("cart:update"));
                  if (
                    typeof window.THEME !== "undefined" &&
                    window.THEME.updateCartCount
                  ) {
                    window.THEME.updateCartCount();
                  } else if (typeof window.refreshMiniCart === "function") {
                    window.refreshMiniCart();
                  }

                  fetch(routes.cart_url + "?view=drawer")
                    .then((response) => response.text())
                    .then((html) => {
                      const parsedCartHtml = parser.parseFromString(
                        html,
                        "text/html"
                      );
                      const newCartDrawer =
                        parsedCartHtml.querySelector("#CartDrawer");
                      if (cartDrawerContainer && newCartDrawer) {
                        updateCartDrawer(cartDrawerContainer, newCartDrawer);
                      }
                    });

                  // Reset button after 2 seconds
                  setTimeout(() => {
                    addButton.disabled = false;
                    addButton.classList.remove("upsell-add-success");
                  }, 2000);
                })
                .catch((error) => {
                  console.error("طلب الآن (التوصيل فابور) error:", error);
                  addButton.innerHTML =
                    '<span class="upsell-button-text">' +
                    originalButtonText +
                    "</span>";
                  addButton.classList.remove("is-loading");
                  addButton.classList.add("upsell-add-error");

                  // Reset button after 2 seconds
                  setTimeout(() => {
                    addButton.disabled = false;
                    addButton.classList.remove("upsell-add-error");
                  }, 2000);
                });
            } catch (err) {
              console.error("Synchronous error in form submission:", err);
              addButton.innerHTML =
                '<span class="upsell-button-text">' + originalButtonText + "</span>";
              addButton.classList.remove("is-loading");
              addButton.disabled = false;
            }

            return false; // Explicitly return false to be absolutely sure
          });
        });

        const sliderContainer = document.querySelector('.upsell_slider');
        if (!sliderContainer) return;

        const slider = sliderContainer.querySelector('.upsell_block_container');
        const dotsContainer = sliderContainer.querySelector('.dots-and-arrows');
        const dots = dotsContainer.querySelectorAll('.slide_item');
        const prevArrow = dotsContainer.querySelector('#slide-arrow-prev');
        const nextArrow = dotsContainer.querySelector('#slide-arrow-next');
        
        if (!slider || !dotsContainer || !prevArrow || !nextArrow) return;

        let slideWidth = 0;

        const calculateSlideWidth = () => {
          const firstSlide = slider.querySelector('.upsell-product-container');
          if (firstSlide) {
            slideWidth = firstSlide.offsetWidth;
          }
        };

        const updateDots = () => {
          calculateSlideWidth();
          if (slideWidth === 0) return;

          const activeIndex = Math.round(slider.scrollLeft / slideWidth);
          dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
          });
        };

        // Use Intersection Observer to run logic only when cart is visible
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            calculateSlideWidth();
            updateDots();
          }
        }, { threshold: 0.1 });

        const cartDrawer = document.querySelector('cart-drawer');
        if (cartDrawer) {
          observer.observe(cartDrawer);
        }

        slider.addEventListener('scroll', updateDots);
        window.addEventListener('resize', updateDots);

        dots.forEach((dot, index) => {
          dot.addEventListener('click', () => {
            if (slideWidth === 0) calculateSlideWidth();
            slider.scrollTo({
              left: index * slideWidth,
              behavior: 'smooth'
            });
          });
        });

        prevArrow.addEventListener('click', () => {
          if (slideWidth === 0) calculateSlideWidth();
          slider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        });

        nextArrow.addEventListener('click', () => {
          if (slideWidth === 0) calculateSlideWidth();
          slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
        });

        const slideItems = document.querySelectorAll(".slide_item");
        // Optional function to update active dot styling
        function updateActiveDot(activeSlide) {
          slideItems.forEach((item) => {
            if (parseInt(item.getAttribute("data-slide")) === activeSlide) {
              item.classList.add("active");
            } else {
              item.classList.remove("active");
            }
          });
        }

        // Select the slider container
        const upsellContainer = document.querySelector(".upsell_block_container");
        if (!upsellContainer) return;
        // Add click event to each dot
        slideItems.forEach((item) => {
          item.addEventListener("click", function () {
            const slideIndex = parseInt(this.getAttribute("data-slide")) - 1;
            // Calculate scroll position
            const scrollPosition = slideIndex * slideWidth;
            // Smooth scroll to the selected slide
            sliderContainer.scrollTo({
              left: scrollPosition,
              behavior: "smooth",
            });
            // Optional: Update active dot styling
            updateActiveDot(slideIndex + 1); // Convert back to 1-based for data-slide
          });
        });
      }

 
  function detectDiscountWrap() {
    const container = document.querySelector('.cart-drawer .discount_price-container');
    const discount = container?.querySelector('.discount_discount-value');
    const price = container?.querySelector('.totals__total-value');

    if (!container || !discount || !price) return;
    const discountTop = discount.getBoundingClientRect().top;
    const priceTop = price.getBoundingClientRect().top;
    console.log(discountTop, priceTop);
    if (discountTop + 5 < priceTop) {
      container.classList.add('wrap');
    } else {
      container.classList.remove('wrap');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    initUpsellOnCart();
    detectDiscountWrap();
  });

window.enableAutoplay = null;

// Make translations available to JS
        window.variantStrings = window.variantStrings || {};
        window.variantStrings.addToCart = "طلب الآن (التوصيل فابور)";
        window.variantStrings.soldOut = "Sold out";
        window.variantStrings.adding = "Translation missing: en.sections.add_to_cart.adding_text";
        window.variantStrings.added = "Translation missing: en.sections.add_to_cart.added_text";

        var addToCartButtonText = "طلب الآن (التوصيل فابور)"
        var showPriceButton = false

var parser = new DOMParser();
  var originPrice = '450 درهم';
  const currency = window.Shopify?.currency?.active ?? 'USD';

  const formId = 'product-form-template--28684899876945__main';
  const form = document.getElementById(formId);

  function formatMoney(newMoney) {
    const originPriceNumber = originPrice.replace(/[^0-9.,]/g, '');
    return `${originPrice.replace(originPriceNumber, newMoney)} ${currency}`;
  }
  function formatMoneyWithoutSuffix(newMoney) {
    const originPriceNumber = originPrice.replace(/[^0-9.,]/g, '');
    return `${originPrice.replace(originPriceNumber, newMoney)}`;
  }

  const quantityElems = form.querySelectorAll('input[type="hidden"][name="quantity"]');
  const addQuantityElem = (quantityVal) => {
    const curForm = document.getElementById(formId);
    const quantityElem = document.createElement('input');
    quantityElem.setAttribute('type', 'hidden');
    quantityElem.setAttribute('name', 'quantity');
    quantityElem.setAttribute('value', quantityVal);
    curForm.appendChild(quantityElem);
  };

document.addEventListener('DOMContentLoaded', function() {
    (function() {
      // Initialize slider functionality for section template--28684899876945__before_after_comparison_dg6PAy
      let sliderPosition = 50; // Start position from settings
      let isDragging = false;
      let touchStartX = 0;
      let touchStartY = 0;
      let touchStartTime = 0;
      let hasMovedHorizontally = false;
      let isScrolling = null;
      
      // Get DOM elements
      const container = document.getElementById('sliderContainertemplate--28684899876945__before_after_comparison_dg6PAy');
      const beforeImage = document.getElementById('beforeImagetemplate--28684899876945__before_after_comparison_dg6PAy');
      const sliderLine = document.getElementById('sliderLinetemplate--28684899876945__before_after_comparison_dg6PAy');
      const sliderButton = document.getElementById('sliderButtontemplate--28684899876945__before_after_comparison_dg6PAy');
      
      if (!container || !beforeImage || !sliderLine || !sliderButton) return;
      
      // Update slider position
      function updateSliderPosition(percentage) {
        // Clamp percentage between 0 and 100
        percentage = Math.max(0, Math.min(100, percentage));
        sliderPosition = percentage;
        
        // Update elements
        beforeImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        sliderLine.style.left = percentage + '%';
        sliderButton.style.left = percentage + '%';
        
        // Force reflow to ensure immediate update
        sliderButton.offsetLeft;
        sliderLine.offsetLeft;
      }
      
      // Get mouse/touch position relative to container
      function getPositionFromEvent(e, container) {
        const rect = container.getBoundingClientRect();
        const clientX = e.type && e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const offsetX = clientX - rect.left;
        return Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
      }
      
      // Reset touch state
      function resetTouchState() {
        isDragging = false;
        touchStartX = 0;
        touchStartY = 0;
        touchStartTime = 0;
        hasMovedHorizontally = false;
        isScrolling = null;
        sliderButton.classList.remove('dragging');
        sliderButton.style.transition = '';
      }
      
      // Mouse events
      function handleMouseDown(e) {
        e.preventDefault();
        isDragging = true;
        sliderButton.classList.add('dragging');
        sliderButton.style.transition = 'none';
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }
      
      function handleMouseMove(e) {
        if (!isDragging) return;
        const percentage = getPositionFromEvent(e, container);
        updateSliderPosition(percentage);
      }
      
      function handleMouseUp() {
        isDragging = false;
        sliderButton.classList.remove('dragging');
        sliderButton.style.transition = '';
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      }
      
      // Touch events - completely rewritten for better mobile experience
      function handleTouchStart(e) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const touchX = touch.clientX - rect.left;
        const touchY = touch.clientY - rect.top;
        
        // Check if touch is within container bounds
        if (touchX < 0 || touchX > rect.width || touchY < 0 || touchY > rect.height) {
          return;
        }
        
        // Reset state
        resetTouchState();
        
        // Set initial touch values
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        touchStartTime = Date.now();
        isDragging = true;
        isScrolling = null;
        hasMovedHorizontally = false;
        
        sliderButton.classList.add('dragging');
        sliderButton.style.transition = 'none';
        
        // Add touch event listeners
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd, { passive: true });
        document.addEventListener('touchcancel', handleTouchCancel, { passive: true });
      }
      
      function handleTouchMove(e) {
        if (!isDragging) return;
        
        const touch = e.touches[0];
        const deltaX = touch.clientX - touchStartX;
        const deltaY = touch.clientY - touchStartY;
        const absDeltaX = Math.abs(deltaX);
        const absDeltaY = Math.abs(deltaY);
        
        // Determine scroll direction on first significant movement
        if (isScrolling === null && (absDeltaX > 5 || absDeltaY > 5)) {
          isScrolling = absDeltaY > absDeltaX;
        }
        
        // If user is scrolling vertically, cancel slider interaction
        if (isScrolling) {
          resetTouchState();
          document.removeEventListener('touchmove', handleTouchMove);
          document.removeEventListener('touchend', handleTouchEnd);
          document.removeEventListener('touchcancel', handleTouchCancel);
          return;
        }
        
        // If moving horizontally, prevent default scrolling and update slider
        if (absDeltaX > 5) {
          e.preventDefault();
          hasMovedHorizontally = true;
          const percentage = getPositionFromEvent(e, container);
          updateSliderPosition(percentage);
        }
      }
      
      function handleTouchEnd(e) {
        if (!isDragging) return;
        
        // Clean up event listeners
          document.removeEventListener('touchmove', handleTouchMove);
          document.removeEventListener('touchend', handleTouchEnd);
        document.removeEventListener('touchcancel', handleTouchCancel);
        
        // If it was a quick tap without horizontal movement, treat as click
        const touchDuration = Date.now() - touchStartTime;
        if (touchDuration < 200 && !hasMovedHorizontally && !isScrolling) {
          const percentage = getPositionFromEvent(e.changedTouches[0], container);
          updateSliderPosition(percentage);
        }
        
        resetTouchState();
      }
      
      function handleTouchCancel() {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
        document.removeEventListener('touchcancel', handleTouchCancel);
        resetTouchState();
      }
      
      // Container click/tap events
      function handleContainerClick(e) {
        // Don't handle if clicking on slider button
        if (e.target === sliderButton || sliderButton.contains(e.target)) return;
        
        // Don't handle if this was part of a drag gesture
        if (hasMovedHorizontally) return;
        
        const percentage = getPositionFromEvent(e, container);
        updateSliderPosition(percentage);
      }
      
      // Attach event listeners
      sliderButton.addEventListener('mousedown', handleMouseDown);
      sliderButton.addEventListener('touchstart', handleTouchStart, { passive: true });
      
      container.addEventListener('mousedown', function(e) {
        if (e.target === sliderButton || sliderButton.contains(e.target)) return;
        handleMouseDown(e);
      });
      
      container.addEventListener('touchstart', function(e) {
        if (e.target === sliderButton || sliderButton.contains(e.target)) return;
        handleTouchStart(e);
      }, { passive: true });
      
      container.addEventListener('click', handleContainerClick);
      
      // Initialize position
      updateSliderPosition(50);
    })();
  });

// Init function for scroll to first section functionality (Image with Text buttons)
  function initImageTextScrollToFirst() {
    try {
      // Handle scroll-to-first-section functionality for image with text buttons
      const scrollToFirstButtons = document.querySelectorAll('.image-text-scroll-to-first[data-scroll-to-first-section]');
      console.log('🎯 Image with Text: Found ' + scrollToFirstButtons.length + ' scroll-to-first buttons');
      
      scrollToFirstButtons.forEach(button => {
        button.addEventListener('click', function(e) {
          e.preventDefault();
          
          console.log('🎯 Image with Text: Scrolling to first section...');
          
          // Find the first section on the page (excluding header/navigation)
          const selectors = [
            // Most common first section patterns
            'main section:first-of-type',
            '.main-content section:first-of-type',
            '.page-content section:first-of-type',
            
            // Shopify section patterns
            '.shopify-section:not([data-section-type="header"]):not([data-section-type="announcement-bar"])',
            'section.shopify-section:not([data-section-type="header"])',
            
            // General section patterns
            'main > *:first-child',
            '.content section:first-of-type',
            'section:not(header):not([role="banner"])',
            
            // Fallback to any section
            'section:first-of-type',
            '[data-section-type]:not([data-section-type="header"])',
            
            // Last resort - any content element
            'main > div:first-child',
            '.main > *:first-child'
          ];
          
          let targetElement = null;
          let usedSelector = '';
          
          for (const selector of selectors) {
            try {
              const elements = document.querySelectorAll(selector);
              if (elements.length > 0) {
                targetElement = elements[0];
                usedSelector = selector;
                console.log(`✅ Found target using selector: ${usedSelector}`, targetElement);
                break;
              }
            } catch (error) {
              console.warn(`❌ Invalid selector: ${selector}`, error);
            }
          }
          
          if (targetElement) {
            // Calculate offset for fixed headers
            const headerHeight = document.querySelector('header')?.offsetHeight || 0;
            const stickyHeader = document.querySelector('.sticky-header, .header-sticky, [style*="position: fixed"]')?.offsetHeight || 0;
            const adminBarHeight = document.querySelector('#admin_bar_iframe, .admin-bar')?.offsetHeight || 0;
            const announcementBar = document.querySelector('.announcement-bar, .promo-bar')?.offsetHeight || 0;
            
            const offset = Math.max(headerHeight, stickyHeader) + adminBarHeight + announcementBar + 20;
            
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - offset;
            
            window.scrollTo({
              top: Math.max(0, offsetPosition),
              behavior: 'smooth'
            });
            
            console.log(`✅ Image with Text: Scrolled to first section using selector: ${usedSelector}`);
            
            // Optional: Add visual highlight to show successful targeting
            targetElement.style.transition = 'all 0.3s ease';
            targetElement.style.transform = 'scale(1.01)';
            setTimeout(() => {
              targetElement.style.transform = 'scale(1)';
            }, 300);
            
          } else {
            console.warn('⚠️ Image with Text: No first section found, falling back to scroll to top');
            // Fallback: scroll to top if no target found
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
        });
      });
    } catch (error) {
      console.error('❌ Error initializing image with text scroll to first:', error);
    }
  }

  // Init function for scroll to product functionality
  function initScrollToProduct() {
    try {
      // Handle smooth scrolling for product links
      const scrollButtons = document.querySelectorAll('.js-scroll-to-products, [data-scroll-to-product="true"]');
      console.log('Found ' + scrollButtons.length + ' product scroll buttons');
      
      if (scrollButtons.length === 0) return;
      
      scrollButtons.forEach(button => {
        button.addEventListener('click', function(e) {
          try {
            console.log('Button clicked: ', this);
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            console.log('Target ID: ', targetId);
            let targetElement = document.querySelector(targetId);
            console.log('Initial target element found: ', targetElement);
            
            if (targetElement) {
              // Scroll to the target element with smooth behavior
              console.log('Scrolling to specific target: ', targetElement);
              targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            } else {
              // Try various common product section selectors if the specific ID wasn't found
              const productSelectors = [
                // Main product selectors
                '#MainProduct',
                '#shopify-section-product-template',
                '#shopify-section-product',
                '#product-section',
                '.product-section',
                // Fallback to any product-related elements
                '.product-template',
                '.product-container',
                '.product-main',
                '.product',
                '[data-section-type="product"]',
                '[data-section-id*="product"]'
              ];
              
              console.log('Trying fallback selectors: ', productSelectors);
              
              // Try each selector until we find a match
              for (const selector of productSelectors) {
                targetElement = document.querySelector(selector);
                if (targetElement) {
                  console.log('Found product element with selector: ', selector);
                  targetElement.scrollIntoView({
                    behavior: 'smooth', 
                    block: 'start'
                  });
                  return; // Exit once we've found and scrolled to a product element
                }
              }
              
              console.log('No product selectors found, trying main content');
              
              // Final fallback: if no product section is found, try scrolling to the main content area
              targetElement = document.querySelector('main') || document.querySelector('#MainContent');
              if (targetElement) {
                console.log('Scrolling to main content: ', targetElement);
                targetElement.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              } else {
                console.log('No scrollable element found');
              }
            }
          } catch (err) {
            console.error('Error in scroll button click handler:', err);
          }
        });
      });
    } catch (err) {
      console.error('Error initializing scroll to product functionality:', err);
    }
  }

  // Enhanced Accordion functionality with debugging
  function initAccordions() {
    console.log('Initializing accordions...');
    const accordionContainers = document.querySelectorAll('#image-text-section-template--28684899876945__image_with_text_9Vm4Bn .accordion-items-wrapper');
    console.log('Found', accordionContainers.length, 'accordion containers');
    
    if (accordionContainers.length === 0) {
      console.log('No accordion containers found');
      return;
    }
    
    accordionContainers.forEach((container, containerIndex) => {
      console.log(`Processing container ${containerIndex + 1}`);
      const accordionItems = container.querySelectorAll('.accordion-item');
      const accordionMode = container.getAttribute('data-accordion-mode') === 'true';
      console.log(`Container ${containerIndex + 1} has ${accordionItems.length} items, accordion mode: ${accordionMode}`);
      
      accordionItems.forEach((item, itemIndex) => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        
        if (!header) {
          console.log(`No header found for item ${itemIndex + 1}`);
          return;
        }
        
        if (!content) {
          console.log(`No content found for item ${itemIndex + 1}`);
          return;
        }
        
        // Skip if already initialized
        if (header.hasAttribute('data-accordion-initialized')) {
          console.log(`Item ${itemIndex + 1} already initialized, skipping`);
          return;
        }
        
        console.log(`Setting up click handler for item ${itemIndex + 1}`);
        
        // Create the click handler function
        const clickHandler = function(e) {
          console.log(`Accordion item ${itemIndex + 1} clicked!`);
          e.preventDefault();
          e.stopPropagation();
          
          const isActive = item.classList.contains('active');
          console.log(`Item ${itemIndex + 1} is currently ${isActive ? 'active' : 'inactive'}`);
          
          // If in accordion mode, close all other items
          if (accordionMode && !isActive) {
            console.log('Accordion mode: closing other items');
            accordionItems.forEach((otherItem, otherIndex) => {
              if (otherItem !== item && otherItem.classList.contains('active')) {
                console.log(`Closing item ${otherIndex + 1}`);
                otherItem.classList.remove('active');
              }
            });
          }
          
          // Toggle the current item
          if (isActive) {
            console.log(`Closing item ${itemIndex + 1}`);
            item.classList.remove('active');
          } else {
            console.log(`Opening item ${itemIndex + 1}`);
            item.classList.add('active');
          }
          
          // Trigger custom event for tracking/analytics
          try {
            container.dispatchEvent(new CustomEvent('accordion:toggle', {
              detail: {
                item: item,
                isOpen: !isActive,
                text: header.querySelector('.accordion-header-text')?.textContent
              }
            }));
          } catch (err) {
            console.error('Error dispatching accordion event:', err);
          }
        };
        
        // Add the click listener
        header.addEventListener('click', clickHandler);
        
        // Store the handler reference for potential cleanup
        header._accordionClickHandler = clickHandler;
        
        // Mark as initialized
        header.setAttribute('data-accordion-initialized', 'true');
        
        // Add visual feedback on hover
        header.style.cursor = 'pointer';
        
        // Add keyboard support
        const keyHandler = function(e) {
          if (e.key === 'Enter' || e.key === ' ') {
            console.log(`Keyboard trigger for item ${itemIndex + 1}`);
            e.preventDefault();
            clickHandler(e);
          }
        };
        
        header.addEventListener('keydown', keyHandler);
        header._accordionKeyHandler = keyHandler;
        
        // Make header focusable for accessibility
        if (!header.hasAttribute('tabindex')) {
          header.setAttribute('tabindex', '0');
        }
        
        console.log(`Item ${itemIndex + 1} setup complete`);
      });
    });
    
    console.log('Accordion initialization complete');
  }

  // Function to manually test accordion (for debugging)
  function testAccordion() {
    console.log('Testing accordion functionality...');
    const firstItem = document.querySelector('#image-text-section-template--28684899876945__image_with_text_9Vm4Bn .accordion-item');
    if (firstItem) {
      console.log('Found first accordion item, toggling...');
      firstItem.classList.toggle('active');
      console.log('First item is now:', firstItem.classList.contains('active') ? 'active' : 'inactive');
      return true;
    } else {
      console.log('No accordion items found for testing');
      return false;
    }
  }

  // Initialize immediately if DOM is already ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      console.log('DOM Content Loaded - initializing components');
      initImageTextScrollToFirst();
      initScrollToProduct();
      initAccordions();
    });
  } else {
    // DOM is already ready
    console.log('DOM already ready - initializing components immediately');
    initImageTextScrollToFirst();
    initScrollToProduct();
    initAccordions();
  }
  
  // Also run on window load to ensure all elements are fully loaded
  window.addEventListener('load', function() {
    console.log('Window loaded - re-initializing components');
    initImageTextScrollToFirst();
    initScrollToProduct();
    initAccordions();
  });
  
  // Additional initialization for dynamic content
  document.addEventListener('shopify:section:load', function() {
    console.log('Shopify section loaded - initializing components');
    initImageTextScrollToFirst();
    initScrollToProduct();
    initAccordions();
  });

  // Backup initialization using setTimeout
  setTimeout(function() {
    console.log('Backup initialization running...');
    if (document.querySelector('#image-text-section-template--28684899876945__image_with_text_9Vm4Bn .accordion-items-wrapper') && !document.querySelector('#image-text-section-template--28684899876945__image_with_text_9Vm4Bn .accordion-header[data-accordion-initialized]')) {
      console.log('Found uninitialized accordions, running backup init');
      initAccordions();
    }
  }, 2000);

  // Make functions globally available for debugging
  window.debugAccordion = {
    init: initAccordions,
    test: testAccordion,
    toggle: function(index) {
      const items = document.querySelectorAll('#image-text-section-template--28684899876945__image_with_text_9Vm4Bn .accordion-item');
      if (items[index]) {
        items[index].classList.toggle('active');
        console.log(`Manually toggled item ${index + 1}`);
      }
    }
  };

  // Final fallback: try to initialize immediately
  try {
    console.log('Immediate initialization attempt...');
    initImageTextScrollToFirst();
    initScrollToProduct();
    initAccordions();
  } catch (err) {
    console.error('Immediate initialization failed:', err);
  }

document.addEventListener('DOMContentLoaded', function() {
  const stepsSection = document.querySelector('.section-template--28684899876945__steps_NPBhYa.results-steps-section');
  if (!stepsSection) return;

  // Get both desktop and mobile containers
  const desktopContainer = stepsSection.querySelector('.steps-container-desktop .steps-container');
  const mobileContainer = stepsSection.querySelector('.steps-container-mobile .steps-container');
  
  // Determine which container to use based on screen size and carousel settings
  function getActiveContainer() {
    const isMobile = window.innerWidth <= 768;
    if (isMobile && mobileContainer) {
      return mobileContainer;
    } else if (!isMobile && desktopContainer) {
      return desktopContainer;
    }
    return null;
  }
  
  // Initialize carousel for both containers
  function initializeCarousel(container) {
    if (!container || (!container.classList.contains('has-carousel-desktop') && !container.classList.contains('has-carousel-mobile'))) return null;

    const track = container.querySelector('.carousel-track');
    const slides = container.querySelectorAll('.carousel-slide');
    const prevBtn = container.closest('.steps-container-desktop, .steps-container-mobile').querySelector('.nav-button.prev');
    const nextBtn = container.closest('.steps-container-desktop, .steps-container-mobile').querySelector('.nav-button.next');

    if (!track || !slides.length || !prevBtn || !nextBtn) return null;

    const hasDesktopCarousel = container.classList.contains('has-carousel-desktop');
    const hasMobileCarousel = container.classList.contains('has-carousel-mobile');
    
    return {
      container,
      track,
      slides,
      prevBtn,
      nextBtn,
      hasDesktopCarousel,
      hasMobileCarousel,
      currentSlide: 0
    };
  }

  // Initialize both carousels
  let desktopCarousel = desktopContainer ? initializeCarousel(desktopContainer) : null;
  let mobileCarousel = mobileContainer ? initializeCarousel(mobileContainer) : null;
  
  // Get the active carousel based on screen size
  function getActiveCarousel() {
    const isMobile = window.innerWidth <= 768;
    return isMobile ? mobileCarousel : desktopCarousel;
  }
  
  function isCarouselActive(carousel) {
    if (!carousel) return false;
    const isMobile = window.innerWidth <= 768;
    return (isMobile && carousel.hasMobileCarousel) || (!isMobile && carousel.hasDesktopCarousel);
  }

  function getSlidesPerView(carousel) {
    if (!carousel) return 1;
    if (window.innerWidth <= 768 && carousel.hasMobileCarousel) {
      return 1; // Mobile carousel: 1 slide at a time
    }
    return Math.min(4, carousel.slides.length); // Desktop: max 4 slides
  }

  function updateCarousel(carousel) {
    if (!carousel || !isCarouselActive(carousel)) {
      return;
    }

    const slidesPerView = getSlidesPerView(carousel);
    const slideWidth = 100 / slidesPerView;
    const maxSlide = carousel.slides.length - slidesPerView;
    
    // Ensure currentSlide is within bounds
    carousel.currentSlide = Math.max(0, Math.min(carousel.currentSlide, maxSlide));
    
    const offset = -(carousel.currentSlide * slideWidth);
    carousel.track.style.transform = `translateX(${offset}%)`;

    // Update button states
    carousel.prevBtn.disabled = carousel.currentSlide === 0;
    carousel.nextBtn.disabled = carousel.currentSlide >= maxSlide;
  }

  function nextSlide() {
    const carousel = getActiveCarousel();
    if (!carousel || !isCarouselActive(carousel)) return;
    
    const slidesPerView = getSlidesPerView(carousel);
    const maxSlide = carousel.slides.length - slidesPerView;
    if (carousel.currentSlide < maxSlide) {
      carousel.currentSlide += (window.innerWidth <= 768 && carousel.hasMobileCarousel) ? 1 : slidesPerView;
      updateCarousel(carousel);
    }
  }

  function prevSlide() {
    const carousel = getActiveCarousel();
    if (!carousel || !isCarouselActive(carousel)) return;
    
    if (carousel.currentSlide > 0) {
      const slidesPerView = getSlidesPerView(carousel);
      carousel.currentSlide -= (window.innerWidth <= 768 && carousel.hasMobileCarousel) ? 1 : slidesPerView;
      updateCarousel(carousel);
    }
  }

  // Setup event listeners for a carousel
  function setupCarouselEvents(carousel) {
    if (!carousel) return;
    
    // Touch/swipe variables for this carousel
    let isDown = false;
    let startX = 0;
    let currentX = 0;
    let initialTransform = 0;
    let isDragging = false;
    const movementThreshold = 10; // Minimum pixels to detect intentional movement
    
    // Get current transform value
    function getCurrentTransform() {
      const slidesPerView = getSlidesPerView(carousel);
      const slideWidth = 100 / slidesPerView;
      return -(carousel.currentSlide * slideWidth);
    }

    // Touch/Mouse event handlers
    function handleStart(e) {
      if (!isCarouselActive(carousel)) return;
      
      // Reset all tracking variables
      isDown = true;
      isDragging = false;
      currentX = 0;
      
      // Get initial position for both X and Y
      startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
      const startY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
      
      // Store initial Y position for vertical scroll detection
      carousel.startY = startY;
      carousel.hasVerticalMovement = false;
      
      initialTransform = getCurrentTransform();
      
      // Add transition temporarily for smooth start
      carousel.track.style.transition = 'none';
      carousel.track.style.cursor = 'grabbing';
    }

    function handleMove(e) {
      if (!isDown || !isCarouselActive(carousel)) return;
      
      // Get current position
      currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
      const currentY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;
      
      // Calculate movement
      const deltaX = currentX - startX;
      const deltaY = currentY - carousel.startY;
      
      // Determine if this is primarily vertical or horizontal movement
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);
      
      // If vertical movement is greater than horizontal, allow default scrolling
      if (absY > absX && absY > movementThreshold) {
        carousel.hasVerticalMovement = true;
        return; // Don't interfere with vertical scrolling
      }
      
      // Only prevent default and handle carousel if horizontal movement is detected
      if (absX > movementThreshold && absX > absY) {
        e.preventDefault();
        isDragging = true;
        
      const movePercent = (deltaX / carousel.track.offsetWidth) * 100;
      
      // Apply transform with movement
      const newTransform = initialTransform + movePercent;
      carousel.track.style.transform = `translateX(${newTransform}%)`;
      }
    }

    function handleEnd(e) {
      if (!isDown || !isCarouselActive(carousel)) return;
      
      // Reset interaction state
      isDown = false;
      carousel.track.style.cursor = 'grab';
      carousel.track.style.transition = 'transform 0.3s ease';
      
      // If there was vertical movement, don't process as carousel interaction
      if (carousel.hasVerticalMovement) {
        updateCarousel(carousel); // Reset to current position
        isDragging = false;
        carousel.hasVerticalMovement = false; // Reset for next interaction
        return;
      }
      
      if (isDragging) {
        // Calculate swipe distance and direction
        const deltaX = currentX - startX;
        const threshold = 50; // Minimum distance for swipe
        
        if (Math.abs(deltaX) > threshold) {
          if (deltaX > 0) {
            // Swiped right, go to previous slide
            prevSlide();
          } else {
            // Swiped left, go to next slide
            nextSlide();
          }
        } else {
          // Snap back to current position
          updateCarousel(carousel);
        }
        
        // Prevent click events after drag
        setTimeout(() => {
          isDragging = false;
        }, 100);
      } else {
        // No significant movement, snap back
        updateCarousel(carousel);
      }
      
      // Reset movement tracking for next interaction
      carousel.hasVerticalMovement = false;
    }

    // Prevent click events during drag
    function handleClick(e) {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
      }
    }

    // Event listeners for buttons
    carousel.nextBtn.addEventListener('click', nextSlide);
    carousel.prevBtn.addEventListener('click', prevSlide);

    // Touch events for mobile (passive start, dynamic move)
    carousel.track.addEventListener('touchstart', handleStart, { passive: true });
    carousel.track.addEventListener('touchmove', handleMove, { passive: false });
    carousel.track.addEventListener('touchend', handleEnd, { passive: true });

    // Mouse events for desktop (only if not a touch device)
    if (!('ontouchstart' in window)) {
    carousel.track.addEventListener('mousedown', handleStart);
    carousel.track.addEventListener('mousemove', handleMove);
    carousel.track.addEventListener('mouseup', handleEnd);
    carousel.track.addEventListener('mouseleave', handleEnd);
    }

    // Prevent unwanted clicks during drag
    carousel.track.addEventListener('click', handleClick, true);

    // Set initial cursor
    carousel.track.style.cursor = 'grab';
    
    // Initialize this carousel
    updateCarousel(carousel);
  }

  // Setup both carousels
  if (desktopCarousel) {
    setupCarouselEvents(desktopCarousel);
  }
  if (mobileCarousel) {
    setupCarouselEvents(mobileCarousel);
  }

  // Handle resize
  window.addEventListener('resize', function() {
    // Reset both carousels to first slide when switching between desktop/mobile
    if (desktopCarousel) {
      desktopCarousel.currentSlide = 0;
      updateCarousel(desktopCarousel);
    }
    if (mobileCarousel) {
      mobileCarousel.currentSlide = 0;
      updateCarousel(mobileCarousel);
    }
  });
});

(function() {
    if (window.innerWidth < 750) {
      document.documentElement.classList.add('faq-mobile-view');
    }
  })();

jdgm.data ||= {}; jdgm.data.reviewWidget ||= {};
  jdgm.data.reviewWidget[15590201819217] = {"number_of_reviews":0,"average_rating":"0.00","number_of_questions":0,"product_name":"مضخة الحليب اللاسلكية Tighli","product_external_id":15590201819217,"image_url":"https://cdn.shopify.com/s/files/1/0975/2549/7937/files/yuri2.jpg?v=1770165753","histogram":[{"rating":5,"frequency":0,"percentage":0,"extra_class":null},{"rating":4,"frequency":0,"percentage":0,"extra_class":null},{"rating":3,"frequency":0,"percentage":0,"extra_class":null},{"rating":2,"frequency":0,"percentage":0,"extra_class":null},{"rating":1,"frequency":0,"percentage":0,"extra_class":null}],"review_keywords":null,"product_medals":[],"custom_form_filters_and_averages":null,"photo_gallery":null,"review_summary_text":"كوني أول من يكتب تقييماً","ai_summary_text":"","sort_key":"pictures_first","multi_language_sorting_enabled":false,"reviews":[],"pagination":{"total_pages":0,"current_page":1,"per_page":5}}

window.shopUrl = 'https://officialyuri.com';
      window.routes = {
        cart_add_url: '/cart/add',
        cart_change_url: '/cart/change',
        cart_update_url: '/cart/update',
        cart_url: '/cart',
        predictive_search_url: '/search/suggest',
      };

      window.cartStrings = {
        error: `There was an error while updating your cart. Please try again.`,
        quantityError: `You can only add [quantity] of this item to your cart.`,
      };

      window.variantStrings = {
        addToCart: `طلب الآن (التوصيل فابور)`,
        soldOut: `Sold out`,
        unavailable: `Unavailable`,
        unavailable_with_option: `[value] - Unavailable`,
      };

      window.accessibilityStrings = {
        imageAvailable: `Image [index] is now available in gallery view`,
        shareSuccess: `Link copied to clipboard`,
        recipientFormExpanded: `Gift card recipient form expanded`,
        recipientFormCollapsed: `Gift card recipient form collapsed`,
        countrySelectorSearchCount: `[count] countries/regions found`,
      };

document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
      if (Shopify.designMode) {
        document.documentElement.classList.add('shopify-design-mode');
      }

if (!window.EcoBoostify) {
    window.EcoBoostify = {};
  }
  if (!window.EcoBoostify.config) {
    window.EcoBoostify.config = {};
  }
  if (!window.EcoBoostify.config.global) {
    window.EcoBoostify.config.global = {
      moneyFormat: "${{amount}}",
      moneyWithCurrencyFormat: "${{amount}} USD",
      currentProductHandle: 'collagen-night-wrapping-mask',
      currentProduct: {"id":15590201819217,"title":"مضخة الحليب اللاسلكية Tighli","handle":"collagen-night-wrapping-mask","description":"","published_at":"2025-11-03T12:08:57-05:00","created_at":"2025-10-31T17:30:00-04:00","vendor":"YURI Beauty","type":"","tags":[],"price":4500,"price_min":4500,"price_max":4500,"available":true,"price_varies":false,"compare_at_price":9000,"compare_at_price_min":9000,"compare_at_price_max":9000,"compare_at_price_varies":false,"variants":[{"id":58337689632849,"title":"Default Title","option1":"Default Title","option2":null,"option3":null,"sku":"J20300-Customized","requires_التوصيل":true,"taxable":true,"featured_image":null,"available":true,"name":"مضخة الحليب اللاسلكية Tighli","public_title":null,"options":["Default Title"],"price":4500,"weight":0,"compare_at_price":9000,"inventory_management":"shopify","barcode":"","requires_selling_plan":false,"selling_plan_allocations":[{"price_adjustments":[{"position":1,"price":3500}],"price":3500,"compare_at_price":4500,"per_delivery_price":3500,"selling_plan_id":1703968849,"selling_plan_group_id":"ce3ddb3e47f36c4ad02f48131c0ac9c429e87d0f"}],"quantity_rule":{"min":1,"max":null,"increment":1}}],"images":["tighli-assets/product-main.jpg","tighli-assets/product-components.jpg","tighli-assets/review-1-nursery.jpg","tighli-assets/review-2-handheld.jpg","tighli-assets/product-screen.jpg","tighli-assets/product-lifestyle.jpg","tighli-assets/product-safety.jpg","tighli-assets/why-1-massage.jpg","tighli-assets/why-2-battery.jpg","tighli-assets/why-3-silent.jpg"],"featured_image":"tighli-assets/product-main.jpg","options":["Title"],"media":[{"alt":null,"id":70392114053201,"position":1,"preview_image":{"aspect_ratio":1.0,"height":1352,"width":1352,"src":"tighli-assets/product-main.jpg"},"aspect_ratio":1.0,"height":1352,"media_type":"image","src":"tighli-assets/product-main.jpg","width":1352},{"alt":null,"id":67859243073617,"position":2,"preview_image":{"aspect_ratio":1.0,"height":2000,"width":2000,"src":"tighli-assets/product-components.jpg"},"aspect_ratio":1.0,"height":2000,"media_type":"image","src":"tighli-assets/product-components.jpg","width":2000},{"alt":null,"id":67481776422993,"position":3,"preview_image":{"aspect_ratio":1.0,"height":823,"width":823,"src":"tighli-assets/review-1-nursery.jpg"},"aspect_ratio":1.0,"height":823,"media_type":"image","src":"tighli-assets/review-1-nursery.jpg","width":823},{"alt":null,"id":67481780846673,"position":4,"preview_image":{"aspect_ratio":1.0,"height":1060,"width":1060,"src":"tighli-assets/review-2-handheld.jpg"},"aspect_ratio":1.0,"height":1060,"media_type":"image","src":"tighli-assets/review-2-handheld.jpg","width":1060},{"alt":null,"id":67859245138001,"position":5,"preview_image":{"aspect_ratio":1.0,"height":2000,"width":2000,"src":"tighli-assets/product-screen.jpg"},"aspect_ratio":1.0,"height":2000,"media_type":"image","src":"tighli-assets/product-screen.jpg","width":2000},{"alt":null,"id":67859245596753,"position":6,"preview_image":{"aspect_ratio":1.0,"height":2000,"width":2000,"src":"tighli-assets/product-lifestyle.jpg"},"aspect_ratio":1.0,"height":2000,"media_type":"image","src":"tighli-assets/product-lifestyle.jpg","width":2000},{"alt":null,"id":67859246481489,"position":7,"preview_image":{"aspect_ratio":1.0,"height":2000,"width":2000,"src":"tighli-assets/product-safety.jpg"},"aspect_ratio":1.0,"height":2000,"media_type":"image","src":"tighli-assets/product-safety.jpg","width":2000},{"alt":null,"id":67859247300689,"position":8,"preview_image":{"aspect_ratio":1.0,"height":2000,"width":2000,"src":"tighli-assets/why-1-massage.jpg"},"aspect_ratio":1.0,"height":2000,"media_type":"image","src":"tighli-assets/why-1-massage.jpg","width":2000},{"alt":null,"id":67859248152657,"position":9,"preview_image":{"aspect_ratio":1.0,"height":2000,"width":2000,"src":"tighli-assets/why-2-battery.jpg"},"aspect_ratio":1.0,"height":2000,"media_type":"image","src":"tighli-assets/why-2-battery.jpg","width":2000},{"alt":null,"id":67859248382033,"position":10,"preview_image":{"aspect_ratio":1.0,"height":2000,"width":2000,"src":"tighli-assets/why-3-silent.jpg"},"aspect_ratio":1.0,"height":2000,"media_type":"image","src":"tighli-assets/why-3-silent.jpg","width":2000}],"requires_selling_plan":false,"selling_plan_groups":[{"id":"ce3ddb3e47f36c4ad02f48131c0ac9c429e87d0f","name":"Subscribe \u0026 save 20%","options":[{"name":"Deliver every month","position":1,"values":["month"]}],"selling_plans":[{"id":1703968849,"name":"Monthly Refill","description":"","options":[{"name":"Deliver every month","position":1,"value":"month"}],"recurring_deliveries":true,"price_adjustments":[{"order_count":null,"position":1,"value_type":"fixed_amount","value":1000}],"checkout_charge":{"value_type":"percentage","value":100}}],"app_id":"Seal Subscriptions"}],"content":""}
    };
  }

if (!window.EcoBoostify) {
    window.EcoBoostify = {};
  }
  if (!window.EcoBoostify.config) {
    window.EcoBoostify.config = {};
  }