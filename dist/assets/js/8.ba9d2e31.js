(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{150:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("p",[a("img",{attrs:{src:"/articles/mattermost_messenger.png",alt:"Mattermost",title:"Mattermost"}})]),t._v(" "),a("p",[t._v("برنامه Mattermost یک سرویس پیام‌رسان است که عمده استفاده از آن برای شرکت‌ها بوده و از محبوبیت بالایی برخوردار است. این برنامه این قابلیت را دارد که به صورت رایگان بر روی سرورهای شخصی مورد استفاده قرار گیرد٬به همین منظور ما هم تصمیم گرفتیم یک پست براتون آماده کنیم و در مورد نحوه دیپلوی کردن این سرویس بر روی فندق توضیح مختصری بدیم.\nبرای "),a("strong",[t._v("deploy")]),t._v(" کردن این سرویس کافی است به ترتیب زیر عمل کنید.\n"),a("br"),a("br")]),t._v(" "),a("p",[t._v("۱- ابتدا با دستور زیر وارد حساب کاربری خود شوید.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("fandogh login\n")])])]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("۲- سپس با استفاده از دستور زیر یک دیتابیس برای برنامه mattermost ایجاد نمایید.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("fandogh managed-service deploy postgresql 10.4 \\\n -c service_name=chat-db \\\n -c adminer_enabled=true \\\n -c postgres_password=postgres\n")])])]),a("br"),t._v(" "),a("p",[t._v("۳- سپس از طریق لینکی که در اختیارتان قرار داده می‌شود وارد صفحه "),a("strong",[t._v("adminer")]),t._v(" شوید و دیتابیس مورد نیاز را بر روی PostgreSQL قرار دهید و نام کاربری که postgres می‌باشد و رمز عبور را که در دستور بالا به عنوان مقدار برای postgres_password انتخاب کرده‌اید قرار دهید.\nبعد از آنکه وارد شدید٬ یک دیتابیس با نام دلخواه ایجاد کنید٬ ما در اینجا برای مثال نام دیتابیس را mm در نظر گرفته‌ایم.\n"),a("br")]),t._v(" "),a("p",[t._v("۴- در انتها بعد از آنکه کار با دیتابیس RUN تمام شد٬ مشخصات زیر را کپی کرده و بر روی سیستم خود در یک فایل جدید با فرمت "),a("strong",[t._v("yml.")]),t._v(" ذخیره نمایید.\n"),a("br")]),t._v(" "),a("blockquote",[a("p",[t._v("توجه داشته باشید که DB_HOST همان نام دیتابیس است که در قدم دوم انتخاب کرده‌اید.\n"),a("br")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("kind: ExternalService\nname: chat\nspec:\n  image: mattermost/mattermost-prod-app:5.6.1\n  port: 8000\n  env:\n    - name: DB_HOST\n      value: chat-db\n    - name: DB_PORT\n      value: 5432\n    - name: MM_USERNAME\n      value: postgres\n    - name: MM_PASSWORD\n      value: postgres\n    - name: MM_DBNAME\n      value: mm\n  volume_mounts:\n    - mount_path: /mattermost/data\n      sub_path: chat/data\n      volume_name: chat-volume\n    - mount_path: /mattermost/logs\n      sub_path: chat/logs\n      volume_name: chat-volume\n    - mount_path: /mattermost/plugins\n      sub_path: chat/plugins\n      volume_name: chat-volume\n")])])]),t._v(" "),a("br"),t._v("\n> توجه داشته باشید MM_PASSWORD در این فایل تنها برای آزمایش می‌باشد و باید یک password مناسب‌تری را انتخاب نمایید.\n"),a("br"),t._v("\n۴- سپس با استفاده از **cli** به آدرسی که فایل **yml.**  را در آنجا ذخیره کرده‌اید بروید و دستور زیر را اجرا نمایید.\n```\nfandogh service apply -f {path_to_yml_file}/your_file.yml\n```\n"),a("br"),t._v(" "),a("p",[t._v("بعد از اینکه این دستور را اجرا کردید٬ سرور بقیه کارها را انجام می‌دهد و در کمتر از یک دقیقه برنامه شما بر روی URL که cli به شما می‌دهد قابل دسترسی می‌باشد و می‌توانید آن را با همکاران و دوستان خود به اشتراک بگذارید.")]),t._v(" "),a("blockquote",[a("p",[t._v("توجه داشته باشید در صورتی که از قابلیت "),a("strong",[t._v("سرویس رایگان")]),t._v(" استفاده می‌کنید٬باید خط‌های مربوط به volume_name را از مانیفست بالا حذف کنید در غیر این صورت با خطا مواجه خواهید شد.")])]),t._v(" "),a("blockquote",[a("p",[t._v("فایل های شما در حالت "),a("strong",[t._v("حساب رایگان")]),t._v(" بر روی "),a("strong",[t._v("Shared Storage")]),t._v(" مربوط به namesapce شما ذخیره می‌شود که این فضا محدود است و بین تمام سرویس های شما اشتراک گذاری شده است.")])])])}],!1,null,null,null);s.options.__file="mattermost-deployment-post.md";e.default=s.exports}}]);