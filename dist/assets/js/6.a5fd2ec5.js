(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(a,e,t){"use strict";t.r(e);var s=t(2),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"چطور-از-دامنه-شخصی-خود-برای-سرویس-فندق-استفاده-کنیم؟"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#چطور-از-دامنه-شخصی-خود-برای-سرویس-فندق-استفاده-کنیم؟","aria-hidden":"true"}},[a._v("#")]),a._v(" چطور از دامنه شخصی خود برای سرویس فندق استفاده کنیم؟")]),a._v(" "),t("p",[a._v("مواردی وجود دارد که کاربران نیاز دارند تا برای سرویس های خود روی فندق از دامنه دلخواهی مثل\n"),t("code",[a._v("api.my-domain.com")]),a._v("\nاستفاده کنند.این کار به سادگی توسط fandogh-CLI امکان پذیر است، ابتدا باید دامنه را ثبت و مالکیت خود را اثبات کنید سپس می‌توانید سرویس را روی دامنه مورد نظر deploy کنید.")]),a._v(" "),t("h2",{attrs:{id:"ثبت-دامنه-جدید-در-فندق"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ثبت-دامنه-جدید-در-فندق","aria-hidden":"true"}},[a._v("#")]),a._v(" ثبت دامنه جدید در فندق")]),a._v(" "),t("p",[a._v("ابتدا در CLI ‌لاگین کنید سپس دستور زیر را اجرا کنید:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ fandogh domain add --name api.my-domain.com\n")])])]),t("p",[a._v("با اجرای این دستور دامنه مورد نظر در اکانت شما  ثبت می‌شود و یک Key ‌نمایش داده می‌شود. برای اینکه مالکیت خود را روی دامنه اثبات کنید لازم است یک TXT رکورد روی دامنه  "),t("code",[a._v("api.my-domain.com")]),a._v(" ایجاد کنید و مقدار Key ای که از CLI دریافت کردید را در آنجا قرار دهید.\nاگر TXT record ‌به درستی تنظیم شده باشد دامنه شما تایید می‌شود و به اکانت فندق شما اضافه می‌شود.")]),a._v(" "),t("h2",{attrs:{id:"deploy-سرویس-روی-دامنه-مورد-نظر"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-سرویس-روی-دامنه-مورد-نظر","aria-hidden":"true"}},[a._v("#")]),a._v(" deploy سرویس روی دامنه مورد نظر")]),a._v(" "),t("p",[a._v("deploy سرویس روی دامنه مورد نظر مثل deploy هر سرویس دیگری است تنها کافیست از سوئیچ "),t("code",[a._v("host—-")]),a._v(" استفاده کنید:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("fandogh service deploy --hosts api.my-domain.com\n\n")])])]),t("p",[a._v("به این ترتیب اگر دامنه به درستی ثبت و تایید شده باشد سرویس شما deploy می‌شود و روی آدرس مورد نظر قابل دسترس است.")]),a._v(" "),t("h2",{attrs:{id:"تنظیم-کردن-cname"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#تنظیم-کردن-cname","aria-hidden":"true"}},[a._v("#")]),a._v(" تنظیم کردن CNAME")]),a._v(" "),t("p",[a._v("توجه داشته باشید که باید روی DNS Server دامنه مورد نظر یک CNAME  به آدرس فندق سرویس خود ایجاد کنید.\nمثلا اگر نام سرویس شما some-api  است و نام namespace شما my-company است آدرس فندق سرویس شما\n"),t("code",[a._v("some-api-my-company.fandogh.cloud")]),a._v(" خواهد بود و به یک رکورد CNAME در "),t("code",[a._v("api.my-domain.com")]),a._v(" ‌نیاز دارید که به آدرس فندقی اشاره کند.")])])}],!1,null,null,null);n.options.__file="how-to-use-custom-domain.md";e.default=n.exports}}]);