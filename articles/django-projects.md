---
title: "چگونه پروژه جنگو را روی فندق دیپلوی کنیم؟"
description: "توی این آموزش قدم به قدم یک پروژه جنگو رو داکرایز می‌کنیم و روی فندق اجرا می‌کنیم"
thumbnail: "/articles/django.png"
link: "/articles/django-projects.html"
date: "۲ مرداد ۱۳۹۷"
order: 5
---

برای دیپلوی کردن پروژه جنگو یا هر پروژه دیگه‌ای روی فندق لازمه که پروژه داکرایز بشه، یعنی این قابلیت رو داشته باشه که روی یک Docker container به درستی اجرا بشه.
شاید یکم پیچیده به نظر برسه اما اگر این آموزش رو قدم به قدم پیش برید به سادگی می‌تونید اینکار رو انجام بدید.
وقتی پروژه جنگو رو میخواید در قالب یک Container اجرا کنید باید اولا چند تا تغییر کوچک روی پروژه بدید و دوما یک Dockerfile برای پروژه بنویسید،‌ که هر کدوم رو توضیح میدم:

## تغییرات پروژه

چند تا تغییر توی کد پروژه باید مد نظر قرار بدید که با هم بررسی می‌کنیم:

### دیتابیس

پروژه‌های جنگو تقریبا همیشه یک دیتابیسی دارند، مهم نیست دیتابیس شما Sqlite باشه یا MySQL یا Postgresql یا هر چیز دیگه‌ای می‌تونید از فندق استفاده کنید اما در مورد هر دیتابیسی یه سری نکات هست باید حواستون باشه:

#### نکات مربوط به دیتابیس Sqlite

دیتابیس Sqlite برای ذخیره سازی اطلاعات از یک فایل استفاده می‌کنه و اگر جنگو کار کرده باشید می‌دونید که به طور پیش‌فرض اون فایل رو همونجا کنار فایل `manage.py‍‍‍` می‌سازه و این دقیقا یکی از مسائلی هستش که باید توی داکرایز کردن مورد توجه قرار بدید.
فضایی که داخل container ها وجود داره مانا نیست، یعنی هر زمانی ممکنه container ریست بشه و اون فضا به طور کل خالی میشه و از نو ساخته میشه پس اگر دیتابیس یا فایل لاگ یا هر دیتای دیگه‌ای که زمان اجرا تولید میشه رو اونجا قرار بدید اطلاعاتتون رو ممکنه از دست بدید.
یکی از امکاناتی که فندق در اختیار کاربرانش قرار میده یک فضای مانا هستش، فضایی که متعلق به کاربر هستش و می‌تونه با اطمینان داخلش بنویسه.
این فضا توی آدرس `/mnt/shared-volume` قابل دسترس هستش، کافیه که به جنگو بگید فایل دیتابیس رو اونجا بسازه.
برای اینکار کافیه توی `settings.py` به این شکل `DATABASE` رو تنظیم کنید:

```
PERSISTENT_STORAGE = "/mnt/shared-volume"
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(PERSISTENT_STORAGE, 'db.sqlite3'),
    }
}
```

اول یک متغیر تعریف کردیم که حاوی آدرس `/mnt/shared-volume` هستش و بعد هم با به کمک `os.path.join‍‍` مشخص کردیم که محلی که جنگو برای ذخیره دیتابیس باید استفاده کنه باید `/mnt/shared-volume/db.sqlite3` باشه.

#### نکات مربوط به دیتابیس MySQL

برای دیتابیس MySQL به طور خاص می‌تونید از قابلیت managed-service استفاده کنید، این قابلیت یک دیتابیس MySQL برای شما ایجاد می‌کنه و با نام‌کاربری و رمزعبوری که انتخاب می‌کنید روی آدرس دلخواه شما در اختیار شما قرار میده.
برای ساخت یک دیتابیس MySQL باید از fandogh_cli استفاده کنید و می‌تونید روش انجام اینکار رو **[اینجا](https://github.com/fandoghpaas/fandogh-cli#managed-services)** مطالعه کنید.
مثلا با چنین دستوری یک سرویس MySQL برای شما ساخته میشه:

```
 fandogh managed-service deploy mysql 9.4 \
 -c service_name=my-database \
 -c phpmyadmin_enabled=true \
 -c mysql_root_password=test123
```

توجه داشته باشید که اسم سرویسی که انتخاب کردید مهم هستش، اگر اسمی انتخاب نکنید به صورت پیشفرض نام سرویس mysql خواهد بود، مثلا من اینجا my-database رو به عنوان اسم سرویس انتخاب کردم اگر انتخاب نمی‌کردم همون mysql اسم سرویسم میشد.
دقت کنید که باید اول از طریق PHPMyAdminای که برای شما ساخته میشه یک دیتابیس بسازید، کافیه روی لینکی که که از fandogh_cli گرفتید کلیک کنید با یوزرنیم root و پسوردی که انتخاب کردید وارد PHPMyAdmin بشید.
حالا داخل PHPMyAdmin می‌تونید به سادگی دیتابیس رو بسازید، اگر یک نگاهی به منو ها بندازید کار سختی نیست راحت می‌تونید بسازید ولی اگر مشکلی خوردید **[این آموزش](http://webvaultwiki.com.au/Default.aspx?Page=Create-Mysql-Database-User-Phpmyadmin&NS=&AspxAutoDetectCookieSupport=1)** رو دنبال کنید.
حالا با داشتن username و password و database name میتونید به سادگی تنظیمات جنگو رو مشخص کنید تا از MySQL استفاده کنه:

```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'my-project',
        'USER': 'root',
        'PASSWORD': 'test123',
        'HOST': 'my-database',
        'PORT': '3306',
    }
}
```

دقت کنید که به جای HOST باید مقداری که به عنوان service_name موقع ساخت سرویس استفاده کردید رو بنویسید.

#### نکات مربوط به دیتابیس‌های دیگر

برای بقیه دیتابیس‌ها هم کار سختی نیست، کافیه که توی [docker hub ](https://hub.docker.com/explore/) سرچ کنید داکرفایلشون رو پیدا کنید و [سرویستون رو از روی داکرفایل اون‌ها بسازید.](http://blog.fandogh.cloud/articles/fandogh-introduction.html) البته اگر کمکی نیاز داشتید می‌دونید که ما همیشه آماده پاسخگویی به شما دوستان عزیز هستیم.

### استفاده از Environment variables

نکاتی که تا الان گفتیم رو به همون شکلی که توضیح دادیم می‌تونید استفاده کنید، اما بهتر این هستش که یک سری مقادیر که تغییر می‌کنه اینطوری داخل کد نوشته نشه، مثلا HOSTای که برای MySQL استفاده می‌کنید یا USERNAME و PASSWORD بهتر هستش که از environment variables خونده بشه، ما هم توی این آموزش همین کار رو می‌کنیم، مثلا برای MySQL این تنظیمات رو استفاده می‌کنیم:

```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': os.environ.get("MYSQL_DB_NAME"),
        'USER': os.environ.get("MYSQL_USERNAME"),
        'PASSWORD': os.environ.get("MYSQL_PASSWORD"),
        'HOST': os.environ.get("MYSQL_HOST_NAME"),
        'PORT': '3306',
    }
}
```

به این ترتیب ما توی کد هیچ کدام از مقادیر متغیر رو قرار ندادیم و لازمه که موقع دیپلوی سرویس این مقادیر رو در اختیار app قرار بدیم، که جلوتر در موردش صحبت می‌کنیم.
در مورد مقدار متغیر ‍‍`PERSISTENT_STORAGE` هم می‌تونیم همین کار رو بکنیم:

```
PERSISTENT_STORAGE = os.environ.get("PERSISTENT_STORAGE")

```

## نوشتن داکرفایل

در درجه اول توصیه می‌کنم حتما مستندات خود داکر رو در این مورد بخونید:
https://docs.docker.com/engine/reference/builder/#usage
برای توضیح داکر فایل اجازه بدید از یک مثال واقعی استفاده کنیم که می‌تونید کد مربوط بهش رو به طور کامل اینجا ملاحظه کنید:
https://github.com/fandoghpaas/bestoon

داکر فایل این پروژه جنگو به این شکل نوشته شده:

```
FROM python:2
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD . /code/
ENTRYPOINT ["sh","/code/run_bestoon.sh"]
```

خط به خط با هم داکرفایل رو بررسی کنیم:
خط **FROM** به معنی این هستش که این ایمیج باید بر اساس ایمیج پایتون ساخته شود، یعنی اگر فقط همین یک خط داخل داکر فایل باشد، یک کانتینر ساخته میشه که روش پایتون نصب هستش، اون عدد ۲ جلوی پایتون به معنی ورژن پایتون هستش، می‌تونید عدد ۳ بذارید برای پایتون ۳
خط **ENV** برای ست کردن یک Environment variable استفاده میشه، توی این خط داریم مقدار PYTHONUNBUFFERED=1 رو داخل environment variableهای کانتینر ست می‌کنیم.
خط **RUN** به معنی اجرا یک کامند لینوکسی هستش، که داخل کامند داریم با mkdir یک دایرکتوری داخل کانتینر درست می‌کنیم به نام code
خط **WORKDIR** مثل cd در لینوکس عمل می‌کنه، و باعث میشه بقیه دستورات داخل دایرکتوری code اجرا بشند.
خط **ADD** فایل requirements.txt رو از کنار داکرفایل برمیداره و داخل کانتینر کپی می‌کنه(داخل دایرکتوری /code)
خط بعدی باز **RUN** هستش، و داریم با `pip install -r requirements.txt‍` نیازمندی‌های پروژه رو نصب می‌کنیم.
خط بعدی کل دایرکتوری رو کپی می‌کنه داخل دایرکتوری /code توی کانتینر
و خط آخر، خط آخر **ENTRYPOINT** داره میگه که موقعی که کانتینر ایجاد شد اولین کامندی که داخل اجرا میشه چه کامندی هستش، که همون طور که میبینید اجرای یک اسکریپت هستش.
بذارید داخل اون اسکریپت رو هم ببینیم:

```
#!/bin/bash
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

این اسکریپت اول migration ها رو اجرا می‌کنه و بعد هم پروژه جنگو رو روی پورت ۸۰۰۰ ران می‌کنه.
اگر مثلا به collectstatic یا هر کامند دیگه‌ای هم نیاز باشه توی همین فایل اسکریپت می‌تونیم اضافه‌اش کنیم.

حالا در نهایت برای اجرای این پروژه روی فندق اول باید لاگین کنیم `fandogh login` و بعد ایمیج بسازیم `fandogh image init` و در نهایت می‌تونیم این فایل‌ها رو به عنوان اولین ورژن از پروژه روی فندق منتشر کنیم `fandogh image publish` اگر همه چیز خوب پیش رفته باشه، باید ایمیج به درستی روی سرور فندق بیلد شده باشه:

```
fandogh image versions
```

اگر وضعیت ایمیج BUILT بود یعنی تا اینجا همه چیز اوکیه!
توی فایل settings.py این پروژه، دیتابیس به این شکل مشخص شده:

```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': os.environ.get('DB_NAME', 'bestoon'),
        'USER': os.environ.get('DB_USERNAME', 'root'),
        'PASSWORD': os.environ.get('DB_PASSWORD', 'root'),
        'HOST': os.environ.get('DB_HOST', 'mysql'),
    }
}
```

پس موقع دیپلوی سرویس این متغیر ها رو باید پاس بدیم:

```
fandogh service deploy\
-e DB_NAME=mydatabase \
-e DB_USERNAME=root \
-e DB_PASSWORD=somepassword \
-e DB_HOST=my-database\
-p 8000

```

توجه داشته باشید که شما بایدآدرس سرویس خود بر روی سرور فندق را در فایل settings.py پروژه خود به متغیر ALLOWED_HOSTS اضافه کنید.

فرمت این آدرس به صورت پیش فرض به شکل زیر است:

```
{YOUR_SERVICE_NAME}-{YOUR_NAMESPACE}.fandogh.cloud
```

همچنین توجه کنید که:

- باید قبلا mysql server شما به این شکل دیپلوی شده باشه

```
fandogh managed-service deploy mysql 9.1 \
-c service_name=my-database \
-c mysql_root_password=somepassword \
```

- از طریق PHPMyAdmin دیتابیس رو ساخته باشید!

کلیت داستان داکرایز کردن همین بود، هر گونه سوال یا کمک نیاز داشتید از طریق [ایشوهای گیتهاب](https://github.com/fandoghpaas/fandogh-cli/issues) با ما تماس بگیرید.
